const express = require('express');
const router = express.Router();

const RedisService = require('../services/redis');


const redisService = new RedisService()


/* GET redis count. */
router.get('/', async function(req, res, next) {
    const count = await redisService.getCount()

    res.send({
        'count': count
    })
});


module.exports = router;
