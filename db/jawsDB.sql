use kls2i0n1j1pq34m5;

drop table if exists burgers;
create table burgers (
  id int auto_increment not null,
  burger_name varchar(150) not null,
  devoured boolean not null,
  createdAt timestamp default current_timestamp,
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
