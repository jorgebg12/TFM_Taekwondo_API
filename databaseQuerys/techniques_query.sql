
DROP DATABASE IF EXISTS techniquesdb;
create database techniquesdb;

USE techniquesdb;

CREATE TABLE techniques(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image Text,
    type VARCHAR(255) NOT NULL,
    belt VARCHAR(255) NOT NULL,
    marked boolean
);

INSERT INTO techniques (name, image, type, belt, marked) VALUES
('Montong Bande Jirugui', '/placeholder-ataque.jpg', 'ataque', 'yellow', false),
('Montong Baro Jirugui', '/placeholder-ataque.jpg', 'ataque', 'yellow', false),
('Montong Dubong Jirugui', '/placeholder-ataque.jpg', 'ataque', 'yellow', false),
('Olgul Bande Jirugui', '/placeholder-ataque.jpg', 'ataque', 'orange', false),
('Olgul Baro Jirugui', '/placeholder-ataque.jpg', 'ataque', 'orange', false),
('Sonnal An Chigui', '/placeholder-ataque.jpg', 'ataque', 'orange', false),
('Dung Chumok Ape Chigui', '/placeholder-ataque.jpg', 'ataque', 'orange', false),
('Palkup Dollyo Chigui', '/placeholder-ataque.jpg', 'ataque', 'green', false),
('Pioson Kut Seuo Jirugui', '/placeholder-ataque.jpg', 'ataque', 'green', false),
('Me Chumok Neryo Yop Chigui', '/placeholder-ataque.jpg', 'ataque', 'green', false),
('Du Checho Jirugui', '/placeholder-ataque.jpg', 'ataque', 'blue', false),
('Dung Chumok Bakat Chigui', '/placeholder-ataque.jpg', 'ataque', 'blue', false),
('Yop Jirugui', '/placeholder-ataque.jpg', 'ataque', 'blue', false);

INSERT INTO techniques (name, image, type, belt, marked) VALUES
('Are Maki', '/placeholder-defensa.jpg', 'defensa', 'yellow', false),
('Montong An Maki', '/placeholder-defensa.jpg', 'defensa', 'yellow', false),
('Montong Maki', '/placeholder-defensa.jpg', 'defensa', 'yellow', false),
('Olgul Maki', '/placeholder-defensa.jpg', 'defensa', 'yellow', false),
('Jansonnal Montong Bakat Maki', '/placeholder-defensa.jpg', 'defensa', 'orange', false),
('Sonnal Montong Maki', '/placeholder-defensa.jpg', 'defensa', 'green', false),
('Montong Bakat Maki', '/placeholder-defensa.jpg', 'defensa', 'green', false),
('Olgul Bakat Maki', '/placeholder-defensa.jpg', 'defensa', 'green', false),
('Gechio Are Maki', '/placeholder-defensa.jpg', 'defensa', 'green', false),
('Batangson Montong Maki', '/placeholder-defensa.jpg', 'defensa', 'green', false),
('Batangson Montong An Maki', '/placeholder-defensa.jpg', 'defensa', 'green', false),
('Sonnal Are Maki', '/placeholder-defensa.jpg', 'defensa', 'blue', false),
('Goduro Batangson Montong An Maki', '/placeholder-defensa.jpg', 'defensa', 'blue', false),
('Gechio Montong Maki', '/placeholder-defensa.jpg', 'defensa', 'blue', false),
('Okgoro Are Maki', '/placeholder-defensa.jpg', 'defensa', 'blue', false),
('Jansonnal Montong Yop Maki', '/placeholder-defensa.jpg', 'defensa', 'blue', false),
('Goduro Montong Maki', '/placeholder-defensa.jpg', 'defensa', 'red', false),
('Goduro Are Maki', '/placeholder-defensa.jpg', 'defensa', 'red', false);

INSERT INTO techniques (name, image, type, belt, marked) VALUES
('Kibon Chumbi', '/placeholder-pum.jpg', 'pum', 'yellow', false),
('Chebipum Mok Chigui', '/placeholder-pum.jpg', 'pum', 'green', false),
('Momtong Piochok Palkup Chigui', '/placeholder-pum.jpg', 'pum', 'green', false),
('Bituro Jansonnal Olgul Bakat Maki', '/placeholder-pum.jpg', 'pum', 'blue', false),
('Bo Chumok Chumbi', '/placeholder-pum.jpg', 'pum', 'blue', false),
('Gawi Maki', '/placeholder-pum.jpg', 'pum', 'blue', false),
('Dubong Gawi Maki', '/placeholder-pum.jpg', 'pum', 'blue', false),
('Dangkio Ollyo Murup Chigui', '/placeholder-pum.jpg', 'pum', 'blue', false),
('Piochok Chagui', '/placeholder-pum.jpg', 'pum', 'blue', false),
('Oe Santul Maki', '/placeholder-pum.jpg', 'pum', 'red', false),
('Dangkio Tok Jirugui', '/placeholder-pum.jpg', 'pum', 'red', false);

INSERT INTO techniques (name, image, type, belt, marked) VALUES
('Charyot Sogui', '/placeholder-posicion.jpg', 'posicion', 'yellow', false),
('Pionji Sogui', '/placeholder-posicion.jpg', 'posicion', 'yellow', false),
('Moa Sogui', '/placeholder-posicion.jpg', 'posicion', 'yellow', false),
('Ap Sogui', '/placeholder-posicion.jpg', 'posicion', 'yellow', false),
('Ap Kubi Sogui', '/placeholder-posicion.jpg', 'posicion', 'yellow', false),
('Chuchum Sogui', '/placeholder-posicion.jpg', 'posicion', 'yellow', false),
('Tuit Kubi Sogui', '/placeholder-posicion.jpg', 'posicion', 'orange', false),
('Naranji Sogui', '/placeholder-posicion.jpg', 'posicion', 'orange', false),
('Tuit Koa Sogui', '/placeholder-posicion.jpg', 'posicion', 'green', false),
('App Koa Sogui', '/placeholder-posicion.jpg', 'posicion', 'green', false),
('Bom Sogui', '/placeholder-posicion.jpg', 'posicion', 'blue', false),
('Uen Sogui', '/placeholder-posicion.jpg', 'posicion', 'blue', false),
('Orum Sogui', '/placeholder-posicion.jpg', 'posicion', 'blue', false);



SELECT * from techniques;