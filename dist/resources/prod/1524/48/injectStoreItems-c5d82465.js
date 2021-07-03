import{c as t}from"./closestTr-5f6e9767.js"
import{d as e}from"./daAjaxSendItemsToRecipient-4b691006.js"
import{c as n,bu as s,ar as i,l as o,S as a,C as r,E as c,Z as u,ao as l,e as d,H as f,a as m,t as h,bs as p,aP as k,aG as g,bm as L,y as w,I as b,o as S,p as $}from"./calfSystem-85fa6364.js"
import{e as x}from"./errorDialog-f5ff5027.js"
import{g as D}from"./getInventoryById-fd76220a.js"
import{d as E}from"./doStatTotal-40063ed2.js"
import{S as Q,i as _,s as v,t as y,b as N,f as T,a as A,l as I,n as C,d as j,e as H,g as R,j as B,r as O,p as U}from"./index-2f0e5ca2.js"
import{b as G}from"./batch-5a4fc6b0.js"
let F,M,P
function V(){if(!M){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function Y(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function Z(){const t=V()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function q(){return Z().filter((e=>!o("fshHide",t(e))))}function z(){return P||(P=D()),P}function J(e){return t(e.target).cells[0].children[0].value}async function K(e,n,s){!function(e){const n=t(e)
n.cells[0].children[0].disabled=!0,c(".actionButton",n).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),e.blur(),e.classList.add("fshSpinner","fshSpinner12")}(e.target)
const i=await n([J(e)])
i&&i.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(e,s):x(i)}const W=[["Check All",async function(t){const{items:e}=await z()
a("storeitems","Check All of Type"),q().filter((n=>e[n.value]&&e[n.value].item_id===e[J(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),K(t,e,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),K(t,Y,"Dropped")}]]
function X(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const e=W.find((([e])=>e===r(t.target)))
e&&e[1](t)}function tt(t){let e,s,i,o,a,r,c,u,l,d,f,m,h=t[2](t[0])+"",p=t[2](t[1])+"",k="storeitems"===n.subcmd2&&function(t){let e,n,s,i,o
return{c(){e=y("["),n=N("button"),n.textContent="Select All Guild Locked",s=y("]"),T(n,"class","svelte-h3aclh")},m(a,r){A(a,e,r),A(a,n,r),A(a,s,r),i||(o=I(n,"click",t[5]),i=!0)},p:C,d(t){t&&j(e),t&&j(n),t&&j(s),i=!1,o()}}}(t)
return{c(){e=y("["),s=N("button"),i=y(h),o=y(" AH and UFSG Links"),a=y("] \n["),r=N("button"),c=y(p),u=y(" Quick Drop links"),l=y("] \n"),k&&k.c(),d=H(),T(s,"class","svelte-h3aclh"),T(r,"class","svelte-h3aclh")},m(n,h){A(n,e,h),A(n,s,h),R(s,i),R(s,o),A(n,a,h),A(n,r,h),R(r,c),R(r,u),A(n,l,h),k&&k.m(n,h),A(n,d,h),f||(m=[I(s,"click",t[3]),I(r,"click",t[4])],f=!0)},p(t,[e]){1&e&&h!==(h=t[2](t[0])+"")&&B(i,h),2&e&&p!==(p=t[2](t[1])+"")&&B(c,p),"storeitems"===n.subcmd2&&k.p(t,e)},i:C,o:C,d(t){t&&j(e),t&&j(s),t&&j(a),t&&j(r),t&&j(l),k&&k.d(t),t&&j(d),f=!1,O(m)}}}function et(t,e,n){const s=U()
let{showExtraLinks:i=!1}=e,{showQuickDropLinks:o=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),n(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),n(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class nt extends Q{constructor(t){super(),_(this,t,et,tt,v,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?f(n.parentNode.parentNode.children[2]):e.item_name}async function ot(t){return st||(st=await async function(t){const e=await z()
return e&&e.items?l(d(e.items).map((([e,n])=>[e,{...n,item_name:it(t,n)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,e){return t[e]=(t[e]||0)+1,t}const ct=(t,e,n)=>`[<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,ut=(t,e,n)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`)}`,lt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
function dt(t,e){return e[0]()?t+e[1]():t}function ft(t,e,n){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${(t=>lt(`${k}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>((t,e,n)=>t[2]&&e[n.item_id]>1)(t,e,n),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,n),()=>ut("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,n),()=>ut("fshRed","DROP","Drop")]]}function mt(t,e,[n,s]){const i=n
t[1]&&(i.className=p[s.rarity].clas)
const o=ft(t,e,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function ht(e){const n=await async function(){const e=Z()
if(!e.length)return[]
const n=await ot(e)
return e.map((e=>[t(e).cells[2],n[e.value]])).filter((([,t])=>t))}(),s=e[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(n):[]
m(3,G,[[5,3,n,0,h(mt,e,s)]])}function pt(t){const e=function(t){const e=document.forms[0]
return new nt({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[0]=e.detail,ht(t)})),e.$on("showQuickDropLinks",(e=>{t[4]=e.detail,ht(t)})),e.$on("selectLocked",(()=>{!async function(){const t=q()
if(!t.length)return
const e=await z()
e&&e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}async function kt(){if(w())return
if(!V())return
const t=at.map((t=>b(t)))
E(),pt(t),t.some((t=>t))&&ht(t),S($,X)}export{V as a,z as b,q as c,Y as d,Z as g,kt as i}
//# sourceMappingURL=injectStoreItems-c5d82465.js.map
