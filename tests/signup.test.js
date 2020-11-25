var app = require("../app")
var request = require("supertest")
var mongoose = require("mongoose")

var User = require("../bdd/SchemaHote")

/**
 * Connexion à la mémoire de la base de données avant tout test
 */
beforeAll(async () => await dbHandler.connect());
/**
 * Nettoyage de tout test avant de procéder à un test
 */
afterEach(async () => await dbHandler.clearDatabase());
/**
 * Fermeture de la base de donnée et du serveur
 */
afterAll(async () => await dbHandler.closeDatabase());
/**
 * Début du test
 */
describe('signup', () => {
  it('signup fonctionne', async () => {

  var test = await request(app).post("/sign-up")
  .send({
    "name": 'f',
    "email": 'f'
  })
    expect(user.body.name).toBeTruthy()
    expect(user.body.email).toBeTruthy()
  done()
  
  })
});