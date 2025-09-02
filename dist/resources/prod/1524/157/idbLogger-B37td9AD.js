import{c$ as t,d0 as a,bJ as c,d1 as o}from"./calfSystem-CQOGdqPv.js"
let n,e=!1,r=!1
const s={upgrade(t){t.objectStoreNames.contains("combat-log")||function(t){t.createObjectStore("combat-log",{autoIncrement:!0}).createIndex("time","time"),r=!0}(t)}}
async function i(){n=await a("fsh-db1",1,s),e=!0,r&&await async function(t){const a=await c("fsh_combatLog")
if(a){const c=t.transaction("combat-log","readwrite")
for(const t of a)c.store.add(t)
await c.done,await o("fsh_combatLog")}}(n)}async function m(){return e||await i(),n}async function f(a){try{return(await m()).add("combat-log",a)}catch(a){t(a)}}async function b(){try{return(await m()).getAllFromIndex("combat-log","time")}catch(a){t(a)}}async function u(){try{return(await m()).clear("combat-log")}catch(a){t(a)}}export{b as a,u as b,f as c}
//# sourceMappingURL=idbLogger-B37td9AD.js.map
