USE techniquesdb;

CREATE TABLE user_techniques (
    user_id VARCHAR(50),
    technique_id INT,
    PRIMARY KEY (user_id, technique_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (technique_id) REFERENCES techniques(id)
);

SELECT * from user_techniques;