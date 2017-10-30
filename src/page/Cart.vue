<template>
  <div class="cart">
    <div class="cartHead">
      <span class="goback" @click="goBack"><</span>
      购物车
      <span class="mainlist" @click="showBal"></span> 
    </div>
    <div class="noProduce">
      <img src="./cartImg/empty_cart2.png" width="60%">
      <p>这里什么都没有啊~</p>
      <router-link to="/home">去逛逛</router-link>
    </div>
    <div class="recommend">
      <h4>为你推荐</h4>
    </div>
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
.cart nav{
  display: none
}
.cart nav.active{
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
  background:url('./cartImg/headerIconMore.png')no-repeat;
  background-size: 1.7rem;
  position: absolute;
  right: 1rem;
  top:0.5rem;
}
.noProduce{
  text-align: center;
  padding:3rem 0 2rem 0;
  border-bottom: 8px solid #eee;
}
.noProduce>a{
  border:1px solid #f60;
  color:#f60;
  display: inline-block;
  margin-top:1rem;
  width:5rem;
  height:2rem;
  text-decoration: none;
  border-radius: 2px;
  line-height: 1.8rem;
}
.recommend h4{
  font-weight: normal;
  padding:0.5rem 0 0 1rem;
}
</style>

