class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class ToDoList extends List {
  constructor() {
    super();

    this.user = 'Isabela';
  }

  showUser() {
    console.log(this.user);
  }
}

const minhaLista = new ToDoList();

document.getElementById('adicionar').onclick = function() {
  minhaLista.add('Novo To-Do');
}

minhaLista.showUser();