exports.ids = [10];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9d0f8eb4", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_dbf7027e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_dbf7027e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_dbf7027e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_dbf7027e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_dbf7027e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(44);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".switchGame[data-v-dbf7027e]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-dbf7027e],.switchGame .switchGameBox[data-v-dbf7027e]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-dbf7027e]{z-index:12;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:462px;padding-bottom:30px}.switchGame .switchGameBox h4[data-v-dbf7027e]{margin-top:16px;padding:0 60px;font-size:20px;text-align:center}.switchGame .switchGameBox h4 img[data-v-dbf7027e]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div p[data-v-dbf7027e]{font-size:24px;color:#fff;text-align:center;margin-top:60px}.switchGame .switchGameBox div p a[data-v-dbf7027e],.switchGame .switchGameBox div p span[data-v-dbf7027e]{color:#40dd84}.switchGame .switchGameBox div p a[data-v-dbf7027e]{text-decoration:underline;font-size:16px}.switchGame .switchGameBox div .config[data-v-dbf7027e]{margin-top:42px;margin-bottom:24px}.switchGame .switchGameBox div .config img[data-v-dbf7027e]{margin:0 30px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Transaction.vue?vue&type=template&id=dbf7027e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.switchGameBoll)?_c('div',{staticClass:"switchGame"},[_vm._ssrNode("<div class=\"switchGameBox\" data-v-dbf7027e><h4 data-v-dbf7027e>\n      Notification\n    </h4> <div data-v-dbf7027e><p data-v-dbf7027e><span data-v-dbf7027e>"+_vm._ssrEscape("\n          "+_vm._s(_vm.poolData.amount)+" "+_vm._s(_vm.poolData.tokens)+"\n        ")+"</span>\n        will be sent to\n        <br data-v-dbf7027e> <a data-v-dbf7027e>"+_vm._ssrEscape("\n          "+_vm._s(_vm._f("to_account")(_vm.poolData.to_account))+"...\n        ")+"</a></p> <p class=\"config\" data-v-dbf7027e><img"+(_vm._ssrAttr("src",__webpack_require__(87)))+" data-v-dbf7027e> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" data-v-dbf7027e></p></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup/Transaction.vue?vue&type=template&id=dbf7027e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Transaction.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Transactionvue_type_script_lang_js_ = ({
  data() {
    return {
      switchGameBoll: false,
      poolData: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      balances: state => state.tokens.assets.balances
    })
  },
  filters: {
    to_account(value) {
      return value ? value.substring(0, 4) : value;
    }

  },

  async mounted() {},

  methods: { ...Object(external_vuex_["mapMutations"])('tokens', ['SET_TOKENS', 'INIT_ASSETS', 'INIT_TOKENS']),

    switchTransactionEve(data) {
      console.log(JSON.stringify(data));
      this.poolData = data;
      this.switchGameBoll = !this.switchGameBoll;
    },

    tokensEve() {
      this.switchGameBoll = false;
      this.$emit('transferEve');
    }

  }
});
// CONCATENATED MODULE: ./components/Popup/Transaction.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Transactionvue_type_script_lang_js_ = (Transactionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup/Transaction.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Transactionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dbf7027e",
  "4971f33f"
  
)

/* harmony default export */ var Transaction = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/propr.2113bd4.png";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cancel.0d2154c.png";

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/config.3e57bf4.png";

/***/ })

};;
//# sourceMappingURL=popup-transaction.js.map