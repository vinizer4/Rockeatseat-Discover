
// Aqui estamos criando o array de perguntas que seja exibido na tela
const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]


// Aqui estamos criando a função que será usada para fazer as perguntas
const ask = ( index = 0 ) => {
    // Stdout é o que vai escrever alguma coisa de saida
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

// Aqui estamos armazenando a respostas no array answers
const answers = []

// stdin.on ficara ouvindo os dados e toda vez for inserido dados ele vai rodar uma função

process.stdin.on("data", data => {

    // Aqui estamos pegando a resposta e armazenando no array answers
    answers.push( data.toString().trim())

    // Se o tamanhao do array answers for menor que o array questions iremos rodar novamento a função ask
    if (answers.length < questions.length) {
        ask(answers.length)
    } 
    // Quando array answers for maior que o array questions iremos exibir as respostas e parar o processo
    else {
        // Aqui estamos exibindo as respostas
        console.log(answers)
        // Aqui estamos parando o processo com o process.exit
        process.exit()
    }
})

// Aqui estamos criando uma funçao que sera executada quando o processo for finalizado com process.exit
process.on('exit', () => {

    // Aqui estamos exibindo as respostas que foram armazenadas no array answers de acordo com o index do array
    console.log(`

        Bacana!

        O que você aprendeu hoje foi:  
        ${answers[0]}

        O que te deixou aborrecido e você poderia fazer para melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje foi:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!!

        Volte amanhã para novas reflexões!!
        `)
})