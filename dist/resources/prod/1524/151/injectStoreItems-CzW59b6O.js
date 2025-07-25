import{m as t,e,a as s,d as n}from"./dropItem-C6AxxS-X.js"
import{az as a,cq as o,$ as i,z as r,C as c,G as u,al as l,D as d,ao as m,K as f,N as p,O as h,F as k,J as v,aq as b,Q as g,R as w,ac as L,l as S,d as _,h as y,f as $,dy as D,s as E,n as x,k as C,A as N,E as Q,de as T,di as A,H as I,aw as H,bC as j,ab as B,aT as F,bo as O,c as R,dB as U,dj as G,bi as M,bh as q,u as z,a4 as P,aB as J,o as K,p as V}from"./calfSystem-C1X5YxJZ.js"
import{d as W}from"./doStatTotal-DtCeT0Ju.js"
import{e as Y}from"./errorDialog-B4_TjdGG.js"
import{a as X}from"./arrayFromRadioNodeList-BtFcie8u.js"
import{b as Z}from"./batch-BNBFzvJw.js"
let tt=0,et=0
function st(){if(!et){const t="dropitems"===a.subcmd?"removeIndex[]":"storeIndex[]"
tt=document.forms[0]?.elements[t],et=!0}return tt}function nt(){const t=st()
return t?X(t):[]}function at(t,e){return o({subcmd:"sendtofolder",folder_id:t,folderItem:e})}async function ot(e,s){return await t(s,e),{r:s}}function it(t,e){return i(at,ot,t,e)}function rt(t,e,s){e.moveItemsToFolder(f(s))}var ct=c("<option> </option>"),ut=c('<tr><td class="fshCenter"><span>Move selected items to:</span> <select class="customselect"></select> <span>&nbsp;</span> <button class="custombutton svelte-vafhru" type="button">Move</button></td></tr>')
function lt(t,e){r(e,!0)
let s=l(void 0)
var n=ut(),a=k(n),o=d(k(a),2)
u(o,21,(()=>e.folders),(t=>t.id),((t,e)=>{var s=ct(),n=k(s),a={}
g((()=>{w(n,f(e).name),a!==(a=f(e).id)&&(s.value=(s.__value=f(e).id)??"")})),p(t,s)})),d(o,4).__click=[rt,e,s],m(o,(()=>f(s)),(t=>v(s,t))),p(t,n),h()}function dt(){return nt().filter((t=>!L("fshHide",S(t))))}b(["click"])
let mt=null
function ft(){return mt||(mt=async function(){const t=await _()
if(t?.s)return{folders:e(t.r),items:y($(t.r).map(D).map((t=>[t.inv_id,t])))}}()),mt}function pt(t){return o({subcmd:"dodropitems",removeIndex:t})}async function ht(t){const e=await s(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function kt(t){return i(pt,ht,t)}function vt(t){return S(t.target).cells[0].children[0].value}async function bt(t,e,s){!function(t){const e=S(t)
e.cells[0].children[0].disabled=!0,C(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const n=await e([vt(t)])
n?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,s):Y(n)}const gt=[["Check All",async function(t){const{items:e}=await ft()
E("storeitems","Check All of Type"),dt().filter((s=>e[s.value]&&e[s.value].item_id===e[vt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{E("storeitems","Quick Send"),bt(t,n,"Sent")}],["Quick Drop",t=>{E("storeitems","Quick Drop"),bt(t,kt,"Dropped")}]]
function wt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&E("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||L("custombutton",t.target))return
const e=gt.find((([e])=>e===x(t.target)))
e&&e[1](t)}const Lt=0,St=1,_t=2,yt=4,$t=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
var Dt=c('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),Et=c('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <!>',1)
function xt(t,e){r(e,!0)
const s=t=>t?"Hide":"Show"
let n=N(e,"showExtraLinks",15,!1),o=N(e,"showQuickDropLinks",15,!1)
function i(){E("storeitems","selectLocked"),e.doSelectLocked()}var c=Et(),u=Q(c)
T(u,(()=>({"--button-width":"11.8em"}))),A(u.lastChild,{onclick:function(){E("storeitems","toggleShowExtraLinks"),n(!n()),H("showExtraLinks",n()),e.doExtraLinks(n())},children:(t,e)=>{var a=j()
g((t=>w(a,`${t??""} AH and UFSG Links`)),[()=>s(n())]),p(t,a)}})
var l=d(u,2)
T(l,(()=>({"--button-width":"10.6em"}))),A(l.lastChild,{onclick:function(){E("storeitems","toggleShowQuickDropLinks"),o(!o()),H("showQuickDropLinks",o()),e.doDropLinks(o())},children:(t,e)=>{var n=j()
g((t=>w(n,`${t??""} Quick Drop links`)),[()=>s(o())]),p(t,n)}})
var m=d(l,2),f=t=>{var e=Dt(),s=Q(e)
T(s,(()=>({"--button-width":"10.8em"}))),A(s.lastChild,{onclick:i,children:(t,e)=>{var s=j("Select All Guild Locked")
p(t,s)}}),p(t,e)}
I(m,(t=>{"storeitems"===a.subcmd2&&t(f)})),p(t,c),h()}let Ct=null
function Nt(t,e){if(13699!==e.item_id)return e.item_name
const s=t.find((t=>t.value===String(e.inv_id)))
return s?F(s.parentNode.parentNode.children[2]):e.item_name}function Qt(t){return Ct||(Ct=async function(t){const e=await ft()
return e?.items?y(B(e.items).map((([e,s])=>[e,{...s,item_name:Nt(t,s)}]))):{}}(t)),Ct}function Tt(t,e){return t[e]=(t[e]||0)+1,t}const At=(t,e,s)=>` [<button class="fshStoreItemsButton ${t}"${e}>${s}</button>]`,It=(t,e,s)=>At(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${s}`),Ht=(t,e,s)=>`[<a href="${t}"${e}>${s}</a>]`
const jt=t=>Ht(`${M}items${q}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Bt=(t,e,s)=>t[_t]&&e[s.item_id]>1,Ft=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),Ot=(t,e)=>t[yt]&&-1===e.guild_tag
function Rt(t,e){return e[0]()?t+e[1]():t}function Ut(t,e,s){return[[()=>t[Lt],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Ht(`${G}${encodeURIComponent(t.item_name)}`,"","AH")}(s)} ${jt(s)}`],[()=>!0,()=>`&nbsp;${s.item_name}`],[()=>Bt(t,e,s),()=>At("fshBlack","","Check All")],[()=>Ft(t,s),()=>It("fshBlue","SENDS","Send")],[()=>Ot(t,s),()=>It("fshRed","DROP","Drop")]]}function Gt(t,e,[s,n]){const a=s
t[St]&&(a.className=U[n.rarity].clas)
const o=Ut(t,e,n).reduce(Rt,"")
a.innerHTML!==o&&(a.innerHTML=o)}async function Mt(t){const e=await async function(){const t=nt()
if(!t.length)return[]
const e=await Qt(t)
return t.map((t=>[S(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),s=t[_t]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Tt,{}),13699:1}}(e):[]
O(3,Z,[[3,e,0,R(Gt,t,s)]])}async function qt(){const t=dt()
if(!t.length)return
const e=await ft()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}function zt(t){return function(e){t[Lt]=e,Mt(t)}}function Pt(t){return function(e){t[yt]=e,Mt(t)}}function Jt(){if(P())return
if(!st())return
const t=$t.map((t=>J(t)))
W(),function(t){const[e]=document.forms
z(xt,{props:{doDropLinks:Pt(t),doExtraLinks:zt(t),doSelectLocked:qt,showExtraLinks:t[Lt],showQuickDropLinks:t[yt]},target:e.parentNode.children[5].children[0]})}(t),t.some((t=>t))&&Mt(t),K(V(),wt)}export{lt as M,ft as a,dt as b,kt as c,it as d,st as e,nt as g,Jt as i}
//# sourceMappingURL=injectStoreItems-CzW59b6O.js.map
