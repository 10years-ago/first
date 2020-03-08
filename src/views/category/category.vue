<template>
  <div class="categoryOut">
    <nav-bar class="home-nav"><h4 slot="center">分类</h4></nav-bar>
    <div class="categoryMain">
      <tab-switch :TabText="option"  @tabIndex="tabIndex"/>
        <scroll class="content" ref="scroll" :probeType="3" 
            :pullUpLoad="true">
        <goods-list :goods="menhera1"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import TabSwitch from 'components/content/TabSwitch/TabSwitch'
import * as category from './categoryData'
import NavBar from 'components/common/navbar/navbar'
import scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name:'category',
  components:{
    NavBar,
    TabSwitch,
    scroll,
    GoodsList
  },
  props:{},
  data(){
    return {
      menhera1:this.menhera1 = category.all().slice(0,50),
      option:category.option,
    }
  },
  methods:{
    tabIndex(index){
      switch (index) {
        case 0:
          this.menhera1 = category.all().slice(0,50)
          break
        case 1:
          this.menhera1 = category.all().slice(50,100)
          break
        case 2:
          this.menhera1 = category.all().slice(100,150)
          break
        case 3:
          this.menhera1 = category.all().slice(150,200)
          break
        case 4:
          this.menhera1 = category.all().slice(200,250)
          break
        case 5:
          this.menhera1 = category.all().slice(250,300)
          
      }
    }
  }
}
</script>
<style scoped>
  .categoryOut{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: pink;
    color: white;
    z-index: 98
  }
  .categoryMain{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .tab-switch{
    flex-direction: column;
    margin-top: 0;
    float: left;
    width: 30%
  }
  .content{
    position: absolute;
    height: 100%;
    right: 0;
    width: 70%;
    height: 100%;
    overflow: hidden;
  }
</style>