import{a}from"./chunk-IZN4VWOX.js";import{a as l}from"./chunk-7B3WSLHR.js";import{a as c}from"./chunk-N7MDWAJF.js";import{a as o}from"./chunk-JSOCZFF7.js";import{a as m}from"./chunk-JUUMQFPG.js";import{a as e}from"./chunk-KQGQROK7.js";import{a as u,b as d}from"./chunk-ZGNC6ELN.js";import{a as i}from"./chunk-6IFYCYYR.js";function s(r){return l({guild_id:r,subcmd:"guild_members"})}function b(r,t){let n=t||{};d("fsh_membrList",$.extend(n,r))}function g(r){return u("fsh_membrList").then(e(b,r)),r}function h(r,t){if(!t)return;let n=a(t.map(f=>[f.username,f]));return{[r]:{lastUpdate:o,...n}}}function L(r){return s(r).then(e(h,r))}function p(r){return L(r).then(g)}var M=[(r,t)=>t,(r,t)=>m(t),(r,t)=>m(t[r]),(r,t)=>typeof t[r].lastUpdate=="number",(r,t)=>t[r].lastUpdate>o-3e5];function _(r,t,n){return n(r,t)}function x(r,t){return M.every(e(_,r,t))}function F(r,t){return x(r,t)?t:p(r)}function G(r,t){return r?p(t):u("fsh_membrList").then(e(F,t))}function j(r,t){if(t)return i.membrList=t[r],i.membrList}function E(r){let t=c();return t?G(r,t).then(e(j,t)):Promise.reject(new Error("no guild id"))}export{E as a};
//# sourceMappingURL=chunk-RQZR43QD.js.map