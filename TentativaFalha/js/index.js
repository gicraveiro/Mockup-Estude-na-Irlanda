import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


$(document).ready(function() { // executa assim que toda a pagina tiver terminado de carregar

   /* Evento de click do checkbox*/
     function toggleRemovido(ev) { 
           var $el;
           $el = $(ev.currentTarget);
           $el.closest('li').toggleClass('removido'); // impõe ou remove a classe CSS "removido" ao objeto clicado, dependendo de seu estado
     }
 //    $('.js-add').click(onAdd); // atrela função de adicionar livro à classe do botão de adicionar(a todos os botôes dessa classe)
     $('.js-livro').click(toggleRemovido); // atrela função de atualizar estado do livro à classe do botão de checkbox de cada livro
 });

// Dados 


 var data = { /* 
 	
 	variavel: '', 
 	variavel2: '', 
 	vetor: [{nome:'', id:''},{nome:'', id:''}] 

 	*/ }; 

// Declarar componentes

/*
var nomeComp = Vue.extend({
	data:  function () {return data;}, // se tiver
	methods: {}, // se tiver
	template: '' + /* todo o código html do componente */
/*	''
 });
*/

var NavBar = Vue.extend({
	data: function () {
    return data;
  	},
	template: 
	'	<template>' +
	' 		<b-navbar>' +
	'			<template slot="brand">' +
	'           	<b-navbar-item tag="router-link" :to="{ path: '/' }">' +
	'	           		<img' +
	'	              		src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"' +
	'	              		alt="Lightweight UI components for Vue.js based on Bulma"' +
	'	           		>' +
	'	        	</b-navbar-item>' +
	'	    	</template>' +
	'	        <template slot="start">' +
	'	           <b-navbar-item href="#">Home</b-navbar-item>' +
		              
	'	           <b-navbar-dropdown label="Info">' +
	'	           		<b-navbar-item href="#">' +
	'	                      About' +
	'	                </b-navbar-item>' +
	'	           <b-navbar-item href="#">' +
	'	                      Contact' +
	'	                </b-navbar-item>' +
	'	           </b-navbar-dropdown>' +
	'			</template>' +
	'		</b-navbar>' +
	'	</template>' 
});

// Registrar componentes
//Vue.component('nome-da-tag', NomeComponente)

Vue.component('navbar-estude-irlanda', NavBar);

Vue.use(Buefy)

new Vue ({ // instancia o vue e assim conecta os pontos de toda a implementação
	el: '#app',
	data: data
//	data: data //nao sei ainda se vai precisar 
});