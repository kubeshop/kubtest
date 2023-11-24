"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,f=d["".concat(u,".").concat(y)]||d[y]||p[y]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s=r.p+"assets/images/cicd-comparison-040ab3b4120f6749cb0259592ead265d.png",a={},i="Benefits of Using Testkube",u={unversionedId:"articles/testkube-benefits",id:"articles/testkube-benefits",title:"Benefits of Using Testkube",description:"Whether you want to simplify your company's DevOps workflows or empower your QA and Testing teams, Testkube provides your teams the power to:",source:"@site/docs/articles/testkube-benefits.md",sourceDirName:"articles",slug:"/articles/testkube-benefits",permalink:"/articles/testkube-benefits",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/testkube-benefits.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supported Test Types",permalink:"/articles/supported-tests"},next:{title:"Testkube Open Source or Testkube Pro?",permalink:"/articles/open-source-or-pro"}},l={},c=[{value:"Run Your Tests Inside Your Cluster",id:"run-your-tests-inside-your-cluster",level:2},{value:"Execute your tests from any CI/CD tool",id:"execute-your-tests-from-any-cicd-tool",level:2},{value:"GitOps Friendly Testing Strategy",id:"gitops-friendly-testing-strategy",level:2},{value:"Make Your Tests Kubernetes Native",id:"make-your-tests-kubernetes-native",level:2},{value:"Centralized Reporting and Storage of Test Artifacts",id:"centralized-reporting-and-storage-of-test-artifacts",level:2},{value:"Run Tests on Demand",id:"run-tests-on-demand",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"benefits-of-using-testkube"},"Benefits of Using Testkube"),(0,o.kt)("img",{src:s}),(0,o.kt)("p",null,"Whether you want to simplify your company's DevOps workflows or empower your QA and Testing teams, Testkube provides your teams the power to:"),(0,o.kt)("h2",{id:"run-your-tests-inside-your-cluster"},"Run Your Tests Inside Your Cluster"),(0,o.kt)("p",null,"Testkube runs your tests inside your Kubernetes cluster and not from a CI pipeline. This is a huge networking security benefit because you don't need to expose your cluster to the world to be able to test its application."),(0,o.kt)("h2",{id:"execute-your-tests-from-any-cicd-tool"},"Execute your tests from any CI/CD tool"),(0,o.kt)("p",null,"We decouple test orchestration from your CI/CD pipelines by triggering Testkube\u2019s testing orchestration and execution engine right from within your CI/CD workflow regardless of the tools you use, giving you vendor neutrality and a plethora of options amongst GitLab, GitHub Actions, CircleCI, or a GitOps approach."),(0,o.kt)("h2",{id:"gitops-friendly-testing-strategy"},"GitOps Friendly Testing Strategy"),(0,o.kt)("p",null,"Testkube is Kubernetes-native, meaning all your tests are defined using Kubernetes Custom Resources. This allows your tests to be part of your Infrastructure as Code. With Testkube you can use GitOps tools like ArgoCD and Flux to create and manage your tests."),(0,o.kt)("h2",{id:"make-your-tests-kubernetes-native"},"Make Your Tests Kubernetes Native"),(0,o.kt)("p",null,"Your tests are native to Kubernetes as Testkube uses Custom Resources to manage the definitions and execution of your tests."),(0,o.kt)("h2",{id:"centralized-reporting-and-storage-of-test-artifacts"},"Centralized Reporting and Storage of Test Artifacts"),(0,o.kt)("p",null,"Testkube can run any test tool that you're using. The primary advantages of this feature are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test results will not be spread around multiple systems."),(0,o.kt)("li",{parentName:"ul"},"You can have a single place inside ",(0,o.kt)("strong",{parentName:"li"},"your")," cluster where all test results are saved and reported with a common format.")),(0,o.kt)("h2",{id:"run-tests-on-demand"},"Run Tests on Demand"),(0,o.kt)("p",null,"Currently, if you want to re-run a test, you'll probably be re-triggering your entire CI/CD pipeline, and you'll probably spend 10 minutes of your life doing it. "),(0,o.kt)("p",null,"Testkube allows you to run and re-run your tests on command or automatically: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2728Automatically on deployment of annotated/labeled Kubernetes objects (services, pods, etc)."),(0,o.kt)("li",{parentName:"ul"},"\u23f2\ufe0f On a schedule."),(0,o.kt)("li",{parentName:"ul"},"\ud83e\uddd1\u200d\ud83d\udcbb Manually via Testkube's CLI or Open Source Dashboard."),(0,o.kt)("li",{parentName:"ul"},"\u26a1 Externally triggered via an API.")))}d.isMDXComponent=!0}}]);