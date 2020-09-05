<template>
  <div class="hello">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default { 
  name: 'Home',
  /*data () {
    return {
    //  msg: 'Welcome to Your Vue.js App'
    }
  },*/
  components: {
    Navbar: Navbar
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
