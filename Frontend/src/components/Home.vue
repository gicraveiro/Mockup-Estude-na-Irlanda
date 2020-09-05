<template>
  <div class="page">
    <Navbar></Navbar>
    <Menu></Menu>
    <Content></Content>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Content from "@/components/Content";
export default { 
  name: 'Home',
  /*data () {
    return {
    //  msg: 'Welcome to Your Vue.js App'
    }
  },*/
  components: {
    Navbar: Navbar,
    Menu : Menu,
    Content : Content,
//    Teste : Teste
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
