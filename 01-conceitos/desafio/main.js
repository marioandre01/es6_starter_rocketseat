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

/*
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
*/


//exercicio 1

class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//exercicio 2 

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1 Utilizando o map
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idades = usuarios.map((item) => item.idade);
console.log(idades);

//2.2 Utilizando o filter
//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const usuariosMais18 = usuarios.filter((item) => {
    if(item.empresa === 'Rocketseat' && item.idade >= 18){
        return item;
    }
});
console.log(usuariosMais18);

//2.3 Utilizando o find
//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const trabalhaGoogle = usuarios.find((item) => {
    if(item.empresa === 'Google'){
        return item;
    }
});
console.log(trabalhaGoogle);

//2.4 Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:

// Resultado:
/*[
    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]*/

const multi = usuarios.map((item) => {
    item.idade = item.idade * 2;
    return item;
})
//console.log(multi);

const idadeMax50 = multi.filter((item) => {
    if(item.idade <= 50){
        return item;
    }
});
console.log(idadeMax50);

//3º exercício
//Converta as funções nos seguintes trechos de código em Arrow Functions:

// 3.1
/*
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
return item + 10;
});
*/
const arr = [1, 2, 3, 4, 5];

const result = arr.map((item) => (item + 10));
console.log(result);

//// 3.2
// Dica: Utilize uma constante pra function
/*
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
return usuario.idade;
}
mostraIdade(usuario);
*/
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => usuario.idade;
    
console.log(mostraIdade(usuario));

//// 3.3
// Dica: Utilize uma constante pra function
/*
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
*/
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//// 3.4
/*
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}
*/
const promise = () => new Promise((resolve, reject) => resolve());

promise()
    //o resolve vai chamar a função then()
    .then(function() {
        console.log('Ok');
    })
    //o reject vai chamar a função catch()
    .catch(function() {
        console.warn('error');
    });


//4º exercício

//4.1 Desestruturação simples
//A partir do seguinte objeto:
const empresa = {
    nomeEmpresa: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const { nomeEmpresa, endereco: {cidade, estado} } = empresa;
console.log(nomeEmpresa);
console.log(cidade);
console.log(estado);

/*
//Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
//fim deve ser possível fazer o seguinte:
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
*/

//4.2 Desestruturação em parâmetros
//Na seguinte função:
/*
function mostraInfo(usuario) {
return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
*/
//Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
//separadamente e a função poder retornar apenas:
//return `${nome} tem ${idade} anos.`;

function mostraInfo({nome , idade}) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//5º Exercício
//Utilizando o operador de rest/spread (...) realize as seguintes operações:

//5.1 Rest
//A partir do array: 
const arr2 = [1, 2, 3, 4, 5, 6];
//defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados.
const [x, ...y] = arr2;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function soma(...valores) {
    //console.log(valores);

    return valores.reduce((total, next) => total + next);
}

// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2 Spread
//A partir do objeto e utilizando o operador spread:
const usuarioNovo = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

//Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
//Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usuario2 = {...usuarioNovo, nome: 'Gabriel'};
console.log(usuario2);
const usuario3 = {...usuarioNovo, endereco: {...usuarioNovo.endereco, cidade: 'Lontras'} };
console.log(usuario3);

//6º Exercício
//Converta o seguinte trecho de código utilizando Template Literals:
/*
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
*/

const usuario4 = 'Diego';
const idade4 = 23;
console.log(`O usuário ${usuario4} possui ${idade4} anos`);

//7º exercício
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
/*
const nome = 'Diego';
const idade = 23;

const usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul',
};
*/

const nome5 = 'Diego';
const idade5 = 23;

const usuario5 = {
    nome5,
    idade5,
    cidade5: 'Rio do Sul',
};

console.log(usuario5);

