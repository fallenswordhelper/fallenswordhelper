import{b as u}from"./chunk-TPGBAKXQ.js";import{a as f}from"./chunk-U5XRZO3G.js";import{b as i}from"./chunk-O727LCIL.js";import{a as p}from"./chunk-I6ZSBYQ3.js";import{a as n}from"./chunk-YQ625XVJ.js";import{a as s}from"./chunk-JG7KZ32H.js";import{a}from"./chunk-V45UJIF2.js";import{a as c}from"./chunk-PJWDCLVE.js";import{m as o}from"./chunk-5ELKH2XV.js";var l=r=>new RegExp(`<td>${r}:</td><td>(\\d+)</td>`);function x(r){return{id:r.src.split("/").at(-1).split(".")[0],name:s(f(r).previousElementSibling),attributes:["Attack","Defense","Armor","HP","Damage"].map((e,t)=>({id:t,value:Number(c(l(e),r.dataset.tipped))}))}}function E(r){return{r:{mercs:a('#pCC img[src*="/mercs/"]',r).map(x)},s:!0}}async function m(){return E(await p({cmd:"guild",subcmd:"mercs"}))}function g(){return n(i,m)}var b=r=>Math.ceil(r*o),w=({attributes:r})=>u(r).map(b),A=(r,e)=>r.map((t,d)=>t+e[d]);function M(r){return r?.r?.mercs?.map(w).reduce(A,[0,0,0,0,0])??[0,0,0,0,0]}export{g as a,M as b};
//# sourceMappingURL=chunk-UPFLLBAA.js.map