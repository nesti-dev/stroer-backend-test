const request = require('supertest');

const app = require('../app');

const RedisService = require('../services/redis');
const FileService = require("../services/file");


jest.mock('../services/file');
jest.mock('../services/redis');


describe('/track', () => {
    it('POST /track - should create a file', async () => {
        const data = {
            data: 'string'
        }

        const res = await request(app)
            .post('/track')
            .send(data);

        expect(FileService.prototype.save).toHaveBeenCalledWith(data)
        expect(res.status).toBe(200)
        expect(res.body).toEqual({'status': 'OK'})

        jest.clearAllMocks()
    });

    it('POST /track - should increment count when count is a valid number', async () => {
        const data = {
            count: 5
        }
        RedisService.prototype.incrementCountBy.mockReturnValueOnce(5)

        const res_1 = await request(app)
            .post('/track')
            .send(data);

        expect(RedisService.prototype.incrementCountBy).toHaveBeenCalledWith(data.count)
        expect(res_1.status).toBe(200)
        expect(res_1.body).toEqual({'count': 5})

        RedisService.prototype.incrementCountBy.mockReturnValueOnce(10)

        const res_2 = await request(app)
            .post('/track')
            .send(data);

        expect(RedisService.prototype.incrementCountBy).toHaveBeenCalledWith(data.count)
        expect(res_2.status).toBe(200)
        expect(res_2.body).toEqual({'count': 10})

        jest.clearAllMocks()
    });

    it('POST /track - should handle count when count is not a valid number', async () => {
        const data = {
            count: 'a'
        }
        const res = await request(app)
            .post('/track')
            .send(data);

        expect(RedisService.prototype.incrementCountBy).not.toHaveBeenCalled();
        expect(res.status).toBe(400);
        expect(res.body).toEqual({'error': 'count is not a number'})
    });
});
