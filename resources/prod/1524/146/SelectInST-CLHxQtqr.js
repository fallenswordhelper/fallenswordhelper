import{d as s}from"./daLoadInventory-DgtAUlVi.js"
import{d5 as a,$ as t,v as e,f as n,b3 as c,S as i,P as o,Q as r,T as m,U as l,V as f,_ as u,a0 as p,a1 as d,a3 as S,a9 as h,a5 as b,bH as j,aq as k,al as y}from"./calfSystem-DiXGAkgN.js"
import{b as _}from"./basicItem-jvMH1Iol.js"
import{f as g}from"./flattenItems-DhYCzXK-.js"
function v(){return a({subcmd:"secure"})}const x=({items:s})=>s.map((({a:s})=>[s,!0]))
async function I(){const[a,i]=await e([s(),t(v)])
if(!a?.s||!i?.s)return
const o=g(a.r).map(_),r=n(i.r.sent.flatMap(x))
return{items:o.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:c()}}function T(s){let a,t,e,n,c
return{c(){a=S("label"),t=S("input"),e=h("\n  Select items in ST"),b(t,"type","checkbox"),b(t,"class","svelte-f8757j")},m(i,o){u(i,a,o),p(a,t),t.checked=s[0],p(a,e),n||(c=[d(t,"change",s[2]),d(t,"change",s[1])],n=!0)},p(s,[a]){1&a&&(t.checked=s[0])},i:m,o:m,d(s){s&&l(a),n=!1,f(c)}}}const $="selectST"
function q(s,a,t){const e=j()
let{inSt:n=null}=a
return n=k($),s.$$set=s=>{"inSt"in s&&t(0,n=s.inSt)},[n,function(){y($,n),e("toggle")},function(){n=this.checked,t(0,n)}]}class w extends i{constructor(s){super(),o(this,s,q,T,r,{inSt:0})}}export{w as S,I as i}
//# sourceMappingURL=SelectInST-CLHxQtqr.js.map
