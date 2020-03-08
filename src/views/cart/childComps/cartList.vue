<template>
  <div class="cartList">
    <cart-list-item v-for="(item,index) in data" 
    :key="index" class="item" :item="item" >
    </cart-list-item>
  </div>
</template>

<script>
import cartListItem from './cartListItem'
import { mapGetters } from 'vuex'
export default {
  name:'cartList',
  components:{
    cartListItem
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters({
      data:'cartList'
    })
  }
}
</script>
<style scoped>
.item{
  display: flex;
  align-items:center;
  border-bottom: 1px solid #cacaca;
  padding-bottom: 0.5rem
}
</style>