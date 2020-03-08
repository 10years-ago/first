<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name:'TabBar',
  components:{
 
  }
}
</script>
<style scoped>
 #tab-bar{
   display: flex;
   position: fixed;
   bottom: 0;
   width: 100%;
   box-shadow: 0 -2px 2px rgba(100, 100, 100, .2)
 }
</style>