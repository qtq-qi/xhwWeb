<template>
  <div class="phonedenglu">
      <headgray headerTitle="会员登录"></headgray>
      <router-link to="/denglu">会员账号登录</router-link>
      <input type="number" placeholder="请输入手机号码">
      <input type="number" placeholder="输入短信验证码">
      <span class="getyzm">获取短信验证码</span>
      <input type="number" placeholder="验证码">
      <img :src="yzmImg">
      <span @click="changeyzm">看不清，换一张</span>
      <span class="dengluBtn">登录</span>
      <div class="fastGallery">
        <div class="fastpsd fastzhece2">
            <span></span>
            快速注册
        </div>
    </div>
    <div class="others">
        <h4><span></span>其他方式登录<span></span></h4>
        <ul class="other">
            <li class="qq">
                <span></span>
                <p>QQ</p>
            </li>
            <li class="zfb">
                <span></span>
                <p>支付宝</p>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import headgray from "@/components/HeadGray";
export default {
  data() {
    return {
      yzmImg: "../static/ValidCode.jpg",
      yzmArr: [
        "../static/ValidCode.jpg",
        "../static/ValidCode2.jpg",
        "../static/ValidCode3.jpg",
        "../static/ValidCode4.jpg"
      ],
      num: 1
    };
  },
  components: {
    headgray
  },
  methods: {
    changeyzm() {
      this.yzmImg = this.yzmArr[this.num];
      this.num++;
      if (this.num >= 4) {
        this.num = 0;
      }
    }
  }
};
</script>
<style>
.phonedenglu {
  margin-left: 0;
}
.phonedenglu > a {
  color: #f60;
  text-decoration: none;
  float: right;
  font-size: 13px;
  margin: 1rem;
}
input[type="number"]:nth-of-type(2) {
  width: 45%;
}
.getyzm {
  background: #ffad0d;
  display: inline-block;
  width: 41%;
  height: 2.5rem;
  vertical-align: middle;
  text-align: center;
  line-height: 2.5rem;
  color: #fff;
  border-radius: 2px;
}
input[type="number"]:nth-of-type(3) {
  width: 25%;
}
.phonedenglu > img {
  height: 2.5rem;
  vertical-align: middle;
}
.dengluBtn {
  width: 90%;
  height: 2.5rem;
  margin: 0.7rem;
  outline: none;
  font-size: 14px;
  display: inline-block;
  background: #ff6600;
  color: #fff;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
}
.phonedenglu .fastzhece2 span{
    width:1rem;
    height:1rem;
    background:url('./dengluImg/login_zc.png')no-repeat;
    background-size: 1rem 1rem;
}
.fastzhece2{
    margin-right:1.5rem;
}
</style>