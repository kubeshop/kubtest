#!/bin/sh

##   Licensed to the Apache Software Foundation (ASF) under one or more
##   contributor license agreements.  See the NOTICE file distributed with
##   this work for additional information regarding copyright ownership.
##   The ASF licenses this file to You under the Apache License, Version 2.0
##   (the "License"); you may not use this file except in compliance with
##   the License.  You may obtain a copy of the License at
## 
##       http://www.apache.org/licenses/LICENSE-2.0
## 
##   Unless required by applicable law or agreed to in writing, software
##   distributed under the License is distributed on an "AS IS" BASIS,
##   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
##   See the License for the specific language governing permissions and
##   limitations under the License.

##   To change the RMI/Server port:
##
##   SERVER_PORT=1234 jmeter-server
##

DIRNAME=`dirname $0`

# If the client fails with:
# ERROR - jmeter.engine.ClientJMeterEngine: java.rmi.ConnectException: Connection refused to host: 127.0.0.1
# then it may be due to the server host returning 127.0.0.1 as its address 

# One way to fix this is to define RMI_HOST_DEF below
#RMI_HOST_DEF=-Djava.rmi.server.hostname=xxx.xxx.xxx.xxx

${DIRNAME}/jmeter ${RMI_HOST_DEF} -Dserver_port=${SERVER_PORT:-1099} -s "$@"