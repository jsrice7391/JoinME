### Schema

DROP DATABASE IF EXISTS joinme_db;

CREATE DATABASE joinme_db;
USE joinme_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);
