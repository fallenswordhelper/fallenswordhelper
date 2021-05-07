import{c as t}from"./closestTr-0cdbb46f.js"
import{d as e}from"./daAjaxSendItemsToRecipient-90b15976.js"
import{c as n,br as s,N as i,l as o,U as a,C as r,E as c,a0 as u,al as l,e as d,H as m,a as f,t as p,bp as h,aL as k,aC as g,bj as L,y as b,I as w,o as S,p as $}from"./calfSystem-3cb2f93e.js"
import{e as x}from"./errorDialog-0f2ff56e.js"
import{g as D}from"./getInventoryById-74030f86.js"
import{d as E}from"./doStatTotal-2c8b26e5.js"
import{S as Q,i as _,s as v,t as y,e as N,p as T,g as A,a as C,b as I,l as j,c as H,n as R,d as U,r as B,k as O}from"./index-60ac54a4.js"
import{b as G}from"./batch-60e4331a.js"
let F,M,P
function V(){if(!M){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function Y(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function q(){const t=V()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function z(){return q().filter((e=>!o("fshHide",t(e))))}function J(){return P||(P=D()),P}function K(e){return t(e.target).cells[0].children[0].value}async function W(e,n,s){!function(e){const n=t(e)
n.cells[0].children[0].disabled=!0,c(".actionButton",n).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),e.blur(),e.classList.add("fshSpinner","fshSpinner12")}(e.target)
const i=await n([K(e)])
i&&i.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(e,s):x(i)}const X=[["Check All",async function(t){const{items:e}=await J()
a("storeitems","Check All of Type"),z().filter((n=>e[n.value]&&e[n.value].item_id===e[K(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),W(t,e,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),W(t,Y,"Dropped")}]]
function Z(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const e=X.find((([e])=>e===r(t.target)))
e&&e[1](t)}function tt(t){let e,s,i,o,a,r,c,u,l,d,m,f,p=t[2](t[0])+"",h=t[2](t[1])+"",k="storeitems"===n.subcmd2&&function(t){let e,n,s,i,o
return{c(){e=y("["),n=N("button"),n.textContent="Select All Guild Locked",s=y("]"),A(n,"class","svelte-h3aclh")},m(a,r){C(a,e,r),C(a,n,r),C(a,s,r),i||(o=j(n,"click",t[5]),i=!0)},p:R,d(t){t&&U(e),t&&U(n),t&&U(s),i=!1,o()}}}(t)
return{c(){e=y("["),s=N("button"),i=y(p),o=y(" AH and UFSG Links"),a=y("] \n["),r=N("button"),c=y(h),u=y(" Quick Drop links"),l=y("] \n"),k&&k.c(),d=T(),A(s,"class","svelte-h3aclh"),A(r,"class","svelte-h3aclh")},m(n,p){C(n,e,p),C(n,s,p),I(s,i),I(s,o),C(n,a,p),C(n,r,p),I(r,c),I(r,u),C(n,l,p),k&&k.m(n,p),C(n,d,p),m||(f=[j(s,"click",t[3]),j(r,"click",t[4])],m=!0)},p(t,[e]){1&e&&p!==(p=t[2](t[0])+"")&&H(i,p),2&e&&h!==(h=t[2](t[1])+"")&&H(c,h),"storeitems"===n.subcmd2&&k.p(t,e)},i:R,o:R,d(t){t&&U(e),t&&U(s),t&&U(a),t&&U(r),t&&U(l),k&&k.d(t),t&&U(d),m=!1,B(f)}}}function et(t,e,n){const s=O()
let{showExtraLinks:i=!1}=e,{showQuickDropLinks:o=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),n(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),n(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class nt extends Q{constructor(t){super(),_(this,t,et,tt,v,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?m(n.parentNode.parentNode.children[2]):e.item_name}async function ot(t){return st||(st=await async function(t){const e=await J()
return e&&e.items?l(d(e.items).map((([e,n])=>[e,{...n,item_name:it(t,n)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,e){return t[e]=(t[e]||0)+1,t}const ct=(t,e,n)=>`[<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,ut=(t,e,n)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`)}`,lt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
function dt(t,e){return e[0]()?t+e[1]():t}function mt(t,e,n){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${(t=>lt(`${k}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>((t,e,n)=>t[2]&&e[n.item_id]>1)(t,e,n),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,n),()=>ut("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,n),()=>ut("fshRed","DROP","Drop")]]}function ft(t,e,[n,s]){const i=n
t[1]&&(i.className=h[s.rarity].clas)
const o=mt(t,e,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function pt(e){const n=await async function(){const e=q()
if(!e.length)return[]
const n=await ot(e)
return e.map((e=>[t(e).cells[2],n[e.value]])).filter((([,t])=>t))}(),s=e[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(n):[]
f(3,G,[[5,3,n,0,p(ft,e,s)]])}function ht(t){const e=function(t){const e=document.forms[0]
return new nt({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[0]=e.detail,pt(t)})),e.$on("showQuickDropLinks",(e=>{t[4]=e.detail,pt(t)})),e.$on("selectLocked",(()=>{!async function(){const t=z()
if(!t.length)return
const e=await J()
e&&e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}async function kt(){if(b())return
if(!V())return
const t=at.map((t=>w(t)))
E(),ht(t),t.some((t=>t))&&pt(t),S($,Z)}export{V as a,J as b,z as c,Y as d,q as g,kt as i}
//# sourceMappingURL=injectStoreItems-31d988e6.js.map
