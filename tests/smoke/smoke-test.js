describe('API smoke test', () => {
  it('BerlinClock API test', async ({ supertest }) => {
    await supertest
      .request('http://159.122.186.201:31647')
      .post('/time')
      .send({
        time: '23:59:59',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response._body).to.include({
          seconds: 'Y',
          topRow: 'YYYY',
          secondRow: 'YYYO',
          thirdRow: 'YYRYYRYYRYY',
          fourthRow: 'YYYY',
        });
      });
  });
});
