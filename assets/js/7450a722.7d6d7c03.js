"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[9343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(l,".").concat(b)]||d[b]||c[b]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"cli/testkube_update_webhook",id:"cli/testkube_update_webhook",title:"testkube_update_webhook",description:"testkube update webhook",source:"@site/docs/cli/testkube_update_webhook.md",sourceDirName:"cli",slug:"/cli/testkube_update_webhook",permalink:"/cli/testkube_update_webhook",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_update_webhook.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_update_testsuite",permalink:"/cli/testkube_update_testsuite"},next:{title:"testkube_upgrade",permalink:"/cli/testkube_upgrade"}},l={},u=[{value:"testkube update webhook",id:"testkube-update-webhook",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"testkube-update-webhook"},"testkube update webhook"),(0,r.kt)("p",null,"Update Webhook"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Update Webhook Custom Resource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"testkube update webhook [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --disable                             disable webhook\n  -e, --events stringArray                  event types handled by webhook e.g. start-test|end-test\n      --header stringToString               webhook header value pair (golang template supported): --header Content-Type=application/xml (default [])\n  -h, --help                                help for webhook\n  -l, --label stringToString                label key value pair: --label key1=value1 (default [])\n  -n, --name string                         unique webhook name - mandatory\n      --on-state-change                     specify whether webhook should be triggered only on a state change\n      --payload-field string                field to use for notification object payload\n      --payload-template string             if webhook needs to send a custom notification, then a path to template file should be provided\n      --payload-template-reference string   reference to payload template to use for the webhook\n      --selector string                     expression to select tests and test suites for webhook events: --selector app=backend\n  -u, --uri string                          URI which should be called when given event occurs (golang template supported)\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")\n      --insecure           insecure connection for direct client\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cli/testkube_update"},"testkube update"),"\t - Update resource")))}c.isMDXComponent=!0}}]);