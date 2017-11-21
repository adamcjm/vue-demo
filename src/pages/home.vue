<template>
  <div class="home">
    <img src="../assets/logo.png" alt="">
    <h1>{{ msg }}</h1>
    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—ChenJianMing</h2>
    <button @click="link">start</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Vue.js'
    }
  },
  methods: {
    link () {
      this.$router.push({name: 'compare'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin-top: 60px;
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
