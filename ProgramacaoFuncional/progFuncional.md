# Programação Funcional

## Objetivo

- Apresentação do Paradigma
- Conceitos fundamentais
- JavaScript

    Este Curso é conceitual

## Poe que JavaScript?

Por que JavaScript como linguagem para este curso?

- Linguagem da WEB
- Multiparadigma
- Foco no entendimento do Paradigma

## O que Preciso?

O que preciso para acompanhar esse curso?

- Conceitos básicos de programação
- Linguagem JavaScript
- Papel e caneta para anotar os conceitos
- Editor de textos (escrever o código)
- Navegador (executar o código)

## Por que Programação Funcional?

- Organizar uma linha de raciocínio
- Entender uma nova maneira de abordar os probrelmas
- Algumas tecnologias tem como requisito

---

## Programa Funcional?

É um paradigma de programação como a Orientada a Objetos, por esemplo

- Uma maneira de resolver problemas

---

## Funções?

- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro da função
- Não modificar dados fora dela
- Pequenas e bem especídicas no que fazem

## Características principais da função

- Um dado (ou mais) entra em uma função e um novo dado sai dessa função
- Não altera dados
- Não guarda estado *Stateless*

---

## Linguagens funcionais

- JavaScript (multiparadigma)
- PHP (multiparadigma)
- Elixir
- Haskell

---

## Pontos Positivos

- Fácil manutenção
- Fácil uso de testes
  - Funções isoladas e consistentes
- Códigos mais confiáveis

---

## Princípios

### Paradigmas

- Programação Imperativa
- Programação Declarativa

### Dados

- Imutabilidade
- Stateless

### Funções

- Independentes
- Puras
- Higher-order
- First-class
- Composição

---

## Programação imperativa

- O código é pensado e gerado em sequência
- O código é pensado como um passo-a-passo, como uma receita de bolo
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações nas variáveis
- Orientação a Objetos é um tipo de paradigma imperativo

## Programação declarativa

- O código é gerado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passo a passo no código
- Programação funcional é um tipo de paradigma declarativo

---

## Imutabilidade

- Uma variável não vai variar
- Se você precisar mudar uma variável, você não muda, você criar uma nova

---

## Stateless

- Não guarda estado
- A função só conhece dados entregues a ela
- A resposta não poderá variar

---

## As Funções

Vamos conhecer algumas características das funções na programação funcional.

- [ ] Funções Independentes
- [ ] Funções Puras
- [ ] First-class Functions
- [ ] Higher-order Functions
- [ ] Composição de Funções

### Funções Independetes

- Deverá ter ao menos 1 argumento
- deverá retornar algo
- Nada que acontecer lá dentro afeta o mundo externo
  - Dados imutáveis
  - Não guardar estado
- Não faremos uso de loops (*for, while*), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

    ```js
    const random = (number, Math) =>
      Math.floor(Math.random() * number);

    // Recursive
    // Find the factorial of a number
    const factorial = x => {

      // if number is 0
      if (x === 0) {
        return 1;
      }

      return x * factorial(x - 1);
    }
    ```

### Funções Puras

- Não deverá *depender de nenhum dado externo* a não ser o que foi passado como argumento
- Não deverá sofrer *nenhuma interferência* do mundo externo a ela
- Se o argumento é o mesmo, *o retorno não poderá ser diferente* quando a função dor chamada novamente
- Não terá *nenhum efeito colateral* no seu código
  - Não irá modificar nenhum dado
  - Não irá guardar nenhum estado.

    ```js
    // Funções impuras

    // Exemplo 1: está dependendo de dado externo
    // que não foi passado como parâmetro
    function calculateCircumference(radius) {
      return Math.PI * (radius + radius)
    }

    // Exemplo 2: está alterando dado externo
    let person = {
      name: 'Rafael Camarda',
      age: 'Jovem'
    }

    function changeName(name) {
      person.name = name
    }

    // Função pura
    const calculateCircumference = function (pi, radius) {
      return pi * (radius + radius)
    }

    // com arrow function
    const calculateCircumference = (pi, radius) =>
      pi * (radius + radius)

    // Exemplo 2
    const changePersonName = (person, name) => {
      {...person, name}
    }
    ```

### First-class function

- Podem estar em qualquer lugar, inclusive, como parâmertro de outras funções
- A função poderá ser entendida como uma variável

    ```js
    const sayMyName = () => console.log('Mayk')
    const runFunction = fn => fn()

    runFunction(sayMyName)
    runFunction(() => console.log('discover'))

    console.log(runFunction(Math.random))
    ```

### Higher-Order Function

- Funções que recebem funções como argumentos
- Funções que poderão retornar outras funções

    ```js
    // Exemplo com .map() JS
    const numbers = [2, 4, 8, 16]

    const square = n => n * n

    const squareNumber = numbers.map(square)

    // Exemplo de um retorno de função
    // (currying ou aplicação parcial de função)
    const pause = wait => fn => setTimeout(fn, wait)

    pause(600) (() => console.log ('waiting 600ms'))

    const wait200 = pause(200)
    const wait1000 = pause(1000)

    wait200(() => console.log ('waiting 200ms'))
    wait1000(() => console.log ('waiting 1s'))
    ```

### Composição de funções

- Um encadeamento de funções
- Uma função que retorna um dado e vai para outra função  que retorna um dado e vai pra outra função, que retorna...

    ```js
    const people = ['Rafa', 'Diego', 'Dani', 'Rod']
    const uperCasePeopleThatStartsWithD = people
    .filter(person => person.startsWith('D'))
    .map(dperson => sperson.toUppercase())
    ```

## Conclusão

- Paradigma de Programação
- Linguagens
- Conceitos fundamentais
  - Statesless, Imutabilidade, Função pura, Higher-Order
