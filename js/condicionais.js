//Estruturas de Controle Condicional
// Comandos que permitem analisar uma ou mais condições.
/* E a partir do resultado desta análise(verdadeiro ou falso),
o programa pode executar ações diferentes. 

Comandos mais comuns: if(Se), else(senão), else if(senão se)
let usuario= "Juean";
*/

let usuario = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade");
let mensagem;

//Verificar idade e determinar se é menor ou maior.

// Condicional Composta
//REFATORAÇÃO (MELHORAR O CÓDIGO)

if (idade >= 18) {
    mensagem = "maior"


} else {
    mensagem = "menor"

}

// Resultado apóes a condicional
console.log(`${usuario} é ${mensagem} de idade`);
alert(`${usuario} é ${mensagem} de idade`);