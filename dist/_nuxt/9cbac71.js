(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(16);var r=n(279),o=n.n(r).a.create({baseUrl:"/proApi",timeout:35e3});function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{"Content-Type":"application/json"};return new Promise((function(r,c){t.game_id=parseInt(localStorage.getItem("gameid")),o({url:e,method:"post",data:t,headers:n}).then((function(e){1001==e.data.code&&(localStorage.removeItem("access_token"),alert(e.data.message),location.reload()),r(e.data)})).catch((function(e){c(e)}))}))}},233:function(e,t,n){"use strict";t.a="https://api.playrank.io/"},261:function(e,t){},263:function(e,t){},264:function(e,t){},265:function(e,t){},267:function(e,t){},268:function(e,t){},269:function(e,t){},270:function(e,t){},271:function(e,t){},272:function(e,t){},275:function(e,t){},276:function(e,t){},277:function(e,t){},278:function(e,t){},311:function(e,t,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("1852fd9e",content,!0,{sourceMap:!1})},358:function(e,t,n){e.exports=n.p+"img/logo.01af1a8.png"},359:function(e,t,n){e.exports=n.p+"img/button.a91eafa.png"},360:function(e,t,n){"use strict";n(311)},361:function(e,t,n){var r=n(66),o=n(234),c=n(362),l=r(!1),d=o(c);l.push([e.i,".claims[data-v-36d8e5e6]{color:#fff;margin-top:52px}.claims ul[data-v-36d8e5e6]{display:grid;grid-gap:20px;grid-template-columns:repeat(2,1fr)}.claims ul li[data-v-36d8e5e6]{background:url("+d+") no-repeat;background-size:100% 100%;justify-content:space-around;align-items:center;display:flex;padding:30px 0;position:relative}.claims ul li .popup[data-v-36d8e5e6]{position:absolute;top:0;left:-30px;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.claims ul li div[data-v-36d8e5e6]{margin-left:28px}.claims ul li div h3[data-v-36d8e5e6]{font-size:24px}.claims ul li div p[data-v-36d8e5e6]{font-size:14px;margin-bottom:20px}.claims ul li div p span[data-v-36d8e5e6]{color:#40dd84;font-size:12px;margin-left:10px}",""]),e.exports=l},362:function(e,t,n){e.exports=n.p+"img/back.b5ba669.png"},478:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(54),n(232)),c=n(233),l=n(244),d=n.n(l),f={data:function(){return{score:0,boll:!1}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadEve();case 1:case"end":return t.stop()}}),t)})))()},methods:{claimsEve:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.boll=!0,t.next=3,Object(o.a)(c.a+"crypto/claim",{access_token:localStorage.getItem("access_token")});case 3:n=t.sent,r=n.message,e.boll=!1,e.loadEve(),alert(r);case 8:case"end":return t.stop()}}),t)})))()},loadEve:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,data,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new d.a(d.a.givenProvider||new d.a.providers.HttpProvider("http://localhost:7545")),t.next=3,Object(o.a)(c.a+"crypto/reward",{access_token:localStorage.getItem("access_token")});case 3:if(r=t.sent,"0x"!=(data=r.data).result){t.next=7;break}return t.abrupt("return",!1);case 7:l=n.eth.abi.decodeParameter("uint256",data.result),console.log(l,"领取奖励"),e.score=l;case 10:case"end":return t.stop()}}),t)})))()}}},m=(n(360),n(26)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"claims"},[r("div",{staticClass:"container"},[r("ul",[r("li",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.boll,expression:"boll"}],staticClass:"popup"}),e._v(" "),r("img",{attrs:{src:n(358)}}),e._v(" "),r("div",[r("h3",[e._v("Game Tokens")]),e._v(" "),r("p",[e._v("\n            Claim Rewards"),r("span",[e._v(e._s(e.score))])]),e._v(" "),r("a",{attrs:{href:"javascript:;"},on:{click:e.claimsEve}},[r("img",{attrs:{src:n(359)}})])])])])])])}),[],!1,null,"36d8e5e6",null);t.default=component.exports}}]);