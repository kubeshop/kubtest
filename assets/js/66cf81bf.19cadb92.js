"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(n),b=o,d=k["".concat(l,".").concat(b)]||k[b]||p[b]||s;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const s={},r="Testkube Gitlab CI",i={unversionedId:"articles/gitlab",id:"articles/gitlab",title:"Testkube Gitlab CI",description:"The Testkube GitLab CI/CD integration facilitates the installation of Testkube and allows the execution of any Testkube CLI command within a GitLab CI/CD pipeline. This integration can be seamlessly incorporated into your GitLab repositories to enhance your CI/CD workflows.",source:"@site/docs/articles/gitlab.md",sourceDirName:"articles",slug:"/articles/gitlab",permalink:"/articles/gitlab",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/gitlab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube GitHub Action",permalink:"/articles/github-actions"},next:{title:"Testkube Jenkins",permalink:"/articles/jenkins"}},l={},u=[{value:"Testkube Cloud",id:"testkube-cloud",level:2},{value:"How to configure Testkube CLI action for TK Cloud and run a test",id:"how-to-configure-testkube-cli-action-for-tk-cloud-and-run-a-test",level:3},{value:"Testkube OSS",id:"testkube-oss",level:2},{value:"How to configure Testkube CLI action for TK OSS and run a test",id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test",level:3},{value:"How to configure Testkube CLI action for TK OSS and run a test",id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test-1",level:3},{value:"How to connect to GKE (Google Kubernetes Engine) cluster and run a test",id:"how-to-connect-to-gke-google-kubernetes-engine-cluster-and-run-a-test",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube-gitlab-ci"},"Testkube Gitlab CI"),(0,o.kt)("p",null,"The Testkube GitLab CI/CD integration facilitates the installation of Testkube and allows the execution of any ",(0,o.kt)("a",{parentName:"p",href:"https://docs.testkube.io/cli/testkube"},"Testkube CLI")," command within a GitLab CI/CD pipeline. This integration can be seamlessly incorporated into your GitLab repositories to enhance your CI/CD workflows.\nThe integration offers a versatile approach to align with your pipeline requirements and is compatible with Testkube Cloud, Testkube Enterprise, and the open-source Testkube platform. It enables GitLab users to leverage the powerful features of Testkube directly within their CI/CD pipelines, ensuring efficient and flexible test execution."),(0,o.kt)("h2",{id:"testkube-cloud"},"Testkube Cloud"),(0,o.kt)("h3",{id:"how-to-configure-testkube-cli-action-for-tk-cloud-and-run-a-test"},"How to configure Testkube CLI action for TK Cloud and run a test"),(0,o.kt)("p",null,"To use this Gitlab CI for ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.testkube.io/"},"Testkube Cloud"),", you need to create an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-cloud/articles/organization-management/#api-tokens"},"API token"),".\nThen, pass the ",(0,o.kt)("strong",{parentName:"p"},"organization")," and ",(0,o.kt)("strong",{parentName:"p"},"environment")," IDs, along with the ",(0,o.kt)("strong",{parentName:"p"},"token")," and other parameters specific for your use case."),(0,o.kt)("p",null,"If a test is already created, you can run it using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"testkube run test test-name -f")," . However, if you need to create a test in this workflow, please add a creation command, e.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"testkube create test --name test-name --file path_to_file.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  - setup\n\nvariables:\n  TESTKUBE_API_KEY: tkcapi_0123456789abcdef0123456789abcd\n  TESTKUBE_ORG_ID: tkcorg_0123456789abcdef\n  TESTKUBE_ENV_ID: tkcenv_fedcba9876543210\n\nsetup-testkube:\n  stage: setup\n  image: \n    name: kubeshop/testkube-cli\n    entrypoint: ["/bin/sh", "-c"]\n  script:\n    - kubectl-testkube set context --api-key $TESTKUBE_API_KEY --org $TESTKUBE_ORG_ID --env $TESTKUBE_ENV_ID\n    - kubectl-testkube run test test-name -f\n')),(0,o.kt)("p",null,"It is recommended that sensitive values should never be stored as plaintext in workflow files, but rather as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/variables/"},"variables"),".  Secrets can be configured at the organization, repository, or environment level, and allow you to store sensitive information in Gitlab."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  - setup\n\nsetup-testkube:\n  stage: setup\n  image: \n    name: kubeshop/testkube-cli\n    entrypoint: ["/bin/sh", "-c"]\n  script:\n    - kubectl-testkube set context --api-key $TESTKUBE_API_KEY --org $TESTKUBE_ORG_ID --env $TESTKUBE_ENV_ID\n    - kubectl-testkube run test test-name -f\n')),(0,o.kt)("h2",{id:"testkube-oss"},"Testkube OSS"),(0,o.kt)("h3",{id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test"},"How to configure Testkube CLI action for TK OSS and run a test"),(0,o.kt)("p",null,"To connect to the self-hosted instance, you need to have ",(0,o.kt)("strong",{parentName:"p"},"kubectl")," configured for accessing your Kubernetes cluster, and pass an optional namespace, if Testkube is not deployed in the default ",(0,o.kt)("strong",{parentName:"p"},"testkube")," namespace. "),(0,o.kt)("p",null,"If a test is already created, you can run it using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"testkube run test test-name -f")," . However, if you need to create a test in this workflow, please add a creation command, e.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"testkube create test --name test-name --file path_to_file.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  - setup\n\nvariables:\n  NAMESPACE: custom-testkube\n\nsetup-testkube:\n  stage: setup\n  image: \n    name: kubeshop/testkube-cli\n    entrypoint: ["/bin/sh", "-c"]\n  script:\n    - kubectl-testkube set context --kubeconfig --namespace $NAMESPACE\n    - kubectl-testkube run test test-name -f\n')),(0,o.kt)("p",null,"The steps to connect to your Kubernetes cluster differ for each provider. You should check the docs of your Cloud provider for how to connect to the Kubernetes cluster from Gitlab CI."),(0,o.kt)("h3",{id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test-1"},"How to configure Testkube CLI action for TK OSS and run a test"),(0,o.kt)("p",null,"This workflow establishes a connection to EKS cluster and creates and runs a test using TK CLI. In this example we also use gitlab variables not to reveal sensitive data. Please make sure that the following points are satisfied:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"AwsAccessKeyId")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"AwsSecretAccessKeyId"))," secrets should contain your AWS IAM keys with proper permissions to connect to EKS cluster."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"AwsRegion"))," secret should contain AWS region where EKS is"),(0,o.kt)("li",{parentName:"ul"},"Tke ",(0,o.kt)("strong",{parentName:"li"},"EksClusterName")," secret points to the name of EKS cluster you want to connect.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  - setup\n\nsetup-testkube:\n  stage: setup\n  image: \n    name: amazon/aws-cli\n    entrypoint: ["/bin/sh", "-c"]\n  script:\n    - yum install -y jq tar gzip \n    - curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n    - install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n    - aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID\n    - aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY\n    - aws configure set region $AWS_REGION\n    - aws eks update-kubeconfig --name $EKS_CLUSTER_NAME --region $AWS_REGION\n    - echo "Installing Testkube..."\n    - curl -sSLf https://get.testkube.io | sh\n    - testkube set context --api-key $TESTKUBE_API_KEY --org $TESTKUBE_ORG_ID --env $TESTKUBE_ENV_ID\n    - echo "Running Testkube test..."\n    - testkube run test test-name -f\n\n')),(0,o.kt)("h3",{id:"how-to-connect-to-gke-google-kubernetes-engine-cluster-and-run-a-test"},"How to connect to GKE (Google Kubernetes Engine) cluster and run a test"),(0,o.kt)("p",null,"This example connects to a k8s cluster in Google Cloud, creates and runs a test using Testkube Gitlab CI. Please make sure that the following points are satisfied:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"GKE Sevice Account"))," should be created prior in Google Cloud and added to Gitlab CI variables along with ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"GKE Project"))," value;"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"GKE Cluster Name"))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"GKE Zone"))," can be added as ",(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/variables/"},"environmental variables")," in the workflow.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  - deploy\n\ndeploy_to_gke:\n  stage: deploy\n  image: google/cloud-sdk:latest\n  before_script:\n    - echo $GKE_SA_KEY | base64 -d > gke-sa-key.json\n    - gcloud auth activate-service-account --key-file=gke-sa-key.json\n    - gcloud config set project $GKE_PROJECT\n  script:\n    - apt update && apt install -y jq \n    - gcloud --quiet auth configure-docker\n    - gcloud container clusters get-credentials $GKE_CLUSTER_NAME --zone $GKE_ZONE\n    - echo "Installing Testkube..."\n    - curl -sSLf https://get.testkube.io | bash\n    - testkube set context --api-key $TESTKUBE_API_KEY --org $TESTKUBE_ORG_ID --env $TESTKUBE_ENV_ID\n    - echo "Running Testkube test..."\n    - testkube run test test-name -f\n  after_script:\n    - rm gke-sa-key.json\n')))}p.isMDXComponent=!0}}]);