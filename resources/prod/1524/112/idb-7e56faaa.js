import{bP as t,ci as n}from"./calfSystem-4830a18d.js"
function r(t){return new Promise(((n,r)=>{t.oncomplete=t.onsuccess=()=>n(t.result),t.onabort=t.onerror=()=>r(t.error)}))}let e
function o(){return e||(e=function(t,n){const e=indexedDB.open(t)
e.onupgradeneeded=()=>e.result.createObjectStore(n)
const o=r(e)
return(t,r)=>o.then((e=>r(e.transaction(n,t).objectStore(n))))}("keyval-store","keyval")),e}const c=r=>{r&&"NotFoundError"!==r.name&&t(n(r),!1)}
async function a(t,n){try{return await function(t,n=o()){return n("readonly",(n=>r(n.get(t))))}(t,n)}catch(t){c(t)}}async function s(t,n,e){try{return await function(t,n,e=o()){return e("readwrite",(e=>(e.put(n,t),r(e.transaction))))}(t,n,e)}catch(t){c(t)}}export{a as g,s}
//# sourceMappingURL=idb-7e56faaa.js.map
