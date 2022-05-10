CREATE TABLE client (
    id_client INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(150),
    email VARCHAR(150),
    cpf_cnpj VARCHAR(20),
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(200) NOT NULL,
    address2 VARCHAR(100),
    district VARCHAR(80) NOT NULL,
    zipcode VARCHAR(10),
    number VARCHAR(5),
    city VARCHAR(100) NOT NULL,
    uf VARCHAR(2),
    primary key (id_client)
);