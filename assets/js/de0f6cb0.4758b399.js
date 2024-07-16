"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[1293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(76775),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var f=n(72389);const g="tabList__CuJ",X="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",X,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},75363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),s=n(85162);const i={},l="Test Workflows - Content",u={unversionedId:"articles/test-workflows-content",id:"articles/test-workflows-content",title:"Test Workflows - Content",description:"Often you need to provide some input data for your tests - whether it's Tests source code,",source:"@site/docs/articles/test-workflows-content.md",sourceDirName:"articles",slug:"/articles/test-workflows-content",permalink:"/articles/test-workflows-content",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/test-workflows-content.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Workflows Examples - Templates",permalink:"/articles/test-workflows-examples-templates"},next:{title:"Test Workflows - Test Suites",permalink:"/articles/test-workflows-test-suites"}},c={},p=[{value:"Shared Directories",id:"shared-directories",level:2},{value:"/data",id:"data",level:3},{value:"Custom Volumes",id:"custom-volumes",level:3},{value:"Shared Directory Between Executions",id:"shared-directory-between-executions",level:3},{value:"Static Files",id:"static-files",level:2},{value:"Mounting From a Secret or ConfigMap",id:"mounting-from-a-secret-or-configmap",level:3},{value:"Mounting Secret or ConfigMap as a Directory",id:"mounting-secret-or-configmap-as-a-directory",level:3},{value:"Git Repository",id:"git-repository",level:2},{value:"Custom Mount Path",id:"custom-mount-path",level:3},{value:"Public Repositories",id:"public-repositories",level:3},{value:"Using Username and Password/Token",id:"using-username-and-passwordtoken",level:3},{value:"Using Authorization Header",id:"using-authorization-header",level:3},{value:"Using SSH Key",id:"using-ssh-key",level:3},{value:"Pulling Selected Files",id:"pulling-selected-files",level:3},{value:"Customizable Git Branch",id:"customizable-git-branch",level:3},{value:"Fetching Tarballs",id:"fetching-tarballs",level:2},{value:"Fetching OCI Artifacts",id:"fetching-oci-artifacts",level:2},{value:"OCI Images",id:"oci-images",level:3},{value:"Object Storage",id:"object-storage",level:2},{value:"Custom Sources",id:"custom-sources",level:2},{value:"Reusing Content Between Multiple Test Workflows",id:"reusing-content-between-multiple-test-workflows",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-workflows---content"},"Test Workflows - Content"),(0,r.kt)("p",null,"Often you need to provide some input data for your tests - whether it's Tests source code,\nor some fixtures."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All the examples here that are using ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," are using it directly under the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),".\nPlease note, that you can also use it under a specific step - this way, such files won't be available in different steps.")),(0,r.kt)("h2",{id:"shared-directories"},"Shared Directories"),(0,r.kt)("h3",{id:"data"},"/data"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"/data")," directory has an empty volume mounted that can be shared across the steps."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note, that this directory is shared across steps of a single execution. To share data across multiple executions, see ",(0,r.kt)("a",{parentName:"p",href:"#shared-directory-between-executions"},(0,r.kt)("strong",{parentName:"a"},"Shared Directory Between Executions")),".")),(0,r.kt)("h3",{id:"custom-volumes"},"Custom Volumes"),(0,r.kt)("p",null,"You may create different directories that will share data across steps using Kubernetes. To do so, create and mount ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#emptydir"},(0,r.kt)("strong",{parentName:"a"},"Empty Dir"))," volume.\nThis may be useful for sharing a dependencies across steps, for example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  pod:\n    volumes:\n    - name: golang-deps\n      emptyDir: {}\n  container:\n    env:\n    - name: GOCACHE\n      value: /go-cache\n    volumeMounts:\n    - name: golang-deps\n      mountPath: /go-cache\n")),(0,r.kt)("h3",{id:"shared-directory-between-executions"},"Shared Directory Between Executions"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We are planning to prepare a built-in caching mechanism that will allow you to share data more easily.")),(0,r.kt)("p",null,"If you want to cache some data between executions, i.e., to speed up execution, you may consider mounting ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#hostpath"},(0,r.kt)("strong",{parentName:"a"},"Host's file system"))," with ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPath"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  pod:\n    volumes:\n    - name: golang-deps\n      hostPath:\n        path: '/tmp/go-cache-{{ workflow.name }}'\n  container:\n    env:\n    - name: GOCACHE\n      value: /go-cache\n    volumeMounts:\n    - name: golang-deps\n      mountPath: /go-cache\n")),(0,r.kt)("p",null,"This way, you will have a cache for each execution of the Test Workflow on the same node."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to cache data across multiple nodes, you may consider:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"using an Object Storage API like ",(0,r.kt)("a",{parentName:"li",href:"https://min.io/"},(0,r.kt)("strong",{parentName:"a"},"Minio")),", ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},(0,r.kt)("strong",{parentName:"a"},"AWS S3"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage"},(0,r.kt)("strong",{parentName:"a"},"GCP Cloud Storage")),",\nand save/read files using it, or"),(0,r.kt)("li",{parentName:"ul"},"creating a ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},(0,r.kt)("strong",{parentName:"a"},"Persistent Volume"))," and attaching it with ",(0,r.kt)("inlineCode",{parentName:"li"},"pod.volumes")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"container.volumeMounts"),"."))),(0,r.kt)("h2",{id:"static-files"},"Static Files"),(0,r.kt)("p",null,"To mount a static file, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"content.files"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  content:\n    files:\n    - path: /etc/nginx/nginx.conf\n      content: |\n        events {\n          worker_connections 1024;\n        }\n        http {\n          server {\n            listen 8888;\n            location / {\n              root /www;\n            }\n          }\n        }\n    - path: /www/index.html\n      content: "hello-there"\n')),(0,r.kt)("h3",{id:"mounting-from-a-secret-or-configmap"},"Mounting From a Secret or ConfigMap"),(0,r.kt)("p",null,"If you need to mount the secret as a file, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"contentFrom")," clause in ",(0,r.kt)("inlineCode",{parentName:"p"},"content.files"),". It has the same interface as ",(0,r.kt)("inlineCode",{parentName:"p"},"valueFrom")," in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#envvarsource-v1-core"},(0,r.kt)("strong",{parentName:"a"},"native EnvVar")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    files:\n    - path: /some/path/secret.key\n      contentFrom:\n        secretKeyRef: # Mount from Secret\n          name: secret-name\n          key: key-name-in-secret\n    - path: /some/path/nginx.conf\n      contentFrom:\n        configMapKeyRef: # Mount from ConfigMap\n          name: secret-name\n          key: key-name-in-secret\n")),(0,r.kt)("h3",{id:"mounting-secret-or-configmap-as-a-directory"},"Mounting Secret or ConfigMap as a Directory"),(0,r.kt)("p",null,"As an alternative, you may use native Kubernetes volumes for mounting ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#secret"},(0,r.kt)("strong",{parentName:"a"},"Secrets"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#configmap"},(0,r.kt)("strong",{parentName:"a"},"ConfigMaps")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  pod:\n    volumes:\n    # Create volume from the Secret\n    - name: example-secret-volume\n      secret:\n        secretName: secret-name\n    # Create volume from the ConfigMap\n    - name: example-configmap-volume\n      configMap:\n        name: configmap-name\n  container:\n    volumeMounts:\n    # Mount files from the Secret\n    - name: example-secret-volume\n      mountPath: /some/secret\n    # Mount files from the ConfigMap\n    - name: example-configmap-volume\n      mountPath: /some/config\n")),(0,r.kt)("h2",{id:"git-repository"},"Git Repository"),(0,r.kt)("p",null,"Testkube allows you to easily fetch the Git repository using ",(0,r.kt)("inlineCode",{parentName:"p"},"content.git"),"."),(0,r.kt)("h3",{id:"custom-mount-path"},"Custom Mount Path"),(0,r.kt)("p",null,"By default, the Git repository contents are mounted at ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/repo")," directory.\nIf you want to mount it in a different directory, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"mountPath")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube.git\n      mountPath: /custom/mount/path\n  steps:\n  - shell: tree /custom/mount/path\n")),(0,r.kt)("h3",{id:"public-repositories"},"Public Repositories"),(0,r.kt)("p",null,"To use a public repository, simply pass the URL of the repository and it will be automatically mounted in ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/repo"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube.git\n      # You may also fetch different revision:\n      # revision: main\n      # revision: v1.7.30\n      # revision: 2457ba80c1e0ade682b202fbec7062d82107e12f\n  steps:\n  - shell: tree /data/repo\n")),(0,r.kt)("h3",{id:"using-username-and-passwordtoken"},"Using Username and Password/Token"),(0,r.kt)("p",null,"Private repositories may need authentication with username and password/token.\nTo authenticate that way, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"usernameFrom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"tokenFrom")," properties."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," properties take plain-text arguments. If you want to take username and password/token from the Secret or ConfigMap,\nyou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"usernameFrom")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenFrom")," properties. They have the same interface as ",(0,r.kt)("inlineCode",{parentName:"p"},"valueFrom")," in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#envvarsource-v1-core"},(0,r.kt)("strong",{parentName:"a"},"native EnvVar")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube.git\n      username: my-username\n      # usernameFrom:\n      #   secretKeyRef:\n      #     name: git-credentials\n      #     key: username\n      token: my-token\n      # tokenFrom:\n      #   secretKeyRef:\n      #     name: git-credentials\n      #     key: token\n")),(0,r.kt)("h3",{id:"using-authorization-header"},"Using Authorization Header"),(0,r.kt)("p",null,"The example above is using Basic Authorization. Some Git providers may require Bearer Authentication instead.\nTo provide the bearer token, you need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"authType: header")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube.git\n      authType: header\n      token: my-token\n      # tokenFrom:\n      #   secretKeyRef:\n      #     name: git-credentials\n      #     key: token\n")),(0,r.kt)("h3",{id:"using-ssh-key"},"Using SSH Key"),(0,r.kt)("p",null,"You can use a private SSH key to access your repository, using either plain-text ",(0,r.kt)("inlineCode",{parentName:"p"},"sshKey")," property,\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"sshKeyFrom")," that has the same interface as ",(0,r.kt)("inlineCode",{parentName:"p"},"valueFrom")," in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#envvarsource-v1-core"},(0,r.kt)("strong",{parentName:"a"},"native EnvVar")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    git:\n      uri: ssh://git@github.com/kubeshop/testkube.git\n      sshKeyFrom:\n        secretKeyRef:\n          name: git-credentials\n          key: ssh-key\n      # sshKey: |\n      #   -----BEGIN OPENSSH PRIVATE KEY-----\n      #   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n      #   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n      #   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n      #   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n      #   Py55nRNObUBBaG/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX=\n      #   -----END OPENSSH PRIVATE KEY-----\n")),(0,r.kt)("h3",{id:"pulling-selected-files"},"Pulling Selected Files"),(0,r.kt)("p",null,"You may pass file patterns (",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-sparse-checkout#_internalscone_pattern_set"},(0,r.kt)("strong",{parentName:"a"},"cone pattern set")),") in ",(0,r.kt)("inlineCode",{parentName:"p"},"content.git.paths")," which should be fetched from the Git repository.\nIt will use ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-sparse-checkout"},(0,r.kt)("strong",{parentName:"a"},"sparse checkout")),", so you will avoid transferring unnecessary files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube.git\n      paths:\n      - test/cypress/executor-tests/cypress-12\n")),(0,r.kt)("h3",{id:"customizable-git-branch"},"Customizable Git Branch"),(0,r.kt)("p",null,"Often you may want to run the Test Workflow for different code revisions (i.e. running it on Pull Requests with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/testkube-action"},(0,r.kt)("strong",{parentName:"a"},"GitHub Action")),")."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/articles/test-workflows-expressions"},(0,r.kt)("strong",{parentName:"a"},"Test Workflow Expressions"))," there, so it may be customized with ",(0,r.kt)("a",{parentName:"p",href:"/articles/test-workflows-examples-configuration"},(0,r.kt)("strong",{parentName:"a"},"configuration variables")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  config:\n    branch:\n      type: string\n      default: main\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube.git\n      revision: '{{ config.branch }}'\n")),(0,r.kt)("h2",{id:"fetching-tarballs"},"Fetching Tarballs"),(0,r.kt)("p",null,"Testkube have a simple built-in way to fetch tarball archives for your tests. You may use ",(0,r.kt)("inlineCode",{parentName:"p"},"content.tarball")," to specify the files to download and unpack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    tarball:\n    - url: https://github.com/kubeshop/testkube/releases/download/v1.17.53/testkube_1.17.53_Linux_arm64.tar.gz\n      path: /data/bin\n  steps:\n  - shell: tree /data/bin\n")),(0,r.kt)("h2",{id:"fetching-oci-artifacts"},"Fetching OCI Artifacts"),(0,r.kt)("p",null,"Sometimes, especially in air-gapped environment, you may want to provide the test data via OCI Registries."),(0,r.kt)("p",null,"You may use ",(0,r.kt)("a",{parentName:"p",href:"https://oras.land/"},(0,r.kt)("strong",{parentName:"a"},"ORAS"))," to fetch artifacts from the OCI registry.\nTo do so, run a step with Docker image that has ORAS installed and pull the artifact into ",(0,r.kt)("inlineCode",{parentName:"p"},"/data")," (or other known volume):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  steps:\n  - run:\n      image: bitnami/oras:latest\n      workingDir: /data\n      shell: |\n        oras pull 12345678901234.dkr.ecr.us-west-2.amazonaws.com/some/artifact:latest\n  - shell: tree /data\n")),(0,r.kt)("h3",{id:"oci-images"},"OCI Images"),(0,r.kt)("p",null,"Sometimes the registry won't support the OCI Artifacts, and, instead, they are available as regular images.\nTo fetch the data from such an image, simply run a step using that image,\nand copy all the expected contents into ",(0,r.kt)("inlineCode",{parentName:"p"},"/data")," (or other known volume):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  steps:\n  - run:\n      image: '12345678901234.dkr.ecr.us-west-2.amazonaws.com/some/image:latest'\n      shell: 'cp -rf /some/test/content /data'\n  - shell: tree /data\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Test Workflows automatically have access to some binaries to use (i.e. shell) even on distroless images.\nThanks to that, you can use general shell commands (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"cp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tar")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tree"),") even on images where they are not available.")),(0,r.kt)("h2",{id:"object-storage"},"Object Storage"),(0,r.kt)("p",null,"To download your test data from the Object Storage you may simply use a Docker image with CLI that allows that,\nand fetch the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  steps:\n  - run:\n      image: minio/mc:latest\n      env:\n      - name: STORAGE_URL\n        value: https://s3.us-south.cloud-object-storage.appdomain.cloud\n      - name: STORAGE_ACCESS_KEY\n        value: AKIAIOSFODNN7EXAMPLE\n      - name: STORAGE_SECRET_KEY\n        value: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n      - name: STORAGE_BUCKET\n        value: artifacts\n      shell: |\n        /usr/bin/mc config host add storage "$STORAGE_URL" "$STORAGE_ACCESS_KEY" "$STORAGE_SECRET_KEY"\n        /usr/bin/mc cp "storage/$STORAGE_BUCKET/some-artifact.tar.gz" /data/some-artifact.tar.gz\n        tar -zxf /data/some-artifact.tar.gz\n        rm /data/some-artifact.tar.gz\n  - shell: tree /data\n')),(0,r.kt)("h2",{id:"custom-sources"},"Custom Sources"),(0,r.kt)("p",null,"Similarly to the Object Storage example above, you can perform any other action in first step,\ncopy the results to shared directory, and then perform any work on that."),(0,r.kt)("h2",{id:"reusing-content-between-multiple-test-workflows"},"Reusing Content Between Multiple Test Workflows"),(0,r.kt)("p",null,"You may have multiple Test Workflows that needs access to the same test content. It's a good practice to abstract that with ",(0,r.kt)("a",{parentName:"p",href:"/articles/test-workflows-examples-templates"},(0,r.kt)("strong",{parentName:"a"},"Test Workflow Templates")),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"template",label:"Template",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: testworkflows.testkube.io/v1\nkind: TestWorkflowTemplate\nmetadata:\n  name: git-testkube\nspec:\n  config:\n    revision:\n      type: string\n      default: main\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube.git\n      revision: '{{ config.revision }}'\n      sshKeyFrom:\n        secretKeyRef:\n          name: git-credentials\n          key: ssh-key\n"))),(0,r.kt)(s.Z,{value:"workflow",label:"Test Workflow",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: testworkflows.testkube.io/v1\nkind: TestWorkflowTemplate\nmetadata:\n  name: example-workflow\nspec:\n  use:\n  - name: git-testkube\n    config:\n      revision: develop\n  steps:\n  - shell: tree /data/repo\n")))))}d.isMDXComponent=!0}}]);