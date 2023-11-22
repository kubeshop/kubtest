"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Testkube Open Source or Testkube Cloud?",s={unversionedId:"articles/open-source-or-cloud",id:"articles/open-source-or-cloud",title:"Testkube Open Source or Testkube Cloud?",description:"Designed to integrate seamlessly with your Kubernetes clusters, Testkube offers flexibility and power. For those searching for a quicker and streamlined experience, we suggest signing up for Testkube Cloud. However, for organizations that prefer the hands-on approach, diving deep into the Open Source version could be the ideal choice.",source:"@site/docs/articles/open-source-or-cloud.md",sourceDirName:"articles",slug:"/articles/open-source-or-cloud",permalink:"/articles/open-source-or-cloud",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/open-source-or-cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Benefits of Using Testkube",permalink:"/articles/testkube-benefits"},next:{title:"Overview",permalink:"/articles/getting-started"}},l={},u=[{value:"Testkube OSS vs. Testkube Cloud: At a Glance",id:"testkube-oss-vs-testkube-cloud-at-a-glance",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testkube-open-source-or-testkube-cloud"},"Testkube Open Source or Testkube Cloud?"),(0,a.kt)("p",null,"Designed to integrate seamlessly with your Kubernetes clusters, Testkube offers flexibility and power. For those searching for a quicker and streamlined experience, we suggest signing up for ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.testkube.io/"},"Testkube Cloud"),". However, for organizations that prefer the hands-on approach, diving deep into the ",(0,a.kt)("a",{parentName:"p",href:"/articles/testkube-oss"},"Open Source")," version could be the ideal choice."),(0,a.kt)("p",null,"Please refer to the table below to determine which version of Testkube best fits your needs."),(0,a.kt)("h2",{id:"testkube-oss-vs-testkube-cloud-at-a-glance"},"Testkube OSS vs. Testkube Cloud: At a Glance"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"}),(0,a.kt)("th",{parentName:"tr",align:"left"},"OSS"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Cloud/Enterprise"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Hosted"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Fully hosted on your cluster."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hybrid - Cloud Dashboard with the Test Execution Agent on your cluster.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Setup"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilize a Helm chart, you maintain it."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Simplified setup for a quicker start. ",(0,a.kt)("a",{parentName:"td",href:"https://cloud.testkube.io/"},"Sign in here")," for free.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Maintainance"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Your team manages S3, MongoDB, and API resources."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Significant reduction in maintenance costs with Testkube Cloud.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Features"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Core functionality for executing tests."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Builds upon OSS; enhanced with FREE, PRO and Enterprise features. Check ",(0,a.kt)("a",{parentName:"td",href:"https://testkube.io/pricing"},"Pricing"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Support"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Community Support"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Advanced Support")))))}p.isMDXComponent=!0}}]);