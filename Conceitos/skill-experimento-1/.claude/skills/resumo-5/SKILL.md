---
name: resumo-5
description: >-
  Lê um texto passado pelo usuário (colado na conversa ou em um arquivo)
  e resume em exatamente 5 linhas. Invoque quando o usuário pedir
  "resumo em 5 linhas", "resumo-5" ou um resumo de 5 linhas de um texto ou arquivo.
allowed-tools: Read
---

Quando solicitado a fazer um resumo em 5 linhas:

1. Descubra de onde vem o texto:
   - Se o usuário colou o texto na conversa, use esse texto.
   - Se o usuário passou um caminho de arquivo, leia o arquivo inteiro com a ferramenta Read.
   - Se não houver texto nem arquivo, peça ao usuário que envie o texto.
2. Leia o texto completo antes de responder.
3. Identifique as 5 ideias mais importantes, na ordem em que aparecem no texto.
4. Escreva cada ideia em 1 linha: uma frase curta, com no máximo 20 palavras.
5. Use linguagem simples e troque termos técnicos por palavras do dia a dia.
6. Não acrescente opiniões nem informações que não estejam no texto.

## Formato obrigatório de output

**Resumo em 5 linhas:**
1. [primeira ideia]
2. [segunda ideia]
3. [terceira ideia]
4. [quarta ideia]
5. [quinta ideia]

Responda somente com o resumo, sem introdução nem comentários no final.
