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
    if (isNaN(data.count)) {
      return res.status(400).send({'error': 'count is not a number'})
    }
    const count = await redisService.incrementCountBy(data.count)

    return res.send({'count': count})
  }

  return res.send({'status': 'OK'})
});


module.exports = router;
