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