<template>
  <nav>
    <router-link to="/" class="home">
      <span></span>
      首页
    </router-link>
    <router-link to="/classify" class="classify">
      <span></span>
      闪送超市
    </router-link>
    <router-link to="/cart" tag="a" class="cart" ref="cartEl">
      <!-- <var v-if="cartsLen>0" :class="{active: cartActive}">{{cartsLen}}</var> -->
      <span></span>
      购物车
    </router-link>
    <router-link to="/mine" class="mine">
      <span></span>
      我的
    </router-link>
  </nav>
</template>
<script>
export default {
}
</script>

<style>
nav{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.8rem;
  background-color: #fff;
  border-top:1px solid #ddd;
}
nav a{
  float: left;
  width: 25%;
  height: 3.8rem;
  padding-top: 0.3rem;
  text-align: center;
  color: #777;
  font-size: 12px;
  position: relative;
  text-decoration: none;
}
nav a span{
  display: block;
  width: 100%;
  height: 2rem;
  -webkit-background-size: auto 2rem;
  background-size: auto 1.5rem;
  background-position: center 0;
  background-repeat: no-repeat;
}
nav>a.home>span{
  background-image: url("./footImg/home_icon_new.png");
}
nav>a.classify>span{
  background-image: url("./footImg/classify_icon_new.png");
}
nav>a.cart>span{
  background-image: url("./footImg/cart_icon_new.png");
}
nav>a.mine>span{
  background-image: url("./footImg/my_icon_new.png");
}
nav>a.home.router-link-exact-active>span{
  background-image: url("./footImg/home_icon_click_new.png");
}
nav>a.classify.router-link-exact-active>span{
  background-image: url("./footImg/classify_icon_click_new.png");
}
nav>a.router-link-exact-active{
  color:#fe6600;
}
nav>a.mine.router-link-exact-active>span{
  background-image: url("./footImg/my_icon_click_new.png");
}
</style>

