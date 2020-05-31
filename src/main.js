import api from './api';

class App {
  constructor() {
    this.repositories = [];

    this.inputEl = document.querySelector('input[name=repository]');
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }
  
  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) return;

    this.setLoading();

    await this.getRepositories(repoInput);
    this.inputEl.value = '';

    this.setLoading(false);

    this.render();
  }

  async getRepositories(repo) {
    try {
      const response = await api.get(`/repos/${repo}`);
      const {name, description, html_url, owner: {avatar_url}} = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });
    } catch (error) {
      console.warn('⚠ Repositório inexistente!');
      alert('⚠ Repositório inexistente!');
    }
  }

  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.appendChild(document.createTextNode('Acessar'));
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement('div');
      loadingEl.setAttribute('id', 'loading');
      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }
}

new App();