<template>
  <b-navbar transparent="true">
    <template slot="start">
<!-- ÍCONE E LABEL "FILTROS" -->
      <b-navbar-item tag="div">
        <b-icon icon="filter-outline"></b-icon>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <label id="filtro">Filtros:</label>
      </b-navbar-item>
<!-- DROPDOWN CIDADES -->
      <b-navbar-item>
        <b-navbar-dropdown class="dropdown-green" label="Cidades" arrowless="true" hoverable="true">
          <b-navbar-item tag="div" class="container">
            <b-checkbox v-model="filtroCidades" native-value="Dublin" id="dublin">Dublin</b-checkbox>
            <b-checkbox v-model="filtroCidades" native-value="Cork">Cork</b-checkbox>
            <b-button class="dropdown-green" @click='atualizarCidades()'>Filtrar</b-button>
          </b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
<!-- DROPDOWN HORÁRIO -->
      <b-navbar-item>
        <b-navbar-dropdown class="dropdown-green" label="Horário" arrowless="true" hoverable="true">
          <b-navbar-item tag="div" class="container">
            <b-checkbox v-model="checkboxGroup" native-value="Manhã">Manhã</b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="Tarde">Tarde</b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="Noite">Noite</b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="Sabado">Sábado</b-checkbox>
          </b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
<!-- DROPDOWN AULA -->
      <b-navbar-item>
        <b-navbar-dropdown label="Aula" class="dropdown-green" arrowless="true" hoverable="true">
          <b-navbar-item tag="div" class="container">
            <b-checkbox v-model="checkboxGroup" native-value="General">General</b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="Business">Business</b-checkbox>
          </b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
<!-- DROPDOWN VAGAS -->
      <b-navbar-item >
        <b-navbar-dropdown label="Vagas" class="dropdown-green" arrowless="true" hoverable="true">
          <b-navbar-item tag="div" class="container">
            <b-checkbox v-model="checkboxGroup" native-value="Abertas">Abertas</b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="Fechado">Fechado</b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="Em breve">Em breve</b-checkbox>
          </b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
<!-- DROPDOWN DATA -->
      <b-navbar-item>
        <b-navbar-dropdown label="Data" class="dropdown-green" arrowless="true" hoverable="true">
          <b-navbar-item tag="div" class="containerData">
            <b-field>
              <label>Início: </label>
              <b-datepicker
                v-model="dataInicio"
                icon="calendar-today"
                trap-focus>
              </b-datepicker>
            </b-field>
            <b-field>
              <label>Fim: </label>
              <b-datepicker
                v-model="dataFim"
                icon="calendar-today"
                trap-focus>
              </b-datepicker>
            </b-field>
          </b-navbar-item>  
        </b-navbar-dropdown>
      </b-navbar-item>
<!-- LABEL ORDENAR POR -->
      <b-navbar-item class="label-green" tag="div">
        <label>ordenar por:</label>
      </b-navbar-item>
<!-- DROPDOWN PREÇO -->
      <b-navbar-item tag="div" class="text-orange">
        <b-navbar-dropdown label="preço">
          <b-navbar-item class="text-orange">preço</b-navbar-item>
          <b-navbar-item class="text-orange">nota</b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
<!-- LABEL VALOR -->
      <b-navbar-item class="label-green" tag="div">
        <label>valor:</label>
      </b-navbar-item>
<!-- SLIDER VALOR -->
      <b-navbar-item>
        <b-slider 
          class="slider" 
          rounded
          max="10000" 
          :custom-formatter="val => 'R$ ' + val">
        </b-slider>
      </b-navbar-item>

    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Menu",
  props: {
    cidades: String
  },
  data() {
    return {
      filtroCidades:[],
      checkboxHorario: [],
      checkboxAula: [],
      checkboxVagas: [],
      dataInicio: new Date(),
      dataFim: new Date(),
    };
  },
  methods: {
    atualizarCidades(){
      this.$emit("cidades-filtradas",this.filtroCidades);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar { /* indica sobreposição da navbar para que se possa ver os dropdowns da outra navbar abertos */
  z-index:1;
  margin-top:6.5rem;
  margin-left:2rem;
  margin-bottom:1rem;
}

#filtro { /* label filtros */
  font-size: 25px;
  font-weight: bold;
}

.dropdown-green { /* color white não funciona no navegador*/
  background-color: #6DA544;
  border-radius:10px;
  color: white !important;
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  margin:0px;
}

.dropdown-green:hover { /* botão do dropdown quando mouse está em cima*/
  background-color:orange;
}

.container {
  background-color: #6DA544;; /* se o fundo das opções do dropdown funcionar, pode tirar esse comando */
  color:white;
  display:flex;
  justify-content:left;
  font-size:16px;
}

.containerData {
  background-color: #6DA544;; /* se o fundo das opções do dropdown funcionar, pode tirar esse comando */
  display:block;
  width: 300px;
  padding:1rem;
  color:white;
  font-size: 18px;
}

.containerData label {
  padding:1rem;
}

/* cores do checkbox ,nao funciona e nao sei se a sintaxe é aceita assim */
.b-checkbox.checkbox input[type=checkbox]:checked + .check {
    background: orange url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E) no-repeat center center;
    border-color: white !important;
}

.label-green { /* labels verdes (ordenar por, valor) */
  color: #6DA544;;
  font-size: 20PX;
  font-weight: bold;
}

.navbar-dropdown { /* fundo do dropdown ta certo -> mas nao ta funcionando  */
  background-color: #6DA544;
}

.text-orange { /* opções do dropdown "ordenar por" */
  color: orange !important;
}

.navbar.is-transparent a.navbar-item:hover{ /* hover do preço, mas nao funcionae precisa conferir se está certo */
  background-color:#6DA544;
  color:white;
}

.b-slider.is-primary .b-slider-fill { /* cor do slider -> ta certo, mas nao funciona */
  background: orange;
}

.navbar-link, a.navbar-item:focus-within { /* dropdown quando fechado e item do dropdown qdo mouse ta em cima -> certo, mas nao funciona */
  color:white /*!important*/;
}

.navbar-link:hover { /* dropdown quando aberto -> certo, mas nao funciona*/
  color: white;
 /* background-color:orange !important; */ /* este está implementado na classe .dropdown-green:hover */
}


.b-slider.is-primary .b-slider-fill { /* barra do slider - certo, mas nao funciona */
  background:orange;
}
.b-slider .b-slider-thumb-wrapper .b-slider-thumb { /* quadradinho do slider - certo, mas nao funciona */
  background:#6DA544;
  border:#6DA544;
}
.slider { /* comprimento do slider */
  width:200px;
}

</style>
