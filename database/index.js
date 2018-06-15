const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'roomsPhotoGalleries',
});


connection.connect((err) => {
  if (err) {
    console.log('Error connecting to the database-->', err);
    return;
  } else {
    console.log('Success entering your data!');
  }  
});

const insertImagesUrls = (data, callback) => {
  connection.query('INSERT INTO photos (roomImageUrls) VALUES ?', [data]);
  // callback(data)
};

const getAllImagesUrlsByRoomId = async (roomId) => {
  try {
    const response = connection.query('SELECT * FROM photos WHERE id = ?', roomId);
    const data = (await response).map(row => Object.assign({}, row));
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  connection,
  insertImagesUrls,
  getAllImagesUrlsByRoomId,
};

getAllImagesUrlsByRoomId(1).then(console.log);