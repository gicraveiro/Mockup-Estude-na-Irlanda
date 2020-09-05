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

          <b-navbar-item icon="bell-outline" label="Sino" tag="div">
            <b-navbar-dropdown v-model="statusInscricao" aria-role="list" arrowless="true">
              <button type="button" slot="trigger">
                <template>
                  <b-icon icon="bell-outline"></b-icon>
                  <span>Sino</span>
                </template>
                
              </button>
              <b-navbar-item href="#">Inscrição submetida!</b-navbar-item>
              <b-navbar-item href="#">Inscrição sendo processada!</b-navbar-item>
              <b-navbar-item href="#">Inscrição realizada com sucesso!</b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>
          <b-navbar-item>
            <b-navbar-dropdown label="Nicholas Doyle" icon="bell-outline" arrowless="true">
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
