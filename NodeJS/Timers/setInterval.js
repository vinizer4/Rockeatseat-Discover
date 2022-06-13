// setInterval irá rodar uma funçao N vezes a cada X milissegundos

const timeout = 1000
const checking = () => console.log('Checking...')

setInterval(checking, timeout)