USE techniquesdb;
drop table users;
CREATE TABLE users(
	id  VARCHAR(50) PRIMARY KEY,
	username VARCHAR(255) NOT NULL,    
    email VARCHAR(255) UNIQUE NOT NULL,    
    password VARCHAR(255) NOT NULL
);


INSERT INTO users (id, username, email, password) VALUES
(1, 'test', 'test@test.com', 'testtesttest');

SELECT * from users;