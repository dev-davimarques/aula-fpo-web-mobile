const btnSomar = document.getElementById('btnSomar')
const btnSub = document.getElementById('btnSub')
const btnMult = document.getElementById('btnMult')
const btnDiv = document.getElementById('btnDiv')

const result = document.getElementById('result')

btnSomar.addEventListener('click', (e) => {
    e.preventDefault()
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = parseInt(num1) + parseInt(num2)
    console.log(resultado)
    result.innerHTML = `Valor da Soma: ${resultado}`
    result.value = ''
})

btnSub.addEventListener('click', (e) => {
    e.preventDefault()
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = parseInt(num1) - parseInt(num2)
    console.log(resultado)
    result.innerHTML = `Valor da Subtração: ${resultado}`
})

btnMult.addEventListener('click', (e) => {
    e.preventDefault()
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = parseInt(num1) * parseInt(num2)
    console.log(resultado)
    result.innerHTML = `Valor da Multiplicação: ${resultado}`
})

btnDiv.addEventListener('click', (e) => {
    e.preventDefault()
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const resultado = parseInt(num1) / parseInt(num2)
    console.log(resultado)
    result.innerHTML = `Valor da Divisão: ${resultado}`
})