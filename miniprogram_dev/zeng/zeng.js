// zeng/zeng.js
import {
  OnekitPage,
  swan
} from '../baidu2toutiao/index'

OnekitPage({
  data: {

  },
  onLoad() {
    swan.setURLQuery({channel: 'asda'})
    console.log(swan.onURLQueryChange())
    
   
    const newURLQuery = swan.getURLQuery();
            console.log(newURLQuery)

            

    
    
  }
})
