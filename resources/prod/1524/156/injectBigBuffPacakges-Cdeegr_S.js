import{c as s}from"./createInput-7MlQDlWD.js"
import{v as e,w as a,$ as t,a as l,x as c,y as n,z as o,A as d,B as v,C as f,D as i,E as r,F as u,G as m,H as p,I as b,J as k,K as g,L as j,N as h,O as w,P as y,Q as _,s as x,R as C,S as B,T as P,U as S,q as $,u as I,o as L,i as N,n as E,h as F,l as G}from"./calfSystem-79LsojAC.js"
import{b as q}from"./buffmarket-D-uaB_9I.js"
function z(s){return q({subcmd:"doadd",...s})}function A(s){return l({cmd:"buffmarket",subcmd:"doadd",...s},"Buff Package added!")}var D=v('<div class="buff svelte-1jmvdfk"><label class="svelte-1jmvdfk"><input type="checkbox" class="svelte-1jmvdfk"/> <img width="25" height="25" class="svelte-1jmvdfk"/> <span class="svelte-1jmvdfk"> </span></label></div>'),H=v('<div id="spinner" class="svelte-1jmvdfk"></div>'),J=v('<div id="button-div" class="svelte-1jmvdfk"><input type="button" class="awesome green" value="Create Buff Packages" style="color: black;"/> <input type="button" value="Cancel"/></div>'),K=v('<div id="error-message" class="svelte-1jmvdfk"> </div>'),M=v('<p class="fshBold svelte-1jmvdfk">Create Bulk Buff Pacakges</p> <p class="svelte-1jmvdfk">Individual buff packages will be made for each selected skill using the same cost and number of casts.</p> <div id="input-table" class="svelte-1jmvdfk"><label for="gold-cost" class="svelte-1jmvdfk">Gold Cost</label> <input type="text" name="gold-cost" id="gold-cost" class="svelte-1jmvdfk"/> <label for="point-cost" class="svelte-1jmvdfk">Fallen Sword Point Cost</label> <input type="text" name="point-cost" id="point-cost" class="svelte-1jmvdfk"/> <label for="casts" class="svelte-1jmvdfk">Casts</label> <input type="text" name="casts" id="casts" class="svelte-1jmvdfk"/></div> <p class="svelte-1jmvdfk">Selected buffs will be cast at their respective max levels.</p> <div style="columns: 4"></div> <!> <!>',1)
function O(s,l){c(l,!1)
const v=[]
let $=n(l,"buffList",8),I=g(!0)
function L(){b(I,!0)}let N=()=>{b(Q,""),b(I,!1)},E=g(),F=g(),G=g(),q=g([]),O=g(!1),Q=g()
function R(s){let e={gold_cost:k(E),point_cost:k(F),casts:k(G),package_name:s.name,buff_type_0:s.value,buff_level_0:s.max_level}
return t(z,A,e)}async function T(s,e){const a=await s
if(!a||!0===a.s){const s=await R(e)
return s?.s||b(Q,s?.e?.message??"Server Error"),s}return a}async function U(){b(O,!0),b(Q,""),x("buffmarket","bulkadd")
const s=await k(q).map(s=>$()[s]).reduce(T,Promise.resolve())
s?.s?C("https://www.fallensword.com/index.php?cmd=buffmarket&subcmd=manage&m=1"):b(O,!1)}return o(),d(s,{close:N,get visible(){return k(I)},children:(s,e)=>{var a=M(),t=f(i(a),4),l=f(r(t),2),c=f(l,4),n=f(c,4),o=f(t,4)
u(o,7,$,s=>s.value,(s,e,a)=>{var t,l=D(),c=r(l),n=r(c),o=f(n,2),d=f(o,2),i=r(d)
y(()=>{t!==(t=k(a))&&(n.value=(n.__value=k(a))??""),B(o,"src",`https://cdn2.fallensword.com/skills/${k(e),P(()=>k(e).value)??""}.png`),B(o,"alt",(k(e),P(()=>k(e).name))),_(i,(k(e),P(()=>k(e).name)))}),S(v,[],n,()=>(k(a),k(q)),s=>b(q,s)),j(s,l)})
var d=f(o,2),g=s=>{var e=H()
j(s,e)},h=s=>{var e=J(),a=r(e),t=f(a,2)
w("click",a,U),w("click",t,N),j(s,e)}
m(d,s=>{k(O)?s(g):s(h,!1)})
var x=f(d,2),C=s=>{var e=K(),a=r(e)
y(()=>_(a,k(Q))),j(s,e)}
m(x,s=>{k(Q)&&s(C)}),p(l,()=>k(E),s=>b(E,s)),p(c,()=>k(F),s=>b(F,s)),p(n,()=>k(G),s=>b(G,s)),j(s,a)},$$slots:{default:!0}}),function(s,t,l){var c=e(s,t)
c&&c.set&&(s[t]=l,a(()=>{s[t]=null}))}(l,"show",L),h({show:L})}let Q=0
function R(){return Q?Q.show():Q=E(O,{target:$("body"),props:{buffList:F("select[name=buff_type_0] option").map(s=>{const e=G(s).match(/^(.+) \[Max (\d+)\]/)
return{value:s.value,name:e[1],max_level:e[2]}})}}),Q}function T(){!function(){const e=$("#pCC form"),a=I({className:"fshCenter"}),t=s({value:"Create Bulk Package",type:"button",className:"awesome large"})
t.style.margin="12px",L(t,R),N(a,t),e.after(" ",a)}()}export{T as default}
//# sourceMappingURL=injectBigBuffPacakges-Cdeegr_S.js.map
