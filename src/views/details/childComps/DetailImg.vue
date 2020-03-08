<template>
  <div class="DetailImg" >
      <img :src="item.src" v-for="item in img" :key="item.index" @load="imgLoad">
  </div>
</template>

<script>
export default {
  name:'DetailImg',
  components:{},
  props:{},
  data(){
    return {
      img:[
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      {'src':require("../../../assets/img/menhera/"+Math.round(Math.random()*120)+".jpg")},
      ],
    counter:0
    }
    
  },
  methods:{
    imgLoad(){
      if(++this.counter === this.img.length){
        this.$emit('imgLoad')
      }
    }
  }
}
</script>
<style scoped>
.DetailImg img{
  width: 100%
}
.DetailImg{
  padding-bottom: 2rem
}
</style>