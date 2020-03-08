<template>
  <div class="Comment">
    <h5 class="title">用户评价</h5>
    <div class="name">
      <img :src="Comment.img">
      <span>{{Comment.name}}</span>
    </div>
    <div class="text">{{Comment.comment}}</div>
    <div class="size">
      <span>{{Comment.time}}</span>
      <span>款式:{{Comment.size}}</span>
    </div>
    <div class="img">
      <img :src="item.src" v-for="item in img" :key="item.index">
    </div>
  </div>
</template>

<script>
export default {
  name:'comment',
  components:{},
  props:{
    Comment:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      img:[
      {'src':require("../../../assets/img/menhera2/0"+Math.round(Math.random()*40)+".png")},
      {'src':require("../../../assets/img/menhera2/0"+Math.round(Math.random()*40)+".png")},
      {'src':require("../../../assets/img/menhera2/0"+Math.round(Math.random()*40)+".png")}
      ]
    }
  },
}
</script>
<style scoped>
  .Comment{
    padding: 0.5rem
  }
  .title{
    text-align: center;
    border-bottom: 3px solid #eaeaea;
    padding-bottom:0.5rem 
  }
  .name{
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
  }
  .name img{
    width: 2rem
  }
  .text{
    margin: 0.7rem 0 0.7rem 0;
    color: #4c4a4a
  }
  .size{
    color: #bfbfbf;
    margin-bottom: 0.7rem
  }
  .size span:last-child{
    margin-left: 1rem
  }
  .img img{
    width: 5rem
  }
</style>