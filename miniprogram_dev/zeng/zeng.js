// zeng/zeng.js
import {
  OnekitPage,
  swan
} from '../baidu2toutiao/index'

OnekitPage({
  data: {

  },
  onLoad() {
    
   swan.login({
     complete:res=>{
       console.log(res)
     }
   })
    console.log(swan.isLoginSync())
    
    
  }
})
