const redis = require('redis');


class RedisService {
    constructor() {
        this.client = redis.createClient();
    }

    async connectClient() {
        await this.client.connect()
    }

    async disconnectClient() {
        await this.client.disconnect()
    }

    async incrementCount(count) {
        this.connectClient()

        await this.client.incrBy('count', parseInt(count));

        this.disconnectClient()
    }
}


module.exports = RedisService;
