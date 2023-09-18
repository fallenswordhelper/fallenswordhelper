import{d as s}from"./daLoadInventory-7d3bc344.js"
import{t as a,b as t}from"./basicItem-932eb681.js"
import{$ as e,f as n,aF as c,S as i,K as o,L as r,M as m,a0 as f,O as l,Q as u,R as p,V as d,X as S,Y as h,Z as b,ba as j,ae as y,aa as g}from"./calfSystem-929ac228.js"
import{f as k}from"./flattenItems-03659160.js"
import{a as _}from"./all-414e0607.js"
function v(){return a({subcmd:"secure"})}const x=({items:s})=>s.map((({a:s})=>[s,!0]))
async function I(){const[a,i]=await _([s(),e(v)])
if(!a?.s||!i?.s)return
const o=k(a.r).map(t),r=n(i.r.sent.flatMap(x))
return{items:o.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:c()}}function T(s){let a,t,e,n,c
return{c(){a=m("label"),t=m("input"),e=f("\n  Select items in ST"),l(t,"type","checkbox"),l(t,"class","svelte-f8757j")},m(i,o){u(i,a,o),p(a,t),t.checked=s[0],p(a,e),n||(c=[d(t,"change",s[2]),d(t,"change",s[1])],n=!0)},p(s,[a]){1&a&&(t.checked=s[0])},i:S,o:S,d(s){s&&h(a),n=!1,b(c)}}}const $="selectST"
function L(s,a,t){const e=j()
let{inSt:n=null}=a
return n=y($),s.$$set=s=>{"inSt"in s&&t(0,n=s.inSt)},[n,function(){g($,n),e("toggle")},function(){n=this.checked,t(0,n)}]}class M extends i{constructor(s){super(),o(this,s,L,T,r,{inSt:0})}}export{M as S,I as i}
//# sourceMappingURL=SelectInST-6fdb4b51.js.map
