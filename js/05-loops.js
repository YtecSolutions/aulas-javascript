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
let contador = 10;
do { 
    console.log(`Contador vale:${contador}`);
    contador++;
} while (contador <= 3)