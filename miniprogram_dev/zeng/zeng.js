// zeng/zeng.js
import {
  OnekitPage,
  swan
} from '../baidu2toutiao/index'

OnekitPage({
  data: {

  },
  onLoad() {
    // eslint-disable-next-line no-console
    // console.log(swan)
   
    swan.connectSocket({

      url:'wss://web-ws.immomo.com/socket.io/?EIO=3&transport=websocket',
      complete:res=>{
        console.log(res)
      }
    })
    setTimeout(res=>{
      swan.closeSocket({
        complete:res=>{
          console.log(res)
        }
      })
    },2000)
    swan.onSocketClose(res=>{
      console.log(res)
    })
    swan.onSocketOpen(res=>{
      console.log(res)
    })
    swan.onSocketError(res=>{
      console.log(res)
    })
    swan.onSocketMessage(res=>{
      console.log(res)
    })

    swan.sendSocketMessage({

      data:'sss',
      complete:res=>{
        console.log(res)
      }
    })
  }
})
