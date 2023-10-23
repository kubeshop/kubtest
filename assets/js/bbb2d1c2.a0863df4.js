"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="Testkube Cloud",u={unversionedId:"testkube-cloud/articles/intro",id:"testkube-cloud/articles/intro",title:"Testkube Cloud",description:"Testkube Cloud is the managed version of Testkube with the main purpose of:",source:"@site/docs/testkube-cloud/articles/intro.md",sourceDirName:"testkube-cloud/articles",slug:"/testkube-cloud/articles/intro",permalink:"/testkube-cloud/articles/intro",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/testkube-cloud/articles/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Distributed JMeter Executor",permalink:"/test-types/executor-distributed-jmeter"},next:{title:"Testkube Open Source",permalink:"/testkube-cloud/articles/testkube-oss"}},s={},l=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Getting Started",id:"getting-started",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube-cloud"},"Testkube Cloud"),(0,o.kt)("p",null,"Testkube Cloud is the managed version of Testkube with the main purpose of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Orchestrating tests throughout multiple clusters. "),(0,o.kt)("li",{parentName:"ul"},"Managing different environments for testing (development, staging, production, etc.). "),(0,o.kt)("li",{parentName:"ul"},"Enabling enterprise authentication and RBAC."),(0,o.kt)("li",{parentName:"ul"},"Simplifying test artifacts storage.")),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The way Testkube Cloud works is by installing and adding an agent to the Testkube installation in your cluster, which then connects with Testkube's servers. This allows Testkube to offer these added functionalities while you can still benefit from Testkube's main feature of running your testing tools inside your cluster. "),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"You can start using Testkube Cloud by either: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/testkube-cloud/articles/transition-from-oss"},(0,o.kt)("strong",{parentName:"a"},"Migrating Testkube Open Source"))," from your existing Testkube Open Source instance to a Cloud instance."),(0,o.kt)("li",{parentName:"ul"},"Creating a fresh installation, using ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.testkube.io"},"cloud.testkube.io"),".")))}p.isMDXComponent=!0}}]);