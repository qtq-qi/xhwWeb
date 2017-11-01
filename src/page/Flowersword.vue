<template>
  <div class="flowersword">
      <headgray>
          <img src="./homeImg/logo@2x.png">
      </headgray>
      <div class="flowersClassify">
          <router-link to="/home">首页 </router-link>>
          <router-link to="/flowersword"> 花语大全</router-link>
          <router-link to="/flowersword">花语分类 ></router-link>
      </div>
      <ul class="classify1">
          <h4>图文推荐</h4>
          <li v-for="item in flowers.slice(0,7)" :key="item.classify_id">
              <img :src="item.imgs">
              <div>
                  {{item.mains}}
              </div>
          </li>
      </ul>
      <ul class="classify2">
          <h4>推荐文章</h4>
          <li v-for="item in flowersClassify.slice(0,7)" :key="item.classify_id">
              {{item.title}}
              <span>{{item.ckassufy_name}}</span>
          </li>
      </ul>
      <ul class="classify3">
          <div>
              <h4>分类推荐</h4>
          </div>
          <li>送花<span>更多></span></li>
          <li v-for="item in flowersClassify.slice(6,14)" :key="item.classify_id">
              {{item.title}}
          </li>
      </ul>
      <ul class="classify3">
          <li>送礼<span>更多></span></li>
          <li v-for="item in flowersClassify.slice(14,22)" :key="item.classify_id">
              {{item.title}}
          </li>
      </ul>
      <ul class="classify3">
          <li>媒体报道<span>更多></span></li>
          <li v-for="item in flowersClassify.slice(2,10)" :key="item.classify_id">
              {{item.title}}
          </li>
      </ul>
       <ul class="classify3">
          <li>蛋糕常识<span>更多></span></li>
          <li v-for="item in flowersClassify.slice(22,30)" :key="item.classify_id">
              {{item.title}}
          </li>
      </ul>
      <ul class="classify3 classify4">
           <div>
              <h4>最新文章</h4>
          </div>
          <li v-for="item in flowersClassify.slice(22,30)" :key="item.classify_id">
              {{item.title}}
          </li>
      </ul>
      <img src="./flowerclassifyImg/songhua1.png" width="100%">
      <div class="someBtn">
          <router-link to="/denglu">登录</router-link>
          <router-link to="/">注册</router-link>
          <a href="#">返回顶部</a>
      </div>
      <div class="flowersfoot">
          <ul>
              <router-link tag="li" to="/">帮助&nbsp;&nbsp;&nbsp;&nbsp;|</router-link>
              <router-link tag="li" to="/">&nbsp;&nbsp;&nbsp;&nbsp;查单&nbsp;&nbsp;&nbsp;&nbsp;|</router-link>
              <router-link tag="li" to="/">&nbsp;&nbsp;&nbsp;&nbsp;在线补数&nbsp;&nbsp;&nbsp;&nbsp;|</router-link>
              <li><a href="https://www.sobot.com/chat/h5/index.html?sysNum=d22b0bfa87fd42258397365c95bc5e08&partnerId=0" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;客服</a></li>
             
          </ul>
          <ul>
              <a href="#">花语大全&nbsp;&nbsp;&nbsp;&nbsp;|</a>
              <a href="http://www.hua.com/gomobile/" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;电脑版</a>
          </ul>
          <p>© 中国鲜花礼品网 m.hua.com</p>
      </div>
  </div>
</template>
<script>
import headgray from "@/components/HeadGray";
export default {
  components: {
    headgray
  },
  computed: {
    flowerwords() {
      return this.$store.state.flowerwords;
    },
    flowers() {
      return this.$store.state.flowerwords[0].flowersword;
    },
    flowersfilter1() {
      let arr = [];
      this.$store.state.flowerwords[0].flowersword.filter(item => {
        if (item.classify_id === 4001) {
          arr.push(item);
        }
      });
      return arr;
    },
    flowersClassify() {
      return this.flowerwords[0].classify
    }
  }
};
</script>
<style>
.headgray img {
  height: 1rem;
}
.flowersClassify {
  width: 100%;
  padding: 1rem;
  height: 4.3rem;
  border-bottom: 17px solid #f1f1f5;
}
.flowersClassify a {
  text-decoration: none;
  color: #666;
  font-size: 14px;
}
.flowersClassify a:last-of-type {
  float: right;
}
.classify1,.classify2,.classify3{
    border-bottom: 17px solid #f1f1f5;
}
.classify1 > h4,.classify2 > h4,.classify3 h4{
  color: #666;
  padding: 0.5rem;
  border-bottom: 1px solid #e4e4e4;
}
.classify1 li,
.classify2 li,.classify3 li{
  color: #666;
  display: inline-block;
  margin: 0.8rem 0.5rem 0rem 0.5rem;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 0.8rem;
  font-size: 14px;
  line-height: 1.5rem;
  width:95%;
}
.classify1 img {
  width: 5rem;
  float: left;
  margin-right: 1rem;
}
.classify2 span{
    float: right;
    color:#999;
    font-size: 14px;
}
.classify3>div{
    background:#F1F1F5;
    width:100%;
}
.classify3 li:first-of-type{
    color:red;
}
.classify3 li:first-of-type span{
    float: right;
    color:#999;
}
.classify4 li:first-of-type{
    color:#666;
}
.someBtn{
    width:100%;
    padding:0.5rem 1.5rem;
    background:#F1F1F5;
}
.someBtn a{
    display: inline-block;
    padding:0.5rem 1rem;
    border:1px solid #f60;
    text-decoration: none;
    border-radius: 8px;
    color:#f60;
    font-size: 14px;
}
.someBtn a:last-of-type{
    float: right;
}
.flowersfoot{
    width:100%;
    background:#F1F1F5;
    padding-left:5.5rem;
}
.flowersfoot:after{
    clear: both;
    display: block;
    content: ""
}.flowersfoot ul:after{
    clear: both;
    display: block;
    content: "";
}
.flowersfoot ul:nth-of-type(2) {
    margin:0.5rem 0 0 2rem;
}
.flowersfoot p{
    margin-left:1rem;
    color:#a3a3a3
}
.flowersfoot ul li,.flowersfoot ul li a,.flowersfoot ul a,.flowersfoot p{
    float: left;
    text-decoration: none;
    list-style: none;
    color:#666;
    font-size: 12px;
}
</style>


