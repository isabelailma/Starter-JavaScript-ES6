const usuario = {
	nome: 'Isabela',
	idade: 26,
	endereco: {
		cidade: 'São José dos Campos',
		estado: 'SP',
	},
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome, idade, cidade);

// function mostrarNome(usuario) {
// 	console.log(usuario.nome);
// }

function mostrarNome({ nome, idade }) {
	console.log(nome, idade)
}

mostrarNome(usuario);