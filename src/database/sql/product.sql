CREATE TABLE product (
    id_product int(11) not null auto_increment,
    description VARCHAR(200) NOT NULL,
    id_category INT(11) NOT NULL,
    manufacturer VARCHAR(100),
    provider VARCHAR(100),
    ncm VARCHAR(8),
    id_unity INT(11) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT(11) DEFAULT 0,
    primary key (id_product),
    CONSTRAINT fk_product_category 
    FOREIGN KEY (id_category) REFERENCES category(id_category),
    CONSTRAINT fk_product_unity 
    FOREIGN KEY (id_unity) REFERENCES unity(id_unity)
);