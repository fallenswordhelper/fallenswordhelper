import{d as s}from"./daLoadInventory-9c7bd6b5.js"
import{t,b as a}from"./basicItem-cb072d2b.js"
import{$ as e,f as n,aE as c,S as i,J as o,K as r,L as m,_ as f,N as l,P as u,Q as p,U as d,W as S,X as h,Y as b,b9 as j,ad as y,a9 as _}from"./calfSystem-4830a18d.js"
import{f as g}from"./flattenItems-03659160.js"
import{a as k}from"./all-414e0607.js"
function v(){return t({subcmd:"secure"})}const x=({items:s})=>s.map((({a:s})=>[s,!0]))
async function I(){const[t,i]=await k([s(),e(v)])
if(!t?.s||!i?.s)return
const o=g(t.r).map(a),r=n(i.r.sent.flatMap(x))
return{items:o.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:c()}}function T(s){let t,a,e,n,c
return{c(){t=m("label"),a=m("input"),e=f("\n  Select items in ST"),l(a,"type","checkbox"),l(a,"class","svelte-f8757j")},m(i,o){u(i,t,o),p(t,a),a.checked=s[0],p(t,e),n||(c=[d(a,"change",s[2]),d(a,"change",s[1])],n=!0)},p(s,[t]){1&t&&(a.checked=s[0])},i:S,o:S,d(s){s&&h(t),n=!1,b(c)}}}const $="selectST"
function L(s,t,a){const e=j()
let{inSt:n=null}=t
return n=y($),s.$$set=s=>{"inSt"in s&&a(0,n=s.inSt)},[n,function(){_($,n),e("toggle")},function(){n=this.checked,a(0,n)}]}class w extends i{constructor(s){super(),o(this,s,L,T,r,{inSt:0})}}export{w as S,I as i}
//# sourceMappingURL=SelectInST-8c6a2089.js.map
