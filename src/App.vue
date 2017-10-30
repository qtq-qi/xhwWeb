<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/components/Foot'
export default {
  name: 'app',
  components: {
    foot
  }
}
</script>

<style>

</style>
