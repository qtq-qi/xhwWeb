<template>
    <div class="writecomment">
        <headgray headerTitle="写评论"></headgray>
        <textarea placeholder="请输入评论内容" v-model="commentMain"></textarea>
        <button class="subComment" @click="subComment">提交</button>
    </div>
</template>
<script>
import headgray from "@/components/HeadGray";
export default {
  components: {
    headgray
  },
  data () {
      return {
          commentMain: ""
      }
  },
  methods: {
      subComment () {
          this.$store.dispatch("setComments",this.commentMain)
          .then(res =>{
              this.commentMain = ""
              this.$router.push('/comment')
          })
          
      }
  }
};
</script>
<style>
.writecomment{
    width:100%;
}
textarea{
    width:95%;
    margin:5% 3%;
    border:1px solid #7bbfea;
    min-height: 30rem;
    font-size: 16px;
    padding:1rem;
    line-height: 2rem;
    outline: none;
}
.subComment{
    width:80%;
    height:3rem;
    background:#7bbfea;
    color:#fff;
    font-weight: bold;
    letter-spacing: 4rem;
    padding-left:3.5rem;
    font-size: 16px;
    border-radius: 10px;
    position: absolute;
    bottom:0;
    margin-left:10%;
    border:none;
}
</style>


