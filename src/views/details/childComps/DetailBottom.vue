<template>
  <div class="bottom">
    <div class="bottomStyle">
    <div class="bottom_left">
      <div>
        <img src="~assets/img/bottom/1.png">
        <p>客服</p>
      </div>
      <div>
        <img src="~assets/img/bottom/2.png">
        <p>店铺</p>
      </div>
      <div>
        <img src="~assets/img/bottom/3.png">
        <p>收藏</p>
      </div>
    </div>
    <div class="bottom_main" @click="addCart">加入购物车</div>
    <div class="bottom_right">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Bottom',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
}
</script>
<style scoped>
   .bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 49px;
    text-align: center
  }
  .bottomStyle{
    display: flex
  }
  .bottom_left{
    display: flex;
    background-color: #fff;
    flex-grow:2;
    justify-content:space-around;
    color: rgb(108, 108, 108)
  }
  .bottom_left img{
    width: 1.7rem;
  }
  .bottom_main{
    background-color: yellow;
    line-height: 49px;
    flex-grow:1
  }
  .bottom_right{
    background-color: pink;
    line-height: 49px;
    flex-grow:1;
    color: #fff
  }
</style>