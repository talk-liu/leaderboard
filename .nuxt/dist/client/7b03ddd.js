(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1301:function(t,o,e){var content=e(1342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(96).default)("495d9fe0",content,!0,{sourceMap:!1})},1339:function(t,o,e){t.exports=e.p+"img/cancel.34d8c60.png"},1340:function(t,o,e){t.exports=e.p+"img/confirm.e2f2505.png"},1341:function(t,o,e){"use strict";e(1301)},1342:function(t,o,e){var l=e(95),n=e(664),c=e(1343),r=l(!1),d=n(c);r.push([t.i,".play[data-v-325ea2a2]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.play[data-v-325ea2a2],.play .playBox[data-v-325ea2a2]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.play .playBox[data-v-325ea2a2]{z-index:12;background:url("+d+") no-repeat;background-size:100% 100%;width:662px}.play .playBox div[data-v-325ea2a2]{position:relative;padding:30px 120px 80px}.play .playBox div p[data-v-325ea2a2]{width:100%;position:absolute;left:50%;transform:translate(-50%);bottom:-35px;text-align:center}.play .playBox div p img[data-v-325ea2a2]{margin:0 50px;cursor:pointer}.play .playBox h3[data-v-325ea2a2]{color:#fff;font-size:28px;line-height:44px;margin-top:23px;text-align:center}.play .playBox h3 span[data-v-325ea2a2]{color:#f3ff68}",""]),t.exports=r},1343:function(t,o,e){t.exports=e.p+"img/playBack.6ca50d8.png"},1365:function(t,o,e){"use strict";e.r(o);var l={data:function(){return{switchGameBoll:!1}},props:["poolData"],methods:{playBollEve:function(){this.switchGameBoll=!this.switchGameBoll},childPlayEve:function(){this.poolData.balance<10?this.$message.info("Not enough balance"):(this.switchGameBoll=!this.switchGameBoll,this.$emit("childPlayMethod"))}}},n=(e(1341),e(52)),component=Object(n.a)(l,(function(){var t=this,o=t.$createElement,l=t._self._c||o;return t.switchGameBoll?l("div",{staticClass:"play"},[l("div",{staticClass:"playBox"},[l("div",[l("h3",[l("span",[t._v("10 "+t._s(t.poolData.name)+" TOKEN")]),t._v(" IS REQUIRED\n        TO PLAY THIS GAME.\n      ")]),t._v(" "),l("h3",[t._v("\n        Balance:\n        "),l("span",[t._v(t._s(t.poolData.balance)+" "+t._s(t.poolData.name))])]),t._v(" "),l("p",[l("img",{attrs:{src:e(1339)},on:{click:function(o){t.switchGameBoll=!t.switchGameBoll}}}),t._v(" "),l("img",{attrs:{src:e(1340)},on:{click:t.childPlayEve}})])])])]):t._e()}),[],!1,null,"325ea2a2",null);o.default=component.exports}}]);