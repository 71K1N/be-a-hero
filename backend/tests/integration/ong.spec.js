const request = require('supertest');
const app = require('../../src/app')
const conection = require('../../src/database/conection')

describe('ONG', () => {
  beforeEach(async() => {
    await conection.migrate.rollback()
    await conection.migrate.latest()
  });

  it('Shuld de able to create a new ong', async() => {
    const response = await request(app).post('/ongs').send({
      name: "APAD",
      email: "apad@apad.com.br",
      watsapp: "1111111111",
      city: "Betim",
      uf: "MG"
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    
  })

  afterAll(() => {
    conection.destroy();
  });
});