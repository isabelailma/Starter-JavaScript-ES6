/* Exercicio 3 - Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await 
do Babel e o babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar 
o Axios. 
Transforme os seguintes trechos de código utilizando async/await: */

// A
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

/* function umPorSegundo() {
  delay().then(() => {
    console.log('1s');
    delay().then(() => {
      console.log('2s');
      delay().then(() => {
        console.log('3s');
      });
    })
  });
} */

async function umPorSegundo() {
  await delay();
  console.log('1 segundo');
  await delay();
  console.log('2 segundos');
  await delay();
  console.log('3 segundos');
}
umPorSegundo();

// B
import axios from 'axios';

/* function getUserFromGithub(user) {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log('Usuário não existe');
  })
} */

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (error) {
    console.warn('⚠ Usuário não existe!');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// C
/*class Github {
  static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('Repositório não existe');
    })
  }
} */

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (error) {
      console.warn('⚠ Repositório não existe!');
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// D
/*const buscaUsuario = usuario => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log('Usuário não existe');
  });
} */

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (error) {
    console.warn('⚠ Usuário não existe!');
  }
}

buscaUsuario('diego3g');