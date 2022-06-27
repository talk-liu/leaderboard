exports.ids = [8];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ac5cadd8", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_style_index_0_id_1cf29534_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_style_index_0_id_1cf29534_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_style_index_0_id_1cf29534_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_style_index_0_id_1cf29534_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_style_index_0_id_1cf29534_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(23);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(46);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".switchGame[data-v-1cf29534]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-1cf29534],.switchGame .switchGameBox[data-v-1cf29534]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-1cf29534]{z-index:12;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;width:562px;padding-bottom:30px}.switchGame .switchGameBox h4[data-v-1cf29534]{margin-top:32px;padding:6px 60px;font-size:20px;text-align:center}.switchGame .switchGameBox h4 img[data-v-1cf29534]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div p[data-v-1cf29534]{font-size:24px;color:#fff;text-align:center;margin-top:60px}.switchGame .switchGameBox div p a[data-v-1cf29534],.switchGame .switchGameBox div p span[data-v-1cf29534]{color:#40dd84}.switchGame .switchGameBox div p a[data-v-1cf29534]{text-decoration:underline;font-size:16px}.switchGame .switchGameBox div .config[data-v-1cf29534]{margin-top:42px;margin-bottom:24px}.switchGame .switchGameBox div .config img[data-v-1cf29534]{margin:0 30px;cursor:pointer}.switchGame .enter[data-v-1cf29534]{padding:0 60px}.switchGame .enter li[data-v-1cf29534]{margin-top:42px;position:relative}.switchGame .enter li label[data-v-1cf29534]{font-size:20px;line-height:22px}.switchGame .enter li input[data-v-1cf29534]{width:100%;height:43px;line-height:43px;background:#40dd84;box-shadow:inset 0 4px 6px #017e37;outline:none;border:none;border-radius:11px;font-size:18px;text-indent:10px;color:#000;margin:10px 0}.switchGame .enter li img[data-v-1cf29534]{position:absolute;right:20px;top:44px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Password.vue?vue&type=template&id=1cf29534&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.switchGameBoll)?_c('div',{staticClass:"switchGame"},[_vm._ssrNode("<div class=\"switchGameBox\" data-v-1cf29534><h4 data-v-1cf29534>\n      Set Transaction Password\n      <img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" data-v-1cf29534></h4> <div data-v-1cf29534><ul class=\"enter\" data-v-1cf29534><li data-v-1cf29534><label data-v-1cf29534>\n            Password\n          </label> "+(((_vm.passwordBoll?'password':'text')==='checkbox')?("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.password)?_vm._i(_vm.password,null)>-1:(_vm.password)))+" data-v-1cf29534>"):((_vm.passwordBoll?'password':'text')==='radio')?("<input type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.password,null)))+" data-v-1cf29534>"):("<input"+(_vm._ssrAttr("type",_vm.passwordBoll?'password':'text'))+(_vm._ssrAttr("value",(_vm.password)))+" data-v-1cf29534>"))+" "+((_vm.passwordBoll)?("<img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" data-v-1cf29534>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(94)))+" data-v-1cf29534>"))+"</li> <li data-v-1cf29534><label data-v-1cf29534>\n            Confirm Your Password\n          </label> "+(((_vm.confirmPasswordBoll?'password':'text')==='checkbox')?("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.confirmPassword)?_vm._i(_vm.confirmPassword,null)>-1:(_vm.confirmPassword)))+" data-v-1cf29534>"):((_vm.confirmPasswordBoll?'password':'text')==='radio')?("<input type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.confirmPassword,null)))+" data-v-1cf29534>"):("<input"+(_vm._ssrAttr("type",_vm.confirmPasswordBoll?'password':'text'))+(_vm._ssrAttr("value",(_vm.confirmPassword)))+" data-v-1cf29534>"))+" "+((_vm.confirmPasswordBoll)?("<img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" data-v-1cf29534>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(94)))+" data-v-1cf29534>"))+"</li></ul> <p class=\"config\" data-v-1cf29534><img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" data-v-1cf29534></p></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup/Password.vue?vue&type=template&id=1cf29534&scoped=true&

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(44);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// EXTERNAL MODULE: external "buffer"
var external_buffer_ = __webpack_require__(45);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./utils/axios.js
var axios = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/const/index.js
var utils_const = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup/Password.vue?vue&type=script&lang=js&
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





/* harmony default export */ var Passwordvue_type_script_lang_js_ = ({
  data() {
    return {
      switchGameBoll: false,
      password: '',
      confirmPassword: '',
      passwordBoll: true,
      confirmPasswordBoll: true
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      isPassword: state => state.tokens.assets.password
    })
  },
  watch: {
    isPassword(isPassword) {
      this.switchGameBoll = isPassword;
    }

  },

  async mounted() {
    this.switchGameBoll = this.isPassword;
  },

  methods: {
    async tokensEve() {
      if (this.confirmPassword != '' && this.confirmPassword == this.password) {
        const web3 = new external_web3_default.a(window.ethereum);
        this.accounts = await web3.eth.getAccounts();
        this.accounts = await ethereum.enable(); // 获取签名id

        const notice = this.password;
        console.log(notice);
        const personal = await web3.eth.personal.sign(notice, this.accounts[0]);
        const data = {
          address: this.accounts[0],
          signature: personal,
          password: notice
        };
        console.log(JSON.stringify(data));
        const {
          access_token,
          address,
          result
        } = await Object(axios["a" /* post */])(utils_const["a" /* default */] + 'nexus/oauth/metamask', data);

        if (result == 1) {
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('address', address);
          this.$message.info('success');
          this.password = '';
          this.confirmPassword = '';
          this.switchGameBoll = !this.switchGameBoll;
        }
      } else {
        this.$message.info('Inconsistent passwords');
      }
    },

    bollEve() {
      this.switchGameBoll = !this.switchGameBoll;
    }

  }
});
// CONCATENATED MODULE: ./components/Popup/Password.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Passwordvue_type_script_lang_js_ = (Passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup/Password.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1cf29534",
  "0dcbf78a"
  
)

/* harmony default export */ var Password = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/propr.2113bd4.png";

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB3dFBDYAwDAXQSUACEpAwCTgACUiYNBwgYRKQUDayJU2T362cyJr0tOZl7Xful0VEPndjZk69pp7QQK1NAWKZ2RESECSAC/4EQSYAQMEMAMgOsBVuhhxfgLpClDeyAu8KpKTWBbC3PogaKQjIa8hJSgoFygdf3Jj1AGJ+P0Ij9/rsAAAAAElFTkSuQmCC"

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/config.3e57bf4.png";

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
//# sourceMappingURL=popup-password.js.map