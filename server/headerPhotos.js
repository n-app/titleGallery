const express = require('express');
const db = require('./index');

const router = express.Router();

const roomIdAdjustment = -1000 + 1;

router.get('/:roomId', async (req, res, next) => {
  const roomId = req.params.roomId + roomIdAdjustment;
  try {
    
  } catch (err) {
    next(err);
  }
});


module.exports = router;
