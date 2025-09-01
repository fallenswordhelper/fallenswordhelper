import{m as t,a as e,d as s}from"./dropItem-DFhw6fWl.js"
import{ay as n,cr as a,$ as i,x as o,B as r,F as c,ak as u,C as l,an as d,J as m,L as f,N as p,E as h,I as k,ap as v,P as b,Q as g,ab as w,j as L,cv as S,f as _,s as y,l as $,h as D,y as E,D as x,d8 as N,dS as C,G as Q,av as T,bD as A,aa as I,aT as H,bp as j,c as B,dr as F,db as G,ba as O,bb as R,n as U,a3 as M,aA as P,o as J,p as V}from"./calfSystem-CQOGdqPv.js"
import{d as W}from"./doStatTotal-C5V1waCr.js"
import{e as Y}from"./errorDialog-B4_TjdGG.js"
import{a as q}from"./arrayFromRadioNodeList-CmcePKfh.js"
import{b as z}from"./batch-ZfzqhoeD.js"
let K=0,X=0
function Z(){if(!X){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
K=document.forms[0]?.elements[t],X=!0}return K}function tt(){const t=Z()
return t?q(t):[]}function et(t,e){return a({subcmd:"sendtofolder",folder_id:t,folderItem:e})}async function st(e,s){return await t(s,e),{r:s}}function nt(t,e){return i(et,st,t,e)}function at(t,e,s){e.moveItemsToFolder(m(s))}var it=r("<option> </option>"),ot=r('<tr><td class="fshCenter"><span>Move selected items to:</span> <select class="customselect"></select> <span>&nbsp;</span> <button class="custombutton svelte-vafhru" type="button">Move</button></td></tr>')
function rt(t,e){o(e,!0)
let s=u(void 0)
var n=ot(),a=h(n),i=l(h(a),2)
c(i,21,()=>e.folders,t=>t.id,(t,e)=>{var s=it(),n=h(s),a={}
b(()=>{g(n,m(e).name),a!==(a=m(e).id)&&(s.value=(s.__value=m(e).id)??"")}),f(t,s)}),l(i,4).__click=[at,e,s],d(i,()=>m(s),t=>k(s,t)),f(t,n),p()}function ct(){return tt().filter(t=>!w("fshHide",L(t)))}v(["click"])
let ut=null
function lt(){return ut||(ut=async function(){const t=await S()
if(t?.items)return{folders:t.folders,items:_(t.items.map(t=>[t.inv_id,t]))}}()),ut}function dt(t){return a({subcmd:"dodropitems",items:t})}async function mt(t){const s=await e(t),n={s:0===s.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:s.m},n}function ft(t){return i(dt,mt,t)}function pt(t){return L(t.target).cells[0].children[0].value}async function ht(t,e,s){!function(t){const e=L(t)
e.cells[0].children[0].disabled=!0,D(".actionButton",e).forEach(t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")}),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const n=await e([pt(t)])
n?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,s):Y(n)}const kt=[["Check All",async function(t){const{items:e}=await lt()
y("storeitems","Check All of Type"),ct().filter(s=>e[s.value]&&e[s.value].item_id===e[pt(t)].item_id).forEach(t=>{t.checked=!t.disabled&&!t.checked})}],["Quick Send",t=>{y("storeitems","Quick Send"),ht(t,s,"Sent")}],["Quick Drop",t=>{y("storeitems","Quick Drop"),ht(t,ft,"Dropped")}]]
function vt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&y("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||w("custombutton",t.target))return
const e=kt.find(([e])=>e===$(t.target))
e&&e[1](t)}const bt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
var gt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),wt=r('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <!>',1)
function Lt(t,e){o(e,!0)
const s=t=>t?"Hide":"Show"
let a=E(e,"showExtraLinks",15,!1),i=E(e,"showQuickDropLinks",15,!1)
function r(){y("storeitems","selectLocked"),e.doSelectLocked()}var c=wt(),u=x(c)
N(u,()=>({"--button-width":"11.8em"})),C(u.lastChild,{onclick:function(){y("storeitems","toggleShowExtraLinks"),a(!a()),T("showExtraLinks",a()),e.doExtraLinks(a())},children:(t,e)=>{var n=A()
b(t=>g(n,`${t??""} AH and UFSG Links`),[()=>s(a())]),f(t,n)}})
var d=l(u,2)
N(d,()=>({"--button-width":"10.6em"})),C(d.lastChild,{onclick:function(){y("storeitems","toggleShowQuickDropLinks"),i(!i()),T("showQuickDropLinks",i()),e.doDropLinks(i())},children:(t,e)=>{var n=A()
b(t=>g(n,`${t??""} Quick Drop links`),[()=>s(i())]),f(t,n)}})
var m=l(d,2),h=t=>{var e=gt(),s=x(e)
N(s,()=>({"--button-width":"10.8em"})),C(s.lastChild,{onclick:r,children:(t,e)=>{var s=A("Select All Guild Locked")
f(t,s)}}),f(t,e)}
Q(m,t=>{"storeitems"===n.subcmd2&&t(h)}),f(t,c),p()}let St=null
function _t(t,e){if(13699!==e.item_id)return e.item_name
const s=t.find(t=>t.value===String(e.inv_id))
return s?H(s.parentNode.parentNode.children[2]):e.item_name}function yt(t){return St||(St=async function(t){const e=await lt()
return e?.items?_(I(e.items).map(([e,s])=>[e,{...s,item_name:_t(t,s)}])):{}}(t)),St}function $t(t,e){return t[e]=(t[e]||0)+1,t}const Dt=(t,e,s)=>` [<button class="fshStoreItemsButton ${t}"${e}>${s}</button>]`,Et=(t,e,s)=>Dt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${s}`),xt=(t,e,s)=>`[<a href="${t}"${e}>${s}</a>]`
function Nt(t,e){return e[0]()?t+e[1]():t}function Ct(t,e,s){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':xt(`${G}${encodeURIComponent(t.item_name)}`,"","AH")}(s)} ${(t=>xt(`${O}items${R}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(s)}`],[()=>!0,()=>`&nbsp;${s.item_name}`],[()=>((t,e,s)=>t[2]&&e[s.item_id]>1)(t,e,s),()=>Dt("fshBlack","","Check All")],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,s),()=>Et("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,s),()=>Et("fshRed","DROP","Drop")]]}function Qt(t,e,[s,n]){const a=s
t[1]&&(a.className=F[n.rarity].clas)
const i=Ct(t,e,n).reduce(Nt,"")
a.innerHTML!==i&&(a.innerHTML=i)}async function Tt(t){const e=await async function(){const t=tt()
if(!t.length)return[]
const e=await yt(t)
return t.map(t=>[L(t).cells[2],e[t.value]]).filter(([,t])=>t)}(),s=t[2]?function(t){return{...t.map(([,t])=>t.item_id).reduce($t,{}),13699:1}}(e):[]
j(3,z,[[3,e,0,B(Qt,t,s)]])}async function At(){const t=ct()
if(!t.length)return
const e=await lt()
e.items&&t.map(t=>[t,e.items[t.value]]).filter(([,t])=>t).forEach(([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag})}function It(t){return function(e){t[0]=e,Tt(t)}}function Ht(t){return function(e){t[4]=e,Tt(t)}}function jt(){if(M())return
if(!Z())return
const t=bt.map(t=>P(t))
W(),function(t){const[e]=document.forms
U(Lt,{props:{doDropLinks:Ht(t),doExtraLinks:It(t),doSelectLocked:At,showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t),t.some(t=>t)&&Tt(t),J(V(),vt)}export{rt as M,lt as a,ct as b,ft as c,nt as d,Z as e,tt as g,jt as i}
//# sourceMappingURL=injectStoreItems-BqehzxQt.js.map
