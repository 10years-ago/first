<template>
 <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'scroll',
  components:{},
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this. pullUpLoad,
      click:true      //必须，不然组件内的click都无效
    })

    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods:{
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>
<style scoped>
</style>