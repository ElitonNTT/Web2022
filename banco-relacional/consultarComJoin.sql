select * from estados e, cidades c
where e.id = c.estado_id

select 
  c.nome as Cidade,
  e.nome as Estado,
  regiao as Região
from estados as e
inner join cidades as c on e.id = c.estado_id