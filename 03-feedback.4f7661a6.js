function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(t,e,n){var o,i,r,f,u,a,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function h(t){return c=t,u=setTimeout(w,e),l?g(t):f}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function w(){var t=m();if(j(t))return O(t);u=setTimeout(w,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function O(t){return u=void 0,v&&o?g(t):(o=i=void 0,f)}function E(){var t=m(),n=j(t);if(o=arguments,i=this,a=t,n){if(void 0===u)return h(a);if(s)return u=setTimeout(w,e),g(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=y(e)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,e):r,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=i=u=void 0},E.flush=function(){return void 0===u?f:O(m())},E}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(t,e,{leading:o,maxWait:e,trailing:i})};const g={form:document.querySelector(".feedback-form")};let h={};g.form.addEventListener("submit",onFormSubmit),g.form.addEventListener("input",t(e)(onFormInput,500)),window.addEventListener("load",j);const j=()=>{try{const t=localStorage.getItem(LOCALSTORAGE_KEY);if(!t)return;h=JSON.parse(t),Object.entries(h).forEach((([t,e])=>{g.form.elements[t].value=e}))}catch(t){console.log(t.message)}};
//# sourceMappingURL=03-feedback.4f7661a6.js.map
