(function(t){function e(e){for(var o,a,s=e[0],r=e[1],l=e[2],d=0,f=[];d<s.length;d++)a=s[d],i[a]&&f.push(i[a][0]),i[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fa9":function(t,e,n){},"187b":function(t,e,n){"use strict";var o=n("4dc6"),i=n.n(o);i.a},"313b":function(t,e,n){"use strict";var o=n("fbdb"),i=n.n(o);i.a},"4dc6":function(t,e,n){},"566d":function(t,e,n){"use strict";var o=n("bcaf"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("e956"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("0298"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("06db"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("23be"),n("7c0e"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var o=n("2b0e"),i=n("d42c"),c=n("6baf"),a=n("d56f"),s=n("2f62"),r=n("bc3a"),l=n.n(r),u="http://".concat("78.155.206.197",":").concat("8080","/api/"),d=function(){return{name:"",eventId:""}},f=d(),v={headers:{"Content-Type":"application/json"}},p={getMeetupName:function(t){var e=t.name;return e},getEventId:function(t){var e=t.eventId;return e}},h={getEventId:function(t,e){t.getters;var n=t.commit,o=e.name,i=e.songs,c={name:o,songs:i};return l.a.post("".concat(u,"getEventId/"),c,v).then(function(t){var e=t.data;n("setEventId",e)}).catch(function(t){throw t})}},m={setEventId:function(t,e){var n=e.eventId;t.eventId=n}},b={state:f,getters:p,actions:h,mutations:m},g="http://".concat("78.155.206.197",":").concat("8080","/api/"),_=function(){return{songs:[],socket_connected:!1,currentSongs:[],timer:0,choice:{},total:0,lottery:!1}},y=_(),k={headers:{"Content-Type":"application/json"}},S={getAllSongs:function(t){var e=t.songs;return e},getTimer:function(t){var e=t.timer;return e},getLottery:function(t){var e=t.lottery;return e},getCurrentSongs:function(t){var e=t.currentSongs;return e},getTotal:function(t){var e=t.total;return e}},C={getSongs:function(t,e){t.getters;var n=t.commit,o=e.eventId;return l.a.get("".concat(g,"event/").concat(o,"/tracks/"),null,k).then(function(t){var e=t.data;n("setSongs",e)}).catch(function(t){throw t})},setCurrentSongs:function(t,e){t.getters;var n=t.commit,o=e.eventId,i=e.data;return l.a.post("".concat(g,"event/").concat(o,"/currentTracks/"),i,k).then(function(t){t.data;n("setChoice",array.tracks)}).catch(function(t){})},vote:function(t,e){t.getters,t.commit;var n=e.eventId,o=e.trackId,i=e.inc,c=e.value;return l.a.get("".concat(g,"event/").concat(n,"/vote/").concat(o,"/").concat(i,"/").concat(c),null,k).then(function(t){t.data}).catch(function(t){throw t})},SOCKET_Current:function(t,e){t.getters;var n=t.commit,o=e.data;n("CurrentSongs",o)},SOCKET_poll:function(t,e){t.getters;var n=t.commit,o=e.data;n("ChoiceCount",{data:o})},SOCKET_lottery:function(t,e){var n=t.commit;e.data;n("startedLottery")},editTotal:function(t,e){var n=t.commit,o=e.flg,i=e.value;n("editedTotal",{flg:o,value:i})},startLottery:function(t,e){t.commit;return l.a.get("".concat(g,"event/").concat(e,"/startLottery"),null,k).then(function(t){t.data}).catch(function(t){throw t})}},w={setSongs:function(t,e){t.songs=e},SOCKET_OPENED:function(t){t.socket_connected=!0},SOCKET_CLOSED:function(t){t.socket_connected=!1},CurrentSongs:function(t,e){t.currentSongs=e.tracks,t.timer=e.timer},ChoiceCount:function(t,e){var n=e.data;t.currentSongs.forEach(function(e){n.choice.forEach(function(t){e.id===t.id&&(e.count=t.count)}),t.total=n.total})},editedTotal:function(t,e){var n=e.flg,o=e.value;console.log(o),n?t.total-=o:t.total+=o},startedLottery:function(t){t.lottery=!0}},O={state:y,getters:S,actions:C,mutations:w};function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){E(t,e,n[e])})}return t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o["a"].use(s["a"]);var j=function(){return I({},b.state,O.state)},$=j(),P=I({},b.getters,O.getters),T=I({},b.actions,O.actions),x=I({},O.mutations,b.mutations),A=new s["a"].Store({getters:P,actions:T,mutations:x,state:$}),L=(n("82c1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-app",{attrs:{id:"app",params:t.f7params}},[n("f7-view",{attrs:{id:"main-view",router:!0,"push-state":!0}})],1)}),D=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-page-content",[n("f7-navbar",[n("f7-nav-left",[n("i",{staticClass:"f7-icons",staticStyle:{"padding-left":"10px"},on:{click:t.back}},[t._v("chevron-left")])]),n("f7-nav-title",[t._v("\n        Генерация QR-кода для мероприятия\n      ")]),n("f7-nav-right")],1),n("f7-list",[n("f7-block-title",[t._v("Имя Исполнителя")]),n("f7-list-input",{attrs:{label:"",type:"text",value:t.name,placeholder:"Имя","clear-button":""},on:{input:function(e){t.name=e.target.value}}})],1),n("f7-list",[n("f7-block-title",[n("span",[t._v("Добавить песни")])]),n("f7-block-header",[t._v("Здесь вы должны добавить песни, которые будут играть на вашем мероприятии")]),n("f7-block-title",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"0"}},[n("div",{staticStyle:{display:"flex"}},[n("div",{on:{click:t.delSong}},[n("i",{staticClass:"f7-icons"},[t._v("delete")])]),n("div",{on:{click:t.addSong}},[n("i",{staticClass:"f7-icons",staticStyle:{"margin-left":"10px"}},[t._v("add")])])])]),t._l(t.songs,function(t){return n("f7-list-input",{key:t.name+"-"+t.id,attrs:{value:t.title,placeholder:t.id+". Название песни"},on:{input:function(e){t.title=e.target.value}}})})],2),n("f7-block",[t.eventAdd?t._e():n("f7-button",{attrs:{big:"",fill:"",color:"red"},on:{click:t.generateLink}},[t._v("Генерировать QR-Код")])],1),n("f7-block",[t.eventAdd?n("f7-button",{attrs:{big:"",fill:"",color:"red"},on:{click:t.navigateEvent}},[t._v("Перейти в мероприятие")]):t._e()],1),n("f7-block",{staticStyle:{display:"flex","justify-content":"center"}},[t.eventAdd&&t.isDesktop?n("f7-button",{staticStyle:{width:"30%"},attrs:{big:"",fill:"",color:"red"},on:{click:t.closeQr}},[t._v("Открыть QR-код")]):t._e()],1),t.isDesktop?t._e():n("f7-block",{staticClass:"qr-code"},[t.link&&t.open?n("qrcode",{attrs:{value:t.link,options:{width:t.widthDevice}}}):t._e()],1),t.isDesktop&&t.open&&t.link?n("div",{class:{layoutQR:t.open},staticStyle:{width:"100%",height:"100%",position:"absolute",top:"0",display:"flex","justify-content":"center","align-items":"center","z-index":"1000"},on:{click:t.closeQr}},[n("qrcode",{staticClass:"qr-code-desktop",attrs:{value:t.link,options:{width:t.widthDevice}}})],1):t._e()],1)],1)},U=[],R={name:"main",data:function(){return{link:"",name:"",eventAdd:!1,songs:[{id:1}],open:!1}},computed:{isDesktop:function(){return this.$device.desktop},widthDevice:function(){return this.$device.desktop?document.body.clientWidth-500:document.body.clientWidth-100}},methods:{closeQr:function(){console.log("lol"),this.open=!this.open},addSong:function(){this.songs.push({id:this.songs.length+1})},delSong:function(){1!==this.songs.length&&this.songs.pop()},generateLink:function(){var t=this;this.name?this.songs.length<2||!this.songs[this.songs.length-1].title?this.$f7.dialog.alert("Выберите больше одной песни","Ошибка"):this.$store.dispatch("getEventId",{name:this.name,songs:this.songs}).then(function(){t.link="http://partymode.ru/#!/event/".concat(t.$store.getters["getEventId"],"/"),t.eventAdd=!0,t.open=!t.open}).catch(function(e){e.response&&500===e.response.status&&t.$f7.dialog.alert("Непредвиденная ошибка сервера","Ошибка")}):this.$f7.dialog.alert("Имя обязательное поле","Ошибка")},navigateEvent:function(){this.$f7router.navigate("/event/".concat(this.$store.getters["getEventId"],"/"))},back:function(){this.$f7router.back()}},mounted:function(){localStorage.setItem("admin",!0)}},B=R,K=(n("ae15"),n("2877")),V=Object(K["a"])(B,M,U,!1,null,"67c513ca",null),Q=V.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("div",{staticClass:"gradient"},[null!==t.selected_vote?n("div",{class:{disable:t.ended}},[n("div",{staticClass:"mynavbar"},[t._v("Голосование")]),n("div",{staticClass:"mycontainer"},[n("div",{staticClass:"subtitle"},[t._v("Вы проголосовали")]),n("VoteChart",{attrs:{votes:t.votes,total_votes:t.total_votes,selected:t.selected_vote,cancel_vote:t.cancel_vote}}),0==this.end?n("div",{staticClass:"cancel_button",on:{click:function(e){t.sheetOpen=!0}}},[n("i",{staticClass:"material-icons"},[t._v("\n            attach_money\n          ")]),t._v("\n          Усилить голос\n        ")]):t._e()],1)]):t._e(),null===t.selected_vote?n("div",{class:{disable:t.ended}},[n("div",{staticClass:"mynavbar"},[t._v("Голосование")]),n("div",{staticClass:"mycontainer"},[0!==this.realTime?n("div",{staticClass:"subtitle"},[t._v("Выберите следующую песню")]):t._e(),t.votes.length?t._e():n("div",{staticClass:"subtitle"},[t._v("Голосование скоро начнется")]),t._l(t.votes,function(e){return n("div",{key:e.id,staticClass:"vote_wrapper",on:{click:function(n){return t.make_vote(e)}}},[n("div",[n("div",{staticClass:"vote_name"},[t._v(t._s(e.title))]),n("div",{staticClass:"vote_artist"},[t._v(t._s(e.name))])])])})],2)]):t._e(),0!==this.realTime?n("div",{staticClass:"timer"},[0==this.end?n("div",[n("div",{staticClass:"subtitle_vote"},[t._v("До конца голосования:")]),t._v("\n        "+t._s(t.minutes)+":"+t._s(t.seconds)+"\n      ")]):t._e(),1==this.end?n("div",{staticClass:"time_is_over"},[t._v("\n        Время вышло!"),n("br"),n("p",[t._v("Голосование окончено")])]):t._e()]):t._e(),t.isAdmin?n("div",{staticStyle:{display:"flex","justify-content":"center","align-content":"center"}},[n("f7-button",{staticClass:"cancel_button",staticStyle:{"margin-bottom":"10%"},on:{click:function(e){t.popupOpen=!0}}},[t._v("Настройки голосования\n      ")])],1):t._e(),t.isAdmin?n("popup",{attrs:{opened:t.popupOpen,eventId:t.eventId},on:{"popup:closed":function(e){t.popupOpen=!1}}}):t._e(),null!==t.selected_vote?n("PaySheet",{attrs:{opened:t.sheetOpen,eventId:t.eventId,trackId:t.selected_vote,track:t.selectedTrack},on:{"sheet:closed":function(e){t.sheetOpen=!1}}}):t._e()],1)])},q=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"votes"},t._l(t.votes,function(e){return n("div",t._g({key:e.id,staticClass:"vote_wrapper"},{click:t.selected==e.id?function(){t.cancel_vote(e)}:function(){}}),[n("div",{staticClass:"vote_bar",style:[t.bar_animate?{width:Math.round(e.count/t.total_votes*100)+"%"}:{}]}),n("div",{staticClass:"vote_left"},[n("div",{staticClass:"vote_name"},[t._v(t._s(e.title))]),n("div",{staticClass:"vote_artist"},[t._v(t._s(e.name))])]),n("div",{staticClass:"vote_result"},[t.selected==e.id?n("i",{staticClass:"f7-icons"},[t._v("check")]):t._e(),t._v("\n      "+t._s(e.count)+"\n    ")])])}),0)},W=[],z={props:["votes","selected","total_votes","cancel_vote"],data:function(){return{bar_animate:!1}},mounted:function(){var t=this;setTimeout(function(){t.bar_animate=!0},1)}},J=z,H=(n("313b"),Object(K["a"])(J,F,W,!1,null,"56f53ec8",null)),Y=H.exports;function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Z(t,e,n){return e&&X(t.prototype,e),n&&X(t,n),t}var tt=function(){function t(e){G(this,t),this.store=e,this.websocket=null,this.url=null,this.retriesAvailable=3}return Z(t,null,[{key:"eventSocketURL",value:function(t){return"".concat("ws","://").concat("78.155.206.197",":").concat("8080","/spring/ws/event/").concat(t)}}]),Z(t,[{key:"connect",value:function(t){this.websocket&&this.disconnect(),this.websocket=new WebSocket(t),this.url=t,this._initEvents()}},{key:"checkConnection",value:function(e){var n=e.eventId,o=e.url;if(n||o||this.websocket)if(n||o||!this.websocket||3!==this.websocket.readyState){var i=null;n?i=t.eventSocketURL(n):o&&(i=o),this.url!==i?this.connect(i):3===this.websocket.readyState&&this.reconnect()}else this.reconnect()}},{key:"reconnect",value:function(){var t=this;this.retriesAvailable&&setTimeout(function(){t.connect(t.websocket.url),t.retriesAvailable--},2e3)}},{key:"disconnect",value:function(){this.websocket&&this.websocket.close(),this.websocket=null,this.url=null}},{key:"_initEvents",value:function(){this.websocket.addEventListener("open",this._onOpen.bind(this)),this.websocket.addEventListener("close",this._onClose.bind(this)),this.websocket.addEventListener("error",this._onError.bind(this)),this.websocket.addEventListener("message",this._onMessage.bind(this))}},{key:"_onOpen",value:function(t){console.log(t),this.store.commit("SOCKET_OPENED",{event:t}),this.retriesAvailable=5}},{key:"_onClose",value:function(t){console.log(t),this.store.commit("SOCKET_CLOSED",{event:t}),1e3!==t.code&&this.reconnect()}},{key:"_onError",value:function(t){console.log(t)}},{key:"_onMessage",value:function(t){var e=JSON.parse(t.data);this.store.dispatch("SOCKET_".concat(e.type),{data:e})}}]),t}(),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-popup",{staticClass:"poll-popup",attrs:{opened:t.opened,"tablet-fullscreen":""},on:{"popup:closed":function(e){return t.$emit("popup:closed")}}},[n("f7-page",[n("f7-navbar",[n("f7-nav-left"),n("f7-nav-title",[t._v("\n        Настройки голосования\n      ")]),n("f7-nav-right",[n("f7-link",{staticStyle:{"font-size":"14px",color:"rgb(234, 56, 56)"},on:{click:t.close}},[t._v("Зыкрыть")])],1)],1),n("f7-list",[n("f7-block-title",[t._v("Песни")]),n("f7-block-header",[t._v("Выберите песни, которые будут отображаться в голосовании")]),t._l(t.songs,function(e){return n("f7-list-item",{key:e.id,attrs:{color:"red",title:e.title,checkbox:""},on:{click:function(n){return t.addSongCurrent(e)}}})})],2),n("f7-list",[n("f7-block-title",[t._v("Время опроса")]),n("f7-list-item",{attrs:{title:"Длительность"}},[n("f7-stepper",{staticStyle:{border:"1px white solid",display:"flex","align-content":"center","justify-content":"center"},attrs:{color:"red",value:t.timer,min:10,max:300,step:10},on:{"stepper:change":t.editTime}})],1),n("f7-list-button",{attrs:{color:"red"},on:{click:t.sendCurrentSongs}},[t._v("Отправить на голосование")])],1),n("f7-list",[n("f7-block-title",[t._v("Случайный розыгрыш")]),n("f7-block-header",[t._v("Вы можете провести случайный розыгрыш подароков, среди людей присутствующих на мероприятии")]),n("f7-list-button",{attrs:{color:"red"},on:{click:t.startLottery}},[t._v("Нажмите чтобы разыграть")])],1)],1)],1)},nt=[];function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){it(t,e,n[e])})}return t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ct={name:"Popup",props:{opened:Boolean,eventId:String},data:function(){return{currentSongs:[],timer:60}},computed:ot({},Object(s["b"])({songs:"getAllSongs"})),methods:{editTime:function(t){this.timer=t},close:function(){this.$f7.popup.close()},addSongCurrent:function(t){for(var e,n=0;n<this.currentSongs.length;n++)if(this.currentSongs[n].id===t.id)return this.currentSongs.splice(n,1),void(e=!0);e||this.currentSongs.push(t)},sendCurrentSongs:function(){var t=this;if(this.currentSongs.length<2)this.$f7.dialog.alert("Выберите больше одной песни","Ошибка");else{var e={type:"Current",tracks:this.currentSongs,timer:this.timer};this.$store.dispatch("setCurrentSongs",{eventId:this.eventId,data:e}).then(function(){var e=t.$f7.toast.create({text:"Отправлено",position:"center",closeTimeout:1e3});e.open()}).catch(function(e){console.log("lol");var n=t.$f7.toast.create({text:"Произошла ошибка",position:"center",closeTimeout:1e3});n.open()}),this.$f7.popup.close()}},startLottery:function(){this.$store.dispatch("startLottery",this.eventId)}}},at=ct,st=(n("88c8"),Object(K["a"])(at,et,nt,!1,null,null,null)),rt=st.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showAppleButton?n("div",{staticClass:"apple-pay-button",on:{click:t.PayButtonClicked}}):t._e(),n("br"),t.showError?n("p",[t._v("If you had a more magical brower, an Apple Pay button would appear here.")]):t._e()])},ut=[],dt="merchant.io.github.justindonnelly";function ft(t){return new Promise(function(t,e){var n={};n.merchantIdentifier=dt,n.merchantSessionIdentifier="fake-session-id",n.nonce="fake-nonce",n.domainName="example.com",n.epochTimestamp="1467051059",n.signature="fake-signature",t(n)})}function vt(t){return new Promise(function(t,e){t(!0)})}function pt(){try{alert("norm");var t={countryCode:"US",currencyCode:"USD",supportedNetworks:["visa","masterCard"],merchantCapabilities:["supports3DS"],requiredShippingAddressFields:["postalAddress"],total:{label:"Fake Merchant",amount:"155.00"}},e=new ApplePaySession(1,t);e.onvalidatemerchant=function(t){ft(t.validationURL).then(function(t){e.completeMerchantValidation(t)})},e.onpaymentauthorized=function(t){vt(t.payment.token).then(function(t){e.completePayment(t?ApplePaySession.STATUS_SUCCESS:ApplePaySession.STATUS_FAILURE),console.log("Thank you!")})},e.oncancel=function(t){console.log("You cancelled. Sorry it didn't work out.")},alert("i am close"),e.begin(),alert("nah")}catch(n){console.log("Developer mistake: '"+n.message+"'")}}var ht="merchant.io.github.justindonnelly",mt={name:"PayButton",data:function(){return{showAppleButton:!0,showError:!1}},mounted:function(){window.ApplePaySession?ApplePaySession.canMakePaymentsWithActiveCard(ht).then(function(t){t?this.showAppleButton=!0:this.showError=!0}).catch(function(){}):this.showError=!0},methods:{PayButtonClicked:function(){pt()}}},bt=mt,gt=(n("566d"),Object(K["a"])(bt,lt,ut,!1,null,"45c7e197",null)),_t=gt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-sheet",{staticClass:"demo-sheet",attrs:{opened:t.opened},on:{"sheet:closed":function(e){return t.$emit("sheet:closed")}}},[n("f7-toolbar",[n("div",{staticClass:"left"}),n("div",{staticClass:"right"},[n("f7-link",{attrs:{"sheet-close":""}},[t._v("Закрыть")])],1)]),n("f7-page-content",[t.track?n("f7-block",[n("p",{staticClass:"trackname"},[t._v(t._s("Вы голосуете за "+t.track.name+" – "+t.track.title))]),n("f7-row",[n("f7-col",[n("button",{staticClass:"col button button-outline",on:{click:function(e){return t.payVote(50)}}},[t._v("50 руб."),n("br"),t._v("+ 1 голосов")])]),n("f7-col",[n("button",{staticClass:"col button button-outline",on:{click:function(e){return t.payVote(100)}}},[t._v("100 руб."),n("br"),t._v("+ 5 голосов")])])],1),n("f7-row",[n("f7-col",[n("button",{staticClass:"col button button-outline",on:{click:function(e){return t.payVote(500)}}},[t._v("500 руб."),n("br"),t._v("+ 25 голосов")])]),n("f7-col",[n("button",{staticClass:"col button button-outline",on:{click:function(e){return t.payVote(1e3)}}},[t._v("1000 руб."),n("br"),t._v("+ 50  голосов")])])],1)],1):t._e()],1)],1)},kt=[],St={name:"PaySheet",props:["opened","track","eventId","trackId"],methods:{payVote:function(t){this.$store.dispatch("vote",{eventId:this.eventId,trackId:this.trackId,inc:"inc",value:t}),this.$f7.sheet.close()}}},Ct=St,wt=(n("abb6"),Object(K["a"])(Ct,yt,kt,!1,null,"26301e3e",null)),Ot=wt.exports;function It(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Et(t,e,n[e])})}return t}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var jt={name:"event",props:{eventId:String},data:function(){return{selected_vote:null,current_time:0,finish_time:Math.floor(Date.now()/1e3+10),seconds:0,minutes:0,time_left:1,end:1,popupOpen:!1,sheetOpen:!1}},components:{PaySheet:Ot,PayButton:_t,Popup:rt,VoteChart:Y},created:function(){var t=this;localStorage.getItem("admin")&&this.$store.dispatch("getSongs",{eventId:this.eventId}).then(function(){}).catch(function(e){t.$f7.dialog.alert("".concat(e.response.status),"Error")})},mounted:function(){var t=localStorage.getItem("selected_vote");t&&(this.selected_vote=t),this.socket=new tt(this.$store);var e=tt.eventSocketURL(1);this.socket.connect(e),this.timerStart()},beforeDestroy:function(){this.socket.disconnect()},methods:{timerStart:function(){var t=this,e=function(){t.current_time=Math.floor(Date.now()/1e3);var e=Math.floor(t.realTime/1e3)-t.current_time;e<=1?(t.seconds="00",t.minutes="00",t.end=1):(t.seconds=e%60,e=Math.floor(e/60),t.minutes=e%60,t.minutes<10&&(t.minutes="0"+t.minutes),t.seconds<10&&(t.seconds="0"+t.seconds),t.end=0)};e(),setInterval(e,1e3)},make_vote:function(t){t.count++,this.selected_vote=t.id,localStorage.setItem("selected_vote",t.id),this.$store.dispatch("vote",{eventId:this.eventId,trackId:t.id,inc:"inc",value:"1"})},cancel_vote:function(t){this.selected_vote=null,localStorage.removeItem("selected_vote"),t.count--,this.$store.dispatch("vote",{eventId:this.eventId,trackId:t.id,inc:"dec",value:"0"})}},computed:It({},Object(s["b"])({realTime:"getTimer",winLottery:"getLottery"}),{isAdmin:function(){return!!localStorage.getItem("admin")},votes:function(){return this.selected_vote=null,localStorage.removeItem("selected_vote"),this.$store.getters["getCurrentSongs"]},total_votes:function(){return this.$store.getters["getTotal"]},selectedTrack:function(){var t=this;return this.votes.find(function(e){return e.id==t.selected_vote})},ended:function(){return!!this.end}}),watch:{winLottery:function(){this.$f7.dialog.alert("Вы выиграли в лотерее","Поздравляю")}}},$t=jt,Pt=(n("187b"),Object(K["a"])($t,N,q,!1,null,null,null)),Tt=Pt.exports,xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("f7-page",{staticClass:"main-page"},[o("div",{staticClass:"main-block"},[o("div",{staticClass:"img-layer"},[o("div",{staticClass:"smallimage"},[o("img",{staticClass:"concert-img",attrs:{src:n("b131")}})]),o("div",{staticClass:"bigimage"},[o("img",{staticClass:"concert-img",attrs:{src:n("d411")}})])])]),o("div",{staticClass:"main-block"},[o("div",{staticClass:"main-layout-block"},[o("div",{staticClass:"description"},[o("div",{staticClass:"header"},[t._v("Узнайте лучше свою аудиторию!")]),t._v("\n        Запустите голосование и дайте возможность посетителям концертов самим определить следующую песню\n      ")]),o("f7-button",{attrs:{big:"",fill:"",color:"red"},on:{click:t.start}},[t._v("Создать мероприятие")])],1)])])},At=[],Lt={name:"main",methods:{start:function(){this.$f7router.navigate("/admin/")}}},Dt=Lt,Mt=(n("ee12"),Object(K["a"])(Dt,xt,At,!1,null,null,null)),Ut=Mt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-page-content",[n("f7-navbar",[n("f7-nav-left",[n("i",{staticClass:"f7-icons",staticStyle:{"padding-left":"10px"},on:{click:t.back}},[t._v("chevron-left")])]),n("f7-nav-title",[t._v("\n      404\n    ")]),n("f7-nav-right")],1),n("f7-block",[t._v("\n    :(\n  ")])],1)],1)},Bt=[],Kt={name:"notFound",methods:{back:function(){this.$f7router.navigate("/",{reloadCurrent:!0,ignoreCache:!0,reloadAll:!0})}}},Vt=Kt,Qt=Object(K["a"])(Vt,Rt,Bt,!1,null,"efd28abe",null),Nt=Qt.exports,qt=[{path:"/",component:Ut},{path:"/admin/",component:Q},{path:"/event/:eventId/",component:Tt},{path:"(.*)",component:Nt}],Ft={data:function(){return{popupOpened:!1,isIE:this.$device.ie,isLogin:!1,f7params:{id:"io.framework7.hack",name:"Hack",theme:"ios",routes:qt,pushState:!0,history:!0,on:{routeChanged:function(t,e,n){localStorage.setItem("routersHistory",n.history)}}}}}},Wt=Ft,zt=Object(K["a"])(Wt,L,D,!1,null,null,null),Jt=zt.exports;n("9e46");i["a"].use(c["a"]),o["a"].component(a["a"].name,a["a"]),new o["a"]({template:"<App/>",components:{app:Jt},store:A,data:function(){return{theme:"ios"}},render:function(t){return t(Jt)}}).$mount("#app")},"6a03":function(t,e,n){},8871:function(t,e,n){},"88c8":function(t,e,n){"use strict";var o=n("6a03"),i=n.n(o);i.a},"9e46":function(t,e,n){},abb6:function(t,e,n){"use strict";var o=n("0fa9"),i=n.n(o);i.a},ae15:function(t,e,n){"use strict";var o=n("8871"),i=n.n(o);i.a},b131:function(t,e,n){t.exports=n.p+"static/img/concert.fd0c5da8.jpg"},baa9:function(t,e,n){},bcaf:function(t,e,n){},d411:function(t,e,n){t.exports=n.p+"static/img/concert2.0f9e1203.jpg"},ee12:function(t,e,n){"use strict";var o=n("baa9"),i=n.n(o);i.a},fbdb:function(t,e,n){}});
//# sourceMappingURL=app.00db3d75.js.map