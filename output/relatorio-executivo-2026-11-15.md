# Relatório de Análise — Projeto Store — 15/11/2026

> **Fontes**
> [F1] Perfil de dados (skill `data-profile-conventions`) do arquivo `projeto_store_vendas_2024.csv`, versão corrigida, executado em 15/11/2026.
> [F2] Agregações de vendas do mesmo arquivo, calculadas em 15/11/2026.
> [F3] Registro de correções do projeto (CLAUDE.md): versão corrigida em vigor desde 15/11/2026.
>
> **Definição usada:** "receita válida" = pedidos *Entregue* + *Em trânsito* (415 pedidos). Pedidos *Cancelado* e *Devolvido* ficam de fora.

---

## Sumário Executivo

- **A receita válida de 2024 foi de R$ 1.427.333,56 em 415 pedidos.** O valor bruto dos 500 pedidos registrados foi de R$ 1.672.029,36. [F2]
- **R$ 244.695,80 (14,6% do valor bruto) foram perdidos com cancelamentos e devoluções.** São 60 pedidos cancelados (R$ 160.305,88) e 25 devolvidos (R$ 84.389,92). [F2]
- **Notebooks geram 36,7% da receita válida (R$ 524.081,90).** Um único produto, o Notebook Gamer X, responde por 17,7% (R$ 252.288,78). [F2]
- **Acessórios são 28,9% dos pedidos válidos (120 de 415), mas só 3,5% da receita (R$ 49.380,28).** [F2]
- **R$ 89.312,20 da receita válida (6,3%) não têm vendedor identificado**, porque o campo está vazio em 8,8% dos registros. [F1, F2]

## Qualidade dos Dados

**Conclusão: a base está confiável para análise de vendas.** Nenhum erro estrutural foi encontrado. Restam 83 campos em branco em três colunas. [F1]

- **Estrutura íntegra:** 500 registros, 12 colunas, nenhum ID ou linha duplicada, nenhuma data inválida. O período vai de 01/01/2024 a 29/12/2024. [F1]
- **Cálculos corretos:** os 500 valores de `valor_total` batem com quantidade × preço × (1 − desconto). Não há quantidades, preços ou totais ≤ 0. [F1]
- **Categorias padronizadas:** nenhuma grafia divergente nas colunas de texto. [F1]
- **Correções já aplicadas nesta versão:** padronização da categoria "Acessórios", 7 descontos recalculados e 3 valores totais corrigidos (linhas 288, 336 e 426). [F3]
- **Campos em branco:**

| Campo | Registros vazios | % | Receita válida afetada |
|---|---|---|---|
| vendedor | 44 | 8,8% | R$ 89.312,20 |
| regiao | 25 | 5,0% | R$ 79.220,59 |
| canal_venda | 14 | 2,8% | R$ 23.624,95 |

[F1, F2]

**Impacto:** os rankings de vendedor, região e canal deixam de fora entre 1,7% e 6,3% da receita válida. Os totais gerais não são afetados.

## Análise de Vendas

### Por categoria e produto
**Três categorias (Notebooks, Tablets e Smartphones) concentram 74,6% da receita válida.** [F2]

| Categoria | Pedidos válidos | Receita válida | % |
|---|---|---|---|
| Notebooks | 58 | R$ 524.081,90 | 36,7% |
| Tablets | 67 | R$ 275.226,21 | 19,3% |
| Smartphones | 55 | R$ 265.240,27 | 18,6% |
| Monitores | 58 | R$ 169.965,25 | 11,9% |
| Periféricos | 57 | R$ 143.439,65 | 10,0% |
| Acessórios | 120 | R$ 49.380,28 | 3,5% |

- **Os 3 produtos que mais faturam:** Notebook Gamer X (R$ 252.288,78; 17,7%), Tablet Pro 12 (R$ 166.251,30; 11,6%) e Smartphone Pro Max (R$ 155.782,48; 10,9%). [F2]
- **Os 3 que menos faturam:** Mouse Sem Fio (R$ 5.309,85), Hub USB-C (R$ 5.265,00) e Mousepad XL (R$ 3.222,11). Cada um fica abaixo de 0,5% da receita. [F2]

### Por região
**Sudeste e Sul são as regiões com mais receita, com diferença de apenas 0,8 ponto entre elas. O Norte fatura menos.** [F2]

| Região | Pedidos válidos | Receita válida | % |
|---|---|---|---|
| Sudeste | 116 | R$ 323.989,14 | 22,7% |
| Sul | 71 | R$ 312.728,63 | 21,9% |
| Nordeste | 73 | R$ 264.478,53 | 18,5% |
| Centro-Oeste | 76 | R$ 249.752,86 | 17,5% |
| Norte | 61 | R$ 197.163,81 | 13,8% |
| (não informada) | 18 | R$ 79.220,59 | 5,6% |

O Sul fatura praticamente o mesmo que o Sudeste com 45 pedidos a menos (71 contra 116). [F2]

### Por vendedor
**Patrícia Gomes lidera com R$ 228.023,59 (16,0%), mesmo sem ter o maior número de pedidos.** [F2]

| Vendedor | Pedidos válidos | Receita válida | % | Cancel. + devol. |
|---|---|---|---|---|
| Patrícia Gomes | 46 | R$ 228.023,59 | 16,0% | 19,3% |
| Carlos Souza | 56 | R$ 196.682,78 | 13,8% | 15,2% |
| Diego Santos | 59 | R$ 191.409,86 | 13,4% | 11,9% |
| Fernanda Costa | 44 | R$ 182.360,22 | 12,8% | 21,4% |
| Rafael Mendes | 45 | R$ 170.428,81 | 11,9% | 16,7% |
| Ana Lima | 50 | R$ 140.705,46 | 9,9% | 9,1% |
| Juliana Pereira | 46 | R$ 115.389,17 | 8,1% | 17,9% |
| Bruno Alves | 37 | R$ 113.021,47 | 7,9% | 17,8% |
| (não informado) | 32 | R$ 89.312,20 | 6,3% | 27,3% |

A taxa de cancelamento + devolução varia de 9,1% (Ana Lima) a 21,4% (Fernanda Costa). [F2]

### Por canal
**Parceiro e Site lideram a receita, somando 46,1%. O App tem a menor receita e a maior taxa de perda.** [F2]

| Canal | Pedidos válidos | Receita válida | % | Cancel. + devol. |
|---|---|---|---|---|
| Parceiro | 93 | R$ 336.368,33 | 23,6% | 12,3% |
| Site | 79 | R$ 320.707,82 | 22,5% | 16,0% |
| Loja Física | 91 | R$ 285.612,82 | 20,0% | 15,0% |
| Marketplace | 75 | R$ 270.051,50 | 18,9% | 18,5% |
| App | 66 | R$ 190.968,14 | 13,4% | 24,1% |
| (não informado) | 11 | R$ 23.624,95 | 1,7% | 21,4% |

### Ao longo do ano
**Outubro teve a maior receita válida (R$ 160.050,25) e abril a menor (R$ 72.765,47).** O pico é 2,2 vezes o mês mais fraco. Julho vem em segundo lugar, com R$ 151.580,88. [F2]

## Alertas e Riscos

1. **Dependência de um produto:** o Notebook Gamer X sozinho representa 17,7% da receita válida. Qualquer problema de estoque ou preço nesse item tem impacto direto no resultado. [F2]
2. **Perda alta no App:** 24,1% dos pedidos feitos pelo App foram cancelados ou devolvidos, quase o dobro do canal Parceiro (12,3%). [F2]
3. **Perda alta em dois vendedores:** Fernanda Costa (21,4%) e Patrícia Gomes (19,3%) têm as maiores taxas de cancelamento + devolução. No caso de Patrícia, a liderança em receita convive com essa perda. [F2]
4. **Pedidos sem identificação perdem mais:** registros sem vendedor têm 27,3% de cancelamento + devolução, e registros sem região, 28,0%. São as maiores taxas da base. [F2]
5. **Receita em trânsito ainda não confirmada:** R$ 281.106,92 (89 pedidos, 19,7% da receita válida) estão "Em trânsito" e ainda podem virar devolução. [F2]
6. **Descontos acima do padrão:** 53 pedidos (10,6%) tiveram desconto de 15% ou 20%. Esses valores ficam fora da faixa típica da base, que vai de 0% a 5%. [F1]

## Observações e Limitações

- **Sem custo nem margem:** a base não tem custo dos produtos. Não dá para saber quais produtos ou canais são lucrativos, só quais faturam mais. [F1]
- **Sem metas:** não há metas por vendedor, região ou mês, então não é possível avaliar desempenho em relação ao planejado.
- **Um único ano:** só existem dados de 2024. Não dá para medir crescimento nem confirmar se outubro e julho são picos sazonais. [F1]
- **Sem motivo de cancelamento ou devolução:** a base registra o status, mas não a causa. Não é possível explicar por que o App ou certos vendedores perdem mais.
- **Sem dados de cliente:** não há identificação de cliente, então não é possível analisar recorrência nem perfil de compra.
- **Lacunas de preenchimento:** os rankings por vendedor, região e canal excluem de 1,7% a 6,3% da receita válida (campos vazios). [F1, F2]
- **Amostra pequena por recorte:** com 500 pedidos, cada vendedor ou canal tem entre 37 e 93 pedidos válidos. Diferenças de poucos pontos percentuais nas taxas de perda podem ser obra do acaso.
- **Dados corrigidos:** este relatório usa a versão corrigida da base [F3]. Os números podem diferir de análises feitas sobre o arquivo original.
