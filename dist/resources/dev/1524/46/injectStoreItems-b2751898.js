import{c as t}from"./closestTr-fd5f5074.js"
import{d as n}from"./daAjaxSendItemsToRecipient-b83b4b94.js"
import{c as e,bv as s,aq as i,l as o,T as a,C as r,E as c,_ as u,an as l,e as d,H as m,a as f,t as h,bt as p,aO as k,aF as g,bn as L,y as b,I as w,o as S,p as $}from"./calfSystem-d3f0a380.js"
import{e as x}from"./errorDialog-2e0e2853.js"
import{g as D}from"./getInventoryById-41db4f82.js"
import{d as E}from"./doStatTotal-af8f07c1.js"
import{S as _,i as v,s as Q,t as y,e as T,g as N,a as A,l as I,n as C,d as H,p as j,b as O,c as R,r as B,m as U}from"./index-79201ad3.js"
import{b as F}from"./batch-7c0362d6.js"
let G,M,P
function q(){if(!M){const t="dropitems"===e.subcmd?"removeIndex[]":"storeIndex[]"
G=document.forms[0].elements[t],M=!0}return G}function V(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function Y(){const t=q()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function z(){return Y().filter((n=>!o("fshHide",t(n))))}function J(){return P||(P=D()),P}function K(n){return t(n.target).cells[0].children[0].value}async function W(n,e,s){!function(n){const e=t(n)
e.cells[0].children[0].disabled=!0,c(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),n.blur(),n.classList.add("fshSpinner","fshSpinner12")}(n.target)
const i=await e([K(n)])
i&&i.s?function(t,n){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=n}(n,s):x(i)}const X=[["Check All",async function(t){const{items:n}=await J()
a("storeitems","Check All of Type"),z().filter((e=>n[e.value]&&n[e.value].item_id===n[K(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),W(t,n,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),W(t,V,"Dropped")}]]
function Z(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const n=X.find((([n])=>n===r(t.target)))
n&&n[1](t)}function tt(t){let n,s,i,o,a,r,c,u,l,d,m,f,h=t[2](t[0])+"",p=t[2](t[1])+"",k="storeitems"===e.subcmd2&&function(t){let n,e,s,i,o
return{c(){n=y("["),e=T("button"),e.textContent="Select All Guild Locked",s=y("]"),N(e,"class","svelte-h3aclh")},m(a,r){A(a,n,r),A(a,e,r),A(a,s,r),i||(o=I(e,"click",t[5]),i=!0)},p:C,d(t){t&&H(n),t&&H(e),t&&H(s),i=!1,o()}}}(t)
return{c(){n=y("["),s=T("button"),i=y(h),o=y(" AH and UFSG Links"),a=y("] \n["),r=T("button"),c=y(p),u=y(" Quick Drop links"),l=y("] \n"),k&&k.c(),d=j(),N(s,"class","svelte-h3aclh"),N(r,"class","svelte-h3aclh")},m(e,h){A(e,n,h),A(e,s,h),O(s,i),O(s,o),A(e,a,h),A(e,r,h),O(r,c),O(r,u),A(e,l,h),k&&k.m(e,h),A(e,d,h),m||(f=[I(s,"click",t[3]),I(r,"click",t[4])],m=!0)},p(t,[n]){1&n&&h!==(h=t[2](t[0])+"")&&R(i,h),2&n&&p!==(p=t[2](t[1])+"")&&R(c,p),"storeitems"===e.subcmd2&&k.p(t,n)},i:C,o:C,d(t){t&&H(n),t&&H(s),t&&H(a),t&&H(r),t&&H(l),k&&k.d(t),t&&H(d),m=!1,B(f)}}}function nt(t,n,e){const s=U()
let{showExtraLinks:i=!1}=n,{showQuickDropLinks:o=!1}=n
return t.$$set=t=>{"showExtraLinks"in t&&e(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&e(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),e(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),e(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class et extends _{constructor(t){super(),v(this,t,nt,tt,Q,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,n){if(13699!==n.item_id)return n.item_name
const e=t.find((t=>t.value===String(n.inv_id)))
return e?m(e.parentNode.parentNode.children[2]):n.item_name}async function ot(t){return st||(st=await async function(t){const n=await J()
return n&&n.items?l(d(n.items).map((([n,e])=>[n,{...e,item_name:it(t,e)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,n){return t[n]=(t[n]||0)+1,t}const ct=(t,n,e)=>`[<button class="fshStoreItemsButton ${t}"${n}>${e}</button>]`,ut=(t,n,e)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(n),`Quick ${e}`)}`,lt=(t,n,e)=>`[<a href="${t}"${n}>${e}</a>]`
function dt(t,n){return n[0]()?t+n[1]():t}function mt(t,n,e){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(e)} ${(t=>lt(`${k}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(e)}`],[()=>!0,()=>`&nbsp;${e.item_name}`],[()=>((t,n,e)=>t[2]&&n[e.item_id]>1)(t,n,e),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,n)=>t[3]&&(!n.bound||-1!==n.guild_tag))(t,e),()=>ut("fshBlue","SENDS","Send")],[()=>((t,n)=>t[4]&&-1===n.guild_tag)(t,e),()=>ut("fshRed","DROP","Drop")]]}function ft(t,n,[e,s]){const i=e
t[1]&&(i.className=p[s.rarity].clas)
const o=mt(t,n,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function ht(n){const e=await async function(){const n=Y()
if(!n.length)return[]
const e=await ot(n)
return n.map((n=>[t(n).cells[2],e[n.value]])).filter((([,t])=>t))}(),s=n[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(e):[]
f(3,F,[[5,3,e,0,h(ft,n,s)]])}function pt(t){const n=function(t){const n=document.forms[0]
return new et({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:n.parentNode.children[5].children[0]})}(t)
n.$on("showExtraLinks",(n=>{t[0]=n.detail,ht(t)})),n.$on("showQuickDropLinks",(n=>{t[4]=n.detail,ht(t)})),n.$on("selectLocked",(()=>{!async function(){const t=z()
if(!t.length)return
const n=await J()
n&&n.items&&t.map((t=>[t,n.items[t.value]])).filter((([,t])=>t)).forEach((([t,n])=>{t.checked=!t.disabled&&-1!==n.guild_tag}))}()}))}async function kt(){if(b())return
if(!q())return
const t=at.map((t=>w(t)))
E(),pt(t),t.some((t=>t))&&ht(t),S($,Z)}export{q as a,J as b,z as c,V as d,Y as g,kt as i}
//# sourceMappingURL=injectStoreItems-b2751898.js.map
