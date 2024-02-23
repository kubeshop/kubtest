// Copyright 2024 Testkube.
//
// Licensed as a Testkube Pro file under the Testkube Community
// License (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
//
//     https://github.com/kubeshop/testkube/blob/main/licenses/TCL.txt

package expressionstcl

import (
	"fmt"
	"maps"
	"strings"
)

type call struct {
	name string
	args []Expression
}

func newCall(name string, args []Expression) Expression {
	return &call{name: name, args: args}
}

func (s *call) WillBeString() bool {
	return s.name == "string"
}

func (s *call) String() string {
	args := make([]string, len(s.args))
	for i, arg := range s.args {
		args[i] = arg.String()
	}
	return fmt.Sprintf("%s(%s)", s.name, strings.Join(args, ","))
}

func (s *call) SafeString() string {
	return s.String()
}

func (s *call) Template() string {
	if s.name == "string" {
		args := make([]string, len(s.args))
		for i, a := range s.args {
			args[i] = a.Template()
		}
		return strings.Join(args, "")
	}
	return "{{" + s.String() + "}}"
}

func (s *call) isResolved() bool {
	for i := range s.args {
		if s.args[i].Static() == nil {
			return false
		}
	}
	return true
}

func (s *call) resolvedArgs() []StaticValue {
	v := make([]StaticValue, len(s.args))
	for i, vv := range s.args {
		v[i] = vv.Static()
	}
	return v
}

func (s *call) Simplify(m MachineCore) (v Expression, err error) {
	for i, arg := range s.args {
		s.args[i], err = arg.Simplify(m)
		if err != nil {
			return nil, err
		}
	}
	if s.isResolved() {
		args := s.resolvedArgs()
		result, ok, err := StdLibMachine.Call(s.name, args...)
		if ok {
			if err != nil {
				return nil, fmt.Errorf("error while calling %s: %s", s.String(), err.Error())
			}
			return result, nil
		}
		if m != nil {
			result, ok, err = m.Call(s.name, args...)
			if err != nil {
				return nil, fmt.Errorf("error while calling %s: %s", s.String(), err.Error())
			}
			if ok {
				return result, nil
			}
		}
	}
	return s, nil
}

func (s *call) Static() StaticValue {
	return nil
}

func (s *call) Accessors() map[string]struct{} {
	result := make(map[string]struct{})
	for i := range s.args {
		maps.Copy(result, s.args[i].Accessors())
	}
	return result
}

func (s *call) Functions() map[string]struct{} {
	result := make(map[string]struct{})
	for i := range s.args {
		maps.Copy(result, s.args[i].Functions())
	}
	result[s.name] = struct{}{}
	return result
}
