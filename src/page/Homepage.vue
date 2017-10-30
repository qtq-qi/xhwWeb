<template>
  <div class="home">
    <div class="homeHead">
      <img src="./homeImg/logo@2x.png">
      <input type="text" placeholder="天蝎座鲜花">
      <span class="searchbq"></span>
      <span class="denglu">登录</span>
    </div>
    <div class="bannerlb">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="./homeImg/17_banner_tx_m.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./homeImg/new_banner_yongganai.png"></mt-swipe-item>
      </mt-swipe>
    </div>
    <ul class="smallBanner">
      <li>认证龙头企业</li>
      <li>12年品牌</li>
      <li>3小时送达</li>
      <li>最近226142条好评</li>
    </ul>
    <div class="produceClassify">
      <ul>
        <router-link tag="li" to="/classify">
          <img src="./homeImg/xianhua_icon.png">
          <span>鲜花</span>
        </router-link>
        <router-link tag="li" to="/classify">
          <img src="./homeImg/yongshenghua_icon.png">
          <span>永生花</span>
        </router-link>
        <router-link tag="li" to="/classify">
          <img src="./homeImg/cake_icon.png">
          <span>蛋糕</span>
        </router-link>
        <router-link tag="li" to="/classify">
          <img src="./homeImg/gift_icon.png">
          <span>礼品</span>
        </router-link>
        <router-link tag="li" to="/classify">
          <img src="./homeImg/choclate_icon.png">
          <span>巧克力</span>
        </router-link>
      </ul>
    </div>
    <div class="homeMainList">
      <ul>
        <li></li>
      </ul>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "@/components/Foot";
export default {
  components: {
    foot
  },
  methods: {}
};
</script>
<style>
.home{
  position: relative;
}
.bannerlb{
  width:100%;
  height: 14rem;
  position: absolute;
  top:0;
}
.bannerlb img{
  width:100%;
  height:100%;
}
.homeHead {
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  line-height: 3rem;
  position: absolute;
  top:0;
  z-index: 2;
}
.homeHead > img {
  height: 1rem;
}
input[type="text"] {
  width: 60%;
  height: 28px;
  border-radius: 5px;
  border: none;
  background: #f5f5f5;
  padding-left: 1.5rem;
  color: #232323;
  margin-left: 1rem;
}
.searchbq {
  position: absolute;
  left: 6.5rem;
  top: 1rem;
  background: url("./homeImg/icon_search.png")no-repeat;
  background-size: 20px 20px;
  width: 16px;
  height: 16px;
}
.denglu {
  color: #494949;
  font-size: 13px;
  margin-left: 1rem;
}
.smallBanner{
  width:100%;
  height:2rem;
  position: relative;
  top:13.8rem;
  font-size: 12px;
  border-bottom:1px solid #9e9e9e;
}
.smallBanner li{
  float: left;
  list-style: none;
  color:#9b9b9b;
  margin:0.5rem 0.74rem;
  text-align: center;
}
.produceClassify{
  position: absolute;
  top:16rem;
  width:100%;
}
.produceClassify li{
  width:20%;
  float: left;
  list-style: none;
  text-align: center;
  padding-bottom:0.5rem;
  border-bottom: 8px solid #eee;
}
.produceClassify li img{
  width:50%;
}
.produceClassify li span{
  display: block;
  font-size: 12px;
  color:#494949;
}
</style>


