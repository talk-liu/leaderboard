(window.webpackJsonp=window.webpackJsonp||[]).push([[1,8,9],{1238:function(t,e,n){t.exports=n.p+"img/propr.2113bd4.png"},1240:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB3dFBDYAwDAXQSUACEpAwCTgACUiYNBwgYRKQUDayJU2T362cyJr0tOZl7Xful0VEPndjZk69pp7QQK1NAWKZ2RESECSAC/4EQSYAQMEMAMgOsBVuhhxfgLpClDeyAu8KpKTWBbC3PogaKQjIa8hJSgoFygdf3Jj1AGJ+P0Ij9/rsAAAAAElFTkSuQmCC"},1265:function(t,e,n){var content=n(1292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("23ce6cde",content,!0,{sourceMap:!1})},1275:function(t,e){},1276:function(t,e){},1277:function(t,e){},1278:function(t,e){},1279:function(t,e){},1280:function(t,e){},1282:function(t,e){},1283:function(t,e){},1284:function(t,e){},1285:function(t,e){},1286:function(t,e){},1287:function(t,e){},1288:function(t,e){},1289:function(t,e){},1290:function(t,e,n){t.exports=n.p+"img/yes.aadb50c.png"},1291:function(t,e,n){"use strict";n(1265)},1292:function(t,e,n){var r=n(93),o=n(663),c=n(1238),d=r(!1),l=o(c);d.push([t.i,".switchGame[data-v-4487f5e4]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-4487f5e4],.switchGame .switchGameBox[data-v-4487f5e4]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-4487f5e4]{z-index:12;background:url("+l+") no-repeat;background-size:100% 100%;width:462px;padding-bottom:30px}.switchGame .switchGameBox h4[data-v-4487f5e4]{margin-top:26px;padding:0 60px;font-size:20px}.switchGame .switchGameBox h4 img[data-v-4487f5e4]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div[data-v-4487f5e4]{text-align:center;margin-top:30px;padding:0 44px}.switchGame .switchGameBox div p.list[data-v-4487f5e4]{display:flex;justify-content:space-between;align-items:center;margin:16px 0;cursor:pointer}.switchGame .switchGameBox div p.list span[data-v-4487f5e4]{display:block;width:90px;color:#fff;font-size:18px;text-align:left;text-shadow:0 5.1841px 7.25774px rgba(64,221,132,.3),0 0 5.1841px #40dd84;position:relative}.switchGame .switchGameBox div p.list span img[data-v-4487f5e4]{position:absolute;top:3px;right:0}.switchGame .switchGameBox div .border[data-v-4487f5e4]{height:3px;background:linear-gradient(89.96deg,rgba(64,221,132,0) -1.12%,#40dd84 32.05%,#fff 46.79%,#40dd84 59.43%,rgba(64,221,132,0) 99.97%)}",""]),t.exports=d},1297:function(t,e,n){"use strict";n.r(e);n(97),n(65),n(96),n(31),n(151),n(82),n(152);var r=n(25),o=n(66),c=(n(81),n(67));n(313),n(314);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{switchGameBoll:!1,poolData:{}}},computed:l({},Object(c.c)({balances:function(t){return t.tokens.assets.balances}})),mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:l(l({},Object(c.b)("tokens",["SET_TOKENS","INIT_ASSETS","INIT_TOKENS"])),{},{switchCurrencyEve:function(data){this.poolData=data,this.switchGameBoll=!this.switchGameBoll},tokensEve:function(t){this.switchGameBoll=!1,localStorage.setItem("assetId",t.assetId),this.$emit("tokensMethod",t),this.INIT_TOKENS(t)}})},m=(n(1291),n(50)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.switchGameBoll?r("div",{staticClass:"switchGame"},[r("div",{staticClass:"switchGameBox"},[r("h4",[t._v("\n      Switch Tokens\n      "),r("img",{attrs:{src:n(1240)},on:{click:t.switchCurrencyEve}})]),t._v(" "),r("div",[r("ul",t._l(t.balances,(function(e,o){return r("li",{directives:[{name:"show",rawName:"v-show",value:e.name,expression:"item.name"}],key:o,on:{click:function(n){return t.tokensEve(e)}}},[r("p",{staticClass:"list"},[r("img",{attrs:{width:"44px",src:e.img}}),t._v(" "),r("span",[t._v("\n              "+t._s(e.name)+"\n              "),t.poolData.name===e.name?r("img",{attrs:{src:n(1290)}}):t._e()])]),t._v(" "),r("p",{staticClass:"border"})])})),0)])])]):t._e()}),[],!1,null,"4487f5e4",null);e.default=component.exports},1303:function(t,e,n){t.exports=n.p+"img/cancel.0d2154c.png"},1304:function(t,e,n){t.exports=n.p+"img/config.3e57bf4.png"},1327:function(t,e,n){t.exports=n.p+"img/1.d0bfbcc.png"},1339:function(t,e,n){t.exports=n.p+"img/2.799066c.png"},1342:function(t,e,n){var content=n(1406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("4dfe7a5b",content,!0,{sourceMap:!1})},1404:function(t,e,n){t.exports=n.p+"img/icon.6a37578.png"},1405:function(t,e,n){"use strict";n(1342)},1406:function(t,e,n){var r=n(93),o=n(663),c=n(1238),d=r(!1),l=o(c);d.push([t.i,".switchGame[data-v-59e3e7f6]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-59e3e7f6],.switchGame .switchGameBox[data-v-59e3e7f6]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-59e3e7f6]{z-index:12;background:url("+l+") no-repeat;background-size:100% 100%;width:462px;padding-bottom:30px}.switchGame .switchGameBox h4[data-v-59e3e7f6]{margin-top:16px;padding:0 60px;font-size:20px;text-align:center}.switchGame .switchGameBox h4 img[data-v-59e3e7f6]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div p[data-v-59e3e7f6]{font-size:24px;color:#fff;text-align:center;margin-top:60px}.switchGame .switchGameBox div .config[data-v-59e3e7f6]{margin-top:42px;margin-bottom:24px}.switchGame .switchGameBox div .config img[data-v-59e3e7f6]{margin:0 30px;cursor:pointer}",""]),t.exports=d},1501:function(t,e,n){var content=n(1796);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("12bed4f4",content,!0,{sourceMap:!1})},1509:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("img",{attrs:{src:n(1404)}}),t._v(" "),r("span",[t._v("Disconnect Wallet?")])])}],o=(n(97),n(65),n(96),n(31),n(151),n(82),n(152),n(25)),c=n(66),d=(n(81),n(67));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{switchGameBoll:!1,poolData:{}}},computed:f({},Object(d.c)({balances:function(t){return t.tokens.assets.balances}})),mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:f(f({},Object(d.b)("tokens",["SET_TOKENS","INIT_ASSETS","INIT_TOKENS"])),{},{switchCurrencyEve:function(data){this.poolData=data,this.switchGameBoll=!this.switchGameBoll},tokensEve:function(){this.switchGameBoll=!1,this.$emit("tokensMethod")}})},v=(n(1405),n(50)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.switchGameBoll?r("div",{staticClass:"switchGame"},[r("div",{staticClass:"switchGameBox"},[r("h4",[t._v("\n      Notification\n    ")]),t._v(" "),r("div",[t._m(0),t._v(" "),r("p",{staticClass:"config"},[r("img",{attrs:{src:n(1303)},on:{click:function(e){t.switchGameBoll=!t.switchGameBoll}}}),t._v(" "),r("img",{attrs:{src:n(1304)},on:{click:t.tokensEve}})])])])]):t._e()}),r,!1,null,"59e3e7f6",null);e.default=component.exports},1788:function(t,e,n){t.exports=n.p+"img/singup.60b885b.png"},1789:function(t,e,n){t.exports=n.p+"img/cup.221f135.png"},1790:function(t,e,n){t.exports=n.p+"img/send.c9a3e11.png"},1791:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIISURBVHgB7VRNTttAFH4zNl1VkY/gCOiW9ASdnKBwApITNNuqpHEEqMuEE0BPUG7QuQFhxQKimBtYbLHn8XksRBx7nIQ1n2SP9ObN9837mUf0gTUQmzip+1MF1w5JOrAGw4/4a70/1OvONgqo+dkAywhfQMS3xDTDkYAEh1ghxjFlPNZffl9tJaBuooBaO5cgUsR8QTKb6naUlHwWf0IyaQ8UuIC4pqfnvv5a9nELzM9uQI6bZl0Qx9QUZS7E5j/SFuu9k+7qvqweOB/VkUP0sqhFGbr9MyYhu2DqYD9qFFB3edgc4RtXbs7URbpCqoEVYRqTFD9sel0C5BmF2yNUd9Fc0LsnU5vwz37PLeDzMbHQ9F4Y/gsR5RYw1MZ3S+8WkDNk4GDZ5Fec2CROAk8GahGFJVtCSV17ugWEDMiNCRl/UrK0ilPFBfLuE0mTgIbrd6xTWoXnKUrTsGL35Rsh2/zPlrdLD832uRT/6CltN4VdB9vin7IFWvlI7w2vX+2lItvhlYfY8ke0LXayqGjxN/KKgEVm+vgP1Px8Y5Hi9dMx6ne0uueaRfkURTFFpHd/jclFbIeijXZgX//+MNpIwB5+OD0kKSdoW/S3uEAFZ+Rnsd1MvRB732AbWAbD/dXUrBWwInYkZ4cg6hXzfwlMj8j5Vd0o31igLIZ0pF6naMvnuIn0A1vhBRln1X5+BNFtAAAAAElFTkSuQmCC"},1792:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFhSURBVHgB7ZRPTsJAFMa/N9N0Y0w4Qmt04Q5O4NxAOAFwAmVJgFBF4hI9AfEEHoHxBLAzQZEeoVsN7fgGoqG2ia1rXzfNe/P9+v50HqnluAphJiDyUMaMCZFQx4E0U5CpIDFPpQBCnLFu6vBrFTGu9MkgKKNXL6MAgoYChAUEmmoeVAqLn289zqBptQygNkAeDp3HogC4yYSb4Fmt0H5vwa4O05RajYe/adXanjF1q7Fa+g68ju6YeMHltLTff8gVL8etbdONudfHg0vro9SBt5s5DDx8bGr6NAjxs243nrMi1Ef92pdfpD5BssFZRHDlLNNUN5nx2CLQprHvTgG03w0RJ7umHoj6Xnn1bdNitLWfziydgTXHCTO+ROyyceJMLAsoaf+AXMA7zxoRJA3V8rqFsgCeMwNkDcQhKaZqNVpD4rwwYAfp8u/a82H4plqQvTzEGyji5y/Gy0Opdf6++AREWnb6BJyyrwAAAABJRU5ErkJggg=="},1793:function(t,e,n){t.exports=n.p+"img/button.a91eafa.png"},1794:function(t,e,n){t.exports=n.p+"img/assets.6719be2.png"},1795:function(t,e,n){"use strict";n(1501)},1796:function(t,e,n){var r=n(93),o=n(663),c=n(1797),d=n(1798),l=r(!1),f=o(c),m=o(d);l.push([t.i,".claims[data-v-5a78bfd5]{color:#fff;margin-top:52px}.claims .information[data-v-5a78bfd5]{padding-top:10px;height:96px;background:radial-gradient(38.87% 56.6% at 50%,at 115.1%,rgba(99,254,180,.5) 0,rgba(6,219,100,0) 100%),radial-gradient(91.33% 64.45% at 50%,at -14.45%,rgba(99,254,180,.5) 0,rgba(6,219,100,0) 71.97%),#121621;background:radial-gradient(38.87% 56.6% at 50% 115.1%,rgba(99,254,180,.5) 0,rgba(6,219,100,0) 100%),radial-gradient(91.33% 64.45% at 50% -14.45%,rgba(99,254,180,.5) 0,rgba(6,219,100,0) 71.97%),#121621}.claims .information p[data-v-5a78bfd5]{text-align:center;display:flex;justify-content:center;align-items:center;padding:10px 0;font-style:italic;text-shadow:0 3.56366px 4.98913px rgba(64,221,132,.3),0 0 3.56366px #40dd84}.claims .information p label[data-v-5a78bfd5]{font-size:24px}.claims .information p img[data-v-5a78bfd5]{margin-left:10px;cursor:pointer}.claims .assets[data-v-5a78bfd5]{background:url("+f+") no-repeat;background-size:100% 100%;width:722px;margin:20px auto auto;display:flex;justify-content:flex-start;align-items:center;padding:20px 40px}.claims .assets h3[data-v-5a78bfd5]{display:flex;justify-content:center;align-items:center;font-size:24px}.claims .assets .currencys[data-v-5a78bfd5]{width:100%;margin-left:109px}.claims .assets .currencys div[data-v-5a78bfd5]{margin:20px 0;overflow:hidden;height:100px}.claims .assets .currencys div p[data-v-5a78bfd5]{display:flex;justify-content:flex-start;align-items:center;width:180px;float:left;margin-bottom:40px}.claims .assets .currencys div p label[data-v-5a78bfd5]{font-size:18px}.claims .assets .currencys div p img[data-v-5a78bfd5]{margin-right:10px}.claims .rewards[data-v-5a78bfd5]{margin:auto}.claims .rewards h3[data-v-5a78bfd5]{text-align:center;margin-top:25px}.claims .rewards h3 label[data-v-5a78bfd5]{font-size:24px;font-style:italic;text-shadow:0 3.56366px 4.98913px rgba(64,221,132,.3),0 0 3.56366px #40dd84;margin-left:224px}.claims .rewards h3 a[data-v-5a78bfd5]{float:right;color:#40dd84;display:flex;justify-content:center;align-items:center;font-size:18px;border:1px solid #40dd84;border-radius:8px;margin-left:20px;padding:3px 10px;height:25px;cursor:pointer}.claims .rewards h3 a img[data-v-5a78bfd5]{margin-right:5px}.claims .rewards .border[data-v-5a78bfd5]{background:linear-gradient(89.96deg,rgba(64,221,132,0) -1.12%,#40dd84 32.05%,#fff 46.79%,#40dd84 59.43%,rgba(64,221,132,0) 99.97%);height:4px;width:85%;margin:20px auto auto}.claims ul[data-v-5a78bfd5]{margin-top:38px;display:grid;grid-gap:20px;grid-template-columns:repeat(2,1fr)}.claims ul li[data-v-5a78bfd5]{background:url("+m+") no-repeat;background-size:100% 100%;display:flex;justify-content:space-around;align-items:center;padding:30px 0;position:relative}.claims ul li .popup[data-v-5a78bfd5]{position:absolute;top:0;left:-30px;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.claims ul li div[data-v-5a78bfd5]{margin-left:28px}.claims ul li div h3[data-v-5a78bfd5]{font-size:24px}.claims ul li div p[data-v-5a78bfd5]{font-size:14px;margin-bottom:20px}.claims ul li div p span[data-v-5a78bfd5]{color:#40dd84;font-size:12px;margin-left:10px}",""]),t.exports=l},1797:function(t,e,n){t.exports=n.p+"img/assetsBack.945893b.png"},1798:function(t,e,n){t.exports=n.p+"img/back.b5ba669.png"},1808:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",[r("img",{attrs:{src:n(1794)}}),t._v("\n          Assets\n        ")])}],o=(n(97),n(65),n(96),n(31),n(151),n(82),n(152),n(25)),c=n(66),d=(n(124),n(81),n(67)),l=(n(1269),n(313)),f=n(314),m=n(1297),v=n(1509);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={data:function(){return{boll:!1,assetsData:{},gameList:[],loading:!1,address:""}},filters:{accountName:function(t){return t?t.substring(0,t.length-4):t}},components:{Currency:m.default,Notification:v.default},computed:A({},Object(d.c)({userInfo:function(t){return t.tokens.assets},balances:function(t){return t.tokens.assets.balances},tokens:function(t){return t.tokens.tokens}})),watch:{tokens:function(t){this.rewardEve({asset_id:t.assetId})}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.address=localStorage.getItem("address");case 1:case"end":return e.stop()}}),e)})))()},methods:A(A(A({},Object(d.b)("todos",["SET_USERINFO"])),Object(d.b)("tokens",["SET_TOKENS","INIT_ASSETS_REMOVE","INIT_ASSETS"])),{},{claimsEve:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.boll=!0,r.next=3,Object(l.a)(f.a+"nexus/claim",{game_id:t,asset_id:n.tokens.assetId,round:parseInt(e)});case 3:o=r.sent,o.message,n.boll=!1,n.$message.info("success"),n.INIT_ASSETS();case 8:case"end":return r.stop()}}),r)})))()},singupEve:function(){this.$refs.notificationFn.switchCurrencyEve(this.tokens)},tokensMethod:function(t){localStorage.removeItem("access_token"),this.INIT_ASSETS_REMOVE({});var e=this;setTimeout((function(){e.$router.push({path:"/"})}),500)},switchEve:function(){this.$refs.currencyFunction.switchCurrencyEve(this.tokens)},rewardEve:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!1,n.next=3,Object(l.a)(f.a+"nexus/reward",t);case 3:r=n.sent,data=r.data,e.gameList=data,e.loading=!0;case 7:case"end":return n.stop()}}),n)})))()},copy:function(){var t=document.createElement("input");t.value=this.address,t.id="creatDom",document.body.appendChild(t),t.select(),document.execCommand("Copy");var e=document.getElementById("creatDom");e.parentNode.removeChild(e),this.$message.info("Copy successful")}})},w=(n(1795),n(50)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"claims"},[r("div",{staticClass:"container"},[r("div",{staticClass:"information"},[r("p",[r("label",[t._v("User: "+t._s(t._f("accountName")(t.userInfo.accountName)))]),t._v(" "),r("img",{attrs:{src:n(1788)},on:{click:t.singupEve}})]),t._v(" "),r("p",[t._v("\n        "+t._s(t.address)+"\n        "),r("img",{attrs:{src:n(1789)},on:{click:t.copy}})])]),t._v(" "),r("div",{staticClass:"assets"},[r("div",[t._m(0),t._v(" "),r("nuxt-link",{attrs:{to:"/transaction"}},[r("img",{attrs:{src:n(1790)}})])],1),t._v(" "),r("div",{staticClass:"currencys"},[r("div",t._l(t.balances,(function(e,n){return r("p",{directives:[{name:"show",rawName:"v-show",value:e.name,expression:"item.name"}],key:n},[r("img",{attrs:{width:"24px",src:e.img}}),t._v(" "),r("label",[t._v("\n              "+t._s(e.balance)+" "+t._s(e.name)+"\n            ")])])})),0)])]),t._v(" "),r("div",{staticClass:"rewards"},[r("p",{staticClass:"border"}),t._v(" "),r("h3",[r("label",[t._v("Claim Rewards")]),t._v(" "),r("nuxt-link",{attrs:{to:"/user/history"}},[r("img",{attrs:{src:n(1791)}}),t._v("\n          History\n        ")]),t._v(" "),r("a",{on:{click:t.switchEve}},[r("img",{attrs:{src:n(1792)}}),t._v("\n          Filter\n        ")])],1)]),t._v(" "),t.loading?r("div",t._l(t.gameList,(function(e,o){return r("ul",{key:o},t._l(e.rewards,(function(o,c){return r("li",{directives:[{name:"show",rawName:"v-show",value:o.reward>0,expression:"res.reward > 0 "}],key:c},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.boll,expression:"boll"}],staticClass:"popup"}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:1==e.game_id,expression:"item.game_id == 1"}],attrs:{src:n(1339)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:2==e.game_id,expression:"item.game_id == 2"}],attrs:{src:n(1327)}}),t._v(" "),r("div",[r("h3",[t._v("Game Tokens")]),t._v(" "),r("p",[t._v("\n              Claim Rewards"),r("span",[t._v(t._s(o.reward)+" "+t._s(t.tokens.name))])]),t._v(" "),r("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.claimsEve(e.game_id,o.round)}}},[r("img",{attrs:{src:n(1793)}})])])])})),0)})),0):r("p",{staticStyle:{"text-align":"center",margin:"20px 0px",color:"#999"}},[r("a-spin"),t._v(" "),r("br"),t._v("\n      Getting data on the chain ...\n    ")],1)]),t._v(" "),r("Currency",{ref:"currencyFunction"}),t._v(" "),r("Notification",{ref:"notificationFn",on:{tokensMethod:t.tokensMethod}})],1)}),r,!1,null,"5a78bfd5",null);e.default=component.exports}}]);