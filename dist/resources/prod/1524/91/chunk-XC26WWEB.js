import{a as c}from"./chunk-KP3DHZE6.js";import{a as t}from"./chunk-BZVD6YUU.js";import{a as p}from"./chunk-GCO363NO.js";import{a as n}from"./chunk-L4KRSPGL.js";import{a as m}from"./chunk-5XOBJVK3.js";import{a as i}from"./chunk-NJPXPCO5.js";import{a as s}from"./chunk-IS4DNI73.js";function e(){return c({subcmd2:"view"})}var u=r=>s('#pCC img[src$="/icon_action_view.png"]',r),f=r=>Number(m(r.parentElement.href,"group_id")),l=r=>t(r).cells[0].children[0].textContent,d=r=>r.split(",").map(i).filter(Boolean),g=r=>t(r).cells[1].firstChild.textContent,w=r=>d(g(r)).map(a=>({name:a})),b=r=>[{name:l(r)},...w(r)],v=r=>({id:f(r),members:b(r)}),x=r=>u(r).map(v),G=r=>({r:x(r),s:!0});async function o(){return G(await p({cmd:"guild",subcmd:"groups"}))}function C(){return n(e,o)}export{C as a};
//# sourceMappingURL=chunk-XC26WWEB.js.map