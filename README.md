# Lumina — MVP v1.0.0

Aplicativo mobile-first de estudo de vocabulário por flashcards, repetição diária e recompensa familiar.

## Testar agora

### Maneira mais fácil (sem ZIP e sem instalação)

1. Baixe somente o arquivo `Lumina.html`.
2. Abra a pasta **Downloads** do computador.
3. Clique duas vezes em `Lumina.html`. O aplicativo abrirá no navegador.

O arquivo é totalmente independente: não precisa ser descompactado, não exige Python e não precisa dos demais arquivos para funcionar.

### Alternativa para desenvolvedores

A pasta completa do projeto se chama `PowerWords-APP`. Depois de copiar o projeto para o GitHub e baixá-lo, abra um terminal nessa pasta e execute:

**Windows:**

```bash
py -m http.server 8080
```

**macOS ou Linux:**

```bash
python3 -m http.server 8080
```

Em seguida, acesse <http://localhost:8080> no navegador.

Se o comando do servidor não funcionar, instale o [Python 3](https://www.python.org/downloads/) e repita os passos.

## Como usar

1. Toque em **Iniciar Missão do Dia**.
2. Toque na carta para conferir conceito e sinônimos.
3. Avalie cada uma das 21 palavras como **Errei**, **Pensei muito** ou **Foi fácil**.
4. A meta diária é marcar pelo menos 17 palavras (80%) como **Foi fácil**.
5. Após cinco metas consecutivas, leve o Ticket Dourado ao Master. O PIN inicial é `1234` e deve ser trocado em configurações.

O progresso permanece apenas no navegador do aparelho (`localStorage`). Não limpe os dados do site durante um ciclo.

## Privacidade e funcionamento offline

Não há cadastro, anúncios ou envio de dados para servidores. Após a primeira abertura via servidor, o service worker mantém os arquivos essenciais disponíveis offline. A voz usa o sintetizador nativo do aparelho e pode variar conforme o navegador.
