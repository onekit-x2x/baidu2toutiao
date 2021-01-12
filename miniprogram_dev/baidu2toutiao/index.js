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

var _CameraContext = __webpack_require__(48);

var _CameraContext2 = _interopRequireDefault(_CameraContext);

var _RecorderManager = __webpack_require__(49);

var _RecorderManager2 = _interopRequireDefault(_RecorderManager);

var _VideoContext = __webpack_require__(50);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _LivePlayerContext = __webpack_require__(51);

var _LivePlayerContext2 = _interopRequireDefault(_LivePlayerContext);

var _MapContext = __webpack_require__(52);

var _MapContext2 = _interopRequireDefault(_MapContext);

var _RewardedVideoAd = __webpack_require__(53);

var _RewardedVideoAd2 = _interopRequireDefault(_RewardedVideoAd);

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

  swan.chooseAlbum = function chooseAlbum(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      tt.chooseImage({
        success: function success(tt_res) {
          var tt_tempFiles = tt_res.tempFiles.map(function (file) {
            return {
              path: file.path,
              size: file.size,
              type: 'image',
              duration: 0

            };
          });
          var swan_res = {
            tempFilePaths: tt_res.tempFilePaths,
            tempFiles: tt_tempFiles
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.compressImage = function compressImage(object) {
    return tt.compressImage(object);
  };

  // ///////////// camera //////////////


  swan.createCameraContext = function createCameraContext() {
    return new _CameraContext2.default(tt.createCameraContext());
  };

  swan.createARCameraContext = function createARCameraContext() {
    return console.warn('createARCameraContext is not support');
  };

  // ///////////// BackgroundAudio //////////////


  swan.getBackgroundAudioManager = function getBackgroundAudioManager() {
    return tt.getBackgroundAudioManager();
  };

  swan.createInnerAudioContext = function createInnerAudioContext() {
    return tt.createInnerAudioContext();
  };

  swan.setInnerAudioOption = function setInnerAudioOption() {
    return console.warn('setInnerAudioOption is not support');
  };

  // ///////////// BackgroundAudio //////////////


  swan.getRecorderManager = function getRecorderManager() {
    return new _RecorderManager2.default(tt.getRecorderManager());
  };

  swan.getAvailableAudioSources = function getAvailableAudioSources() {
    return console.warn('getAvailableAudioSources is not support');
  };

  // ///////////// Video //////////////


  swan.chooseVideo = function chooseVideo(object) {
    return tt.chooseVideo(object);
  };

  swan.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(object) {
    return tt.saveVideoToPhotosAlbum(object);
  };

  swan.createVideoContext = function createVideoContext(videoId) {
    return new _VideoContext2.default(tt.createVideoContext(videoId));
  };

  swan.createAnimationVideo = function createAnimationVideo() {
    return console.warn('createAnimationVideo is not support');
  };

  swan.createLivePlayerContext = function createLivePlayerContext(domId) {
    return new _LivePlayerContext2.default(tt.createLivePlayerContext(domId));
  };

  swan.createRtcRoomContext = function createRtcRoomContext() {
    return console.warn('createRtcRoomContext is not support');
  };

  // ///////////// location //////////////


  swan.getLocation = function getLocation(object) {
    return tt.chooseVideo(object);
  };

  swan.openLocation = function openLocation(object) {
    return tt.openLocation(object);
  };

  swan.chooseLocation = function chooseLocation(object) {
    return tt.chooseLocation(object);
  };

  swan.startLocationUpdate = function startLocationUpdate() {
    return console.warn('startLocationUpdate is not support');
  };

  swan.onLocationChange = function onLocationChange() {
    return console.warn('onLocationChange is not support');
  };

  swan.offLocationChange = function offLocationChange() {
    return console.warn('offLocationChange is not support');
  };

  swan.stopLocationUpdate = function stopLocationUpdate() {
    return console.warn('stopLocationUpdate is not support');
  };

  swan.createMapContext = function createMapContext(mapId) {
    return new _MapContext2.default(tt.createMapContext(mapId));
  };

  swan.createCanvasContext = function createCanvasContext() {
    return console.warn('createCanvasContext is not support');
  };

  swan.canvasPutImageData = function canvasPutImageData() {
    return console.warn('canvasPutImageData is not support');
  };

  swan.canvasGetImageData = function canvasGetImageData() {
    return console.warn('canvasGetImageData is not support');
  };

  swan.canvasToTempFilePath = function canvasToTempFilePath() {
    return console.warn('canvasToTempFilePath is not support');
  };

  // ///////////// file //////////////


  swan.saveFile = function saveFile(object) {
    return tt.saveFile(object);
  };

  swan.getFileInfo = function getFileInfo(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      tt.getFileInfo({
        success: function success(tt_res) {
          var swan_res = {
            size: tt_res.size,
            digest: ''
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.getSavedFileList = function getSavedFileList(object) {
    return tt.getSavedFileList(object);
  };

  swan.getSavedFileInfo = function getSavedFileInfo(swan_object) {
    var swan_filePath = swan_object.filePath;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var filePath = swan_filePath;
      tt.getFileInfo({
        filePath: filePath,
        success: function success(tt_res) {
          var swan_res = {
            size: tt_res.size,
            createTime: new Date().getTime()
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.removeSavedFile = function removeSavedFile(object) {
    return tt.removeSavedFile(object);
  };

  swan.openDocument = function openDocument(object) {
    return tt.openDocument(object);
  };

  swan.getFileSystemManager = function getFileSystemManager() {
    return tt.getFileSystemManager();
  };

  // ///////////// 设备 //////////////


  swan.getSystemInfo = function getSystemInfo(object) {
    return tt.getSystemInfo(object);
  };

  swan.getSystemInfoSync = function getSystemInfoSync() {
    return tt.getSystemInfoSync();
  };

  swan.getEnvInfoSync = function getEnvInfoSync() {
    return console.warn('getEnvInfoSync is not support');
  };

  swan.getNetworkType = function getNetworkType(object) {
    return tt.getNetworkType(object);
  };

  swan.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return tt.onNetworkStatusChange(callback);
  };

  swan.setScreenBrightness = function setScreenBrightness(object) {
    return tt.setScreenBrightness(object);
  };

  swan.getScreenBrightness = function getScreenBrightness(object) {
    return tt.getScreenBrightness(object);
  };

  swan.setKeepScreenOn = function setKeepScreenOn(object) {
    return tt.setKeepScreenOn(object);
  };

  swan.makePhoneCall = function makePhoneCall(object) {
    return tt.makePhoneCall(object);
  };

  swan.vibrateLong = function vibrateLong(object) {
    return tt.vibrateLong(object);
  };

  swan.vibrateShort = function vibrateShort(object) {
    return tt.vibrateShort(object);
  };

  swan.setClipboardData = function setClipboardData(object) {
    return tt.vibrateShort(object);
  };

  swan.getClipboardData = function getClipboardData(object) {
    return tt.getClipboardData(object);
  };

  swan.scanCode = function scanCode(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      tt.scanCode({
        success: function success(tt_res) {
          var swan_res = {
            result: tt_res.result,
            scanType: 'QR_CODE',
            charSet: 'GBK'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.onAccelerometerChange = function onAccelerometerChange(object) {
    return tt.onAccelerometerChange(object);
  };

  swan.startAccelerometer = function startAccelerometer(object) {
    return tt.startAccelerometer(object);
  };

  swan.stopAccelerometer = function stopAccelerometer(object) {
    return tt.stopAccelerometer(object);
  };

  swan.onCompassChange = function onCompassChange(object) {
    return tt.onCompassChange(object);
  };

  swan.startCompass = function startCompass(object) {
    return tt.startCompass(object);
  };

  swan.stopCompass = function stopCompass(object) {
    return tt.stopCompass(object);
  };

  swan.onDeviceMotionChange = function onDeviceMotionChange() {
    return console.warn('onDeviceMotionChange is not support');
  };

  swan.startDeviceMotionListening = function startDeviceMotionListening() {
    return console.warn('startDeviceMotionListening is not support');
  };

  swan.stopDeviceMotionListening = function stopDeviceMotionListening() {
    return console.warn('stopDeviceMotionListening is not support');
  };

  swan.onMemoryWarning = function onMemoryWarning(object) {
    return tt.onMemoryWarning(object);
  };

  swan.addPhoneContact = function addPhoneContact() {
    return console.warn('addPhoneContact is not support');
  };

  swan.getBatteryInfo = function getBatteryInfo(object) {
    return tt.getBatteryInfo(object);
  };

  swan.getBatteryInfoSync = function getBatteryInfoSync(object) {
    return tt.getBatteryInfoSync(object);
  };

  swan.onUserCaptureScreen = function onUserCaptureScreen(callback) {
    return tt.onUserCaptureScreen(callback);
  };

  swan.addEventOnCalendar = function addEventOnCalendar() {
    return console.warn('addEventOnCalendar is not support');
  };

  swan.deleteEventOnCalendar = function deleteEventOnCalendar() {
    return console.warn('deleteEventOnCalendar is not support');
  };

  swan.onKeyboardHeightChange = function onKeyboardHeightChange() {
    return console.warn('onKeyboardHeightChange is not support');
  };

  swan.offKeyboardHeightChange = function offKeyboardHeightChange() {
    return console.warn('offKeyboardHeightChange is not support');
  };

  // ///////////// 第三方平台 //////////////


  swan.getExtConfig = function getExtConfig(object) {
    return tt.getExtConfig(object);
  };

  swan.getExtConfigSync = function getExtConfigSync(object) {
    return tt.getExtConfigSync(object);
  };

  // ///////////// 开放接口 //////////////


  swan.login = function login(object) {
    return tt.login(object);
  };

  swan.checkSession = function checkSession(object) {
    return tt.checkSession(object);
  };

  swan.isLoginSync = function isLoginSync() {
    if (tt.login()) {
      var swan_res1 = {
        isLogin: true
      };
      return swan_res1;
    } else {
      var swan_res2 = {
        isLogin: false
      };
      return swan_res2;
    }
  };

  swan.authorize = function authorize(object) {
    return tt.authorize(object);
  };

  swan.openSetting = function openSetting(object) {
    return tt.openSetting(object);
  };

  swan.getSetting = function getSetting(object) {
    return tt.getSetting(object);
  };

  // static requestPolymerPayment(object) {
  //   return tt.pay(object)
  // }

  swan.setPageInfo = function setPageInfo() {
    return console.warn('setPageInfo is not support');
  };

  swan.setMetaDescription = function setMetaDescription() {
    return console.warn('setMetaDescription is not support');
  };

  swan.setMetaKeywords = function setMetaKeywords() {
    return console.warn('setMetaKeywords is not support');
  };

  swan.setDocumentTitle = function setDocumentTitle() {
    return console.warn('setDocumentTitle is not support');
  };

  swan.loadSubPackage = function loadSubPackage(swan_object) {
    var swan_root = swan_object.root;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var name = swan_root;
      tt.loadSubPackage({
        name: name,
        success: function success() {
          var swan_res = {
            errMsg: 'loadSubPackage: ok'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.reportAnalytics = function reportAnalytics(eventName, data) {
    return tt.reportAnalytics(eventName, data);
  };

  swan.getSystemRiskInfo = function getSystemRiskInfo() {
    return console.warn('getSystemRiskInfo is not support');
  };

  swan.subscribeService = function subscribeService(swan_object) {
    var swan_templateId = swan_object.templateId;
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var tmplIds = [swan_templateId];
      tt.requestSubscribeMessage({
        tmplIds: tmplIds,
        success: function success() {
          var swan_res = {
            errMsg: 'requestSubscribeMessage: ok',
            TEMPLATE_ID: 'accept'
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.insertBookshelf = function insertBookshelf() {
    return console.warn('insertBookshelf is not support');
  };

  swan.deleteBookshelf = function deleteBookshelf() {
    return console.warn('deleteBookshelf is not support');
  };

  swan.queryBookshelf = function queryBookshelf() {
    return console.warn('queryBookshelf is not support');
  };

  swan.updateBookshelfReadTime = function updateBookshelfReadTime() {
    return console.warn('updateBookshelfReadTime is not support');
  };

  swan.navigateToBookshelf = function navigateToBookshelf() {
    return console.warn('navigateToBookshelf is not support');
  };

  swan.openBdboxWebview = function openBdboxWebview() {
    return tt.openAwemeUserProfile();
  };

  // ///////////// 用户接口 //////////////


  swan.getSwanId = function getSwanId() {
    return console.warn('getSwanId is not support');
  };

  // static getUserInfo(object) {
  //   return tt.getUserInfo(object)
  // }

  swan.openShare = function openShare() {
    return console.warn('openShare is not support');
  };

  swan.shareFile = function shareFile() {
    return console.warn('shareFile is not support');
  };

  swan.navigateToSmartProgram = function navigateToSmartProgram() {
    return console.warn('navigateToSmartProgram is not support');
  };

  swan.navigateBackSmartProgram = function navigateBackSmartProgram() {
    return console.warn('navigateBackSmartProgram is not support');
  };

  swan.chooseAddress = function chooseAddress(swan_object) {
    var swan_success = swan_object.success;
    var swan_fail = swan_object.fail;
    var swan_complete = swan_object.complete;
    swan_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      tt.chooseAddress({
        success: function success(tt_res) {
          var swan_res = {
            postalCode: '',
            provinceCode: '',
            cityCode: '',
            countyCode: '',
            townCode: '',
            nationalCode: '',
            userName: tt_res.userName,
            provinceName: tt_res.provinceName,
            cityName: tt_res.cityName,
            countyName: tt_res.countyName,
            detailInfo: tt_res.detailInfo,
            telNumber: tt_res.telNumber
          };
          SUCCESS(swan_res);
        }
      });
    }, swan_success, swan_fail, swan_complete);
  };

  swan.chooseInvoiceTitle = function chooseInvoiceTitle() {
    return console.warn('chooseInvoiceTitle is not support');
  };

  swan.openCommunityEditor = function openCommunityEditor() {
    return console.warn('openCommunityEditor is not support');
  };

  swan.closeCommunityEditor = function closeCommunityEditor() {
    return console.warn('closeCommunityEditor is not support');
  };

  swan.openReplyEditor = function openReplyEditor() {
    return console.warn('openReplyEditor is not support');
  };

  swan.closeReplyEditor = function closeReplyEditor() {
    return console.warn('closeReplyEditor is not support');
  };

  // ///////////// RewardedVideoAd //////////////


  swan.createRewardedVideoAd = function createRewardedVideoAd(swan_object) {
    var tt_object = {
      adUnitId: swan_object.adUnitId
    };
    return new _RewardedVideoAd2.default(tt.createRewardedVideoAd(tt_object));
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


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CameraContext = function () {
  function CameraContext(toutiaoCameraContext) {
    _classCallCheck(this, CameraContext);

    this.toutiaoCameraContext = toutiaoCameraContext;
  }

  // eslint-disable-next-line class-methods-use-this


  CameraContext.prototype.takePhoto = function takePhoto() {
    return true;
  };

  // eslint-disable-next-line class-methods-use-this


  CameraContext.prototype.startRecord = function startRecord() {
    return true;
  };

  // eslint-disable-next-line class-methods-use-this


  CameraContext.prototype.stopRecord = function stopRecord() {
    return true;
  };

  return CameraContext;
}();

exports.default = CameraContext;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
var RecorderManager = function () {
  function RecorderManager(toutiaoRecorderManager) {
    _classCallCheck(this, RecorderManager);

    this.toutiaoRecorderManager = toutiaoRecorderManager;
  }

  RecorderManager.prototype.start = function start() {
    return this.toutiaoRecorderManager.start();
  };

  RecorderManager.prototype.pause = function pause() {
    return this.toutiaoRecorderManager.pause();
  };

  RecorderManager.prototype.resume = function resume() {
    return this.toutiaoRecorderManager.resume();
  };

  RecorderManager.prototype.stop = function stop() {
    return this.toutiaoRecorderManager.stop();
  };

  RecorderManager.prototype.onStart = function onStart(callback) {
    return this.toutiaoRecorderManager.onStart(callback);
  };

  RecorderManager.prototype.onPause = function onPause(callback) {
    return this.toutiaoRecorderManager.onPause(callback);
  };

  RecorderManager.prototype.onStop = function onStop(callback) {
    return this.toutiaoRecorderManager.onStop(callback);
  };

  RecorderManager.prototype.onError = function onError(callback) {
    return this.toutiaoRecorderManager.onError(callback);
  };

  RecorderManager.prototype.onResume = function onResume(callback) {
    return this.toutiaoRecorderManager.onResume(callback);
  };

  RecorderManager.prototype.onInterruptionBegin = function onInterruptionBegin() {
    return console.warn('onInterruptionBegin is not support');
  };

  RecorderManager.prototype.onInterruptionEnd = function onInterruptionEnd() {
    return console.warn('onInterruptionBegin is not support');
  };

  return RecorderManager;
}();

exports.default = RecorderManager;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContext = function () {
  function VideoContext(toutiaoVideoContext) {
    _classCallCheck(this, VideoContext);

    this.toutiaoVideoContext = toutiaoVideoContext;
  }

  VideoContext.prototype.play = function play() {
    return this.toutiaoVideoContext.play();
  };

  VideoContext.prototype.pause = function pause() {
    return this.toutiaoVideoContext.pause();
  };

  VideoContext.prototype.seek = function seek(position) {
    return this.toutiaoVideoContext.seek(position);
  };

  // sendDanmu() {
  //   return this.toutiaoVideoContext.play()
  // }

  VideoContext.prototype.requestFullScreen = function requestFullScreen(object) {
    return this.toutiaoVideoContext.requestFullScreen(object);
  };

  VideoContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.toutiaoVideoContext.exitFullScreen();
  };

  // showStatusBar() {
  //   return this.toutiaoVideoContext.showStatusBar()
  // }

  // hideStatusBar() {
  //   return this.toutiaoVideoContext.hideStatusBar()
  // }

  VideoContext.prototype.stop = function stop() {
    return this.toutiaoVideoContext.stop();
  };

  // playbackRate(rate) {
  //   return this.toutiaoVideoContext.playbackRate(rate)
  // }


  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LivePlayerContext = function () {
  function LivePlayerContext(toutiaoLivePlayerContext) {
    _classCallCheck(this, LivePlayerContext);

    this.toutiaoLivePlayerContext = toutiaoLivePlayerContext;
  }

  LivePlayerContext.prototype.play = function play(object) {
    return this.toutiaoLivePlayerContext.play(object);
  };

  LivePlayerContext.prototype.pause = function pause(object) {
    return this.toutiaoLivePlayerContext.stop(object);
  };

  LivePlayerContext.prototype.mute = function mute(object) {
    return this.toutiaoLivePlayerContext.mute(object);
  };

  LivePlayerContext.prototype.resume = function resume(object) {
    return this.toutiaoLivePlayerContext.play(object);
  };

  LivePlayerContext.prototype.requestFullScreen = function requestFullScreen(object) {
    return this.toutiaoLivePlayerContext.requestFullScreen(object);
  };

  LivePlayerContext.prototype.exitFullScreen = function exitFullScreen(object) {
    return this.toutiaoLivePlayerContext.exitFullScreen(object);
  };

  LivePlayerContext.prototype.stop = function stop(object) {
    return this.toutiaoLivePlayerContext.stop(object);
  };

  return LivePlayerContext;
}();

exports.default = LivePlayerContext;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
var MapContext = function () {
  function MapContext(toutiaoMapContext) {
    _classCallCheck(this, MapContext);

    this.toutiaoMapContext = toutiaoMapContext;
  }

  MapContext.prototype.includePoints = function includePoints() {
    return console.warn('includePoints is not support');
  };

  MapContext.prototype.getCenterLocation = function getCenterLocation(object) {
    return this.toutiaoMapContext.getCenterLocation(object);
  };

  MapContext.prototype.translateMarker = function translateMarker() {
    return console.warn('translateMarker is not support');
  };

  MapContext.prototype.moveToLocation = function moveToLocation(object) {
    return this.toutiaoMapContext.moveToLocation(object);
  };

  MapContext.prototype.getRegion = function getRegion(object) {
    return this.toutiaoMapContext.getRegion(object);
  };

  MapContext.prototype.getScale = function getScale(object) {
    return this.toutiaoMapContext.getScale(object);
  };

  return MapContext;
}();

exports.default = MapContext;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RewardedVideoAd = function () {
  function RewardedVideoAd(toutiaoRewardedVideoAd) {
    _classCallCheck(this, RewardedVideoAd);

    this.toutiaoRewardedVideoAd = toutiaoRewardedVideoAd;
  }

  RewardedVideoAd.prototype.load = function load() {
    return this.toutiaoRewardedVideoAd.load();
  };

  // show() {
  //   return this.toutiaoRewardedVideoAd.load()
  // }


  RewardedVideoAd.prototype.onLoad = function onLoad(callback) {
    return this.toutiaoRewardedVideoAd.onLoad(callback);
  };

  RewardedVideoAd.prototype.offLoad = function offLoad(callback) {
    return this.toutiaoRewardedVideoAd.offLoad(callback);
  };

  RewardedVideoAd.prototype.onClose = function onClose(callback) {
    return this.toutiaoRewardedVideoAd.onClose(callback);
  };

  RewardedVideoAd.prototype.offClose = function offClose(callback) {
    return this.toutiaoRewardedVideoAd.offClose(callback);
  };

  RewardedVideoAd.prototype.onError = function onError(callback) {
    return this.toutiaoRewardedVideoAd.onError(callback);
  };

  RewardedVideoAd.prototype.offError = function offError(callback) {
    return this.toutiaoRewardedVideoAd.offError(callback);
  };

  return RewardedVideoAd;
}();

exports.default = RewardedVideoAd;

/***/ })

/******/ });