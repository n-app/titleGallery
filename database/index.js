const mysql = require('mysql');

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

const insertImagesUrls = (data) => {
  connection.query('INSERT INTO photos (roomImageUrls) VALUES ?', [data]);
};

const getAllImagesUrls = (sendCallback) => {
  connection.query('SELECT * FROM photos', (err, result) => {
    if (err) console.log(err);
    sendCallback(result);
  });
};

module.exports = {
  connection,
  insertImagesUrls,
  getAllImagesUrls,
};
