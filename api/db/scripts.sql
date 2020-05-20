CREATE DATABASE IF NOT EXISTS appdatabase;

USE appdatabase;

CREATE TABLE IF NOT EXISTS activities (
    id INT(11) AUTO_INCREMENT,
    description VARCHAR(255),
    PRIMARY KEY (id)
)