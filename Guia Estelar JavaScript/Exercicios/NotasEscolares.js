/* Transformar notas escolares

Crie um algoritmo que transforma as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

let score = 65

function Notas(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal

    if (scoreA) {
        scoreFinal = "Nota A"
    }   
    else if (scoreB) {
        scoreFinal = "Nota B";
    }
    else if (scoreC) {
        scoreFinal = "Nota C";
    }
    else if (scoreD) {
        scoreFinal = "Nota D";
    }
    else if (scoreF) {
        scoreFinal = "Nota F";
    }
    else {
        scoreFinal = "Nota não atribuida";
    }

    return scoreFinal
}

console.log(Notas(92))
console.log(Notas(45))
console.log(Notas(105))
console.log(Notas(80))