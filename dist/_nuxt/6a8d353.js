(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8,10,14],{1240:function(t,e,n){t.exports=n.p+"img/propr.2113bd4.png"},1242:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB3dFBDYAwDAXQSUACEpAwCTgACUiYNBwgYRKQUDayJU2T362cyJr0tOZl7Xful0VEPndjZk69pp7QQK1NAWKZ2RESECSAC/4EQSYAQMEMAMgOsBVuhhxfgLpClDeyAu8KpKTWBbC3PogaKQjIa8hJSgoFygdf3Jj1AGJ+P0Ij9/rsAAAAAElFTkSuQmCC"},1268:function(t,e,n){var content=n(1295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("23ce6cde",content,!0,{sourceMap:!1})},1278:function(t,e){},1279:function(t,e){},1280:function(t,e){},1281:function(t,e){},1282:function(t,e){},1283:function(t,e){},1285:function(t,e){},1286:function(t,e){},1287:function(t,e){},1288:function(t,e){},1289:function(t,e){},1290:function(t,e){},1291:function(t,e){},1292:function(t,e){},1293:function(t,e,n){t.exports=n.p+"img/yes.aadb50c.png"},1294:function(t,e,n){"use strict";n(1268)},1295:function(t,e,n){var o=n(95),r=n(664),c=n(1240),l=o(!1),d=r(c);l.push([t.i,".switchGame[data-v-4487f5e4]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-4487f5e4],.switchGame .switchGameBox[data-v-4487f5e4]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-4487f5e4]{z-index:12;background:url("+d+") no-repeat;background-size:100% 100%;width:462px;padding-bottom:30px}.switchGame .switchGameBox h4[data-v-4487f5e4]{margin-top:26px;padding:0 60px;font-size:20px}.switchGame .switchGameBox h4 img[data-v-4487f5e4]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div[data-v-4487f5e4]{text-align:center;margin-top:30px;padding:0 44px}.switchGame .switchGameBox div p.list[data-v-4487f5e4]{display:flex;justify-content:space-between;align-items:center;margin:16px 0;cursor:pointer}.switchGame .switchGameBox div p.list span[data-v-4487f5e4]{display:block;width:90px;color:#fff;font-size:18px;text-align:left;text-shadow:0 5.1841px 7.25774px rgba(64,221,132,.3),0 0 5.1841px #40dd84;position:relative}.switchGame .switchGameBox div p.list span img[data-v-4487f5e4]{position:absolute;top:3px;right:0}.switchGame .switchGameBox div .border[data-v-4487f5e4]{height:3px;background:linear-gradient(89.96deg,rgba(64,221,132,0) -1.12%,#40dd84 32.05%,#fff 46.79%,#40dd84 59.43%,rgba(64,221,132,0) 99.97%)}",""]),t.exports=l},1298:function(t,e,n){var content=n(1334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("0480f3d5",content,!0,{sourceMap:!1})},1299:function(t,e,n){var content=n(1338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("495d9fe0",content,!0,{sourceMap:!1})},1300:function(t,e,n){"use strict";n.r(e);n(99),n(67),n(98),n(32),n(153),n(84),n(154);var o=n(25),r=n(68),c=(n(83),n(69));n(315),n(316);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{switchGameBoll:!1,poolData:{}}},computed:d({},Object(c.c)({balances:function(t){return t.tokens.assets.balances}})),mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:d(d({},Object(c.b)("tokens",["SET_TOKENS","INIT_ASSETS","INIT_TOKENS"])),{},{switchCurrencyEve:function(data){this.poolData=data,this.switchGameBoll=!this.switchGameBoll},tokensEve:function(t){this.switchGameBoll=!1,localStorage.setItem("assetId",t.assetId),this.$emit("tokensMethod",t),this.INIT_TOKENS(t)}})},m=(n(1294),n(52)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.switchGameBoll?o("div",{staticClass:"switchGame"},[o("div",{staticClass:"switchGameBox"},[o("h4",[t._v("\n      Switch Tokens\n      "),o("img",{attrs:{src:n(1242)},on:{click:t.switchCurrencyEve}})]),t._v(" "),o("div",[o("ul",t._l(t.balances,(function(e,r){return o("li",{directives:[{name:"show",rawName:"v-show",value:e.name,expression:"item.name"}],key:r,on:{click:function(n){return t.tokensEve(e)}}},[o("p",{staticClass:"list"},[o("img",{attrs:{width:"44px",src:e.img}}),t._v(" "),o("span",[t._v("\n              "+t._s(e.name)+"\n              "),t.poolData.name===e.name?o("img",{attrs:{src:n(1293)}}):t._e()])]),t._v(" "),o("p",{staticClass:"border"})])})),0)])])]):t._e()}),[],!1,null,"4487f5e4",null);e.default=component.exports},1319:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{switchGameBoll:!1}},methods:{switchGameBollEve:function(){this.switchGameBoll=!this.switchGameBoll}}},r=(n(1333),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.switchGameBoll?o("div",{staticClass:"switchGame"},[o("div",{staticClass:"switchGameBox"},[o("h4",[t._v("\n      Switch Game\n      "),o("img",{attrs:{src:n(1242)},on:{click:t.switchGameBollEve}})]),t._v(" "),o("div",[o("p",[o("nuxt-link",{attrs:{to:"/flappybirds"}},[o("img",{attrs:{width:"270px",src:n(1331)}})])],1),t._v(" "),o("p",[o("nuxt-link",{attrs:{to:"/towerdefenses"}},[o("img",{attrs:{width:"150px",src:n(1332)}})])],1)])])]):t._e()}),[],!1,null,"52bc2d09",null);e.default=component.exports},1330:function(t,e,n){t.exports=n.p+"img/1.372095c.png"},1331:function(t,e,n){t.exports=n.p+"img/logo2.9af770e.png"},1332:function(t,e,n){t.exports=n.p+"img/logo1.416de54.png"},1333:function(t,e,n){"use strict";n(1298)},1334:function(t,e,n){var o=n(95),r=n(664),c=n(1240),l=o(!1),d=r(c);l.push([t.i,".switchGame[data-v-52bc2d09]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.switchGame[data-v-52bc2d09],.switchGame .switchGameBox[data-v-52bc2d09]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.switchGame .switchGameBox[data-v-52bc2d09]{z-index:12;background:url("+d+") no-repeat;background-size:100% 100%;width:462px;height:390px}.switchGame .switchGameBox h4[data-v-52bc2d09]{padding:24px 60px;font-size:20px}.switchGame .switchGameBox h4 img[data-v-52bc2d09]{float:right;cursor:pointer;padding:5px}.switchGame .switchGameBox div[data-v-52bc2d09]{text-align:center;margin-top:30px}.switchGame .switchGameBox div p[data-v-52bc2d09]{margin:40px 0}",""]),t.exports=l},1335:function(t,e,n){t.exports=n.p+"img/cancel.34d8c60.png"},1336:function(t,e,n){t.exports=n.p+"img/confirm.e2f2505.png"},1337:function(t,e,n){"use strict";n(1299)},1338:function(t,e,n){var o=n(95),r=n(664),c=n(1339),l=o(!1),d=r(c);l.push([t.i,".play[data-v-325ea2a2]{color:#fff;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:11}.play[data-v-325ea2a2],.play .playBox[data-v-325ea2a2]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.play .playBox[data-v-325ea2a2]{z-index:12;background:url("+d+") no-repeat;background-size:100% 100%;width:662px}.play .playBox div[data-v-325ea2a2]{position:relative;padding:30px 120px 80px}.play .playBox div p[data-v-325ea2a2]{width:100%;position:absolute;left:50%;transform:translate(-50%);bottom:-35px;text-align:center}.play .playBox div p img[data-v-325ea2a2]{margin:0 50px;cursor:pointer}.play .playBox h3[data-v-325ea2a2]{color:#fff;font-size:28px;line-height:44px;margin-top:23px;text-align:center}.play .playBox h3 span[data-v-325ea2a2]{color:#f3ff68}",""]),t.exports=l},1339:function(t,e,n){t.exports=n.p+"img/playBack.6ca50d8.png"},1361:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{switchGameBoll:!1}},props:["poolData"],methods:{playBollEve:function(){this.switchGameBoll=!this.switchGameBoll},childPlayEve:function(){this.poolData.balance<10?this.$message.info("Not enough balance"):(this.switchGameBoll=!this.switchGameBoll,this.$emit("childPlayMethod"))}}},r=(n(1337),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.switchGameBoll?o("div",{staticClass:"play"},[o("div",{staticClass:"playBox"},[o("div",[o("h3",[o("span",[t._v("10 "+t._s(t.poolData.name)+" TOKEN")]),t._v(" IS REQUIRED\n        TO PLAY THIS GAME.\n      ")]),t._v(" "),o("h3",[t._v("\n        Balance:\n        "),o("span",[t._v(t._s(t.poolData.balance)+" "+t._s(t.poolData.name))])]),t._v(" "),o("p",[o("img",{attrs:{src:n(1335)},on:{click:function(e){t.switchGameBoll=!t.switchGameBoll}}}),t._v(" "),o("img",{attrs:{src:n(1336)},on:{click:t.childPlayEve}})])])])]):t._e()}),[],!1,null,"325ea2a2",null);e.default=component.exports},1391:function(t,e,n){t.exports=n.p+"img/switch.80c6531.png"},1392:function(t,e,n){t.exports=n.p+"img/button111.fb71509.png"},1393:function(t,e,n){t.exports=n.p+"img/gameButton1.64c1416.png"},1394:function(t,e,n){t.exports=n.p+"img/gameButton2.88b11b2.png"},1395:function(t,e,n){t.exports=n.p+"img/gameButton3.c9d3cce.png"},1396:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMKSURBVHgBzVRbSFRRFN373JlJR1NLkkIILVCJxGDESLOUsNSCog8zEg2CKPBHiiTDvCYaBiX1VX4pBBVGIZQ90BiS5qOUPrIsx0eUZpSaps6MM/ee3bn2AGMed4TC9XnvWWfttc9eG2CpYUOPbMoakkMgSDC9By1dsjnaBJdVhd3NtJ9eBUFAl4hlRDabI+AiIB4DoFzCkOZNL+Uo0ImAInGiPeYZVvNTAIaAsAMJ8sLD8ZJloDwSdAD9/bTQNWOYfbScEGsQoZUR3lZV4UXiOQhYDERNkhHKrPHyJCzWSfjglyJi7ISo/ion6lWBSsFAhxkxAyKVCHf5Hg80bLZXRSxGBLf21ezhqnoWVDoFyB0EbMqkGHe7ie/njD/igOnEqZ4xTDQBVmvv5ksEvQtUpiEaS4m7mxkYY12Trnv5acu+yShz7YBMMmv/4IqEudBcRPyEwIsJYHh8DmrfbJTdAUUy39euAbdnr+SG6/AVXNasKlW0hbwUI56EMLW70RBt/G5yhs3mKMgGbOsqe9DH+T9IG66LtnQdNUKQ0ATT++WYLJIN8E9B/qf1/0GzPG93sRUJvjfugg/a1DwZlHJJUcc6E+QXoFF0YktP2UqTISoFR6nTmi0rPkU0ZLytXw7oPMk4t0mMdSugxhoSpNdWXEiUiVjbyPkVIU7nWk5gQpAOce448yzpwrRfJ7+RN34lYnp8ogGZCKsC90liMW7FcOt5UsWE5k6s+yiuaJfyEARmAsb3oZEVPo2rHPJ2n8/eaxcpCrsh+hwqMbzDiR8AlB6KlE+JGBRwhW6KtKeLMnYoTtd2W3LdO1/58Lm7tKVnRl4iiHMqUYUkSQ1IPFG4KxRCjUzC44KdI1ZP4a7kZX3+AhhwinaKgDk42sQWXi+S36Ry6hfbsYyERVDUotWvettbClpUf3foGtVtA+eSiUOrmNH4X5/GxFscYcMdbdZsqxKIry8P2sqwV6dIiI8FIwyJHZyd+vigO7XRo4euP3RCKGOwOoN5eLRj5nObXoHgMZ9oWiL76S/8AOZNU+ZAcG1KAAAAAElFTkSuQmCC"},1397:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFhSURBVHgBtVXRbYMwED2i/JcRPAIjpBtkBLoBnSDZoGxAN2g7QegE6QbQCWAD9144qxcLkA8pTzpZ2Of3fO/AZBTBe+94ONA29FmWtXpiz4Q5j7maO3K8cfySDU8cLfP1am7Eic9+Ho4M4Pz3GY52d1OZ4lnilbYBLnwrni9M7oUciz/s38iqo9pgwc2i0APmOYEbFXxKQiFjHz2nopDD6ueJm9UuiLCCRnHUlAj0Szw/yHN510csRAlo2NUgAMJBiXUcTZz0gSRJOGrBBAE40OCVx8FEwMVJYREilYxNAnmwp1T7i6VkiNSyYUipQk4bcPUp34/0pFVCbiGvUcQVWSHlh7JLNZ+L70Nqn9ZEcv9/DZzgr9jSLXq9UeisLENV1i89SeSy1pM57MgGXGYj3zd96garwGMgja7UG1Wn2pStkdJ0I2LEH87NpL3QdPv2FtuCQOdtKKwVOLIBzR/jyT8BOujGB0ySagAAAABJRU5ErkJggg=="},1398:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAESSURBVHgBjVPREYIwDKWe/zJC3cARGEE3YAQ30A0YAZ1AN4ANZANwAnCC+h6kXCkUzd27pk3ymqSpijwxxsRYDsAR2AEfoAJKpVQTLQQkQC36GWgFJXADnrSbQTK5YEZAuUjgdeY0+KVCVE/sDgGDD9GKwK6FoAgR0PjiDZLJOUBC34T7LRrDWk/Qx7Rw1tGR/j4BGwnbHeqFjV1Llw3MA7Y+a+qbpYY5EkvKvk9jy9lgLZZqFeEs8Ilbj2TUSfAGtB+JWlMsewv2xTHTv+sHyxmetVImIsOV200sz5f9GZzKs2v3cJzGH8GJndYQM40POyReYCaXXNdu0PL+VmohNfK5Ej9GBYjsl9YAu18tfmXIF7T3TuP7ZJH1AAAAAElFTkSuQmCC"},1399:function(t,e,n){t.exports=n.p+"img/title.b0a7cc0.png"},1400:function(t,e,n){t.exports=n.p+"img/title1.234ed12.png"},1499:function(t,e,n){var content=n(1781);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("53fda58a",content,!0,{sourceMap:!1})},1780:function(t,e,n){"use strict";n(1499)},1781:function(t,e,n){var o=n(95),r=n(664),c=n(1782),l=n(1399),d=n(1400),f=o(!1),m=r(c),h=r(l),x=r(d);f.push([t.i,".games[data-v-931b6614]{color:#fff;padding-bottom:43px}.games .container[data-v-931b6614]{position:relative}.games div.logo[data-v-931b6614]{position:absolute;left:50%;top:72px;transform:translate(-50%,-50%);cursor:pointer}.games .iframeBox[data-v-931b6614]{background:url("+m+") no-repeat;background-size:100% 100%;position:relative;height:1479px}.games .iframeBox .switch[data-v-931b6614]{position:absolute;left:50%;bottom:44%;transform:translate(-50%,-50%);cursor:pointer}.games .iframeBox .iframes[data-v-931b6614]{width:1067px;height:588px;padding:145px 0 0 103px}.games .iframeBox .back[data-v-931b6614]{position:absolute;top:30%;left:50%;transform:translate(-50%,-50%)}.games .iframeBox .back p img[data-v-931b6614]{cursor:pointer}.games .leaderBox[data-v-931b6614]{position:absolute;bottom:50px;color:#fff;width:100%;display:flex;justify-content:center;align-items:center}.games .leaderBox .left[data-v-931b6614],.games .leaderBox .right[data-v-931b6614]{padding:0 12px}.games .leaderBox .right[data-v-931b6614]{width:100%;display:flex;justify-content:space-between;align-items:center}.games .leaderBox .right .leftBox[data-v-931b6614]{width:100%;padding:0 8px}.games .leaderBox .right .leftBox .round h4[data-v-931b6614]{background:url("+h+") no-repeat;background-size:100% 100%;height:60px;font-size:16px;display:flex;justify-content:space-around;align-items:center;padding:0 12px 8px}.games .leaderBox .right .leftBox .round ul[data-v-931b6614]{padding:0 20px;margin-top:-16px}.games .leaderBox .right .leftBox .round ul li[data-v-931b6614]{background:url("+x+") no-repeat;background-size:100% 100%;height:305px;font-size:13px;padding:8px}.games .leaderBox .right .leftBox .round ul li div[data-v-931b6614]{height:170px;overflow:auto}.games .leaderBox .right .leftBox .round ul li p[data-v-931b6614]{margin:10px 5px}.games .leaderBox .right .leftBox .round ul li a[data-v-931b6614]{color:#fff}.games .leaderBox .right .leftBox .round ul li label[data-v-931b6614]{width:62px;display:inline-block;font-size:16px;text-align:right}.games .leaderBox .right .leftBox .round ul li .title[data-v-931b6614]{margin:0 5px;padding-bottom:4px;font-size:18px;color:#a2a2a2}.games .leaderBox .right .leftBox .round ul li .name[data-v-931b6614]{width:120px;display:inline-block;margin-right:15px;text-align:left}.games .leaderBox .right #rankings .history[data-v-931b6614]{display:flex;justify-content:space-around;align-items:center}.games .leaderBox .right #rankings .history img[data-v-931b6614]{margin-top:-70px;cursor:pointer}.games .leaderBox .right #rankings .history div[data-v-931b6614]{height:auto;overflow:hidden;width:100%;margin-top:-70px}.games .leaderBox .right #rankings .history div p[data-v-931b6614]:first-child{margin-top:0}.games .leaderBox .right #rankings .history div p[data-v-931b6614]{background:url("+h+") no-repeat;background-size:100% 100%;height:44px;text-align:center;line-height:40px;margin:-7px 0 0;font-size:17px;cursor:pointer}.games .leaderBox .right #rankings .loading div[data-v-931b6614]{overflow:hidden}.games .leaderBox .left[data-v-931b6614]{width:100%}.games .leaderBox .left div[data-v-931b6614]{text-align:center}.games .leaderBox .left div h2[data-v-931b6614]{font-size:24px;text-shadow:0 5.00052px 7.00072px rgba(64,221,132,.3),0 0 5.00052px #40dd84;display:flex;justify-content:center;align-items:center}.games .leaderBox .left div h2 span[data-v-931b6614]{margin:0 6px;cursor:pointer}.games .leaderBox .left div h5[data-v-931b6614]{margin-top:14px;font-size:18px;text-shadow:0 5.00052px 7.00072px rgba(64,221,132,.3),0 0 5.00052px #40dd84;color:#fff}.games .leaderBox .left div ul[data-v-931b6614]{margin-top:43px}.games .leaderBox .left div ul h3[data-v-931b6614]{font-size:24px;text-shadow:0 5.00052px 7.00072px rgba(64,221,132,.3),0 0 5.00052px #40dd84}.games .leaderBox .left div ul p[data-v-931b6614]{color:#40dd84;text-shadow:0 5.34643px 7.485px rgba(64,221,132,.3),0 0 5.34643px #40dd84;font-size:18px;margin-top:10px}.games .leaderBox .left div ul .round[data-v-931b6614]{margin-top:43px}.games .leaderBox .left div ul .round h4[data-v-931b6614]{color:#fff;font-size:20px;text-shadow:0 4.1659px 5.83226px rgba(64,221,132,.3),0 0 4.1659px #40dd84}.games .leaderBox .left div ul .round p[data-v-931b6614]{font-size:12px}.games .leaderBox .left div ul .round .time[data-v-931b6614]{font-size:13px}",""]),t.exports=f},1782:function(t,e,n){t.exports=n.p+"img/back1.00b384e.png"},1810:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:n(1330)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title"},[n("span",{staticClass:"name"},[t._v("PLAYER")]),t._v(" "),n("span",[t._v("SCORE")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h4",[o("label",[t._v("RANKINGS HISTORY")]),t._v(" "),o("img",{attrs:{src:n(1398)}})])}],r=n(68),c=n(25),l=(n(83),n(126),n(99),n(67),n(98),n(32),n(153),n(84),n(154),n(69)),d=n(315),f=n(316),m=(n(1272),n(1319)),h=n(1300),x=n(1361);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{Switchs:m.default,Currency:h.default,Play:x.default},data:function(){return{attr:[],leaderboards:[],current:[],rankingsNum:0,boll:!1,loading:!1,ss:0,mm:0}},filters:{round:function(t){if(t){var e=parseInt(t);return e+=1}return t},keys:function(t){switch(t){case 0:return"1st";case 1:return"2nd";case 2:return"3rd"}}},computed:{poolData:function(){return this.$store.state.tokens.tokens}},watch:{poolData:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t&&(e.attrsEve(t.assetId),o=e,setInterval(Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(f.a+"nexus/leaderboard/current",{game_id:2,asset_id:t.assetId});case 2:n=e.sent,(r=n.leaderboard)&&(c=r.list).length&&(o.current=c);case 5:case"end":return e.stop()}}),e)}))),3e4));case 1:case"end":return n.stop()}}),n)})))()}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t,t.mm=t.$moment().format("mm"),t.ss=t.$moment().format("ss"),t.mm=60-t.mm,setInterval((function(){n.ss-=1,n.ss<=0&&(n.ss=60,n.mm-=1),n.mm<0&&(n.ss=0,n.mm=60,n.attrsEve(n.poolData.assetId),n.INIT_ASSETS())}),1e3),window.addEventListener("message",(function(t){switch(console.log("666这里是接收到的消息，消息内容在event.data属性中",t),console.log(t.data,1111),t.data){case"updateScore":n.attrsEve(n.poolData.assetId),n.INIT_ASSETS();break;case"jumpToLeaderBoard":window.scrollTo(1e4,1e4)}}),!1),localStorage.setItem("gameid",2);case 7:case"end":return e.stop()}}),e)})))()},methods:A(A({},Object(l.b)("tokens",["INIT_ASSETS"])),{},{playEve:function(){if(localStorage.getItem("gas")<=0)return this.$message.info("Gas is not enough"),!1;this.$refs.playFunction.playBollEve()},switchEve:function(){this.$refs.childFunction.switchGameBollEve()},currencyEve:function(){this.$refs.currencyFunction.switchCurrencyEve(this.poolData)},compare:function(p){return function(t,e){var a=t[p];return e[p]-a}},attrsEve:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var o,r,i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!localStorage.getItem("access_token")){n.next=10;break}return e.loading=!1,n.next=4,Object(d.a)(f.a+"nexus/leaderboard",{asset_id:t});case 4:if(o=n.sent,r=o.leaderboards)for(i in r)c=r[i].round,r[i].round=c.substring(c.length-2,c.length);console.log(444444,r),e.leaderboards=r,e.loading=!0;case 10:case"end":return n.stop()}}),n)})))()},leaderboardsEve:function(t){this.rankingsNum=t}})},B=(n(1780),n(52)),component=Object(B.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"games"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("Switchs",{ref:"childFunction"}),t._v(" "),o("Play",{ref:"playFunction",attrs:{poolData:t.poolData},on:{childPlayMethod:function(e){t.boll=!t.boll}}}),t._v(" "),o("Currency",{ref:"currencyFunction"}),t._v(" "),o("div",{staticClass:"iframeBox"},[o("p",{staticClass:"switch"},[o("img",{attrs:{src:n(1391)},on:{click:t.switchEve}})]),t._v(" "),o("div",[t.boll?o("div",{staticClass:"iframes"},[o("iframe",{attrs:{width:"100%",height:"100%",src:"https://playrank.io/flappybird/"}})]):o("div",{staticClass:"back"},[o("p",[o("img",{attrs:{src:n(1392)},on:{click:t.playEve}})]),t._v(" "),o("p",[o("img",{attrs:{src:n(1393)},on:{click:function(e){t.boll=!t.boll}}})]),t._v(" "),o("p",[o("img",{attrs:{src:n(1394)},on:{click:function(e){t.boll=!t.boll}}})]),t._v(" "),o("p",[o("img",{attrs:{src:n(1395)},on:{click:function(e){t.boll=!t.boll}}})])])])]),t._v(" "),o("div",{staticClass:"leaderBox"},[o("div",{staticClass:"left"},[t.poolData?o("div",[o("h2",{on:{click:t.currencyEve}},[o("img",{attrs:{width:"30px",src:t.poolData.img}}),t._v(" "),o("span",[t._v(t._s(t.poolData.name)+" Pool")]),t._v(" "),o("img",{attrs:{src:n(1396)}})]),t._v(" "),o("h5",[t._v("\n            Balance："+t._s(t.poolData.balance)+"\n          ")]),t._v(" "),o("ul",[o("li",[t.leaderboards[0]?o("h3",[t._v("\n                Rd. "+t._s(t.leaderboards[0].round)+" Prize Pool\n              ")]):t._e(),t._v(" "),t._l(t.current,(function(e,n){return o("p",{key:n},[t._v("\n                "+t._s(t._f("keys")(n))+" "+t._s(e.getReward)+" "+t._s(t.poolData.name)+"\n              ")])}))],2),t._v(" "),o("li",{staticClass:"round"},[o("h4",[t._v("\n                Next Round: "),t.leaderboards[0]?o("span",[t._v(t._s(t._f("round")(t.leaderboards[0].round)))]):t._e()]),t._v(" "),o("p",{staticClass:"time"},[t._v("\n                TIME LEFT: "+t._s(t.mm)+":"+t._s(t.ss)+" MINUTES\n              ")])])])]):t._e()]),t._v(" "),o("div",{staticClass:"right"},[o("ul",{staticClass:"leftBox"},[o("li",{staticClass:"round"},[o("h4",[o("label",[t._v("ROUND "),t.leaderboards[t.rankingsNum]?o("span",[t._v(t._s(t.leaderboards[t.rankingsNum].round))]):t._e(),t._v(" RANKINGS")]),t._v(" "),o("img",{attrs:{src:n(1397)}})]),t._v(" "),o("ul",[o("li",[t._m(1),t._v(" "),t.leaderboards[t.rankingsNum]?o("div",t._l(t.leaderboards[t.rankingsNum].list,(function(e,n){return o("p",{key:n},[o("label",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("label",[t._v(t._s(e.score))])])})),0):t._e()])])])]),t._v(" "),o("ul",{staticClass:"leftBox",attrs:{id:"rankings"}},[o("li",{staticClass:"round"},[t._m(2),t._v(" "),o("ul",[t.loading?o("li",{staticClass:"history"},[o("div",t._l(t.leaderboards,(function(e,n){return o("p",{key:e.round,on:{click:function(e){return t.leaderboardsEve(n)}}},[t._v("\n                    ROUND "+t._s(e.round)+"\n                  ")])})),0)]):o("li",{staticClass:"loading"},[o("p",{staticStyle:{"text-align":"center",margin:"20px 0px"}},[o("a-spin")],1)])])])])])])],1)])}),o,!1,null,"931b6614",null);e.default=component.exports;installComponents(component,{Switchs:n(1319).default})}}]);