!function(){function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequired7c6=i),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return a.default(e)||f.default(e,t)||c.default(e,t)||l.default()};var a=s(i("8slrw")),f=s(i("7AJDX")),l=s(i("ifqQW")),c=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var d,p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var v="Expected a function",y=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,g=/^0o[0-7]+$/i,O=parseInt,_="object"==typeof r&&r&&r.Object===Object&&r,j="object"==typeof self&&self&&self.Object===Object&&self,x=_||j||Function("return this")(),h=Object.prototype.toString,w=Math.max,M=Math.min,S=function(){return x.Date.now()};function T(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(v);function p(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function y(e){return l=e,a=setTimeout(b,t),c?p(e):u}function m(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function b(){var e=S();if(m(e))return g(e);a=setTimeout(b,function(e){var r=t-(e-f);return s?M(r,i-(e-l)):r}(e))}function g(e){return a=void 0,d&&n?p(e):(n=o=void 0,u)}function O(){var e=S(),r=m(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return y(f);if(s)return a=setTimeout(b,t),p(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=N(t)||0,E(r)&&(c=!!r.leading,i=(s="maxWait"in r)?w(N(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:g(S())},O}function E(e){var r=void 0===e?"undefined":t(p)(e);return!!e&&("object"==r||"function"==r)}function N(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(p)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(E(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=E(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var n=b.test(e);return n||g.test(e)?O(e.slice(2),n?2:8):m.test(e)?NaN:+e}d=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(v);return E(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),T(e,t,{leading:n,maxWait:t,trailing:o})};var A={form:document.querySelector(".feedback-form")},I="feedback-form-state",P={};A.form.addEventListener("submit",(function(t){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(I),console.log(P),P={}})),A.form.addEventListener("input",t(d)((function(e){try{P[e.target.name]=e.target.value.trim(),localStorage.setItem(I,JSON.stringify(P))}catch(e){console.log(e.message)}}),500));window.addEventListener("load",(function(){try{var e=localStorage.getItem(I);if(!e)return;P=JSON.parse(e),Object.entries(P).forEach((function(e){var r=t(u)(e,2),n=r[0],o=r[1];A.form.elements[n].value=o}))}catch(e){console.log(e.message)}}))}();
//# sourceMappingURL=03-feedback.56332a0c.js.map
