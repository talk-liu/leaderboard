exports.ids = [15,3,5,9,11];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("51936be6", content, true, context)
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/userButton.81b6ca3.png";

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setuser_vue_vue_type_style_index_0_id_7cc6c995_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setuser_vue_vue_type_style_index_0_id_7cc6c995_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setuser_vue_vue_type_style_index_0_id_7cc6c995_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setuser_vue_vue_type_style_index_0_id_7cc6c995_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setuser_vue_vue_type_style_index_0_id_7cc6c995_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(105);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".setUser[data-v-7cc6c995]{position:relative;height:100vh}.setUser ul[data-v-7cc6c995]{color:#40dd84;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);width:700px}.setUser ul .linear[data-v-7cc6c995]{background:linear-gradient(89.96deg,rgba(64,221,132,0) -1.12%,#40dd84 32.05%,#fff 46.79%,#40dd84 59.43%,rgba(64,221,132,0) 99.97%);height:1px}.setUser ul li[data-v-7cc6c995]{text-align:center}.setUser ul li h4[data-v-7cc6c995]{font-size:24px;margin:16px 0 21px}.setUser ul li h5[data-v-7cc6c995]{font-size:18px;margin:7px 0 10px;font-weight:100}.setUser ul li div input[data-v-7cc6c995]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:230px;height:53px;display:inline-block;line-height:53px;outline:none;text-align:center;font-size:24px;border:none;color:#fff;padding:0 60px}.setUser ul .tips[data-v-7cc6c995]{margin-top:17px}.setUser ul .tips p[data-v-7cc6c995]{font-size:14px;color:#fff}.setUser ul .tips span[data-v-7cc6c995]{margin-top:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Setuser.vue?vue&type=template&id=7cc6c995&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"setUser"},[_vm._ssrNode("<div class=\"container\" data-v-7cc6c995><ul data-v-7cc6c995><li data-v-7cc6c995><p class=\"linear\" data-v-7cc6c995></p> <h4 data-v-7cc6c995>SET USERNAME</h4> <div data-v-7cc6c995><input data-v-7cc6c995></div> <h5 data-v-7cc6c995>Username Available</h5> <p class=\"linear\" data-v-7cc6c995></p></li> <li class=\"tips\" data-v-7cc6c995><p data-v-7cc6c995>The username will be linked to your GAIA Wallet address, you cannot change your username once set.</p> <span class=\"confirm\" data-v-7cc6c995>CONFIRM</span></li></ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Setuser.vue?vue&type=template&id=7cc6c995&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Setuser.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Setuservue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  async mounted() {},

  methods: {}
});
// CONCATENATED MODULE: ./components/Setuser.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Setuservue_type_script_lang_js_ = (Setuservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Setuser.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Setuservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7cc6c995",
  "3120aade"
  
)

/* harmony default export */ var Setuser = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/modify.vue?vue&type=template&id=a912a60e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Heads'),_vm._ssrNode(" "),_c('Setuser')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/modify.vue?vue&type=template&id=a912a60e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/modify.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var modifyvue_type_script_lang_js_ = ({
  name: 'IndexPage'
});
// CONCATENATED MODULE: ./pages/modify.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_modifyvue_type_script_lang_js_ = (modifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/modify.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_modifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5e1b73bc"
  
)

/* harmony default export */ var modify = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Heads: __webpack_require__(68).default,Setuser: __webpack_require__(146).default})


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/propr.2113bd4.png";

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB3dFBDYAwDAXQSUACEpAwCTgACUiYNBwgYRKQUDayJU2T362cyJr0tOZl7Xful0VEPndjZk69pp7QQK1NAWKZ2RESECSAC/4EQSYAQMEMAMgOsBVuhhxfgLpClDeyAu8KpKTWBbC3PogaKQjIa8hJSgoFygdf3Jj1AGJ+P0Ij9/rsAAAAAElFTkSuQmCC"

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("121095a8", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("87940d26", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b42da8a8", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eth.5112b16.png";

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.f753faf.png";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.c6bcfc6.png";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo1.10b06ca.png";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/button2.db0f19c.png";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/button1.30dda50.png";

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_style_index_0_id_82f36b08_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_style_index_0_id_82f36b08_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_style_index_0_id_82f36b08_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_style_index_0_id_82f36b08_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_style_index_0_id_82f36b08_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(44);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".switchGame[data-v-82f36b08]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-82f36b08],.switchGame .switchGameBox[data-v-82f36b08]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-82f36b08]{z-index:12;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:462px;padding-bottom:40px}.switchGame .switchGameBox h4[data-v-82f36b08]{margin-top:26px;padding:0 60px;font-size:20px}.switchGame .switchGameBox h4 img[data-v-82f36b08]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox .confirmationBox[data-v-82f36b08]{padding:0 72px}.switchGame .switchGameBox .confirmationBox div[data-v-82f36b08]{display:flex;justify-content:space-between;align-items:center;margin-top:36px}.switchGame .switchGameBox .confirmationBox p[data-v-82f36b08]{font-size:18px;color:#fff;margin-top:32px;text-align:center}.switchGame .switchGameBox .confirmationBox p img[data-v-82f36b08]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wallet-2.e79073e.png";

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Singin_vue_vue_type_style_index_0_id_52736254_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Singin_vue_vue_type_style_index_0_id_52736254_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Singin_vue_vue_type_style_index_0_id_52736254_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Singin_vue_vue_type_style_index_0_id_52736254_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Singin_vue_vue_type_style_index_0_id_52736254_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(44);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".switchGame[data-v-52736254]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-52736254],.switchGame .switchGameBox[data-v-52736254]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-52736254]{z-index:12;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:462px;padding-bottom:40px}.switchGame .switchGameBox h4[data-v-52736254]{margin-top:26px;padding:0 60px;font-size:20px}.switchGame .switchGameBox h4 img[data-v-52736254]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div[data-v-52736254]{padding:0 50px 60px}.switchGame .switchGameBox div p[data-v-52736254]{margin-top:60px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Confirmation.vue?vue&type=template&id=82f36b08&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.switchGameBoll)?_c('div',{staticClass:"switchGame"},[_vm._ssrNode("<div class=\"switchGameBox\" data-v-82f36b08><h4 data-v-82f36b08>\n      Link Confirmation\n      <img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" data-v-82f36b08></h4> <div class=\"confirmationBox\" data-v-82f36b08><div data-v-82f36b08><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" data-v-82f36b08> <img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" data-v-82f36b08> <img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" data-v-82f36b08></div> <p data-v-82f36b08>\n        You will be redirected to our\n        Exchange Partner RioStox.\n      </p> <p data-v-82f36b08><a data-v-82f36b08><img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" data-v-82f36b08></a> <a target=\"_blank\" href=\"https://riostox.com/\" data-v-82f36b08><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" data-v-82f36b08></a></p></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup/Confirmation.vue?vue&type=template&id=82f36b08&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Confirmation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Confirmationvue_type_script_lang_js_ = ({
  data() {
    return {
      switchGameBoll: false,
      tokens: [{
        img: __webpack_require__(23),
        name: 'RFUEL'
      }, {
        img: __webpack_require__(50),
        name: 'ETH'
      }, {
        img: __webpack_require__(24),
        name: 'USDT'
      }]
    };
  },

  methods: {
    switchGameBollEve() {
      this.switchGameBoll = !this.switchGameBoll;
    }

  }
});
// CONCATENATED MODULE: ./components/Popup/Confirmation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Confirmationvue_type_script_lang_js_ = (Confirmationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup/Confirmation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Confirmationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "82f36b08",
  "3f20a8a4"
  
)

/* harmony default export */ var Confirmation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Singin.vue?vue&type=template&id=52736254&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.switchGameBoll)?_c('div',{staticClass:"switchGame"},[_vm._ssrNode("<div class=\"switchGameBox\" data-v-52736254><h4 data-v-52736254>\n      Connect Wallet\n      <img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" data-v-52736254></h4> <div data-v-52736254><p data-v-52736254><img width=\"100%\""+(_vm._ssrAttr("src",__webpack_require__(58)))+" data-v-52736254></p></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup/Singin.vue?vue&type=template&id=52736254&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Singin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Singinvue_type_script_lang_js_ = ({
  data() {
    return {
      switchGameBoll: false
    };
  },

  methods: {
    singinBollEve() {
      this.switchGameBoll = !this.switchGameBoll;
    },

    walletEve() {
      this.$emit('walletEveMethod');
    }

  }
});
// CONCATENATED MODULE: ./components/Popup/Singin.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Singinvue_type_script_lang_js_ = (Singinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup/Singin.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Singinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "52736254",
  "66f713ba"
  
)

/* harmony default export */ var Singin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.b76f16c.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/button.01b04d7.png";

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heads_vue_vue_type_style_index_0_id_f6148ef6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heads_vue_vue_type_style_index_0_id_f6148ef6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heads_vue_vue_type_style_index_0_id_f6148ef6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heads_vue_vue_type_style_index_0_id_f6148ef6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heads_vue_vue_type_style_index_0_id_f6148ef6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(67);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".heads[data-v-f6148ef6]{height:60px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;position:relative}.heads .container[data-v-f6148ef6]{display:flex;justify-content:space-between;align-items:center;padding-top:10px}.heads .container .route a[data-v-f6148ef6]{margin:0 50px}.heads .container img[data-v-f6148ef6]{cursor:pointer}.heads .container a[data-v-f6148ef6]{color:#a4a4a4;font-size:16px;font-weight:600;font-style:italic;cursor:pointer}.heads .container a span[data-v-f6148ef6]{color:#a4a4a4;position:absolute;top:66px;left:50%;transform:translate(-50%);z-index:111}.heads .container span[data-v-f6148ef6]{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/head.e967cda.png";

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Heads.vue?vue&type=template&id=f6148ef6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"heads"},[_vm._ssrNode("<div class=\"container\" data-v-f6148ef6>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(63)}})]),_vm._ssrNode(" "),(_vm.userInfo.assets.accountName)?_vm._ssrNode("<p class=\"route\" data-v-f6148ef6>","</p>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Game Lobby")]),_vm._ssrNode(" <a data-v-f6148ef6>Buy Crypto</a>")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<p class=\"login\" data-v-f6148ef6>","</p>",[(!_vm.access_token)?_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" data-v-f6148ef6>","</img>"):_c('nuxt-link',{attrs:{"to":"/user"}},[_vm._v(_vm._s(_vm._f("accountName")(_vm.userInfo.assets.accountName)))])],1)],2),_vm._ssrNode(" "),_c('Confirmation',{ref:"childFunction"}),_vm._ssrNode(" "),_c('Singin',{ref:"singinFunction",on:{"walletEveMethod":_vm.signEve}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Heads.vue?vue&type=template&id=f6148ef6&scoped=true&

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(43);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./utils/axios.js
var axios = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/const/index.js
var utils_const = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Popup/Confirmation.vue + 4 modules
var Confirmation = __webpack_require__(61);

// EXTERNAL MODULE: ./components/Popup/Singin.vue + 4 modules
var Singin = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Heads.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Headsvue_type_script_lang_js_ = ({
  name: 'HeadsPages',
  components: {
    Confirmation: Confirmation["default"],
    Singin: Singin["default"]
  },

  data() {
    return {
      accounts: [],
      access_token: ''
    };
  },

  filters: {
    accountName(value) {
      return value ? value.substring(0, value.length - 4) : value;
    }

  },
  computed: { ...Object(external_vuex_["mapState"])({
      userInfo: state => state.tokens
    })
  },

  async mounted() {
    const access_token = localStorage.getItem('access_token');
    this.access_token = access_token;
    this.INIT_ASSETS();
  },

  methods: { ...Object(external_vuex_["mapMutations"])('tokens', ['INIT_ASSETS']),

    async signEve() {
      const web3 = new external_web3_default.a(window.ethereum);
      this.accounts = await web3.eth.getAccounts();
      this.accounts = await ethereum.enable(); // 获取签名id

      const notice = 'leaderboard';
      const personal = await web3.eth.personal.sign(notice, this.accounts[0]);
      const data = {
        address: this.accounts[0],
        signature: personal,
        message: notice
      };
      console.log(JSON.stringify(data));
      const {
        access_token,
        address
      } = await Object(axios["a" /* post */])(utils_const["a" /* default */] + 'nexus/oauth/metamask', data);
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('address', address);
      location.reload();
    },

    accEve() {
      console.log(666);
      window.top.postMessage('updateScore', '/');
    },

    switchEve() {
      this.$refs.childFunction.switchGameBollEve();
    },

    singinEve() {
      this.$refs.singinFunction.singinBollEve();
    }

  }
});
// CONCATENATED MODULE: ./components/Heads.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headsvue_type_script_lang_js_ = (Headsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Heads.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f6148ef6",
  "59d631f7"
  
)

/* harmony default export */ var Heads = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modify.js.map