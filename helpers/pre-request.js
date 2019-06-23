const Faker = require('faker')

module.exports = {
  generateRandomData
}

function generateRandomData (userContext, events, done) {
  userContext.vars.name = `${Faker.name.firstName()} ${Faker.name.lastName()} PerformanceTests`
  userContext.vars.mobile = `+44 0 ${Faker.random.number({min: 1000000, max: 9999999})}`
  userContext.vars.uuid = Faker.random.uuid()
  userContext.vars.email = Faker.internet.email()
  return done()
}
