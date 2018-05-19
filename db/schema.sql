drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

drop table if exists burgers;
create table burgers (
  id int auto_increment not null,
  burger_name varchar(150) not null,
  devoured boolean default false,
  primary key (id)
);

