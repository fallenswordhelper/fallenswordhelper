import{d as s}from"./daLoadInventory-91dpda39.js"
import{t,b as a}from"./basicItem-LexK_yLX.js"
import{$ as e,f as n,S as i,J as c,K as r,L as o,_ as m,N as f,P as l,Q as p,U as u,W as d,X as S,Y as h,b8 as j,ad as b,a9 as y}from"./calfSystem-dEoRVG2S.js"
import{f as _}from"./flattenItems-OuxkqZMH.js"
import{a as g}from"./all-TTLWag-d.js"
import{p as k}from"./playerId-GaX4qisZ.js"
function I(){return t({subcmd:"secure"})}const v=({items:s})=>s.map((({a:s})=>[s,!0]))
async function x(){const[t,i]=await g([s(),e(I)])
if(!t?.s||!i?.s)return
const c=_(t.r).map(a),r=n(i.r.sent.flatMap(v))
return{items:c.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:k()}}function T(s){let t,a,e,n,i
return{c(){t=o("label"),a=o("input"),e=m("\n  Select items in ST"),f(a,"type","checkbox"),f(a,"class","svelte-f8757j")},m(c,r){l(c,t,r),p(t,a),a.checked=s[0],p(t,e),n||(i=[u(a,"change",s[2]),u(a,"change",s[1])],n=!0)},p(s,[t]){1&t&&(a.checked=s[0])},i:d,o:d,d(s){s&&S(t),n=!1,h(i)}}}const $="selectST"
function L(s,t,a){const e=j()
let{inSt:n=null}=t
return n=b($),s.$$set=s=>{"inSt"in s&&a(0,n=s.inSt)},[n,function(){y($,n),e("toggle")},function(){n=this.checked,a(0,n)}]}class w extends i{constructor(s){super(),c(this,s,L,T,r,{inSt:0})}}export{w as S,x as i}
//# sourceMappingURL=SelectInST-K_XqEyA3.js.map
