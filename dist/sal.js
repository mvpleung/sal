!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Sal=t():e.Sal=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-sal]",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,r=t.rootMargin,i=t.threshold,a=t.animateClassName,s=function(e,t){e.forEach(function(e){e.intersectionRatio>0&&(t.unobserve(e.target),(0,n.animate)(e.target,a))})};if(!window.IntersectionObserver)throw Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");var u=new IntersectionObserver(s,{rootMargin:r,threshold:i}),c=[].filter.call(document.querySelectorAll(e),function(e){return!(0,n.isAnimated)(e,a)});return c.forEach(function(e){return u.observe(e)}),c};var n=r(1);r(2);var o={rootMargin:"0px",threshold:0,animateClassName:"sal-animate"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.animate=function(e,t){return e.classList.add(t)},t.isAnimated=function(e,t){return e.classList.contains(t)}},function(e,t){}])});