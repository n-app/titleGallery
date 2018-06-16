const express = require('express');
const db = require('./index');

const router = express.Router();

const roomIdAdjustment = -1000 + 1;

router.get('/:roomId', async (req, res, next) => {
  const roomId = req.params.roomId + roomIdAdjustment;
  try {
    const data = (await db.getAllImagesUrlsByRoomId(roomId))[0];
    data.roomImageUrls = data.roomImageUrls.split('&-&-&').map(url => ({ original: url, thumbnail: url }));
    res.status(200);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
