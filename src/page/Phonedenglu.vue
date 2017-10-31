<template>
  <div class="phonedenglu">
      <headgray></headgray>
      <router-link to="/denglu">会员账号登录</router-link>
  </div>
</template>
<script>
import headgray from '@/components/HeadGray'
export default {
  components: {
      headgray
  }
}
</script>
<style>
.phonedenglu{
    margin-left:0;
}
.phonedenglu>a{
    color:#f60;
    text-decoration: none;
    float: right;
    font-size: 13px;
    margin:1rem;
}
</style>