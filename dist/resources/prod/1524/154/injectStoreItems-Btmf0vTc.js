import{m as t,a as e,d as s}from"./dropItem-CZ_l1wv-.js"
import{ax as n,co as a,$ as o,x as i,A as r,E as c,aj as u,B as l,am as d,I as m,K as f,L as p,D as h,H as k,ao as v,O as b,P as g,aa as w,j as L,da as S,f as _,s as y,l as $,h as D,y as x,C as E,d9 as C,de as N,F as A,au as Q,bA as T,a9 as I,aR as H,bm as j,c as O,dv as R,df as B,bg as F,bf as U,n as G,a2 as M,az as P,o as z,p as J}from"./calfSystem-KFszEm2S.js"
import{d as K}from"./doStatTotal-C_eoXAtI.js"
import{e as V}from"./errorDialog-B4_TjdGG.js"
import{a as W}from"./arrayFromRadioNodeList-CyfGJSyo.js"
import{b as Y}from"./batch-CLh2C2gx.js"
let q=0,X=0
function Z(){if(!X){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
q=document.forms[0]?.elements[t],X=!0}return q}function tt(){const t=Z()
return t?W(t):[]}function et(t,e){return a({subcmd:"sendtofolder",folder_id:t,folderItem:e})}async function st(e,s){return await t(s,e),{r:s}}function nt(t,e){return o(et,st,t,e)}function at(t,e,s){e.moveItemsToFolder(m(s))}var ot=r("<option> </option>"),it=r('<tr><td class="fshCenter"><span>Move selected items to:</span> <select class="customselect"></select> <span>&nbsp;</span> <button class="custombutton svelte-vafhru" type="button">Move</button></td></tr>')
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
n?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,s):V(n)}const kt=[["Check All",async function(t){const{items:e}=await lt()
y("storeitems","Check All of Type"),ct().filter(s=>e[s.value]&&e[s.value].item_id===e[pt(t)].item_id).forEach(t=>{t.checked=!t.disabled&&!t.checked})}],["Quick Send",t=>{y("storeitems","Quick Send"),ht(t,s,"Sent")}],["Quick Drop",t=>{y("storeitems","Quick Drop"),ht(t,ft,"Dropped")}]]
function vt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&y("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||w("custombutton",t.target))return
const e=kt.find(([e])=>e===$(t.target))
e&&e[1](t)}const bt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
var gt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),wt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <!>',1)
function Lt(t,e){i(e,!0)
const s=t=>t?"Hide":"Show"
let a=x(e,"showExtraLinks",15,!1),o=x(e,"showQuickDropLinks",15,!1)
function r(){y("storeitems","selectLocked"),e.doSelectLocked()}var c=wt(),u=E(c)
C(u,()=>({"--button-width":"11.8em"})),N(u.lastChild,{onclick:function(){y("storeitems","toggleShowExtraLinks"),a(!a()),Q("showExtraLinks",a()),e.doExtraLinks(a())},children:(t,e)=>{var n=T()
b(t=>g(n,`${t??""} AH and UFSG Links`),[()=>s(a())]),f(t,n)}})
var d=l(u,2)
C(d,()=>({"--button-width":"10.6em"})),N(d.lastChild,{onclick:function(){y("storeitems","toggleShowQuickDropLinks"),o(!o()),Q("showQuickDropLinks",o()),e.doDropLinks(o())},children:(t,e)=>{var n=T()
b(t=>g(n,`${t??""} Quick Drop links`),[()=>s(o())]),f(t,n)}})
var m=l(d,2),h=t=>{var e=gt(),s=E(e)
C(s,()=>({"--button-width":"10.8em"})),N(s.lastChild,{onclick:r,children:(t,e)=>{var s=T("Select All Guild Locked")
f(t,s)}}),f(t,e)}
A(m,t=>{"storeitems"===n.subcmd2&&t(h)}),f(t,c),p()}let St=null
function _t(t,e){if(13699!==e.item_id)return e.item_name
const s=t.find(t=>t.value===String(e.inv_id))
return s?H(s.parentNode.parentNode.children[2]):e.item_name}function yt(t){return St||(St=async function(t){const e=await lt()
return e?.items?_(I(e.items).map(([e,s])=>[e,{...s,item_name:_t(t,s)}])):{}}(t)),St}function $t(t,e){return t[e]=(t[e]||0)+1,t}const Dt=(t,e,s)=>` [<button class="fshStoreItemsButton ${t}"${e}>${s}</button>]`,xt=(t,e,s)=>Dt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${s}`),Et=(t,e,s)=>`[<a href="${t}"${e}>${s}</a>]`
function Ct(t,e){return e[0]()?t+e[1]():t}function Nt(t,e,s){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Et(`${B}${encodeURIComponent(t.item_name)}`,"","AH")}(s)} ${(t=>Et(`${F}items${U}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(s)}`],[()=>!0,()=>`&nbsp;${s.item_name}`],[()=>((t,e,s)=>t[2]&&e[s.item_id]>1)(t,e,s),()=>Dt("fshBlack","","Check All")],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,s),()=>xt("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,s),()=>xt("fshRed","DROP","Drop")]]}function At(t,e,[s,n]){const a=s
t[1]&&(a.className=R[n.rarity].clas)
const o=Nt(t,e,n).reduce(Ct,"")
a.innerHTML!==o&&(a.innerHTML=o)}async function Qt(t){const e=await async function(){const t=tt()
if(!t.length)return[]
const e=await yt(t)
return t.map(t=>[L(t).cells[2],e[t.value]]).filter(([,t])=>t)}(),s=t[2]?function(t){return{...t.map(([,t])=>t.item_id).reduce($t,{}),13699:1}}(e):[]
j(3,Y,[[3,e,0,O(At,t,s)]])}async function Tt(){const t=ct()
if(!t.length)return
const e=await lt()
e.items&&t.map(t=>[t,e.items[t.value]]).filter(([,t])=>t).forEach(([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag})}function It(t){return function(e){t[0]=e,Qt(t)}}function Ht(t){return function(e){t[4]=e,Qt(t)}}function jt(){if(M())return
if(!Z())return
const t=bt.map(t=>P(t))
K(),function(t){const[e]=document.forms
G(Lt,{props:{doDropLinks:Ht(t),doExtraLinks:It(t),doSelectLocked:Tt,showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t),t.some(t=>t)&&Qt(t),z(J(),vt)}export{rt as M,lt as a,ct as b,ft as c,nt as d,Z as e,tt as g,jt as i}
//# sourceMappingURL=injectStoreItems-Btmf0vTc.js.map
