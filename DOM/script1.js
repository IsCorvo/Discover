// getElementById()
// const element = document.getElementById('blog-title')
// console.log(element)

// getElementByClassName()
// const elementone = document.getElementsByClassName('one')
// console.log(elementone)

// getElementByTagName()
// const elementTag = document.getElementsByTagName('h1')
// console.log(elementTag)

// querySelector()
// const elementSelector = document.querySelector('')
// console.log(elementSelector)

// querySelectorAll()
// const elementsSelectorAll = document.querySelectorAll('.one')
// elementSelector.ForEach(el => console.log(el))

// Qual usar?

// getElementById (element)
// getElementByClassName (HTMLCollection)
// getElementByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (Nodelist)

// --------------------------------------------------------

// const elementText = document.querySelector('h1')
// elementText.textContent += " - Olá Devs!"
// console.log(elementText.textContent)

// Manupulando conteúdo
// innerText

// const elementInnerText = document.querySelector('h1')
// elementInnerText.innerText = "Olá Devs!"

// Manupulando conteúdo
// innerHTML

// const elementInnerHTML = document.querySelector('h1')
// elementInnerHTML.innerHTML = "Olá Devs! <small>!!!</small>"

// Manupulando conteúdo
// Value

// const elementValue = document.querySelector('input')
// console.log(elementValue)
// elementValue.value = "outro valor"

// Manupulando elementos
// Atributos

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')
// const headerID = document.querySelector('#header')
// console.log(headerID.getAttribute('class'))
// header.removeAttribute('id')
// header.removeAttribute('class')

// -------------------------------------------

// Alterando estilos

// const elementStyle = document.querySelector('body')
// elementStyle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
// console.log(elementStyle.style.backgroundColor);

// Alterando estilos
// classList

// const elementClassList = document.querySelector('body')

// elementClassList.classList.add('active', 'green' )
// console.log(elementClassList.classList)
// elementClassList.classList.remove('active')
// elementClassList.classList.toggle('active')

// ------------------------------------------

// Buscando Filhos

// Navegando pelos elementos
// parentNode parentElement

// const body = document.querySelector('body')
// console.log(body.parentElement)
// console.log(body.parentNode)

// Navegando pelos elementos
// childNodes children
// const el = document.querySelector('body')

// console.log(el.children)
// firstChild firstElementChild

// console.log(el.firstElementChild)
// console.log(el.firstChild)

// lastChild lastElementChild

// console.log(el.lastElementChild)
// console.log(el.lastChild)

// -----------------------------------------

// Buscando Irmãos

// Navegando pelos elementos

// const el = document.querySelector('body script')

// nextSibling nextElementSibling

// console.log(el.nextElementSibling)

// previousSibling previousElementSibling

// console.log(el.previousElementSibling)

// -----------------------------------------

// Criando e adicionando elementos

// createElement

// const div = document.createElement('div');
// div.innerText = "Olá Devs!"

// append prepend

// const body = document.querySelector('body')
// body.append(div)
// body.prepend(div)

// -----------------------------------------

// Adicionando elementos

// const div = document.createElement('div');
// div.innerText = "Olá Devs!"

// insertBefore

// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)

// "insertAfter"

// const body = document.querySelector('body')
// const header = body.querySelector('header')
// body.insertBefore(div, header.nextElementSibling)

// -----------------------------------------

// Eventos

// function print() {
//     console.log('print')
// }

// -----------------------------------------

// Eventos de Teclado

// const input = document.querySelector('input');

// input.onkeyup = function() {
//     console.log('rodei')
// }

// -----------------------------------------

// Eventos via JS

// const h1 = document.querySelector('h1');
// h1.addEventListener('click', print)
// function print() {
//     console.log('print')
// }

// Eventos via JS segunda forma (não recomendado)

// const h1 = document.querySelector('h1');
// h1.onclick = print
// function print() {
//     console.log('print')
// }

// -----------------------------------------

// Eventos 
// Argumento event 

// const input = document.querySelector('input');

// input.onkeyup = function(event) {
//     console.log(event)
// }