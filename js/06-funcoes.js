"use strict";

// Sobre Funções

/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer lugar de aplicação/site */

// Usar funções também é benéfico no ponto de vista de organização de código. 

// O JS já possui centaenas de funções prontas:

/* Exemplos: log(), alert(), prompt(), toFixed etc... */

// Forma 1: função anônima

const exemplo1 = function () {
    console.log("Função anônima");
}


// Forma 2 =  Função nomeada/declarada

function exemplo2() {
    console.log("Função nomeada/declarada");
};

// Forma 3: arrow function 

const exemplo3 = () => {
    console.log(("Arrow Function"));
};
//chamada de função

exemplo1();
exemplo2();
exemplo3();
console.log("_ ___________________ _ 🙂");
// valor1 e valor2 são parâmetros

// Função com parâmetros e retorno de dados/resultados
function somar(valor1, valor2) {
    return valor1 + valor2; // retorno de dados
}
console.log(somar(10, 20));
console.log(somar(15, 50));
console.log(somar(30, 47.8));

console.log("_______________________ 😃");

// Formatação de valores em Reais

let preco = 4000;
let desconto = preco * 0.10;
let precoFinal = preco - desconto;

function formatarPreco(valor) {
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString("pt-br", opcoes);
}



console.log(`Preco: ${formatarPreco(preco)}`);
console.log(`Preco: ${formatarPreco(desconto)}`);
console.log(`Preco: ${formatarPreco(precoFinal)}`);

console.log("_______________😎______________________");

/* Sobre Arrow Function
Sintaxe moderna para funções no JS
bastante usada por bibliotecas, frameworks(React, Angular, Vue e etc)
A sintaxe geral é
const algumNome= ()=> {},
No entanto, esta sintaxe pode ser mais concisa */
//VERSAO 01
// function dobra(valor){
//     return valor *2 
// }

// VERSÃO 2 (Arrow Function)
// const dobra = (valor) =>{
//     return valor * 2;
// };

//VERSÃO 3 (Arrow Function com retorno implicito)

const dobra = valor => valor * 2;



//Chamadas
console.log(dobra(10));
console.log(dobra(1325))
console.log(dobra(55.47));










