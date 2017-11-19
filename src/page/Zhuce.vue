<template>
  <div class="zhuce">
      <headgray headerTitle="注册新用户"></headgray>
      <div class="zhuceBtn">
          <span>手机注册</span>
          <span>邮箱注册</span>
      </div>
      <input type="number" placeholder="请输入手机号" v-model="userPhone">
      <input type="text" placeholder="请输入用户名" v-model="userName">
      <input type="password" placeholder="请输入密码" v-model="userPsd">
      <input type="number" placeholder="请输入验证码" v-model="yzm">
      <img :src="yzmImg" @click="changeyzm">
      <input type="number" placeholder="请输入短信验证码" v-model="dxyzm">
      <span class="getyzm">获取短信验证码</span>
      <span class="next" @click="zhuce">注册</span>
      <router-link to="/">找回密码</router-link>
  </div>
</template>
<script>
import headgray from "@/components/HeadGray";
export default {
  components: {
    headgray
  },
  data() {
    return {
      yzmImg: "../static/ValidCode.jpg",
      yzmArr: [
        "../static/ValidCode.jpg",
        "../static/ValidCode2.jpg",
        "../static/ValidCode3.jpg",
        "../static/ValidCode4.jpg"
      ],
      num: 1,
      userPhone: "",
      userPsd: "",
      yzm: "",
      dxyzm: "",
      userName: ""
    };
  },
  methods: {
    changeyzm() {
      this.yzmImg = this.yzmArr[this.num];
      this.num++;
      if (this.num >= 4) {
        this.num = 0;
      }
    },
    zhuce() {
      if (
        this.userPhone === "" ||
        this.userPsd === "" ||
        this.userName === "" ||
        this.yzm === "" ||
        this.dxyzm === ""
      ) {
        this.$msg("提示", "请正确输入完整注册信息");
      } else {
        var userObj = {
          user: this.userName,
          psd: this.userPsd,
          phone: this.userPhone,
          site:[]
        };
        this.$http.get("http://localhost:8081/user").then(res => {
          if (res.data.length === 0) {
            this.$store.dispatch('setUserInfo',userObj)
            this.$http.post('http://localhost:8081/user',userObj)
            this.$msg('提示','注册成功')
            .then(re =>{
              this.$router.push('/')
            })
          } else{
            for(var i=0;i<res.data.length;i++){
              if(res.data[i].phone!==this.userPhone){
                this.$store.dispatch('setUserInfo',userObj)
                this.$http.post('http://localhost:8081/user',userObj)
                this.$msg('提示','注册成功')
                .then(re =>{
                  this.$router.push('/')
                })
              }
            }
          }
        });
      }
    }
  }
};
</script>
<style>
.zhuce {
  width: 100%;
}
.zhuce > a {
  color: #777;
  font-size: 14px;
  margin-left: 1rem;
}
.zhuceBtn {
  width: 95%;
  text-align: center;
  margin: 0.5rem;
}
.zhuceBtn:after {
  display: block;
  clear: both;
  content: "";
}
.zhuceBtn span {
  width: 50%;
  display: inline-block;
  float: left;
  border: 1px solid rgb(254, 108, 108);
  height: 1.8rem;
  line-height: 1.8rem;
  font-size: 14px;
}
.zhuceBtn span:first-of-type {
  border-radius: 5px 0 0 5px;
  background: rgb(254, 108, 108);
  color: #fff;
}
.zhuceBtn span:last-of-type {
  border-radius: 0 5px 5px 0;
}
input[type="text"]:nth-of-type(2) {
  width: 90.5%;
  height: 2.5rem;
  border: 1px solid #e2e2e2;
  background: #f9f9f9;
  margin-left: 0.6rem;
  border-radius: 0;
}
input[type="number"]:nth-of-type(4) {
  width: 65%;
}
input[type="number"]:nth-of-type(5) {
  width: 50%;
}
.zhuce > img {
  height: 2.5rem;
  vertical-align: middle;
}
.getyzm {
  border: 1px solid #f60;
  color: #f60;
  display: inline-block;
  width: 40%;
  position: absolute;
  top: 22rem;
  left: 12.3rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.3rem;
}
.next {
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
</style>


