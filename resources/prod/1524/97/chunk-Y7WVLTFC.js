import{a as b}from"./chunk-NIL7WR54.js";import{a as d}from"./chunk-HBQKZNOT.js";import{a as c}from"./chunk-QVZVZ2TH.js";import{a as i}from"./chunk-IGPEYEWI.js";import{a as o,b as a}from"./chunk-RIFWXPPJ.js";import{a as u,b as f}from"./chunk-EOMEBOYD.js";import{a as m}from"./chunk-Y7Z3DYSJ.js";import{a as n}from"./chunk-VZNGURHD.js";function l(r,t){let e=t||{};a("fsh_membrList",$.extend(e,r))}async function L(r){let t=await o("fsh_membrList");return l(r,t),r}function g(r,t){if(!t)return;let e=d(t.map(s=>[s.username,s]));return{[r]:{lastUpdate:u(),...e}}}async function M(r){let t=await b(r);return g(r,t)}async function p(r){let t=await M(r);return L(t),t}var w=[(r,t)=>t,(r,t)=>i(t),(r,t)=>i(t[r]),(r,t)=>typeof t[r].lastUpdate=="number",(r,t)=>t[r].lastUpdate>f()];function y(r,t,e){return e(r,t)}function h(r,t){return w.every(m(y,r,t))}function _(r,t){return h(r,t)?t:p(r)}async function F(r,t){if(r)return p(t);let e=await o("fsh_membrList");return _(t,e)}function G(r,t){if(t)return n.membrList=t[r],n.membrList}async function v(r){let t=c();if(t){let e=await F(r,t);return G(t,e)}throw new Error("no guild id")}export{v as a};
//# sourceMappingURL=chunk-Y7WVLTFC.js.map
