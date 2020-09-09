<template>
  <div class="page">
    <Navbar></Navbar>
    <Menu @filtraCidade="vetorCerto" v-on:retornarFiltroCidade="cidadesFiltradas"></Menu>
    <!-- EM FASE DE TESTES -->
    <span>cidades: {{checkboxCidades}}</span> <!-- DEBUGGANDO, TIRAR DPS -->
    <Content :filtroCidadesProp="cidadesFiltradas"></Content>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Content from "@/components/Content";
export default { 
  name: 'Home',
  data () {
    return {
      checkboxCidades: ''
    }
  },
  components: {
    Navbar: Navbar,
    Menu: Menu,
    Content: Content,
  },
  methods: {
    cidadesFiltradas (value) { /* EM FASE DE TESTES */
      this.checkboxCidades = value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
