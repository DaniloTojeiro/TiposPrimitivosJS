//tipo String (texto)

const texto1 = "Olá, mundo!"; //aspas duplas ou simples
const texto2 = 'Olá, mmundo!';
const senha = "senhaSuperSegura456!"
const StringdeNumeros = "34567";

const citacao = 'Meu nome é: '; // Pode inverter as aspas para obter o mesmo resultado
const meuNome = 'Danilo'


//concatenação (+)
console.log(citacao + meuNome)

//template string OU template literal

//transformação/conversão de código Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//---------------------------------------

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); //(false) o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

const novaCidade = "belo horizonte";
const novoInput = "Belo Horizonte";

const inputMinusculo = novoInput.toLowerCase();

console.log(novaCidade === inputMinusculo) //(true) métodos de string nativos do JavaScript em ação, o toLowerCase() que converte todos os caracteres da string informada (no caso, novoInput) para letras minúsculas (se forem algarismos, nada é convertido). Você pode conferir mais sobre este método no MDN.

//lenght
//Essa propriedade retorna o número de unidades de código presentes na string. UTF-16, a codificação utilizada pelo JavaScript, utiliza uma unidade de código de 16-bits para representar os caracteres mais comuns, mas precisa usar duas unidades para caracteres menos usados, então é possível que o valor retornado por length não seja exatamente o número de caracteres na string.

const novaSenha = "minhaSenha123"
console.log(novaSenha.length) //13 caracteres
