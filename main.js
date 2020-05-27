// REST
// Objeto
const usuario = {
	nome: 'Isabela',
	idade: 26,
	empresa: 'GM',
}

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

// Vetor
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// Parâmetro de função
function soma(a, b, c) {
	return a + b + c;
}

console.log(soma(1, 3, 4));

function soma2(...params) {
	return params.reduce((soma, next) => soma + next);
}

console.log(soma2(1, 3, 4, 7));

// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
	nome: 'Isabela',
	idade: 26,
	empresa: 'GM',
};

const usuario2 = { ...usuario1, nome: 'Marcus'};

console.log(usuario2);