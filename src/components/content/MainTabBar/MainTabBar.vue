<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="blue">
          <img slot="item-icon" src="~assets/img/tabbar/tab1.png" alt="">
          <img slot="item-iconA" src="~assets/img/tabbar/tab1a.png" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="blue">
          <img slot="item-icon" src="~assets/img/tabbar/tab2.png" alt="">
          <img slot="item-iconA" src="~assets/img/tabbar/tab2a.png" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="blue">
          <img slot="item-icon" src="~assets/img/tabbar/tab3.png" alt="">
          <img slot="item-iconA" src="~assets/img/tabbar/tab3a.png" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="blue">
          <img slot="item-icon" src="~assets/img/tabbar/tab4.png" alt="">
          <img slot="item-iconA" src="~assets/img/tabbar/tab4a.png" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped>
</style>