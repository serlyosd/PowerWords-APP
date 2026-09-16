# Lumina — MVP v1.3.0

Aplicativo mobile-first de estudo de vocabulário por flashcards, repetição diária e recompensa familiar.

**Versão atual: 1.3.0.** O número aparece ao lado do nome Lumina e no final da tela inicial.

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

1. No primeiro acesso, o Master informa o nome, o prêmio e confirma um PIN de 4 números.
2. Após a confirmação **Master configurado**, toque em **Iniciar Missão do Dia**.
3. Fale a palavra mostrada na frente e vire a carta. O verso pronuncia a palavra duas vezes e mostra conceito, dois exemplos, sinônimos e antônimos.
4. Toque em **Entendi esta palavra** para liberar a próxima. É possível usar os botões ou deslizar para voltar e rever qualquer carta.
5. Depois das 21 confirmações, revise o resumo e inicie o Quiz único do dia.
6. A meta diária é acertar pelo menos 15 das 21 perguntas (70%).
7. Após cinco metas consecutivas, o Master digita o PIN para confirmar a entrega do prêmio e iniciar outro ciclo.

Para apagar um treino de teste antes de apresentar o aplicativo, toque em **Área do Master**, escolha **Reiniciar para apresentar** e informe o PIN. O treino do dia será apagado e a configuração inicial será aberta novamente.

O botão da missão fica cinza depois que as 21 palavras do dia são concluídas, pois normalmente só existe uma missão por dia. Para repetir no mesmo dia durante um teste ou apresentação, use **Área do Master**, exibida logo acima do botão da missão.

Em cada nova publicação, abra uma vez o endereço acrescentando a versão ao final, por exemplo `?v=1.3.0`. Depois, o botão **Buscar atualização** apaga somente os arquivos temporários, preserva o progresso e recarrega diretamente do GitHub Pages.

Não existe PIN padrão. O Master cria e confirma o próprio PIN no primeiro acesso. O PIN protege alterações de configuração, reinicialização e validação do prêmio.

O progresso permanece apenas no navegador do aparelho (`localStorage`). Não limpe os dados do site durante um ciclo.

## Privacidade e funcionamento offline

Não há cadastro, anúncios ou envio de dados para servidores. Após a primeira abertura via servidor, o service worker mantém os arquivos essenciais disponíveis offline. A voz usa o sintetizador nativo do aparelho e pode variar conforme o navegador.
