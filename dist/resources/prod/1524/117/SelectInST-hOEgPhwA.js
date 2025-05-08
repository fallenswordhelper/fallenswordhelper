import{d as s}from"./daLoadInventory-20Qn11vN.js"
import{t,b as a}from"./basicItem-w_tHNJN5.js"
import{$ as e,f as n,aJ as i,S as c,L as o,M as r,O as m,a3 as f,Q as l,T as u,U as p,X as d,_ as S,a0 as h,a1 as b,bg as j,ai as g,ae as y}from"./calfSystem-G1dN925O.js"
import{f as _}from"./flattenItems-OuxkqZMH.js"
import{a as k}from"./all-TTLWag-d.js"
function T(){return t({subcmd:"secure"})}const v=({items:s})=>s.map((({a:s})=>[s,!0]))
async function x(){const[t,c]=await k([s(),e(T)])
if(!t?.s||!c?.s)return
const o=_(t.r).map(a),r=n(c.r.sent.flatMap(v))
return{items:o.map((s=>({...s,...r?.[s.inv_id]&&{is_in_st:!0}}))),player_id:i()}}function I(s){let t,a,e,n,i
return{c(){t=m("label"),a=m("input"),e=f("\n  Select items in ST"),l(a,"type","checkbox"),l(a,"class","svelte-f8757j")},m(c,o){u(c,t,o),p(t,a),a.checked=s[0],p(t,e),n||(i=[d(a,"change",s[2]),d(a,"change",s[1])],n=!0)},p(s,[t]){1&t&&(a.checked=s[0])},i:S,o:S,d(s){s&&h(t),n=!1,b(i)}}}const $="selectST"
function L(s,t,a){const e=j()
let{inSt:n=null}=t
return n=g($),s.$$set=s=>{"inSt"in s&&a(0,n=s.inSt)},[n,function(){y($,n),e("toggle")},function(){n=this.checked,a(0,n)}]}class M extends c{constructor(s){super(),o(this,s,L,I,r,{inSt:0})}}export{M as S,x as i}
//# sourceMappingURL=SelectInST-hOEgPhwA.js.map
