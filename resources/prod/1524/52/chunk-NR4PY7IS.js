import{a as m}from"./chunk-WKK2D5SI.js";import{a as l}from"./chunk-NDCVQHVH.js";import{a as d}from"./chunk-BOMGPUDJ.js";function p(t){return t.data?(delete t.data.fshrnd,$.param(t.data)):t.url}function T(t,e,n,r){let i=`${e.status} ${e.statusText} - `;if(e.statusText===r.toString())return i+p(t);let a=`${i+n} ${r} - ${p(t)}`;return n==="parsererror"?`${a} - ${e.responseText}`:a}var o=class extends Error{constructor([e,n,r,i],...a){super(T(e,n,r,i),...a);Error.captureStackTrace&&Error.captureStackTrace(this,o),this.jqSettings=e,this.jqXhr=n,this.jqTextStatus=r,this.jqErrorThrown=i}};var s=!0,u=[],h;function b(t){return typeof t=="string"?{url:t}:t}function j(t){t.abort(),u=[]}function q(t){l(window,"beforeunload",d(j,t))}var w=[0,503,504],E=["abort"],k=["We have encountered an issue with a server connection","We're performing maintenance on the game","the team have been notified and will get it fixed soon","uUDRezBqFM4"];function F(t){return w.includes(t.jqXhr.status)||E.includes(t.jqTextStatus)||k.some(e=>t.jqXhr.responseText.includes(e))}function y(t,e){F(e)||(m(e.toString(),!1),t(void 0))}function A([t,e,n,r,i]){return function(f,g,S){n>0&&f.status===503?setTimeout(t,100,e,n-1,r,i):y(r,new o([e,f,g,S]))}}function x(t,e,n,r){let i=b(t);return i.beforeSend=q,$.ajax(i).then(n).catch(A([x,i,e,n,r]))}function R(t){if($.active<5){let e=u.shift();x(...e),t()}}function c(){u.length===0?s=!0:(s=!1,R(c))}function v(){h||($(document).ajaxComplete(c),h=!0)}function H(t,e,n,r){u.push([t,e,n,r]),s&&c()}function M(t){if(v(),t)return new Promise((e,n)=>{H(t,10,e,n)})}export{M as a};
//# sourceMappingURL=chunk-NR4PY7IS.js.map
