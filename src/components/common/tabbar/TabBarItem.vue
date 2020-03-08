<template>
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon" ></slot></div>
        <div v-else><slot  name="item-iconA" ></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
export default {
 name:'TabBarItem',
 data(){
   return{

   }
 },
 props:{
   path:String,
   activeColor:{
      type:String,
      default:'red'
    }
 },
 computed:{
   isActive(){
     return this.$route.path.indexOf(this.path) !== -1
   },
   activeStyle(){
     return this.isActive ? {color: this.activeColor}:{}
   }
 },
 methods:{
   itemClick(){
    if(this.$router.history.current.path != this.path){//双击报错
      this.$router.push(this.path)
    }
   }
 }
}
</script>
<style scoped>
 .tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
   background-color: #ececec;
 }
 .tab-bar-item img{
   width: 24px;
   height: 24px;
 }
 /* .active{
   color: red;
 } */
</style>