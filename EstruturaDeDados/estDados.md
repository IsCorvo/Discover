# Esturura de Dados

## Objetivo

    - Apresentação e modelagem de estruturas
    - Conceitos fundamentais
    - JavaScript

---

## Por que *JavaScript* como linguagem para este estudo?

    - Linguagem da WEB
    - Linguagem de alto nível
    - Foco no entendimeto e não na construção

---

## Por que estrudar Estrutura de Dados?

- Organizar os dados da aplicação
- Entender estruturas para melhor tomada de decisão
- Escrever melhores algoritimos
- Eficiência
- Algumas empresas usam como requisito

      Alguns desafios diários de uso de dados são:

      - Entendimento de como estão nossos dados na aplicação
      - Criar listas (Ordenadas, Não Ordenadas)
      - Repetição ou não dos dados dentro da estrutura
      - Organizar os dados pelo par indicador + valor

---

## O que é estrutura de dados?

Uma maneira de organizar e ordenar informações como textos, números, booleanos, etc e registrá-los na memória do computador.

- Organizar dados (informações)
  - Textos, números, booleanos...
- Como estão registrados na memória

---

## Gerenciando dados

Estrutura de dados tem a ver com a gestão das informações da aplicação.

Para esse gerenciamento, podemos dividir em 3 etapas:

  1. Modelar a estrutura;
  2. Dar vida à estrutura (instanciar essa estrutura);
  3. Criar as funcionalidades dessa estrutura.
     - Exemplo: inserir, excluir, buscar, exibir, contar ...

---

## Arrays

Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.

Uma das estruturas mais básicas, simples de criar e utilizar.

    ['a', 10, 'b', true] // total de 4 elementos
    / 0 ,  1,  2 ,   3 /

### Características

- Acesso pelo index
- Respeita a ordem de inserção dos elementos
- Aceita valores duplicados
- Dependendo do tamanho do Arrays, para encontrar e/ou deletar um elemento, seá necessário um uso maior de performance.

Arrays no JavaScript

- São dinâmicos
- Você poderá ter dados de diferentes tipos misturados dentro de um Array. Strings, numbers, booleans, objetos, funções e até outros arrays.
- Existem muitos métodos já implementados
  - *push()*, *pop()*, *find()*, *filter()*, entre outros

---

## Matrix

Matriz ou Vetor multidimencional.

- Significa que é um Array, dentro de outro array. Podemos ter muitos níveis.

---

## Stack

Tradução de Stack é pilha. Como uma pilha de livros.

- Linear, um após o outro
- O último a entrar na pilha é o primeiro a sair

### Conceitos

- LIFO: Last In First Out
  - O último elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair.

### Stack no Código

Métodos fundamentais

     - push(): Adiciona um elemento à pilha
     - pop(): Remove o elemento do topo da pilha
     - peek(): Obter o elemento do topo da pilha

Outros métodos poderão ser implementados como *"size()"* para mostrar o tamanho da pilha.

---

## Queue

Tradução de Queue é fila.

Como uma fila em uma loja ou restaurante.

- Linear
- O primeiro a entrar na fila é o primeiro a sair

### Conceito

- FIFO: First In First Out
  - O primeiro elemento a entrar na fila, é o primeiro a sair dela
- Front (frente) é a referência do primeiro elemento a entrar na fila
- Back (fundo) é a referência do último elemento a entrar na fila

## Queue no Código

### Métodos fundamentais

- enqueue(): Adciona um elemento ao final da fila
- dequeue(): Remove o primeiro elemento a entrar na fila

Outros métodos poderão ser implementados como *"size()"* para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre tantos outros.

## Visão Geral

- Usamos ED para gerenciar os dados, as informações da nossa aplicação
- Organizar, ordenar, buscar, são algumas funcionalidades básicas
- Melhorar a escrita de algoritmos
- Melhorar a eficiência dos nossos aplicativos
- Existem muitas estruturas a serem estudadas.

Estrutura de dados poderá ser um assunto um pouco desafiador, especialmente para quem está no começo da jornada. Mas como qualquer outra habilidade, com o passar do tempo e prática diária, através de desafios da carreira, poderemos entender cada vez melhor.
