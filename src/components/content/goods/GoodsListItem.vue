<template>
  <div class="item" @click="details()">
    <img v-lazy="goodsItem.src" @load="imgLoad">
    <p>{{goodsItem.text}}</p>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  components:{},
  props:{
    goodsItem:{
      type:Object,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('itemImgLoad');
    },
  details(index){
      this.$router.push({
        path:'/details/' + this.goodsItem.id,
        query:{
          openImg:this.goodsItem.src
        }
        })
    }
  }
}
</script>
<style scoped>
  .item{
    width:48%;
    padding: 1%
  }
  .item img{
    width: 100%;
    border-radius: 5px
  }
  .item{
    font-size: 12px;
    text-align: center
  }
</style>