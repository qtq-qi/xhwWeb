<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>

export default {
  created () {
    this.$http.get('http://localhost:8081/classifys')
    .then(res =>{
      this.$store.dispatch('setClassify',res.data)
    })
    this.$http.get('http://localhost:8081/products')
    .then(res =>{
      this.$store.dispatch('setProducts',res.data)
    })
    this.$http.get('http://localhost:8081/flowersWord')
    .then(res =>{
      this.$store.dispatch('setflowersWord',res.data)
    })
    // this.$http.get('http://localhost:8081/carts')
    // .then(res =>{
    //   this.$store.dispatch('setCarts',res.data)
    // })
  }

}
</script>

<style>
#app{
  width:100%;
}
</style>
