<template>
  <div class="products">
    <headgray>
      <img src="./homeImg/logo@2x.png">
    </headgray>
    <div class="productsBtn">
      <button>综合</button>
      <button>销售</button>
      <button>价格</button>
      <button>鲜花分类</button>
    </div>
    <div class="productslist">
      <ul>
        <li v-for="item in productsList" :key="item.classify_id" @click="choiceProduct(item)">
          <img v-lazy="item.imgs">
          <p>{{item.name}}</p>
          <p>{{item.introduce}}</p>
          <p>{{"￥"+item.price}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import headgray from "@/components/HeadGray"
export default {
  components: {
    headgray
  },
  computed: {
    productsList () {
      return this.$store.state.productsList
    }
  },
  methods: {
    choiceProduct (item) {
      console.log(item)
    }
  }
}
</script>
<style>
.headgray img {
  height: 1rem;
}
.productsBtn button{
  width:25%;
  float: left;
  height: 3rem;
  border:none;
  border-right:1px solid #e4e4e4;
  border-bottom:1px solid #e4e4e4;
  background:#fff;
}
.productsBtn:after{
  display: block;
  clear: both;
  content: "";
}
.productslist{
  height: 570px;
  overflow: scroll;
}
.productslist li{
  float: left;
  width: 45%;
  border:1px solid #e4e4e4;
  list-style: none;
  margin:0.5rem;
}
.productslist li p{
  font-size: 13px;
  width:80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5rem;
  margin-left:10%;
}
.productslist img{
  width:90%;
  margin:5%;
}
</style>


