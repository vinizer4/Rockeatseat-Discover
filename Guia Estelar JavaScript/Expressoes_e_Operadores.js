/* Expressões e Operadores 

- Expressions
- Operators
    Binary
    Unary
    Ternaty
*/

/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

// let name = new String('Mayk')
// name.surName = "Brito"

// let date = new Date('2020-12-01')
// console.log(date.__proto__);

// let age = new Number(23)
// console.log(name.surName, age);

/* 
    Operadores unários
    typeof
    delete
*/

const person = {
    name: 'Mayk',
    age: 25,
}

delete person.age

console.log(person);

console.log(typeof "mayk")


    // Operadores Aritiméticos

    // multiplicação *
    console.log(3 * 5)

    // divisão /
    console.log(12 / 2);

    // soma +
    console.log(34 + 67);

    // subtração -
    console.log(34 - 243);

    // resto da divisão %
    let remainder
    remainder = 11 % 10
    console.log(remainder);

    // incremento ++
    let increment = 0
    increment++

    // console.log(++increment) é diferente de (increment++)
    console.log(increment);

    // decremento --
    let decrement = 5
    decrement--
    console.log(decrement);

    // exponencial **
    console.log(3 ** 2);

// Grouping operator ( )

let total = (2 + 3) * 5
console.log(total);

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta á comparaçõa

let one = 1
let two = 2

// == igual a
// console.log(two == 1)
// console.log(one == "1")

// != diferente de 

// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// === estritamente igual a
// console.log( one === "1" );
// console.log( one === 1 )

// !== estritamente diferente de
// console.log( two !== "2" )
// console.log( two !== 2 )

// > Maior que
console.log(one > two)

// >= Maior igual a 
// console.log( one >= 1 )
// console.log( two >= 1 )

// < Menor que
// console.log( one < two )

// <= Menor igual a
// console.log( one <= two )
// console.log( one <= 1 ) 
// console.log( one <= 0 )

// Operadores de atribuição (Assignment)

let x

// assignment
x = 1

// addition assignment 
// x = x + 2
x += 2

// subtraction assignment
// x = x - 1
x -= 1

// multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2

// remainder, exponetiation
// x %= 2
x **= 3

console.log(x)

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

// let pao = true
// let queijo = false

// AND &&
// console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
// console.log(!pao)

// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1  se não valor 2
// condition ? (Se) value1 : (Se não) value2

// Exemplos 
// Café da manhã top
let pao = true
let queijo = false

const NiceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(NiceBreakfast)

// Maior que 18

let age = 17

const canDrive = age >= 18 ? 'can drive' : "can't drive"

console.log(canDrive);

// Operador de string (String operator)

// comparasion (comparação)
// console.log ( 'a' == 'a' )

// concatenation (concatenação)
// Retorna a união de duas strings

let alpha = 'alpha'
console.log( alpha + 'bet' + 's');

/* 
    Type conversion (typecasting) vs Type coersion
*/

/*
    FALSY

    Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )

    false
    0
    -0
    ""
    null
    undefined
    NaN

    EX:

    console.log( NaN ? 'verdadeiro' : 'falso' )
*/

/*
    TRUTHY

    Quando um valor é considerado true em contexto onde um booleano é´obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? "verdadeiro" : "falso" )

/* Operator precedence 
    Precedência de operadores

* grouping                   ()
* negação e incremento       ! ++ --
* multiplicação e divisão    * /
* adição e subtração         + -
* relacional                 < <= > >=
* igualdade                  == != === !==
* AND                        &&
* OR                         ||
* condicional                ?:
* assignment (atribuição)    = += -= *=

*/

console.log( 2 + 5 * 10 )



