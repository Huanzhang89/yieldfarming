!function(e){function n(n){for(var r,u,l=n[0],s=n[1],a=n[2],p=0,_=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(t,u)&&t[u]&&_.push(t[u][0]),t[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(n);_.length;)_.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var e,n=0;n<i.length;n++){for(var o=i[n],r=!0,l=1;l<o.length;l++){var s=o[l];0!==t[s]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=o[0]))}return e}var r={},t={0:0},i=[];function u(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=r,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(o,r,function(n){return e[n]}.bind(null,r));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/js/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var a=0;a<l.length;a++)n(l[a]);var c=s;i.push([9,1]),o()}({12:function(module,exports){eval("// Avoid `console` errors in browsers that lack a console.\n(function () {\n  var method;\n\n  var noop = function noop() {};\n\n  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];\n  var length = methods.length;\n  var console = window.console = window.console || {};\n\n  while (length--) {\n    method = methods[length]; // Only stub undefined methods.\n\n    if (!console[method]) {\n      console[method] = noop;\n    }\n  }\n})();\n\n//# sourceURL=webpack:///./src/js/utils/errors.js?")},14:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(5);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n\n// EXTERNAL MODULE: ./node_modules/ethers/dist/ethers.umd.js\nvar ethers_umd = __webpack_require__(6);\n\n// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.js\nvar purify = __webpack_require__(1);\n\n// EXTERNAL MODULE: ./node_modules/picturefill/dist/picturefill.js\nvar picturefill = __webpack_require__(2);\n\n// EXTERNAL MODULE: ./src/js/utils/errors.js\nvar errors = __webpack_require__(12);\n\n// CONCATENATED MODULE: ./src/js/utils/validation.js\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// From https://webbjocke.com/javascript-check-data-types/\nfunction isBoolean(value) {\n  return typeof value === 'boolean';\n}\nfunction isString(value) {\n  return typeof value === 'string' || value instanceof String;\n}\nfunction isNumber(value) {\n  return typeof value === 'number' && isFinite(value);\n}\nfunction isArray(value) {\n  return Object.prototype.toString.call(value) === '[object Array]';\n}\nfunction isFunction(value) {\n  return typeof value === 'function';\n}\nfunction isObject(value) {\n  return Boolean(value) && _typeof(value) === 'object' && value.constructor === Object;\n}\nfunction isNull(value) {\n  return value === null;\n}\nfunction isUndefined(value) {\n  return typeof value === 'undefined';\n}\nfunction isRegExp(value) {\n  return Boolean(value) && _typeof(value) === 'object' && value.constructor === RegExp;\n}\n/* harmony default export */ var validation = ({\n  isBoolean: isBoolean,\n  isString: isString,\n  isNumber: isNumber,\n  isArray: isArray,\n  isFunction: isFunction,\n  isObject: isObject,\n  isNull: isNull,\n  isUndefined: isUndefined,\n  isRegExp: isRegExp\n});\n// CONCATENATED MODULE: ./src/js/index.js\n/** Variables available in all js files:\n * all the exported constants from globals.js\n */\n\n/** Directories available as aliases\n * all the paths within Dir in globals.js\n */\n\n\n\n\n\n\nwindow.$ = jquery_default.a;\nwindow.ethers = ethers_umd[\"ethers\"];\nwindow.asciichart = __webpack_require__(13); // eslint-disable-next-line no-console\n\nconsole.log(\"NODE_ENV: \".concat(\"production\"));\n\n//# sourceURL=webpack:///./src/js/index.js_+_1_modules?")},9:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(14);\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?")}});