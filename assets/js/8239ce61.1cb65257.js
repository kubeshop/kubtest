"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},o="Overview",s={unversionedId:"articles/getting-started",id:"articles/getting-started",title:"Overview",description:"Testkube is a Kubernetes-native test orchestration and execution framework that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD pipelines.",source:"@site/docs/articles/getting-started.md",sourceDirName:"articles",slug:"/articles/getting-started",permalink:"/articles/getting-started",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube Core Open Source or Testkube Pro?",permalink:"/articles/open-source-or-pro"},next:{title:"About Installing Testkube",permalink:"/articles/install/overview"}},l={},u=[{value:"Step 1: Sign up for Testkube Pro",id:"step-1-sign-up-for-testkube-pro",level:2},{value:"Step 2: Connect Your Kubernetes Cluster",id:"step-2-connect-your-kubernetes-cluster",level:2},{value:"Step 3: Create Your First Test",id:"step-3-create-your-first-test",level:2},{value:"Validating the Installation",id:"validating-the-installation",level:3},{value:"Need Help?",id:"need-help",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Testkube is a Kubernetes-native test orchestration and execution framework that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD pipelines."),(0,a.kt)("p",null,"To get started, you can follow the instructions in Testkube Pro, or watch this video for a step-by-step walkthrough. "),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/wYldGtOB7HY?si=l5p8liIheddEMy9u",title:"Video tutorial: Installing Testkube Pro",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"step-1-sign-up-for-testkube-pro"},"Step 1: Sign up for Testkube Pro"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.testkube.io/"},"Create an account")," using GitHub or GitLab. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign in to Testkube",src:r(46753).Z,width:"1900",height:"963"})),(0,a.kt)("h2",{id:"step-2-connect-your-kubernetes-cluster"},"Step 2: Connect Your Kubernetes Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select \u201cAdd your first environment\u201d in the UI.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Environment",src:r(39672).Z,width:"2408",height:"1206"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Name your environment.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fill in Env Name",src:r(27335).Z,width:"1201",height:"593"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Deploy the Testkube agent in your cluster by copying our Helm or Testkube CLI command.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Copy Helm Command",src:r(6788).Z,width:"1197",height:"572"})),(0,a.kt)("h2",{id:"step-3-create-your-first-test"},"Step 3: Create Your First Test"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"/articles/creating-first-test"},"Creating Your First Test")," for our easy to follow guide."),(0,a.kt)("p",null,"With Testkube you can run any kind of test in Kubernetes. Check out our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/category/test-types/"},"native integrations")," or use the container executor to create your own."),(0,a.kt)("h3",{id:"validating-the-installation"},"Validating the Installation"),(0,a.kt)("p",null,"Testkube Pro will notify if the installation is successful. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A green indicator means that your cluster was able to connect to the Testkube Pro."),(0,a.kt)("li",{parentName:"ul"},"A red indicator indicates that the Testkube Agent can't connect to the Testkube Pro API (Testkube needs some time to establish a connection, max time is 2-3 minutes).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Validate Install",src:r(51674).Z,width:"1140",height:"250"})),(0,a.kt)("p",null,"In the case of a RED status you can try to debug the issues with the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube agent debug\n")),(0,a.kt)("p",null,"By default, Testkube is installed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube")," namespace."),(0,a.kt)("h2",{id:"need-help"},"Need Help?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Join our community on ",(0,a.kt)("a",{parentName:"li",href:"https://testkubeworkspace.slack.com/join/shared_invite/zt-2arhz5vmu-U2r3WZ69iPya5Fw0hMhRDg#/shared-invite/email"},"Slack"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://calendly.com/bryan-3pu/support-product-feedback-call?month=2023-10"},"Schedule a call")," with one of our experts. "),(0,a.kt)("li",{parentName:"ul"},"Check out our guides. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.testkube.io/articles/cicd-overview/"},"Integrating Testkube with your CI/CD"),"."),(0,a.kt)("li",{parentName:"ul"},"Setup ",(0,a.kt)("a",{parentName:"li",href:"https://testkube.io/blog/empowering-kubernetes-tests-with-webhooks"},"webhooks")," to get notified in slack,teams,pagerduty, etc\u2026 when tests fail.")))))}p.isMDXComponent=!0},6788:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/copy-helm-command-3545817bab1256192ae3664c4b5efea5.png"},39672:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-first-environment-77cec30c6e0b5975500ff7ecd1f941b8.png"},27335:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fill-in-env-name-daa6bb8d3079d232ea931f734a0917ad.png"},46753:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sign-in-d36c7b083d4d7bfa68f918b730b794e0.png"},51674:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/validate-install-a1859455b391e75d1f4abfc427f15839.png"}}]);