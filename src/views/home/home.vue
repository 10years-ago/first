<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h4 slot="center">kita的小屋</h4>
    </nav-bar>
    <tab-switch :TabText="TabText" @tabIndex="tabIndex" ref="tabSwitch1" v-show="tabShow" class="tabShow"/>
    <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="pullingUp">
      <home-swiper :img="img" @swiperLoad="swiperLoad"/>
      <Recommend :reData="reData"/>
      <company :companyData="companyData"/>
      <tab-switch :TabText="TabText" @tabIndex="tabIndex" ref="tabSwitch2"/>
      <goods-list :goods="goodsChange"/>
    </scroll>
    <backTop  @click.native="backClick()" v-show="backTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import HomeSwiper from './childComps/HomeSwiper'
import * as HomeData from './HomeData'
import Recommend from './childComps/Recommend'
import Company from './childComps/Company'
import TabSwitch from 'components/content/TabSwitch/TabSwitch'
import GoodsList from 'components/content/goods/GoodsList'
import scroll from 'components/common/scroll/Scroll'
import backTop from 'components/content/backTop/backTop'
import {itemListenerMinxin} from 'common/mixin'
export default {
  name:'home',
  components:{
      NavBar,
      HomeSwiper,
      Recommend,
      Company,
      TabSwitch,
      GoodsList,
      scroll,
      backTop
  },
  computed:{
    goodsChange(){
      return this.goods[this.thisType].list
    }
  },
  mixins:[itemListenerMinxin],
  created(){
      this.goodsPush('pop')
      this.goodsPush('newP')
      this.goodsPush('delicate')
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0, this.save, 0)
  },
  deactivated(){
   this.save = this.$refs.scroll.scroll.y
   this.$bus.$off('itemImgLoad', this.ImgListener)
  },
  data(){
    return {
      img:HomeData.img,
      reData:HomeData.reData,
      companyData:HomeData.companyData,
      TabText:HomeData.TabText,
      TabData:HomeData.TabData,
      goods:{
        'pop':{list:[]},
        'newP':{list:[]},
        'delicate':{list:[]},
      },
      popStart:0,
      newpStart:0,
      delicateStart:0,
      thisType:'pop',
      backTop:false,
      tabShow:false,
      tabOffsetTop:0,
      save:0,
      list:HomeData.abc()
    }
  },
  methods:{
    tabIndex(index){
      switch (index) {
        case 0:
          this.thisType = 'pop'
          break
        case 1:
          this.thisType = 'newP'
          break
        case 2:
          this.thisType = 'delicate'
      }
      this.$refs.tabSwitch1.ActiveIndex=index
      this.$refs.tabSwitch2.ActiveIndex=index
    },
    goodsPush(type){
      if(type === 'pop'){
       this.goods[type].list.push(...this.TabData.pop.slice(this.popStart,this.popStart+10))
       this.popStart += 10
      }
      else if(type === 'newP'){
        this.goods[type].list.push(...this.TabData.newP.slice(this.newpStart,this.newpStart+10))
        this.newpStart += 10
      }
      else{
        this.goods[type].list.push(...this.TabData.delicate.slice(this.delicateStart,this.delicateStart+10))
        this.delicateStart += 10
      }
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,1000);
    },
    contentScroll(position){
      this.backTop = position.y < -900
      this.tabShow = position.y < -this.tabOffsetTop
    },
    pullingUp(){
      if(this.thisType === 'pop'){
       this.goods[this.thisType].list.push(...this.TabData.pop.slice(this.popStart,this.popStart+5))
       this.popStart += 5
      }
      else if(this.thisType === 'newP'){
        this.goods[this.thisType].list.push(...this.TabData.newP.slice(this.newpStart,this.newpStart+5))
        this.newpStart += 5
      }
      else{
        this.goods[this.thisType].list.push(...this.TabData.delicate.slice(this.delicateStart,this.delicateStart+5))
        this.delicateStart += 5
      }
      this.$refs.scroll.scroll.finishPullUp()
    },
    swiperLoad(){
     this.tabOffsetTop = this.$refs.tabSwitch2.$el.offsetTop
    }
  }

}
</script>
<style scoped>
  .home-nav{
    background-color: pink;
    color: white
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabShow{
    margin-top: 44px;
    position: fixed;
    z-index: 9;
    width: 100%
  }
</style>