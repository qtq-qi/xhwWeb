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
      <ul v-for="(item,index) in classifyList" :key="item.classify_id" v-if="index<3">
        <h4>—— {{item.classify_name+"精选"}} ——</h4>
        <li v-for="(it,ind) in product" v-if="ind<5">
          <img :src="it.imgs">
          <p>{{it.name}}</p>
          <p class="introduce">{{it.introduce}}</p>
          <span>{{"￥"+it.price}}</span>
        </li>
        <router-link to="/classify">全部{{item.classify_name}} ></router-link>
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
  computed: {
    classifyList () {
      return this.$store.state.classify
    },
    product () {
      return this.$store.state.product
    }
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
.homeMainList{
  position:absolute;
  top:22rem;
  margin-bottom:3rem;
}
.homeMainList ul:after{
  display:block;
  clear:both;
  content: ''
}
.homeMainList ul{
  border-bottom:8px solid #ddd;
  position:relative;
  padding-bottom:2rem;
}
.homeMainList ul>h4{
  text-align:center;
  width:100%;
  color:#222;
}
.homeMainList li{
  float:left;
  list-style:none;
  margin:0.3rem 0.45rem;
  font-size:13px;
  color:#232323;
}
.homeMainList li>img {
  width:173px;
  height:186px;
}
.homeMainList ul>a{
  position:absolute;
  bottom:0.5rem;
  left:8rem;
  text-align:center;
  text-decoration:none;
  line-height:1.8rem;
  width:8rem;
  height:2rem;
  border:1px solid #ddd;
  color:#777
}
.introduce{
  font-size:12px;
  color:#777;
}
</style>


