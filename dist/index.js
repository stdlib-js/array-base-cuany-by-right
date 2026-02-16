"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=d(function(z,y){
var q=require('@stdlib/array-base-arraylike2object/dist');function R(a,r,t,i,o,c){var e,s,n;for(e=!1,s=i,n=a.length-1;n>=0;n--)!e&&o.call(c,a[n],n,a)&&(e=!0),r[s]=e,s+=t;return r}function b(a,r,t,i,o,c){var e,s,n,g,v,l,u;for(e=a.data,s=r.data,n=a.accessors[0],g=r.accessors[1],v=!1,l=i,u=e.length-1;u>=0;u--)!v&&o.call(c,n(e,u),u,a)&&(v=!0),g(s,l,v),l+=t;return s}function j(a,r,t,i,o,c){var e,s;return e=q(a),s=q(r),e.accessorProtocol||s.accessorProtocol?(b(e,s,t,i,o,c),r):(R(a,r,t,i,o,c),r)}y.exports=j
});var p=d(function(C,h){
var k=require('@stdlib/array-base-filled/dist'),m=f();function x(a,r,t){var i=k(!1,a.length);return m(a,i,1,0,r,t)}h.exports=x
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=p(),O=f();B(P,"assign",O);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
