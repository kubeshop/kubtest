"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[3732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||a;return n?s.createElement(m,o(o({ref:t},c),{},{components:n})):s.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const a={},o="Run Tests with GitHub Actions",i={unversionedId:"articles/run-tests-with-github-actions",id:"articles/run-tests-with-github-actions",title:"Run Tests with GitHub Actions",description:"If you need more control over your flow or to access a private cluster, use Testkube Action instead.",source:"@site/docs/articles/run-tests-with-github-actions.md",sourceDirName:"articles",slug:"/articles/run-tests-with-github-actions",permalink:"/articles/run-tests-with-github-actions",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/run-tests-with-github-actions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube Gitlab CI",permalink:"/articles/gitlab"},next:{title:"Testkube Docker CLI",permalink:"/articles/testkube-cli-docker"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Testkube Pro",id:"testkube-pro",level:3},{value:"Self-hosted Instance",id:"self-hosted-instance",level:3},{value:"Examples",id:"examples",level:3},{value:"Real-life Examples",id:"real-life-examples",level:4},{value:"Inputs",id:"inputs",level:2},{value:"Test",id:"test",level:3},{value:"Test Suite",id:"test-suite",level:3},{value:"Pro and Enterprise",id:"pro-and-enterprise",level:3},{value:"Own Instance",id:"own-instance",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-tests-with-github-actions"},"Run Tests with GitHub Actions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you need more control over your flow or to access a private cluster, use ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/marketplace/actions/testkube-action"},"Testkube Action")," instead.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run on Testkube")," is a GitHub Action for running tests on the Testkube platform."),(0,r.kt)("p",null,"Use it to run tests and test suites and obtain results directly in the GitHub's workflow."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the action in your GitHub workflow, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeshop/testkube-run-action@v1")," action. The configuration options are described in the Inputs section and may vary depending on the Testkube solution you are using (cloud or self-hosted) and your needs."),(0,r.kt)("p",null,"The most important options you will need are ",(0,r.kt)("strong",{parentName:"p"},"test")," and ",(0,r.kt)("strong",{parentName:"p"},"testSuite")," - you should pass a test or test suite name there."),(0,r.kt)("h3",{id:"testkube-pro"},"Testkube Pro"),(0,r.kt)("p",null,"To use this GitHub Action for Testkube Pro, you need to create an API token."),(0,r.kt)("p",null,"Then, pass the ",(0,r.kt)("strong",{parentName:"p"},"organization")," and ",(0,r.kt)("strong",{parentName:"p"},"environment")," IDs for the test, along with the ",(0,r.kt)("strong",{parentName:"p"},"token")," and other parameters specific for your use case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uses: kubeshop/testkube-run-action@v1\nwith:\n  # Instance\n  organization: tkcorg_0123456789abcdef\n  environment: tkcenv_fedcba9876543210\n  token: tkcapi_0123456789abcdef0123456789abcd\n  # Options\n  test: some-test-id-to-run\n")),(0,r.kt)("p",null,"It will probably be unsafe to keep this directly in the workflow's YAML configuration, so you may want to use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets"},"GitHub's secrets")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uses: kubeshop/testkube-run-action@v1\nwith:\n  # Instance\n  organization: ${{ secrets.TkOrganization }}\n  environment: ${{ secrets.TkEnvironment }}\n  token: ${{ secrets.TkToken }}\n  # Options\n  test: some-test-id-to-run\n")),(0,r.kt)("h3",{id:"self-hosted-instance"},"Self-hosted Instance"),(0,r.kt)("p",null,"To run the test on self-hosted instance, simply pass the URL that points to the API, i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uses: kubeshop/testkube-run-action@v1\nwith:\n  # Instance\n  url: https://demo.testkube.io/results/v1\n  # Options\n  test: some-test-id-to-run\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Run a test on a self-hosted instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uses: kubeshop/testkube-run-action@v1\nwith:\n  url: https://demo.testkube.io/results/v1\n  test: container-executor-curl-smoke\n")),(0,r.kt)("p",null,"Run a test suite on a self-hosted instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uses: kubeshop/testkube-run-action@v1\nwith:\n  url: https://demo.testkube.io/results/v1\n  testSuite: executor-soapui-smoke-tests\n")),(0,r.kt)("p",null,"Run tests from a local repository for the PR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uses: kubeshop/testkube-run-action@v1\nwith:\n  organization: ${{ secrets.TkOrganization }}\n  environment: ${{ secrets.TkEnvironment }}\n  token: ${{ secrets.TkToken }}\n  test: e2e-dashboard-tests\n  ref: ${{ github.head_ref }}\n")),(0,r.kt)("p",null,"Run tests with custom environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'uses: kubeshop/testkube-run-action@v1\nwith:\n  organization: ${{ secrets.TkOrganization }}\n  environment: ${{ secrets.TkEnvironment }}\n  token: ${{ secrets.TkToken }}\n  test: e2e-dashboard-tests\n  variables: |\n    URL="https://some.domain.com"\n    EXECUTED_FROM="${{ github.head_ref }}"\n  secretVariables: |\n    SOME_SECRET_ENV="abc"\n    OTHER_ENV="${{ secrets.ExternalToken }}"\n')),(0,r.kt)("h4",{id:"real-life-examples"},"Real-life Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"testkube-run-action")," is also used for running Testkube internal tests with Testkube. Workflow for Testkube Dashboard E2E tests can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-dashboard/blob/develop/.github/workflows/pr_checks.yml#L28"},"here")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"There are different inputs available for tests and test suites, as well as for Pro and your own instance."),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"| Required | Name            | Description\n+----------+-----------------+-----------------------------------------------------------\n|    \u2713     | test            | Test name in the Testkube environment.\n|    \u2717     | ref             | Override Git reference (branch, commit, tag) for the test.\n|    \u2717     | preRunScript    | Override pre-run script for the test.\n|    \u2717     | variables       | Basic variables in the dotenv format.\n|    \u2717     | secretVariables | Secret variables in the dotenv format.\n|    \u2717     | executionName   | Override execution name, so you may i.e. mention the PR.\n|    \u2717     | namespace       | Set namespace to run test in.\n")),(0,r.kt)("h3",{id:"test-suite"},"Test Suite"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"| Required | Name            | Description\n+----------+-----------------+---------------------------------------------------------\n|     \u2713    | testSuite       | Test suite name in the Testkube environment.\n|     \u2717    | variables       | Basic variables in the dotenv format.\n|     \u2717    | secretVariables | Variables    Secret variables in the dotenv format.\n|     \u2717    | executionName   | Override execution name, so you may i.e. mention the PR.\n|     \u2717    | namespace       | Set namespace to run test suite in.\n")),(0,r.kt)("h3",{id:"pro-and-enterprise"},"Pro and Enterprise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"| Required | Name         | Description\n+----------+--------------+------------------------------------------------------------------------------------------------------------------------------\n|     \u2713    | organization | The organization ID from Testkube Pro or Enterprise - it starts with tkc_org, you may find it i.e. in the dashboard's URL.\n|     \u2713    | environment  | The environment ID from Testkube Pro or Enterprise - it starts with tkc_env, you may find it i.e. in the dashboard's URL.\n|     \u2713    | token        | API token that has at least a permission to run specific test or test suite. Read more about creating API token in Testkube Pro or Enterprise.\n|     \u2717    | url          | URL of the Testkube Enterprise instance, if applicable.\n|     \u2717    | dashboardUrl | URL of the Testkube Enterprise dashboard, if applicable, to display links for the execution.\n")),(0,r.kt)("h3",{id:"own-instance"},"Own Instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"| Required | Name         | Description\n+----------+--------------+----------------------------------------------------------------------------------------\n|     \u2713    | url          | URL for the API of the own Testkube instance.\n|     \u2717    | ws           | Override WebSocket API URL of the own Testkube instance (use it only if auto-detection doesn't work).\n|     \u2717    | dashboardUrl | URL for the Dashboard of the own Testkube instance, to display links for the execution.\n")))}p.isMDXComponent=!0}}]);