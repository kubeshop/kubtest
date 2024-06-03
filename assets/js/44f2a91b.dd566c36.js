"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),g=r,d=f["".concat(l,".").concat(g)]||f[g]||p[g]||o;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={},a="Test Workflows Examples - Configuration",s={unversionedId:"articles/test-workflows-examples-configuration",id:"articles/test-workflows-examples-configuration",title:"Test Workflows Examples - Configuration",description:"Declaring the Configuration",source:"@site/docs/articles/test-workflows-examples-configuration.md",sourceDirName:"articles",slug:"/articles/test-workflows-examples-configuration",permalink:"/articles/test-workflows-examples-configuration",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/test-workflows-examples-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Workflows Examples - Basics",permalink:"/articles/test-workflows-examples-basics"},next:{title:"Test Workflows - Expressions",permalink:"/articles/test-workflows-expressions"}},l={},c=[{value:"Declaring the Configuration",id:"declaring-the-configuration",level:2},{value:"Using the Variables",id:"using-the-variables",level:3},{value:"UI",id:"ui",level:2},{value:"Running in the UI",id:"running-in-the-ui",level:3},{value:"CLI",id:"cli",level:2},{value:"Running with the CLI",id:"running-with-the-cli",level:4},{value:"Test Suite (Execute)",id:"test-suite-execute",level:2},{value:"Running with Execute (Test Suite Like)",id:"running-with-execute-test-suite-like",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-workflows-examples---configuration"},"Test Workflows Examples - Configuration"),(0,r.kt)("h2",{id:"declaring-the-configuration"},"Declaring the Configuration"),(0,r.kt)("p",null,"Test Workflows may define some configuration variables that should be used.\nThe configuration schema is OpenAPI-like."),(0,r.kt)("p",null,"When the configuration variable doesn\u2019t already have a default clause, it\u2019s required."),(0,r.kt)("h3",{id:"using-the-variables"},"Using the Variables"),(0,r.kt)("p",null,"The configuration variables can be used in the specification as an expression, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"cypress run {{config.args}}"),"."),(0,r.kt)("p",null,"You can use the variables in most of the places - commands, paths, images, static files, or even conditions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: testworkflows.testkube.io/v1\nkind: TestWorkflow\nmetadata:\n  name: overview--example-13\nspec:\n  config:\n    version:\n      type: string\n      default: '1.32.3'\n    workers:\n      type: integer\n      default: 2\n    printTree:\n      type: boolean\n      default: 'false'\n\n  content:\n    git:\n      uri: 'https://github.com/kubeshop/testkube'\n      paths:\n      - 'test/playwright/executor-tests/playwright-project'\n\n  container:\n    image: 'mcr.microsoft.com/playwright:v{{ config.version }}'\n    workingDir: '/data/repo/test/playwright/executor-tests/playwright-project'\n\n  steps:\n  - shell: 'npm ci && npx playwright test --workers {{ config.workers }}'\n  - condition: 'config.printTree'\n    shell: 'tree /data/repo'\n")),(0,r.kt)("h2",{id:"ui"},"UI"),(0,r.kt)("h3",{id:"running-in-the-ui"},"Running in the UI"),(0,r.kt)("p",null,"After clicking \u201cRun now\u201d in the UI, if the Test Workflow has additional configuration parameters, you will be prompted to enter them."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Running in the UI",src:n(76512).Z,width:"2048",height:"1103"})," "),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("h4",{id:"running-with-the-cli"},"Running with the CLI"),(0,r.kt)("p",null,"With the CLI, you can provide the variables with ",(0,r.kt)("strong",{parentName:"p"},"--config")," arguments. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Running with CLI",src:n(6435).Z,width:"1688",height:"390"})," "),(0,r.kt)("h2",{id:"test-suite-execute"},"Test Suite (Execute)"),(0,r.kt)("h3",{id:"running-with-execute-test-suite-like"},"Running with Execute (Test Suite Like)"),(0,r.kt)("p",null,"Configurable Test Workflows may also be parameterized in the ",(0,r.kt)("strong",{parentName:"p"},"execute")," step. Use this for passing dynamic data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: testworkflows.testkube.io/v1\nkind: TestWorkflow\nmetadata:\n  name: overview--example-14\nspec:\n  steps:\n  - execute:\n      workflows:\n      - name: 'overview--example-13'\n        config:\n          workers: 2\n      - name: 'overview--example-13'\n        config:\n          workers: 4\n      - name: 'overview--example-13'\n        config:\n          version: '1.23.4'\n")))}p.isMDXComponent=!0},76512:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/run-in-the-ui-d99475ef4062ccd6c5b97cb7b323ea92.png"},6435:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/running-with-cli-372d631663d11a657b72cd877cfdadf5.png"}}]);