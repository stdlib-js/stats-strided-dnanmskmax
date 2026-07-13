"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var m=f(function(D,c){
var b=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(r,e,n,o,u,x,_){var t,v,s,a,i;if(r<=0)return NaN;for(v=o,s=_,i=0;i<r&&(a=e[v],!(a===a&&u[s]===0));i++)v+=n,s+=x;if(i===r)return NaN;for(t=a,i+=1,i;i<r;i++)v+=n,s+=x,!u[s]&&(a=e[v],!b(a)&&(a>t||a===t&&E(a))&&(t=a));return t}c.exports=O
});var y=f(function(F,p){
var d=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(r,e,n,o,u){return P(r,e,n,d(r,n),o,u,d(r,u))}p.exports=Z
});var l=f(function(G,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),h=m();g(j,"ndarray",h);k.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),q,R=z(w(__dirname,"./native.js"));A(R)?q=B:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
