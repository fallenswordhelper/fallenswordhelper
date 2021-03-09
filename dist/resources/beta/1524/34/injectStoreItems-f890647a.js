import{c as t}from"./closestTr-d7616f33.js"
import{d as n}from"./daAjaxSendItemsToRecipient-9bb4fc2b.js"
import{c as e,bo as s,M as i,l as o,V as a,B as r,D as c,Z as u,aA as l,e as d,G as m,a as f,t as h,bm as k,aC as p,aq as g,ba as L,x as b,H as w,o as S,p as $}from"./calfSystem-dfa26790.js"
import{e as x}from"./errorDialog-da819f92.js"
import{g as D}from"./getInventoryById-580a84c8.js"
import{d as E}from"./doStatTotal-1aaf7cc1.js"
import{S as Q,i as _,s as v,t as y,e as A,p as N,g as T,a as C,b as I,l as H,c as j,n as B,d as R,r as O,k as U}from"./index-7fbf76d3.js"
import{b as G}from"./batch-1e22305c.js"
let F,M,P
function V(){if(!M){const t="dropitems"===e.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function q(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function Y(){const t=V()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function Z(){return Y().filter((n=>!o("fshHide",t(n))))}function z(){return P||(P=D()),P}function J(n){return t(n.target).cells[0].children[0].value}async function K(n,e,s){!function(n){const e=t(n)
e.cells[0].children[0].disabled=!0,c(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),n.blur(),n.classList.add("fshSpinner","fshSpinner12")}(n.target)
const i=await e([J(n)])
i&&i.s?function(t,n){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=n}(n,s):x(i)}const W=[["Check All",async function(t){const{items:n}=await z()
a("storeitems","Check All of Type"),Z().filter((e=>n[e.value]&&n[e.value].item_id===n[J(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),K(t,n,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),K(t,q,"Dropped")}]]
function X(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const n=W.find((([n])=>n===r(t.target)))
n&&n[1](t)}function tt(t){let n,s,i,o,a,r,c,u,l,d,m,f,h=t[2](t[0])+"",k=t[2](t[1])+"",p="storeitems"===e.subcmd2&&function(t){let n,e,s,i,o
return{c(){n=y("["),e=A("button"),e.textContent="Select All Guild Locked",s=y("]"),T(e,"class","svelte-h3aclh")},m(a,r){C(a,n,r),C(a,e,r),C(a,s,r),i||(o=H(e,"click",t[5]),i=!0)},p:B,d(t){t&&R(n),t&&R(e),t&&R(s),i=!1,o()}}}(t)
return{c(){n=y("["),s=A("button"),i=y(h),o=y(" AH and UFSG Links"),a=y("] \n["),r=A("button"),c=y(k),u=y(" Quick Drop links"),l=y("] \n"),p&&p.c(),d=N(),T(s,"class","svelte-h3aclh"),T(r,"class","svelte-h3aclh")},m(e,h){C(e,n,h),C(e,s,h),I(s,i),I(s,o),C(e,a,h),C(e,r,h),I(r,c),I(r,u),C(e,l,h),p&&p.m(e,h),C(e,d,h),m||(f=[H(s,"click",t[3]),H(r,"click",t[4])],m=!0)},p(t,[n]){1&n&&h!==(h=t[2](t[0])+"")&&j(i,h),2&n&&k!==(k=t[2](t[1])+"")&&j(c,k),"storeitems"===e.subcmd2&&p.p(t,n)},i:B,o:B,d(t){t&&R(n),t&&R(s),t&&R(a),t&&R(r),t&&R(l),p&&p.d(t),t&&R(d),m=!1,O(f)}}}function nt(t,n,e){const s=U()
let{showExtraLinks:i=!1}=n,{showQuickDropLinks:o=!1}=n
return t.$$set=t=>{"showExtraLinks"in t&&e(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&e(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),e(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),e(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class et extends Q{constructor(t){super(),_(this,t,nt,tt,v,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,n){if(13699!==n.item_id)return n.item_name
const e=t.find((t=>t.value===String(n.inv_id)))
return e?m(e.parentNode.parentNode.children[2]):n.item_name}async function ot(t){return st||(st=await async function(t){const n=await z()
return n&&n.items?l(d(n.items).map((([n,e])=>[n,{...e,item_name:it(t,e)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,n){return t[n]=(t[n]||0)+1,t}const ct=(t,n,e)=>`[<button class="fshStoreItemsButton ${t}"${n}>${e}</button>]`,ut=(t,n,e)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(n),`Quick ${e}`)}`,lt=(t,n,e)=>`[<a href="${t}"${n}>${e}</a>]`
function dt(t,n){return n[0]()?t+n[1]():t}function mt(t,n,e){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(e)} ${(t=>lt(`${p}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(e)}`],[()=>!0,()=>`&nbsp;${e.item_name}`],[()=>((t,n,e)=>t[2]&&n[e.item_id]>1)(t,n,e),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,n)=>t[3]&&(!n.bound||-1!==n.guild_tag))(t,e),()=>ut("fshBlue","SENDS","Send")],[()=>((t,n)=>t[4]&&-1===n.guild_tag)(t,e),()=>ut("fshRed","DROP","Drop")]]}function ft(t,n,[e,s]){const i=e
t[1]&&(i.className=k[s.rarity].clas)
const o=mt(t,n,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function ht(n){const e=await async function(){const n=Y()
if(!n.length)return[]
const e=await ot(n)
return n.map((n=>[t(n).cells[2],e[n.value]])).filter((([,t])=>t))}(),s=n[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(e):[]
f(3,G,[[5,3,e,0,h(ft,n,s)]])}function kt(t){const n=function(t){const n=document.forms[0]
return new et({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:n.parentNode.children[5].children[0]})}(t)
n.$on("showExtraLinks",(n=>{t[0]=n.detail,ht(t)})),n.$on("showQuickDropLinks",(n=>{t[4]=n.detail,ht(t)})),n.$on("selectLocked",(()=>{!async function(){const t=Z()
if(!t.length)return
const n=await z()
n&&n.items&&t.map((t=>[t,n.items[t.value]])).filter((([,t])=>t)).forEach((([t,n])=>{t.checked=!t.disabled&&-1!==n.guild_tag}))}()}))}async function pt(){if(b())return
if(!V())return
const t=at.map((t=>w(t)))
E(),kt(t),t.some((t=>t))&&ht(t),S($,X)}export{V as a,z as b,Z as c,q as d,Y as g,pt as i}
//# sourceMappingURL=injectStoreItems-f890647a.js.map
