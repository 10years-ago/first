<template>
  <div class="recom">
    <div v-for="item in reData" :key="item.index">
      <a href="">
        <img :src="item.src">
        <div>{{item.text}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommend',
  components:{},
  props:{
    reData:{
      type:Array
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
  .recom{
    display: flex;
    text-align: center;
    font-size: 10px;
    padding-bottom: 30px;
    border-bottom: 5px solid #e6e6e6
  }

  .recom>div{
    flex:1
  }

  .recom img{
    border-radius: 50%;
    width: 65px;
    height: 65px;
     margin-bottom: 5px;
  }
</style>