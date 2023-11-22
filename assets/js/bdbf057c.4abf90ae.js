"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[1852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,u={unversionedId:"cli/testkube_create_executor",id:"cli/testkube_create_executor",title:"testkube_create_executor",description:"testkube create executor",source:"@site/docs/cli/testkube_create_executor.md",sourceDirName:"cli",slug:"/cli/testkube_create_executor",permalink:"/cli/testkube_create_executor",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_create_executor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_create",permalink:"/cli/testkube_create"},next:{title:"testkube_create_template",permalink:"/cli/testkube_create_template"}},c={},s=[{value:"testkube create executor",id:"testkube-create-executor",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"testkube-create-executor"},"testkube create executor"),(0,o.kt)("p",null,"Create new Executor"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Create new Executor Custom Resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube create executor [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --args stringArray                 args passed to image in executor\n      --command stringArray              command passed to image in executor\n      --content-type stringArray         list of supported content types for executor\n      --docs-uri string                  URI to executor docs\n      --executor-type string             executor type, container or job (defaults to job) (default "job")\n      --feature stringArray              feature provided by executor\n  -h, --help                             help for executor\n      --icon-uri string                  URI to executor icon\n      --image string                     image used for executor\n      --image-pull-secrets stringArray   secret name used to pull the image in executor\n  -j, --job-template string              if executor needs to be launched using custom job specification, then a path to template file should be provided\n      --job-template-reference string    reference to job template for using with executor\n  -l, --label stringToString             label key value pair: --label key1=value1 (default [])\n  -n, --name string                      unique executor name - mandatory\n      --tooltip stringToString           tooltip key value pair: --tooltip key1=value1 (default [])\n  -t, --types stringArray                test types handled by executor\n      --update                           update, if executor already exists\n  -u, --uri string                       if resource need to be loaded from URI\n      --use-data-dir-as-working-dir      use data dir as working dir for all tests\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "https://demo.testkube.io/results/v1")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --crd-only           generate only crd\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube_create"},"testkube create"),"\t - Create resource")))}p.isMDXComponent=!0}}]);