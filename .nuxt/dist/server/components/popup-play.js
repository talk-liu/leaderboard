exports.ids = [8];
exports.modules = {

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("542e9cd2", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cancel.34d8c60.png";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/confirm.e2f2505.png";

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_style_index_0_id_206d0d7a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_style_index_0_id_206d0d7a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_style_index_0_id_206d0d7a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_style_index_0_id_206d0d7a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_style_index_0_id_206d0d7a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(85);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".play[data-v-206d0d7a]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.play[data-v-206d0d7a],.play .playBox[data-v-206d0d7a]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.play .playBox[data-v-206d0d7a]{z-index:12;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:662px}.play .playBox div[data-v-206d0d7a]{position:relative;padding:30px 120px 80px}.play .playBox div p[data-v-206d0d7a]{width:100%;position:absolute;left:50%;transform:translate(-50%);bottom:-35px;text-align:center}.play .playBox div p img[data-v-206d0d7a]{margin:0 50px;cursor:pointer}.play .playBox h3[data-v-206d0d7a]{color:#fff;font-size:28px;line-height:44px;margin-top:23px;text-align:center}.play .playBox h3 span[data-v-206d0d7a]{color:#f3ff68}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/playBack.6ca50d8.png";

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Play.vue?vue&type=template&id=206d0d7a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.switchGameBoll)?_c('div',{staticClass:"play"},[_vm._ssrNode("<div class=\"playBox\" data-v-206d0d7a><div data-v-206d0d7a><h3 data-v-206d0d7a><span data-v-206d0d7a>10 PLAY TOKEN</span> IS REQUIRED\n        TO PLAY THIS GAME.\n      </h3> <h3 data-v-206d0d7a>\n        Balance:\n        <span data-v-206d0d7a>"+_vm._ssrEscape(_vm._s(_vm.poolData.balance)+" "+_vm._s(_vm.poolData.name))+"</span></h3> <p data-v-206d0d7a><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" data-v-206d0d7a> <img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" data-v-206d0d7a></p></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup/Play.vue?vue&type=template&id=206d0d7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Play.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Playvue_type_script_lang_js_ = ({
  data() {
    return {
      switchGameBoll: false
    };
  },

  props: ['poolData'],
  methods: {
    playBollEve() {
      this.switchGameBoll = !this.switchGameBoll;
    },

    childPlayEve() {
      if (this.poolData.balance < 10) {
        this.$message.info('Not enough balance');
        return;
      }

      this.switchGameBoll = !this.switchGameBoll;
      this.$emit('childPlayMethod');
    }

  }
});
// CONCATENATED MODULE: ./components/Popup/Play.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Playvue_type_script_lang_js_ = (Playvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup/Play.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Playvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "206d0d7a",
  "755b51ba"
  
)

/* harmony default export */ var Play = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=popup-play.js.map