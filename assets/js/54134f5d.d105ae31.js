"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8211],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,s(s({ref:e},p),{},{components:a})):n.createElement(k,s({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71026:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},s="Artifacts Storage",o={unversionedId:"concepts/artifacts-storage",id:"concepts/artifacts-storage",title:"Artifacts Storage",description:"Testkube allows you to save supported files generated by your tests, which we call Artifacts.",source:"@site/docs/concepts/artifacts-storage.md",sourceDirName:"concepts",slug:"/concepts/artifacts-storage",permalink:"/testkube/concepts/artifacts-storage",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/concepts/artifacts-storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test and Test Suite Scheduling",permalink:"/testkube/concepts/scheduling"},next:{title:"Metrics",permalink:"/testkube/concepts/metrics"}},i={},c=[],p={toc:c};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"artifacts-storage"},"Artifacts Storage"),(0,r.kt)("p",null,"Testkube allows you to save supported files generated by your tests, which we call ",(0,r.kt)("strong",{parentName:"p"},"Artifacts"),"."),(0,r.kt)("p",null,"The executor will scrape the files and store them in ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"Minio"),". The executor will create a bucket named by execution ID and collect all files that are stored in the location specific to each executor."),(0,r.kt)("p",null,"The available configuration parameters in Helm charts are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Is optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"testkube-minio-service-testkube:9000"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the S3 bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKeyId"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"minio"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKey"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"minio123"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.location"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.token"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"S3 Token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.SSL"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether SSL communication is to be enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.scrapperEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether executors should scrape artifacts")))),(0,r.kt)("p",null,"The API Server accepts the following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"STORAGE_ENDPOINT\nSTORAGE_ACCESSKEYID\nSTORAGE_SECRETACCESSKEY\nSTORAGE_LOCATION\nSTORAGE_TOKEN\nSTORAGE_SSL\nSCRAPPERENABLED\n")),(0,r.kt)("p",null,"Which can be set while installing with Helm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm install --create-namespace my-testkube testkube/testkube --set STORAGE_ENDPOINT=custom_value\n")),(0,r.kt)("p",null,"Alternatively, these values can be read from Kubernetes secrets and set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- env:\n - name: STORAGE_ENDPOINT\n   secret:\n  secretName: test-secret\n")))}u.isMDXComponent=!0}}]);