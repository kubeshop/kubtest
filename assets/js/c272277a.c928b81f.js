"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[2730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=l,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),l=(n(67294),n(3905));const a={},r="Install Testkube with the CLI",i={unversionedId:"articles/install/install-with-cli",id:"articles/install/install-with-cli",title:"Install Testkube with the CLI",description:"The Testkube CLI includes installation commands to help you set up Testkube for your environment. You can choose from one of our built-in configuration profiles (see below) and the CLI will help you with the last-mile configuration to finalise your setup. You can find instructions on how to install the CLI here.",source:"@site/docs/articles/install/install-with-cli.md",sourceDirName:"articles/install",slug:"/articles/install/install-with-cli",permalink:"/articles/install/install-with-cli",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/install/install-with-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reference Architectures",permalink:"/articles/install/reference-architectures"},next:{title:"Install Testkube with Helm",permalink:"/articles/install/install-with-helm"}},s={},u=[{value:"Deploy an on-prem demo",id:"deploy-an-on-prem-demo",level:2},{value:"Deploy an agent that will connect to a control plane",id:"deploy-an-agent-that-will-connect-to-a-control-plane",level:2},{value:"Deploy the open-source, standalone agent",id:"deploy-the-open-source-standalone-agent",level:2},{value:"Deploy other profiles",id:"deploy-other-profiles",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-testkube-with-the-cli"},"Install Testkube with the CLI"),(0,l.kt)("p",null,"The Testkube CLI includes installation commands to help you set up Testkube for your environment. You can choose from one of our built-in configuration profiles (see below) and the CLI will help you with the last-mile configuration to finalise your setup. You can find instructions on how to install the CLI ",(0,l.kt)("a",{parentName:"p",href:"/articles/install/cli"},"here"),"."),(0,l.kt)("h2",{id:"deploy-an-on-prem-demo"},"Deploy an on-prem demo"),(0,l.kt)("p",null,"Our demo profile bootstraps Testkube\u2019s control plane (dashboard) and agent within the same namespace. It will also create an admin user, organisation and environment."),(0,l.kt)("p",null,"You will be asked for a license key which you can request for free, no credit card required. You can get the license at ",(0,l.kt)("a",{parentName:"p",href:"https://testkube.io/download"},"https://testkube.io/download")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"testkube init demo\n")),(0,l.kt)("p",null,"Once deployed, use ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube dashboard")," to conveniently access all services on your localhost."),(0,l.kt)("h2",{id:"deploy-an-agent-that-will-connect-to-a-control-plane"},"Deploy an agent that will connect to a control plane"),(0,l.kt)("p",null,"The agent profile installs an agent that will join a control plane running within a different cluster or namespace. The agent acts as a test runner for your organisation\u2019s environment. You can install multiple agents as seen in ",(0,l.kt)("a",{parentName:"p",href:"https://deploy-preview-5346--testkube-docs-preview.netlify.app/articles/install/reference-architectures#testkube-on-prem-federated"},"the Testkube On-Prem Federated reference architecture"),"."),(0,l.kt)("p",null,"You will be asked for an agent token which you can find in your Testkube dashboard."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"testkube init agent\n")),(0,l.kt)("h2",{id:"deploy-the-open-source-standalone-agent"},"Deploy the open-source, standalone agent"),(0,l.kt)("p",null,"The standalone-agent profile installs the agent that functions on its own without a control plane (no dashboard available in this mode). It allows you to use the test orchestration engine through the CLI and Custom Resource Definitions."),(0,l.kt)("p",null,"The standalone-agent is fully open-sourced under a MIT license ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube"},"on GitHub"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"testkube init\n")),(0,l.kt)("h2",{id:"deploy-other-profiles"},"Deploy other profiles"),(0,l.kt)("p",null,"You can find all available profiles by running ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube init --help"),". Each profile will interactively ask you the information it needs or you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube init <profile> --help")," to run non-interactively by passing in the required flags."),(0,l.kt)("p",null,"The following built-in configuration profiles are currently available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"demo"),": similar to the default profile, but it will configure a default user, organisation and admin to try out Testkube On Prem within minutes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"agent"),": enables components to run the agent joining a control plane. You can use this profile after creating an environment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"standalone-agent"),": enables components to run the agent without a control plane. This profile is completely open-source and allows you to run tests with the CLI and CRDs.")))}p.isMDXComponent=!0}}]);