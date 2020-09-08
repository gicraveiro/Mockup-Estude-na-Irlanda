<template>
  <b-navbar fixed-top="true" centered="true">

<!-- LOGO -->
    <template slot="brand">
      <b-navbar-item>
        <img src="@/assets/logo.png" alt="Logo - estude na Irlanda"/>
      </b-navbar-item>
    </template>

<!-- BARRA DE BUSCA -->
    <template slot="start">
      <b-autocomplete
        rounded
        expanded
        v-model="name"
        :data="filteredDataArray"
        placeholder="Digite o nome da escola ou selecione os filtros abaixo"
        icon="magnify"
        clearable
        @select="option => selected = option"
      >
        <template slot="empty">No results found</template>
      </b-autocomplete>
    </template>

<!-- BOTÃO DROPDOWN INSCRIÇÃO -->
    <template slot="end">
      <b-dropdown>
        <button class="button" slot="trigger">
          <b-icon icon="bell-outline"></b-icon>
        </button>
        <b-dropdown-item href="#">Inscrição submetida!</b-dropdown-item>
        <b-dropdown-item href="#">Inscrição sendo processada!</b-dropdown-item>
        <b-dropdown-item href="#">Inscrição realizada com sucesso!</b-dropdown-item>
      </b-dropdown>

  <!-- BOTÃO DROPDOWN PERFIL -->
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

<script>
export default {
  name: "Navbar",
  data() {
    return {
      data: ["Dublin", "Cork"], /* opções inclusas no autocomplete */
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
.navbar.is-fixed-top { /* indica sobreposição dessa navbar em relação ao menu, para que se possa ver o conteúdo dos borões dropdown */
  z-index: 2;
}

.navbar-item img {
  /* tamanho 4.5 é mais preciso, mas precisa alterar a posição do menu, entao se der tempo eu faço */
  max-height: 3rem;
}
</style>
