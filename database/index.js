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

const insertImagesUrls = (data, callback) => {
  connection.query('INSERT INTO photos (roomImageUrls) VALUES ?', [data]);
  callback(data)
};

const getAllImagesUrls = (sendCallback) => {
  connection.query('SELECT * FROM photos', (err, result) => {
    if (err) console.log(err);
    const dataArray =[]
    result.map(obj => dataArray.push(Object.assign({}, obj)) );
    sendCallback(dataArray);
    return true;
  });
};

module.exports = {
  connection,
  insertImagesUrls,
  getAllImagesUrls,
};
