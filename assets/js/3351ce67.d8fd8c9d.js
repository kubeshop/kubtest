"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const s={},o=void 0,a={unversionedId:"cli/testkube_create_testsource",id:"cli/testkube_create_testsource",title:"testkube_create_testsource",description:"testkube create testsource",source:"@site/docs/cli/testkube_create_testsource.md",sourceDirName:"cli",slug:"/cli/testkube_create_testsource",permalink:"/cli/testkube_create_testsource",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_create_testsource.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_create_test",permalink:"/cli/testkube_create_test"},next:{title:"testkube_create_testsuite",permalink:"/cli/testkube_create_testsuite"}},c={},u=[{value:"testkube create testsource",id:"testkube-create-testsource",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testkube-create-testsource"},"testkube create testsource"),(0,i.kt)("p",null,"Create new TestSource"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Create new TestSource Custom Resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"testkube create testsource [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -f, --file string                          source file - will be read from stdin if not specified\n      --git-auth-type string                 auth type for git requests one of basic|header (default "basic")\n      --git-branch string                    if uri is git repository we can set additional branch parameter\n      --git-certificate-secret string        if git repository is private we can use certificate as an auth parameter stored in a kubernetes secret name\n      --git-commit string                    if uri is git repository we can use commit id (sha) parameter\n      --git-path string                      if repository is big we need to define additional path to directory/file to checkout partially\n      --git-token string                     if git repository is private we can use token as an auth parameter\n      --git-token-secret stringToString      git token secret in a form of secret_name1=secret_key1 for private repository (default [])\n      --git-uri string                       Git repository uri\n      --git-username string                  if git repository is private we can use username as an auth parameter\n      --git-username-secret stringToString   git username secret in a form of secret_name1=secret_key1 for private repository (default [])\n      --git-working-dir string               if repository contains multiple directories with tests (like monorepo) and one starting directory we can set working directory parameter\n  -h, --help                                 help for testsource\n  -l, --label stringToString                 label key value pair: --label key1=value1 (default [])\n  -n, --name string                          unique test source name - mandatory\n      --source-type string                   source type of test one of string|file-uri|git\n      --update                               update, if test source already exists\n  -u, --uri string                           URI which should be called to get test content\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "https://demo.testkube.io/results/v1")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --crd-only           generate only crd\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/testkube_create"},"testkube create"),"\t - Create resource")))}p.isMDXComponent=!0}}]);