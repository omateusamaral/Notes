const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../src/app');
const User = require('../../src/app/models/User');
describe('User', () => {
  it('should encrypt user password when new user created', async () => {
    const user = await User.create({
      name: 'world',
      email: 'hello@world.com.br',
      password: '123456',
    });
    const compareHash = await bcrypt.compare('123456', user.password_hash);
    expect(compareHash).toBe(true);
  });

  it('should not be able to register with duplicated email', async () => {
    await request(app).post('/users').send({
      name: 'mateus',
      email: 'mateus@teste2.com.br',
      password: '123456',
    });

    const response = await request(app).post('/users').send({
      name: 'mateus',
      email: 'mateus@teste2.com.br',
      password: '123456',
    });
    expect(response.status).toBe(400);
  });

  it('should be able to update an user', async () => {
    const user = await User.create({
      name: 'testForUpdate',
      email: 'test@update.com.br',
      password: 'password',
    });
    const responseone = await request(app).post('/sessions').send({
      email: 'test@update.com.br',
      password: 'password',
    });
    let toke = responseone.body.token;
    const response = await request(app)
      .put('/users')
      .send({
        name: 'testForUpdate',
        email: 'test@update.com.br',
        oldPassword: 'password',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .set('Authorization', `Bearer ${toke}`);
    expect(response.status).toBe(200);
  });

  it('should  not be able to update an user', async () => {
    const user = await User.create({
      name: 'testForUpdate2',
      email: 'test2@update.com.br',
      password: 'password',
    });
    const responseone = await request(app).post('/sessions').send({
      email: 'test2@update.com.br',
      password: 'password',
    });
    let toke = responseone.body.token;
    const response = await request(app)
      .put('/users')
      .send({
        name: 'testForUpdate2',
        email: 'test2@update.com.br',
        oldPassword: 'password05',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .set('Authorization', `Bearer ${toke}`);
    expect(response.status).toBe(401);
  });
});
