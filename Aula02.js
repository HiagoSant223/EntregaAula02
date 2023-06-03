let umNumero = 5

if (umNumero == 6) {
    console.log("É Verdadeiro");
}else {
    console.log("É falso");
}

let nomeUsuario = prompt("Insirir seu nome");

if (nomeUsuario == " "){
    alert ("O nome de usuario não foi inserido");
}else {
    alert("Nome de usuario inserido " + nomeUsuario);
}

let nomeInserio = prompt("Inserir nome");
let sobrenomeInserido = prompt ("Inserir sobrenome");

if((nomeInserio != " ") && (sobrenomeInserido != " ")){
    alert ("Nome: " + nomeInserio + "Sobrenome: " + sobrenomeInserido);
}else {
    alert("Erro: Inserir nome e sobrenome");
}

console.log(nomeInserio + sobrenomeInserido);