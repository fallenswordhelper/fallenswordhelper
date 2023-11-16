import{ch as t}from"./calfSystem-dEoRVG2S.js"
function n(t){return new Promise(((n,r)=>{t.oncomplete=t.onsuccess=()=>n(t.result),t.onabort=t.onerror=()=>r(t.error)}))}let r
function e(){return r||(r=function(t,r){const e=indexedDB.open(t)
e.onupgradeneeded=()=>e.result.createObjectStore(r)
const o=n(e)
return(t,n)=>o.then((e=>n(e.transaction(r,t).objectStore(r))))}("keyval-store","keyval")),r}const o=n=>{n&&"NotFoundError"!==n.name&&t.notify(n)}
async function c(t,r){try{return await function(t,r=e()){return r("readonly",(r=>n(r.get(t))))}(t,r)}catch(t){o(t)}}async function a(t,r,c){try{return await function(t,r,o=e()){return o("readwrite",(e=>(e.put(r,t),n(e.transaction))))}(t,r,c)}catch(t){o(t)}}export{c as g,a as s}
//# sourceMappingURL=idb-ZfKvo_GP.js.map
