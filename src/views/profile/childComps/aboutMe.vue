<template>
  <div class="aboutMe">
    <div class="account">
      <img src="~assets/img/shop/3.png">
      <div class="id">
        <p>登陆/注册</p>
        <span>暂无绑定手机号</span>
      </div>
      <span>></span>
    </div>
    <div class="balance">
      <div class="num"><span><span>0.00</span>元</span><span>我的余额</span></div>
      <div class="num"><span><span>0</span>个</span><span>我的优惠</span></div>
      <div class="num"><span><span>0</span>分</span><span>我的积分</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe',
  components:{},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.aboutMe{
  border-bottom: 1rem solid #f3f3f3;
  background-color: #fff
}
.account{
  background-color: pink;
  color: white;
  display: flex;
  align-items:center;
  padding: 0.7rem
}
.id{
  flex: 1;
  line-height: 1.5rem
}
.id p{
  font-size: 0.8rem;
}
.account img{
  width: 5rem
}
.account>span{
  font-size: 1.5rem;
}
.balance{
  display: flex
}
.num{
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding:0.8rem 0 0.8rem 0
}
.num span:first-child{
  line-height: 2rem
}
.num span:first-child span{
  color: #fb5d00;
  font-weight: bold
}
</style>