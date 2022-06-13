// setTimeout vai rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')

// Fineshed é um callback que sera chamada de volta depois de 3 segundos conforme os argumentos do setTimeout
setTimeout(finished, timeOut)
console.log('Mostrar depois de 3 segundos setTimeout')