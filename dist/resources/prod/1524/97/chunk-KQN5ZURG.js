import{a as o}from"./chunk-BHGUITJJ.js";function c(t){return t.data?(delete t.data.fshrnd,$.param(t.data)):t.url}function w(t,r,n,e){let a=`${r.status} ${r.statusText} - `;if(r.statusText===e.toString())return a+c(t);let u=`${a+n} ${e} - ${c(t)}`;return n==="parsererror"?`${u} - ${r.responseText}`:u}var s=class extends Error{constructor([r,n,e,a],...u){super(w(r,n,e,a),...u),Error.captureStackTrace&&Error.captureStackTrace(this,s),this.jqSettings=r,this.jqXhr=n,this.jqTextStatus=e,this.jqErrorThrown=a}};function m(t){return typeof t=="string"?{url:t}:t}function x(t){o(window,"beforeunload",()=>t.abort())}var h=900,f=0,l=5,i=0,S=t=>new Promise(r=>{setTimeout(r,t)});async function T(){i<l-$.active&&performance.now()-f>=h?(i=l-$.active,f=performance.now()):await S(100)}async function y(){for(;i<1;)await T();i-=1}function p(t){let r=m(t);return r.beforeSend=x,$.ajax(r).fail((n,e,a)=>{n.textStatus=e,n.errorThrown=a})}async function d(t,r=10){await y();let n=null;try{n=await p(t)}catch(e){if(r&&e.status===503)return d(t,r-1);throw new s([t,e,e.textStatus,e.errorThrown])}return n}export{s as a,d as b};
//# sourceMappingURL=chunk-KQN5ZURG.js.map
