"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[706],{49964:(e,t,n)=>{n.r(t),n.d(t,{ExecutorInfo:()=>d,assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>u,toc:()=>m});var s=n(87462),a=(n(67294),n(3905)),i=n(74866),o=n(85162),l=n(23612);const r={},p="Postman",u={unversionedId:"test-types/executor-postman",id:"test-types/executor-postman",title:"Postman",description:"Testkube is able to run Postman collections inside your Kubernetes cluster so it can be used to test internal or external services.",source:"@site/docs/test-types/executor-postman.mdx",sourceDirName:"test-types",slug:"/test-types/executor-postman",permalink:"/test-types/executor-postman",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/test-types/executor-postman.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playwright",permalink:"/test-types/executor-playwright"},next:{title:"Pytest",permalink:"/test-types/executor-pytest"}},c={},m=[{value:"Prerequisite: Example Postman test",id:"prerequisite-example-postman-test",level:2},{value:"Service Under Test",id:"service-under-test",level:3},{value:"Example Postman collection",id:"example-postman-collection",level:3},{value:"Exporting Postman collection",id:"exporting-postman-collection",level:4},{value:"Creating and running Test",id:"creating-and-running-test",level:2},{value:"a) Creating a Test from File",id:"a-creating-a-test-from-file",level:3},{value:"b) Creating a Test with Git file",id:"b-creating-a-test-with-git-file",level:3},{value:"Running a Test",id:"running-a-test",level:3},{value:"a) Creating a Test from File",id:"a-creating-a-test-from-file-1",level:3},{value:"b) Creating a Test with Git file",id:"b-creating-a-test-with-git-file-1",level:3},{value:"Running a Test",id:"running-a-test-1",level:3},{value:"Creating a Test with Git file",id:"creating-a-test-with-git-file",level:3}],d=()=>(0,a.kt)("div",null,(0,a.kt)(l.Z,{type:"info",icon:"\ud83c\udf93",title:"What is Postman?",mdxType:"Admonition"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Postman is a platform for designing, building, testing, and iterating APIs.")),(0,a.kt)("b",null,"What can I do with Postman?"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Postman simplifies every step of the API lifecycle, making it easy for you to iterate and test your APIs by sending and inspecting responses, writing assertions to validate endpoints, or setting up logic to mirror your workflows.")))),h={toc:m,ExecutorInfo:d};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postman"},"Postman"),(0,a.kt)("p",null,"Testkube is able to run Postman collections inside your Kubernetes cluster so it can be used to test internal or external services."),(0,a.kt)("p",null,"Default command for this executor: newman\nDefault arguments for this executor command: run ","<","runPath",">"," -e ","<","envFile",">"," --reporters cli,json --reporter-json-export ","<","reportFile",">","\n(parameters in ","<",">"," are calculated at test execution)"),(0,a.kt)(d,{mdxType:"ExecutorInfo"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check out our ",(0,a.kt)("a",{parentName:"strong",href:"https://testkube.io/blog/api-testing-in-kubernetes-with-postman"},"blog post")," to follow tutorial steps for end-to-end testing of your Kubernetes applications with Postman.")),(0,a.kt)("h2",{id:"prerequisite-example-postman-test"},"Prerequisite: Example Postman test"),(0,a.kt)("h3",{id:"service-under-test"},"Service Under Test"),(0,a.kt)("p",null,"Let's assume that our SUT (Service Under Test) is an internal Kubernetes service which has\nClusterIP ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," created and is exposed on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8088"),". The service name is ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube-api-server"),"\nand is exposing the ",(0,a.kt)("inlineCode",{parentName:"p"},"/health")," endpoint that we want to test."),(0,a.kt)("p",null,"To call the SUT inside a cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://testkube-api-server:8088/health\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"200 OK\n")),(0,a.kt)("h3",{id:"example-postman-collection"},"Example Postman collection"),(0,a.kt)("p",null,"In the following examples, we will use a simple Postman test that makes a GET request to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://testkube-api-server:8088/health"),", and validates if response code equals 200."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman create collection",src:n(89399).Z,width:"1028",height:"409"})),(0,a.kt)("p",null,"You can find it in the Testkube repository: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube/blob/main/test/postman/testkube-api-server-health.postman_collection.json"},"https://github.com/kubeshop/testkube/blob/main/test/postman/testkube-api-server-health.postman_collection.json")),(0,a.kt)("h4",{id:"exporting-postman-collection"},"Exporting Postman collection"),(0,a.kt)("p",null,"If you'd like to use another collection you can create it in Postman, and export it to the ",(0,a.kt)("inlineCode",{parentName:"p"},".postman_collection.json")," file by right clicking it and selecting Export."),(0,a.kt)("h2",{id:"creating-and-running-test"},"Creating and running Test"),(0,a.kt)("p",null,"A Postman collection consists of the single file, so the following test sources can be used to create a test:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File"),(0,a.kt)("li",{parentName:"ul"},"Git file"),(0,a.kt)("li",{parentName:"ul"},"String")),(0,a.kt)(i.Z,{groupId:"dashboard-cli",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"dash",label:"Dashboard",mdxType:"TabItem"},(0,a.kt)("p",null,"If you prefer to use the Dashboard, go to Tests and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add a new test")," button. Then you need to fill in the test Name, choose the test Type (",(0,a.kt)("inlineCode",{parentName:"p"},"postman/collection"),"), and choose Test Source of your choice."),(0,a.kt)("h3",{id:"a-creating-a-test-from-file"},"a) Creating a Test from File"),(0,a.kt)("p",null,"If you have the collection you want to run saved locally, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," as the test source. You can then select and upload it directly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dashboard create postman test from file",src:n(43273).Z,width:"875",height:"686"})),(0,a.kt)("h3",{id:"b-creating-a-test-with-git-file"},"b) Creating a Test with Git file"),(0,a.kt)("p",null,"If you have a collection in the Git repository, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Git file")," source. Then, you need to fill in repository details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"git repository URI (in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/kubeshop/testkube.git"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"branch (",(0,a.kt)("inlineCode",{parentName:"p"},"main"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"path to Postman collection in your repository (in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"test/postman/testkube-api-server-health.postman_collection.json"),"). "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"dashboard create postman test from git-file",src:n(95056).Z,width:"874",height:"1078"})),(0,a.kt)("p",{parentName:"li"},"In this example, the repository is public, but in the case of private ones you would need to additionally fill in Git credentials."))),(0,a.kt)("h3",{id:"running-a-test"},"Running a Test"),(0,a.kt)("p",null,"If you created a Test using any of the previous methods, you will be redirected to Test details. In order to run it, all you need to do is to click the Run button.")),(0,a.kt)(o.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"If you prefer using the CLI instead, you can create the test with ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube create test"),"."),(0,a.kt)("h3",{id:"a-creating-a-test-from-file-1"},"a) Creating a Test from File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube create test --name postman-test --type postman/collection --file test/postman/testkube-api-server-health.postman_collection.json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Test created testkube / postman-test \ud83e\udd47\n")),(0,a.kt)("h3",{id:"b-creating-a-test-with-git-file-1"},"b) Creating a Test with Git file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube create test --name postman-test --type postman/collection --test-content-type git-file --git-uri https://github.com/kubeshop/testkube.git --git-branch main --git-path test/postman/testkube-api-server-health.postman_collection.json```\n\n```sh\nTest created testkube / postman-test \ud83e\udd47\n")),(0,a.kt)("h3",{id:"running-a-test-1"},"Running a Test"),(0,a.kt)("p",null,"The test can be run using the ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube run test")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ testkube run test postman-test                                                                                                                 \nType:              postman/collection\nName:              postman-test\nExecution ID:      63fde0b3a862384f8f959239\nExecution name:    postman-test-6\nExecution number:  6\nStatus:            running\nStart time:        2023-02-28 11:08:35.081273721 +0000 UTC\nEnd time:          0001-01-01 00:00:00 +0000 UTC\nDuration:          \n\n\n\nTest execution started\nWatch test execution until complete:\n$ kubectl testkube watch execution postman-test-6\n\n\nUse following command to get test execution details:\n$ kubectl testkube get execution postman-test-6\n")),(0,a.kt)("p",null,"You can then check the execution results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'\nID:         63fde715a862384f8f95923d\nName:       postman-test-8\nNumber:            8\nTest name:         postman-test\nType:              postman/collection\nStatus:            passed\nStart time:        2023-02-28 11:35:49.177 +0000 UTC\nEnd time:          2023-02-28 11:35:57.203 +0000 UTC\nDuration:          00:00:08\nRepository parameters:\n  Branch:          docs-postman\n  Commit:          \n  Path:            test/postman/testkube-api-server-health.postman_collection.json\n  Working dir:     \n  Certificate:     \n\nrunning test [63fde715a862384f8f95923d]\n\ud83d\ude9a Initializing...\n\ud83c\udf0d Reading environment variables...\n\u2705 Environment variables read successfully\nRUNNER_ENDPOINT="testkube-minio-service-testkube:9000"\nRUNNER_ACCESSKEYID="********"\nRUNNER_SECRETACCESSKEY="********"\nRUNNER_REGION=""\nRUNNER_TOKEN=""\nRUNNER_BUCKET="testkube-artifacts"\nRUNNER_SSL=false\nRUNNER_SCRAPPERENABLED="true"\nRUNNER_GITUSERNAME=""\nRUNNER_GITTOKEN=""\nRUNNER_DATADIR="/data"\n\ud83d\udce6 Fetching test content from git-file...\n\u2705 Test content fetched to path /data/repo/test/postman/testkube-api-server-health.postman_collection.json\n\ud83d\udcc2 Fetching uploads from object store testkube-minio-service-testkube:9000...\n\ud83d\udcc2 Placing files from buckets into /data/uploads/ []\n\ud83d\udcc2 Getting the contents of bucket folders [test-postman-test]\n\n\ud83d\udcc2 Setting up access to files in /data\n\ud83d\udd2c Executing in directory /data: \n $ chmod \n\u2705 Execution succeeded\n\u2705 Access to files enabled\n\u2705 Initialization successful\n0xc0058e69c0\n\ud83d\ude9a Preparing test runner\n\ud83c\udf0d Reading environment variables...\n\u2705 Environment variables read successfully\nRUNNER_ENDPOINT="testkube-minio-service-testkube:9000"\nRUNNER_ACCESSKEYID="********"\nRUNNER_SECRETACCESSKEY="********"\nRUNNER_REGION=""\nRUNNER_TOKEN=""\nRUNNER_BUCKET="testkube-artifacts"\nRUNNER_SSL=false\nRUNNER_SCRAPPERENABLED="true"\nRUNNER_GITUSERNAME=""\nRUNNER_GITTOKEN=""\nRUNNER_DATADIR="/data"\nrunning test [63fde715a862384f8f95923d]\n\ud83d\ude9a Preparing for test run\n\ud83d\udce6 Fetching test content from git-file...\n\u2705 Test content fetched to path /tmp/git-checkout4073207673/repo/test/postman/testkube-api-server-health.postman_collection.json\n\ud83d\udd2c Executing in directory : \n $ newman run /tmp/git-checkout4073207673/repo/test/postman/testkube-api-server-health.postman_collection.json -e /tmp/testkube-tmp3625780620 --reporters cli,json --reporter-json-export /tmp/testkube-tmp1329378482.json\nnewman\n\n\ntestkube-api-server\n\n\n\u2192 testkube-api-server\n\n  GET http://testkube-api-server:8088/health \n[200 OK, 124B, 50ms]\n\n  \u2713  Status code is 200\n\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                         \u2502         executed \u2502           failed \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              iterations \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502                requests \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502            test-scripts \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502      prerequest-scripts \u2502                0 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              assertions \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total run duration: 85ms                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total data received: 8B (approx)                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 average response time: 50ms [min: 50ms, max: 50ms, s.d.: 0\xb5s] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u2705 Execution succeeded\n\u2705 Got Newman result successfully\n\u2705 Mapped Newman result successfully\nnewman\n\ntestkube-api-server\n\n\u2192 testkube-api-server\n  GET http://testkube-api-server:8088/health [200 OK, 124B, 50ms]\n  \u2713  Status code is 200\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                         \u2502         executed \u2502           failed \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              iterations \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502                requests \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502            test-scripts \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502      prerequest-scripts \u2502                0 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              assertions \u2502                1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total run duration: 85ms                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total data received: 8B (approx)                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 average response time: 50ms [min: 50ms, max: 50ms, s.d.: 0\xb5s] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nTest execution completed with success in 8.026s \ud83e\udd47\n'))),(0,a.kt)(o.Z,{value:"crd",label:"Custom Resource",mdxType:"TabItem"},(0,a.kt)("p",null,"The third option to create the Test is to use a Test CRD. If you already have the test created, you can check the definition in Dashboard (",(0,a.kt)("inlineCode",{parentName:"p"},"Definition")," tab in Test Settings). "),(0,a.kt)("p",null,"You can also get a definition while using ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube create test")," command by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--crd-only"),".\nIn that case, the test won't be created, but the definition will be displayed."),(0,a.kt)("h3",{id:"creating-a-test-with-git-file"},"Creating a Test with Git file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: postman-test\n  namespace: testkube\nspec:\n  type: postman/collection\n  content:\n    type: git-file\n    repository:\n      type: git\n      uri: https://github.com/kubeshop/testkube.git\n      branch: main\n      path: test/postman/testkube-api-server-health.postman_collection.json\n")),(0,a.kt)("p",null,"When the Test CRD is saved to the yaml file it can then be applied directly with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f SOME_FILE_NAME.yaml"),"."))))}k.isMDXComponent=!0},43273:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dashboard-postman-create-test-file-d304d609264026ef677ac384f78f3e20.png"},95056:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dashboard-postman-create-test-git-file-9bc3e540f5f576ed3576dce4c409e4c8.png"},89399:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/postman_create_collection-f3bcbb247f4bb6a41b5d9438e3e3beef.png"}}]);