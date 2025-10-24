import{m as t,a as e,d as s}from"./dropItem-C3_j8s3A.js"
import{ay as n,cr as a,$ as o,y as i,C as r,G as c,ak as u,D as l,an as d,K as m,N as f,O as p,F as h,J as k,ap as v,Q as b,R as g,ac as w,k as L,cv as S,f as _,s as y,m as $,h as D,z as E,E as N,d7 as x,da as C,H as Q,av as T,bE as A,ab as I,aT as H,bq as O,c as R,ds as F,dc as U,bb as j,bc as B,t as G,a4 as M,aA as P,o as q,p as z}from"./calfSystem-CIdPz3EO.js"
import{d as J}from"./doStatTotal-C_bkt6VX.js"
import{e as K}from"./errorDialog-B4_TjdGG.js"
import{a as V}from"./arrayFromRadioNodeList-BIl6HTGq.js"
import{b as W}from"./batch-DSFyFccZ.js"
let Y=0,X=0
function Z(){if(!X){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
Y=document.forms[0]?.elements[t],X=!0}return Y}function tt(){const t=Z()
return t?V(t):[]}function et(t,e){return a({subcmd:"sendtofolder",folder_id:t,folderItem:e})}async function st(e,s){return await t(s,e),{r:s}}function nt(t,e){return o(et,st,t,e)}function at(t,e,s){e.moveItemsToFolder(m(s))}var ot=r("<option> </option>"),it=r('<tr><td class="fshCenter"><span>Move selected items to:</span> <select class="customselect"></select> <span>&nbsp;</span> <button class="custombutton svelte-1r30ou6" type="button">Move</button></td></tr>')
function rt(t,e){i(e,!0)
let s=u(void 0)
var n=it(),a=h(n),o=l(h(a),2)
c(o,21,()=>e.folders,t=>t.id,(t,e)=>{var s=ot(),n=h(s),a={}
b(()=>{g(n,m(e).name),a!==(a=m(e).id)&&(s.value=(s.__value=m(e).id)??"")}),f(t,s)}),l(o,4).__click=[at,e,s],d(o,()=>m(s),t=>k(s,t)),f(t,n),p()}function ct(){return tt().filter(t=>!w("fshHide",L(t)))}v(["click"])
let ut=null
function lt(){return ut||(ut=async function(){const t=await S()
if(t?.items)return{folders:t.folders,items:_(t.items.map(t=>[t.inv_id,t]))}}()),ut}function dt(t){return a({subcmd:"dodropitems",items:t})}async function mt(t){const s=await e(t),n={s:0===s.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:s.m},n}function ft(t){return o(dt,mt,t)}function pt(t){return L(t.target).cells[0].children[0].value}async function ht(t,e,s){!function(t){const e=L(t)
e.cells[0].children[0].disabled=!0,D(".actionButton",e).forEach(t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")}),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const n=await e([pt(t)])
n?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,s):K(n)}const kt=[["Check All",async function(t){const{items:e}=await lt()
y("storeitems","Check All of Type"),ct().filter(s=>e[s.value]&&e[s.value].item_id===e[pt(t)].item_id).forEach(t=>{t.checked=!t.disabled&&!t.checked})}],["Quick Send",t=>{y("storeitems","Quick Send"),ht(t,s,"Sent")}],["Quick Drop",t=>{y("storeitems","Quick Drop"),ht(t,ft,"Dropped")}]]
function vt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&y("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||w("custombutton",t.target))return
const e=kt.find(([e])=>e===$(t.target))
e&&e[1](t)}const bt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
var gt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),wt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <!>',1)
function Lt(t,e){i(e,!0)
const s=t=>t?"Hide":"Show"
let a=E(e,"showExtraLinks",15,!1),o=E(e,"showQuickDropLinks",15,!1)
function r(){y("storeitems","selectLocked"),e.doSelectLocked()}var c=wt(),u=N(c)
x(u,()=>({"--button-width":"11.8em"})),C(u.lastChild,{onclick:function(){y("storeitems","toggleShowExtraLinks"),a(!a()),T("showExtraLinks",a()),e.doExtraLinks(a())},children:(t,e)=>{var n=A()
b(t=>g(n,`${t??""} AH and UFSG Links`),[()=>s(a())]),f(t,n)}})
var d=l(u,2)
x(d,()=>({"--button-width":"10.6em"})),C(d.lastChild,{onclick:function(){y("storeitems","toggleShowQuickDropLinks"),o(!o()),T("showQuickDropLinks",o()),e.doDropLinks(o())},children:(t,e)=>{var n=A()
b(t=>g(n,`${t??""} Quick Drop links`),[()=>s(o())]),f(t,n)}})
var m=l(d,2),h=t=>{var e=gt(),s=N(e)
x(s,()=>({"--button-width":"10.8em"})),C(s.lastChild,{onclick:r,children:(t,e)=>{var s=A("Select All Guild Locked")
f(t,s)}}),f(t,e)}
Q(m,t=>{"storeitems"===n.subcmd2&&t(h)}),f(t,c),p()}let St=null
function _t(t,e){if(13699!==e.item_id)return e.item_name
const s=t.find(t=>t.value===String(e.inv_id))
return s?H(s.parentNode.parentNode.children[2]):e.item_name}function yt(t){return St||(St=async function(t){const e=await lt()
return e?.items?_(I(e.items).map(([e,s])=>[e,{...s,item_name:_t(t,s)}])):{}}(t)),St}function $t(t,e){return t[e]=(t[e]||0)+1,t}const Dt=(t,e,s)=>` [<button class="fshStoreItemsButton ${t}"${e}>${s}</button>]`,Et=(t,e,s)=>Dt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${s}`),Nt=(t,e,s)=>`[<a href="${t}"${e}>${s}</a>]`
function xt(t,e){return e[0]()?t+e[1]():t}function Ct(t,e,s){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Nt(`${U}${encodeURIComponent(t.item_name)}`,"","AH")}(s)} ${(t=>Nt(`${j}items${B}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(s)}`],[()=>!0,()=>`&nbsp;${s.item_name}`],[()=>((t,e,s)=>t[2]&&e[s.item_id]>1)(t,e,s),()=>Dt("fshBlack","","Check All")],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,s),()=>Et("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,s),()=>Et("fshRed","DROP","Drop")]]}function Qt(t,e,[s,n]){const a=s
t[1]&&(a.className=F[n.rarity].clas)
const o=Ct(t,e,n).reduce(xt,"")
a.innerHTML!==o&&(a.innerHTML=o)}async function Tt(t){const e=await async function(){const t=tt()
if(!t.length)return[]
const e=await yt(t)
return t.map(t=>[L(t).cells[2],e[t.value]]).filter(([,t])=>t)}(),s=t[2]?function(t){return{...t.map(([,t])=>t.item_id).reduce($t,{}),13699:1}}(e):[]
O(3,W,[[3,e,0,R(Qt,t,s)]])}async function At(){const t=ct()
if(!t.length)return
const e=await lt()
e.items&&t.map(t=>[t,e.items[t.value]]).filter(([,t])=>t).forEach(([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag})}function It(t){return function(e){t[0]=e,Tt(t)}}function Ht(t){return function(e){t[4]=e,Tt(t)}}function Ot(){if(M())return
if(!Z())return
const t=bt.map(t=>P(t))
J(),function(t){const[e]=document.forms
G(Lt,{props:{doDropLinks:Ht(t),doExtraLinks:It(t),doSelectLocked:At,showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t),t.some(t=>t)&&Tt(t),q(z(),vt)}export{rt as M,lt as a,ct as b,ft as c,nt as d,Z as e,tt as g,Ot as i}
//# sourceMappingURL=injectStoreItems-B4U4zpB_.js.map
