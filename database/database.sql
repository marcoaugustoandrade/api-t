use db_tarefas;

create table categorias(
  id        int           not null  auto_increment,
  descricao varchar(200)  not null,
  primary key (id)
);
insert into categorias (id, descricao) values
  (1, "Pessoal"),
  (2, "Escola"),
  (3, "TCC"),
  (4, "Trabalho");

create table tarefas(
  id            int           not null  auto_increment,
  descricao     varchar(255)  not null,
  datahorario   datetime      not null  default         now(),
  realizado     boolean       not null  default         false,
  categoria_id  int           not null,
  primary key (id),
  foreign key (categoria_id) references categorias (id)
);
insert into tarefas (descricao, datahorario, realizado, categoria_id) values 
  ('Pagar conta de energia', '2018-10-03 10:00:00', false, 1),
  ('Inciar o trabalho de ED', '2018-10-03 12:00:00', false, 2),
  ('Abastecer o carro', '2018-10-04 00:00:00', true, 1),
  ('Pagar conta de água', '2018-11-12 10:00:00', true, 1),
  ('Entregar trabalho de ED', '2018-11-14 19:00:00', false, 2),
  ('Entregar trabalho de Meio Ambiente', '2018-11-15 19:00:00', false, 2),
  ('Verificar folha de ponto', '2018-12-13 19:00:00', false, 4),
  ('Entregar capítulo introducao', '2018-11-28 19:00:00', false, 3);
