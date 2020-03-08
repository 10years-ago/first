<template>
  <div class="count">
    <div class="check"  >
      <Check :isShow="isShow" class="checkBox" @click.native="allCheck"/>
      <span>全选</span>
    </div>
    <span class="price">合计:￥{{countPrice}}</span>
    <span class="length" @click="count">去计算({{countLength}})</span>
  </div>
</template>

<script>
import Check from './cartCheck'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name:'cartCount',
  components:{
    Check
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters({
      data:'cartList'
    }),
    countPrice(){
      return this.data.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
          return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    countLength(){
      return this.data.filter(item => item.checked).length
    },
    isShow(){
      if(this.data.length === 0) return false
      return !(this.data.find(item => !item.checked))
    }
  },
  methods:{
    ...mapActions({
      abc:'checkCart'
    }),
    allCheck(){
       this.data.find(item => !item.checked) ?
        this.data.forEach(item => {item.checked = true}):
        this.data.forEach(item => {item.checked = false})
    },
    count(){
      this.abc().then(res => {
         this.$toast.show(res, 2000)
       })
      
    }
  }
}
</script>
<style scoped>
  .count{
    position: fixed;
    display: flex;
    height: 40px;
    bottom: 49px;
    width:100%;
    line-height: 40px;
    background-color: #ececec
  }
  .check{
    width: 4rem;
    display: flex;
  }
  .checkBox{
    display: flex;
    align-items:center
  }
  .price{
    flex: 1
  }
  .length{
    width: 6rem;
    background-color: orangered;
    color: white;
    text-align: center
  }
</style>