/*var idade = 21;
var idade2 = 10;
var nome = "Regisson Cesar";
var frase = "exemplo";
//alert("nome: " +nome + " Idade: "+idade);
//alert(idade + idade2);
console.log(idade + idade2);
console.log(frase.replace("exemplo", "Mudando a palavra"));


var lista = ["Maçã", "Pera", "Laranja"];
console.log(lista[0]);
alert(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista.join(" - "));


var cadastro = [{nome: "Regisson" , idade: 21}, {nome: "pedro" , idade: 20}]
console.log(cadastro);


var idade = prompt("qual sua idade?");

if(idade > 18){
    alert("Maior de idade");
} else{
    alert("menor de idade");
};



var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}


var count = 0;

for(count = 0; count <= 5; count++){
    console.log(count);
}

*/

function soma(n1, n2){
    return n1 + n2;
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log()
   // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://google.com");
    
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Teste";
    //alert("Trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

/*
function validaIdade(idade){
    var validar = true;
    if(idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}

var idade = prompt("ual a sua idade");
console.log(validaIdade(idade));
*/



//alert(soma(5,16));
