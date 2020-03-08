<template>
  <div class="profile">
    <nav-bar class="home-nav"><h4 slot="center">kita</h4></nav-bar>
    <about-me />
    <list />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import aboutMe from './childComps/aboutMe'
import list from './childComps/list'
export default {
  name:'profile',
  components:{
    NavBar,
    aboutMe,
    list
  },
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped>
  .home-nav{
    background-color: pink;
    color: white;
    position: inherit;
    z-index: 98
  }
  .profile{
    background-color: #f3f3f3
  }
</style>