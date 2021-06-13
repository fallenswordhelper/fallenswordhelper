import{ac as t,ad as e}from"./calfSystem-ae2e69af.js"
function n(t){return new Promise(((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)}))}let r
function o(){return r||(r=function(t,e){const r=indexedDB.open(t)
r.onupgradeneeded=()=>r.result.createObjectStore(e)
const o=n(r)
return(t,n)=>o.then((r=>n(r.transaction(e,t).objectStore(e))))}("keyval-store","keyval")),r}const a=n=>{n&&"NotFoundError"!==n.name&&t(e(n),!1)}
async function c(t,e){try{return await function(t,e=o()){return e("readonly",(e=>n(e.get(t))))}(t,e)}catch(t){a(t)}}async function s(t,e,r){try{return await function(t,e,r=o()){return r("readwrite",(r=>(r.put(e,t),n(r.transaction))))}(t,e,r)}catch(t){a(t)}}export{c as g,s}
//# sourceMappingURL=idb-225659e6.js.map
