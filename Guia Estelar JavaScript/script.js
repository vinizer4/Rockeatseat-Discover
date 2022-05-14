// Variáveis e tipos de dados
// declaração or declaration
var name

// assigmente or atribuição de valores
name = "mike"

// que tipo de dado foi colado na variável

console.log(typeof name)

// agrupamento de declarações
let age, isHuman

age = 18
isHuman = true

//multiplos argumentos na funcao
// console.log(name, age, isHuman)

// escrita do texto + variáveis

// concatenando valores
console.log('o ' + name + ' tem '+ age + ' anos.')

// interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)

// Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

// Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: "Cat",
        age: 3
    }
]

// acessar valores array

console.log(animals[2].name)

// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada um dos dados:
//     * name: String
//     * age: Number (integer)
//     * stars: Number (float)
//     * isSubscribed: Boolean

let name1 = "Mayk"
let age1 = 23
let stars = 4.8
let isSubscribed = true

// 4. A variavél abaixo é de que tipo de dado? É do tipo object

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

// 4.2 Mostre no console a seguinte mensagem:

//     <name> de idade <age> pesa <weight> kg.

//     Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

let student = {
    name: "Mayk",
    age: 23,
    weight: 88,
    isSubscribed: true,
}

console.log(student)

// 4.2

console.log(`${student.name} de ${student.age} pesa ${student.weight} kg`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor ou seja um array vazio

let students = []

// 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

students = [
    student
]

console.log(students);

// 7. Coloque no console o valor

console.log(students[0]);

// 8. Crie um novo student e coloque na posição 1 do Array students

const john = {
    name: "john",
    age: 23,
    weight: 74.8,
    isSubscribed: true
}

students = [
    student,
    john
]

// ou 

students[1] = john

console.log(students);

// 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

// console.log(a)
// var a = 1