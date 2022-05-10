create table client (
    id_client int(11) not null auto_increment,
    first_name varchar(80) not null,
    last_name varchar(150),
    email varchar(150),
    cpf_cnpj varchar(20),
    phone varchar(20) not null,
    address varchar(200) not null,
    address2 varchar(100),
    district varchar(80) not null,
    zipcode varchar(10),
    number varchar(5),
    city varchar(100) not null,
    uf varchar(2),
    primary key (id_client)
);