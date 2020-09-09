<template>
  <div class="page">
    <Navbar></Navbar>
    <Menu @cidades-filtradas='filtrarCidades'></Menu>
    <Content></Content> <!-- :checkbox-cidades="checkboxCidades" EM FASE DE TESTES -->
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
  methods: { /* recebe as cidades com checkbox  marcado e atualiza o vetor para filtrar as cidades */
    filtrarCidades(cidadesFiltradas){
      this.checkboxCidades = cidadesFiltradas;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
