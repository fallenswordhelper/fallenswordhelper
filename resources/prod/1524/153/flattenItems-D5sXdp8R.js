import{cJ as n,$ as t,ac as r}from"./calfSystem-CT1aM4VG.js"
function e(){return n({subcmd:"loadinventory"})}function i(){return t(e)}const o=({id:n,items:t})=>t.map((t=>({...t,folder_id:n})))
function s(n){return r(n?.inventories)?n.inventories.flatMap(o):[]}export{i as d,s as f}
//# sourceMappingURL=flattenItems-D5sXdp8R.js.map
