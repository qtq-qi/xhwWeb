<template>
  <div class="products">
    <headgray>
      <img src="./homeImg/logo@2x.png">
    </headgray>
    <div class="productsBtn">
      <button :class="{active:isClassify===1}" @click="changeClassify(1)">综合</button>
      <button :class="{active:isClassify===2}" @click="changeClassify(2)">销售</button>
      <button :class="{active:isClassify===3}" @click="changeClassify(3)">价格 <span :class="{active1:isrise%2===0,active2:isrise%2!==0}" v-show="isClassify===3"></span></button>
      <button :class="{active:isClassify===4}" @click="changeClassify(4)">鲜花分类</button>
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
import headgray from "@/components/HeadGray";
export default {
  components: {
    headgray
  },
  data() {
    return {
      isClassify: 1,
      isrise: 0
    };
  },
  computed: {
    productsList() {
      return this.$store.state.productsList
    }
  },
  methods: {
    choiceProduct(item) {
      console.log(item)
      // this.$router.push("/childpage")
    },
    changeClassify(num) {
      this.isClassify = num
      console.log(num)
      if (num === 1) {
        this.isrise = ''
        this.productsList.sort(function(a, b) {
          return a.zhonghe - b.zhonghe
        })
      } else if (num === 2) {
        this.isrise = ''
        this.productsList.sort(function(a, b) {
          return b.payNum - a.payNum
        })
      } else if (num === 3) {
        if (this.isrise % 2 === 0) {
          this.productsList.sort(function(a, b) {
            return a.price - b.price
          })
        } else if(this.isrise % 2 !== 0) {
           this.productsList.sort(function(a, b) {
            return b.price - a.price
          })
        }
        this.isrise++;
        if (this.isrise === 1000) {
          this.isrise = 0
        }
        
      } else if(num === 4){
          this.$router.push("/flowerclassify")
        }
    }
  }
};
</script>
<style>
.headgray img {
  height: 1rem;
}
.productsBtn button {
  width: 25%;
  float: left;
  height: 3rem;
  border: none;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
  outline: none;
}
.productsBtn:after {
  display: block;
  clear: both;
  content: "";
}
.productsBtn button.active {
  border-bottom: 1px solid #f60;
}
.productsBtn button span.active1{
  display: inline-block;
  width:0.5rem;
  height:0.5rem;
  background:url('./productImg/jiantou.png')no-repeat;
  background-size: 0.5rem 0.5rem;
}
.productsBtn button span.active2{
  display: inline-block;
  width:0.5rem;
  height:0.5rem;
  transform: rotate(180deg);
  background:url('./productImg/jiantou.png')no-repeat;
  background-size: 0.5rem 0.5rem;
}
.productsBtn button span.active3{
  display: none;
}
.productslist {
  height: 570px;
  overflow: scroll;
}
.productslist li {
  float: left;
  width: 45%;
  border: 1px solid #e4e4e4;
  list-style: none;
  margin: 0.5rem;
}
.productslist li p {
  font-size: 13px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5rem;
  margin-left: 10%;
}
.productslist img {
  width: 90%;
  margin: 5%;
}
</style>


