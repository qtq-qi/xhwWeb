<template>
  <div class="childpage">
    <div class="childpagehead">
      <span class="goback" @click="goBack"><</span>
      <div @click="goHome"><span class="gohome"></span></div>
    </div>
    <div class="childpageBox">
      <div class="childpagelbt">
        <mt-swipe :auto="0">
          <mt-swipe-item v-for="(item,index) in childproduct.imgsList" :key="index"><img :src="item.imgs"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="childPrice">
        <p>
          <span>{{childproduct.name+" - "+childproduct.introduce}}</span>
          <span class="star"></span>
          <span class="prices">{{"￥"+ childproduct.price}}</span>
        </p>
      </div>
      <table class="introduce">
        <tr>
          <td>花语</td>
          <td>{{words.mains}}</td>
        </tr>
        <tr>
          <td>包装</td>
          <td>{{childproduct.packageWord}}</td>
        </tr>
        <tr>
          <td>配送</td>
          <td>全国</td>
        </tr>
        <tr>
          <td>附送</td>
          <td>下单填写留言，即免费赠送精美贺卡！</td>
        </tr>
        <tr>
          <td>说明</td>
          <td>清至少提前1天订购或订购前咨询客服</td>
        </tr>
      </table>
      <div class="download"><span></span>App 下单再减7元，立即打开</div>
      <div class="comments">
        <h4>订单评论<span @click="commentBtn">{{commentNum}}条评论 ></span></h4>
        <div class="noComments" v-show="commentNum===0">新推单品，欢迎抢鲜下单、评论~</div>
        <ul class="commentLists" v-show="commentNum!==0">
          <li></li>
        </ul>
      </div>
      <img src="./childproductImg/maidian.jpg" class="aboutUsInfo">
      <div class="productsInfo">
        <ul>
          <li></li>
        </ul>
      </div> 
    </div>
    <div class="childPageFoot">
      <ul>
        <li>
          <span></span>
          <p>客服</p>
        </li>
         <li>
          <span></span>
          <p>电话</p>
        </li>
         <li>
          <span></span>
          <p>购物车</p>
          <var>0</var>
        </li>
      </ul>
      <span @click="addCart">加入购物车</span>
      <span>立即购买</span>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    var flowers = {}
    for(var i=0;i<this.$store.state.flowerwords[0].flowersword.length;i++){
      if(this.$store.state.childProduct.flowersword_id===this.$store.state.flowerwords[0].flowersword[i].classify_id){
        flowers = this.$store.state.flowerwords[0].flowersword[i]
        this.$store.dispatch('setwords',flowers)
      }
    }
  },
  data () {
    return {
      commentNum: 0
    }
  },
  computed: {
    childproduct() {
      return this.$store.state.childProduct;
    },
    words () {
      return this.$store.state.nowFlowersword
    },

  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/home");
    },
    commentBtn () {
      if(this.$store.state.userInfo.length===0){
        this.$msg("提示","请先登录")
        this.$router.push("/denglu")
      } else {
         this.$router.push("/comment")
      }
     
    },
    addCart () {
      this.$store.dispatch('setCart')
    }
  }
};
</script>
<style>
.childpagehead {
  position: fixed;
  top: 0;
  z-index: 2;
}
.goback {
  font-size: 28px;
  color: #ccc;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
}
.childpagehead > div {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ccc;
  text-align: center;
  padding-top: 0.25rem;
  position: absolute;
  left: 20rem;
  top: 1rem;
}
.gohome {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: url("./childproductImg/backhome.png")no-repeat;
  background-size: 100% 100%;
}
.childpageBox {
  width: 100%;
}
.childpageBox > img {
  width: 100%;
}
.childpagelbt{
  width:100%;
  height:25rem;
}
.childpagelbt img{
  width:100%;
  height:105%;
}
.childPrice p{
  height: 5rem;
  padding:1rem;
  width:100%;
}
.childPrice p>span:first-of-type{
  display: inline-block;
  width:90%;
}
.star{
  display: inline-block;
  width:1.5rem;
  height: 1.5rem;
  background:url('./childproductImg/icon_collect.png') no-repeat;
  background-size: 1.5rem 1.5rem;
  float: right;
}
.prices{
  color:#f60;
  font-size: 18px;
  line-height: 3rem;
}
.introduce{
  width:100%;
  height:10rem;
  line-height: 1.2rem;
  border-bottom: 8px solid #f5f5f5;
}
.introduce tr td:first-of-type{
  width:12%;
  color:#333;
  padding-left:0.5rem;
}
.download{
  color:#f60;
  font-size: 13px;
  padding-left:0.5rem;
  height:2.5rem;
  line-height: 2rem;
  border-bottom:8px solid #f5f5f5;
}
.download span{
  display: inline-block;
  width:1rem;
  height:1rem;
  background:url('./childproductImg/app_download_icon.png')no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
  margin-right:0.5rem;
}
.comments{
  font-size: 13px;
  padding-left:0.5rem;
}
.comments>h4{
  font-weight: normal;
  height: 2rem;
  line-height: 2rem;
}
.comments>h4>span{
  float: right;
  margin-right:1rem;
  color:#777;
}
.noComments{
  width:100%;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  color:#777;
}
.aboutUsInfo{
  width:100%;
}
.childPageFoot{
  height: 3.5rem;
  width:100%;
  border-top:1px solid #ccc;
  position: fixed;
  bottom:0;
  background:#fff;
}
.childPageFoot>ul{
  height:80%;
  width:45%;
  margin-top:0.3rem;
  float: left;
}
.childPageFoot>ul li{
  float: left;
  border-right:1px solid #e0e0e0;
  width:33%;
  list-style: none;
  font-size: 13px;
  text-align: center;
  position: relative;
}
.childPageFoot>ul li p{
  margin-top:-0.4rem;
  width:100%;
  text-align: center;
  color:#333;
}
.childPageFoot>ul li:last-of-type{
  border-right:none;
  
}
.childPageFoot>ul li span{
  display: inline-block;
  width:2rem;
  height:2rem;
}
.childPageFoot>ul li:first-of-type span{
  background:url('./childproductImg/icon_custom_service.png')no-repeat;
  background-size: 100% 100%
}
.childPageFoot>ul li:nth-of-type(2) span{
  background:url('./childproductImg/icon_phone.png')no-repeat;
  background-size: 100% 100%
}
.childPageFoot>ul li:last-of-type span{
  background:url('./childproductImg/bottonmIcon_CartDefault.png')no-repeat;
  background-size: 100% 100%
}
.childPageFoot>span{
  width:27.5%;
  height:100%;
  display: inline-block;
  text-align: center;
  line-height: 3.5rem;
  float: left;
  color:#fff;
}
.childPageFoot>span:first-of-type{
  background:rgb(255, 167, 71);
}
.childPageFoot>span:last-of-type{
  background:#f60;
}
.childPageFoot>ul li var {
  position: absolute;
  top:0rem;
  right:0.5rem;
}
</style>


