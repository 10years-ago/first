<template>
  <div class="list">
    <div class="news">
      <div>
        <img src="~assets/img/icon/me1.png">
        <span>我的消息</span>
      </div>
      <div>
        <img src="~assets/img/icon/me2.png">
        <span>积分商城</span>
      </div>
      <div>
        <img src="~assets/img/icon/me3.png">
        <span>会员卡</span>
      </div>
    </div>
    <div class="download">
      <div>
        <img src="~assets/img/icon/me4.png">
        <span>我的购物车</span>
      </div>
      <div>
        <img src="~assets/img/icon/me5.png">
        <span>下载购物APP</span>
      </div>
    </div>
    <div class="more">
      <div>
        <img src="~assets/img/icon/me6.png">
        <span>设置</span>
      </div>
      <div>
        <img src="~assets/img/icon/me7.png">
        <span>更多</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  components:{},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.list{
  margin-bottom: 5rem;
  background-color: #fff
}
.list>div{
  border-bottom: 1rem solid #f3f3f3;
  padding: 1rem
}
.list>div:last-child{
  border-bottom: none
}
.list>div>div{
  display: flex;
   align-items:center;
   line-height: 3rem
}
.list>div>div>span{
  border-bottom: 1px solid #eaeaea;
  flex: 1
}
.list>div>div:last-child>span{
  border-bottom: none
}
img{
  width: 2rem;
  padding-right: 1rem
}
</style>