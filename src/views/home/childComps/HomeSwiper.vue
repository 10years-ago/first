<template>
    <swiper>
      <swiperItem v-for="item in img" :key="item.index">
        <a href="#">
          <img :src="item.src" @load="swiperImg">
        </a>
      </swiperItem>
    </swiper>
</template>

<script>
import {swiper,swiperItem} from 'components/common/swiper/index'
export default {
  components:{
      swiper,
      swiperItem
      
  },
  props:{
    img:{
      type:Array
    }
  },
  data(){
    return {
      num:true
    }
  },
  methods:{
    swiperImg(){
      if(this.num)
      this.$emit('swiperLoad')
      this.num = false
    }
  }
}
</script>
<style scoped>
</style>