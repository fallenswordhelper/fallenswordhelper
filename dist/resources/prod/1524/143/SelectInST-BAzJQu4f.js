import{d as s}from"./daLoadInventory-BJGfaSuo.js"
import{t,b as a}from"./basicItem-Dp_qF4zf.js"
import{$ as e,u as n,f as c,b0 as i,S as o,O as r,P as m,R as u,a7 as f,U as l,W as p,X as d,_ as S,a3 as h,a4 as b,a5 as j,bE as k,ao as y,aj as _}from"./calfSystem-ChzN4Q-P.js"
import{f as g}from"./flattenItems-DRKC5Ux6.js"
function v(){return t({subcmd:"secure"})}const x=({items:s})=>s.map((({a:s})=>[s,!0]))
async function I(){const[t,o]=await n([s(),e(v)])
if(!t?.s||!o?.s)return
const r=g(t.r).map(a),m=c(o.r.sent.flatMap(x))
return{items:r.map((s=>({...s,...m?.[s.inv_id]&&{is_in_st:!0}}))),player_id:i()}}function $(s){let t,a,e,n,c
return{c(){t=u("label"),a=u("input"),e=f("\n  Select items in ST"),l(a,"type","checkbox"),l(a,"class","svelte-f8757j")},m(i,o){p(i,t,o),d(t,a),a.checked=s[0],d(t,e),n||(c=[S(a,"change",s[2]),S(a,"change",s[1])],n=!0)},p(s,[t]){1&t&&(a.checked=s[0])},i:h,o:h,d(s){s&&b(t),n=!1,j(c)}}}const T="selectST"
function w(s,t,a){const e=k()
let{inSt:n=null}=t
return n=y(T),s.$$set=s=>{"inSt"in s&&a(0,n=s.inSt)},[n,function(){_(T,n),e("toggle")},function(){n=this.checked,a(0,n)}]}class E extends o{constructor(s){super(),r(this,s,w,$,m,{inSt:0})}}export{E as S,I as i}
//# sourceMappingURL=SelectInST-BAzJQu4f.js.map
