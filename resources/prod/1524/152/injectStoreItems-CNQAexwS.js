import{m as t,e as s,a as e,d as n}from"./dropItem-DHLlzUYq.js"
import{az as a,cn as o,$ as r,z as i,C as c,G as l,al as d,D as u,ao as f,K as m,N as p,O as h,F as k,J as v,aq as w,Q as g,R as L,ac as b,l as y,d as S,h as x,f as D,dw as C,s as Q,n as E,k as _,A,E as I,dc as j,dg as F,H as N,aw as T,bz as G,u as H,a4 as z,aB as B,o as M,p as O}from"./calfSystem-BlPuMQGT.js"
import{d as U}from"./doStatTotal-B-MyqY5z.js"
import{e as $}from"./errorDialog-B4_TjdGG.js"
import{a as R}from"./arrayFromRadioNodeList-BLmfWATb.js"
let q=0,J=0
function K(){if(!J){const t="dropitems"===a.subcmd?"removeIndex[]":"storeIndex[]"
q=document.forms[0]?.elements[t],J=!0}return q}function P(){const t=K()
return t?R(t):[]}function V(t,s){return o({subcmd:"sendtofolder",folder_id:t,folderItem:s})}async function W(s,e){return await t(e,s),{r:e}}function X(t,s){return r(V,W,t,s)}function Y(t,s,e){s.moveItemsToFolder(m(e))}var Z=c("<option> </option>"),tt=c('<tr><td class="fshCenter"><span>Move selected items to:</span> <select class="customselect"></select> <span>&nbsp;</span> <button class="custombutton svelte-vafhru" type="button">Move</button></td></tr>')
function st(t,s){i(s,!0)
let e=d(void 0)
var n=tt(),a=k(n),o=u(k(a),2)
l(o,21,(()=>s.folders),(t=>t.id),((t,s)=>{var e=Z(),n=k(e),a={}
g((()=>{L(n,m(s).name),a!==(a=m(s).id)&&(e.value=(e.__value=m(s).id)??"")})),p(t,e)})),u(o,4).__click=[Y,s,e],f(o,(()=>m(e)),(t=>v(e,t))),p(t,n),h()}function et(){return P().filter((t=>!b("fshHide",y(t))))}w(["click"])
let nt=null
function at(){return nt||(nt=async function(){const t=await S()
if(t?.s)return{folders:s(t.r),items:x(D(t.r).map(C).map((t=>[t.inv_id,t])))}}()),nt}function ot(t){return o({subcmd:"dodropitems",removeIndex:t})}async function rt(t){const s=await e(t),n={s:0===s.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:s.m},n}function it(t){return r(ot,rt,t)}function ct(t){return y(t.target).cells[0].children[0].value}async function lt(t,s,e){!function(t){const s=y(t)
s.cells[0].children[0].disabled=!0,_(".actionButton",s).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const n=await s([ct(t)])
n?.s?function(t,s){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=s}(t,e):$(n)}const dt=[["Check All",async function(t){const{items:s}=await at()
Q("storeitems","Check All of Type"),et().filter((e=>s[e.value]&&s[e.value].item_id===s[ct(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{Q("storeitems","Quick Send"),lt(t,n,"Sent")}],["Quick Drop",t=>{Q("storeitems","Quick Drop"),lt(t,it,"Dropped")}]]
function ut(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&Q("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||b("custombutton",t.target))return
const s=dt.find((([s])=>s===E(t.target)))
s&&s[1](t)}const ft=0,mt=4,pt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
var ht=c('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),kt=c('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <!>',1)
function vt(t,s){i(s,!0)
const e=t=>t?"Hide":"Show"
let n=A(s,"showExtraLinks",15,!1),o=A(s,"showQuickDropLinks",15,!1)
function r(){Q("storeitems","selectLocked"),s.doSelectLocked()}var c=kt(),l=I(c)
j(l,(()=>({"--button-width":"11.8em"}))),F(l.lastChild,{onclick:function(){Q("storeitems","toggleShowExtraLinks"),n(!n()),T("showExtraLinks",n()),s.doExtraLinks(n())},children:(t,s)=>{var a=G()
g((t=>L(a,`${t??""} AH and UFSG Links`)),[()=>e(n())]),p(t,a)}})
var d=u(l,2)
j(d,(()=>({"--button-width":"10.6em"}))),F(d.lastChild,{onclick:function(){Q("storeitems","toggleShowQuickDropLinks"),o(!o()),T("showQuickDropLinks",o()),s.doDropLinks(o())},children:(t,s)=>{var n=G()
g((t=>L(n,`${t??""} Quick Drop links`)),[()=>e(o())]),p(t,n)}})
var f=u(d,2),m=t=>{var s=ht(),e=I(s)
j(e,(()=>({"--button-width":"10.8em"}))),F(e.lastChild,{onclick:r,children:(t,s)=>{var e=G("Select All Guild Locked")
p(t,e)}}),p(t,s)}
N(f,(t=>{"storeitems"===a.subcmd2&&t(m)})),p(t,c),h()}async function wt(t){}async function gt(){const t=et()
if(!t.length)return
const s=await at()
s.items&&t.map((t=>[t,s.items[t.value]])).filter((([,t])=>t)).forEach((([t,s])=>{t.checked=!t.disabled&&-1!==s.guild_tag}))}function Lt(t){return function(s){t[ft]=s,wt()}}function bt(t){return function(s){t[mt]=s,wt()}}function yt(){if(z())return
if(!K())return
const t=pt.map((t=>B(t)))
U(),function(t){const[s]=document.forms
H(vt,{props:{doDropLinks:bt(t),doExtraLinks:Lt(t),doSelectLocked:gt,showExtraLinks:t[ft],showQuickDropLinks:t[mt]},target:s.parentNode.children[5].children[0]})}(t),t.some((t=>t))&&wt(),M(O(),ut)}export{st as M,at as a,et as b,it as c,X as d,K as e,P as g,yt as i}
//# sourceMappingURL=injectStoreItems-CNQAexwS.js.map
