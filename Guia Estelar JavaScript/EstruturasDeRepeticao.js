// Estrutura de repetição

// 1. for

// break - para a execução do loop
// continue - pula a execução do momento

// enquanto i for menor que 10, adicionar + 1
// for(let i = 10; i > 0; i--) {
//     if(i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// 2. While

let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}

// 3. for...of

let  name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
    console.log(name);
}

// for...in

let person = {
    name: 'john',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}