<template>
  <div class="page">
    <!-- unico elemento -->
    <template>
      <b-navbar>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </b-navbar-item>
        </template>
        <template slot="start">
            <section>   
                <b-autocomplete
                    rounded
                    v-model="name"
                    :data="filteredDataArray"
                    placeholder="Digite o nome da escola ou selecione os filtros abaixo"
                    icon="magnify"
                    clearable
                    @select="option => selected = option">
                    <template slot="empty">No results found</template>
                </b-autocomplete>
          </section>
        </template>

        <template slot="end">

          <b-navbar-item tag="div">
            <b-navbar-dropdown label="Sino" arrowless="true">
              <b-navbar-item href="#">Inscrição submetida!</b-navbar-item>
              <b-navbar-item href="#">Inscrição sendo processada!</b-navbar-item>
              <b-navbar-item href="#">Inscrição realizada com sucesso!</b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>
          <b-navbar-item>
            <b-navbar-dropdown label="Perfil" arrowless="true">
              <b-navbar-item href="#">Minha inscrição</b-navbar-item>
              <b-navbar-item href="#">Sair</b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>          
        
        </template>
      </b-navbar>
    </template>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
