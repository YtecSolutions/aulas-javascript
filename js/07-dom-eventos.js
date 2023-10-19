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
titulo.classList.add("destaque"); //Classe CSS via JS

const linksReferencia = document.querySelectorAll("ul li a ") //seletor descendente

console.log("___________________________ ");

let quantidadeDeLinks = linksReferencia.length;
console.log(linksReferencia);
for (let link of linksReferencia) {
    link.setAttribute("target", "_blank");
}

//for (let i = 0; i < quantidadeDeLinks; i++) {
//   linksReferencia[i].setAttribute("target", "_blank");
//}
/* Manipulando Eventos */
const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");

const reprodutorAudio = document.querySelector("#reprodutor-audio");
const imagemMeme = document.querySelector("#imagem-meme");

// No querySelector temos que por "" # " para identificação  
exemplo01.addEventListener("click", function () {
    pagina.style.fontFamily = "Verdana";
    mensagem.textContent = "Fonte alterada!";
    mensagem.style.background = "yellow";
    //Executamos o áudio com play
    reprodutorAudio.play();
    //Removemos o atributo hidden(portanto, a imagem aparecerá)
    imagemMeme.removeAttribute("hidden");
});

//Exemplo modo noturno

const botao = document.querySelector("#noturno");

botao.addEventListener("click", gerenciamentoModoNoturno)

function gerenciamentoModoNoturno() {
    pagina.classList.toggle("modo-noturno");

// Se pagina contem a classe modo-noturno
if (pagina.classList.contains("modo-noturno")){
// mude o texto do botão para "Desativar"
    botao.textContent=  "Desativar";
    
}else{

    botao.textContent= "Ativar";
}
}
//monitor de evento Ouvinte de evento (aguardando)
/* Exercicio faça aqui mesmo  */
/* Se o botão estiver  */


