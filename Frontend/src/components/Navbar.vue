<template>
  <div class="page">
    <!-- unico elemento -->
    <template>
      <b-navbar fixed-top="true">
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
              expanded 
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
          <b-dropdown>
            <button class="button" slot="trigger">
              <b-icon icon="bell-outline"></b-icon>
            </button>
            <b-dropdown-item href="#">Inscrição submetida!</b-dropdown-item>
            <b-dropdown-item href="#">Inscrição sendo processada!</b-dropdown-item>
            <b-dropdown-item href="#">Inscrição realizada com sucesso!</b-dropdown-item>
          </b-dropdown>

          <b-dropdown>
            <button class="button" slot="trigger">
              <b-icon icon="account-circle"></b-icon>
              <p>Nicholas Doyle</p>
            </button>
            <b-dropdown-item href="#">Minha inscrição</b-dropdown-item>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-dropdown>
        </template>
      </b-navbar>
    </template>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      data: [
        "Dublin",
        "Cork",
      ],
      name: "",
      selected: null,
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
