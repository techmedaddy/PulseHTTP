const request = require('supertest');
const app = require('../server');

// Example test
describe('User API', () => {
    it('should return a list of users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('length');
    });
});