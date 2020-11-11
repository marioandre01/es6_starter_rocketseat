/*
class TodoList {
    constructor(){
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}
*/

//Usando herença

class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    
    constructor() {
        super();
  
        this.usuario = "Mário";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
    
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('novo todo');
}

MinhaLista.mostraUsuario();

