# Projeto Store — Regras do Projeto

## Linguagem
Todos os outputs devem estar em português brasileiro.

## Arquivos protegidos
Nunca modifique `Projeto-bruno-store/Dataset/projeto_store_vendas_2024.csv` sem autorização explícita do usuário — e nunca apague nem mova esse arquivo.
Ele é o arquivo original de referência do projeto. Desde 15/11/2026 contém as correções
(categoria "Acessórios" padronizada, 7 descontos recalculados, 3 valor_total corrigidos nas linhas 288, 336 e 426).
A versão antiga sem correções (`_original.csv`) foi apagada a pedido do usuário em 15/11/2026.

## Outputs
Relatórios e resultados de análise são apresentados apenas na conversa — não salve em arquivo.
Única exceção: gráficos PNG gerados pela skill `chart-patterns`, salvos em `output/charts/`
(pasta do projeto).
Segunda exceção: relatórios executivos da skill `report-style`, salvos em
`output/relatorio-executivo-[data].md` (pasta do projeto).
Não gere nenhum outro arquivo (scripts .py, cópias, auxiliares).

## Contexto do projeto
Dataset: vendas de 2024 do Projeto Store.
Caminho: `Projeto-bruno-store/Dataset/projeto_store_vendas_2024.csv`
Atalho: quando o usuário escrever `dataset/projeto_store_vendas_2024.csv` (ou só
"o dataset"), ele se refere a esse arquivo. Use o caminho completo acima, sem
avisar que o atalho não existe.
500 registros, 12 colunas.
