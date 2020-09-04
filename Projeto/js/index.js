import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

// Dados 

/*
 var data = { /* 
 	
 	variavel: '', 
 	variavel2: '', 
 	vetor: [{nome:'', id:''},{nome:'', id:''}] 

 	*//* }; */

// Declarar componentes

/*
var nomeComp = Vue.extend({
	data:  function () {return data;}, // se tiver
	methods: {}, // se tiver
	template: '' + /* todo o código html do componente */
/*	''
 });
*/

// Registrar componentes
//Vue.component('nome-da-tag', NomeComponente)


new Vue ({ // instancia o vue e assim conecta os pontos de toda a implementação
	el: '#app',
//	data: data //nao sei ainda se vai precisar 
});