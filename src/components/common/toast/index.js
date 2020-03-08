import Toast from './Toast'
const obj = {}
  obj.install = function(Vue){
    //1.创建构造器
    const toastContrustor = Vue.extend(Toast)
    //2.以new方式来创建一个组件对象
    const toast = new toastContrustor()
    //3.手动挂载
    toast.$mount(document.createElement('div'))
    //4.toast.$el对应的就是楼上的DIV
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
  }

export default obj