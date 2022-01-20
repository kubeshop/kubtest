#!/bin/bash

set -e

# delete all scripts test
kubectl testkube scripts 
kubectl testkube scripts delete-all
kubectl testkube scripts create --file test/e2e/Kubeshop.postman_collection.json --name kubeshop-site1
kubectl testkube scripts create --file test/e2e/Kubeshop.postman_collection.json --name kubeshop-site2
kubectl testkube scripts create --file test/e2e/Kubeshop.postman_collection.json --name kubeshop-site3
kubectl testkube scripts create --file test/e2e/Kubeshop.postman_collection.json --name kubeshop-site4
kubectl testkube scripts create --file test/e2e/Kubeshop.postman_collection.json --name kubeshop-site5
kubectl testkube scripts list 
sleep 5
kubectl testkube scripts delete kubeshop-site1
kubectl testkube scripts list 
sleep 5
kubectl testkube scripts delete-all
sleep 5

# create scripts for test purpose
kubectl testkube scripts create --file test/e2e/Kubeshop.postman_collection.json --name kubeshop-site
kubectl testkube scripts create --file test/e2e/TODO.postman_collection.json --name testkube-todo-api
kubectl testkube scripts create --git-branch main --uri https://github.com/kubeshop/testkube-example-cypress-project.git --git-path "cypress" --name testkube-todo-frontend --type cypress/project
kubectl testkube scripts create --uri https://github.com/kubeshop/testkube-dashboard.git --git-path test --git-branch main --name testkube-dashboard  --type cypress/project
cat test/e2e/curl.json | kubectl testkube scripts create --name curl-test
sleep 5


# create tests for test purpose
kubectl testkube tests delete-all
cat test/e2e/test-example-1.json | kubectl testkube tests create --name todo-app1
cat test/e2e/test-example-1.json | kubectl testkube tests create --name todo-app2
cat test/e2e/test-example-1.json | kubectl testkube tests create --name todo-app3
cat test/e2e/test-example-1.json | kubectl testkube tests create --name todo-app4
cat test/e2e/test-example-1.json | kubectl testkube tests create --name todo-app5

kubectl testkube tests delete todo-app1
kubectl testkube tests list
sleep 5

kubectl testkube tests delete-all
kubectl testkube tests list
sleep 5


# create tests with scripts above
cat test/e2e/test-example-1.json | kubectl testkube tests create --name todo-app
cat test/e2e/test-example-2.json | kubectl testkube tests create --name kubeshop
sleep 5

# running scripts
kubectl testkube scripts run kubeshop-site -f       # postman
kubectl testkube scripts execution $(id kubeshop-site) 
kubectl testkube scripts run testkube-dashboard -f  # cypress
kubectl testkube scripts execution $(id testkube-dashboard) 
kubectl testkube scripts run curl-test -f           # curl
kubectl testkube scripts execution $(id curl-test) 


# running tests
kubectl testkube tests run todo-app -f
kubectl testkube tests execution $(id todo-app) 
kubectl testkube tests run kubeshop -f
kubectl testkube tests execution $(id kubeshop) 

id() {
	kubectl testkube scripts executions | grep $1 | head -n 1 | tr -s ' ' | cut -d" " -f 8
}

testid() {
	kubectl testkube tests executions | grep $1 | head -n 1 | tr -s ' ' | cut -d" " -f 8
}
