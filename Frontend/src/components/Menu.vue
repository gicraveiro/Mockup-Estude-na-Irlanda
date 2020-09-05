<template>
  <div class="page">
    <!-- unico elemento -->
    <template>
      <b-navbar>
        <template slot="start">
          <b-navbar-item>
            <label>Filtros:</label>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Cidades" boxed="true" arrowless="true" hoverable="true">
              <b-checkbox>Dublin</b-checkbox>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Horário" boxed="true" arrowless="true" hoverable="true">
              <b-checkbox v-model="checkboxGroup" native-value="Manhã">Manhã</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Tarde">Tarde</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Noite">Noite</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Sabado">Sabado</b-checkbox>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Aula" boxed="true" arrowless="true" hoverable="true">
              <b-checkbox v-model="checkboxGroup" native-value="General">General</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Business">Business</b-checkbox>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Vagas" boxed="true" arrowless="true" hoverable="true">
              <b-checkbox v-model="checkboxGroup" native-value="Abertas">Abertas</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Fechado">Fechado</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Em breve">Em breve</b-checkbox>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Data" boxed="true" arrowless="true" hoverable="true">
  
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <label>ordenar por:</label>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="preço">
              <b-navbar-item>preço</b-navbar-item>
              <b-navbar-item>nota</b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <label>valor:</label>
          </b-navbar-item>

          <b-navbar-item size="lg">
            <b-slider></b-slider>
          </b-navbar-item>
        </template>



        <template slot="end"></template>
      </b-navbar>
    </template>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
