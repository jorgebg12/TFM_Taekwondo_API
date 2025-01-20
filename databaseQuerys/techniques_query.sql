
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
('Montong Bande Jirugui', '/ataques/montong-bande-jirugi.png', 'ataque', 'yellow', false),
('Montong Baro Jirugui', '/ataques/montong-bande-jirugi.png', 'ataque', 'yellow', false),
('Montong Dubong Jirugui', '/ataques/montong-dubon-jirugi.jpg', 'ataque', 'yellow', false),
('Olgul Bande Jirugui', '/ataques/olgun-bande-jirugi.png', 'ataque', 'orange', false),
('Olgul Baro Jirugui', '/ataques/olgun-bande-jirugi.png', 'ataque', 'orange', false),
('Sonnal An Chigui', '/ataques/sonnal-an-chigui.jpg', 'ataque', 'orange', false),--
('Dung Chumok Ape Chigui', '/ataques/dung-chumok-ap-chigi.png', 'ataque', 'orange', false),
('Palkup Dollyo Chigui', '/ataques/palkup-dollyio-chigi.png', 'ataque', 'green', false),
('Pioson Kut Seuo Jirugui', '/ataques/pioson-kut.jpg', 'ataque', 'green', false),
('Me Chumok Neryo Yop Chigui', '/ataques/neryo-yop-chigui.jpg', 'ataque', 'green', false),
('Du Checho Jirugui', '/ataques/du-checho-jirugui.jpg', 'ataque', 'blue', false),
('Dung Chumok Bakat Chigui', '/ataques/dung-chumok-bakat-chigui.jpg', 'ataque', 'blue', false),
('Yop Jirugui', '/ataques/montong-yop-jirugi.png', 'ataque', 'blue', false);

INSERT INTO techniques (name, image, type, belt, marked) VALUES
('Are Maki', '/defensas/are-maki.png', 'defensa', 'yellow', false),
('Montong An Maki', '/defensas/montong-an-maki.png', 'defensa', 'yellow', false),
('Montong Maki', '/defensas/montong-maki.png', 'defensa', 'yellow', false),
('Olgul Maki', '/defensas/olgul-maki.png', 'defensa', 'yellow', false),
('Jansonnal Montong Bakat Maki', '/defensas/jansonnal-montong-bakat-maki.jpg', 'defensa', 'orange', false),
('Sonnal Montong Maki', '/defensas/sonnal-montong-bakat-maki.png', 'defensa', 'green', false),
('Montong Bakat Maki', '/defensas/montong-bakat-maki.png', 'defensa', 'green', false),
('Olgul Bakat Maki', '/defensas/olgul-bakat-maki.jpg', 'defensa', 'green', false),
('Gechio Are Maki', '/defensas/gechio-are-maki.jpg', 'defensa', 'green', false),
('Batangson Montong Maki', '/defensas/batangson-montong-maki.jpg', 'defensa', 'green', false),
('Batangson Montong An Maki', '/defensas/batangson-montong-an-maki.jpg', 'defensa', 'green', false),
('Sonnal Are Maki', '/defensas/sonnal-are-maki.jpg', 'defensa', 'blue', false),
('Goduro Batangson Montong An Maki', '/defensas/goduro-batangson-montong-an-maki.jpg', 'defensa', 'blue', false),
('Gechio Montong Maki', '/defensas/gechio-montong-maki.jpg', 'defensa', 'blue', false),
('Okgoro Are Maki', '/defensas/okgoro-are-maki.jpg', 'defensa', 'blue', false),
('Jansonnal Montong Yop Maki', '/defensas/jansonnal-montong-yop-maki.jpg', 'defensa', 'blue', false),
('Goduro Montong Maki', '/defensas/sonnal-goduro-montong-maki.png', 'defensa', 'red', false),
('Goduro Are Maki', '/defensas/goduro-are-maki.jpg', 'defensa', 'red', false);

INSERT INTO techniques (name, image, type, belt, marked) VALUES
('Kibon Chumbi', '/pum/kibon-chumbi.jpg', 'pum', 'yellow', false),
('Chebipum Mok Chigui', '/pum/chebipum-mok-chigui.jpg', 'pum', 'green', false),
('Momtong Piochok Palkup Chigui', '/pum/montong-piochok-palkup-chigui.jpg', 'pum', 'green', false),
('Bituro Jansonnal Olgul Bakat Maki', '/pum/bituro-jansonnal-olgul-bakat-maki.jpg', 'pum', 'blue', false),
('Bo Chumok Chumbi', '/pum/bo-chumok-chumbi.jpg', 'pum', 'blue', false),
('Gawi Maki', '/pum/gawi-maki.jpg', 'pum', 'blue', false),
('Dubong Gawi Maki', '/pum/gawi-maki.jpg', 'pum', 'blue', false),
('Dangkio Ollyo Murup Chigui', '/pum/dangkio-ollyio-murup-chigui.jpg', 'pum', 'blue', false),
('Piochok Chagui', '/pum/piochok-chagui.jpg', 'pum', 'blue', false),
('Oe Santul Maki', '/pum/oe-santul-maki.jpg', 'pum', 'red', false),
('Dangkio Tok Jirugui', '/pum/dangkio-tok-jirugui.jpg', 'pum', 'red', false);

INSERT INTO techniques (name, image, type, belt, marked) VALUES
('Charyot Sogui', '/posiciones/charyot-sogui.jpg', 'posicion', 'yellow', false),
('Pionji Sogui', '/posiciones/pionji-sogui.jpg', 'posicion', 'yellow', false),
('Moa Sogui', '/posiciones/moa-sogui.jpg', 'posicion', 'yellow', false),
('Ap Sogui', '/posiciones/ap-sogui.jpg', 'posicion', 'yellow', false),
('Ap Kubi Sogui', '/posiciones/ap-kubi-sogui.jpg', 'posicion', 'yellow', false),
('Chuchum Sogui', '/posiciones/chuchum-sogui.jpg', 'posicion', 'yellow', false),
('Tuit Kubi Sogui', '/posiciones/tuit-kubi-sogui.jpg', 'posicion', 'orange', false),
('Naranji Sogui', '/posiciones/naranji-sogui.jpg', 'posicion', 'orange', false),
('Tuit Koa Sogui', '/posiciones/tuit-koa-sogui.jpg', 'posicion', 'green', false),
('App Koa Sogui', '/posiciones/app-koa-sogui.jpg', 'posicion', 'green', false),
('Bom Sogui', '/posiciones/bom-sogui.jpg', 'posicion', 'blue', false),
('Uen Sogui', '/posiciones/uen-sogui.jpg', 'posicion', 'blue', false),
('Orum Sogui', '/posiciones/orum-sogui.jpg', 'posicion', 'blue', false);



SELECT * from techniques;