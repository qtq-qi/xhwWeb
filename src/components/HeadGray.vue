<template>
  <div class="headgray">
        <div class="cartHead">
            <span class="goback" @click="goBack"><</span>
            购物车
            <span class="mainlist" @click="showBal"></span> 
        </div>
        <div></div>
        <foot :class="{active:isShowBal}"></foot>
  </div>
</template>
<script>
import foot from '@/components/Foot'
export default {
  data () {
    return {
      isShowBal:false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    showBal () {
      this.isShowBal = !this.isShowBal
    }
  },
  components: {
    foot
  }
}
</script>
<style>
.headgray{
    margin-left:0;
}
.cartHead{
  width:100%;
  height:3rem;
  background:rgba(250,250,250,0.9);
  text-align: center;
  position: relative;
  font-size: 1.3rem;
  line-height: 3rem;
  position: relative;
}
.cartHead .goback{
  position: absolute;
  left:1rem;
  top:0;
  font-size: 1.8rem;
}
.headgray nav{
  display: none
}
.headgray nav.active{
  display: block;
  position: absolute;
  top:3rem;
  border-top:none;
  border-bottom:1px solid #ddd;
}
.mainlist{
  display: inline-block;
  width: 1.7rem;
  height: 1.7rem;
  background:url('../page/cartImg/headerIconMore.png')no-repeat;
  background-size: 1.7rem;
  position: absolute;
  right: 1rem;
  top:0.5rem;
}
</style>

