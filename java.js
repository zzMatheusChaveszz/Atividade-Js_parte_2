let num1 = parseInt(prompt("Digite um numero inteiro:"));
let num2 = parseInt(prompt("Digite outro numero inteiro:"));
let soma = num1 + num2;
console.log("A soma dos numeros é igual a:", soma);

let Nome = "Digite seu nome e segundo sobrenome";

let novoNome = Nome.replace("Nome", "Sobrenome");

console.log("Nome alterado com sucesso!:", novoNome);

let preco = 777; 
let desconto = 0.2;

let precoFinal = preco * (1 - desconto);

console.log("Preço final com desconto:", precoFinal)

let idade = prompt("Qual a sua idade");

if (idade < 18) {
  console.log("Você é menor de idade");
} else if (idade < 60) {
  console.log("Você é adulto");
} else {
  console.log("Você é idoso");
}

let numero = prompt("Digite um número");

if (numero > 0) {
  console.log("Ele é positivo");
} else if (numero < 0) {
  console.log("Ele é negativo");
} else {
  console.log("Ele é igual a zero");
}

let altura = prompt("Qual sua altura ?");
let peso = prompt("Qual o seu peso");

altura = parseFloat(altura);
peso = parseFloat(peso);

let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
  console.log("Seu IMC está dentro da faixa saudável.");
} else {
  console.log("Seu IMC está fora da faixa saudável.");
}