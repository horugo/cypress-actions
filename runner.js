const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM0OTY3NmQ1LTExNzAtNDY2MC05NGU4LTc5YmI0NmEzZjczZi0xNzA5NjY2NTU5NzY2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMmY5N2VjOWItMjViMC00MWE2LWJlYmQtNzhhMzE0MzJlZTM0IiwidHlwZSI6InQifQ.dJWy6EIjU6x8nq_PEDq0j27YT7J8eZijaQ1cMYgufS8'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
