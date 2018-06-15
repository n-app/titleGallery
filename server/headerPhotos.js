const express = require('express');
const db = require('../database/index');

const router = express.Router();

router.get('/:roomId', async (req, res, next) => {
  const { roomId } = req.params;
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
