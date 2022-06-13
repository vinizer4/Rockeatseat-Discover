const { inherits } = require('util')
const { eventEmitter } = require('events')

function Character(name) {
    this.name = name
}

// inherits é uma função que herda os atributos de uma objeto para outro

// Nesse exemplo estamos herdando os atributos do eventEmitter para o Character
inherits(Character, eventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')