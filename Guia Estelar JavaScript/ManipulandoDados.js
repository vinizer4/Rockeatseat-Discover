// Guia estelar javascript

// Manipulando dados

/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
    
*/

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log(Number('9') + 5);

// Manipulando strings e números

// Transformar string em número e número em string

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number));

// contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = "Paralelepipedo"
console.log(word.length);

let number2 = 1235
console.log(String(number2).length);

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number3 = 345.33452345
console.log(number3.toFixed(2).replace(".", ","));

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

let word1 = "Programar é muito bacana"
console.log(word1.toUpperCase());
console.log(word1.toLowerCase());

// Encontrar palavras em frases

// Verificar se  o texto contém a palavra amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"));

// Separando strings

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforma o array em um texto e onde eram espaços, coloque _

let texto = "Eu quero viver o amor!"

let myArraytexto = texto.split(" ")
console.log(myArraytexto);

let textoWithUnderscore = myArraytexto.join("_")
console.log(textoWithUnderscore)

// Criar um Array com construtor

let myArray = new Array('a', 'b', 'c')
console.log(myArray);

// Contar elementos de um array

console.log([
    'a',
    {type: 'array'}, 
    function() { return "Alo"},
].length)

// Transformar uma cadeia de caracteres em elementos de um array

let word2 = "manipulação"
console.log(Array.from(word2))

// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim utilize oo push
techs.push("nodejs")
// adicionar no começo unshift
techs.unshift("SQL")
// // remover do fim pop
// techs.pop()
// // remover do começo shift
// techs.shift()
// pegar somente alguns elementos do array slice
console.log(techs.slice(1, 3))
// // remover 1 ou mais itens em qualquer posição do array splice
// techs.splice(1, 3)
// encontrar a posição de um elemento no array indexOf
let index = techs.indexOf("css")


console.log(techs);
console.log(index)