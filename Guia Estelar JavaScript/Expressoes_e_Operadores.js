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

let name = new String('Mayk')
name.surName = "Brito"

let date = new Date('2020-12-01')
console.log(date.__proto__);

let age = new Number(23)
console.log(name.surName, age);

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