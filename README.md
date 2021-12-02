# MaiiaProject
1- install node.js
2- install VS
3- install package.json ( npm init -y )
3- install cypress ( npm install cypress )
4- to open cypress intefrace ( npx cypress open )
5- install cucumber ( npm install --save-dev cypress-cucumber-preprocessor )
6- adjust configration :
	A) cypress/plugins/index.js --> add --> const cucumber = require('cypress-cucumber-preprocessor').default
									module.exports = (on, config) => {
  									on('file:preprocessor', cucumber())
									}
	B) cypress.json --> add --> { "testFiles": "**/*.feature" }
	C) package.json --> add --> "cypress-cucumber-preprocessor": { "nonGlobalStepDefinitions": true }
7- install cucumber (gherkin) full support in the VS marketplace
