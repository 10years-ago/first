<template>
  <div class="backTop">
    <img src='~assets/img/HomeTab/backTop.png' alt="" srcset="">
  </div>
</template>

<script>
export default {
  name:'backTop',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>
<style scoped>
.backTop{
   position: fixed;
   bottom: 60px;
   right: 10px;
}
.backTop img{
  width: 43px;
  height: 43px;
}
</style>