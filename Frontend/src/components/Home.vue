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
  data () {
    return {
    }
  },
  components: {
    Navbar: Navbar,
    Menu : Menu,
    Content : Content,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
