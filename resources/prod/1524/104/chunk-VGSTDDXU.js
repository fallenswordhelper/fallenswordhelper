import{a as i}from"./chunk-3M4BGLDY.js";import{a}from"./chunk-ZHNBOA2F.js";function o(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function h(t,e){let n=indexedDB.open(t);n.onupgradeneeded=()=>n.result.createObjectStore(e);let r=o(n);return(d,p)=>r.then(y=>p(y.transaction(e,d).objectStore(e)))}var u;function c(){return u||(u=h("keyval-store","keyval")),u}function l(t,e=c()){return e("readonly",n=>o(n.get(t)))}function s(t,e,n=c()){return n("readwrite",r=>(r.put(e,t),o(r.transaction)))}var f=t=>{t&&t.name!=="NotFoundError"&&a(i(t),!1)};async function b(t,e){try{return await l(t,e)}catch(n){f(n)}}async function E(t,e,n){try{return await s(t,e,n)}catch(r){f(r)}}export{b as a,E as b};
//# sourceMappingURL=chunk-VGSTDDXU.js.map
