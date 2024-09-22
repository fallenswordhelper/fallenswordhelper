import{d as s}from"./daLoadInventory-DqhpivwE.js"
import{t,b as a}from"./basicItem-DLCY3R9v.js"
import{$ as e,f as n,aL as i,S as c,L as o,M as r,O as m,a3 as f,Q as l,T as u,U as p,X as d,_ as S,a0 as h,a1 as b,bi as j,ai as y,ae as _}from"./calfSystem-B-q5dZfX.js"
import{f as g}from"./flattenItems-C4pfIrZn.js"
import{a as k}from"./all-YfMtr2SN.js"
function v(){return t({subcmd:"secure"})}const x=({items:s})=>s.map((({a:s})=>[s,!0]))
async function I(){const[t,c]=await k([s(),e(v)])
if(!t?.s||!c?.s)return
const o=g(t.r).map(a),r=n(c.r.sent.flatMap(x))
return{items:o.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:i()}}function L(s){let t,a,e,n,i
return{c(){t=m("label"),a=m("input"),e=f("\n  Select items in ST"),l(a,"type","checkbox"),l(a,"class","svelte-f8757j")},m(c,o){u(c,t,o),p(t,a),a.checked=s[0],p(t,e),n||(i=[d(a,"change",s[2]),d(a,"change",s[1])],n=!0)},p(s,[t]){1&t&&(a.checked=s[0])},i:S,o:S,d(s){s&&h(t),n=!1,b(i)}}}const T="selectST"
function $(s,t,a){const e=j()
let{inSt:n=null}=t
return n=y(T),s.$$set=s=>{"inSt"in s&&a(0,n=s.inSt)},[n,function(){_(T,n),e("toggle")},function(){n=this.checked,a(0,n)}]}class M extends c{constructor(s){super(),o(this,s,$,L,r,{inSt:0})}}export{M as S,I as i}
//# sourceMappingURL=SelectInST-Di8LWv8a.js.map
