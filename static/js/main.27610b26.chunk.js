(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){e.exports={FriendCard:"FriendCard_FriendCard__20M9P",open:"FriendCard_open__3ZPGx",InfoHolder:"FriendCard_InfoHolder__184Tw",MainDetails:"FriendCard_MainDetails__2nl1k",ExpandedDetail:"FriendCard_ExpandedDetail__2E6M6",MediumCardImage:"FriendCard_MediumCardImage__2csba",NameField:"FriendCard_NameField__kN1Qs",GuildField:"FriendCard_GuildField__3Deg2",DetailField:"FriendCard_DetailField__3o6_l",ErrorMessage:"FriendCard_ErrorMessage__GvJgi",AzeriteItemList:"FriendCard_AzeriteItemList__28Eoh",AzeriteItemTitle:"FriendCard_AzeriteItemTitle__1VC7u",AzeriteItem:"FriendCard_AzeriteItem__1icvV",CircleIcon:"FriendCard_CircleIcon__2FExN"}},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),i=n.n(o),c=(n(42),n(40),n(6)),l=n.n(c);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p={small:18,medium:36,large:56},m=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getCharacterData=function(e,t,r,a){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return l.a.get(n.characterDataUrl(n.apiKey,e,t,r,a)).catch(function(e){throw console.log(e),e}).then(function(e){var t=e.data;return o?Promise.all([n.loadCharacterSpells(t)]).then(function(e){var n=f(e,1)[0];return{charData:t,spells:n}}):{charData:t,spells:{}}})},this.getSpell=function(e){return n.spellCache[e]?Promise.resolve(n.spellCache[e]):l.a.get(n.spellDataUrl(n.apiKey,e)).then(function(t){var r=t.data;return n.spellCache[e]=r,localStorage.setItem("spellCache",JSON.stringify(n.spellCache)),r})},this.getSpells=function(e){return Promise.all(e.map(function(e){return n.getSpell(e)})).then(function(e){return e.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}({},e,s({},t.id,t))},{})})},this.loadCharacterSpells=function(e){return n.getSpells(n.extractSpellIdsFromCharacter(e))},this.extractSpellIdsFromCharacter=function(e){return function e(t,n){return null===t||void 0===t?null:t instanceof Array?t.map(function(t){return e(t,n)}).filter(function(e){return null!==e}).reduce(function(e,t){return e.concat(t)},[]):t instanceof Object?Object.entries(t).map(function(t){var r=u(t,2),a=r[0],o=r[1];return a===n?o:e(o,n)}).filter(function(e){return null!==e}).reduce(function(e,t){return e.concat(t)},[]):null}(e,"spellId").filter(function(e){return e>0})},this.characterImageUrl=function(e,t,n){var r=t.replace("avatar.jpg","".concat(n,".jpg"));return"".concat("https://render-").concat(e).concat(".worldofwarcraft.com/character/").concat(r,"?alt=/wow/static/images/2d/avatar/1-0.jpg")},this.characterDataUrl=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],o="".concat(a.length>0?"&fields=".concat(a.join(",")):""),i="https://".concat(t,".api.battle.net/wow/character/").concat(n,"/").concat(r),c="?locale=en_US&apikey=".concat(e).concat(o);return"".concat(i).concat(c)},this.spellDataUrl=function(e,t){return"https://us.api.battle.net/wow/spell/".concat(t,"?locale=en_US&apikey=").concat(e)},this.iconImageUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"large",n=p[t];return e&&n?"https://render-us.worldofwarcraft.com/icons/".concat(n,"/").concat(e,".jpg"):null},this.apiKey=t,this.spellCache=JSON.parse(localStorage.getItem("spellCache")||"{}")},d=n(1);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var w=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return g(r,(n=r=g(this,(e=v(t)).call.apply(e,[this].concat(i))),r.state={loaded:!1,error:null,expanded:!1,character:void 0,spells:void 0},r.queryCharacterData=function(){var e=r.props,t=e.battlenet,n=e.region,a=e.realm,o=e.character;t.getCharacterData(n,a,o,["items","titles","progression","guild"]).then(function(e){var t=e.charData,n=e.spells;console.log(t,n),r.setState({character:t,spells:n,loaded:!0,error:null})}).catch(function(e){console.log(e),r.setState({loaded:!1,error:e})})},r.emptyCharacter=function(){var e=r.props.character;return{name:"Loading ".concat(e,"..."),items:{averageItemLevel:"..."},titles:[]}},r.expandable=function(e){return r.state.expanded?"".concat(e," ").concat(d.open):e},r.toggleExpand=function(){r.setState(function(e){return{expanded:!e.expanded}})},r.enabledTitleStringOrBlank=function(e){return(e.find(function(e){return e.selected})||{name:"%s"}).name},r.formatNameWithTitle=function(e,t){return e.replace("%s",t)},r.charImageUrlForState=function(){var e=r.state,t=e.character,n=void 0===t?{}:t,a=e.expanded;return r.props.battlenet.characterImageUrl(n.region||"us",n.thumbnail||"fallback",a?"main":"inset")},r.errorMessage=function(e){var t,n=e.response,o=r.props,i=o.region,c=o.realm,l=o.character;if(404===n){var u="".concat(i,"/").concat(c,"/").concat(l);t=a.a.createElement("span",null,"Character ".concat(u," does not exist :("))}else t=a.a.createElement("span",null,"An error has occurred...");return a.a.createElement("div",{className:d.ErrorMessage},t)},r.guildField=function(e){return a.a.createElement("div",{className:d.GuildField},a.a.createElement("span",null,"<".concat(e,">")))},r.detailField=function(e){return a.a.createElement("div",{className:d.DetailField},a.a.createElement("span",null,e))},r.cardDetails=function(){var e=r.state.character,t=void 0===e?r.emptyCharacter():e,n=r.formatNameWithTitle(r.enabledTitleStringOrBlank(t.titles),t.name);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:d.MainDetails},a.a.createElement("div",{className:d.NameField},a.a.createElement("span",null,n)),t.guild?a.a.createElement("div",{className:d.GuildField},a.a.createElement("span",null,"<".concat(t.guild.name,">"))):null,a.a.createElement("br",null),r.detailField("LV: ".concat(t.level)),r.detailField("iLevel: ".concat(t.items.averageItemLevel)),r.detailField("HKs: ".concat(t.totalHonorableKills)),r.detailField("Achievement Points: ".concat(t.achievementPoints))),a.a.createElement("div",{className:r.expandable(d.ExpandedDetail)},r.azeriteItems(t.items)))},r.azeriteItems=function(e){if(!e)return null;var t=Object.values(e).filter(function(e){return e instanceof Object&&e.azeriteEmpoweredItem&&e.azeriteEmpoweredItem.azeritePowers.length>0});return a.a.createElement("div",{className:d.AzeriteItemList},a.a.createElement("span",{className:d.AzeriteItemTitle},"Azerite Items"),t.map(function(e){return r.azeriteItemDisplay(e)}))},r.azeriteItemDisplay=function(e){var t=r.state.spells,n=r.props.battlenet;return a.a.createElement("div",{className:d.AzeriteItem},a.a.createElement("img",{src:n.iconImageUrl(e.icon,"large"),alt:e.name,title:e.name,className:d.CircleIcon}),e.azeriteEmpoweredItem.azeritePowers.filter(function(e){return e.id>0}).map(function(e){var r=t[e.spellId],o="".concat(r.name," - ").concat(r.description," (Tier: ").concat(e.tier,")");return a.a.createElement("img",{src:n.iconImageUrl(r.icon,"medium"),alt:o,title:o,className:d.CircleIcon})}))},n))}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){this.queryCharacterData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.battlenet,n=this.state,r=n.loaded,a=n.error;t!==e.battlenet?this.queryCharacterData():r||a||this.queryCharacterData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,r=t.expanded;return a.a.createElement("div",{className:this.expandable(d.FriendCard)},a.a.createElement("div",{role:"button","aria-expanded":r,tabIndex:"0",className:this.expandable(d.MediumCardImage),style:{backgroundImage:"url('".concat(this.charImageUrlForState(),"')")},onClick:function(){return e.toggleExpand()},onKeyPress:function(t){"Enter"===t.key&&e.toggleExpand()}}),a.a.createElement("div",{className:d.InfoHolder},n?this.errorMessage(n):this.cardDetails()))}}])&&b(n.prototype,r),o&&b(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");y(e.prototype,t&&t.prototype),t&&y(e,t)}(t,e),t}(r.Component),S=function(e){return e.characters.map(function(t){return a.a.createElement(w,{key:t.name,battlenet:e.battlenet,region:t.region,realm:t.realm,character:t.name})})},E=n(3);function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var I=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return j(r,(n=r=j(this,(e=A(t)).call.apply(e,[this].concat(i))),r.state={tabs:[],expanded:!1,selection:null},r.registerTab=function(e){r.setState(function(t){return{tabs:C(t.tabs).concat([e])}})},r.childTabs=function(){return r.state.tabs.map(function(e){return a.a.createElement("div",{key:e,role:"tab",tabIndex:"0",className:r.getDropDownTabClass(e),onClick:function(t){return r.onTabClick(e,t)},onKeyPress:function(t){"Enter"===t.key&&r.onTabClick(e,t)}},e)})},r.getDropDownTabClass=function(e){var t=r.state,n=t.expanded,a=t.selection,o=[E.DropDownTab];return n&&a===e&&o.push(E.Active),o.join(" ")},r.renderChildren=function(e,t){return e.map(function(e,n){var o=n===t?[E.DropDownContent,E.open]:[E.DropDownContent];return a.a.createElement("div",{className:o.join(" ")},a.a.cloneElement(e,{registerTab:r.registerTab}))})},r.getDropDownClass=function(){return r.state.expanded?[E.DropDown,E.open].join(" "):E.DropDown},n))}var n,r,o;return n=t,(r=[{key:"onTabClick",value:function(e,t){e===this.state.selection?(this.setState({selection:null,expanded:!1}),t.target.blur()):this.setState({selection:e,expanded:!0})}},{key:"render",value:function(){var e=this.state,t=e.tabs,n=e.selection,r=this.props.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:E.AppBar},a.a.createElement("div",{className:E.Logo},"WoW Friend Board"),a.a.createElement("div",{className:E.DropDownTabHolder,role:"tablist"},this.childTabs())),a.a.createElement("div",{className:this.getDropDownClass()},this.renderChildren(r,t.indexOf(n))))}}])&&O(n.prototype,r),o&&O(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");D(e.prototype,t&&t.prototype),t&&D(e,t)}(t,e),t}(r.Component);I.defaultProps={children:[]};var x=I;function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,N(t).apply(this,arguments))}var n,r,a;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props;(0,e.registerTab)(e.title)}},{key:"render",value:function(){return this.props.children}}])&&T(n.prototype,r),a&&T(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");k(e.prototype,t&&t.prototype),t&&k(e,t)}(t,e),t}(r.Component),K=x;function B(e){return(B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return!t||"object"!==B(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var W=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return J(r,(n=r=J(this,(e=R(t)).call.apply(e,[this].concat(i))),r.existingCharacterList=function(){return r.props.characters.map(function(e){return a.a.createElement("div",{key:r.characterString(e)},a.a.createElement("span",{role:"button",tabIndex:"0",onClick:function(){return r.deleteCharacter(e)},onKeyPress:function(t){"Enter"===t.key&&r.deleteCharacter(e)}},"".concat(r.characterString(e)," -- Delete")),a.a.createElement("br",null))})},r.charactersAddSubmit=function(e){e.preventDefault();var t=r.props,n=t.characters,a=t.onSaveCharacters,o=new FormData(e.target),i={region:o.get("region"),realm:o.get("realm"),name:o.get("name")},c=r.characterString(i);n.find(function(e){return r.characterString(e)===c})||a(L(n).concat([i]))},r.characterString=function(e){return"".concat(e.region,"/").concat(e.realm,"/").concat(e.name)},r.deleteCharacter=function(e){var t=r.props,n=t.characters;(0,t.onSaveCharacters)(n.filter(function(t){return t!==e}))},n))}var n,r,o;return n=t,(r=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.existingCharacterList(),a.a.createElement("form",{onSubmit:this.charactersAddSubmit},a.a.createElement("label",{htmlFor:"region"},"Region:",a.a.createElement("input",{id:"region",type:"text",name:"region"})),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"realm"},"Realm:",a.a.createElement("input",{id:"realm",type:"text",name:"realm"})),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"name"},"Character Name:",a.a.createElement("input",{id:"name",type:"text",name:"name"})),a.a.createElement("button",{type:"submit"},"Add")))}}])&&U(n.prototype,r),o&&U(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");M(e.prototype,t&&t.prototype),t&&M(e,t)}(t,e),t}(r.Component);function H(e){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){V(e,t,n[t])})}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var X=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return Z(r,(n=r=Z(this,(e=$(t)).call.apply(e,[this].concat(i))),r.state={withApiExport:!1},r.exportString=function(){var e=r.props,t=e.settings,n=e.characters,a=r.state.withApiExport,o={settings:q({},t),characters:n};return a||delete o.settings,JSON.stringify(o)},r.settingsSaveSubmit=function(e){var t=r.props,n=t.settings,a=t.onSaveSettings;e.preventDefault(),a(q({},n,{apiKey:new FormData(e.target).get("apiKey")}))},r.importSettingsSubmit=function(e){var t=r.props,n=t.settings,a=t.characters,o=t.onSaveSettings,i=t.onSaveCharacters;e.preventDefault();var c=new FormData(e.target),l=JSON.parse(c.get("importData"));l.settings&&o(q({},n,l.settings));l.characters&&i(G(a).concat(G(l.characters)))},r.settingsForm=function(){return a.a.createElement("form",{onSubmit:r.settingsSaveSubmit},a.a.createElement("h4",null,"Settings"),a.a.createElement("label",{htmlFor:"apikey"},"Api Key:",a.a.createElement("input",{id:"apiKey",type:"text",name:"apiKey"})),a.a.createElement("button",{type:"submit"},"Save"))},r.exportForm=function(){var e=r.exportString();return a.a.createElement("form",null,a.a.createElement("h4",null,"Export Configuration"),a.a.createElement("input",{type:"checkbox",onChange:function(e){return r.setState({withApiExport:e.target.checked})}}),a.a.createElement("span",null,"Include API Key"),a.a.createElement("br",null),e?a.a.createElement("textarea",{readOnly:!0,value:e}):null)},r.importForm=function(){return a.a.createElement("form",{onSubmit:r.importSettingsSubmit},a.a.createElement("h4",null,"Import Configuration"),a.a.createElement("textarea",{id:"importData",name:"importData"}),a.a.createElement("button",{type:"submit"},"Import"))},n))}var n,r,o;return n=t,(r=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.settingsForm(),this.exportForm(),this.importForm())}}])&&Y(n.prototype,r),o&&Y(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Q(e.prototype,t&&t.prototype),t&&Q(e,t)}(t,e),t}(r.Component);function ee(e){return(ee="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return!t||"object"!==ee(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ie(e){return(ie=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ce=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=oe(this,ie(t).call(this))).onSaveSettings=function(t){localStorage.setItem("settings",JSON.stringify(t)),e.setState({settings:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ne(e,t,n[t])})}return e}({},t),battlenet:new m(t.apiKey)})},e.onSaveCharacters=function(t){localStorage.setItem("characters",JSON.stringify(t)),e.setState({characters:te(t)})};var n=JSON.parse(localStorage.getItem("settings")||"{}"),r=JSON.parse(localStorage.getItem("characters")||"[]");return e.state={settings:n,characters:r,battlenet:new m(n.apiKey)},e}var n,r,o;return n=t,(r=[{key:"render",value:function(){var e=this.state,t=e.settings,n=e.characters,r=e.battlenet;return a.a.createElement("div",{className:"App"},a.a.createElement(K,null,a.a.createElement(z,{title:"Settings"},a.a.createElement(X,{settings:t,characters:n,onSaveSettings:this.onSaveSettings,onSaveCharacters:this.onSaveCharacters})),a.a.createElement(z,{title:"Characters"},a.a.createElement(W,{characters:n,onSaveCharacters:this.onSaveCharacters}))),a.a.createElement(S,{battlenet:r,characters:n}))}}])&&ae(n.prototype,r),o&&ae(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");re(e.prototype,t&&t.prototype),t&&re(e,t)}(t,e),t}(r.Component),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(ce,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/wow-friend-board",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/wow-friend-board","/service-worker.js");le?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ue(e)})}}()},3:function(e,t,n){e.exports={AppBar:"AppBar_AppBar__3eFER",DropDown:"AppBar_DropDown__2CSlV",open:"AppBar_open__1zElJ",Logo:"AppBar_Logo__2bwKS",DropDownTabHolder:"AppBar_DropDownTabHolder__-YNvH",DropDownTab:"AppBar_DropDownTab__3EnnQ",Active:"AppBar_Active__1g-W2",DropDownContent:"AppBar_DropDownContent__3s2lL"}},40:function(e,t,n){},42:function(e,t,n){},57:function(e,t,n){n(56),e.exports=n(17)}},[[57,0,1]]]);
//# sourceMappingURL=main.27610b26.chunk.js.map