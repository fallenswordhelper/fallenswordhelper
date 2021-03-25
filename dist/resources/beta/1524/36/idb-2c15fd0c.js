import{ad as t,ae as n}from"./calfSystem-4a40365f.js"
function e(t){return new Promise(((n,e)=>{t.oncomplete=t.onsuccess=()=>n(t.result),t.onabort=t.onerror=()=>e(t.error)}))}let r
function o(){return r||(r=function(t,n){const r=indexedDB.open(t)
r.onupgradeneeded=()=>r.result.createObjectStore(n)
const o=e(r)
return(t,e)=>o.then((r=>e(r.transaction(n,t).objectStore(n))))}("keyval-store","keyval")),r}const a=e=>{e&&"NotFoundError"!==e.name&&t(n(e),!1)}
async function c(t,n){try{return await function(t,n=o()){return n("readonly",(n=>e(n.get(t))))}(t,n)}catch(t){a(t)}}async function s(t,n,r){try{return await function(t,n,r=o()){return r("readwrite",(r=>(r.put(n,t),e(r.transaction))))}(t,n,r)}catch(t){a(t)}}export{c as g,s}
//# sourceMappingURL=idb-2c15fd0c.js.map
