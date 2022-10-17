## Setup and running locally

1. Have node working
2. `npm install`
3. `npx cypress run --reporter mochawesome`
4. `npx newman run api/pet-store.json -r json --reporter-json-export reports/newman/pet-store.json`

## Running in CI

1. Go to https://github.com/andrei1015/ui-api-js/actions
2. Select the desired workflow
3. Press the **Run workflow** button (also select the branch, there is only one, main)

Links to reports
Cypress - https://app.calliope.pro/reports/152614/public/34854951-1907-422b-a856-e31619795288
Newman - https://app.calliope.pro/reports/152613/public/1b0a3e8a-2c54-48d1-8968-79c3aa6b48c6

**Describe one improvement point and one new feature for the Calliope.pro platform;**

This is my first time using this site but it seems useful. I would also like to have some HTML integration. I was unable to find a way to permanently make a result public, so they could add that.

**What you used to select the scenarios, what was your approach?;**

For the UI tests it was pretty hard because some of them give the answer or aren't doing much visually. One interesting one was the Shadow DOM one but it seems to have a console error on which any testing framework will scream. For the API ones I chose the ones that deal with the most basic functionality of the site. (In here you can also put the login, but anything you give it will say it's a successful login so that's no fun)

**What could be the next steps to your project;**

I would integrate the CI with the reporting. Saw that calliope has API uploading.
