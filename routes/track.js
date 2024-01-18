const express = require('express');
const router = express.Router();

const FileService = require("../services/file");


const fileService = new FileService('data.json')


/* POST track data. */
router.post('/', function(req, res, next) {
  const data = req.body

  fileService.save(JSON.stringify(data))

  res.send({'status': 'OK'})
});

module.exports = router;
