<template>
  <div class="DetailShop">
    <div class="title">
      <img :src="DetailShop.img">
      <span>{{DetailShop.name}}</span>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="Situation">
          <p>{{DetailShop.sales}}<span class="sales">总销量</span ></p>
        </div>
        <div class="Situation">
          <p>{{DetailShop.all}}<span class="sales">全部宝贝</span></p>
        </div>
      </div>
      <div class="main_line"></div>
      <div class="main_right">
        <span class="describe">描述相符 <span>{{DetailShop.describe}}</span></span>
        <span class="describe">价格合理 <span>{{DetailShop.price}}</span></span>
        <span class="describe">质量满意 <span>{{DetailShop.quality}}</span></span>
      </div>
    </div>
    <div class="button"><button>进店逛逛</button></div>
    
  </div>
</template>

<script>
export default {
  name:'DetailShop',
  components:{},
  props:{
    DetailShop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
  .DetailShop{
    padding: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 5px solid #eaeaea
  }
  .title{
    display: flex;
    align-items: center;
  }
  .title img{
    width: 2rem;
    border-radius: 2rem
  }
  .sales{
    display: block
  }
  .main{
    display: flex;
    justify-content: space-evenly;
    font-size: 0.8rem;
    margin-top: 1.5rem;
    align-items: center;
  }
  .describe{
    display: block;
    line-height: 1.4rem;
    
  }
  .describe span{
    color: green
  }
  .describe:nth-child(2) span{
    color: red
  }
  .main_left{
    display: flex;
    text-align: center;
  }
  .Situation{
    display: flex;
    align-items: center;
    line-height: 1.3rem
  }
  .Situation:nth-child(2){
    margin-left: 1rem
  }
  .main_line{
    width: 1px;
    height: 3rem;
    border-left: 1px solid #c3c0c0;
  }
  .button{
    text-align: center;
    margin-top:0.7rem
  }
  button{
    width: 40%;
    border:none;
    height: 1.5rem;
    border-radius: 1.5rem;
    background: #f1efef;
    color: #6b6b6b
  }

</style>