parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=new Promise(function(n,e){document.addEventListener("click",function(){n("First promise was resolved")}),setTimeout(function(){e(new Error("First promise was rejected"))},3e3)}),e=new Promise(function(n){var e=function(){return n("Second promise was resolved")};document.addEventListener("click",e),document.addEventListener("contextmenu",e)}),t=new Promise(function(n){document.addEventListener("click",function(){return n()})}),c=new Promise(function(n){document.addEventListener("contextmenu",function(){return n()})}),r=new Promise(function(n){Promise.all([t,c]).then(function(){return n("Third promise was resolved")})}),i=function(n,e){document.body.insertAdjacentHTML("beforeend",'\n    <div class="'.concat(e,'" data-qa="notification">\n      ').concat(n,"\n    </div>\n  "))};n.then(function(n){return i(n,"success")}).catch(function(n){return i(n,"warning")}),e.then(function(n){return i(n,"success")}),r.then(function(n){return i(n,"success")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e215466d.js.map