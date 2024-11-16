import{d as s}from"./daLoadInventory-XbR6QBDO.js"
import{t,b as a}from"./basicItem-B4VQEJwm.js"
import{$ as e,f as n,aI as i,S as c,L as o,M as r,O as m,Y as l,Z as f,R as u,T as p,a2 as d,U as S,V as h,X as b,bl as j,ai as y,ad as g}from"./calfSystem-Blt4DbaE.js"
import{f as k}from"./flattenItems-C4pfIrZn.js"
import{a as I}from"./all-YfMtr2SN.js"
function _(){return t({subcmd:"secure"})}const v=({items:s})=>s.map((({a:s})=>[s,!0]))
async function x(){const[t,c]=await I([s(),e(_)])
if(!t?.s||!c?.s)return
const o=k(t.r).map(a),r=n(c.r.sent.flatMap(v))
return{items:o.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:i()}}function T(s){let t,a,e,n,i
return{c(){t=S("label"),a=S("input"),e=h("\n  Select items in ST"),b(a,"type","checkbox"),b(a,"class","svelte-f8757j")},m(c,o){u(c,t,o),p(t,a),a.checked=s[0],p(t,e),n||(i=[d(a,"change",s[2]),d(a,"change",s[1])],n=!0)},p(s,[t]){1&t&&(a.checked=s[0])},i:f,o:f,d(s){s&&m(t),n=!1,l(i)}}}const $="selectST"
function L(s,t,a){const e=j()
let{inSt:n=null}=t
return n=y($),s.$$set=s=>{"inSt"in s&&a(0,n=s.inSt)},[n,function(){g($,n),e("toggle")},function(){n=this.checked,a(0,n)}]}class M extends c{constructor(s){super(),o(this,s,L,T,r,{inSt:0})}}export{M as S,x as i}
//# sourceMappingURL=SelectInST-CX3QyODd.js.map
