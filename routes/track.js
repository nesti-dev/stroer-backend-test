const express = require('express');
const router = express.Router();

/* POST track data. */
router.post('/', function(req, res, next) {
  const body = req.body
  res.send({'status': 'OK'})
});

module.exports = router;
