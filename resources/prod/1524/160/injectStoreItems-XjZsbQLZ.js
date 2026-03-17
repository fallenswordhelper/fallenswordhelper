import{m as t,a as e,d as s}from"./dropItem-FcGA-m3d.js"
import{ay as n,cr as a,$ as o,y as i,C as r,G as c,D as u,an as l,K as d,ak as m,N as f,O as p,F as h,P as k,S as v,J as b,ap as g,ac as w,k as L,cv as S,f as _,s as y,m as $,h as D,z as E,E as N,d7 as x,da as C,H as T,av as A,bG as Q,ab as I,aT as H,bq as O,c as F,ds as G,dc as R,bb as U,bc as j,t as B,a4 as M,aA as P,o as q,p as z}from"./calfSystem-HVCiy-VV.js"
import{d as J}from"./doStatTotal-C5onnQLz.js"
import{e as K}from"./errorDialog-B4_TjdGG.js"
import{a as V}from"./arrayFromRadioNodeList-CEp2kJt3.js"
import{b as W}from"./batch-DqKzBoJR.js"
let Y=0,X=0
function Z(){if(!X){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
Y=document.forms[0]?.elements[t],X=!0}return Y}function tt(){const t=Z()
return t?V(t):[]}function et(t,e){return a({subcmd:"sendtofolder",folder_id:t,folderItem:e})}async function st(e,s){return await t(s,e),{r:s}}function nt(t,e){return o(et,st,t,e)}var at=r("<option> </option>"),ot=r('<tr><td class="fshCenter"><span>Move selected items to:</span> <select class="customselect"></select> <span>&nbsp;</span> <button class="custombutton svelte-1r30ou6" type="button">Move</button></td></tr>')
function it(t,e){i(e,!0)
let s=m(void 0)
var n=ot(),a=h(n),o=u(h(a),2)
c(o,21,()=>e.folders,t=>t.id,(t,e)=>{var s=at(),n=h(s),a={}
k(()=>{v(n,d(e).name),a!==(a=d(e).id)&&(s.value=(s.__value=d(e).id)??"")}),f(t,s)}),u(o,4).__click=function(){e.moveItemsToFolder(d(s))},l(o,()=>d(s),t=>b(s,t)),f(t,n),p()}function rt(){return tt().filter(t=>!w("fshHide",L(t)))}g(["click"])
let ct=null
function ut(){return ct||(ct=async function(){const t=await S()
if(t?.items)return{folders:t.folders,items:_(t.items.map(t=>[t.inv_id,t]))}}()),ct}function lt(t){return a({subcmd:"dodropitems",items:t})}async function dt(t){const s=await e(t),n={s:0===s.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:s.m},n}function mt(t){return o(lt,dt,t)}function ft(t){return L(t.target).cells[0].children[0].value}async function pt(t,e,s){!function(t){const e=L(t)
e.cells[0].children[0].disabled=!0,D(".actionButton",e).forEach(t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")}),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const n=await e([ft(t)])
n?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,s):K(n)}const ht=[["Check All",async function(t){const{items:e}=await ut()
y("storeitems","Check All of Type"),rt().filter(s=>e[s.value]&&e[s.value].item_id===e[ft(t)].item_id).forEach(t=>{t.checked=!t.disabled&&!t.checked})}],["Quick Send",t=>{y("storeitems","Quick Send"),pt(t,s,"Sent")}],["Quick Drop",t=>{y("storeitems","Quick Drop"),pt(t,mt,"Dropped")}]]
function kt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&y("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||w("custombutton",t.target))return
const e=ht.find(([e])=>e===$(t.target))
e&&e[1](t)}const vt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
var bt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),gt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <!>',1)
function wt(t,e){i(e,!0)
const s=t=>t?"Hide":"Show"
let a=E(e,"showExtraLinks",15,!1),o=E(e,"showQuickDropLinks",15,!1)
function r(){y("storeitems","selectLocked"),e.doSelectLocked()}var c=gt(),l=N(c)
x(l,()=>({"--button-width":"11.8em"})),C(l.lastChild,{onclick:function(){y("storeitems","toggleShowExtraLinks"),a(!a()),A("showExtraLinks",a()),e.doExtraLinks(a())},children:(t,e)=>{var n=Q()
k(t=>v(n,`${t??""} AH and UFSG Links`),[()=>s(a())]),f(t,n)}})
var d=u(l,2)
x(d,()=>({"--button-width":"10.6em"})),C(d.lastChild,{onclick:function(){y("storeitems","toggleShowQuickDropLinks"),o(!o()),A("showQuickDropLinks",o()),e.doDropLinks(o())},children:(t,e)=>{var n=Q()
k(t=>v(n,`${t??""} Quick Drop links`),[()=>s(o())]),f(t,n)}})
var m=u(d,2),h=t=>{var e=bt(),s=N(e)
x(s,()=>({"--button-width":"10.8em"})),C(s.lastChild,{onclick:r,children:(t,e)=>{var s=Q("Select All Guild Locked")
f(t,s)}}),f(t,e)}
T(m,t=>{"storeitems"===n.subcmd2&&t(h)}),f(t,c),p()}let Lt=null
function St(t,e){if(13699!==e.item_id)return e.item_name
const s=t.find(t=>t.value===String(e.inv_id))
return s?H(s.parentNode.parentNode.children[2]):e.item_name}function _t(t){return Lt||(Lt=async function(t){const e=await ut()
return e?.items?_(I(e.items).map(([e,s])=>[e,{...s,item_name:St(t,s)}])):{}}(t)),Lt}function yt(t,e){return t[e]=(t[e]||0)+1,t}const $t=(t,e,s)=>` [<button class="fshStoreItemsButton ${t}"${e}>${s}</button>]`,Dt=(t,e,s)=>$t(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${s}`),Et=(t,e,s)=>`[<a href="${t}"${e}>${s}</a>]`
function Nt(t,e){return e[0]()?t+e[1]():t}function xt(t,e,s){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Et(`${R}${encodeURIComponent(t.item_name)}`,"","AH")}(s)} ${(t=>Et(`${U}items${j}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(s)}`],[()=>!0,()=>`&nbsp;${s.item_name}`],[()=>((t,e,s)=>t[2]&&e[s.item_id]>1)(t,e,s),()=>$t("fshBlack","","Check All")],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,s),()=>Dt("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,s),()=>Dt("fshRed","DROP","Drop")]]}function Ct(t,e,[s,n]){const a=s
t[1]&&(a.className=G[n.rarity].clas)
const o=xt(t,e,n).reduce(Nt,"")
a.innerHTML!==o&&(a.innerHTML=o)}async function Tt(t){const e=await async function(){const t=tt()
if(!t.length)return[]
const e=await _t(t)
return t.map(t=>[L(t).cells[2],e[t.value]]).filter(([,t])=>t)}(),s=t[2]?function(t){return{...t.map(([,t])=>t.item_id).reduce(yt,{}),13699:1}}(e):[]
O(3,W,[[3,e,0,F(Ct,t,s)]])}async function At(){const t=rt()
if(!t.length)return
const e=await ut()
e.items&&t.map(t=>[t,e.items[t.value]]).filter(([,t])=>t).forEach(([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag})}function Qt(t){return function(e){t[0]=e,Tt(t)}}function It(t){return function(e){t[4]=e,Tt(t)}}function Ht(){if(M())return
if(!Z())return
const t=vt.map(t=>P(t))
J(),function(t){const[e]=document.forms
B(wt,{props:{doDropLinks:It(t),doExtraLinks:Qt(t),doSelectLocked:At,showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t),t.some(t=>t)&&Tt(t),q(z(),kt)}export{it as M,ut as a,rt as b,mt as c,nt as d,Z as e,tt as g,Ht as i}
//# sourceMappingURL=injectStoreItems-XjZsbQLZ.js.map
