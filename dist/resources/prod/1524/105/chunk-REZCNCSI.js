import{a as m,b as f}from"./chunk-6OUSE23Z.js";import{a as i}from"./chunk-6HERGS5C.js";import{a}from"./chunk-YQ625XVJ.js";import{a as n}from"./chunk-BZJZQFW2.js";function e(){return i({subcmd:"loadinventory"})}function c(r,t){return{id:t.a,name:t.n,items:r.filter(s=>s.f===t.a)}}function p(r){return{r:{inventories:r.folders.map(n(c,r.items))},s:!0}}async function o(){let r=await m();return f(r)?p(r):{e:{code:0,message:"Server Error"},s:!1}}function u(){return a(e,o)}export{u as a};
//# sourceMappingURL=chunk-REZCNCSI.js.map
