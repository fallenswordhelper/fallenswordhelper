import{a as f}from"./chunk-R3OD4O6G.js";import{a as c}from"./chunk-K3XM2YMD.js";import{a as u}from"./chunk-4VNGVSFE.js";import{a as o,b as a}from"./chunk-VGSTDDXU.js";import{c as d,d as b}from"./chunk-CIKNJBXV.js";import{a as i}from"./chunk-THRA3S6L.js";import{a as m}from"./chunk-JVNW5U7Y.js";import{a as n}from"./chunk-IWZ3GP32.js";function l(r,t){let e=t||{};a("fsh_membrList",$.extend(e,r))}async function L(r){let t=await o("fsh_membrList");return l(r,t),r}function g(r,t){if(!t)return;let e=u(t.map(s=>[s.username,s]));return{[r]:{lastUpdate:d(),...e}}}async function M(r){let t=await f(r);return g(r,t)}async function p(r){let t=await M(r);return L(t),t}var w=[(r,t)=>t,(r,t)=>i(t),(r,t)=>i(t[r]),(r,t)=>typeof t[r].lastUpdate=="number",(r,t)=>t[r].lastUpdate>b()];function y(r,t,e){return e(r,t)}function h(r,t){return w.every(m(y,r,t))}function _(r,t){return h(r,t)?t:p(r)}async function F(r,t){if(r)return p(t);let e=await o("fsh_membrList");return _(t,e)}function G(r,t){if(t)return n.membrList=t[r],n.membrList}async function v(r){let t=c();if(t){let e=await F(r,t);return G(t,e)}throw new Error("no guild id")}export{v as a};
//# sourceMappingURL=chunk-4WYFBDLY.js.map
