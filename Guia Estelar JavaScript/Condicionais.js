// Control flow

// If e Else

let temperature = 36.5


// if (temperature >= 37.5) {
//     console.log("Febre alta")
// } else if(temperature < 37.5 && temperature >= 37) { 
//     console.log("Febre moderada")
// }
// else {
//     console.log("Saudável")
// }

let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log("Febre alta")
} else if(mediumTemperature) { 
    console.log("Febre moderada")
}
else {
    console.log("Saudável")
}

// switch

let expression = 'a'

switch (expression) {
    case 'a':
        // codigo
        console.log('a');
        break
    case 'b':
        // codigo para b
        console.log('b');
        break
    default:
        console.log('default');
        break
}

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado');
            break;
    }

    return result
}

console.log(calculate(4, '+', 8));

// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log('depois do erro')
} 

try {
    sayMyName()
} catch(e) {
    console.log(e);
}

// try...catch