module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.swan = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(42);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(43);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(44);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(45);
exports.OnekitPage = OnekitPage_1.default;
var swan_1 = __webpack_require__(46);
exports.swan = swan_1.default;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable camelcase */

function OnekitApp(swan_object) {
  var tt_object = swan_object;
  return App(tt_object);
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;
/* eslint-disable camelcase */
function OnekitBehavior(swan_object) {
  var tt_object = swan_object;
  return Behavior(tt_object);
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;
/* eslint-disable camelcase */
function OnekitComponent(swan_object) {
  var tt_object = swan_object;
  return Component(tt_object);
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable no-console */
/* eslint-disable camelcase */
function OnekitPage(swan_object) {
  var tt_object = {
    getData: function getData(key) {
      return this.data[key];
    }
  };
  for (var _iterator = Object.keys(swan_object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    switch (key) {
      case 'onLoad':
        tt_object.onLoad = function (query) {
          this.query = query;
          swan_object.onLoad.call(this, query);
        };
        break;
      default:
        tt_object[key] = swan_object[key];
        break;
    }
  }

  return Page(tt_object);
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PROMISE = __webpack_require__(47);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable camelcase */


// import OneKit from './js/OneKit'

var swan = function () {
  function swan() {
    _classCallCheck(this, swan);
  }

  // ///////////// version //////////////
  swan.canIUse = function canIUse(schema) {
    return tt.canIUse(schema);
  };

  // ///////////// events //////////////


  swan.onAppShow = function onAppShow(callback) {
    return tt.onAppShow(callback);
  };

  swan.onAppHide = function onAppHide(callback) {
    return tt.onAppHide(callback);
  };

  swan.onError = function onError(callback) {
    return tt.onError(callback);
  };

  swan.offAppShow = function offAppShow(callback) {
    return tt.offAppShow(callback);
  };

  swan.offAppHide = function offAppHide(callback) {
    return tt.offAppHide(callback);
  };

  swan.offError = function offError(callback) {
    return tt.offError(callback);
  };

  swan.onPageNotFound = function onPageNotFound(callback) {
    tt.onAppShow(function (res) {
      if (getApp().onekit_onPageNotFound) {
        getApp().onekit_onPageNotFound(res);
      }
    });
    this._onPageNotFound = callback;
  };

  swan.offPageNotFound = function offPageNotFound() {
    this._offPageNotFound = null;
  };

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


  swan.getUpdateManager = function getUpdateManager() {
    return tt.getUpdateManager();
  };

  // ///////////// 调试 //////////////


  swan.setEnableDebug = function setEnableDebug() {
    return console.warn('setEnableDebug is not support');
  };

  // ///////////// 路由 //////////////


  swan.switchTab = function switchTab(object) {
    return tt.switchTab(object);
  };

  swan.reLaunch = function reLaunch(object) {
    return tt.reLaunch(object);
  };

  swan.redirectTo = function redirectTo(object) {
    return tt.redirectTo(object);
  };

  swan.navigateTo = function navigateTo(object) {
    return tt.navigateTo(object);
  };

  swan.navigateBack = function navigateBack(object) {
    return tt.navigateBack(object);
  };

  // ///////////// 网络 //////////////

  // ///////////// 请求 //////////////


  swan.request = function request(swan_object) {
    var swan_url = swan_object.url;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var url = swan_url;
      tt.request({
        url: url,
        success: function success(tt_res) {
          var swan_res = {
            errno: '0',
            errmsg: 'success',
            logid: '000000',
            statusCode: tt_res.statusCode,
            header: tt_res.header,
            data: tt_res.data
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  // ///////////// 上传、下载 //////////////


  swan.uploadFile = function uploadFile(object) {
    return tt.uploadFile(object);
  };

  swan.downloadFile = function downloadFile(object) {
    return tt.downloadFile(object);
  };

  // ///////////// webSocket //////////////


  swan.connectSocket = function connectSocket(object) {
    var swan_res = tt.connectSocket(object);
    getApp().onekit_SocketTask = swan_res;
  };

  swan.sendSocketMessage = function sendSocketMessage(object) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.send(object);
    }
  };

  swan.closeSocket = function closeSocket(object) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.close(object);
    }
  };

  swan.onSocketOpen = function onSocketOpen(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onOpen(callback);
    }
  };

  swan.onSocketError = function onSocketError(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onError(callback);
    }
  };

  swan.onSocketMessage = function onSocketMessage(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onMessage(callback);
    }
  };

  swan.onSocketClose = function onSocketClose(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onClose(callback);
    }
  };

  // ///////////// Toast //////////////


  swan.showToast = function showToast(object) {
    return tt.showToast(object);
  };

  swan.showLoading = function showLoading(object) {
    return tt.showLoading(object);
  };

  swan.showModal = function showModal(object) {
    return tt.showModal(object);
  };

  swan.showActionSheet = function showActionSheet(object) {
    return tt.showActionSheet(object);
  };

  swan.hideToast = function hideToast(object) {
    return tt.hideToast(object);
  };

  swan.hideLoading = function hideLoading(object) {
    return tt.hideLoading(object);
  };

  // ///////////// NavigationBar //////////////


  swan.showNavigationBarLoading = function showNavigationBarLoading(object) {
    return tt.showNavigationBarLoading(object);
  };

  swan.setNavigationBarTitle = function setNavigationBarTitle(object) {
    return tt.setNavigationBarTitle(object);
  };

  swan.setNavigationBarColor = function setNavigationBarColor(object) {
    return tt.setNavigationBarColor(object);
  };

  swan.hideNavigationBarLoading = function hideNavigationBarLoading(object) {
    return tt.hideNavigationBarLoading(object);
  };

  // ///////////// TabBar //////////////


  swan.showTabBar = function showTabBar(object) {
    return tt.showTabBar(object);
  };

  swan.setTabBarItem = function setTabBarItem(object) {
    return tt.setTabBarItem(object);
  };

  swan.setTabBarStyle = function setTabBarStyle(object) {
    return tt.setTabBarStyle(object);
  };

  swan.setTabBarBadge = function setTabBarBadge(object) {
    return tt.setTabBarBadge(object);
  };

  swan.showTabBarRedDot = function showTabBarRedDot(object) {
    return tt.showTabBarRedDot(object);
  };

  swan.hideTabBar = function hideTabBar(object) {
    return tt.hideTabBar(object);
  };

  swan.removeTabBarBadge = function removeTabBarBadge(object) {
    return tt.setTabBarBadge(object);
  };

  swan.hideTabBarRedDot = function hideTabBarRedDot(object) {
    return tt.hideTabBarRedDot(object);
  };

  // ///////////// Favorite //////////////


  swan.showFavoriteGuide = function showFavoriteGuide(object) {
    return tt.showFavoriteGuide(object);
  };

  // ///////////// pageScrollTo //////////////


  swan.pageScrollTo = function pageScrollTo(object) {
    return tt.pageScrollTo(object);
  };

  // ///////////// Refresh //////////////


  swan.startPullDownRefresh = function startPullDownRefresh(object) {
    return tt.startPullDownRefresh(object);
  };

  swan.stopPullDownRefresh = function stopPullDownRefresh(object) {
    return tt.stopPullDownRefresh(object);
  };

  // ///////////// Background //////////////


  swan.setBackgroundColor = function setBackgroundColor() {
    return console.warn('setBackgroundColor is not support');
  };

  swan.setBackgroundTextStyle = function setBackgroundTextStyle() {
    return console.warn('setBackgroundTextStyle is not support');
  };

  // ///////////// Animation //////////////


  swan.createAnimation = function createAnimation(object) {
    return tt.createAnimation(object);
  };

  // ///////////// nextTick //////////////


  swan.nextTick = function nextTick() {
    return console.warn('nextTick is not support');
  };

  // ///////////// menu //////////////


  swan.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect() {
    return tt.getMenuButtonBoundingClientRect();
  };

  // ///////////// 节点信息 //////////////


  swan.createIntersectionObserver = function createIntersectionObserver(object) {
    return tt.createIntersectionObserver(object);
  };

  swan.createSelectorQuery = function createSelectorQuery() {
    return tt.createSelectorQuery();
  };

  // ///////////// 数据储存 //////////////


  swan.setStorage = function setStorage(object) {
    return tt.setStorage(object);
  };

  swan.setStorageSync = function setStorageSync(key, data) {
    return tt.setStorageSync(key, data);
  };

  swan.getStorage = function getStorage(object) {
    return tt.getStorage(object);
  };

  swan.getStorageSync = function getStorageSync(object) {
    return tt.getStorageSync(object);
  };

  swan.getStorageInfo = function getStorageInfo(object) {
    return tt.getStorageInfo(object);
  };

  swan.getStorageInfoSync = function getStorageInfoSync() {
    return tt.getStorageInfoSync();
  };

  swan.removeStorage = function removeStorage(object) {
    return tt.removeStorage(object);
  };

  swan.removeStorageSync = function removeStorageSync(key) {
    return tt.removeStorageSync(key);
  };

  swan.clearStorageSync = function clearStorageSync(object) {
    return tt.clearStorageSync(object);
  };

  // ///////////// 媒体 //////////////


  swan.previewImage = function previewImage(object) {
    return tt.previewImage(object);
  };

  swan.getImageInfo = function getImageInfo(object) {
    return tt.getImageInfo(object);
  };

  swan.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(object) {
    return tt.saveImageToPhotosAlbum(object);
  };

  swan.chooseImage = function chooseImage(object) {
    return tt.chooseImage(object);
  };

  swan.chooseAlbum = function chooseAlbum() {
    return console.warn('chooseAlbum is not support');
  };

  swan.compressImage = function compressImage(object) {
    return tt.compressImage(object);
  };

  return swan;
}();

exports.default = swan;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable camelcase */
/* harmony default export */ __webpack_exports__["default"] = (function (body, success, fail, complete) {
  try {
    return body(res => {
      if (success) {
        success(res)
      }
      if (complete) {
        complete(res)
      }
    }, res => {
      if (fail) {
        fail(res)
      }
      if (complete) {
        complete(res)
      }
    },)
  } catch (e) {
    const res = {
      errMsg: e.message
    }
    if (fail) {
      fail(res)
    }
    if (complete) {
      complete(res)
    }
    return null
  }
});


/***/ })

/******/ });