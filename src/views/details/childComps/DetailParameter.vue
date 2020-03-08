<template>
  <div class="parameter">
    <table cellspacing=0>
      <tr>
        <td>中文名</td>
        <td>{{menhera.name}}</td>
      </tr>
      <tr>
        <td>外文名</td>
        <td>{{menhera.fname}}</td>
      </tr>
      <tr>
        <td>画师</td>
        <td>{{menhera.author}}</td>
      </tr>
      <tr>
        <td>生日</td>
        <td>{{menhera.birthday}}</td>
      </tr>
      <tr>
        <td>年龄</td>
        <td>{{menhera.age}}</td>
      </tr>
      <tr>
        <td>性别</td>
        <td>{{menhera.sex}}</td>
      </tr>
      <tr>
        <td>作品</td>
        <td>{{menhera.works}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'parameter',
  components:{},
  props:{
    menhera:{
      type:Object,
      defualt(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
tr td:first-child{
  width: 30%;
}
tr td:last-child{
  color: #dc6d81
}
td{
  border-bottom: 1.5px solid #f3f3f3
}
tr{
  height:2.5rem;
  
}
.parameter{
  padding: 0.5rem;
  padding-top:2rem;
  border-top:5px solid #eaeaea
}
</style>