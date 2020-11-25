var app = require("../app")
var request = require("supertest")
var mongoose = require("mongoose")

var User = require("../bdd/SchemaHote")

beforeAll(async () => {
  const url = `mongodb+srv://admin/30094561@cluster0.xutoc.mongodb.net/EveryOneIsTheDJ?retryWrites=true&w=majority`
  await mongoose.connect(url, { useNewUrlParser: true })
})

test("timer", async (done) => {
  var test = await request(app).post("/sign-up")

  .send({
    "name": 'f',
    "email": 'f'
  })

    expect(user.body.name).toBeTruthy()
    expect(user.body.email).toBeTruthy()

  done()
  
  })