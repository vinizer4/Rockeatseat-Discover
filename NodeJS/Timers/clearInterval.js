// clearInterval irá cancelar o setInterval registrado anteriormente

const timeOut = 1000; // 1 segundo

const checking = () => console.log('Checking...');

let interval = setInterval(checking, timeOut);


// Aqui estamos executando o clearInterval apos 6 segundos
setTimeout( () => clearInterval(interval), 6000);