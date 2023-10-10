/* Estrutura de Dados 


Arrays (Vetores/Matrizes): são listas de dados indexados, sequenciais acessíveis por um índice numérico.

Objetos

Lista de dados não indexados e formados por propriedades e valores. 
*/

// Arrays 

let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); //saída direta/estruturada

console.log(cursos[2]);

console.log(`O curso é ${cursos[0]}`); //SQL

// Tipos de dados mais comuns no JS


/* String (textos em geral) 
Number ( números  inteiros, decimais, octais, etc
    Array (vetor/matriz - listas de dados indexados)
    Object (dados não indexados com propriedades e valores )
    Boolean (Booleano, valores " true/verdadeiro" ou False/falso") 
    usar o camndo typeof nomeDaVariavel"  
    */
// Só funciona a visualização pelo Console

/* Crie uma constante chamada "dados" e coloque nela os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade

2- Mostre no console uma mensagem contendo somente o nome e a idade da pessoa.
Exemplo: Fulano tem 25 anos

*/



const dados = ["Maria", "Debet", 18, "3568.99.99, Nova York"];

console.log(`${dados[0]}, tem ${dados[2]} anos de idade.`);

console.log(dados);

console.log("------------------------------------------");

//objeto 
let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco",
    opcionais: ["Ar condicionado", "Vidros elétricos", "Alarme"]
};

console.log(carro);

console.log(carro.modelo);


console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);


console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[0]}`);

/* Crie um novo objeto contendo informações de algo que voce gosta (filme, livro, comida, jogo , etc) */
// 2- Exibir uma mensagem com pelo menos 2 propriedade do objeto que voce criou.

let comida = {
    prato_feito: "Arroz, feijão, bife e ovo",
    sobremesa: "Pudim ",
    bebida: "suco de laranja",
    acompanhamento: "salada fria"
}

console.log(`Gosto de ${comida.prato_feito} e um bom ${comida.bebida}`);

console.log("____________________________________________________________");

//Objeto com array e com outro objeto:

let pessoa = {
nome: "Shiryu",
idade: 20,
telefones: ["11-21350300","11-91234-5678"],

medidas:{
peso:65,
altura:1.75
}

};
console.log(`Nome: ${pessoa.nome}`);
console.log(`Celular: ${pessoa.telefones[1]}`);
console.log(`Peso: ${pessoa.medidas.peso} kg`);

//Array de objetos























