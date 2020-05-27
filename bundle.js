"use strict";

var usuario = {
  nome: 'Isabela',
  idade: 26,
  endereco: {
    cidade: 'São José dos Campos',
    estado: 'SP'
  }
}; // const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade); // function mostrarNome(usuario) {
// 	console.log(usuario.nome);
// }

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario);
