const Faker = require('faker')

module.exports = {
  generateRandomData
}

function generateRandomData (userContext, events, done) {
  const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`
  const uuid = Faker.random.uuid()
  const mobile = `+44 0 ${Faker.random.number({min: 1000000, max: 9999999})}`
  const email = Faker.internet.email()
  userContext.vars.name = `${name} PerformanceTests`
  userContext.vars.mobile = mobile
  userContext.vars.uuid = uuid
  userContext.vars.email = email
  return done()
}
