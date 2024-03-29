CREATE TABLE cart (
    id_cart INT(11) NOT NULL AUTO_INCREMENT,
    id_sale INT(11),
    id_product INT(11),
    amount FLOAT NOT NULL,
    value_unt DECIMAL(10,2) NOT NULL,
    value_tot DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_cart),
    CONSTRAINT fk_cart_sale FOREIGN KEY (id_sale) REFERENCES sale(id_sale),
    CONSTRAINT fk_cart_product FOREIGN KEY (id_product) REFERENCES product(id_product)
);