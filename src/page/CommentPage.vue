<template>
  <div class="commentBox">
    <headgray headerTitle="客户评价"></headgray>
    <div class="noProduce" v-show="comments.length===0">
      <div class="noPrduceimg">
        <img src="./commentImg/backgroundimg1.png" width="100%">
      </div>
      <p>暂时还没亲们评论哦~</p>
      <router-link to="/writecomment">去评论</router-link>
    </div>
    <div class="haveProduce" v-show="comments.length!==0">
      <ul>
        <li>
          
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
  computed: {
    comments() {
      return this.$store.state.comments;
    }
  }
};
</script>
<style>
.commentBox .noProduce {
  text-align: center;
  padding: 3rem 0 2rem 0;
  color: #bcd4e3;
}
.commentBox .noProduce > a {
  border: 1px solid #7bbfea;
  color: #7bbfea;
  display: inline-block;
  margin-top: 1rem;
  width: 5rem;
  height: 2rem;
  text-decoration: none;
  border-radius: 2px;
  line-height: 1.8rem;
}
.noPrduceimg {
  width: 75%;
  border-radius: 50%;
  overflow: hidden;
  margin: 10% 13%;
}
</style>


