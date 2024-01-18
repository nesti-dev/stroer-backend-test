const redis = require('redis');


class RedisService {
    constructor() {
        this.client = redis.createClient();
        this.client.connect();
    }

    async incrementCountBy(count) {
        await this.client.incrBy('count', parseInt(count));
    }

    async getCount(){
        return await (this.client.get('count'));
    }
}


module.exports = RedisService;
