-- usar no workbench sql

select e.nome as Empresa, c.nome as Cidade
from empresas as e, empresas_unidades as eu, cidades as c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede = 1