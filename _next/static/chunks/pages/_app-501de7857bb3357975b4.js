_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n("rePB"),a=n("nKUr"),o=n("wx14"),i=n("q1tI"),c=n.n(i),u=(n("17x9"),n("OKji")),s=n("aXM8"),d=n("hfi/");var f=function(e){var t=e.children,n=e.theme,r=Object(s.a)(),a=c.a.useMemo((function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(o.a)({},e,t)}(r,n);return null!=e&&(e[d.a]=null!==r),e}),[n,r]);return c.a.createElement(u.a.Provider,{value:a},t)},l=n("H2TA"),p={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},m=function(e){return Object(o.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var h=Object(l.a)((function(e){return{"@global":{html:p,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(o.a)({margin:0},m(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,i.createElement(i.Fragment,null,n)})),y=n("8Kt/"),v=n.n(y),b=n("/MKj"),g=n("2wV1"),w=n("ODXe");n("IaP3");var O=n("viY9"),j=n("dl/7"),_=Object(O.a)({overrides:{MuiButton:{outlined:{color:"#FFFFFF",borderColor:"rgba(255,255,255,0.5)","&:hover":{borderColor:"#FFFFFF"}}},MuiInputLabel:{root:{color:"#FFFFFF"}},MuiOutlinedInput:{notchedOutline:{borderColor:"rgba(255,255,255,0.5)"}},MuiSvgIcon:{root:{height:"1.5rem",width:"1.5rem",color:"#FFFFFF"}},MuiTooltip:{tooltip:{fontSize:"1.1rem",border:"1px solid rgba(255,255,255,0.5)",backgroundColor:"rgba(0,0,0,0.3)"},arrow:{color:"rgba(255,255,255,0.9)"}}},palette:{brand:{light:"#ffc947",main:"#ff9800",dark:"#c66900",contrastText:"#000000"},primary:{light:"#cfff95",main:"#9ccc65",dark:"#6b9b37",contrastText:"#000000"},error:{main:j.a.A400},background:{default:"#FFFFFF"},divider:"#FFFFFF",text:{primary:"#FFFFFF"}},typography:{body1:{fontSize:"1.2rem"},button:{fontSize:"1.2rem"}}}),M=n("i7Pf"),x=n("IZwO"),F=n("v6bN"),T=n("G4qV"),P=n("ptFW");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=Object(T.a)((function(e){return e}),F.j,(function(e,t){return t.map((function(t){return E(E({},{item_id:(n=Object(P.b)(e,t)).id,affiliation:"Mighty Kazan",currency:"CAD",item_name:n.name,price:n.price}),{},{quantity:Object(F.h)(e,t)});var n}))}));var I=function(e){return function(t){return function(n){var r=t(n),a=e.getState();return function(e,t){"cart/addItem"===t.type&&Object(g.a)({event:"add_to_cart",ecommerce:{items:C(e)}})}(a,n),function(e,t){"app/showScreen"===t.type&&"/checkout"===t.payload&&Object(g.a)({event:"purchase",ecommerce:{transaction_id:Object(F.b)(e),affiliation:"Mighty Kazan",currency:"CAD",items:C(e),tax:Object(F.n)(e),value:Object(F.o)(e)}})}(a,n),function(e,t){"cart/removeItem"===t.type&&Object(g.a)({event:"remove_from_cart",ecommerce:{items:C(e)}})}(a,n),function(e,t){"app/showScreen"===t.type&&"/shopping-bag"===t.payload&&Object(g.a)({event:"view_cart",ecommerce:{items:C(e)}})}(a,n),r}}},k=Object(M.a)({reducer:{app:x.a,cart:F.g,itemsById:P.a},middleware:function(e){return e().concat(I)}});function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(){var e;(e="https://geoip-js.com/js/apis/geoip2/v2.1/geoip2.js",new Promise((function(t,n){var r=document.createElement("script");r.type="text/javascript",r.async=!1,r.onload=t,r.onerror=n,r.src=e;var a=document.getElementsByTagName("body"),o=Object(w.a)(a,1)[0];if(!o)return n(new Error("No document body found to insert the script cript."));o.appendChild(r)}))).then((function(){geoip2.city((function(e){return Object(g.b)(k,{postal_code:e.postal.code})}),(function(){return Object(g.b)()}))}))}function D(e){var t=e.Component,n=e.pageProps;return Object(i.useEffect)(A),Object(i.useEffect)((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(v.a,{children:[Object(a.jsx)("title",{children:"Mighty Kazan - Nomadic food of Central Asia"}),Object(a.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),Object(a.jsx)(b.a,{store:k,children:Object(a.jsxs)(f,{theme:_,children:[Object(a.jsx)(h,{}),Object(a.jsx)(t,N({},n))]})})]})}},"2wV1":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n("7/s4"),a=n.n(r);function o(t,n){e.env.NEXT_PUBLIC_GTM_ID&&a.a.initialize({gtmId:e.env.NEXT_PUBLIC_GTM_ID,auth:e.env.NEXT_PUBLIC_GTM_AUTH,preview:e.env.NEXT_PUBLIC_GTM_PREVIEW,dataLayer:n})}function i(t){e.env.NEXT_PUBLIC_GTM_ID&&a.a.dataLayer({dataLayer:t})}}).call(this,n("8oxB"))},"7/s4":function(e,t,n){"use strict";var r,a=n("hKbo"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=o.default},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var s=l[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var d=a.props[s],f=r[s]||new Set;f.has(d)?o=!1:(f.add(d),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],d=!1,f=-1;function l(){d&&u&&(d=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!d){var e=c(l);d=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||d||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},IaP3:function(e,t,n){},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Kacz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},hKbo:function(e,t,n){"use strict";var r,a=n("wWlz"),o=(r=a)&&r.__esModule?r:{default:r};var i={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=o.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,n=e.events,r=void 0===n?{}:n,a=e.dataLayer,o=e.dataLayerName,i=void 0===o?"dataLayer":o,c=e.auth,u=void 0===c?"":c,s=e.preview,d=void 0===s?"":s,f=this.gtm({id:t,events:r,dataLayer:a||void 0,dataLayerName:i,auth:u,preview:d});a&&document.head.appendChild(f.dataScript),document.head.insertBefore(f.script(),document.head.childNodes[0]),document.body.insertBefore(f.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,n=e.dataLayerName,r=void 0===n?"dataLayer":n;if(window[r])return window[r].push(t);var a=o.default.dataLayer(t,r),i=this.dataScript(a);document.head.insertBefore(i,document.head.childNodes[0])}};e.exports=i},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},wWlz:function(e,t,n){"use strict";var r,a=n("Kacz"),o=(r=a)&&r.__esModule?r:{default:r};var i={tags:function(e){var t=e.id,n=e.events,r=e.dataLayer,a=e.dataLayerName,i=e.preview,c="&gtm_auth="+e.auth,u="&gtm_preview="+i;return t||(0,o.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+c+u+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(n).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+c+u+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+a+"','"+t+"');",dataLayerVar:this.dataLayer(r,a)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=i}},[[0,0,1,2,3]]]);