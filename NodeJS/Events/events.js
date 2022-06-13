const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ev.once ira escutar evento e executar apenas uma vez

ev.once('saySomething', (message) => console.log('Aqui estamos executando o ev.once:  Eu ouvi você', message))

console.log("\n\n")
// ev.on ira escutar evento e executar sempre que o evento for emitido

// Aqui estamos criando uma function que ira escutar o evento e exibir uma mensagem
ev.on('saySomething', (message) => console.log('Aqui estamos execuntando o ev.on: Eu ouvi você', message))


// ev.emit ira disparar eventos
ev.emit('saySomething', "Vinicius")
ev.emit('saySomething', "Gasparzinho")

