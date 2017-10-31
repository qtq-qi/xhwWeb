<template>
  <div class="denglu">
    <headgray></headgray>
    <div class="gotophone">
        <router-link to="/phonedenglu">使用手机验证登录</router-link>
    </div> 
    <input type="number" placeholder="请输入邮箱/手机号码">
    <input type="password" placeholder="请输入登录密码">
    <input type="checkbox"><span>一个月内免登录</span>
    <span class="dengluBtn">登录</span>
    <div class="fastGallery">
        <div class="fastzhuce">
            <span></span>
            快速注册
        </div>
        <div class="fastpsd">
            <span></span>
            找回密码
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
import headgray from '@/components/HeadGray'
export default {
  components: {
      headgray
  }
}
</script>
<style>
.denglu{
    margin-left:0;
    width:100%;
}
.denglu .gotophone:after{
    display: block;
    clear: both;
    content: "";
}
.denglu .gotophone>a{
    color:#f60;
    text-decoration: none;
    float: right;
    margin:1rem;
}
input,.dengluBtn{
    width:90%;
    height:2.5rem;
    margin:0.7rem;
    outline: none;
    font-size: 14px;
}
input[type="number"],input[type="password"]{
    background:#F9F9F9;
    border:1px solid #e2e2e2;
    padding-left:1rem;
}
input[type="checkbox"]{
    width:1.1rem;
    height:1rem;
    vertical-align: middle;
}
.denglu .dengluBtn{
    display: inline-block;
    background: #ff6600;
    color:#fff;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 5px;
}
.fastGallery{
    height:2.5rem;
    font-size: 13px;
    color:#666;
}
.fastzhuce{
    float: left;
}
.fastzhuce span,.fastpsd span{
    display: inline-block;
    width:1rem;
    height:1rem;
    vertical-align: middle;
}
.fastzhuce span{
    background:url('./dengluImg/login_zc.png')no-repeat;
    background-size: 1rem 1rem;
}
.fastpsd span{
    background:url('./dengluImg/login_mm.png')no-repeat;
    background-size: 1rem 1rem;
}
.fastpsd{
    float: right;
}
.others{
    width:100%;
    text-align: center;
    color:#333;
    font-weight: normal;
}
.others h4 span{
    display: inline-block;
    width:5.5rem;
    border-bottom: 1px solid #ccc;
    margin:0 0.5rem;
}
.other{
    width:100%;
    text-align: center;
    margin-top:1rem;
}
.other li{
    float: left;
    list-style: none;
    width:50%;
}
.other li span{
    display: inline-block;
    width:3rem;
    height:3rem;
}
.other .qq span{
    background:url('./dengluImg/login_qq.png')no-repeat;
    background-size: 3rem 3rem;
}
.other .zfb span{
    background:url('./dengluImg/login_zfb1.png')no-repeat;
    background-size: 3rem 3rem;
}
</style>


