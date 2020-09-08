

var data = {
  cabecalho: 'Livros Preferidos'
};

// Declarando os componentes

var AlteraTituloComp = Vue.extend({
  data: function () {
    return data;
  },
  template: '<input v-model="cabecalho"/>'
});


// Registrando Componentes

Vue.component('altera-titulo-comp', AlteraTituloComp);


//Instanciando o Vue

new Vue({
   el: '#app',
   data:data
 });