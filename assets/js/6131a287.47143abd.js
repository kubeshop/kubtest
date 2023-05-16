"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[2581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,b=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(b,r(r({ref:t},p),{},{components:n})):a.createElement(b,r({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),s=(n(67294),n(3905));const o={},r="Guide to Deploying Testkube on AWS",i={unversionedId:"guides/going-to-production/aws",id:"guides/going-to-production/aws",title:"Guide to Deploying Testkube on AWS",description:"If you are using Amazon Web Services, this tutorial will show you how to deploy Testkube in EKS and expose it to the Internet with the AWS Load Balancer Controller.",source:"@site/docs/guides/going-to-production/aws.md",sourceDirName:"guides/going-to-production",slug:"/guides/going-to-production/aws",permalink:"/guides/going-to-production/aws",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/guides/going-to-production/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OAuth for Testkube Dashboard",permalink:"/guides/going-to-production/authentication/oauth-ui"},next:{title:"Using Testkube from CI/CD",permalink:"/guides/cicd/"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Ingress and Service Resources Configuration",id:"ingress-and-service-resources-configuration",level:2},{value:"Expose Testkube with Only One Load Balancer",id:"expose-testkube-with-only-one-load-balancer",level:2},{value:"Give it a go!",id:"give-it-a-go",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"guide-to-deploying-testkube-on-aws"},"Guide to Deploying Testkube on AWS"),(0,s.kt)("p",null,"If you are using ",(0,s.kt)("strong",{parentName:"p"},"Amazon Web Services"),", this tutorial will show you how to deploy Testkube in EKS and expose it to the Internet with the AWS Load Balancer Controller."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"First, we will need an existing Kubernetes cluster. Please see the official documentation on how to get started with an Amazon EKS cluster ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"},"here"),"."),(0,s.kt)("p",null,"Once the cluster is up and running we need to deploy the AWS Load Balancer Controller. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"Installing the AWS Load Balancer Controller add-on"),"."),(0,s.kt)("p",null,"Another important point is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/external-dns"},"ExternalDNS"),". It is not compulsory to deploy it into your cluster, but it helps you dynamically manage your DNS records via k8s resources."),(0,s.kt)("p",null,"And last, but not least - install the Testkube CLI. You can download a binary file from our ",(0,s.kt)("a",{parentName:"p",href:"https://kubeshop.github.io/testkube/getting-started/installing-cli"},"installation")," page. For how to deploy Testkube to your cluster with all the necessary changes, please see the next section."),(0,s.kt)("h2",{id:"ingress-and-service-resources-configuration"},"Ingress and Service Resources Configuration"),(0,s.kt)("p",null,"To deploy and expose Testkube to the outside world, you will need to create two ingresses - Testkube's API and Testkube's Dashboard. In this tutorial, we will be updating ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," that later will be passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,s.kt)("p",null,"In order to use the AWS Load Balancer Controller we need to create a ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," file and add the following annotation to the Ingress resources:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  kubernetes.io/ingress.class: alb\n")),(0,s.kt)("p",null,"Once this annotation is added, Controller creates two ALBs and the necessary supporting AWS resources."),(0,s.kt)("p",null,"The example configuration using HTTPS protocol might look like the following:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Testkube API Ingress:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'uiIngress:\n  enabled: true\n  annotations:\n    kubernetes.io/ingress.class: alb\n    alb.ingress.kubernetes.io/load-balancer-name: testkube-api\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/backend-protocol: HTTP\n    alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP": 80},{"HTTPS": 443}]\'\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/healthcheck-path: "/health"\n    alb.ingress.kubernetes.io/healthcheck-port: "8088"\n    alb.ingress.kubernetes.io/ssl-redirect: "443"\n    alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:us-east-1:*******:certificate/*****"\n  path: /results/v1\n  hosts:\n    - test-api.aws.testkube.io\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Testkube Dashboard Ingress:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'ingress:\n   enabled: true\n   annotations:\n      kubernetes.io/ingress.class: alb\n      alb.ingress.kubernetes.io/load-balancer-name: testkube-dashboard\n      alb.ingress.kubernetes.io/target-type: ip\n      alb.ingress.kubernetes.io/backend-protocol: HTTP\n      alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP": 80},{"HTTPS": 443}]\'\n      alb.ingress.kubernetes.io/scheme: internet-facing\n      alb.ingress.kubernetes.io/healthcheck-path: "/"\n      alb.ingress.kubernetes.io/healthcheck-port: "8080"\n      alb.ingress.kubernetes.io/ssl-redirect: \'443\'\n      alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:us-east-1:****:*****"\npath: /\n   hosts:\n     - test-dash.aws.testkube.io\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Do not forget to add ",(0,s.kt)("inlineCode",{parentName:"p"},"apiServerEndpoint")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," for ",(0,s.kt)("inlineCode",{parentName:"p"},"testkube-dashboard"),", e.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},'apiServerEndpoint: "test-api.aws.testkube.io/results/v1"'),".")),(0,s.kt)("p",null,"Once we are ready with the ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," file, we can deploy Testkube into our cluster:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add kubeshop https://kubeshop.github.io/helm-chart\n\nhelm repo update\n\nhelm install --create-namespace testkube kubeshop/testkube --namespace testkube --values values.yaml\n")),(0,s.kt)("p",null,"After the installation command is complete, you will see the following resources created into your AWS Console."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"AWS Console",src:n(33283).Z,width:"1600",height:"362"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"AWS Console2",src:n(98111).Z,width:"1600",height:"586"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"AWS Console3",src:n(91427).Z,width:"1600",height:"564"})),(0,s.kt)("p",null,"Please note that the annotations may vary, depending on your Load Balancer schema type, backend-protocols (you may use http only), target-type, etc. However, this is the bare minimum that should be applied to your configuration."),(0,s.kt)("h2",{id:"expose-testkube-with-only-one-load-balancer"},"Expose Testkube with Only One Load Balancer"),(0,s.kt)("p",null,"The above configuration creates two Load Balancers - one for the Dashboard, another is for the API. However, it is possible to save costs and use only 1 Balancer, thus you need to create only one Ingress manifest that will comprise configuration for both services:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: testkube-ingress\n  annotations:\n    kubernetes.io/ingress.class: alb\n    alb.ingress.kubernetes.io/load-balancer-name: testkube\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/backend-protocol: HTTP\n    alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP": 80},{"HTTPS": 443}]\'\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/ssl-redirect: "443"\n    alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:us-east-1:*****:certificate/******"\nspec:\n  rules:\n    - host: test-dash.aws.testkube.io\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: testkube-dashboard\n                port:\n                  number: 8080\n    - host: test-api.aws.testkube.io\n      http:\n        paths:\n          - path: /results/v1\n            pathType: Prefix\n            backend:\n              service:\n                name: testkube-api-server\n                port:\n                  number: 8088\n')),(0,s.kt)("p",null,"Except for the Ingress annotation, you need to update the Service manifests with a healthcheck configuration as well. Include the lines below into your ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Testkube Dashboard Service:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'service:\n type: ClusterIP\n port: 8080\n annotations:\n   alb.ingress.kubernetes.io/healthcheck-path: "/"\n   alb.ingress.kubernetes.io/healthcheck-port: "8080"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Testkube API Service:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'service:\n type: ClusterIP\n port: 8088\n annotations:\n   alb.ingress.kubernetes.io/healthcheck-path: "/health"\n   alb.ingress.kubernetes.io/healthcheck-port: "8088"\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Do not forget to add ",(0,s.kt)("inlineCode",{parentName:"p"},"apiServerEndpoint")," to the values.yaml for ",(0,s.kt)("inlineCode",{parentName:"p"},"testkube-dashboard"),", e.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},'apiServerEndpoint: "test-api.aws.testkube.io/results/v1"'),".")),(0,s.kt)("p",null,"This way we will have 1 Load Balancer with two listener rules pointing on corresponding paths:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"One Load Balancer",src:n(88565).Z,width:"1600",height:"307"})),(0,s.kt)("h2",{id:"give-it-a-go"},"Give it a go!"),(0,s.kt)("p",null,"With just a few changes you can deploy Testkube into an EKS cluster and expose it to the outside world while all the necessary resources are created automatically."),(0,s.kt)("p",null,"If you have any questions you can ",(0,s.kt)("a",{parentName:"p",href:"https://discord.com/invite/6zupCZFQbe"},"join our Discord community")," or, if you have any ideas for other useful features, you can create feature requests at our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube"},"GitHub Issues")," page."))}c.isMDXComponent=!0},98111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-resource-console-2-dd5cd97254d4e6e1656e0978239cbd79.png"},91427:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-resource-console-3-1a861b72eec7e3eba406adbe8207db90.png"},33283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-resource-console-048d598d4a298246e5ac0aadf0e8ae2d.png"},88565:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/one-load-balancer-0809e391eb4f677d6fb08864ee66aa90.png"}}]);