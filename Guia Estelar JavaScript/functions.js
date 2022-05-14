// Guia estelar javascript funções

// 1. Functions

// criar um aplicativo de frases motivacionais


// declaration - declaração da funcão
// function statement
function createPhrases() {
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é a mãe do aprendizado")   
} 

// executar a função
// rodar, chamar, invocar
// execute, run. call. invoke

createPhrases()

console.log('fim do programa')

// 2. Argumentos e parâmetros

// function expression or function anonymous

// parametros (parameters)
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`);
console.log(`a soma é ${sum(number1, number2)}`);

// outra maneira de entender funções 

// imagine que a  função é um liquidificador e estamos fazendo um suco

function fazerSuco(fruta1, fruta2) {
    return  fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo);

// function hoisting

sayMyName();

function sayMyName() {
    console.log('Mayk');
}

// arrow function

const sayMyNameArrow = (name) => {
    console.log(name)
}

sayMyNameArrow('Mayke Arrow Function')

// callback function 
// Callbabk é uma função que é passada como valor para uma outra função
// Ou seja estamos chamando a função dentro de outra função

function sayMyNameCallback(name) {
    console.log('antes ')
    name()
}

sayMyNameCallback(
    () => {
        console.log('estou em uma callback')
    }
)

/* Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk Function constructor")
const joao = new Person("Joao Function constructor")
console.log(mayk.walk());
console.log(joao.walk());