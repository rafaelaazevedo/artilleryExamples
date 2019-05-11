# artilleryExamples
Artillery script examples for Performance Tests



## Endurance tests

Run performance tests creating 1 user every 30 seconds for 1 hour

Run the command:
```
npm run endurance:${ENV}
```


  |Name            |Purpose                                | Type      |Required   |Default                                      |
  |----------------|---------------------------------------|-----------|-----------|---------------------------------------------|
  |`ENV`           |Host where the tests are going to run  |String     |Yes        |QA                                           |
  

## Load tests

Run performance tests creating 2 users/second for 30 minutes

Run the command:
```
npm run load:${ENV}
```


  |Name            |Purpose                                | Type      |Required   |Default                                      |
  |----------------|---------------------------------------|-----------|-----------|---------------------------------------------|
  |`ENV`           |Host where the tests are going to run  |String     |Yes        |QA                                           | 


## Using docker

Run the command:
```
docker run --rm --restart=no --name=performance-tests -t rafazzevedo/artilleryexamples:latest endurance:${ENV}
```


  |Name            |Purpose                                | Type      |Required   |Default                                      |
  |----------------|---------------------------------------|-----------|-----------|---------------------------------------------|
  |`ENV`           |Host where the tests are going to run  |String     |Yes        |QA                                           |


## Using kubernetes

Run the command:
```
kubectl run performance-tests -i --rm --namespace=${ENV} --restart=Never --image=rafazzevedo/artilleryexamples:latest --image-pull-policy=Always -- endurance:jenkins:${ENV}
```


  |Name            |Purpose                                | Type      |Required   |Default                                      |
  |----------------|---------------------------------------|-----------|-----------|---------------------------------------------|
  |`ENV`           |Host where the tests are going to run  |String     |Yes        |QA                                           |

