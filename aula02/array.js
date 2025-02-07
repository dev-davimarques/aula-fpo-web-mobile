// Criando um array (ou vetor) em javascript
const array1 = [2,4,6,8]

// Algumas formas de como exibir meu array
// 1º forma
for (let i=0; i<array1.length; i++){
    console.log(array1[i]);
}

// 2º forma
array1.forEach(function(numero){
    console.log(numero);
});

const frutas = ['Maçã', 'Uva', 'Melância']
frutas.forEach(function(fruta) {
    console.log(fruta);  
});

// Adicionar itens ao final do array
frutas.push('Pêra')
frutas.forEach(function(fruta) {
    console.log(fruta);  
});

// Método map