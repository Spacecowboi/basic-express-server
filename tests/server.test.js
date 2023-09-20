const request = require('supertest');
const server = require('../src/server.js');

describe('Server', () => {
  it('should return 404 on a bad route', async () => {
    const res = await request(server.app).get('/badroute');
    expect(res.status).toBe(404);
  });

  it('should return 404 on a bad method', async () => {
    const res = await request(server.app).post('/person');
    expect(res.status).toBe(404);
  });

  it('should return 500 if no name in the query string', async () => {
    const res = await request(server.app).get('/person');
    expect(res.status).toBe(500);
  });

  it('should return 200 if the name is in the query string', async () => {
    const res = await request(server.app).get('/person?name=John');
    expect(res.status).toBe(200);
  });

  it('given a name in the query string, the output object is correct', async () => {
    const res = await request(server.app).get('/person?name=John');
    expect(res.body).toEqual({ name: 'John' });
  });
});