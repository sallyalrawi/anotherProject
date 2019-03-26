DROP DATABASE IF EXISTS hookahzon_db;
CREATE DATABASE hookahzon_db;

USE hookahzon_db;
CREATE TABLE products(
 item_id INT(10) NOT NULL auto_increment,
 product_name VARCHAR(100) NOT NULL,
 department VARCHAR(45) NOT NULL,
 price INT default 0,
 quantity INT default 0,
  PRIMARY KEY (item_id)
);
INSERT INTO products (product_name,department,price, quantity)
VALUES ("Electronic Hookah", "Hookah Tool", 100,80);

INSERT INTO products (product_name,department,price, quantity)
VALUES ("Charcoals Hookah", "Hookah Tool", 120,30);



