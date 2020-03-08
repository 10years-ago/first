<template>
    <div class="tab-switch">
      <div v-for="(item,index) in TabText" :key="item.idnex">
        <span href="#" @click="aClick(index)" :class="{aClick:index==ActiveIndex}">{{item.text}}</span>
      </div>
    </div>
</template>

<script>
export default {
  components:{},
  props:{
    TabText:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return {
      ActiveIndex:0
    }
  },
  methods:{
      aClick(index){
        this.ActiveIndex = index;
        this.$emit('tabIndex',index)
      }
  },
}
</script>
<style scoped>
  .tab-switch{
    display: flex;
    text-align: center;
    margin-top: 20px;
    background-color: #fff;
    height: 2rem;
    line-height: 1.8rem
  }
  .tab-switch div{
    flex: 1
  }
  .aClick{
    color: pink;
    border-bottom: 2px solid pink
  }
</style>