<template>
<div>
  <h3>手办公司</h3>
  <div class="company">
    <div v-for="item in companyData" :key="item.index" class="item">
      <a href="">
        <img :src="item.src">
        <div>{{item.text}}</div>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components:{},
  props:{
    companyData:{
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
  .company{
    display: flex;
    text-align: center;
    font-size: 10px;
    flex-wrap: wrap;
    width: 100%
  }
  .item{
     width: 25% 
  }
  .company img{
    border-radius: 50%;
    /* width: 65px;
    height: 65px; */
    /* width: 5rem; */
    /* width: 100%; */
    /* width: 6rem; */
    width: 100%;
     margin-bottom: 5px;
  }
  h3{
    margin: 15px 0 15px 0;
    text-align: center
  }
</style>