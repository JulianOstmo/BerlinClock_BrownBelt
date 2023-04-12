const request = require('supertest');
const app = require('../../src/index');

describe('Integration tests', () => {
  test('healthz', async () => {
    await request(app)
      .get(`/healthz`)
      .set({
        Accept: 'application/json',
      })
      .send()
      .expect(200);
  });
});
