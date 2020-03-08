<template>
  <div class="cart">
    <nav-bar class="navbar">
      <h3 slot="center">购物车({{length}})</h3>
    </nav-bar>
    <scroll class="content" :probeType="3" :pullUpLoad="true">
    <cart-list/>
    </scroll>
    <cart-count />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import scroll from 'components/common/scroll/Scroll'
import cartList from './childComps/cartList'
import cartCount from './childComps/cartCount'
import { mapGetters } from 'vuex'
export default {
  name:'cart',
  components:{
    NavBar,
    cartList,
    scroll,
    cartCount
  },
  props:{},
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>
<style scoped>
  .navbar{
    background-color: pink
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 98px;
    left: 0;
    right: 0;
  }
  .navbar h3{
    color: #fff
  }
</style>