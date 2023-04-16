/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");
const getDogs = require("../../src/controllers/getDogs.js");

const agent = session(app);
const dog = {
  name: "Pug",
};

describe("GET /dogs", () => {
  it("debería responder con estado 200 y un array de perros", async () => {
    const response = await session(app).get("/dogs");
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("debería devolver una lista de perros formateada correctamente", async () => {
    const dogs = await getDogs();
    expect(dogs).to.be.an("array");
    expect(dogs[0]).to.have.property("name");
    expect(dogs[0]).to.have.property("image");
    expect(dogs[0]).to.have.property("temperament");
  });
});

// describe('Videogame routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Dog.sync({ force: true })
//     .then(() => Dog.create(dog)));
//   describe('GET /dogs', () => {
//     it('should get 200', () =>
//       agent.get('/dogs').expect(200)
//     );
//   });
// });
