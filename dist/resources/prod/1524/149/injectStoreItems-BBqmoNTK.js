import{m as t,e,a as s,d as n}from"./dropItem-B3muwhvV.js"
import{am as a,cg as o,$ as i,R as r,S as c,X as u,_ as l,Y as d,a1 as m,V as f,a3 as p,a4 as h,Z as k,W as v,a6 as b,a7 as g,a8 as w,I as S,ai as L,d as _,j as y,f as $,dq as D,s as E,aa as x,n as N,bE as C,au as A,d7 as I,da as Q,a0 as T,aj as H,bq as j,H as R,aH as O,bc as U,e as B,dt as F,db as G,b6 as M,b5 as q,ad as P,A as V,ao as W,o as Y,p as X}from"./calfSystem-BGW9cdWN.js"
import{d as Z}from"./doStatTotal-BqmXubRh.js"
import{e as z}from"./errorDialog-B4_TjdGG.js"
import{a as J}from"./arrayFromRadioNodeList-Dt_4uMxG.js"
import{b as K}from"./batch-CqnDRKjm.js"
let tt=0,et=0
function st(){if(!et){const t="dropitems"===a.subcmd?"removeIndex[]":"storeIndex[]"
tt=document.forms[0]?.elements[t],et=!0}return tt}function nt(){const t=st()
return t?J(t):[]}function at(t,e){return o({subcmd:"sendtofolder",folder_id:t,folderItem:e})}async function ot(e,s){return await t(s,e),{r:s}}function it(t,e){return i(at,ot,t,e)}function rt(t,e,s){e.moveItemsToFolder(f(s))}var ct=u("<option> </option>"),ut=u('<tr><td class="fshCenter"><span>Move selected items to:</span> <select class="customselect"></select> <span>&nbsp;</span> <button class="custombutton svelte-vafhru" type="button">Move</button></td></tr>')
function lt(t,e){r(e,!0)
let s=c(void 0)
var n=ut(),a=k(n),o=d(k(a),2)
l(o,21,(()=>e.folders),(t=>t.id),((t,e)=>{var s=ct(),n={},a=k(s)
g((()=>{n!==(n=f(e).id)&&(s.value=null==(s.__value=f(e).id)?"":f(e).id),w(a,f(e).name)})),p(t,s)})),d(o,4).__click=[rt,e,s],m(o,(()=>f(s)),(t=>v(s,t))),p(t,n),h()}function dt(){return nt().filter((t=>!S("fshHide",L(t))))}b(["click"])
let mt=null
function ft(){return mt||(mt=async function(){const t=await _()
if(t?.s)return{folders:e(t.r),items:y($(t.r).map(D).map((t=>[t.inv_id,t])))}}()),mt}function pt(t){return o({subcmd:"dodropitems",removeIndex:t})}async function ht(t){const e=await s(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function kt(t){return i(pt,ht,t)}function vt(t){return L(t.target).cells[0].children[0].value}async function bt(t,e,s){!function(t){const e=L(t)
e.cells[0].children[0].disabled=!0,N(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const n=await e([vt(t)])
n?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,s):z(n)}const gt=[["Check All",async function(t){const{items:e}=await ft()
E("storeitems","Check All of Type"),dt().filter((s=>e[s.value]&&e[s.value].item_id===e[vt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{E("storeitems","Quick Send"),bt(t,n,"Sent")}],["Quick Drop",t=>{E("storeitems","Quick Drop"),bt(t,kt,"Dropped")}]]
function wt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&E("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||S("custombutton",t.target))return
const e=gt.find((([e])=>e===x(t.target)))
e&&e[1](t)}const St=0,Lt=1,_t=2,yt=4,$t=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
var Dt=u('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),Et=u('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>&nbsp; <!>',1)
function xt(t,e){r(e,!0)
const s=t=>t?"Hide":"Show"
let n=C(e,"showExtraLinks",15,!1),o=C(e,"showQuickDropLinks",15,!1)
function i(){E("storeitems","selectLocked"),e.doSelectLocked()}var c=Et(),u=A(c)
I(u,(()=>({"--button-width":"11.8em"}))),Q(u.lastChild,{onclick:function(){E("storeitems","toggleShowExtraLinks"),n(!n()),H("showExtraLinks",n()),e.doExtraLinks(n())},children:(t,e)=>{var a=j()
g((t=>w(a,`${t??""} AH and UFSG Links`)),[()=>s(n())]),p(t,a)}})
var l=d(u,2)
I(l,(()=>({"--button-width":"10.6em"}))),Q(l.lastChild,{onclick:function(){E("storeitems","toggleShowQuickDropLinks"),o(!o()),H("showQuickDropLinks",o()),e.doDropLinks(o())},children:(t,e)=>{var n=j()
g((t=>w(n,`${t??""} Quick Drop links`)),[()=>s(o())]),p(t,n)}})
var m=d(l,2),f=t=>{var e=Dt(),s=A(e)
I(s,(()=>({"--button-width":"10.8em"}))),Q(s.lastChild,{onclick:i,children:(t,e)=>{var s=j("Select All Guild Locked")
p(t,s)}}),p(t,e)}
T(m,(t=>{"storeitems"===a.subcmd2&&t(f)})),p(t,c),h()}let Nt=null
function Ct(t,e){if(13699!==e.item_id)return e.item_name
const s=t.find((t=>t.value===String(e.inv_id)))
return s?O(s.parentNode.parentNode.children[2]):e.item_name}function At(t){return Nt||(Nt=async function(t){const e=await ft()
return e?.items?y(R(e.items).map((([e,s])=>[e,{...s,item_name:Ct(t,s)}]))):{}}(t)),Nt}function It(t,e){return t[e]=(t[e]||0)+1,t}const Qt=(t,e,s)=>` [<button class="fshStoreItemsButton ${t}"${e}>${s}</button>]`,Tt=(t,e,s)=>Qt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${s}`),Ht=(t,e,s)=>`[<a href="${t}"${e}>${s}</a>]`
const jt=t=>Ht(`${M}items${q}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Rt=(t,e,s)=>t[_t]&&e[s.item_id]>1,Ot=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),Ut=(t,e)=>t[yt]&&-1===e.guild_tag
function Bt(t,e){return e[0]()?t+e[1]():t}function Ft(t,e,s){return[[()=>t[St],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Ht(`${G}${encodeURIComponent(t.item_name)}`,"","AH")}(s)} ${jt(s)}`],[()=>!0,()=>`&nbsp;${s.item_name}`],[()=>Rt(t,e,s),()=>Qt("fshBlack","","Check All")],[()=>Ot(t,s),()=>Tt("fshBlue","SENDS","Send")],[()=>Ut(t,s),()=>Tt("fshRed","DROP","Drop")]]}function Gt(t,e,[s,n]){const a=s
t[Lt]&&(a.className=F[n.rarity].clas)
const o=Ft(t,e,n).reduce(Bt,"")
a.innerHTML!==o&&(a.innerHTML=o)}async function Mt(t){const e=await async function(){const t=nt()
if(!t.length)return[]
const e=await At(t)
return t.map((t=>[L(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),s=t[_t]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(It,{}),13699:1}}(e):[]
U(3,K,[[3,e,0,B(Gt,t,s)]])}async function qt(){const t=dt()
if(!t.length)return
const e=await ft()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}function Pt(t){return function(e){t[St]=e,Mt(t)}}function Vt(t){return function(e){t[yt]=e,Mt(t)}}function Wt(){if(V())return
if(!st())return
const t=$t.map((t=>W(t)))
Z(),function(t){const[e]=document.forms
P(xt,{props:{doDropLinks:Vt(t),doExtraLinks:Pt(t),doSelectLocked:qt,showExtraLinks:t[St],showQuickDropLinks:t[yt]},target:e.parentNode.children[5].children[0]})}(t),t.some((t=>t))&&Mt(t),Y(X(),wt)}export{lt as M,ft as a,dt as b,kt as c,it as d,st as e,nt as g,Wt as i}
//# sourceMappingURL=injectStoreItems-BBqmoNTK.js.map
