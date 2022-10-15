# Scenarios

#### UI

#### API

###### First test

The first test creates a new pet, and then also checks whether the pet was correctly created, and is achieved best with two requests. Most of the posted data is randomly generated using postman dynamic variables (faker).

###### Second test

The second test creates a new user and then checks this action was successful. Like previously, this is done using two requests, one to create and a second to check everything was ok, using the same username to query.

###### Third test

This last test creates a new order. Unfortunately retrieving orders seems to only work for a few, predefined orders (ids from 1 to 10). Instead here I just check the response of the post, which also contains the order's information.

The tests are run from the CLI using newman and are from a postman collection.

```
newman run api/pet-store.json
```
