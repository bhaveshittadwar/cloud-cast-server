const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('should return Welcome to Cloud Cast backend', async () => {
        const { expect } = await import('chai');
        return request(app)
            .get('/')
            .expect(200)
            .then(response => {
                console.log(response.body);
                expect(response.body.message).to.equal('Welcome to Cloud Cast backend');
            });
    });
});
