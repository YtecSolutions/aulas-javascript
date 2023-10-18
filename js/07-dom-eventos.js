"use strict"

/* Funções de seleção do DOM

-getElementeById()
Seleciona um elemento através de um id 


-querySelector()
Seleciona UM elemento através de um seletor 

- querySelectorAll()

Exemplos:*/
//Acessando o DOM
const subtitulo = document.getElementById("subtitulo-dom");
console.log(subtitulo);

const desenho = document.querySelector("figure");
const descricao = document.querySelector("#descricao");

console.log(desenho);
console.log(descricao);


const variosElementos = document.querySelectorAll("h3,a");
console.log(variosElementos[1]);
//Modificando o DOM

const titulo = document.querySelector("h1");
titulo.textContent = "Olá JavaScript";
titulo.style.textAlign = "center"; // CSS inline via JS
titulo.classList.add("destque"); //Classe CSS via JS

const linksReferencia = document.querySelectorAll("ul li a ") //seletor descendente

console.log("___________________________ ");


console.log(linksReferencia);
for(let link of linksReferencia){
    link.setAttribute("target","_blank");
}
//let quantidadeDeLinks = linksReferencia.length;
//for (let i = 0; i < quantidadeDeLinks; i++) {
 //   linksReferencia[i].setAttribute("target", "_blank");
//}

