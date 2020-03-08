function all(){
    let a = []
    for(let i = 1;i<321;i++){
      let obj={}
      obj.id = i
      obj.src= require('../../assets/img/menheraAll/'+ i +'.png')
      obj.text= '1234'
      a.push(obj)
    }
    return a
  }
let option=[
  {'text':'menhera1'},
  {'text':'menhera2'},
  {'text':'menhera3'},
  {'text':'menhera4'},
  {'text':'menhera5'},
  {'text':'menhera6'}
]
export {
  all,
  option
}