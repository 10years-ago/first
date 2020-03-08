<template>
  <div class="CheckBox">
    <img src="~assets/img/icon/select.png" v-if="isShow" >
    <img src="~assets/img/icon/close.png" v-else>
  </div>
</template>

<script>
export default {
  name:'Check',
  components:{},
  props:{
    isShow:{
      type:Boolean
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
img{
  width: 1.5rem
}
</style>