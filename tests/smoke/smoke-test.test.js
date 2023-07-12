require('dotenv').config();
const request = require('supertest');

const clusterIP = process.env.CLUSTER_IP.trim();
const port = process.env.APP_NODEPORT.trim();

describe('API smoke test', () => {
  it('BerlinClock API test', async () => {
    await request(`http://${clusterIP}:${port}`)
      .post('/time')
      .send({
        time: '23:59:59',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual({
          seconds: 'Y',
          topRow: 'YYYY',
          secondRow: 'YYYO',
          thirdRow: 'YYRYYRYYRYY',
          fourthRow: 'YYYY',
        });
      });
  });
});
