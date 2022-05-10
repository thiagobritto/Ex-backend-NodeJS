CREATE TABLE product (
    id_product int(11) not null auto_increment,
    manufacturer VARCHAR(100),
    provider VARCHAR(100),
    description VARCHAR(200) NOT NULL,
    ncm VARCHAR(8),
    category VARCHAR(100),
    unity VARCHAR(20),
    price DECIMAL(10,2) NOT NULL,
    stock INT(11) DEFAULT 0,
    primary key (id_product)
);