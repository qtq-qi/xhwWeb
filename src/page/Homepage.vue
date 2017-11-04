<template>
  <div class="home">
    <div class="homeHead">
      <img src="./homeImg/logo@2x.png">
      <input type="text" placeholder="天蝎座鲜花">
      <span class="searchbq"></span>
      <router-link class="denglu" to="/denglu">登录</router-link>
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
        <li v-for="(it,ind) in product" :key="ind" v-if="ind<5" @click="getProducts(it)">
          <img v-lazy="it.imgs">
          <p>{{it.name}}</p>
          <p class="introduce">{{it.introduce}}</p>
          <span>{{"￥"+it.price}}</span>
        </li>
        <router-link to="/classify">全部{{item.classify_name}} ></router-link>
      </ul>
    </div>
    <div class="company">
      <ul>
        <li>
          <span :class="{active:isActiveNum===1}"></span>
          <p>行业龙头</p>
        </li>
        <li>
          <span :class="{active:isActiveNum===2}"></span>
          <p>品牌理念</p>
        </li>
        <li>
          <span :class="{active:isActiveNum===3}"></span>
          <p>3小时送达</p>
        </li>
        <li>
          <span :class="{active:isActiveNum===4}"></span>
          <p>送萌实拍</p>
        </li>
      </ul>
      <div class="companylb">
        <mt-swipe :auto="0" @change="handleChange">
          <mt-swipe-item><img src="./homeImg/brand001.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="./homeImg/brand002feben.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="./homeImg/brand003.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="./homeImg/brand004.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
      <p :class="{active:isActiveNum===1}">专注鲜花礼品12年，2016年获评“鲜花行业龙头企业”</p>
      <p :class="{active:isActiveNum===2}">花礼网倡导勇敢表达爱，享受爱的美好</p>
      <p :class="{active:isActiveNum===3}">覆盖全国1000+城市，最快1~3小时送达</p>
      <p :class="{active:isActiveNum===4}">坚持公开所有花款实拍，严格管控质量</p>
    </div>
    <div class="aboutUs">
      <ul>
        <li>
          <router-link to="/flowersword">花语大全</router-link>
        </li>
        <li>
          <router-link to="/">查单</router-link>
        </li>
        <li>
          <router-link to="/">关于我们</router-link>
        </li>
      </ul>
    </div>
    <div class="service">
      <ul>
        <li>
          <a href="http://www.hua.com/gomobile/" target="_blank"><span></span></a>
        </li>
         <li>
           <a href="https://www.sobot.com/chat/h5/index.html?sysNum=d22b0bfa87fd42258397365c95bc5e08&partnerId=0" target="_blank"><span></span></a>
        </li>
      </ul>
    </div>
    <div class="HomepageFoot">
     Copyright © 2005~2017 花礼网(中国鲜花礼品网) 版权所有<br>
     中国鲜花网领先品牌，鲜花速递专家！
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
  data () {
    return {
      isActiveNum:1
    }
  },
  computed: {
    classifyList() {
      return this.$store.state.classify;
    },
    product() {
      return this.$store.state.product;
    }
  },
  methods: {
    handleChange(index) {
      this.isActiveNum = index+1;
    },
    getProducts (item) {
      console.log(item)
      this.$store.dispatch('setChildProduct',item)
      this.$router.push("/childpage")
    }
  }
};
</script>
<style>
.home {
  position: relative;
}
.bannerlb {
  width: 100%;
  height: 14rem;
  position: absolute;
  top: 0;
}
.bannerlb img {
  width: 100%;
  height: 100%;
}
.homeHead {
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  line-height: 3rem;
  position: absolute;
  top: 0;
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
  text-decoration: none;
}
.smallBanner {
  width: 100%;
  height: 2rem;
  position: relative;
  top: 13.8rem;
  font-size: 12px;
  border-bottom: 0.05rem solid #ddd;
}
.smallBanner li {
  float: left;
  list-style: none;
  color: #9b9b9b;
  margin: 0.5rem 0.74rem;
  text-align: center;
}
.produceClassify {
  position: absolute;
  top: 16rem;
  width: 100%;
}
.produceClassify li {
  width: 20%;
  float: left;
  list-style: none;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 8px solid #eee;
}
.produceClassify li img {
  width: 50%;
}
.produceClassify li span {
  display: block;
  font-size: 12px;
  color: #494949;
}
.homeMainList {
  position: absolute;
  top: 22rem;
}
.homeMainList ul:after {
  display: block;
  clear: both;
  content: "";
}
.homeMainList ul {
  border-bottom: 8px solid #ddd;
  position: relative;
  padding-bottom: 2rem;
}
.homeMainList ul > h4 {
  text-align: center;
  width: 100%;
  color: #222;
}
.homeMainList li {
  float: left;
  list-style: none;
  margin: 0.3rem 0.45rem;
  font-size: 13px;
  color: #232323;
}
.homeMainList li > img {
  width: 173px;
  height: 186px;
}
/* .homeMainList li > img[lazy=loading] {
  width: 173px;
  height: 186px;
  background:url(./homeImg/loding.gif) center center no-repeat;
  background-size: 40% 40%;
} */
.homeMainList ul > a {
  position: absolute;
  bottom: 0.5rem;
  left: 8rem;
  text-align: center;
  text-decoration: none;
  line-height: 1.8rem;
  width: 8rem;
  height: 2rem;
  border: 1px solid #ddd;
  color: #777;
}
.introduce {
  font-size: 12px;
  color: #777;
}
.company {
  position: absolute;
  top: 174rem;
  width: 100%;
  text-align: center;
  border-bottom: 8px solid #ddd;
}
.company > ul li {
  float: left;
  width: 25%;
  text-align: center;
  list-style: none;
}
.company > ul li > span {
  display: inline-block;
  width: 3rem;
  height: 3rem;
}
.company > ul li:first-of-type span {
  background: url("./homeImg/brand_icon01.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > ul li:first-of-type span.active{
  background: url("./homeImg/brand_icon010.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > ul li:nth-of-type(2) span {
  background: url("./homeImg/brand_icon02.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > ul li:nth-of-type(2) span.active {
  background: url("./homeImg/brand_icon020.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > ul li:nth-of-type(3) span {
  background: url("./homeImg/brand_icon03.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > ul li:nth-of-type(3) span.active {
  background: url("./homeImg/brand_icon030.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > ul li:last-of-type span {
  background: url("./homeImg/brand_icon04.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > ul li:last-of-type span.active {
  background: url("./homeImg/brand_icon040.png")no-repeat;
  background-size: 3rem 3rem;
}
.company > img {
  margin-top: 1rem;
}
.company > p {
  font-size: 12px;
  color: #232323;
  line-height: 2.5rem;
  display: none;
}
.company > p.active{
  display: block;
}
.companylb{
  width:90%;
  height:18rem;
  padding-top:5rem;
  margin-left:1.1rem;
}
.companylb img{
  width:100%;
}
.aboutUs {
  text-align: center;
  position: absolute;
  top: 195rem;
  width: 100%;
  padding-top: 1rem;
}
.aboutUs ul li {
  width: 33%;
  float: left;
  list-style: none;
  text-align: center;
}
.aboutUs ul li a {
  display: inline-block;
  width: 5rem;
  height: 1.5rem;
  line-height: 1.4rem;
  font-size: 12px;
  text-align: center;
  background: #eee;
  text-decoration: none;
  color: #232323;
}
.service {
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 200rem;
  border-bottom: 0.05rem solid #ddd;
}
.service li {
  float: left;
  list-style: none;
  width: 50%;
  text-align: center;
}
.service li span {
  display: inline-block;
  width: 2.5rem;
  height: 3.8rem;
}
.service li:first-of-type span {
  background: url("./homeImg/icon-phonenew.png")no-repeat;
  background-size: 2.5rem 3.8rem;
}
.service li:last-of-type span {
  background: url("./homeImg/icon-kefu.png")no-repeat;
  background-size: 2.5rem 3.8rem;
}
.HomepageFoot {
  margin-bottom: 4rem;
  text-align: center;
  color: #ccc;
  font-size: 12px;
  position: absolute;
  top: 206rem;
  height: 3rem;
  width: 100%;
}
</style>


