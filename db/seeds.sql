--run source seeds.sql

USE burgers_db;
INSERT INTO burgers (burger_name, devoured, date) VALUES ('cheeseburger', 0, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ('hamburger', 0, CURRENT_TIMESTAMP); 
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Pizza Burger', 0, CURRENT_TIMESTAMP);