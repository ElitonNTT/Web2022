alter table empresas modify cnpj varchar(14)


insert into empresas
  (nome, cnpj)
values
  ('Bradesco', 98415543000174),
  ('Vale', 98415543000173),
  ('Cielo', 08415543000172);

-- usado para ver as tables, detalhes
desc empresas
desc prefeitos

select * from empresas
select * from cidades

insert into empresas_unidades
  (empresa_id, cidade_id, sede)
values
  (1,1,1),
  (1,2,0),
  (2,1,0),
  (2,2,1)