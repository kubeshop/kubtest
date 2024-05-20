"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,l={unversionedId:"cli/testkube_init",id:"cli/testkube_init",title:"testkube_init",description:"testkube init",source:"@site/docs/cli/testkube_init.md",sourceDirName:"cli",slug:"/cli/testkube_init",permalink:"/cli/testkube_init",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_init.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_get_webhook",permalink:"/cli/testkube_get_webhook"},next:{title:"testkube_init_agent",permalink:"/cli/testkube_init_agent"}},s={},u=[{value:"testkube init",id:"testkube-init",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testkube-init"},"testkube init"),(0,i.kt)("p",null,"Init Testkube profiles(standalone-agent|demo|agent)"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Init installs the Testkube in your cluster as follows:\nstandalone-agent -> Testkube OSS\ndemo -> Testkube On-Prem demo\nagent -> Testkube Agent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"testkube init <profile> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --export   Export the values.yaml\n  -h, --help     help for init\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")\n      --header stringToString   headers for direct client key value pair: --header name=value (default [])\n      --insecure                insecure connection for direct client\n      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled           enable oauth\n      --verbose                 show additional debug messages\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/testkube"},"testkube"),"\t - Testkube entrypoint for kubectl plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/testkube_init_agent"},"testkube init agent"),"\t - Install Testkube Pro Agent and connect to Testkube Pro environment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/testkube_init_demo"},"testkube init demo"),"\t - Install Testkube On-Prem demo in your current context"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/testkube_init_standalone-agent"},"testkube init standalone-agent"),"\t - Install Testkube OSS in your current context")))}p.isMDXComponent=!0}}]);