(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){e.exports={FriendCard:"FriendCard_FriendCard__1c8ED",open:"FriendCard_open__3UQqs",InfoHolder:"FriendCard_InfoHolder__2ReJX",MediumCardImage:"FriendCard_MediumCardImage__oc2wP",NameField:"FriendCard_NameField__2yMFw",GuildField:"FriendCard_GuildField__Z0oUg",DetailField:"FriendCard_DetailField___oYb8",ErrorMessage:"FriendCard_ErrorMessage__3xd-j"}},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),i=n.n(o),c=(n(42),n(40),n(15)),l=n.n(c);var u=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.characterData=function(e,t,r,a){return l.a.get(n.characterDataUrl(n.apiKey,e,t,r,a)).catch(function(e){throw console.log(e),e})},this.characterImageUrl=function(e,t,n){var r=t.replace("avatar.jpg","".concat(n,".jpg"));return"".concat("http://render-").concat(e).concat(".worldofwarcraft.com/character/").concat(r,"?alt=/wow/static/images/2d/avatar/1-0.jpg")},this.characterDataUrl=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],o="".concat(a.length>0?"&fields=".concat(a.join(",")):""),i="https://".concat(t,".api.battle.net/wow/character/").concat(n,"/").concat(r),c="?locale=en_US&apikey=".concat(e).concat(o);return"".concat(i).concat(c)},this.apiKey=t},s=n(1);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var y=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return h(r,(n=r=h(this,(e=d(t)).call.apply(e,[this].concat(o))),r.state={loaded:!1,error:null,expanded:!1,character:null},r.queryCharacterData=function(){r.props.battlenet.characterData(r.props.region,r.props.realm,r.props.character,["items","titles","progression","guild"]).then(function(e){console.log(e.data),r.setState({character:e.data,loaded:!0,error:null})}).catch(function(e){console.log(e),window.error=e,r.setState({loaded:!1,error:e})})},r.emptyCharacter=function(){return{name:r.props.character,items:{averageItemLevel:"..."},titles:[]}},r.expandable=function(e){return r.state.expanded?"".concat(e," ").concat(s.open):e},r.toggleExpand=function(){return r.setState({expanded:!r.state.expanded})},r.enabledTitleStringOrBlank=function(e){return(e.find(function(e){return e.selected})||{name:"%s"}).name},r.formatNameWithTitle=function(e,t){return e.replace("%s",t)},r.charImageUrlForState=function(){var e=r.state.character||{},t={region:e.region||"us",thumbnailUrl:e.thumbnail||"fallback",type:r.state.expanded?"main":"inset"};return r.props.battlenet.characterImageUrl(t.region,t.thumbnailUrl,t.type)},n))}var n,r,o;return n=t,(r=[{key:"componentDidUpdate",value:function(){this.state.loaded||this.state.error||this.queryCharacterData()}},{key:"componentDidMount",value:function(){this.queryCharacterData()}},{key:"errorMessage",value:function(e){var t;if(404===e.response.status){var n="".concat(this.props.region,"/").concat(this.props.realm,"/").concat(this.props.character);t=a.a.createElement("span",null,"Character ",n," does not exist :(")}else t=a.a.createElement("span",null,"An error has occurred...");return a.a.createElement("div",{className:s.ErrorMessage},t)}},{key:"guildField",value:function(e){return a.a.createElement("div",{className:s.GuildField},a.a.createElement("span",null,"<".concat(e,">")))}},{key:"cardDetails",value:function(){var e=this.state.character||this.emptyCharacter(),t=this.formatNameWithTitle(this.enabledTitleStringOrBlank(e.titles),e.name);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:s.NameField},a.a.createElement("span",null,t)),e.guild?a.a.createElement("div",{className:s.GuildField},a.a.createElement("span",null,"<".concat(e.guild.name,">"))):null,a.a.createElement("br",null),a.a.createElement("div",{className:s.DetailField},a.a.createElement("span",null,"LV: ",e.level)),a.a.createElement("div",{className:s.DetailField},a.a.createElement("span",null,"iLevel: ",e.items.averageItemLevel)),a.a.createElement("div",{className:s.DetailField},a.a.createElement("span",null,"HKs: ",e.totalHonorableKills)),a.a.createElement("div",{className:s.DetailField},a.a.createElement("span",null,"Achievement Points: ",e.achievementPoints)))}},{key:"render",value:function(){return a.a.createElement("div",{className:this.expandable(s.FriendCard)},a.a.createElement("div",{className:this.expandable(s.MediumCardImage),style:{backgroundImage:"url('".concat(this.charImageUrlForState(),"')")},onClick:this.toggleExpand}),a.a.createElement("div",{className:s.InfoHolder},this.state.error?this.errorMessage(this.state.error):this.cardDetails()))}}])&&m(n.prototype,r),o&&m(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");f(e.prototype,t&&t.prototype),t&&f(e,t)}(t,e),t}(r.Component),b=function(e){return e.characters.map(function(t){return a.a.createElement(y,{key:t.name,battlenet:e.battlenet,region:t.region,realm:t.realm,character:t.name})})},g=n(3);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var C=function(e){return e.children},D=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return E(r,(n=r=E(this,(e=_(t)).call.apply(e,[this].concat(i))),r.state={expanded:!1,selection:null,content:null},r.getDropDownTabClass=function(e){var t=[g.DropDownTab];return r.state.expanded&&r.state.selection===e&&t.push(g.Active),t.join(" ")},r.childTabs=function(){return[].concat(r.props.children).map(function(e){var t=e.props.title;return a.a.createElement("div",{key:t,className:r.getDropDownTabClass(t),onClick:function(){return r.onTabClick(t,e)}},t)})},r.getDropDownClass=function(){return r.state.expanded?[g.DropDown,g.open].join(" "):g.DropDown},n))}var n,r,o;return n=t,(r=[{key:"onTabClick",value:function(e,t){e===this.state.selection?this.setState({selection:null,content:null,expanded:!1}):this.setState({selection:e,content:t,expanded:!0})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:g.AppBar},a.a.createElement("div",{className:g.Logo},"WoW Friend Board"),a.a.createElement("div",{className:g.DropDownTabHolder},this.childTabs())),a.a.createElement("div",{className:this.getDropDownClass},this.state.content))}}])&&S(n.prototype,r),o&&S(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");w(e.prototype,t&&t.prototype),t&&w(e,t)}(t,e),t}(r.Component);function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){x(e,t,n[t])})}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var I=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return N(r,(n=r=N(this,(e=T(t)).call.apply(e,[this].concat(o))),r.state={withApiExport:!1},r.exportString=function(){var e={settings:k({},r.props.settings),characters:r.props.characters};return r.state.withApiExport||delete e.settings,JSON.stringify(e)},r.settingsSaveSubmit=function(e){e.preventDefault();var t=new FormData(e.target).get("apiKey"),n=k({},r.props.settings,{apiKey:t});r.props.onSaveSettings(n)},r.importSettingsSubmit=function(e){e.preventDefault();var t=new FormData(e.target),n=JSON.parse(t.get("importData"));if(n.settings){var a=k({},r.props.settings,n.settings);r.props.onSaveSettings(a)}if(n.characters){var o=j(r.props.characters).concat(j(n.characters));r.props.onSaveCharacters(o)}},n))}var n,r,o;return n=t,(r=[{key:"render",value:function(){var e=this,t=this.exportString();return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:this.settingsSaveSubmit},a.a.createElement("h4",null,"Settings"),a.a.createElement("label",null,"Api Key:"),a.a.createElement("input",{id:"apiKey",type:"text",name:"apiKey"}),a.a.createElement("button",null,"Save")),a.a.createElement("form",null,a.a.createElement("h4",null,"Export Configuration"),a.a.createElement("input",{type:"checkbox",onChange:function(t){return e.setState({withApiExport:t.target.checked})}}),a.a.createElement("label",null,"Include API Key"),a.a.createElement("br",null),t?a.a.createElement("textarea",{readOnly:!0,defaultValue:t}):null),a.a.createElement("form",{onSubmit:this.importSettingsSubmit},a.a.createElement("h4",null,"Import Configuration"),a.a.createElement("textarea",{id:"importData",name:"importData"}),a.a.createElement("button",null,"Import")))}}])&&F(n.prototype,r),o&&F(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");A(e.prototype,t&&t.prototype),t&&A(e,t)}(t,e),t}(r.Component);function P(e){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var H=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return L(r,(n=r=L(this,(e=M(t)).call.apply(e,[this].concat(i))),r.existingCharacterList=function(){return r.props.characters.map(function(e){return a.a.createElement("div",{key:r.characterString(e)},a.a.createElement("label",{onClick:function(){return r.deleteCharacter(e)}},r.characterString(e)," -- Delete"),a.a.createElement("br",null))})},r.charactersAddSubmit=function(e){e.preventDefault();var t=new FormData(e.target),n={region:t.get("region"),realm:t.get("realm"),name:t.get("name")},a=r.characterString(n);if(r.props.characters.find(function(e){return r.characterString(e)===a}))return!1;var o=B(r.props.characters).concat([n]);r.props.onSaveCharacters(o)},r.characterString=function(e){return"".concat(e.region,"/").concat(e.realm,"/").concat(e.name)},r.deleteCharacter=function(e){r.props.onSaveCharacters(r.props.characters.filter(function(t){return t!==e}))},n))}var n,r,o;return n=t,(r=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.existingCharacterList(),a.a.createElement("form",{onSubmit:this.charactersAddSubmit},a.a.createElement("label",null,"Region:"),a.a.createElement("input",{id:"region",type:"text",name:"region"}),a.a.createElement("br",null),a.a.createElement("label",null,"Realm:"),a.a.createElement("input",{id:"realm",type:"text",name:"realm"}),a.a.createElement("br",null),a.a.createElement("label",null,"Character Name:"),a.a.createElement("input",{id:"name",type:"text",name:"name"}),a.a.createElement("button",null,"Add")))}}])&&U(n.prototype,r),o&&U(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");K(e.prototype,t&&t.prototype),t&&K(e,t)}(t,e),t}(r.Component);function J(e){return(J="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return!t||"object"!==J(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var V=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=q(this,G(t).call(this))).onSaveSettings=function(t){localStorage.setItem("settings",JSON.stringify(t)),e.setState({settings:t,battlenet:new u(t.apiKey)})},e.onSaveCharacters=function(t){localStorage.setItem("characters",JSON.stringify(t)),e.setState({characters:t})};var n=JSON.parse(localStorage.getItem("settings")||"{}"),r=JSON.parse(localStorage.getItem("characters")||"[]");return e.state={settings:n,characters:r,battlenet:new u(n.apiKey)},e}var n,r,o;return n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(D,null,a.a.createElement(C,{title:"Settings"},a.a.createElement(I,{settings:this.state.settings,characters:this.state.characters,onSaveSettings:this.onSaveSettings,onSaveCharacters:this.onSaveCharacters})),a.a.createElement(C,{title:"Characters"},a.a.createElement(H,{characters:this.state.characters,onSaveCharacters:this.onSaveCharacters}))),a.a.createElement(b,{battlenet:this.state.battlenet,characters:this.state.characters}))}}])&&W(n.prototype,r),o&&W(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");R(e.prototype,t&&t.prototype),t&&R(e,t)}(t,e),t}(r.Component),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(V,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/wow-friend-board",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/wow-friend-board","/service-worker.js");Q?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):X(e)})}}()},3:function(e,t,n){e.exports={AppBar:"AppBar_AppBar__3ifn6",DropDown:"AppBar_DropDown__29HSd",open:"AppBar_open__evNjo",Logo:"AppBar_Logo__12l_j",DropDownTabHolder:"AppBar_DropDownTabHolder__2r6K7",DropDownTab:"AppBar_DropDownTab__2MVEL",Active:"AppBar_Active__2E5jx"}},40:function(e,t,n){},42:function(e,t,n){},57:function(e,t,n){n(56),e.exports=n(17)}},[[57,0,1]]]);
//# sourceMappingURL=main.6c7a2767.chunk.js.map