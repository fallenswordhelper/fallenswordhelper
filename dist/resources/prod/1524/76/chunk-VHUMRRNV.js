import{a as u}from"./chunk-3HJBZEQM.js";import{a as p}from"./chunk-OU75PILE.js";import{a as f}from"./chunk-2L67EAH3.js";import{a as c}from"./chunk-UC3GAOGO.js";import{a as n}from"./chunk-6FENTVGJ.js";import{a as s}from"./chunk-MIKOJUIF.js";import{a as i}from"./chunk-O5WVQXEQ.js";async function o(){let t=await u({subcmd:"viewcombatset"});return{...t,r:t.r.sort((r,e)=>s(r.name,e.name))}}async function m(){let t=await n({cmd:"profile"}),r=c(t),e=f('select[name="combatSetId"]',r);return e?{r:i(e.children).filter((a,l)=>l>0).map(a=>({id:Number(a.value)})),s:!0}:{s:!1}}function d(){return p(o,m)}export{d as a};
//# sourceMappingURL=chunk-VHUMRRNV.js.map