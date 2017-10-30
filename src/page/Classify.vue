<template>
  <div class="classify">
    <div class="classifyHead">
      <input type="text" placeholder="搜索鲜花、蛋糕、礼品">
      <span class="searchbq2"></span>
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
.classifyHead{
  width:100%;
  height: 3rem;
  background:rgba(245,245,245,.9);
  line-height: 2.8rem;
  position: relative;
}
.classifyHead input[type="text"]{
  background:#fff;
  width:90%;
  padding-left:0.5rem;
}
.classifyHead .searchbq2{
  background: url('./homeImg/icon_Search.png')no-repeat;
  background-size: 30px 30px;
  width: 26px;
  height: 26px;
  position: absolute;
  right:2rem;
  top:0.5rem;
}
</style>


