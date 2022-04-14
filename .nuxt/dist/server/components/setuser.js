exports.ids = [11];
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
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(23);
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

/***/ })

};;
//# sourceMappingURL=setuser.js.map