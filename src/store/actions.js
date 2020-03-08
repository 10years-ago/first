export default{
  addCart(context, payload){
    return new Promise((resolve, reject) => {
    let oldProduct = context.state.cartList.find(item => item.id === payload.id)
    if(oldProduct){
      context.commit('addCounter', oldProduct)
      resolve('商品数量+1')
    }else{
      payload.count = 1
      context.commit('addCart', payload)
      resolve('商品添加成功')
    }
  })
},
checkCart(context, payload){
  return new Promise((resolve, reject) => {
  let oldProduct = context.state.cartList.find(item => item.checked === true)
  if(oldProduct){
    // context.commit('addCounter', oldProduct)
    resolve('付款功能暂未开启')
  }else{
    // payload.count = 1
    // context.commit('addCart', payload)
    resolve('您未选择要购买的商品')
  }
})
}
}