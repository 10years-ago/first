<template>
<div class="DetailInfo">
  <div class="title">
      <span class="title_title">{{DetailInfo.title}}</span>
      <span class="title_price">￥{{DetailInfo.price}}</span>
      <del class="title_oldPrice">￥{{DetailInfo.oldPrice}}</del>
  </div>
  <div class="main">
      <span class="main_sales">销量 {{DetailInfo.sales}}</span>
      <span class="main_collection">收藏{{DetailInfo.collection}}</span>
      <span class="main_return">{{DetailInfo.return}}</span>
  </div>
  <div class="reason">
      <div class="reason_left">
        <img :src="DetailInfo.icon">
        <span>{{DetailInfo.reason}}</span>
      </div>
      <div class="reason_right">
        <img :src="DetailInfo.icon">
        <span>{{DetailInfo.time}}</span>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  components:{},
  props:{
    DetailInfo:{
      type:Object,
      default(){
        return []
      }
    }
  },
  mounted(){
    // console.log(this.DetailInfo)
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
  .DetailInfo{
    padding: 0.5rem;
    border-bottom: 5px solid #eaeaea
  }
  .title_title{
    font-size: 1rem;
    display: inline-block;
    margin-bottom: 0.7rem
  }
  .title_price{
    color: #fb8c9f;
    font-size: 1.5rem;
  }
  .title_oldPrice{
    color:#bbbbbf;
    margin-left: 0.2rem
  }
  .main{
    display: flex;
    justify-content: space-between;
    color: #bbbbbb;
    font-size: 0.8rem;
    padding: 0.5rem 0 0.5rem 0;
    border-bottom: 1px solid  #dcd6d6;
  }
  .reason img{
    width: 0.9rem
  }
  .reason{
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 1rem 0 1rem 0;
    
  }
</style>