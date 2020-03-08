<template>
  <div>
    <nav-bar class="nav_bar">
      <div slot="left" class="navbar_left" @click="back">＜</div>
      <div slot="center" class="navbar_center">
        <span v-for="(item,index) in title"
         :key="item.index" :class="{activeTop:index==topIndex}" 
         @click="changIndex(index)">{{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
export default {
  name:'DerailsNavBar',
  components:{
    NavBar
  },
  props:{},
  data(){
    return {
      title:['商品','参数','评论','推荐'],
      topIndex:0
    }
  },
  methods:{
    changIndex(index){
      this.topIndex = index
      this.$emit('navIndex',index)
    },
    back(){
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.navbar_center{
  display: flex;
  width: 75%;
  margin: 0 auto
}

.navbar_center span{
    flex: 1;
    text-align: center;
    font-size: 0.9rem;
  }
.activeTop{
  color: pink;
  border-bottom: 2px solid pink;
  height: 2.6rem;
}
.navbar_left{
  text-align: center;
  font-size: 1.8rem;
}
.nav_bar{
  background-color: white
}
</style>