import{a as s}from"./chunk-B27L3RGE.js";import{a as n}from"./chunk-R6627LCS.js";import{a as c}from"./chunk-ENJPFQDL.js";import{a as i}from"./chunk-P5YOCA56.js";import{a}from"./chunk-X6HXFDDM.js";import{a as m}from"./chunk-VX5V3MQE.js";async function r(){let t=await n({subcmd:"viewcombatset"});return t?.r?{...t,r:t.r.sort((e,f)=>i(e.name,f.name))}:t}var p=(t,e)=>e>0,u=t=>({id:Number(t.value)});async function o(){let t=await s({cmd:"profile"}),e=a('select[name="combatSetId"]',t);return e?{r:m(e.children).filter(p).map(u),s:!0}:{s:!1}}function d(){return c(r,o)}export{d as a};
//# sourceMappingURL=chunk-HCUWN7DW.js.map
