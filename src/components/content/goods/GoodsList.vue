<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.index" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
        type:Array,
        default(){
          return {}
      }
    }
  },
  data(){
    return {
    }
  },
  methods:{

  }
}
</script>
<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start
  }
</style>