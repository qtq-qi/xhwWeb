<template>
  <div class="cart">
    <div class="cartHead">
      <span class="goback" @click="goBack"><</span>
      购物车
      <span class="mainlist" @click="showBal"></span> 
    </div>
    <div class="noProduce" v-show="nowCarts.length===0">
      <img src="./cartImg/empty_cart2.png" width="60%">
      <p>这里什么都没有啊~</p>
      <router-link to="/home">去逛逛</router-link>
    </div>
    <div class="haveProduce">
      <ul>
        <li v-for="item in nowCarts" :key="item.id">
          <div class="select" @click="selectProduces(item)" :class="{active:item.isSelect}"></div>
          <div class="producesInfo">
            <img :src="item.imgs">
            <p>{{item.name}}</p>
            <div>
              <span>￥{{item.price}}</span>
              <div class="addorcut">
                <div class="changenum">
                  <span class="cutnum" @click="cutNum(item)">-</span>
                  <span>{{item.num}}</span>
                  <span class="addnum" @click="addNum(item)">+</span>
                </div>
                <span class="delProduce" @click="delProduce(item)">删除</span> 
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="recommend" v-show="nowCarts.length!==0">
      <h4>为你推荐</h4>
      <div>
        <ul>
          <li v-for="item in historyList" :key="item.id" class="recommendLi">
            <img :src="item.imgs">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="cartFoot" v-show="nowCarts.length!==0">
      <div class="paymoney">
        合计：<span>￥{{money}}</span>
      </div>
      <div>去结算<span>{{this.nowCarts.filter(item =>item.isSelect).length}}</span></div>
    </div>
    <foot :class="{active:isShowBal}"></foot>
  </div>
</template>
<script>
import foot from "@/components/Foot";
export default {
  created() {
    for (var i = 0; i < this.$store.state.carts.lenght; i++) {
      this.$store.state.carts[i].isSelect = true;
    }
  },
  data() {
    return {
      isShowBal: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showBal() {
      this.isShowBal = !this.isShowBal;
    },
    cutNum(item) {
      console.log("cut");
      this.$store.dispatch("cutNum", item);
    },
    addNum(item) {
      console.log("add");
      this.$store.dispatch("addNum", item);
    },
    delProduce(item) {
      this.$store.dispatch("delProduce", item);
    },
    selectProduces(item) {
      console.log(item);
      for (var i = 0; i < this.nowCarts.length; i++) {
        if (this.nowCarts[i].id === item.id) {
          this.nowCarts[i].isSelect = !this.nowCarts[i].isSelect;
        }
      }
    },
    // isSelect () {
    //   return this.$store.state.carts
    // }
  },
  components: {
    foot
  },
  computed: {
    nowCarts() {
      var nowcarts = this.$store.state.carts.slice(0);
      console.log(nowcarts);
      var nowCarts = [];
      for (var i = 0; i < nowcarts.length; i++) {
        if (nowcarts[i].user_id === this.$store.state.userInfo.id) {
          nowCarts.push(nowcarts[i]);
        }
      }
      return nowCarts;
    },
    money() {
      var pay = 0;
      for (var i = 0; i < this.nowCarts.length; i++) {
        if (this.nowCarts[i].isSelect === true) {
          pay += this.nowCarts[i].num * this.nowCarts[i].price;
        }
      }
      return pay;
    },
    historyList() {
      return this.$store.state.history;
    }
  }
};
</script>

<style>
.cartHead {
  width: 100%;
  height: 3rem;
  background: rgba(250, 250, 250, 0.9);
  text-align: center;
  position: relative;
  font-size: 1.3rem;
  line-height: 3rem;
  position: relative;
}
.cartHead .goback {
  position: absolute;
  left: 1rem;
  top: 0;
  font-size: 1.8rem;
}
.cart nav {
  display: none;
}
.cart nav.active {
  display: block;
  position: absolute;
  top: 3rem;
  border-top: none;
  border-bottom: 1px solid #ddd;
}
.mainlist {
  display: inline-block;
  width: 1.7rem;
  height: 1.7rem;
  background: url("./cartImg/headerIconMore.png")no-repeat;
  background-size: 1.7rem;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
}
.noProduce {
  text-align: center;
  padding: 3rem 0 2rem 0;
  border-bottom: 8px solid #eee;
}
.noProduce > a {
  border: 1px solid #f60;
  color: #f60;
  display: inline-block;
  margin-top: 1rem;
  width: 5rem;
  height: 2rem;
  text-decoration: none;
  border-radius: 2px;
  line-height: 1.8rem;
}
.recommend>div{
  overflow-x: scroll;
}
.recommend h4 {
  font-weight: normal;
  padding: 0.5rem 0 0 1rem;
}
.recommend ul {
  width: 500rem;
}
.recommendLi {
  float: left;
  width: 5rem;
  list-style: none;
}
.recommendLi > img {
  width: 90%;
}
.recommendLi p {
  color: #333;
  font-size: 12px;
  margin-bottom:1rem;
}
.haveProduce {
  width: 100%;
  border-bottom: 8px solid #eee;
}
.haveProduce li {
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  list-style: none;
}
.haveProduce li:after {
  display: block;
  clear: both;
  content: "";
}
.haveProduce li img {
  width: 20%;
  float: left;
  margin-right: 1rem;
}
.haveProduce .select {
  margin: 5% 1rem;
  width: 1rem;
  height: 1rem;
  float: left;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.haveProduce .select.active {
  background: url("./cartImg/leaf.png")no-repeat;
  border: none;
}
.haveProduce .producesInfo:after {
  display: block;
  clear: both;
  content: "";
}
.haveProduce .producesInfo {
  width: 78%;
  display: inline-block;
}
.haveProduce .producesInfo > p {
  color: #737373;
  font-size: 12px;
}
.haveProduce .producesInfo > div {
  margin-top: 6%;
  font-size: 12px;
}
.haveProduce .producesInfo .addorcut {
  float: right;
  color: #737373;
  width: 40%;
}
.haveProduce .producesInfo .addorcut .changenum {
  border: 1px solid #eee;
  display: inline-block;
  width: 60%;
  text-align: center;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 13px;
}
.haveProduce .producesInfo .addorcut .changenum > span {
  margin: 9%;
}
.haveProduce .producesInfo .addorcut .delProduce {
  margin-left: 15%;
}
.haveProduce .producesInfo > div > span {
  color: #fe6600;
}
.cartFoot {
  width: 100%;
  height: 3rem;
  background: #eee;
  position: fixed;
  bottom: 0;
  line-height: 3rem;
}
.cartFoot .paymoney {
  float: left;
  margin-left: 1rem;
  font-size: 12px;
  color: #333;
}
.cartFoot .paymoney > span {
  color: #f60;
  font-size: 16px;
}
.cartFoot div:last-of-type {
  float: right;
  width: 8rem;
  background: #f60;
  text-align: center;
  color: #fff;
}
</style>

