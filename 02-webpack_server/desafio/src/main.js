//exercicio 1.1
//Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
//e chame a funão info();

//import * as name from './functions';
import { default as ClasseUsuario }  from './functions';

ClasseUsuario.info();

//se a função não for static é preciso instanciar um objeto da classe usuario
//var teste = new usuario();
//teste.info2();

//com a função sendo static
//usuario.info();

//1.2
//Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
import { idade } from './functions';
console.log(idade);

//1.3
//Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
//para IdadeUsuario.
import usuario, { idade as IdadeUsuario} from './functions';
usuario.info();
console.log(IdadeUsuario);


