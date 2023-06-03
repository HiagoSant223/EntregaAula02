/*let idade1 = prompt("Insira sua idade");
let idade2 = prompt("Insira sua idade");

if (idade1 === idade2) {
  alert("Os valores são iguais");
} else if (idade1 > idade2) {
  alert("O primeiro valor é maior que o segundo valor");
} else {
  alert("O segundo valor é maior que o primeiro valor");
}

console.log(idade1, idade2);*/

let idade1 = prompt("Insira sua idade");
let idade2 = prompt("Insira sua idade");

if (idade1 === idade2) {
  alert("As idades são iguais");
} else if (idade1 > idade2) {
  alert("A primeira pessoa é mais velha do que a segunda pessoa");
  let diferenca = idade1 - idade2;
  console.log("A diferença de idade é de " + diferenca + " ano(s)");
} else {
  alert("A segunda pessoa é mais velha do que a primeira pessoa");
  let diferenca = idade2 - idade1;
  console.log("A diferença de idade é de " + diferenca + " ano(s)");
}
