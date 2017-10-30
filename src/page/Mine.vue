<template>
  <div class="mine">
    <div class="mineHead">
      <span class="goback"><</span>
      <p>Hi,欢迎来到花礼网</p>
      <router-link to="/">登录/注册</router-link>
    </div>
    <foot></foot>
  </div> 
</template>
<script>
import foot from '@/components/Foot'
export default {
  components: {
    foot
  }
}
</script>
<style>
.mineHead{
  width:100%;
  height: 8.8rem;
  background:url('./mineImg/backgroundv3.png')no-repeat;
  background-size: 100% 100%;
  position: relative;
  text-align: center;
  padding:0.1px;
}
.mineHead .goback{
  color:#fff;
  font-size: 2rem;
  position: absolute;
  top:0;
  left:2%;
}
.mineHead p{
  margin-top:3rem;
}
</style>


