let img=[
  //require使其直接使用绝对路径，不然webpack会自动使用相对路径
  {'src':require('../../assets/img/HomeSwiper/1.png')},
  {'src':require('../../assets/img/HomeSwiper/2.jpg')},
  {'src':require('../../assets/img/HomeSwiper/3.jpg')},
  {'src':require('../../assets/img/HomeSwiper/4.png')}
]

let reData=[
  {'src':require('../../assets/img/HomeRecommend/Recommend1.png'),'text':'准点抢购'},
  {'src':require('../../assets/img/HomeRecommend/Recommend2.png'),'text':'商品目录'},
  {'src':require('../../assets/img/HomeRecommend/Recommend3.jpg'),'text':'内购福利'},
  {'src':require('../../assets/img/HomeRecommend/Recommend4.jpg'),'text':'准备上架'}
]

let companyData=[
  {'src':require('../../assets/img/company/1.jpg'),'text':'GSC'},
  {'src':require('../../assets/img/company/2.jpg'),'text':'Alter'},
  {'src':require('../../assets/img/company/3.jpg'),'text':'MAX'},
  {'src':require('../../assets/img/company/4.jpg'),'text':'KOTOBUKIYA'},
  {'src':require('../../assets/img/company/5.jpg'),'text':'Mega House'},
  {'src':require('../../assets/img/company/6.jpg'),'text':'KAIYODO'},
  {'src':require('../../assets/img/company/7.jpg'),'text':'准点抢购'},
  {'src':require('../../assets/img/company/8.jpg'),'text':'bandai'},
]

let TabText=[
  {'text':'流行'},
  {'text':'新款'},
  {'text':'精选'}
]

function abc(){
  let a =[]
  for(let i = 1;i<321;i++){
    let obj={}
    obj.id = i
    obj.src= require('../../assets/img/menheraAll/'+ i +'.png')
    obj.text= '1234'
    a.push(obj)
  }
  return a
}
let pop = abc().slice(0,100)
let newP = abc().slice(100,200)
let delicate = abc().slice(200,300)

let TabData={
  pop,newP,delicate
}
export {
  img,
  reData,
  companyData,
  TabText,
  TabData,
  abc
}