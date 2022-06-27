exports.ids = [11];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ac05139a", content, true, context)
};

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_522cc88a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_522cc88a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_522cc88a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_522cc88a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_id_522cc88a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(23);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(46);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".switchGame[data-v-522cc88a]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-522cc88a],.switchGame .switchGameBox[data-v-522cc88a]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-522cc88a]{z-index:12;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:562px;padding-bottom:30px}.switchGame .switchGameBox h4[data-v-522cc88a]{margin-top:32px;padding:0 60px;font-size:20px;text-align:center}.switchGame .switchGameBox h4 img[data-v-522cc88a]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div p[data-v-522cc88a]{font-size:24px;color:#fff;text-align:center;margin-top:60px}.switchGame .switchGameBox div p a[data-v-522cc88a],.switchGame .switchGameBox div p span[data-v-522cc88a]{color:#40dd84}.switchGame .switchGameBox div p a[data-v-522cc88a]{text-decoration:underline;font-size:16px}.switchGame .switchGameBox div .config[data-v-522cc88a]{margin-top:42px;margin-bottom:24px}.switchGame .switchGameBox div .config img[data-v-522cc88a]{margin:0 30px;cursor:pointer}.switchGame .enter[data-v-522cc88a]{padding:0 35px;margin-top:14px}.switchGame .enter li[data-v-522cc88a]{position:relative}.switchGame .enter li img[data-v-522cc88a]{position:absolute;right:11px;top:44px}.switchGame .enter label[data-v-522cc88a]{font-size:20px;line-height:22px}.switchGame .enter input[data-v-522cc88a]{width:100%;height:43px;line-height:43px;background:#40dd84;box-shadow:inset 0 4px 6px #017e37;outline:none;border:none;border-radius:11px;font-size:18px;text-indent:10px;color:#000;margin:10px 0}.switchGame .enter a[data-v-522cc88a]{color:#40dd84;font-size:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Transaction.vue?vue&type=template&id=522cc88a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.switchGameBoll)?_c('div',{staticClass:"switchGame"},[_vm._ssrNode("<div class=\"switchGameBox\" data-v-522cc88a><h4 data-v-522cc88a>\n      Notification\n    </h4> <div data-v-522cc88a><p data-v-522cc88a><span data-v-522cc88a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.poolData.amount)+" "+_vm._s(_vm.poolData.tokens)+"\n        ")+"</span>\n        will send be sent to\n        <br data-v-522cc88a> <a data-v-522cc88a>"+_vm._ssrEscape("\n          "+_vm._s(_vm._f("to_account")(_vm.poolData.to_account))+"...\n        ")+"</a></p> <ul class=\"enter\" data-v-522cc88a><li data-v-522cc88a><label data-v-522cc88a>\n            Enter your password\n          </label> "+(((_vm.passwordBoll?'password':'text')==='checkbox')?("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.password)?_vm._i(_vm.password,null)>-1:(_vm.password)))+" data-v-522cc88a>"):((_vm.passwordBoll?'password':'text')==='radio')?("<input type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.password,null)))+" data-v-522cc88a>"):("<input"+(_vm._ssrAttr("type",_vm.passwordBoll?'password':'text'))+(_vm._ssrAttr("value",(_vm.password)))+" data-v-522cc88a>"))+" "+((_vm.passwordBoll)?("<img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" data-v-522cc88a>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(94)))+" data-v-522cc88a>"))+" <a data-v-522cc88a>\n            Forgot Password？\n          </a></li></ul> <p class=\"config\" data-v-522cc88a><img"+(_vm._ssrAttr("src",__webpack_require__(92)))+" data-v-522cc88a> <img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" data-v-522cc88a></p></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup/Transaction.vue?vue&type=template&id=522cc88a&scoped=true&

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
      poolData: {},
      password: '',
      passwordBoll: true
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
      this.$emit('transferEve', this.password);
      this.password = '';
    },

    forgotEve() {
      this.switchGameBoll = false;
      this.$emit('forgotRefEve');
    }

  }
});
// CONCATENATED MODULE: ./components/Popup/Transaction.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Transactionvue_type_script_lang_js_ = (Transactionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup/Transaction.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Transactionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "522cc88a",
  "4971f33f"
  
)

/* harmony default export */ var Transaction = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/propr.2113bd4.png";

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/config.3e57bf4.png";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cancel.0d2154c.png";

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADWSURBVHgB7ZTREYIwEEQXK6AESrADrwQ6kBLoSDoQK8AOsAPsIHagl/GYyZxL4McvvZn3AdnssbkMwM9VkVkrlUY5KHvlYVyUXrljY1XKoDxXOJk2W7USNpjNTLZn0cxvGBVJNGImXncEiRlI99JojcqeR6cNcPHPpKuYaCJNhOiHNAY7H9hX+fetrbE9ssOXagCPHOP5yBV4qj41jCI/lNEM49o8lJI0oUOJ1YDfM0k0gs8JR7J3kd2zJULOLI3fbTC7gsQsVoxrYz67mxl1eP8o/gW8AAEXi4luXLKjAAAAAElFTkSuQmCC"

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBzZSBDYMgFEQvnYARHIUR3KCO4AYyQjexG+gGdgO7ASNYSH9T83MgJE3qJZcYuf/kAwKcVH1wgx9pCN4EmpWR0Bi8iqfgjsBcDtRI4Ua84ttaEawN9hUwLzVJmIYswVblBpK7grTpyYxMAqazHmqXR/JVm4A5GdP56RNkg1sCFt3JO1ZjL+B6KJhDpSbkd1OvqyWzu++BEeATsBvebXYCM5LLbkpUC37O7C4Tnxcyu+RZZG3m7EthcwFsxsENsz9nkLCTwqc4Lny8MAwO1KPgR69Rg4L77C96AXLjixC4lG+LAAAAAElFTkSuQmCC"

/***/ })

};;
//# sourceMappingURL=popup-transaction.js.map