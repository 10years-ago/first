<template>
    <swiper>
      <swiperItem v-for="item in img" :key="item.index">
        <a href="#">
          <img :src="item.src">
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
  props:{},
  data(){
    return {
      num:true,
      img:[
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      ]
    }
  },
  methods:{
    // swiperImg(){
    //   if(this.num)
    //   this.$emit('swiperLoad')
    //   this.num = false
    // }
  }
}
</script>
<style scoped>
</style>