"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(b,l(l({ref:t},p),{},{components:n})):o.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={},l=void 0,a={unversionedId:"cli/testkube_completion_bash",id:"cli/testkube_completion_bash",title:"testkube_completion_bash",description:"testkube completion bash",source:"@site/docs/cli/testkube_completion_bash.md",sourceDirName:"cli",slug:"/cli/testkube_completion_bash",permalink:"/cli/testkube_completion_bash",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_completion_bash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_completion",permalink:"/cli/testkube_completion"},next:{title:"testkube_completion_fish",permalink:"/cli/testkube_completion_fish"}},s={},c=[{value:"testkube completion bash",id:"testkube-completion-bash",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"testkube-completion-bash"},"testkube completion bash"),(0,r.kt)("p",null,"Generate the autocompletion script for bash"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Generate the autocompletion script for the bash shell."),(0,r.kt)("p",null,"This script depends on the 'bash-completion' package.\nIf it is not installed already, you can install it via your OS's package manager."),(0,r.kt)("p",null,"To load completions in your current shell session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source <(testkube completion bash)\n")),(0,r.kt)("p",null,"To load completions for every new session, execute once:"),(0,r.kt)("h4",{id:"linux"},"Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"testkube completion bash > /etc/bash_completion.d/testkube\n")),(0,r.kt)("h4",{id:"macos"},"macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"testkube completion bash > $(brew --prefix)/etc/bash_completion.d/testkube\n")),(0,r.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"testkube completion bash\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help              help for bash\n      --no-descriptions   disable completion descriptions\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "https://demo.testkube.io/results/v1")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cli/testkube_completion"},"testkube completion"),"\t - Generate the autocompletion script for the specified shell")))}u.isMDXComponent=!0}}]);