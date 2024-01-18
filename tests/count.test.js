const request = require('supertest');

const app = require('../app');

const RedisService = require('../services/redis');


jest.mock('../services/redis');


describe('/count', () => {
    it('GET /count - should count', async () => {
        const count = 0

        RedisService.prototype.getCount.mockReturnValueOnce(count)

        const res = await request(app)
            .get('/count');

        expect(RedisService.prototype.getCount).toHaveBeenCalled()
        expect(res.status).toBe(200)
        expect(res.body).toEqual({'count': count})

        jest.clearAllMocks()
    });
})
