require('dotenv').config();

const redis = require('redis');


REDIS_HOST = process.env.REDIS_HOST || 'localhost';
REDIS_PORT = process.env.REDIS_PORT || 6379;


class RedisService {
    constructor() {
        this.client = redis.createClient({
            url: `redis://${REDIS_HOST}:${REDIS_PORT}`
        });
        this.client.connect();
    }

    async incrementCountBy(count) {
        await this.client.incrByFloat('count', count);
        return await this.getCount();
    }

    async getCount(){
        const count = await this.client.get('count');
        return count !== null ? count : 0;
    }
}


module.exports = RedisService;
