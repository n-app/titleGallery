DROP DATABASE IF EXISTS roomsPhotoGalleries;

CREATE DATABASE roomsPhotoGalleries;

USE roomsPhotoGalleries;

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  roomImageUrls varchar(1000) NOT NULL,
  PRIMARY KEY(id)
);

ALTER TABLE photos AUTO_INCREMENT = 1000;
