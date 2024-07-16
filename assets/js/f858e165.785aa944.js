"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),o=n(86010),a=n(35281),s=n(95999);const i="admonition_LlT9",l="admonitionHeading_tbUL",p="admonitionIcon_kALy",u="admonitionContent_S0QG";const m={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(s.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(s.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(s.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(s.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(s.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>{var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function g(e){const{children:t,type:n,title:s,icon:g}=d(e),h=function(e){const t=c[e]??e;return m[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(n),f=s??h.label,{iconComponent:b}=h,k=g??r.createElement(b,null);return r.createElement("div",{className:(0,o.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert",`alert--${h.infimaClassName}`,i)},r.createElement("div",{className:l},r.createElement("span",{className:p},k),f),r.createElement("div",{className:u},t))}},78073:(e,t,n)=>{n.r(t),n.d(t,{ExecutorInfo:()=>m,assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(23612);const s={},i="JMeter",l={unversionedId:"test-types/executor-jmeter",id:"test-types/executor-jmeter",title:"JMeter",description:"JMeter is an integral part of Testkube. The Testkube JMeter executor is installed by default during the Testkube installation.",source:"@site/docs/test-types/executor-jmeter.md",sourceDirName:"test-types",slug:"/test-types/executor-jmeter",permalink:"/test-types/executor-jmeter",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/test-types/executor-jmeter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gradle",permalink:"/test-types/executor-gradle"},next:{title:"K6",permalink:"/test-types/executor-k6"}},p={},u=[{value:"Running a JMeter Test",id:"running-a-jmeter-test",level:2},{value:"Using Files as Input",id:"using-files-as-input",level:3},{value:"Using Additional JMeter Arguments in Your Tests",id:"using-additional-jmeter-arguments-in-your-tests",level:3},{value:"<strong>JMeter Test Results</strong>",id:"jmeter-test-results",level:3},{value:"<strong>JMeter Memory Consumption</strong>",id:"jmeter-memory-consumption",level:3}],m=()=>(0,o.kt)("div",null,(0,o.kt)(a.Z,{type:"info",icon:"\ud83c\udf93",title:"What is JMeter?",mdxType:"Admonition"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Apache JMeter is an open-source, pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.")),(0,o.kt)("b",null,"What can I do with JMeter?"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"JMeter can be used to test performance both on static and dynamic resources and Web dynamic applications."),(0,o.kt)("li",null,"It can also be used to simulate a heavy load on a server, group of servers, network, or object to test its strength or to analyze overall performance under different load types.")))),c={toc:u,ExecutorInfo:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jmeter"},"JMeter"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://jmeter.apache.org/"},"JMeter")," is an integral part of Testkube. The Testkube JMeter executor is installed by default during the Testkube installation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default command for this executor: ",(0,o.kt)("inlineCode",{parentName:"li"},"<entryPoint>")),(0,o.kt)("li",{parentName:"ul"},"Default arguments for this executor command: ",(0,o.kt)("inlineCode",{parentName:"li"},"-n")," ",(0,o.kt)("inlineCode",{parentName:"li"},"-j")," ",(0,o.kt)("inlineCode",{parentName:"li"},"<logFile>")," ",(0,o.kt)("inlineCode",{parentName:"li"},"-t")," ",(0,o.kt)("inlineCode",{parentName:"li"},"<runPath>")," ",(0,o.kt)("inlineCode",{parentName:"li"},"-l")," ",(0,o.kt)("inlineCode",{parentName:"li"},"<jtlFile>")," ",(0,o.kt)("inlineCode",{parentName:"li"},"-e")," ",(0,o.kt)("inlineCode",{parentName:"li"},"-o")," ",(0,o.kt)("inlineCode",{parentName:"li"},"<reportFile>")," ",(0,o.kt)("inlineCode",{parentName:"li"},"<envVars>"))),(0,o.kt)("p",null,"Parameters in ",(0,o.kt)("inlineCode",{parentName:"p"},"<>")," are calculated at test execution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<entryPoint>")," - The entrypoint for the JMeter runner set by the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT_CMD"),", defaults to the file in ",(0,o.kt)("inlineCode",{parentName:"li"},"contrib/executor/jmeter/scripts/entrypoint.sh"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<logFile>")," - JMeter log path"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<runPath>")," - path to the test files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<jtlFile>")," - path to the jrl report file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<reportFile>")," - path to the report"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<envVars>")," - list of environment variables")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/articles/creating-tests#redefining-the-prebuilt-executor-command-and-arguments"},'See more at "Redefining the Prebuilt Executor Command and Arguments" on the Creating Test page.')),(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/iF7BcVqTeO0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)(m,{mdxType:"ExecutorInfo"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Check out our ",(0,o.kt)("a",{parentName:"strong",href:"https://testkube.io/blog/jmeter-and-kubernetes-how-to-run-tests-efficiently-with-testkube"},"blog post")," to follow tutorial steps for end-to-end testing of your Kubernetes applications with JMeter.")),(0,o.kt)("h2",{id:"running-a-jmeter-test"},"Running a JMeter Test"),(0,o.kt)("h3",{id:"using-files-as-input"},"Using Files as Input"),(0,o.kt)("p",null,"Let's save our JMeter test in file e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"test.jmx"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.5">\n  <hashTree>\n    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Kubeshop site" enabled="true">\n      <stringProp name="TestPlan.comments">Kubeshop site simple perf test</stringProp>\n      <boolProp name="TestPlan.functional_mode">false</boolProp>\n      <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>\n      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>\n      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n        <collectionProp name="Arguments.arguments">\n          <elementProp name="PATH" elementType="Argument">\n            <stringProp name="Argument.name">PATH</stringProp>\n            <stringProp name="Argument.value">/pricing</stringProp>\n            <stringProp name="Argument.metadata">=</stringProp>\n          </elementProp>\n        </collectionProp>\n      </elementProp>\n      <stringProp name="TestPlan.user_define_classpath"></stringProp>\n    </TestPlan>\n    <hashTree>\n      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">\n        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>\n        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">\n          <boolProp name="LoopController.continue_forever">false</boolProp>\n          <stringProp name="LoopController.loops">1</stringProp>\n        </elementProp>\n        <stringProp name="ThreadGroup.num_threads">1</stringProp>\n        <stringProp name="ThreadGroup.ramp_time">1</stringProp>\n        <boolProp name="ThreadGroup.scheduler">false</boolProp>\n        <stringProp name="ThreadGroup.duration"></stringProp>\n        <stringProp name="ThreadGroup.delay"></stringProp>\n        <boolProp name="ThreadGroup.same_user_on_next_iteration">true</boolProp>\n      </ThreadGroup>\n      <hashTree>\n        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">\n          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n            <collectionProp name="Arguments.arguments">\n              <elementProp name="PATH" elementType="HTTPArgument">\n                <boolProp name="HTTPArgument.always_encode">false</boolProp>\n                <stringProp name="Argument.value">$PATH</stringProp>\n                <stringProp name="Argument.metadata">=</stringProp>\n                <boolProp name="HTTPArgument.use_equals">true</boolProp>\n                <stringProp name="Argument.name">PATH</stringProp>\n              </elementProp>\n            </collectionProp>\n          </elementProp>\n          <stringProp name="HTTPSampler.domain">testkube.io</stringProp>\n          <stringProp name="HTTPSampler.port">80</stringProp>\n          <stringProp name="HTTPSampler.protocol">https</stringProp>\n          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n          <stringProp name="HTTPSampler.path">https://testkube.io</stringProp>\n          <stringProp name="HTTPSampler.method">GET</stringProp>\n          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n        </HTTPSamplerProxy>\n        <hashTree>\n          <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">\n            <collectionProp name="Asserion.test_strings">\n              <stringProp name="-1081444641">Testkube</stringProp>\n            </collectionProp>\n            <stringProp name="Assertion.custom_message"></stringProp>\n            <stringProp name="Assertion.test_field">Assertion.response_data</stringProp>\n            <boolProp name="Assertion.assume_success">false</boolProp>\n            <intProp name="Assertion.test_type">16</intProp>\n          </ResponseAssertion>\n          <hashTree/>\n        </hashTree>\n      </hashTree>\n    </hashTree>\n  </hashTree>\n</jmeterTestPlan>\n\n')),(0,o.kt)("p",null,"The Testkube JMeter executor accepts a test file as an input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --file test.jmx --name jmeter-test --type jmeter/test\n")),(0,o.kt)("p",null,"You don't need to pass a type here, Testkube will autodetect it. "),(0,o.kt)("p",null,"To run the test, pass the previously created test name: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test -f jmeter-test\n")),(0,o.kt)("p",null,"You can also create a Test based on a Git repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create test from this Git repository\nkubectl testkube create test --test-content-type git --git-uri https://github.com/kubeshop/testkube-executor-jmeter.git --git-branch main --git-path examples/kubeshop.jmx --type jmeter/test --name jmeter-test-from-git\n")),(0,o.kt)("p",null,"Testkube will clone the repository and create a Testkube Test Custom Resource in your cluster automatically on each test run. "),(0,o.kt)("h3",{id:"using-additional-jmeter-arguments-in-your-tests"},"Using Additional JMeter Arguments in Your Tests"),(0,o.kt)("p",null,"You can also pass additional arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"jmeter")," binary thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl testkube run test -f jmeter-test --args '-LsutHost=https://staging.kubeshop.com -LsomeParam=someValue'\n")),(0,o.kt)("h3",{id:"jmeter-test-results"},(0,o.kt)("strong",{parentName:"h3"},"JMeter Test Results")),(0,o.kt)("p",null,"A JMeter test will be successful in Testkube when all checks and thresholds are successful. In the case of an error, the test will have ",(0,o.kt)("inlineCode",{parentName:"p"},"failed")," status,\nand the JMeter executor is configured to store the ",(0,o.kt)("inlineCode",{parentName:"p"},"report.jtl"),' file after the test run. You can get the file from the "Artifacts" tab in the execution results in the Testkube Dashboard,\nor download it with the ',(0,o.kt)("inlineCode",{parentName:"p"},"testkube get artifacts EXECUTION_ID")," command."),(0,o.kt)("h3",{id:"jmeter-memory-consumption"},(0,o.kt)("strong",{parentName:"h3"},"JMeter Memory Consumption")),(0,o.kt)("p",null,"When running load tests, it is common to run into memory-related issues, for example the ",(0,o.kt)("inlineCode",{parentName:"p"},"OOMKilled")," status in Kubernetes. There are three areas where the memory requests and limits can be set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on JVM level, inside the pod"),(0,o.kt)("li",{parentName:"ul"},"on pod/job level"),(0,o.kt)("li",{parentName:"ul"},"on cluster level")),(0,o.kt)("p",null,"In most cases, it is wise to start from setting the correct variables for the JVM. As the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/justb4/docker-jmeter#adjust-java-memory-options"},"README of the underlying image")," suggests, the available values are ",(0,o.kt)("inlineCode",{parentName:"p"},"JVM_XMN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JVM_XMS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JVM_XMX"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, JMeter reads out the available memory from the host machine and uses a fixed value of 80% of it as a maximum. If this causes Issues, there is the option to use environment variables to adjust the JVM memory Parameters:"),(0,o.kt)("p",{parentName:"blockquote"},"JVM_XMN to adjust maximum nursery size"),(0,o.kt)("p",{parentName:"blockquote"},"JVM_XMS to adjust initial heap size"),(0,o.kt)("p",{parentName:"blockquote"},"JVM_XMX to adjust maximum heap size"),(0,o.kt)("p",{parentName:"blockquote"},"All three use values in Megabyte range.")),(0,o.kt)("p",null,"If this does not fix your issue, look into using Testkube job templates to set job-level ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"requests and limits"),"."),(0,o.kt)("p",null,"In the very rare case that you are still bumping into memory issues, consider asking your Kubernetes cluster manager about any ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"resource quotas"),"."))}d.isMDXComponent=!0}}]);