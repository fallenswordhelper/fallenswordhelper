import{a as i}from"./chunk-J2QMB37G.js";import{a as u}from"./chunk-WHLURLGI.js";function h(){var t=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!t||!indexedDB.databases)return Promise.resolve();var e;return new Promise(function(r){var n=function(){return indexedDB.databases().finally(r)};e=setInterval(n,100),n()}).finally(function(){return clearInterval(e)})}var c=h;function a(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function y(t,e){let r=c().then(()=>{let n=indexedDB.open(t);return n.onupgradeneeded=()=>n.result.createObjectStore(e),a(n)});return(n,p)=>r.then(m=>p(m.transaction(e,n).objectStore(e)))}var o;function s(){return o||(o=y("keyval-store","keyval")),o}function f(t,e=s()){return e("readonly",r=>a(r.get(t)))}function d(t,e,r=s()){return r("readwrite",n=>(n.put(e,t),a(n.transaction)))}var l=t=>{t&&t.name!=="NotFoundError"&&u(i(t),!1)};async function E(t,e){try{return await f(t,e)}catch(r){l(r)}}async function P(t,e,r){try{return await d(t,e,r)}catch(n){l(n)}}export{E as a,P as b};
//# sourceMappingURL=chunk-7KBBV5J4.js.map