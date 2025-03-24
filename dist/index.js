"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(d,s){
var t=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/blas-ext-base-sapxsumpw/dist').ndarray;function f(e,r,i){var a;return e<=0?NaN:e===1||i===0?r[0]:(i<0?a=(1-e)*i:a=0,t(r[a]+t(y(e-1,-r[a],r,i,a+i)/e)))}s.exports=f
});var q=u(function(g,o){
var p=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/blas-ext-base-sapxsumpw/dist').ndarray;function F(e,r,i,a){return e<=0?NaN:e===1||i===0?r[a]:p(r[a]+p(j(e-1,-r[a],r,i,a+i)/e))}o.exports=F
});var c=u(function(h,m){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=v(),T=q();R(l,"ndarray",T);m.exports=l
});var _=require("path").join,x=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=c(),n,w=x(_(__dirname,"./native.js"));E(w)?n=O:n=w;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
