<template>
  <div class="mine">
    <div class="mineHead">
      <span class="goback" @click="goback"><</span>
      <div class="noUser" :class="{active:isShowUserInfo}">
        <p>Hi,欢迎来到花礼网</p>
        <router-link to="/denglu">登录/注册</router-link>
      </div>
      <div class="haveUser" :class="{active:!isShowUserInfo}">
        <img src="./mineImg/head_sculpture.png">
        <span>{{userInfo.phone}}</span>
        <h4><span><img src="./mineImg/iconDiamond@2x.png"></span>普通会员</h4>
      </div>
    </div>
    <div class="mineBody">
      <ul class="shoppingDetails">
       <li>
         <span></span>
         <p>待付款</p>
       </li>
       <li>
         <span></span>
         <p>今日配送</p>
       </li>
       <li>
         <span></span>
         <p>待评价</p>
       </li>
       <li>
         <span></span>
         <p>全部订单</p>
       </li>
      </ul>
      <ul class="mineInfo">
        <li>
          <span></span>
          <p>优惠券</p>
        </li>
         <li>
          <span></span>
          <p>积分</p>
        </li>
         <li>
          <span></span>
          <p>生日/纪念日提醒</p>
        </li>
         <li>
          <span></span>
          <p>我的收藏</p>
        </li>
         <li>
          <span></span>
          <p>在线付款</p>
        </li>
         <li>
          <span></span>
          <p>联系客服</p>
        </li>
         <li>
          <span></span>
          <p>帮助</p>
        </li>
         <li>
          <span></span>
          <p>关于花礼</p>
        </li>
      </ul>
      <h4>账户管理<router-link to="/">管理收货地址等></router-link></h4>
      <div class="mineBanner">
        <img src="./mineImg/banner@2x.png">
      </div>
      <div></div>
    </div>
    <foot></foot>
  </div> 
</template>
<script>
import foot from '@/components/Foot'
export default {
  created () {
    if(this.$store.state.userInfo.length!==0){
      this.isShowUserInfo = true
    }
  },
  data(){
    return {
      isShowUserInfo:false
    }
  },
  components: {
    foot
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
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
.mineHead .active{
  display: none;
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
  color:#fff;
  margin-bottom: 0.3rem;
}
.mineHead>a{
  display: inline-block;
  width:5.8rem;
  height:1.8rem;
  line-height: 1.8rem;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  color:#fff;
  background:#fe6600;
  border-radius: 10px;
}
.shoppingDetails:after{
  display: block;
  clear: both;
  content: "";
}
.mineInfo:after{
  display: block;
  clear: both;
  content: "";
}
.mineInfo{
  border-bottom: 8px solid #eee;
}
.shoppingDetails,.mineInfo{
  width:100%;
}
.shoppingDetails span,.mineInfo li span{
  display: inline-block;
  width:2.3rem;
  height:1.6rem;
  margin-top:1.5rem;
}
.shoppingDetails li:first-of-type span{
  background:url('./mineImg/minebq1.png') no-repeat;
  background-size: 2.3rem 1.7rem;
}
.shoppingDetails li:nth-of-type(2) span{
  background:url('./mineImg/minebq2.png') no-repeat;
  background-size: 2.3rem 1.7rem;
}
.shoppingDetails li:nth-of-type(3) span{
  background:url('./mineImg/minebq3.png') no-repeat;
  background-size: 2.3rem 1.7rem;
}
.shoppingDetails li:last-of-type span{
  background:url('./mineImg/minebq4.png') no-repeat;
  background-size: 2rem 1.62rem;
}
.shoppingDetails li,.mineInfo li{
  float: left;
  width:25%;
  list-style: none;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 8px solid #eee;
  color:#666;
  font-size: 12px;
  height:5.5rem;
}
.mineInfo li{
  border-bottom:none;
}
.mineInfo li:first-of-type span{
  background:url('./mineImg/minebq5.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineInfo li:nth-of-type(2) span{
  background:url('./mineImg/minebq6.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineInfo li:nth-of-type(3) span{
  background:url('./mineImg/minebq7.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineInfo li:nth-of-type(4) span{
  background:url('./mineImg/minebq8.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineInfo li:nth-of-type(5) span{
  background:url('./mineImg/minebq1.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineInfo li:nth-of-type(6) span{
  background:url('./mineImg/bottomIconSeviceDefault@2x.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineInfo li:nth-of-type(7) span{
  background:url('./mineImg/iconAbout@2x.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineInfo li:last-of-type span{
  background:url('./mineImg/iconHelp@2x.png')no-repeat;
  background-size: 2rem 1.7rem
}
.mineBody h4{
  width:100%;
  padding-left:1rem;
  color:#666;
  font-size: 14px;
  line-height: 2rem;
  border-bottom: 8px solid #eee;
  font-weight: normal;
}
.mineBody a{
  color:#666;
  float: right;
  margin-right:1rem;
  text-decoration: none;
} 
.mineBanner{
  width:100%;
}
.mineBanner img{
  width:100%;
}
.mineBody div:last-of-type{
  background:#F0EFED;
}
.haveUser{
  position: relative;
  top:2.5rem;
  left:-3rem
}
.haveUser>img:first-of-type{
  width:4rem; 
}
.haveUser h4 img:last-of-type{
   width:1rem;
   margin-right:0.5rem;
}
.haveUser>span{
  position: absolute;
  top:1rem;
  left:14.5rem
}
.haveUser>h4{
  font-weight: normal;
  position: absolute;
  top:2.5rem;
  left:14.5rem;
  font-size: 13px;
}
</style>


