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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
Component({
  properties: {
    // 在哪个目标上发生跳转，默认当前小程序
    target: {
      type: String,
      value: 'self'
    },
    // 当前小程序内的跳转链接
    url: {
      type: String
    },
    redirect: {
      type: Boolean
    },
    // 跳转方式
    openType: {
      type: String,
      value: 'navigate'
    },
    // 当 open-type 为 'navigateBack' 时有效，表示回退的层数
    delta: {
      type: Number,
      value: 1
    },
    // 当target="miniProgram"时有效，要打开的小程序 appId
    appId: {
      type: String
    },
    path: {
      type: String
    },
    extraData: {
      type: Object
    },
    version: {
      type: String,
      value: 'release'
    },
    hoverClass: {
      type: String,
      value: 'navigator-hover'
    },
    hoverStartTime: {
      type: Number,
      value: 50
    },
    hoverStayTime: {
      type: Number,
      value: 600
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    bindsuccess: {
      type: String
    },
    bindfail: {
      type: String
    },
    bindcomplete: {
      type: String
    },

    // 这里定义了 headerText 属性，属性值可以在组件使用时指定
    headerText: {
      type: String,
      value: '默认值'
    }
  },
  data: {
    // 组件内部数据
    defaultStates: {}
  },
  methods: {
    // 自定义方法
    view_tap: function view_tap() {
      console.log('dddddd', this.properties.openType);
      // const app_id = this.properties.appId
      var version = this.properties.version;

      // console.log('appid:', app_id)
      console.log('version:', version);
      // switch (this.properties.target) {
      //   case 'self':
      //     this._target_self()
      //     break

      //   case 'miniProgram':
      //     console.log('aaa')
      //     this._target_miniProgram()
      //     break
      // }
    },
    _target_self: function _target_self() {
      var url = this.properties.url;
      switch (this.properties.openType) {
        case 'redirectTo':
          tt.redirectTo({
            url: url
          });
          break;
        case 'navigateBack':
          tt.navigateBack();
          break;
        case 'navigate':
          if (this.properties.redirect) {
            console.log('sss');
            tt.redirectTo({
              url: url

            });
          } else {
            tt.navigateTo({
              url: url
            });
          }

          break;
        default:
          break;
      }
    },
    _target_miniProgram: function _target_miniProgram() {
      var appId = this.properties.appId;
      console.log('xxxxx:', appId);
      //  "tta6cdd07039e72db5"
      tt.navigateToMiniProgram({
        appId: 'tta6cdd07039e72db5',
        success: function success(e) {
          console.log('ddddd', e);
        },
        fail: function fail(e) {
          console.log(e);
        }
      });
    }
  }

});

/***/ })

/******/ });