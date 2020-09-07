(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/active/circleActive"],{

/***/ 48:
/*!*****************************************************************************************************!*\
  !*** /Users/jack_wu/Documents/Code/wx_web/signapp/main.js?{"page":"pages%2Factive%2FcircleActive"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _circleActive = _interopRequireDefault(__webpack_require__(/*! ./pages/active/circleActive.vue */ 49));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_circleActive.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 49:
/*!**********************************************************************************!*\
  !*** /Users/jack_wu/Documents/Code/wx_web/signapp/pages/active/circleActive.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circleActive.vue?vue&type=template&id=6fc6e1f6& */ 50);
/* harmony import */ var _circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circleActive.vue?vue&type=script&lang=js& */ 52);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _circleActive_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circleActive.vue?vue&type=style&index=0&lang=css& */ 54);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/active/circleActive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/*!*****************************************************************************************************************!*\
  !*** /Users/jack_wu/Documents/Code/wx_web/signapp/pages/active/circleActive.vue?vue&type=template&id=6fc6e1f6& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./circleActive.vue?vue&type=template&id=6fc6e1f6& */ 51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_template_id_6fc6e1f6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 51:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/jack_wu/Documents/Code/wx_web/signapp/pages/active/circleActive.vue?vue&type=template&id=6fc6e1f6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 52:
/*!***********************************************************************************************************!*\
  !*** /Users/jack_wu/Documents/Code/wx_web/signapp/pages/active/circleActive.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./circleActive.vue?vue&type=script&lang=js& */ 53);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/jack_wu/Documents/Code/wx_web/signapp/pages/active/circleActive.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















































































































































































var _notify = _interopRequireDefault(__webpack_require__(/*! @/static/vant/notify/notify */ 44));
var _vuex = __webpack_require__(/*! vuex */ 8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =



{

  data: function data() {
    var currentDate = this.getDate({
      format: true });



    return {
      signFreqencePanle: [''],
      version: true,
      //teamId
      teamId: '',
      //时间段
      timeSeg: [1],
      timeInfo: [

      {
        //开始时间
        startTime: '',
        //结束时间
        endTime: '',
        start: 0,
        end: 23 }],



      //多功能面板开关
      multifunctionShow: false,
      // 多功能面板内容
      actions: [
      {
        name: '位置签到',
        id: 'location' }

      //  {
      // name: '循环签到',
      // id:'circle'
      //  }
      ],
      // 需要地理位置信息

      needLocation: false,
      //地理信息
      locationInfo: {
        name: '',
        address: '',
        longitude: '',
        latitude: '' },

      //签到频率 7天 工作日 节假日 自定义
      //签到频率页面显示
      //是否是循环签到
      isCircleSign: true,

      signFrequenceShow: [
      {
        name: "星期一",
        value: 0 },

      {
        name: "星期二",
        value: 0 },

      {
        name: "星期三",
        value: 0 },

      {
        name: "星期四",
        value: 0 },

      {
        name: "星期五",
        value: 0 },

      {
        name: "星期六",
        value: 0 },

      {
        name: "星期日",
        value: 0 }],



      isEidt: false,
      isDisply: [true, false, false, false, false],
      signName: '',
      signId: '',
      result: {
        name: "姓名",

        customer1: '',
        customer2: '',
        customer3: '',
        customer4: '',
        customer5: '' },



      description: '' //签到描述
    };

  },
  onShow: function onShow() {

  },
  onLoad: function onLoad(e) {var _this = this;
    //版本控制过审
    uni.request({
      url: getApp().globalData.webUrl + "/SIESign/changeView",
      method: "POST",
      success: function success(e) {
        console.log("version controll");
        console.log(e);
        _this.version = e.data;
      } });



    console.log("[active circleAtive] onload info:");
    var obj = this.stringToObj(e.teamInfo);
    console.log(obj);
    this.teamId = obj.teamId;


    this.getCurrentDate();
    var fullTime = this.dateInfo.date;
    var timeArray = fullTime.split(' ');
    // this.date = timeArray[0]
    var timeHandle = timeArray[1].split(":");
    // this.time =  ''+timeHandle[0]+":"+timeHandle[1]

    this.timeInfo[0].startTime = '' + timeHandle[0] + ":" + timeHandle[1];
    this.timeInfo[0].endTime = this.timeInfo[0].startTime;


    //判断是创建还是修改
    if (obj.signId != null) {
      console.log("修改");
      this.isEidt = true;
      console.log(obj);
      this.signId = obj.signId;
      this.signName = obj.signName;

      this.description = obj.description;

      this.timeInfo[0].startTime = obj.startTime1;
      this.timeInfo[0].endTime = obj.endTime1;

      if (obj.startTime2 != '' && obj.startTime2 != null) {
        var temp = {
          //开始时间
          startTime: '',
          //结束时间
          endTime: '',
          start: 0,
          end: 23 };

        this.timeInfo.push(temp);
        this.timeInfo[1].startTime = obj.startTime2;
        this.timeInfo[1].endTime = obj.endTime2;
      }
      if (obj.startTime3 != '' && obj.startTime3 != null) {
        var temp = {
          //开始时间
          startTime: '',
          //结束时间
          endTime: '',
          start: 0,
          end: 23 };

        this.timeInfo.push(temp);
        this.timeInfo[2].startTime = obj.startTime3;
        this.timeInfo[2].endTime = obj.endTime3;
      }

      if (obj.needLocation == '1') {
        this.needLocation = 1;
        this.locationInfo.name = obj.activeLocation;
        this.locationInfo.latitude = obj.locationX;
        this.locationInfo.longitude = obj.locationY;

      }

      if (obj.needCycle == '1') {

        this.signFrequenceShow[0].value = obj.monday;
        this.signFrequenceShow[1].value = obj.tuesday;
        this.signFrequenceShow[2].value = obj.wednesday;
        this.signFrequenceShow[3].value = obj.thursday;
        this.signFrequenceShow[4].value = obj.friday;
        this.signFrequenceShow[5].value = obj.saturday;
        this.signFrequenceShow[6].value = obj.sunday;
      }

      if (obj.signerMessage2) this.isDisply[2] = true;
      if (obj.signerMessage3) this.isDisply[3] = true;
      if (obj.signerMessage4) this.isDisply[4] = true;
      if (obj.signerMessage5) this.isDisply[5] = true;


      this.result.customer1 = obj.signerMessage2;
      this.result.customer2 = obj.signerMessage3;
      this.result.customer3 = obj.signerMessage4;
      this.result.customer4 = obj.signerMessage5;
      this.result.customer5 = obj.signerMessage6;


    } else {
      console.log("创建");
      this.getCurrentTimeMillionSecond();
      this.getWeekFromADate(this.dateInfo.millionSecond);


      var i = this.dateInfo.week;
      if (i == 0) {
        i == 6;
      } else {
        i--;
      }

      this.signFrequenceShow[i].value = 1;
      console.log(this.signFrequenceShow);

      this.isEidt = false;
    }

  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['dateInfo']), {
    startDate: function startDate() {
      return this.getDate('start');
    },
    endDate: function endDate() {
      return this.getDate('end');
    },
    getRequestDate: function getRequestDate() {

      var signName = this.signName;

      var description = ''; //描述
      description = this.description;

      //时间段
      var startTime1 = null;
      var endTime1 = null;
      var startTime2 = null;
      var endTime2 = null;
      var startTime3 = null;
      var endTime3 = null;
      for (var i = 0; i < this.timeInfo.length; i++) {
        if (i == 0) {
          startTime1 = this.timeInfo[i].startTime;
          endTime1 = this.timeInfo[i].endTime;
        }
        if (i == 1) {
          startTime2 = this.timeInfo[i].startTime;
          endTime2 = this.timeInfo[i].endTime;
        }
        if (i == 2) {
          startTime3 = this.timeInfo[i].startTime;
          endTime3 = this.timeInfo[i].endTime;
        }
      }


      //signerMessage1-6
      var signerMessage = [];
      // var signerMessage1 = '';
      // var signerMessage2 = '';
      // var signerMessage3 = '';
      // var signerMessage4 = '';
      // var signerMessage5 = '';
      // var signerMessage6 = '';

      signerMessage[0] = this.result.name;
      signerMessage[1] = this.result.customer1;
      signerMessage[2] = this.result.customer2;
      signerMessage[3] = this.result.customer3;
      signerMessage[4] = this.result.customer4;
      signerMessage[5] = this.result.customer5;


      //monday - sunday  int 需要周几签到，则传递该参数，value为1。否则不需要传递该参数
      //var weekenday = [];
      var monday = null;
      var tuesday = null;
      var wednesday = null;
      var thursday = null;
      var friday = null;
      var saturday = null;
      var sunday = null;

      if (this.isCircleSign) {
        monday = this.signFrequenceShow[0].value;
        tuesday = this.signFrequenceShow[1].value;
        wednesday = this.signFrequenceShow[2].value;
        thursday = this.signFrequenceShow[3].value;
        friday = this.signFrequenceShow[4].value;
        saturday = this.signFrequenceShow[5].value;
        sunday = this.signFrequenceShow[6].value;
      } else {
        monday = 0;
        tuesday = 0;
        wednesday = 0;
        thursday = 0;
        friday = 0;
        saturday = 0;
        sunday = 0;
      }


      //locationX
      var locationX = null;
      var locationY = null;
      locationX = this.locationInfo.latitude;
      locationY = this.locationInfo.longitude;

      //needLocation  int 需要位置信息则传递该参数，value为1。否则不需要传递该参数
      var needLocation = 0;

      if (this.needLocation) {
        needLocation = 1;

      } else {
        needLocation = 0;
      }


      // 需要循环签到则传递该参数，value为1。否则不需要传递该参数
      var needCycle = 0;
      if (this.isCircleSign) {
        needCycle = 1;
      }


      //需要签到的地理位置信息 地点名称。
      var activeLocation = '';
      activeLocation = this.locationInfo.name;

      //签到类型，单次签到为single，循环签到为cycle
      var type = 'cycle';


      return [signName, description,
      startTime1, endTime1,
      startTime2, endTime2,
      startTime3, endTime3,
      signerMessage[0], signerMessage[1],
      signerMessage[2], signerMessage[3],
      signerMessage[4], signerMessage[5],
      monday, tuesday, wednesday, thursday, friday, saturday, sunday,
      locationX, locationY,
      needLocation,
      needCycle,
      activeLocation,
      type];

    },
    getButtonText: function getButtonText() {
      if (this.isEidt) {
        return '修改活动信息';
      } else {
        return "创建活动";
      }
    } }),



  methods: _objectSpread({},
  (0, _vuex.mapMutations)(['logout', 'getCurrentDate', 'getCurrentTime', 'getCurrentTimeMillionSecond', 'getWeekFromADate']), {

    stringToObj: function stringToObj(objString) {
      return JSON.parse(decodeURIComponent(objString));
    },

    //签到频率选择
    signFrequenceHandler: function signFrequenceHandler(index) {
      this.signFrequenceShow[index].value ^= true;
      console.log(this.signFrequenceShow[index].value == true);
    },
    signFreqencePanleChange: function signFreqencePanleChange(e) {
      this.signFreqencePanle = e.detail;
    },

    // 活动名称
    textChanges: function textChanges(e) {
      this.signName = e.detail;
    },
    // 活动信息合法性判断
    clickHandler: function clickHandler(data) {
      console.log(this.signName);
      if (data == 1) {
        uni.showToast({
          title: "签到者姓名必选",
          icon: "none",
          duration: 1000 });

      } else
      if (data == 2) {

      }
      //判断活动是否合法
      else if (data == 3) {
          var time = this.timeInfo;
          var startTime1 = time[0].startTime;
          var endTime1 = time[0].endTime;
          try {
            var startTime2 = time[1].startTime;
            var endTime2 = time[1].endTime;
          }
          catch (e) {
            startTime2 = '';
            endTime2 = '';
          }

          try {
            var startTime3 = time[2].startTime;
            var endTime3 = time[2].endTime;
          }
          catch (e) {
            startTime3 = '';
            endTime3 = '';
          }

          var flag = true;

          if (this.signName == '') {
            this.showToast("活动名称不能为空~");
            flag = false;
          }


          if (startTime1 > endTime1) {
            this.showToast("时间段1 开始时间不能 > 结束时间");
            flag = false;
          }

          if (startTime2 != '' && startTime2 > endTime2) {
            this.showToast("时间段2 开始时间不能 > 结束时间");
            flag = false;
          }
          if (startTime3 != '' && startTime3 > endTime3) {
            this.showToast("时间段3 开始时间不能 > 结束时间");
            flag = false;
          }

          if (startTime2 != '' && endTime1 > startTime2) {
            this.showToast("时间段2 开始时间不能 < 时间段1 结束时间");
            flag = false;
          }

          if (startTime3 != '' && endTime2 > startTime3) {
            this.showToast("时间段3 开始时间不能 < 时间段2 结束时间");
            flag = false;
          }

          var tempFlag = false;
          for (var i = 0; i < this.signFrequenceShow.length; i++) {
            if (this.signFrequenceShow[i].value == true) {
              tempFlag = true;
            }
          }
          if (tempFlag) {

          } else {
            this.showToast("必须选择一个日期");
            flag = false;
          }

          if (flag) {
            console.log("[active circleActive] info :");

            this.SendRequst();

          }


        }
    },
    // 自定义信息字段
    textChangesHandler: function textChangesHandler(even) {
      console.log(even);
      var data = parseInt(even.currentTarget.id);
      var content = even.detail.value;
      if (data == 0) {
        console.log(content);
        if (content != '') {
          this.isDisply[data] = true;
          this.isDisply[data + 1] = true;
          console.log(this.isDisply);
        } else {

          if (this.result.customer2 != '') {
            this.result.customer1 = this.result.customer2;
            this.result.customer2 = '';
            this.isDisply[data + 1] = false;
            if (this.result.customer3 != '') {
              this.isDisply[data + 1] = true;
              this.result.customer2 = this.result.customer3;
              this.result.customer3 = '';
              this.isDisply[data + 2] = false;
              if (this.result.customer4 != '') {
                this.isDisply[data + 2] = true;
                this.result.customer3 = this.result.customer4;
                this.result.customer4 = '';
                this.isDisply[data + 3] = false;
              }
            }
          }


        }

      } else if (data == 1) {
        if (content != '') {
          this.isDisply[data] = true;
          this.isDisply[data + 1] = true;
        } else {
          if (this.result.customer3 != '') {
            this.result.customer2 = this.result.customer3;
            this.result.customer3 = '';
            this.isDisply[data + 1] = false;
            if (this.result.customer4 != '') {
              this.isDisply[data + 1] = true;
              this.result.customer3 = this.result.customer4;
              this.result.customer4 = '';
              this.isDisply[data + 2] = false;

            }
          }
        }
      } else if (data == 2) {
        if (content != '') {
          this.isDisply[data] = true;
          this.isDisply[data + 1] = true;
        } else {
          if (this.result.customer4 != '') {
            this.result.customer3 = this.result.customer4;
            this.result.customer4 = '';
            this.isDisply[data + 1] = false;
          }
        }
      } else if (data == 3) {
        if (content != '') {
          this.isDisply[data] = true;
          this.isDisply[data + 1] = true;
        } else {
          if (this.result.customer5 != '') {
            this.result.customer4 = this.result.customer5;
            this.result.customer5 = '';
            this.isDisply[data + 1] = false;
          }
        }
      } else
      if (data == 4) {
        (0, _notify.default)({
          type: 'warning',
          message: '最多自定义五个属性',
          duration: 1000 });

      }

    },
    // 发送请求
    SendRequst: function SendRequst() {var _this2 = this;
      uni.getStorage({
        key: "userInfo",
        success: function success(e) {
          var cookies = e.data.cookies;
          var reqData = _this2.getRequestDate;
          if (_this2.isEidt) {
            console.log("发送编辑请求");
            console.log(reqData);
            uni.request({
              url: getApp().globalData.webUrl + "/SIESign/updateSignCycle",
              header: {
                'Cookie': getApp().globalData.cookies },

              method: "POST",
              data: {
                signId: _this2.signId,
                teamId: _this2.teamId,
                signName: reqData[0],
                description: reqData[1],
                startTime1: reqData[2],
                endTime1: reqData[3],
                startTime2: reqData[4],
                endTime2: reqData[5],
                startTime3: reqData[6],
                endTime3: reqData[7],
                signerMessage1: reqData[8],
                signerMessage2: reqData[9],
                signerMessage3: reqData[10],
                signerMessage4: reqData[11],
                signerMessage5: reqData[12],
                signerMessage6: reqData[13],
                monday: reqData[14],
                tuesday: reqData[15],
                wednesday: reqData[16],
                thursday: reqData[17],
                friday: reqData[18],
                saturday: reqData[19],
                sunday: reqData[20],
                locationX: reqData[21],
                locationY: reqData[22],
                needLocation: reqData[23],
                needCycle: reqData[24],
                activeLocation: reqData[25],
                type: reqData[26] },

              success: function success(e) {
                console.log("修改：服务器传回");
                console.log(e);
                var status = e.data.code;
                var serverResponse = e.data.data;
                console.log(status);
                if (status == '20251') {

                  var signInfo = e.data.data;
                  var signInfoItems = {};
                  signInfoItems.activeLocation = signInfo.activeLocation;
                  signInfoItems.codeUrl = signInfo.codeUrl;
                  signInfoItems.createSignTime = signInfo.createSignTime;
                  signInfoItems.description = signInfo.description;

                  signInfoItems.startTime1 = signInfo.startTime1;
                  signInfoItems.startTime2 = signInfo.startTime2;
                  signInfoItems.startTime3 = signInfo.startTime3;

                  signInfoItems.endTime1 = signInfo.endTime1;
                  signInfoItems.endTime2 = signInfo.endTime2;
                  signInfoItems.endTime3 = signInfo.endTime3;


                  signInfoItems.needCycle = signInfo.needCycle;
                  signInfoItems.monday = signInfo.monday;
                  signInfoItems.tuesday = signInfo.tuesday;
                  signInfoItems.wednesday = signInfo.wednesday;
                  signInfoItems.thursday = signInfo.thursday;
                  signInfoItems.friday = signInfo.friday;
                  signInfoItems.saturday = signInfo.saturday;
                  signInfoItems.sunday = signInfo.sunday;

                  signInfoItems.needLocation = signInfo.needLocation;
                  signInfoItems.locationX = signInfo.locationX;
                  signInfoItems.locationY = signInfo.locationY;

                  signInfoItems.signId = signInfo.signId;
                  signInfoItems.signName = signInfo.signName;

                  signInfoItems.signerMessage1 = signInfo.signerMessage1;
                  signInfoItems.signerMessage2 = signInfo.signerMessage2;
                  signInfoItems.signerMessage3 = signInfo.signerMessage3;
                  signInfoItems.signerMessage4 = signInfo.signerMessage4;
                  signInfoItems.signerMessage5 = signInfo.signerMessage5;
                  signInfoItems.signerMessage6 = signInfo.signerMessage6;

                  signInfoItems.cycle = signInfo.cycle;
                  signInfoItems.teamId = _this2.teamId;

                  var objString = encodeURIComponent(JSON.stringify(signInfoItems));
                  uni.redirectTo({
                    url: "./circleActiveDisplay?signInfo=" + objString,
                    success: function success() {
                      uni.showToast({
                        title: "修改成功",
                        icon: "none",
                        duration: 100 });

                    } });



                } else if (status == '20452') {
                  uni.showToast({
                    title: " 对不起，权限不足",
                    icon: "none",
                    duration: 1500 });

                } else
                if (status == '20451') {
                  uni.showToast({
                    title: " 服务器繁忙，请稍后重试",
                    icon: "none",
                    duration: 1500 });

                } else
                if (status == '20444' || status == '40444') {
                  //登录状态过期
                  _this2.logout();
                  uni.switchTab({
                    url: "../mine/mine" });

                  uni.showToast({
                    title: "登录过期，重新登录",
                    icon: "none",
                    duration: 1500 });

                } else if (status == "24531") {
                  uni.showToast({
                    title: "没有创建权限",
                    icon: "none",
                    duration: 1500 });

                } else if (status == '22401') {
                  uni.showToast({
                    title: "服务器错误",
                    icon: "none",
                    duration: 1500 });

                } else {
                  console.log("未知状态码");
                }
              },
              fail: function fail(e) {
                console.log(e);
                uni.showToast({
                  title: "服务错误",
                  icon: "none",
                  duration: 500 });


              } });

          } else
          {
            console.log("发送创建请求");
            console.log(reqData);
            uni.request({
              url: getApp().globalData.webUrl + "/SIESign/createCycleSign",
              header: {
                'Cookie': getApp().globalData.cookies },

              data: {
                signId: _this2.signId,
                teamId: _this2.teamId,
                signName: reqData[0],
                description: reqData[1],
                startTime1: reqData[2],
                endTime1: reqData[3],
                startTime2: reqData[4],
                endTime2: reqData[5],
                startTime3: reqData[6],
                endTime3: reqData[7],
                signerMessage1: reqData[8],
                signerMessage2: reqData[9],
                signerMessage3: reqData[10],
                signerMessage4: reqData[11],
                signerMessage5: reqData[12],
                signerMessage6: reqData[13],
                monday: reqData[14],
                tuesday: reqData[15],
                wednesday: reqData[16],
                thursday: reqData[17],
                friday: reqData[18],
                saturday: reqData[19],
                sunday: reqData[20],
                locationX: reqData[21],
                locationY: reqData[22],
                needLocation: reqData[23],
                needCycle: reqData[24],
                activeLocation: reqData[25],
                type: reqData[26] },

              method: "Post",
              success: function success(e) {
                console.log("[active circleActive ]  info : ");
                console.log(e);
                var status = e.data.code;
                console.log(status);
                if (status == '22501') {

                  var signInfo = e.data.data;
                  var signInfoItems = {};
                  signInfoItems.activeLocation = signInfo.activeLocation;
                  signInfoItems.codeUrl = signInfo.codeUrl;
                  signInfoItems.createSignTime = signInfo.createSignTime;
                  signInfoItems.description = signInfo.description;

                  signInfoItems.startTime1 = signInfo.startTime1;
                  signInfoItems.startTime2 = signInfo.startTime2;
                  signInfoItems.startTime3 = signInfo.startTime3;

                  signInfoItems.endTime1 = signInfo.endTime1;
                  signInfoItems.endTime2 = signInfo.endTime2;
                  signInfoItems.endTime3 = signInfo.endTime3;


                  signInfoItems.needCycle = signInfo.needCycle;
                  signInfoItems.monday = signInfo.monday;
                  signInfoItems.tuesday = signInfo.tuesday;
                  signInfoItems.wednesday = signInfo.wednesday;
                  signInfoItems.thursday = signInfo.thursday;
                  signInfoItems.friday = signInfo.friday;
                  signInfoItems.saturday = signInfo.saturday;
                  signInfoItems.sunday = signInfo.sunday;

                  signInfoItems.needLocation = signInfo.needLocation;
                  signInfoItems.locationX = signInfo.locationX;
                  signInfoItems.locationY = signInfo.locationY;

                  signInfoItems.signId = signInfo.signId;
                  signInfoItems.signName = signInfo.signName;

                  signInfoItems.signerMessage1 = signInfo.signerMessage1;
                  signInfoItems.signerMessage2 = signInfo.signerMessage2;
                  signInfoItems.signerMessage3 = signInfo.signerMessage3;
                  signInfoItems.signerMessage4 = signInfo.signerMessage4;
                  signInfoItems.signerMessage5 = signInfo.signerMessage5;
                  signInfoItems.signerMessage6 = signInfo.signerMessage6;

                  signInfoItems.cycle = signInfo.cycle;

                  signInfoItems.teamId = _this2.teamId;

                  var objString = encodeURIComponent(JSON.stringify(signInfoItems));
                  uni.redirectTo({
                    url: "./circleActiveDisplay?signInfo=" + objString,
                    success: function success() {
                      uni.showToast({
                        title: "创建成功",
                        icon: "none",
                        duration: 100 });

                    } });


                } else if (status == '20444') {
                  //登录状态过期
                  _this2.logout();
                  uni.switchTab({
                    url: "../mine/mine",
                    success: function success() {
                      uni.showToast({
                        title: "登录过期，重新登录",
                        icon: "none",
                        duration: 1500 });

                    } });


                } else if (status == "24531") {
                  uni.showToast({
                    title: "没有创建权限",
                    icon: "none",
                    duration: 1500 });

                } else if (status == '22401') {
                  uni.showToast({
                    title: "服务器错误",
                    icon: "none",
                    duration: 1500 });

                } else {
                  console.log("未知状态码");
                }
              },
              fail: function fail(e) {
                console.log(e);
                uni.showToast({
                  title: "服务错误",
                  icon: "none",
                  duration: 500 });


              } });

          }


        },
        fail: function fail(e) {
          //用户未登录
          uni.switchTab({
            url: "../mine/mine" });

          uni.showToast({
            title: "请登录后重试",
            icon: "none",
            duration: 1500 });

        } });

    },

    // 时间处理函数	
    bindTimeChange: function bindTimeChange(event, index, type) {
      console.log(event);
      console.log(index);
      console.log(type);
      if (type == 'start') {
        this.timeInfo[index].startTime = event.detail.value;
        this.timeInfo[index].endTime = this.timeInfo[index].startTime;
        // this.timeInfo[index].start = this.timeInfo[index].startTime
      } else {
        this.timeInfo[index].endTime = event.detail.value;
      }

    },
    // 添加删除时间点
    timeClickHandler: function timeClickHandler(index, operate) {
      if (operate == 'delete') {
        var len = this.timeInfo.length;
        //最少一个，最多三个
        if (len <= 1) {
          (0, _notify.default)({ type: 'danger', message: '至少需要一个时间段' });
        } else {
          this.timeInfo.splice(len - 1, 1);
        }
      } else {
        var len = this.timeInfo.length;
        //最少一个，最多三个
        if (len >= 3) {
          (0, _notify.default)({ type: 'danger', message: '已到达时间段上限' });
        } else {
          var time = {};
          time.startTime = this.timeInfo[len - 1].endTime;
          time.endTime = time.startTime;
          time.start = time.startTime;
          time.end = 23;

          this.timeInfo.push(time);
          time = {};
        }
      }
    },
    getDate: function getDate(type) {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      if (type === 'start') {
        year = year - 0;
      } else if (type === 'end') {
        year = year + 2;
      }
      month = month > 9 ? month : '0' + month;;
      day = day > 9 ? day : '0' + day;
      return "".concat(year, "-").concat(month, "-").concat(day);
    },
    // 多功能面板打开
    multifunctionClickHandler: function multifunctionClickHandler(e) {

      if (e == 'multifunctionPanel') {
        this.multifunctionShow = true;
      } else if (e == 'needLocationInfo') {
        if (this.needLocation) {
          this.needLocation = false;
        } else {
          this.needLocation = true;
        }
      }

    },
    // 多功能面板关闭
    onClose: function onClose() {
      this.multifunctionShow = false;
    },
    // 多功能面板取消
    onCancel: function onCancel() {
      this.multifunctionShow = false;
    },
    // 多功能事件
    onSelect: function onSelect(event) {var _this3 = this;
      //选择的操作 location  or circle

      var choose = event.detail.id;

      //选择地理位置
      if (choose == 'location') {

        console.log("选择地理位置签到");
        uni.chooseLocation({
          success: function success(res) {
            (0, _notify.default)({ type: 'success', message: '签到需要地理信息' });
            _this3.locationInfo.name = res.name;
            _this3.locationInfo.address = res.address;
            _this3.locationInfo.latitude = res.latitude;
            _this3.locationInfo.longitude = res.longitude;
            _this3.needLocation = true;
            console.log('位置名称：' + res.name);
            console.log('详细地址：' + res.address);
            console.log('纬度：' + res.latitude);
            console.log('经度：' + res.longitude);
          },
          fail: function fail(res) {
            (0, _notify.default)({ type: 'danger', message: '取消选择，签到不需要地理信息' });
            _this3.locationInfo = {};
            _this3.needLocation = false;
          } });

      }
      //选择循环签到
      else if (choose == 'circle') {
          // console.log("选择循环签到")
          // this.isCircleSign ^= true;
        }

    },
    //时间选择
    onInput: function onInput(event) {
      this.timeInfo[0].currentTime = event.detail;
    },
    showToast: function showToast(msg) {
      uni.showToast({
        title: msg,
        icon: "none",
        duration: 1000 });

    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 54:
/*!*******************************************************************************************************************!*\
  !*** /Users/jack_wu/Documents/Code/wx_web/signapp/pages/active/circleActive.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./circleActive.vue?vue&type=style&index=0&lang=css& */ 55);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_circleActive_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/jack_wu/Documents/Code/wx_web/signapp/pages/active/circleActive.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[48,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/active/circleActive.js.map