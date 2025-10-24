import{c as s}from"./createInput-aJbr7AXf.js"
import{w as e,x as a,$ as t,a as l,y as c,z as n,A as o,B as v,C as d,D as r,E as i,F as u,G as f,H as m,I as p,J as b,K as w,L as g,N as k,O as q,P as z,Q as h,R as y,s as _,S as x,T as C,U as B,V as P,q as S,v as $,o as j,i as I,t as L,h as N,m as E}from"./calfSystem-CIdPz3EO.js"
import{b as F}from"./buffmarket-ByZbnzdD.js"
function G(s){return F({subcmd:"doadd",...s})}function A(s){return l({cmd:"buffmarket",subcmd:"doadd",...s},"Buff Package added!")}var D=d('<div class="buff svelte-17vzwqd"><label class="svelte-17vzwqd"><input type="checkbox" class="svelte-17vzwqd"/> <img width="25" height="25" class="svelte-17vzwqd"/> <span class="svelte-17vzwqd"> </span></label></div>'),H=d('<div id="spinner" class="svelte-17vzwqd"></div>'),J=d('<div id="button-div" class="svelte-17vzwqd"><input type="button" class="awesome green" value="Create Buff Packages" style="color: black;"/> <input type="button" value="Cancel"/></div>'),K=d('<div id="error-message" class="svelte-17vzwqd"> </div>'),M=d('<p class="fshBold svelte-17vzwqd">Create Bulk Buff Pacakges</p> <p class="svelte-17vzwqd">Individual buff packages will be made for each selected skill using the same cost and number of casts.</p> <div id="input-table" class="svelte-17vzwqd"><label for="gold-cost" class="svelte-17vzwqd">Gold Cost</label> <input type="text" name="gold-cost" id="gold-cost" class="svelte-17vzwqd"/> <label for="point-cost" class="svelte-17vzwqd">Fallen Sword Point Cost</label> <input type="text" name="point-cost" id="point-cost" class="svelte-17vzwqd"/> <label for="casts" class="svelte-17vzwqd">Casts</label> <input type="text" name="casts" id="casts" class="svelte-17vzwqd"/></div> <p class="svelte-17vzwqd">Selected buffs will be cast at their respective max levels.</p> <div style="columns: 4"></div> <!> <!>',1)
function O(s,l){c(l,!1)
const d=[]
let S=n(l,"buffList",8),$=g(!0)
function j(){b($,!0)}let I=()=>{b(Q,""),b($,!1)},L=g(),N=g(),E=g(),F=g([]),O=g(!1),Q=g()
function R(s){let e={gold_cost:w(L),point_cost:w(N),casts:w(E),package_name:s.name,buff_type_0:s.value,buff_level_0:s.max_level}
return t(G,A,e)}async function T(s,e){const a=await s
if(!a||!0===a.s){const s=await R(e)
return s?.s||b(Q,s?.e?.message??"Server Error"),s}return a}async function U(){b(O,!0),b(Q,""),_("buffmarket","bulkadd")
const s=await w(F).map(s=>S()[s]).reduce(T,Promise.resolve())
s?.s?x("https://www.fallensword.com/index.php?cmd=buffmarket&subcmd=manage&m=1"):b(O,!1)}var V={show:j}
return o(),v(s,{close:I,get visible(){return w($)},children:(s,e)=>{var a=M(),t=r(i(a),4),l=r(u(t),2),c=r(l,4),n=r(c,4),o=r(t,4)
f(o,7,S,s=>s.value,(s,e,a)=>{var t,l=D(),c=u(l),n=u(c),o=r(n,2),v=r(o,2),i=u(v)
h(()=>{t!==(t=w(a))&&(n.value=(n.__value=w(a))??""),C(o,"src",`https://cdn2.fallensword.com/skills/${w(e),B(()=>w(e).value)??""}.png`),C(o,"alt",(w(e),B(()=>w(e).name))),y(i,(w(e),B(()=>w(e).name)))}),P(d,[],n,()=>(w(a),w(F)),s=>b(F,s)),k(s,l)})
var v=r(o,2),g=s=>{var e=H()
k(s,e)},q=s=>{var e=J(),a=u(e),t=r(a,2)
z("click",a,U),z("click",t,I),k(s,e)}
m(v,s=>{w(O)?s(g):s(q,!1)})
var _=r(v,2),x=s=>{var e=K(),a=u(e)
h(()=>y(a,w(Q))),k(s,e)}
m(_,s=>{w(Q)&&s(x)}),p(l,()=>w(L),s=>b(L,s)),p(c,()=>w(N),s=>b(N,s)),p(n,()=>w(E),s=>b(E,s)),k(s,a)},$$slots:{default:!0}}),function(s,t,l){var c=e(s,t)
c&&c.set&&(s[t]=l,a(()=>{s[t]=null}))}(l,"show",j),q(V)}let Q=0
function R(){return Q?Q.show():Q=L(O,{target:S("body"),props:{buffList:N("select[name=buff_type_0] option").map(s=>{const e=E(s).match(/^(.+) \[Max (\d+)\]/)
return{value:s.value,name:e[1],max_level:e[2]}})}}),Q}function T(){!function(){const e=S("#pCC form"),a=$({className:"fshCenter"}),t=s({value:"Create Bulk Package",type:"button",className:"awesome large"})
t.style.margin="12px",j(t,R),I(a,t),e.after(" ",a)}()}export{T as default}
//# sourceMappingURL=injectBigBuffPacakges-UlfQ_TPJ.js.map
