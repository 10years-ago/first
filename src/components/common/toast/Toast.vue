<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  components:{},
  props:{
  },
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message, duration){
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  }
}
</script>
<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  background-color: rgba(0,0,0,.75);
  transition: 1s;
  z-index: 999
}
</style>