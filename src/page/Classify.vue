<template>
  <div class="classify">
    <div class="classifyHead">
      <input type="text" placeholder="搜索鲜花、蛋糕、礼品">
      <span class="searchbq2"></span>
    </div>
    <div class="classifyMain">
      <ul class="classifyList">
        <li v-for="(item,index) in classify" :key="item.classify_id" :class="{active:isActive===index+1}" @click="changeClassify(index)">{{item.classify_name}}
        </li>
      </ul>
      <div class="smclassifyBox" v-for="(item,index) in classify" :key="item.classify_id" :class="{active:isActive===index+1}">
        <img v-lazy="item.imgs">
        <div class="smclassify" v-for="(it,ind) in item.productsList" :key="ind">
          <h4>{{it.title}}</h4>
          <ul>
            <li v-for="(its,inds) in it.productsClassify" :key="inds" @click="changesmclassify(its)">
              <img v-lazy="its.imgs" v-show="its.imgs!==undefined">
              <p>{{its.smallClassify_name}}</p>
            </li>
          </ul>
        </div>
        
      </div>
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
    classify() {
      return this.$store.state.classify;
    },
    isActive () {
      return this.$store.state.isActive
    }
  },
  methods: {
    changeClassify(index) {
      this.$store.dispatch('setActive',index)
      this.isActive = index + 1;
    },
    changesmclassify (its) {
      console.log(its)
      this.$store.dispatch('setsmClassify',its)
      this.$router.push("/products")
    },
  }
};
</script>
<style>
.classifyHead {
  width: 100%;
  height: 3rem;
  background: rgba(245, 245, 245, 0.9);
  line-height: 2.8rem;
  position: relative;
}
.classifyHead input[type="text"] {
  background: #fff;
  width: 90%;
  padding-left: 0.5rem;
}
.classifyHead .searchbq2 {
  background: url("./homeImg/icon_Search.png")no-repeat;
  background-size: 30px 30px;
  width: 26px;
  height: 26px;
  position: absolute;
  right: 2rem;
  top: 0.5rem;
}
.classifyList {
  width: 30%;
  height: 38rem;
  background: rgba(245, 245, 245, 0.9);
}
.classifyList li {
  list-style: none;
  line-height: 3rem;
  text-align: center;
  font-size: 12px;
}
.classifyList li.active {
  background: #fff;
  color:#f60;
}
.classifyList img {
  width: 15rem;
  height: 5.5rem;
  position: absolute;
  right: 0.8rem;
  top: 4rem;
}
.smclassifyBox ul{
  padding-left:0.3rem;
  text-align: center;
}
.smclassifyBox ul:after{
  display: block;
  clear: both;
  content: ""
}
.smclassifyBox {
  position: absolute;
  top: 3rem;
  right: 0.5rem;
  padding-top: 0.5rem;
  display: none;
  height: 555px;
  overflow: scroll;
  margin-left:25rem;
  font-size: 12px;
}
.smclassifyBox.active {
  display: block;
}
.smclassifyBox li {
  list-style: none;
}
.smclassifyBox>img {
  width: 15.5rem;
  height: 5.5rem;
}
/* .smclassifyBox>img[lazy=loading] {
  width: 15.5rem;
  height: 5.5rem;
  background:url(./homeImg/loding.gif) center center no-repeat;
  background-size: 40% 40%;
} */
.smclassify li{
  float: left;
  width:33%;
  margin:0.5rem 0;
}
.smclassify img{
  width:56px;
}
/* .smclassify li img[lazy=loading] {
  width: 56px;
  background:url(./homeImg/loding.gif) center center no-repeat;
  background-size: 40% 40%;
} */
.smclassify li p{
  color:#666;
  font-size: 12px;
}
</style>


