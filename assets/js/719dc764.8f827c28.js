"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[463],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={},i="Creating Your First Test",o={unversionedId:"articles/creating-first-test",id:"articles/creating-first-test",title:"Creating Your First Test",description:"Kubernetes-native Tests",source:"@site/docs/articles/creating-first-test.md",sourceDirName:"articles",slug:"/articles/creating-first-test",permalink:"/articles/creating-first-test",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/creating-first-test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gitops Testing with ArgoCD",permalink:"/articles/argocd-integration"},next:{title:"Emitting Standard CDEvents",permalink:"/articles/cd-events"}},l={},u=[{value:"Kubernetes-native Tests",id:"kubernetes-native-tests",level:2},{value:"Creating a K6 Test",id:"creating-a-k6-test",level:2},{value:"Different Mechanisms to Run Tests",id:"different-mechanisms-to-run-tests",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"CLI",id:"cli",level:3},{value:"Changing the Output Format",id:"changing-the-output-format",level:4},{value:"Other Means of Triggering Tests",id:"other-means-of-triggering-tests",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-your-first-test"},"Creating Your First Test"),(0,a.kt)("h2",{id:"kubernetes-native-tests"},"Kubernetes-native Tests"),(0,a.kt)("p",null,"Tests in Testkube are stored as a Custom Resource in Kubernetes and live inside your cluster."),(0,a.kt)("p",null,"You can create your tests directly in the UI, using the CLI or deploy them as a Custom Resource.\nUpload your test files to Testkube or provide your Git credentials so that Testkube can fetch them automatically from your Git Repo every time there's a new test execution."),(0,a.kt)("p",null,"This section provides an example of creating a ",(0,a.kt)("em",{parentName:"p"},"K6")," test. Testkube supports a long ",(0,a.kt)("a",{parentName:"p",href:"../category/test-types"},"list of testing tools"),"."),(0,a.kt)("h2",{id:"creating-a-k6-test"},"Creating a K6 Test"),(0,a.kt)("p",null,'Now that you have your Testkube Environment up and running, the quickest way to add a new test is by clicking "Add New Test" on the Dashboard and select your test type:'),(0,a.kt)("img",{width:"1896",alt:"image",src:"https://github.com/kubeshop/testkube/assets/13501228/683eae92-ef74-49c8-9db9-90da76fc17fc"}),(0,a.kt)("p",null,"We created the following Test example which verifies the status code of an HTTPS endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// This k6 test was made to fail randomly 50% of the times.\nimport http from 'k6/http';\nimport { check, fail, sleep } from 'k6';\n\n\nexport const options = {\n stages: [\n   { duration: '1s', target: 1 },\n ],\n};\n\nlet statusCode = Math.random() > 0.5 ? 200 : 502;\nexport default function () {\n const res = http.get('https://httpbin.test.k6.io/');\n check(res, { 'Check if status code is 200': (r) => { \n    console.log(statusCode, \"Passing? \", 200 == statusCode);\n    return r.status == statusCode }\n});\n}\n")),(0,a.kt)("p",null,"Testkube can import any test files from Git, from your computer or by copy and pasting a string.\nWhile in an automated setup, our advice is to keep everything in Git (including your Test CRDs).\nFor this example, we will copy and paste the test file to quickly create and run it."),(0,a.kt)("img",{width:"1896",alt:"image",src:"https://github.com/kubeshop/testkube/assets/13501228/cfb5d188-aaf6-4051-a44c-3859a23dd2a7"}),(0,a.kt)("p",null,"Voila! You can now run the test!"),(0,a.kt)("img",{width:"1896",alt:"image",src:"https://github.com/kubeshop/testkube/assets/13501228/e2d46e4f-641b-49b9-8a1f-f3b3100c4ad0"}),(0,a.kt)("h2",{id:"different-mechanisms-to-run-tests"},"Different Mechanisms to Run Tests"),(0,a.kt)("h3",{id:"dashboard"},"Dashboard"),(0,a.kt)("p",null,"Trigger test execution manually on the Dashboard:"),(0,a.kt)("img",{width:"1896",alt:"image",src:"https://github.com/kubeshop/testkube/assets/13501228/97fe3119-60a8-4b40-ac54-3f1fc625111f"}),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("p",null,"You can run tests manually from your machine using the CLI as well, or from your CI/CD. Visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/articles/cicd-overview"},"here")," for examples on how to setup our CI/CD system to trigger your tests."),(0,a.kt)("img",{width:"1896",alt:"image",src:"https://github.com/kubeshop/testkube/assets/13501228/6b5098d7-9b57-485d-8c5e-5f915f49d515"}),(0,a.kt)("h4",{id:"changing-the-output-format"},"Changing the Output Format"),(0,a.kt)("p",null,"For lists and details, you can use different output formats via the ",(0,a.kt)("inlineCode",{parentName:"p"},"--output")," flag. The following formats are currently supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RAW")," - Raw output from the given executor (e.g., for Postman collection, it's terminal text with colors and tables)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," - Test run data are encoded in JSON."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GO")," - For go-template formatting (like in Docker and Kubernetes), you'll need to add the ",(0,a.kt)("inlineCode",{parentName:"li"},"--go-template")," flag with a custom format. The default is ",(0,a.kt)("inlineCode",{parentName:"li"},'{{ . | printf("%+v") }}'),". This will help you check available fields.")),(0,a.kt)("h3",{id:"other-means-of-triggering-tests"},"Other Means of Triggering Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your Test can run on a ",(0,a.kt)("a",{parentName:"li",href:"https://docs.testkube.io/articles/scheduling-tests"},"Schedule"),(0,a.kt)("img",{width:"1896",alt:"image",src:"https://github.com/kubeshop/testkube/assets/13501228/aa3a1d87-e687-4364-9a8f-8bc8ffc73395"})),(0,a.kt)("li",{parentName:"ul"},"Testkube can trigger the tests based on ",(0,a.kt)("a",{parentName:"li",href:"https://docs.testkube.io/articles/test-triggers"},"Kubernetes events")," (such as the deployment of an application).")))}p.isMDXComponent=!0}}]);