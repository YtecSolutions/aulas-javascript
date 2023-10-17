
"use strict";

/* Comandos de Repetição
Instruções para realizar ações
por uma quantidade específica de vezes.

Comandos Tradicionais:
- while     -> ENQUANTO
-do/while   -> FAÇA/ENQUANTO
- for       -> PARA 


// Obs: normalmente os comandos são controlados por meio de uma variável contadora;

// Exemplo 1: while 
// Nomes comuns para esta variável:
// i, j, k 

*/
// Exemplo WHILE
// let contador = 1;
// while(contador <= 500){
//     console.log(`Valor de contador: ${contador}`);
//     contador++;
// }

// Exemplo DO/WHILE (FAÇA/ENQUANTO)
// Exemplo 1: while 
// Nomes comuns para esta variável:
// i, j, k 
// let i = 10;
// do { 
//     console.log(`i vale:${i}`);
//     i++;
// } while (i <= 3)

// EXEMPLO FOR (PARA)
//let i = 1   DECLARAÇÃO DE VARIÁVEL
//i <= 10     CONDIÇÃO
//i++         INCREMENTO

// for(let i = 1; i<=10; i++){         
// console.log(`i vale ${i}`);
// }

// Cache/Memória da quantidade de elementos do array

let clientes = ["Ozzy", "Dio", "Gillan", "Martin", "Hughes"];

let quantidadeClientes = clientes.length;
for (let i = 0; i < quantidadeClientes; i++) {
    console.log(`Cliente: ${clientes[i]}`);
}
console.log("_________________________________________")

// for of para arrays

let bandas = ["Slayer", "Dream Theater", "Nightwish"];

for (let banda of bandas) {
    console.log(banda);
}

console.log("________________________________________");

// for/in > para objetos

let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016,
    edidora: "Novatec",
    edicao: 3
};

// para DADOS em LIVRO
for (let propriedade in livro) {
    // Acessar apenas a propriedade
    // console.log(dados);
    // Acessar o valor de cada propriedade:

    //console.log(livro[dados]);

    console.log((`${propriedade} -> ${livro[propriedade]}`));



}




