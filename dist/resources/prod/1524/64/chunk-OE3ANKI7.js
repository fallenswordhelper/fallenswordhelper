import{a as l}from"./chunk-AU7HMMK6.js";import{a}from"./chunk-C7T6VCNC.js";import{a as c}from"./chunk-V4O7SGPV.js";import{a as o}from"./chunk-FA37UARH.js";import{a as m}from"./chunk-LXVMDOGR.js";import{a as e}from"./chunk-X5N7OOVX.js";import{a as u,b as d}from"./chunk-PUT3KB2D.js";import{a as i}from"./chunk-UUU5NSJN.js";function s(r){return a({guild_id:r,subcmd:"guild_members"})}function b(r,t){let n=t||{};d("fsh_membrList",$.extend(n,r))}function g(r){return u("fsh_membrList").then(e(b,r)),r}function h(r,t){if(!t)return;let n=l(t.map(f=>[f.username,f]));return{[r]:{lastUpdate:o,...n}}}function L(r){return s(r).then(e(h,r))}function p(r){return L(r).then(g)}var M=[(r,t)=>t,(r,t)=>m(t),(r,t)=>m(t[r]),(r,t)=>typeof t[r].lastUpdate=="number",(r,t)=>t[r].lastUpdate>o-3e5];function _(r,t,n){return n(r,t)}function x(r,t){return M.every(e(_,r,t))}function F(r,t){return x(r,t)?t:p(r)}function G(r,t){return r?p(t):u("fsh_membrList").then(e(F,t))}function j(r,t){if(t)return i.membrList=t[r],i.membrList}function E(r){let t=c();return t?G(r,t).then(e(j,t)):Promise.reject(new Error("no guild id"))}export{E as a};
//# sourceMappingURL=chunk-OE3ANKI7.js.map