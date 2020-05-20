const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/app/models/User');
describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'test',
      email: 'test@email.com.br',
      password: '123456',
    });
    const response = await request(app).post('/sessions').send({
      email: 'test@email.com.br',
      password: '123456',
    });
    expect(response.status).toBe(200);
  });

  it('should return jwt token when authenticated', async () => {
    const user = await User.create({
      name: 'test02',
      email: 'test02@email.com.br',
      password: '123456',
    });
    const response = await request(app).post('/sessions').send({
      email: 'test02@email.com.br',
      password: '123456',
    });
    expect(response.body).toHaveProperty('token');
  });

  it('should be able to acess private routes when autheticated', async () => {
    const responseone = await request(app).post('/sessions').send({
      email: 'test02@email.com.br',
      password: '123456',
    });
    let ok = responseone.body.token;
    const response = await request(app)
      .get('/users/notes')
      .set('Authorization', `Bearer ${ok}`);

    expect(response.status).toBe(200);
  });

  it('should not be able to acess private routes without jwt token', async () => {
    const response = await request(app).get('/users/notes');
    expect(response.status).toBe(401);
  });

  it('should not be able to acess private routes with invalid jwt token', async () => {
    const response = await request(app)
      .get('/users/notes')
      .set('Authorization', `Bearer 123456`);

    expect(response.status).toBe(401);
  });

  it('Should not be able to create a note because past dates are not permitted', async () => {
    const response1 = await request(app).post('/sessions').send({
      email: 'test@email.com.br',
      password: '123456',
    });
    let ok = response1.body.token;
    const response = await request(app)
      .post('/users/notes')
      .send({
        title: 'teste numero 6',
        description:
          'o primeiro teste funcionou agora vamos fazer o segundo teste',
        notify: '2020-05-10T18:00:00-03:00',
      })
      .set('Authorization', `Bearer ${ok}`);

    expect(response.status).toBe(400);
  });

  it('Should be able to create a note', async () => {
    const response1 = await request(app).post('/sessions').send({
      email: 'test@email.com.br',
      password: '123456',
    });
    let ok = response1.body.token;
    const response = await request(app)
      .post('/users/notes')
      .send({
        title: 'teste numero 6',
        description:
          'o primeiro teste funcionou agora vamos fazer o segundo teste',
        notify: '2020-05-20T18:00:00-03:00',
      })
      .set('Authorization', `Bearer ${ok}`);

    expect(response.status).toBe(200);
  });
});
