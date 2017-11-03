<template>
  <div class="flowerclassify">
      <headgray headerTitle="鲜花分类"></headgray>
       <div class="classifyBox">
         <ul v-for="(item,index) in classify.productsList" :key="index">
           <h4>{{item.title}}</h4>
           <li v-for="(it,ind) in item.productsClassify" :key="ind">{{it.smallClassify_name}}</li>
         </ul>
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
    isActive () {
      return this.$store.state.isActive
    },
    classify () {
      return  this.$store.state.classify[this.isActive-1]
    }
  }
}
</script>
<style>
.flowerclassify{
  width:100%;
  background:#ccc;
}
.classifyBox{
  background:#fff;
  margin:0.5rem;
  border-radius: 5px;
}
.classifyBox li{
  float: left;
  list-style: none;
  width:33%;
  height:2.5rem;
  font-size: 13px;
  line-height: 2.5rem;
  text-align: center;
  border:1px solid #ddd;
  border-left:none;
  color:#666;
}
.classifyBox ul h4{
  padding:0.5rem 1rem;
  color:#666;
  font-size: 13px;
}
.classifyBox ul:after{
  display: block;
  clear: both;
  content: "";
}
.classifyBox li:nth-of-type(3n){
  border-right:none;
}
</style>


