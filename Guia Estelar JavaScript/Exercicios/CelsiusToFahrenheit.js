// Celsius em Fahrenheit 

/*
    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de um unidade para outra

    Celsius = (F - 32) * 5/9

    Fahrenheit = C * 9/5 + 32

*/

// transform('50F')

function transformaDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo, C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }


    return formula(updatedDegree) + degreeSign
}


try {
   console.log(transformaDegree('50F'))
   console.log(transformaDegree('50C'))
   console.log(transformaDegree('50Z'))
//    transformaDegree('50Z') 
} catch (error) {
    console.log(error.message);
}