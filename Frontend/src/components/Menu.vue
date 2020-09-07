<template>
  <div class="menuComponent">    <!-- unico elemento -->
    <template>
      <b-navbar transparent="true" >
        <template slot="start">
          <b-navbar-item tag="div">
            <b-icon icon="filter-outline"></b-icon>
          </b-navbar-item>
          <b-navbar-item tag="div">
            <label id="filtro">Filtros:</label>
          </b-navbar-item>

          <b-navbar-item tag="div">
            <b-navbar-dropdown tag="div" class="green" label="Cidades" arrowless="true" hoverable="true">
              <b-navbar-item tag="div" class="container">
                <b-checkbox>Dublin</b-checkbox>
                <b-checkbox>Dublin</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown class="green" label="Horário" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-checkbox class="dropdown" v-model="checkboxGroup" native-value="Manhã">Manhã</b-checkbox>
                <b-checkbox class="dropdown" v-model="checkboxGroup" native-value="Tarde">Tarde</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Noite">Noite</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Sabado">Sábado</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Aula" class="green" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-checkbox v-model="checkboxGroup" native-value="General">General</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Business">Business</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item >
            <b-navbar-dropdown label="Vagas" class="green" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-checkbox v-model="checkboxGroup" native-value="Abertas">Abertas</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Fechado">Fechado</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Em breve">Em breve</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Data" class="green" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-field>
                  <label>Início: </label>
                  <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
                  </b-datepicker>
                </b-field>
                <b-field>
                  <label>Fim: </label>
                  <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
                  </b-datepicker>
                </b-field>
              </b-navbar-item>  
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item class="text-green" tag="div">
            <label>ordenar por:</label>
          </b-navbar-item>

          <b-navbar-item tag="div" class="text-orange">
            <b-navbar-dropdown label="preço">
              <b-navbar-item class="text-orange">preço</b-navbar-item>
              <b-navbar-item class="text-orange">nota</b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item class="text-green" tag="div">
            <label>valor:</label>
          </b-navbar-item>

          <b-navbar-item>
            <b-slider style="color:orange;">------------------------</b-slider>
          </b-navbar-item>
        </template>

      </b-navbar>
    </template>
  </div>
</template>

<script>

export default {
  name: "Menu",
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
  z-index:1;
}

#filtro {
  font-size: 25px;
  font-weight: bold;
  /*color: #4a4a4a;*/
}

.green { /* white não funciona no navegador*/
  background-color: #6DA544;
  border-radius:10px;
  color: white !important;
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  margin:0px;
}

.green:hover { /* botão do dropdown quando mouse está em cima*/
  background-color:orange;
}

.container {
  background-color: #6DA544;; /* se o fundo das opções do dropdown funcionar, pode tirar esse comando */
  color:white;
  display:flex;
  justify-content:left;
}

/* cores do checkbox ,nao funciona e nao sei se a sintaxe é aceita assim */
.b-checkbox.checkbox input[type=checkbox]:checked + .check {
    background: orange url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E) no-repeat center center;
    border-color: white !important;
}

.text-green {
  color: #6DA544;;
  font-size: 20PX;
  font-weight: bold;
}

.navbar-dropdown { /* ta certo, mas nao ta funcionando - fundo do dropdown*/
  background-color: #6DA544;;
}

.text-orange { /* opções de ordenação*/
  color: orange !important;
}

.b-slider.is-primary .b-slider-fill { /* ta certo, mas nao funciona */
  background: orange;
}

.navbar-item:hover {
  color:#6DA544;;
}

.navbar-link, a.navbar-item:focus-within { /* dropdown quando fechado e item do dropdown qdo mouse ta em cima -> certo, mas nao funciona */
  color:white /*!important*/;
}

.navbar-link:hover { /* dropdown quando aberto -> certo, mas nao funciona*/
  color: white;
 /* background-color:orange !important; */ /* este está implementado na classe .green:hover */
}

</style>
