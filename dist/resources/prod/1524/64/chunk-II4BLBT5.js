import{a as d}from"./chunk-VAFEM2T7.js";import{a as p}from"./chunk-JAAA6A3K.js";import{a as c}from"./chunk-SDRXUAQO.js";import{a as e}from"./chunk-7Q3UNQAY.js";import{a}from"./chunk-S367ATRC.js";import{a as m}from"./chunk-CSKN77A5.js";import{a as o}from"./chunk-3EONQEO2.js";import{a as s}from"./chunk-QS7J5TMD.js";function u(r){return d(s({subcmd:"ranks"},r))}var f=r=>o({cmd:"guild",subcmd:"ranks",subcmd2:"add",rank_id:r}),k=r=>f(r.getAttribute("onclick").match(/[=](\d+)/)[1]),l=r=>a('input[name^="permission"]:checked',r).reduce((t,n)=>t+2**Number(n.name.match(/\[(\d+)\]/)[1]),0);function b(r){return{id:Number(e('input[name="rank_id"]',r).value),name:e('input[name="rank_name"]',r).value,permissions:l(r),tax:Number(e('input[name="rank_tax"]',r).value)}}function x(r){let n=r.map(m).map(b);return{r:{0:n[0],ranks:n.slice(1)},s:!0}}function g(r){let t=m(r),n=a('input[value="Edit"]',t);return p(n.map(k),x)}function i(){return o({cmd:"guild",subcmd:"ranks"}).then(g)}function h(){return c(u,i)}export{u as a,h as b};
//# sourceMappingURL=chunk-II4BLBT5.js.map