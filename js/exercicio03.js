
  function escrevaL() {

        document.write("<br>");
    }

    function escreva(frase) {

        document.write(frase); 
        escrevaL();
    }
//Nesse função a moeda Real será multiplicada pela cotação do Dólar atual;
    function coverter(real) {
        return real*5.04
    }
//Na variável "realnformado", você terá que informar quantos reais você quer converter para dólar;
var realInformado = parseInt(prompt("Quantos Dolares você tem?"));
//Na variável "convertido", o Real que você informou será convertido para dólar;
var convertido = coverter(realInformado);

escreva("<big>Você irá ter:</big>" + " R$ " + convertido.toFixed(2));

console.log(convertido.toFixed(2));




