import{c as s}from"./createInput-D4knQ_SJ.js"
import{v as e,w as a,$ as t,a as l,x as c,y as n,z as o,A as f,B as i,C as d,D as r,E as v,F as u,G as m,H as p,I as b,J as k,K as g,L as j,N as y,O as h,P as w,s as _,Q as x,R as C,S as B,T as P,q as S,u as $,o as I,i as L,n as N,h as q,l as E}from"./calfSystem-KFszEm2S.js"
import"./legacy-DCwSAgeG.js"
import{i as F}from"./lifecycle-TNO4elpY.js"
import{b as G}from"./buffmarket-yCcQ7hT7.js"
function z(s){return G({subcmd:"doadd",...s})}function A(s){return l({cmd:"buffmarket",subcmd:"doadd",...s},"Buff Package added!")}var D=f('<div class="buff svelte-1jmvdfk"><label class="svelte-1jmvdfk"><input type="checkbox" class="svelte-1jmvdfk"/> <img width="25" height="25" class="svelte-1jmvdfk"/> <span class="svelte-1jmvdfk"> </span></label></div>'),H=f('<div id="spinner" class="svelte-1jmvdfk"></div>'),J=f('<div id="button-div" class="svelte-1jmvdfk"><input type="button" class="awesome green" value="Create Buff Packages" style="color: black;"/> <input type="button" value="Cancel"/></div>'),K=f('<div id="error-message" class="svelte-1jmvdfk"> </div>'),M=f('<p class="fshBold svelte-1jmvdfk">Create Bulk Buff Pacakges</p> <p class="svelte-1jmvdfk">Individual buff packages will be made for each selected skill using the same cost and number of casts.</p> <div id="input-table" class="svelte-1jmvdfk"><label for="gold-cost" class="svelte-1jmvdfk">Gold Cost</label> <input type="text" name="gold-cost" id="gold-cost" class="svelte-1jmvdfk"/> <label for="point-cost" class="svelte-1jmvdfk">Fallen Sword Point Cost</label> <input type="text" name="point-cost" id="point-cost" class="svelte-1jmvdfk"/> <label for="casts" class="svelte-1jmvdfk">Casts</label> <input type="text" name="casts" id="casts" class="svelte-1jmvdfk"/></div> <p class="svelte-1jmvdfk">Selected buffs will be cast at their respective max levels.</p> <div style="columns: 4"></div> <!> <!>',1)
function O(s,l){c(l,!1)
const f=[]
let S=n(l,"buffList",8),$=k(!0)
function I(){p($,!0)}let L=()=>{p(Q,""),p($,!1)},N=k(),q=k(),E=k(),G=k([]),O=k(!1),Q=k()
function R(s){let e={gold_cost:b(N),point_cost:b(q),casts:b(E),package_name:s.name,buff_type_0:s.value,buff_level_0:s.max_level}
return t(z,A,e)}async function T(s,e){const a=await s
if(!a||!0===a.s){const s=await R(e)
return s?.s||p(Q,s?.e?.message??"Server Error"),s}return a}async function U(){p(O,!0),p(Q,""),_("buffmarket","bulkadd")
const s=await b(G).map(s=>S()[s]).reduce(T,Promise.resolve())
s?.s?x("https://www.fallensword.com/index.php?cmd=buffmarket&subcmd=manage&m=1"):p(O,!1)}return F(),o(s,{close:L,get visible(){return b($)},children:(s,e)=>{var a=M(),t=i(d(a),4),l=i(r(t),2),c=i(l,4),n=i(c,4),o=i(t,4)
v(o,7,S,s=>s.value,(s,e,a)=>{var t,l=D(),c=r(l),n=r(c),o=i(n,2),d=i(o,2),v=r(d)
h(()=>{t!==(t=b(a))&&(n.value=(n.__value=b(a))??""),C(o,"src",`https://cdn2.fallensword.com/skills/${b(e),B(()=>b(e).value)??""}.png`),C(o,"alt",(b(e),B(()=>b(e).name))),w(v,(b(e),B(()=>b(e).name)))}),P(f,[],n,()=>(b(a),b(G)),s=>p(G,s)),g(s,l)})
var k=i(o,2),j=s=>{var e=H()
g(s,e)},_=s=>{var e=J(),a=r(e),t=i(a,2)
y("click",a,U),y("click",t,L),g(s,e)}
u(k,s=>{b(O)?s(j):s(_,!1)})
var x=i(k,2),$=s=>{var e=K(),a=r(e)
h(()=>w(a,b(Q))),g(s,e)}
u(x,s=>{b(Q)&&s($)}),m(l,()=>b(N),s=>p(N,s)),m(c,()=>b(q),s=>p(q,s)),m(n,()=>b(E),s=>p(E,s)),g(s,a)},$$slots:{default:!0}}),function(s,t,l){var c=e(s,t)
c&&c.set&&(s[t]=l,a(()=>{s[t]=null}))}(l,"show",I),j({show:I})}let Q=0
function R(){return Q?Q.show():Q=N(O,{target:S("body"),props:{buffList:q("select[name=buff_type_0] option").map(s=>{const e=E(s).match(/^(.+) \[Max (\d+)\]/)
return{value:s.value,name:e[1],max_level:e[2]}})}}),Q}function T(){!function(){const e=S("#pCC form"),a=$({className:"fshCenter"}),t=s({value:"Create Bulk Package",type:"button",className:"awesome large"})
t.style.margin="12px",I(t,R),L(a,t),e.after(" ",a)}()}export{T as default}
//# sourceMappingURL=injectBigBuffPacakges-BinDAPMG.js.map
