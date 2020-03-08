let DetailInfo=
  {'title':'【menhera】通称メンヘラちゃん，是由ジョイネット的绘师ぽむ 所创作的LINE表情包《メンヘラちゃん。》及其衍生作品的登场角色',
    'price':'66.00',
    'oldPrice':'99.00',
    'sales':'1000',
    'collection':'20',
    'return':'退货可补运费',
    'reason':'7天无理由退货',
    'time':'72小时内发货',
    'icon':require('../../assets/img/icon/reason.png')
  }

let shopData={
  'img':require('../../assets/img/shop/1.png'),
  'name':'メンヘラちゃん',
  'sales':'10万',
  'all':'100',
  'describe':'5',
  'price':'5',
  'quality':'4.5'
}

let menhera={
  'name':'七濑胡桃',
  'fname':'七濑くるみ',
  'author':'ぽむ',
  'birthday':'8.22',
  'age':'16',
  'sex':'女',
  'works':'LINE表情包《メンヘラちゃん。》',
}
let Comment={
  'img':require('../../assets/img/shop/2.png'),
  'name':'七瀬ころみ',
  'comment':'めちゃかわいいね！！！希望以后店家多出点kurumi的头像！！！',
  'time':'2020-1-1',
  'size':'kurumi'
}

function all(){
  let a = []
  for(let i = 200;i<301;i++){
    let obj={}
    obj.id = i
    obj.src= require('../../assets/img/menheraAll/'+ i +'.png')
    obj.text= '123456'
    a.push(obj)
  }
  return a
}
let more = all()
  export {
    DetailInfo,
    shopData,
    menhera,
    Comment,
    more
  }