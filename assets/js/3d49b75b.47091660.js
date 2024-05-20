"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"cli/testkube_run_test",id:"cli/testkube_run_test",title:"testkube_run_test",description:"testkube run test",source:"@site/docs/cli/testkube_run_test.md",sourceDirName:"cli",slug:"/cli/testkube_run_test",permalink:"/cli/testkube_run_test",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_run_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_run",permalink:"/cli/testkube_run"},next:{title:"testkube_run_testsuite",permalink:"/cli/testkube_run_testsuite"}},c={},l=[{value:"testkube run test",id:"testkube-run-test",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"testkube-run-test"},"testkube run test"),(0,a.kt)("p",null,"Starts new test"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Starts new test based on Test Custom Resource name, returns results to console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"testkube run test <testName> [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --args stringArray                           executor binary additional arguments\n      --args-mode string                           usage mode for argumnets. one of append|override|replace (default "append")\n      --artifact-dir stringArray                   artifact dirs for scraping\n      --artifact-mask stringArray                  regexp to filter scraped artifacts, single or comma separated, like report/.* or .*\\.json,.*\\.js$\n      --artifact-omit-folder-per-execution         don\'t store artifacts in execution folder\n      --artifact-shared-between-pods               whether to share volume between pods\n      --artifact-sidecar-scraper                   whether to run a scraper as a pod sidecar container\n      --artifact-storage-bucket string             artifact storage bucket\n      --artifact-storage-class-name string         artifact storage class name for container executor\n      --artifact-use-default-storage-class-name    whether to use default storage class name\n      --artifact-volume-mount-path string          artifact volume mount path for container executor\n      --command stringArray                        command passed to image in executor\n      --concurrency int                            concurrency level for multiple test execution (default 10)\n      --context string                             running context description for test execution\n      --copy-files stringArray                     file path mappings from host to pod of form source:destination\n  -d, --download-artifacts                         download artifacts automatically\n      --download-dir string                        download dir (default "artifacts")\n      --execute-postrun-script-before-scraping     whether to execute postrun scipt before scraping or not (prebuilt executor only)\n      --execution-label stringToString             execution-label key value pair: --execution-label key1=value1 (default [])\n      --execution-namespace string                 namespace for test execution (Pro edition only)\n      --format string                              data format for storing files, one of folder|archive (default "folder")\n      --git-branch string                          if uri is git repository we can set additional branch parameter\n      --git-commit string                          if uri is git repository we can use commit id (sha) parameter\n      --git-path string                            if repository is big we need to define additional path to directory/file to checkout partially\n      --git-working-dir string                     if repository contains multiple directories with tests (like monorepo) and one starting directory we can set working directory parameter\n  -h, --help                                       help for test\n      --http-proxy string                          http proxy for executor containers\n      --https-proxy string                         https proxy for executor containers\n      --image string                               override executor container image\n      --iterations int                             how many times to run the test (default 1)\n      --job-template string                        job template file path for extensions to job template\n      --job-template-reference string              reference to job template to use for the test\n  -l, --label strings                              label key value pair: --label key1=value1\n      --mask stringArray                           regexp to filter downloaded files, single or comma separated, like report/.* or .*\\.json,.*\\.js$\n      --mount-configmap stringToString             config map value pair for mounting it to executor pod: --mount-configmap configmap_name=configmap_mountpath (default [])\n      --mount-secret stringToString                secret value pair for mounting it to executor pod: --mount-secret secret_name=secret_mountpath (default [])\n  -n, --name string                                execution name, if empty will be autogenerated\n      --negative-test                              negative test, if enabled, makes failure an expected and correct test result. If the test fails the result will be set to success, and vice versa\n      --postrun-script string                      path to script to be run after test execution\n      --prerun-script string                       path to script to be run before test execution\n      --pvc-template string                        pvc template file path for extensions to pvc template\n      --pvc-template-reference string              reference to pvc template to use for the test\n      --scraper-template string                    scraper template file path for extensions to scraper template\n      --scraper-template-reference string          reference to scraper template to use for the test\n  -s, --secret-variable stringArray                execution secret variable passed to executor\n      --secret-variable-reference stringToString   secret variable references in a form name1=secret_name1=secret_key1 (default [])\n      --silent                                     don\'t print intermediate test execution\n      --slave-pod-limits-cpu string                slave pod resource limits cpu\n      --slave-pod-limits-memory string             slave pod resource limits memory\n      --slave-pod-requests-cpu string              slave pod resource requests cpu\n      --slave-pod-requests-memory string           slave pod resource requests memory\n      --slave-pod-template string                  slave pod template file path for extensions to slave pod template\n      --slave-pod-template-reference string        reference to slave pod template to use for the test\n      --source-scripts                             run scripts using source command (container executor only)\n      --upload-timeout string                      timeout to use when uploading files, example: 30s\n  -v, --variable stringArray                       execution variable passed to executor\n      --variable-configmap stringArray             config map name used to map all keys to basis variables\n      --variable-secret stringArray                secret name used to map all keys to secret variables\n      --variables-file string                      variables file path, e.g. postman env file - will be passed to executor if supported\n  -f, --watch                                      watch for changes after start\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")\n      --header stringToString   headers for direct client key value pair: --header name=value (default [])\n      --insecure                insecure connection for direct client\n      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled           enable oauth\n      --verbose                 show additional debug messages\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/testkube_run"},"testkube run"),"\t - Runs tests, test suites or test workflows")))}p.isMDXComponent=!0}}]);