"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={},s=void 0,a={unversionedId:"cli/testkube_run_testsuite",id:"cli/testkube_run_testsuite",title:"testkube_run_testsuite",description:"testkube run testsuite",source:"@site/docs/cli/testkube_run_testsuite.md",sourceDirName:"cli",slug:"/cli/testkube_run_testsuite",permalink:"/cli/testkube_run_testsuite",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_run_testsuite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_run_test",permalink:"/cli/testkube_run_test"},next:{title:"testkube_set",permalink:"/cli/testkube_set"}},l={},u=[{value:"testkube run testsuite",id:"testkube-run-testsuite",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testkube-run-testsuite"},"testkube run testsuite"),(0,i.kt)("p",null,"Starts new test suite"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Starts new test suite based on TestSuite Custom Resource name, returns results to console"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"testkube run testsuite <testSuiteName> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --concurrency int                            concurrency level for multiple test suite execution (default 10)\n      --context string                             running context description for test suite execution\n  -d, --download-artifacts                         download artifacts automatically\n      --download-dir string                        download dir (default "artifacts")\n      --execution-label stringToString             execution-label adds a label to execution in form of key value pair: --execution-label key1=value1 (default [])\n      --format string                              data format for storing files, one of folder|archive (default "folder")\n      --git-branch string                          if uri is git repository we can set additional branch parameter\n      --git-commit string                          if uri is git repository we can use commit id (sha) parameter\n      --git-path string                            if repository is big we need to define additional path to directory/file to checkout partially\n      --git-working-dir string                     if repository contains multiple directories with tests (like monorepo) and one starting directory we can set working directory parameter\n  -h, --help                                       help for testsuite\n      --http-proxy string                          http proxy for executor containers\n      --https-proxy string                         https proxy for executor containers\n      --job-template string                        job template file path for extensions to job template\n      --job-template-reference string              reference to job template to use for the test\n  -l, --label strings                              label key value pair: --label key1=value1\n      --mask stringArray                           regexp to filter downloaded files, single or comma separated, like report/.* or .*\\.json,.*\\.js$\n  -n, --name string                                execution name, if empty will be autogenerated\n      --pvc-template string                        pvc template file path for extensions to pvc template\n      --pvc-template-reference string              reference to pvc template to use for the test\n      --scraper-template string                    scraper template file path for extensions to scraper template\n      --scraper-template-reference string          reference to scraper template to use for the test\n  -s, --secret-variable stringToString             execution variables passed to executor (default [])\n      --secret-variable-reference stringToString   secret variable references in a form name1=secret_name1=secret_key1 (default [])\n      --silent                                     don\'t print intermediate test suite execution\n  -v, --variable stringToString                    execution variables passed to executor (default [])\n  -f, --watch                                      watch for changes after start\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "https://demo.testkube.io/results")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --insecure           insecure connection for direct client\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/testkube_run"},"testkube run"),"\t - Runs tests or test suites")))}p.isMDXComponent=!0}}]);