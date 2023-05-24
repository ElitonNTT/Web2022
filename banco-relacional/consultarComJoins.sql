select * from prefeitos;
select * from cidades;

select * from cidades as c inner join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c left join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c left outer join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c right join prefeitos as p on c.id = p.cidade_id;

-- full join não é suportado pelo workbench sql
-- select * from cidades as c full join prefeitos as p on c.id = p.cidade_id;
-- opção para full join é a seguinte: 

select * from cidades as c left join prefeitos as p on c.id = p.cidade_id
union
select * from cidades as c right join prefeitos as p on c.id = p.cidade_id;