"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
//exercicio 2 

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1 Utilizando o map
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades); //2.2 Utilizando o filter
//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var usuariosMais18 = usuarios.filter(function (item) {
  if (item.empresa === 'Rocketseat' && item.idade >= 18) {
    return item;
  }
});
console.log(usuariosMais18); //2.3 Utilizando o find
//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var trabalhaGoogle = usuarios.find(function (item) {
  if (item.empresa === 'Google') {
    return item;
  }
});
console.log(trabalhaGoogle); //2.4 Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:
// Resultado:

/*[
    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]*/

var multi = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
}); //console.log(multi);

var idadeMax50 = multi.filter(function (item) {
  if (item.idade <= 50) {
    return item;
  }
});
console.log(idadeMax50); //3º exercício
//Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1

/*
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
return item + 10;
});
*/

var arr = [1, 2, 3, 4, 5];
var result = arr.map(function (item) {
  return item + 10;
});
console.log(result); //// 3.2
// Dica: Utilize uma constante pra function

/*
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
return usuario.idade;
}
mostraIdade(usuario);
*/

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); //// 3.3
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

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //// 3.4

/*
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}
*/

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

promise() //o resolve vai chamar a função then()
.then(function () {
  console.log('Ok');
}) //o reject vai chamar a função catch()
["catch"](function () {
  console.warn('error');
}); //4º exercício
//4.1 Desestruturação simples
//A partir do seguinte objeto:

var empresa = {
  nomeEmpresa: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nomeEmpresa = empresa.nomeEmpresa,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
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

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); //5º Exercício
//Utilizando o operador de rest/spread (...) realize as seguintes operações:
//5.1 Rest
//A partir do array: 

var arr2 = [1, 2, 3, 4, 5, 6]; //defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados.

var x = arr2[0],
    y = arr2.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function soma() {
  for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
    valores[_key] = arguments[_key];
  }

  //console.log(valores);
  return valores.reduce(function (total, next) {
    return total + next;
  });
} // function soma...


console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
//5.2 Spread
//A partir do objeto e utilizando o operador spread:

var usuarioNovo = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}; //Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
//Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

var usuario2 = _objectSpread(_objectSpread({}, usuarioNovo), {}, {
  nome: 'Gabriel'
});

console.log(usuario2);

var usuario3 = _objectSpread(_objectSpread({}, usuarioNovo), {}, {
  endereco: _objectSpread(_objectSpread({}, usuarioNovo.endereco), {}, {
    cidade: 'Lontras'
  })
});

console.log(usuario3); //6º Exercício
//Converta o seguinte trecho de código utilizando Template Literals:

/*
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
*/

var usuario4 = 'Diego';
var idade4 = 23;
console.log("O usu\xE1rio ".concat(usuario4, " possui ").concat(idade4, " anos")); //7º exercício
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

var nome5 = 'Diego';
var idade5 = 23;
var usuario5 = {
  nome5: nome5,
  idade5: idade5,
  cidade5: 'Rio do Sul'
};
console.log(usuario5);
