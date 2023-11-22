"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(n),p=a,g=k["".concat(l,".").concat(p)]||k[p]||d[p]||r;return n?s.createElement(g,o(o({ref:t},c),{},{components:n})):s.createElement(g,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(87462),a=(n(67294),n(3905));const r={},o="Testkube Jenkins",i={unversionedId:"articles/jenkins",id:"articles/jenkins",title:"Testkube Jenkins",description:"The Testkube Jenkins integration streamlines the installation of Testkube, enabling the execution of any Testkube CLI command within Jenkins pipelines. This integration can be effortlessly integrated into your Jenkins setup, enhancing your continuous integration and delivery processes.",source:"@site/docs/articles/jenkins.md",sourceDirName:"articles",slug:"/articles/jenkins",permalink:"/articles/jenkins",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/jenkins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube Gitlab CI",permalink:"/articles/gitlab"},next:{title:"Run Tests with GitHub Actions",permalink:"/articles/run-tests-with-github-actions"}},l={},u=[{value:"Testkube Cloud",id:"testkube-cloud",level:2},{value:"How to configure Testkube CLI action for TK Cloud and run a test",id:"how-to-configure-testkube-cli-action-for-tk-cloud-and-run-a-test",level:3},{value:"Testkube OSS",id:"testkube-oss",level:2},{value:"How to configure Testkube CLI action for TK OSS and run a test",id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test",level:3},{value:"How to configure Testkube CLI action for TK OSS and run a test",id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test-1",level:3},{value:"How to connect to GKE (Google Kubernetes Engine) cluster and run a test",id:"how-to-connect-to-gke-google-kubernetes-engine-cluster-and-run-a-test",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testkube-jenkins"},"Testkube Jenkins"),(0,a.kt)("p",null,"The Testkube Jenkins integration streamlines the installation of Testkube, enabling the execution of any ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/cli/testkube"},"Testkube CLI")," command within Jenkins pipelines. This integration can be effortlessly integrated into your Jenkins setup, enhancing your continuous integration and delivery processes.\nThis Jenkins integration offers a versatile solution for managing your pipeline workflows and is compatible with Testkube Cloud, Testkube Enterprise, and the open-source Testkube platform. It allows Jenkins users to effectively utilize Testkube's capabilities within their CI/CD pipelines, providing a robust and flexible framework for test execution and automation."),(0,a.kt)("h2",{id:"testkube-cloud"},"Testkube Cloud"),(0,a.kt)("h3",{id:"how-to-configure-testkube-cli-action-for-tk-cloud-and-run-a-test"},"How to configure Testkube CLI action for TK Cloud and run a test"),(0,a.kt)("p",null,"To use Jenkins CI/CD for ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.testkube.io/"},"Testkube Cloud"),", you need to create an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-cloud/articles/organization-management/#api-tokens"},"API token"),".\nThen, pass the ",(0,a.kt)("strong",{parentName:"p"},"organization")," and ",(0,a.kt)("strong",{parentName:"p"},"environment")," IDs, along with the ",(0,a.kt)("strong",{parentName:"p"},"token")," and other parameters specific for your use case."),(0,a.kt)("p",null,"If a test is already created, you can run it using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube run test test-name -f")," . However, if you need to create a test in this workflow, please add a creation command, e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube create test --name test-name --file path_to_file.json"),"."),(0,a.kt)("p",null,"you'll need to create a Jenkinsfile. This Jenkinsfile should define the stages and steps necessary to execute the workflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n    agent any\n\n    stages {\n        stage('Setup Testkube') {\n            steps {\n                script {\n                    // Retrieve credentials\n                    def apiKey = credentials('TESTKUBE_API_KEY')\n                    def orgId  = credentials('TESTKUBE_ORG_ID')\n                    def envId  = credentials('TESTKUBE_ENV_ID')\n\n                    // Install Testkube\n                    sh 'curl -sSLf https://get.testkube.io | sh'\n\n                    // Initialize Testkube\n                    sh \"testkube set context --api-key ${apiKey} --org ${orgId} --env ${envId}\"\n                }\n            }\n        }\n\n        stage('Run Testkube Test') {\n            steps {\n                // Run a Testkube test\n                sh 'testkube run test test-name -f'\n            }\n        }\n    }\n}\n\n")),(0,a.kt)("h2",{id:"testkube-oss"},"Testkube OSS"),(0,a.kt)("h3",{id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test"},"How to configure Testkube CLI action for TK OSS and run a test"),(0,a.kt)("p",null,"To connect to the self-hosted instance, you need to have ",(0,a.kt)("strong",{parentName:"p"},"kubectl")," configured for accessing your Kubernetes cluster, and pass an optional namespace, if Testkube is not deployed in the default ",(0,a.kt)("strong",{parentName:"p"},"testkube")," namespace. "),(0,a.kt)("p",null,"If a test is already created, you can run it using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube run test test-name -f")," . However, if you need to create a test in this workflow, please add a creation command, e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube create test --name test-name --file path_to_file.json"),"."),(0,a.kt)("p",null,"you'll need to create a Jenkinsfile. This Jenkinsfile should define the stages and steps necessary to execute the workflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n    agent any\n\n    stages {\n        stage('Setup Testkube') {\n            steps {\n                script {\n                    // Retrieve credentials\n                    def namespace='custom-testkube'\n\n                    // Install Testkube\n                    sh 'curl -sSLf https://get.testkube.io | sh'\n\n                    // Initialize Testkube\n                    sh \"testkube set context --kubeconfig --namespace ${namespace}\"\n                }\n            }\n        }\n\n        stage('Run Testkube Test') {\n            steps {\n                // Run a Testkube test\n                sh 'testkube run test test-name -f'\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,"The steps to connect to your Kubernetes cluster differ for each provider. You should check the docs of your Cloud provider for how to connect to the Kubernetes cluster from Jenkins CI/CD"),(0,a.kt)("h3",{id:"how-to-configure-testkube-cli-action-for-tk-oss-and-run-a-test-1"},"How to configure Testkube CLI action for TK OSS and run a test"),(0,a.kt)("p",null,"This workflow establishes a connection to EKS cluster and creates and runs a test using TK CLI. In this example we also use variables not\nto reveal sensitive data. Please make sure that the following points are satisfied:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"AwsAccessKeyId")),", ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"AwsSecretAccessKeyId"))," secrets should contain your AWS IAM keys with proper permissions to connect to EKS cluste\nr."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"AwsRegion"))," secret should contain AWS region where EKS is"),(0,a.kt)("li",{parentName:"ul"},"Tke ",(0,a.kt)("strong",{parentName:"li"},"EksClusterName")," secret points to the name of EKS cluster you want to connect.")),(0,a.kt)("p",null,"you'll need to create a Jenkinsfile. This Jenkinsfile should define the stages and steps necessary to execute the workflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n    agent any\n\n    stages {\n        stage('Setup Testkube') {\n            steps {\n                script {\n                    // Setting up AWS credentials\n                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'AwsAccessKeyId']]) {\n                        sh 'aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID'\n                        sh 'aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY'\n                        sh 'aws configure set region $AWS_REGION'\n                    }\n\n                    // Updating kubeconfig for EKS\n                    withCredentials([string(credentialsId: 'EksClusterName', variable: 'EKS_CLUSTER_NAME')]) {\n                        sh 'aws eks update-kubeconfig --name $EKS_CLUSTER_NAME --region $AWS_REGION'\n                    }\n\n                    // Installing Testkube\n                    sh 'curl -sSLf https://get.testkube.io | sh'\n\n                    // Initializing Testkube\n                    withCredentials([\n                        string(credentialsId: 'TestkubeApiKey', variable: 'TESTKUBE_API_KEY'),\n                        string(credentialsId: 'TestkubeOrgId', variable: 'TESTKUBE_ORG_ID'),\n                        string(credentialsId: 'TestkubeEnvId', variable: 'TESTKUBE_ENV_ID')\n                    ]) {\n                        sh 'testkube set context --api-key $TESTKUBE_API_KEY --org $TESTKUBE_ORG_ID --env $TESTKUBE_ENV_ID'\n                    }\n\n                    // Running Testkube test\n                    sh 'testkube run test test-name -f'\n                }\n            }\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"how-to-connect-to-gke-google-kubernetes-engine-cluster-and-run-a-test"},"How to connect to GKE (Google Kubernetes Engine) cluster and run a test"),(0,a.kt)("p",null,"This example connects to a k8s cluster in Google Cloud, creates and runs a test using Testkube Jenkins workflow. Please make sure that the following points are satisfied:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"GKE Sevice Account"))," should be created prior in Google Cloud and added to Jenkins variables along with ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"GKE Project"))," value;"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"GKE Cluster Name"))," and ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"GKE Zone"))," can be added as environmental variables in the workflow.\nyou'll need to create a Jenkinsfile. This Jenkinsfile should define the stages and steps necessary to execute the workflow")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n    agent any\n\n    stages {\n        stage('Deploy to GKE') {\n            steps {\n                script {\n                    // Activating GKE service account\n                    withCredentials([file(credentialsId: 'GKE_SA_KEY', variable: 'GKE_SA_KEY_FILE')]) {\n                        sh 'gcloud auth activate-service-account --key-file=$GKE_SA_KEY_FILE'\n                    }\n\n                    // Setting GCP project\n                    withCredentials([string(credentialsId: 'GKE_PROJECT', variable: 'GKE_PROJECT')]) {\n                        sh 'gcloud config set project $GKE_PROJECT'\n                    }\n\n                    // Configure Docker with gcloud as a credential helper\n                    sh 'gcloud --quiet auth configure-docker'\n\n                    // Get GKE cluster credentials\n                    withCredentials([\n                        string(credentialsId: 'GKE_CLUSTER_NAME', variable: 'GKE_CLUSTER_NAME'),\n                        string(credentialsId: 'GKE_ZONE', variable: 'GKE_ZONE')\n                    ]) {\n                        sh 'gcloud container clusters get-credentials $GKE_CLUSTER_NAME --zone $GKE_ZONE'\n                    }\n\n                    // Installing and initializing Testkube\n                    withCredentials([\n                        string(credentialsId: 'TESTKUBE_API_KEY', variable: 'TESTKUBE_API_KEY'),\n                        string(credentialsId: 'TESTKUBE_ORG_ID', variable: 'TESTKUBE_ORG_ID'),\n                        string(credentialsId: 'TESTKUBE_ENV_ID', variable: 'TESTKUBE_ENV_ID')\n                    ]) {\n                        sh 'curl -sSLf https://get.testkube.io | sh'\n                        sh 'testkube set context --api-key $TESTKUBE_API_KEY --org $TESTKUBE_ORG_ID --env $TESTKUBE_ENV_ID'\n                    }\n\n                    // Running Testkube test\n                    sh 'testkube run test test-name -f'\n                }\n            }\n        }\n    }\n\n    post {\n        always {\n            // Clean up\n            sh 'rm -f $GKE_SA_KEY_FILE'\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);