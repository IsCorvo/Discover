# Guia estelar de HTTP

    HyperText Transfer Protocol - HTTP

## Visão Geral

Primeiro vamos entender qual o significado da sigla HTTP, que é Hypertext Transfer Protocol, em português Protocolo de Transferência de Hipertexto que é o conjunto de regras para a comunicação por meio de Hipertexto, um tipo de texto que pode carregar diferentes dados. O protocolo HTTP é usado todos os dias para acessar sites pela internet, pois é ele que permite a troca de dados na web, entre esses dados estão códigos HTML e CSS, Scripts. imagens e vídeos, entre muitos outros, e para cada um desses recursos executa uma chamada.

- Permite troca de informações e dados na internet
- Uma troca de mensagens
- HTML, CSS, Scripts, Imagens, Vídeo
- Uma chamada para cada um desses recursos

## Visualizando a comunicação

No protocolo HTTP tudo funciona com pedidos e respostas, que são chamados em inglês como Request e Response, mandando mensagens nos dois casos. No caso das mensagens de pedidos, você precisa de um verbo HTTP, que chamamos de método, que vai definiir o tipo de pedido que está sendo feito, por exemplo o método GET, vindo do inglês para "pegar", pega um recurso, como um URL para algum local da internet, ou o método POST, que serve para criar um recurso. Depois do pedido, a resposta traz um Status Code do servidor, que é um código sobre o estado do seu pedido, entre esses códigos:

    Estão
        200, onde tudo deu certo e sua página foi enviada,
        404, onde o servidor não conseguiu encontrar o pedido,
        301, que é um redirecionamento para outro local,

Entre outros além do Status Code, o servidor pode mandar um header e um body. Existem coisas que podem estar tanto na Request quanto na Response, que são o header e o body, os Headers são campos informativos, e o body contém conteúdo, podendo ser em forma de HTML ou JSON.

## Visualizando com DevTools

Nesta aula vamos aprender um pouco mais sobre HTTP usando a ferramenta DevTools, mais especificamente a aba "Network", inglês para "Rede". Com a aba aberta, podemos entrar em um site, por exemplo o Google, e iremos ver diversas informações aparecendo, se clicarmos na primeira dessas informações podemos ver algumas das informações sobre o pedido e a resposta. Também pode-se ver, que o navegador faz um pedido para cada link, midia, entre outros, e cada pedido tem sua resposta.

## Visualizando com cURL

Por mais que já possamos visualizar algumas informações com o DevTools, precisamos de alguns detalhes a mais para trabalhar, então usaremos uma ferramenta extra chamada cURL, que já vem instalada em sistemas baseados em UNIX, e no Windows nós aconselhamos a usar a ferramenta Git Bash, que também vem com ela. Usando o cURL podemos entender alguns conceitos, primeiramente temos que saber que o cURL está fazendo o papel do cliente, ao invés do navegador, com a ferramenta, também conseguimos ver o corpo da resposta, o que não era possível com o DevTools, e para também pegar os headers com o cURL, podemos adicionar -i ao comando antes do link, com o parâmetro -v podemos ver todos os headers, tanto os de saída quanto de chegada.

    Exemplo:

        curl -i https://google.com
        
        HTTP/2 301 
        location: https://www.google.com/
        content-type: text/html; charset=UTF-8
        content-security-policy-report-only: object-src 'none';base-uri 'self';script-src 'nonce-3KtRoW9eUjCdd4zGRX-shw' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
        date: Mon, 10 Jul 2023 21:24:43 GMT
        expires: Wed, 09 Aug 2023 21:24:43 GMT
        cache-control: public, max-age=2592000
        server: gws
        content-length: 220
        x-xss-protection: 0
        x-frame-options: SAMEORIGIN
        alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000

        <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
        <TITLE>301 Moved</TITLE></HEAD><BODY>
        <H1>301 Moved</H1>
        The document has moved
        <A HREF="https://www.google.com/">here</A>.
        </BODY></HTML>

## Conceitos

Nessa aula vamos esclarecer alguns conceitos relacionados ao HTTP, que foi feito pra ser um protocolo simples e fácil de entender pra qualquer pessoa. Ele foi baseado na estrutura de cliente/servidor, ou seja, sempre vão ter uma requisição e uma resposta acontecendo, como um exemplo, voce pode pensar na forma de comprar um lanche, você faz um pedido, especificando a comida que você quer, e o estabelecimento te "responde" com a comida. O HTTP foi criado para também ser stateless, traduzindo, não guardar estado, ou seja, ele não vai guardar nenhuma informação, e não existe nenhuma relação entre as conexões. Outra característica do protocolo é ser extensível, podendo fazer diversas trocas de informação entre o cliente e o servidor, conforme a necessidade.

### Cliente

Nessa aula falaremos do Cliente, que na maioria das vezes é o Browser, ou no nosso caso, também pode ser o cURL. O Cliente é a entidade que dá inicio à toda comunicação com um pedido, fora em algumas poucas exceções. Esses pedidos são feitos através de ações, que usam os métodos do HTTP, como:

- GET,
- POST,
- PUT e DELETE

que vamos ver com mais detalhes em uma próxima aula.

### Servidor

Nessa aula nós falaremos do Servidor, que é uma máquina em algum lugar do mundo preparada para lidar com as requisições do cliente e mandar uma reposta. A resposta sempre tem um Status Code, e pode ter headers e body.

### Proxies

Nesta aula vamos falar sobre Proxies, que são coisas que ficam entre o Servidor e o Cliente, como por exemplo o roteador que está servindo internet para você agora. O Proxy pode ter diversas funções, como cache, para armazenar algumas informações e acelerar o uso. filtro, para impedir o acesso de alguns sites para um antivirus ou um controle parental, entre outros.
