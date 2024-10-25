import{d as s}from"./daLoadInventory-Cqd0pwNg.js"
import{t as a,b as t}from"./basicItem-kqPAOgo-.js"
import{$ as e,f as n,aK as i,S as c,L as o,M as r,O as m,a4 as f,Q as l,T as u,U as p,X as d,a0 as S,a1 as h,a2 as b,bi as j,ai as y,ae as g}from"./calfSystem-DZGU7L1H.js"
import{f as k}from"./flattenItems-C4pfIrZn.js"
import{a as _}from"./all-YfMtr2SN.js"
function v(){return a({subcmd:"secure"})}const x=({items:s})=>s.map((({a:s})=>[s,!0]))
async function I(){const[a,c]=await _([s(),e(v)])
if(!a?.s||!c?.s)return
const o=k(a.r).map(t),r=n(c.r.sent.flatMap(x))
return{items:o.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:i()}}function T(s){let a,t,e,n,i
return{c(){a=m("label"),t=m("input"),e=f("\n  Select items in ST"),l(t,"type","checkbox"),l(t,"class","svelte-f8757j")},m(c,o){u(c,a,o),p(a,t),t.checked=s[0],p(a,e),n||(i=[d(t,"change",s[2]),d(t,"change",s[1])],n=!0)},p(s,[a]){1&a&&(t.checked=s[0])},i:S,o:S,d(s){s&&h(a),n=!1,b(i)}}}const $="selectST"
function L(s,a,t){const e=j()
let{inSt:n=null}=a
return n=y($),s.$$set=s=>{"inSt"in s&&t(0,n=s.inSt)},[n,function(){g($,n),e("toggle")},function(){n=this.checked,t(0,n)}]}class M extends c{constructor(s){super(),o(this,s,L,T,r,{inSt:0})}}export{M as S,I as i}
//# sourceMappingURL=SelectInST-BT2bqrE_.js.map
