<template>
  <div class="cartItem">
      <div class="select">
        <Check :isShow="item.checked" @click.native="showChange"/>
      </div>
      <div class="openImg">
        <img :src="item.img">
      </div>
      <div class="text">
        <p class="title">{{item.title}}</p>
        <p class="name">类别：{{item.name}}</p>
        <p class="price"><span>{{item.price}}</span><span>x{{item.count}}</span></p>
      </div>
  </div>
</template>

<script>
import Check from './cartCheck'
export default {
  name:'cartListItem',
  components:{
    Check
  },
  props:{
    item:{
      type:Object,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      
    }
  },
  methods:{
    showChange(){
      this.item.checked = !this.item.checked
    }
  }

}
</script>
<style scoped>

.openImg img{
  width: 5rem;
  height: 5rem
}
.text{
  padding-left: 0.8rem
}
 .title{
  padding-bottom: 0.5rem
}
.name{
  font-size: 0.8rem;
  color: #adadad;
  padding-bottom: 1rem
}
.price{
  display: flex;
  justify-content: space-between
}
.price span:first-child{
  color: #fb6209
}
</style>