<template>
  <div class="derails">
    <detail-nav-bar  class="nav-bar" @navIndex="navIndex" :topIndex="topIndex" ref="nav"/>
    <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="pullingUp">
      <detail-swiper />
      <detail-info :DetailInfo="DetailInfo" />
      <detail-shop :DetailShop="DetailShop" />
      <h3>商品详情</h3>
      <detail-img @imgLoad="imgLoad"/>
      <detail-parameter :menhera="menhera" ref="parameter"/>
      <detail-comment :Comment="Comment" ref="comment"/>
      <goods-list :goods="goods" ref="goods"/>
    </scroll>
    <backTop  @click.native="backClick()" v-show="backTop"/>
    <bottom @addCart="addToCart" />
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import * as DetailData from './detailsData'
import DetailInfo from './childComps/DetailInfo'
import DetailShop from './childComps/DetailShop'
import scroll from 'components/common/scroll/Scroll'
import DetailImg from './childComps/DetailImg';
import DetailParameter from './childComps/DetailParameter'
import DetailComment from './childComps/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import backTop from 'components/content/backTop/backTop'
import {debouce} from 'common/utils'
import {itemListenerMinxin} from 'common/mixin'
import Bottom from './childComps/DetailBottom'
import { mapActions } from 'vuex'
// import Toast from 'components/common/toast/Toast'
export default {
  name:'Details',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    scroll,
    DetailShop,
    DetailImg,
    DetailParameter,
    DetailComment,
    GoodsList,
    backTop,
    Bottom,
    // Toast
  },
  props:{},
  data(){
    return {
      DetailInfo:DetailData.DetailInfo,
      DetailShop:DetailData.shopData,
      menhera:DetailData.menhera,
      Comment:DetailData.Comment,
      More:DetailData.more,
      goods:[],
      Start:1,
      backTop:false,
      topIndex:0,
      TopY:[],
      getTopY:null,
      id:null,
      openImg:null,
      // message:null,
      // show:false
    }
  },
  mixins:[itemListenerMinxin],
  created(){
    this.goodsPush()
    this.getTopY = debouce(() => {
      this.TopY = []
      this.TopY.push(0)
      this.TopY.push(-this.$refs.parameter.$el.offsetTop)
      this.TopY.push(-this.$refs.comment.$el.offsetTop)
      this.TopY.push(-this.$refs.goods.$el.offsetTop)
    },100)
  },
  mounted(){
    this.id = this.$route.params.id
    this.openImg = this.$route.query.openImg
  },
  destoryed(){
    this.id = null
    this.$bus.$off('itemImgLoad', this.ImgListener)
  },
  methods:{
    ...mapActions(['addCart']),
    imgLoad(){//非常神奇，我也不知道为什么能获取所有的图片加载完成的事件
      this.$refs.scroll.refresh()
      this.getTopY()
    },
    goodsPush(){
      this.goods.push(...this.More.slice(this.Start,this.Start+10))
      this.Start += 10
    },
    pullingUp(){
      this.goods.push(...this.More.slice(this.Start,this.Start+10))
      this.Start += 10
      this.$refs.scroll.scroll.finishPullUp()
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,1000);
    },
    contentScroll(position){
      const positionY = -position.y
      this.backTop = positionY > 3000
      let length = this.TopY.length
      for(let i =0;i < length; i++){
        if(this.topIndex !== i && (i < length - 1 && positionY >= -this.TopY[i] && positionY < -this.TopY[i+1])
          || (i === length - 1 && positionY >= -this.TopY[i])){
              this.topIndex = i
              this.$refs.nav.topIndex =i
          }
      }
    },
    navIndex(index){
     this.topIndex =  index
     this.$refs.scroll.scroll.scrollTo(0,this.TopY[index],1000);
    },
    addToCart(){
      const cart = {}
       cart.id = this.id
       cart.img = this.openImg
       cart.price = this.DetailInfo.price
       cart.name = this.menhera.name
       cart.title = this.menhera.works
       this.addCart(cart).then(res => {
         this.$toast.show(res, 2000)
       })
    }
  }
}
</script>
<style scoped>
  .content{
    height: calc(100% - 44px - 49px);
    margin-top: 44px;
  }
  .derails{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh
  }
  h3{
    text-align: center;
    margin-top: 1rem;
    border-bottom: 1px solid #d0d0d0;
    padding-bottom: 1rem
  }
</style>