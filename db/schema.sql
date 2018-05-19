drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

drop table if exists burgers;
create table burgers (
  id int auto_increment not null,
  burger_name varchar(150) not null,
  devoured boolean not null,
  primary key (id)
);

insert into burgers (burger_name, devoured)
values ("Double Cheese Burger", false);

insert into burgers (burger_name, devoured)
values ("Goat Cheese and Roasted Fig Burger", false);

insert into burgers (burger_name, devoured)
values ("Baconator Burger", false);

insert into burgers (burger_name, devoured)
values ("Bison Burger", true);

insert into burgers (burger_name, devoured)
values ("Smoked BBQ Burger", true);
