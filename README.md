# Pre-requisites

1. Make sure node's working correctly

2. Run
```
npm install
```

3. Either 
```
npx cypress run
```
or
```
newman run api/pet-store.json
```

# Scenarios

#### UI

The first test is an ajax call and waiting for it. The test navigates to the correct page and presses a button after which it waits for the action to have a result.

The second test deals with a more complex way of finding a value in a table and comparing it to a given value. The table itself was not a `<table>` but instead `<span>` which makes finding values a bit more challenging. The HTML standard `<table>` could've been used with the same result.

The last test does a text input and checks the result.

---

I wanted to play around with the Shadow DOM one but the first button errors in the console which makes any framework freak out. This can be overridden in the settings.

Some of the tests give the solution directly, and others don't do much so I opted for the more interactive ones.

#### API

###### First test

The first test creates a new pet, and then also checks whether the pet was correctly created, and is achieved best with two requests. Most of the posted data is randomly generated using postman dynamic variables (faker).

###### Second test

The second test creates a new user and then checks this action was successful. Like previously, this is done using two requests, one to create and a second to check everything was ok, using the same username to query.

###### Third test

This last test creates a new order. Unfortunately retrieving orders seems to only work for a few, predefined orders (ids from 1 to 10). Instead here I just check the response of the post, which also contains the order's information.

The tests are run from the CLI using newman and are from a postman collection.


---

I have chosen the scenarios that make most sense for a minimal setup like this. Creating the subject of the whole API, the pet, then creating a user that supposedly places an order, and the order itself. If the API had more real interactions (login is mocked entirely, orders are hardcoded, etc), it would've contained more tests and things done of course.


```
newman run api/pet-store.json
```
