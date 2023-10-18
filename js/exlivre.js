"use strict"
//dados de entrada
let valorDaCotacaoDoDia = 5.03;
let valorEmDolares = 2500;
// 
// Função que realiza a conversão matemática ao receber PARÂMETROS, 
function converterMoeda(valor, cotacao){
    return valor * cotacao;
}
// Variável que receberá o resultado processado pela função DEPOIS que 
// a função terminar em execução
let valorConvertido = converterMoeda(valorDaCotacaoDoDia,valorEmDolares);

//saida após o processamento

console.log(valorEmDolares);
console.log(valorConvertido);
console.log("_________ 😎______________");


//console.log(formatarMoeda(valorEmDolares));
//console.log(formatarMoeda(valorConvertido));

function formatarMoeda(valor) {
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };
    console.log("___________🙀_______________");
    return valor.toLocaleString("pt-br", opcoes);
}

console.log(formatarMoeda(valorEmDolares, "en","USD"));
console.log(formatarMoeda(valorConvertido, "pt-br", "BRL"));

function formatarMoeda(valor, local, moeda) {
    let opcoes = {
        style: "currency",
        currency: moeda
    };
    console.log("___________🙀_______________");
    return valor.toLocaleString(local, opcoes);
}