const body = document.getElementsByTagName('body')[0];
const ul = document.querySelector('ul')
const btn = document.querySelector('button')
const form = document.querySelector('form')

// body.innerHTML = '<h1>Título</h1>'
// body.innerHTML += '<p>Parágrafo</p>'

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const input = document.querySelector('input')
    ul.innerHTML += `<li>${input.value}</li>`
    console.log(input.value)
    input.value = ''
})

