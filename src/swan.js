/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'
// import OneKit from './js/OneKit'

export default class swan {
  // ///////////// version //////////////
  static canIUse(schema) {
    return tt.canIUse(schema)
  }

  // ///////////// events //////////////
  static onAppShow(callback) {
    return tt.onAppShow(callback)
  }

  static onAppHide(callback) {
    return tt.onAppHide(callback)
  }

  static onError(callback) {
    return tt.onError(callback)
  }

  static offAppShow(callback) {
    return tt.offAppShow(callback)
  }

  static offAppHide(callback) {
    return tt.offAppHide(callback)
  }

  static offError(callback) {
    return tt.offError(callback)
  }

  static onPageNotFound(callback) {
    tt.onAppShow(res => {
      if (getApp().onekit_onPageNotFound) {
        getApp().onekit_onPageNotFound(res)
      }
    })
    this._onPageNotFound = callback
  }

  static offPageNotFound() {
    this._offPageNotFound = null
  }

  // ///////////// URLQuery //////////////
  // static setURLQuery(urlQuery) {
  //   const page = OneKit.current()
  //   const oldURLQuery = page.query
  //   const newURLQuery = oldURLQuery
  //   for (const key of Object.keys(urlQuery)) {
  //     const value = urlQuery[key]
  //     newURLQuery[key] = value
  //   }
  //   page.query = newURLQuery
  //   if (page.onURLQueryChange) {
  //     page.onURLQueryChange({
  //       oldURLQuery,
  //       newURLQuery
  //     })
  //   }
  // }

  // static getURLQuery() {
  //   const page = OneKit.current()
  //   return page.query
  // }

  // ///////////// update //////////////
  static getUpdateManager() {
    return tt.getUpdateManager()
  }

  // ///////////// 调试 //////////////
  static setEnableDebug() {
    return console.warn('setEnableDebug is not support')
  }

  // ///////////// 路由 //////////////
  static switchTab(object) {
    return tt.switchTab(object)
  }

  static reLaunch(object) {
    return tt.reLaunch(object)
  }

  static redirectTo(object) {
    return tt.redirectTo(object)
  }

  static navigateTo(object) {
    return tt.navigateTo(object)
  }

  static navigateBack(object) {
    return tt.navigateBack(object)
  }

  // ///////////// 网络 //////////////

  // ///////////// 请求 //////////////
  static request(swan_object) {
    const swan_url = swan_object.url
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      const url = swan_url
      tt.request({
        url,
        success: tt_res => {
          const swan_res = {
            errno: '0',
            errmsg: 'success',
            logid: '000000',
            statusCode: tt_res.statusCode,
            header: tt_res.header,
            data: tt_res.data,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ///////////// 上传、下载 //////////////
  static uploadFile(object) {
    return tt.uploadFile(object)
  }

  static downloadFile(object) {
    return tt.downloadFile(object)
  }

  // ///////////// webSocket //////////////
  static connectSocket(object) {
    const swan_res = tt.connectSocket(object)
    getApp().onekit_SocketTask = swan_res
  }

  static sendSocketMessage(object) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.send(object)
    }
  }

  static closeSocket(object) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.close(object)
    }
  }

  static onSocketOpen(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onOpen(callback)
    }
  }

  static onSocketError(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onError(callback)
    }
  }

  static onSocketMessage(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onMessage(callback)
    }
  }

  static onSocketClose(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onClose(callback)
    }
  }

  // ///////////// Toast //////////////
  static showToast(object) {
    return tt.showToast(object)
  }

  static showLoading(object) {
    return tt.showLoading(object)
  }

  static showModal(object) {
    return tt.showModal(object)
  }

  static showActionSheet(object) {
    return tt.showActionSheet(object)
  }

  static hideToast(object) {
    return tt.hideToast(object)
  }

  static hideLoading(object) {
    return tt.hideLoading(object)
  }

  // ///////////// NavigationBar //////////////
  static showNavigationBarLoading(object) {
    return tt.showNavigationBarLoading(object)
  }

  static setNavigationBarTitle(object) {
    return tt.setNavigationBarTitle(object)
  }

  static setNavigationBarColor(object) {
    return tt.setNavigationBarColor(object)
  }

  static hideNavigationBarLoading(object) {
    return tt.hideNavigationBarLoading(object)
  }

  // ///////////// TabBar //////////////
  static showTabBar(object) {
    return tt.showTabBar(object)
  }

  static setTabBarItem(object) {
    return tt.setTabBarItem(object)
  }

  static setTabBarStyle(object) {
    return tt.setTabBarStyle(object)
  }

  static setTabBarBadge(object) {
    return tt.setTabBarBadge(object)
  }

  static showTabBarRedDot(object) {
    return tt.showTabBarRedDot(object)
  }

  static hideTabBar(object) {
    return tt.hideTabBar(object)
  }

  static removeTabBarBadge(object) {
    return tt.setTabBarBadge(object)
  }

  static hideTabBarRedDot(object) {
    return tt.hideTabBarRedDot(object)
  }

  // ///////////// Favorite //////////////
  static showFavoriteGuide(object) {
    return tt.showFavoriteGuide(object)
  }

  // ///////////// pageScrollTo //////////////
  static pageScrollTo(object) {
    return tt.pageScrollTo(object)
  }

  // ///////////// Refresh //////////////
  static startPullDownRefresh(object) {
    return tt.startPullDownRefresh(object)
  }

  static stopPullDownRefresh(object) {
    return tt.stopPullDownRefresh(object)
  }

  // ///////////// Background //////////////
  static setBackgroundColor() {
    return console.warn('setBackgroundColor is not support')
  }

  static setBackgroundTextStyle() {
    return console.warn('setBackgroundTextStyle is not support')
  }

  // ///////////// Animation //////////////
  static createAnimation(object) {
    return tt.createAnimation(object)
  }

  // ///////////// nextTick //////////////
  static nextTick() {
    return console.warn('nextTick is not support')
  }

  // ///////////// menu //////////////
  static getMenuButtonBoundingClientRect() {
    return tt.getMenuButtonBoundingClientRect()
  }

  // ///////////// 节点信息 //////////////
  static createIntersectionObserver(object) {
    return tt.createIntersectionObserver(object)
  }

  static createSelectorQuery() {
    return tt.createSelectorQuery()
  }

  // ///////////// 数据储存 //////////////
  static setStorage(object) {
    return tt.setStorage(object)
  }

  static setStorageSync(key, data) {
    return tt.setStorageSync(key, data)
  }

  static getStorage(object) {
    return tt.getStorage(object)
  }

  static getStorageSync(object) {
    return tt.getStorageSync(object)
  }

  static getStorageInfo(object) {
    return tt.getStorageInfo(object)
  }

  static getStorageInfoSync() {
    return tt.getStorageInfoSync()
  }

  static removeStorage(object) {
    return tt.removeStorage(object)
  }

  static removeStorageSync(key) {
    return tt.removeStorageSync(key)
  }

  static clearStorageSync(object) {
    return tt.clearStorageSync(object)
  }

  // ///////////// 媒体 //////////////
  static previewImage(object) {
    return tt.previewImage(object)
  }

  static getImageInfo(object) {
    return tt.getImageInfo(object)
  }

  static saveImageToPhotosAlbum(object) {
    return tt.saveImageToPhotosAlbum(object)
  }

  static chooseImage(object) {
    return tt.chooseImage(object)
  }

  static chooseAlbum() {
    return console.warn('chooseAlbum is not support')
  }

  static compressImage(object) {
    return tt.compressImage(object)
  }
}
