const express = require('express');
const router = express.Router();

const FileService = require('../services/file');
const RedisService = require('../services/redis');


const fileService = new FileService()
const redisService = new RedisService()


/* POST track data. */
router.post('/', async function(req, res, next) {
  const data = req.body

  fileService.save(data)

  if (data.count) {
    await redisService.incrementCountBy(data.count)
  }

  res.send({'status': 'OK'})
});


module.exports = router;
