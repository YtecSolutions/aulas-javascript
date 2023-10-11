"use strict"

const mediaMinima = 7;
const limiteDeFaltas = 10;

//Resultados do aluno fictício

let aluno = "Jean";
let mediaFinal = 10;
let faltas = 12;
let resultado;

/* Operador lógico E (AND) */
// if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
//     resultado = "aprovado";
// } else {
//     resultado = "reprovado";
// }


// if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
//     resultado = "aprovado";

// } else if(faltas > limiteDeFaltas){
//     resultado = "reprovado por faltas";

// } else{
//     resultado = "reprovado";
// }
if(faltas > limiteDeFaltas){
    resultado="reprovado por faltas"

}else if(mediaFinal>=mediaMinima){
    resultado ="aprovado"
}else{
    resultado="reprovado"}



console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno:${faltas}`);

console.log("--------------------------------------------------------------");



/* Operador lógico || (OR - OU) */


let diaDaSemana ="sábado";

if(diaDaSemana == "sábado" || diaDaSemana == "domingo"){
    console.log("Final de semana: 😃");
} else{
    console.log("Vá trabalhar.... 😒")
}
