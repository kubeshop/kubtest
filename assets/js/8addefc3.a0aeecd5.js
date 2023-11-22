"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4775],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>h});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(s),h=a,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return s?n.createElement(f,r(r({ref:t},u),{},{components:s})):n.createElement(f,r({ref:t},u))}));function h(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=s.length,r=new Array(i);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<i;c++)r[c]=s[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},45795:(e,t,s)=>{s.r(t),s.d(t,{ProBadge:()=>u,assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(87462),a=(s(67294),s(3905));const i={},r="AI Test Insights",o={unversionedId:"testkube-cloud/articles/AI-test-insights",id:"testkube-cloud/articles/AI-test-insights",title:"AI Test Insights",description:"The AI Insights feature on Testkube utilizes artificial intelligence to help you debug your failed tests faster. It collects relevant bits of the failed logs and sends them to OpenAI which processes them and gives an assessment on why the test failed.",source:"@site/docs/testkube-cloud/articles/AI-test-insights.md",sourceDirName:"testkube-cloud/articles",slug:"/testkube-cloud/articles/AI-test-insights",permalink:"/testkube-cloud/articles/AI-test-insights",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/testkube-cloud/articles/AI-test-insights.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced Test Orchestration",permalink:"/testkube-cloud/articles/running-parallel-tests-with-test-suite"},next:{title:"Status Pages",permalink:"/testkube-cloud/articles/status-pages"}},l={},c=[{value:"Example of Creating a cURL Test",id:"example-of-creating-a-curl-test",level:2},{value:"Execute and Validate Tests",id:"execute-and-validate-tests",level:2},{value:"Using AI Analysis",id:"using-ai-analysis",level:2}],u=()=>(0,a.kt)("span",null,(0,a.kt)("p",{class:"pro-badge"},"PRO FEATURE")),d={toc:c,ProBadge:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ai-test-insights"},"AI Test Insights"),(0,a.kt)(u,{mdxType:"ProBadge"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The AI Insights feature on Testkube utilizes artificial intelligence to help you debug your failed tests faster. It collects relevant bits of the failed logs and sends them to OpenAI which processes them and gives an assessment on why the test failed.")),(0,a.kt)("h2",{id:"example-of-creating-a-curl-test"},"Example of Creating a cURL Test"),(0,a.kt)("p",null,"Login to your Testkube cloud account and create a test. The test in this example will send an HTTP GET request to an endpoint and validate that the response - an IP address - is received."),(0,a.kt)("p",null,"Provide the following details:\nName: ",(0,a.kt)("inlineCode",{parentName:"p"},"curl-url-test"),"\nType: ",(0,a.kt)("inlineCode",{parentName:"p"},"curl/test"),"\nSource: ",(0,a.kt)("inlineCode",{parentName:"p"},"String")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "command": [\n      "curl",\n      "http://ip.jsontest.com/",\n      "-H",\n      "\'Accept: application/json\'"\n    ],\n    "expected_status": "200",\n    "expected_body": "{\\"ip\\": \\"120.88.40.210\\"}"\n  }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a Test",src:s(1193).Z,width:"1790",height:"1916"})),(0,a.kt)("h2",{id:"execute-and-validate-tests"},"Execute and Validate Tests"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Now")," to execute the test. After the test has finished executing, you can click on it to view the results. In this case, the test has failed. Let's analyze the logs to understand why the test has failed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Log Output",src:s(82587).Z,width:"3826",height:"1986"})),(0,a.kt)("p",null,"It shows that the IP address we are looking for in the request is different; hence, the test has failed. Let's see what the AI Analysis feature has to say on this."),(0,a.kt)("h2",{id:"using-ai-analysis"},"Using AI Analysis"),(0,a.kt)("p",null,"Navigate to the AI Analysis Tab. Testkube will automatically collect the relevant details from the log and analyze them."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AI Analysis Results",src:s(32835).Z,width:"2834",height:"1752"})),(0,a.kt)("p",null,"As per the AI Analysis, the assessment is \u201cThe test execution is failing because the expected result does not match the actual result. The expected result was not received from the API\u201d. This means that the response that we received is different from what is expected, which is spot on. "),(0,a.kt)("p",null,"AI Analysis also provides you with a list of suggestions like checking the URL, headers, and internet connection, and validating the response. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"AI Analysis is an experimental feature. The results obtained may be incorrect or misleading and we\u2019re actively working on improving its accuracy. Users are cautioned to refrain from relying upon these results for critical evaluations and should approach them with caution.")),(0,a.kt)("p",null,"Let's update the expected IP address in the test and execute it again."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "command": [\n      "curl",\n      "http://ip.jsontest.com/",\n      "-H",\n      "\'Accept: application/json\'"\n    ],\n    "expected_status": "200",\n    "expected_body": "{\\"ip\\": \\"120.88.40.232\\"}"\n  }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Passed Test",src:s(40211).Z,width:"3814",height:"1958"})),(0,a.kt)("p",null,"Now if you execute the test again, it passes. Note that the AI Analysis tab is not present this time. This is because AI Analysis is best suited to analyze failed tests and not otherwise."),(0,a.kt)("p",null," Watch our YouTube hands-on video at ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=29zVIzMBaow"},"Get AI Insights for Your Tests in Kubernetes"),"."),(0,a.kt)("p",null,"This was a simple demo to show you how to use Testkube\u2019s AI Analysis feature to analyze logs and fix failing tests quickly. You can create complex tests to test your applications and infrastructure. "),(0,a.kt)("p",null,"If you have feedback or concerns using the AI analysis feature, do share them on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/6zupCZFQbe"},"Discord channel")," for faster resolution."))}p.isMDXComponent=!0},32835:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/AI-analysis-results-666eeca2fa7c1204c794c9107333a5d8.png"},1193:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/create-a-test-cda9f3a5d5586c1b21b981619fbe1512.png"},82587:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/log-output-53d5d67020fa64ec9fd2ddab5062e458.png"},40211:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/passed-test-1ce7027726e92a89c580f9c9bb90a837.png"}}]);