// Estamos chamando o express
const express = require('express');

// O express é o responsavel por renderizar todo javascript e mostrar no navegador

const app = express();

// Estamos falando para o express que a nossa view engine e o ejs
app.set('view engine', 'ejs');

// Aqui estamos definindo uma rota para o index e ai o express vai renderizar o index.ejs
app.get("/", function (req, res) {
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar o HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitile = "EJS é uma linguagem de modelagem para criação de página HTML"

    // Aqui estamos passando as const subtitile e items para o index.ejs
    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitile
    });
})

// Aqui estamos definindo uma rota para o sobre e ai o express vai renderizar o about.ejs
app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

// Aqui estamos definindo uma porta para o servidor, e deixamos o listen ouvindo ela na porta 8080
app.listen(8080);

console.log("servidor rodando")