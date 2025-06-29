"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(b,v){
var s=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/blas-ext-base-sapxsumpw/dist').ndarray;function w(e,r,a,i){return e<=0?NaN:e===1||a===0?r[i]:s(r[i]+s(y(e-1,-r[i],r,a,i+a)/e))}v.exports=w
});var p=u(function(g,q){
var d=require('@stdlib/strided-base-stride2offset/dist'),j=n();function f(e,r,a){return j(e,r,a,d(e,a))}q.exports=f
});var m=u(function(h,l){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=p(),R=n();x(o,"ndarray",R);l.exports=o
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),O=m(),t,c=E(_(__dirname,"./native.js"));F(c)?t=O:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
