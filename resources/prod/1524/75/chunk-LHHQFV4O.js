import{a as u}from"./chunk-54XC2ATA.js";import{a as p}from"./chunk-UNRPYWV7.js";import{a as f}from"./chunk-VRFSPHR2.js";import{a as c}from"./chunk-4TGPNPDH.js";import{a as n}from"./chunk-DGS2WOJV.js";import{a as s}from"./chunk-A3YBBQMJ.js";import{a as i}from"./chunk-XAE2ZLZO.js";async function o(){let t=await u({subcmd:"viewcombatset"});return{...t,r:t.r.sort((r,e)=>s(r.name,e.name))}}async function m(){let t=await n({cmd:"profile"}),r=c(t),e=f('select[name="combatSetId"]',r);return e?{r:i(e.children).filter((a,l)=>l>0).map(a=>({id:Number(a.value)})),s:!0}:{s:!1}}function d(){return p(o,m)}export{d as a};
//# sourceMappingURL=chunk-LHHQFV4O.js.map
