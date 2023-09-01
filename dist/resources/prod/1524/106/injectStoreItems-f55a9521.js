import{ad as t,bE as e,$ as n,S as s,L as o,M as a,N as r,O as i,P as c,Q as u,R as l,T as d,U as f,W as m,Y as p,Z as h,b0 as $,_ as k,be as g,a1 as w,V as b,a2 as L,a3 as x,D as _,n as v,a5 as S,j as y,bf as D,aj as E,a$ as Q,bg as N,ba as C,bd as T,bh as j,ab as I,f as A,C as B,an as H,aP as O,c as R,cE as U,cv as M,aK as F,aJ as G,w as P,af as V,o as W,p as Y}from"./calfSystem-076d7a01.js"
import{m as Z,a as J,d as K}from"./dropItem-2080adb1.js"
import{e as q}from"./each-d53d627d.js"
import{d as z}from"./doStatTotal-5f1c8221.js"
import{c as X}from"./closestTr-efa2e666.js"
import{e as tt}from"./errorDialog-91872536.js"
import{a as et}from"./arrayFromRadioNodeList-428f39fd.js"
import{g as nt}from"./getInventoryById-83dceb0e.js"
import{L as st}from"./LinkButtonBracketed-430703c5.js"
import{b as ot}from"./batch-87a59312.js"
let at=0,rt=0
function it(){if(!rt){const e="dropitems"===t.subcmd?"removeIndex[]":"storeIndex[]"
at=document.forms[0]?.elements[e],rt=!0}return at}function ct(){const t=it()
return t?et(t):[]}function ut(t,n){return e({subcmd:"sendtofolder",folder_id:t,folderItem:n})}async function lt(t,e){return await Z(e,t),{r:e}}function dt(t,e){return n(ut,lt,t,e)}function ft(t,e,n){const s=t.slice()
return s[5]=e[n],s}function mt(t){let e,n,s,o=t[5].name+""
return{c(){e=r("option"),n=w(o),e.__value=s=t[5].id,b(e,e.__value)},m(t,s){l(t,e,s),d(e,n)},p(t,a){1&a&&o!==(o=t[5].name+"")&&L(n,o),1&a&&s!==(s=t[5].id)&&(e.__value=s,b(e,e.__value))},d(t){t&&h(e)}}}function pt(t){let e,n,s,o,a,g,w,b,L,x,_,v=q(t[0]),S=[]
for(let e=0;e<v.length;e+=1)S[e]=mt(ft(t,v,e))
return{c(){e=r("tr"),n=r("td"),s=r("span"),s.textContent="Move selected items to:",o=i(),a=r("select")
for(let t=0;t<S.length;t+=1)S[t].c()
g=i(),w=r("span"),w.textContent=" ",b=i(),L=r("button"),L.textContent="Move",c(a,"class","customselect"),void 0===t[1]&&u((()=>t[3].call(a))),c(L,"class","custombutton svelte-vafhru"),c(L,"type","button"),c(n,"class","fshCenter")},m(r,i){l(r,e,i),d(e,n),d(n,s),d(n,o),d(n,a)
for(let t=0;t<S.length;t+=1)S[t]&&S[t].m(a,null)
f(a,t[1],!0),d(n,g),d(n,w),d(n,b),d(n,L),x||(_=[m(a,"change",t[3]),m(L,"click",t[2])],x=!0)},p(t,[e]){if(1&e){let n
for(v=q(t[0]),n=0;n<v.length;n+=1){const s=ft(t,v,n)
S[n]?S[n].p(s,e):(S[n]=mt(s),S[n].c(),S[n].m(a,null))}for(;n<S.length;n+=1)S[n].d(1)
S.length=v.length}3&e&&f(a,t[1])},i:p,o:p,d(t){t&&h(e),$(S,t),x=!1,k(_)}}}function ht(t,e,n){const s=g()
let o,{folders:a}=e
return t.$$set=t=>{"folders"in t&&n(0,a=t.folders)},[a,o,function(){s("move",o)},function(){o=x(this),n(1,o),n(0,a)}]}class $t extends s{constructor(t){super(),o(this,t,ht,pt,a,{folders:0})}}function kt(){return ct().filter((t=>!_("fshHide",X(t))))}let gt=null
function wt(){return gt||(gt=nt()),gt}function bt(t){return e({subcmd:"dodropitems",removeIndex:t})}async function Lt(t){const e=await J(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function xt(t){return n(bt,Lt,t)}function _t(t){return X(t.target).cells[0].children[0].value}async function vt(t,e,n){!function(t){const e=X(t)
e.cells[0].children[0].disabled=!0,y(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const s=await e([_t(t)])
s&&s.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,n):tt(s)}const St=[["Check All",async function(t){const{items:e}=await wt()
v("storeitems","Check All of Type"),kt().filter((n=>e[n.value]&&e[n.value].item_id===e[_t(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{v("storeitems","Quick Send"),vt(t,K,"Sent")}],["Quick Drop",t=>{v("storeitems","Quick Drop"),vt(t,xt,"Dropped")}]]
function yt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&v("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||_("custombutton",t.target))return
const e=St.find((([e])=>e===S(t.target)))
e&&e[1](t)}const Dt=0,Et=1,Qt=2,Nt=4,Ct=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function Tt(t){let e,n,s=t[2](t[0])+""
return{c(){e=w(s),n=w(" AH and UFSG Links")},m(t,s){l(t,e,s),l(t,n,s)},p(t,n){1&n&&s!==(s=t[2](t[0])+"")&&L(e,s)},d(t){t&&(h(e),h(n))}}}function jt(t){let e,n,s=t[2](t[1])+""
return{c(){e=w(s),n=w(" Quick Drop links")},m(t,s){l(t,e,s),l(t,n,s)},p(t,n){2&n&&s!==(s=t[2](t[1])+"")&&L(e,s)},d(t){t&&(h(e),h(n))}}}function It(t){let e
return{c(){e=w("Select All Guild Locked")},m(t,n){l(t,e,n)},d(t){t&&h(e)}}}function At(e){let n,s,o,a,i,c,u,d
n=new st({props:{$$slots:{default:[Tt]},$$scope:{ctx:e}}}),n.$on("click",e[3]),a=new st({props:{$$slots:{default:[jt]},$$scope:{ctx:e}}}),a.$on("click",e[4])
let f="storeitems"===t.subcmd2&&function(t){let e,n,s
return e=new st({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){n=r("div"),D(e.$$.fragment),Q(n,"display","contents"),Q(n,"--button-width","10.8em")},m(t,o){l(t,n,o),N(e,n,null),s=!0},p(t,n){const s={}
128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){t&&e&&h(n),j(e,t)}}}(e)
return{c(){s=r("div"),D(n.$$.fragment),o=w(" \n"),i=r("div"),D(a.$$.fragment),c=w(" \n"),f&&f.c(),u=E(),Q(s,"display","contents"),Q(s,"--button-width","11.8em"),Q(i,"display","contents"),Q(i,"--button-width","10.6em")},m(t,e){l(t,s,e),N(n,s,null),l(t,o,e),l(t,i,e),N(a,i,null),l(t,c,e),f&&f.m(t,e),l(t,u,e),d=!0},p(e,[s]){const o={}
129&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)
const r={}
130&s&&(r.$$scope={dirty:s,ctx:e}),a.$set(r),"storeitems"===t.subcmd2&&f.p(e,s)},i(t){d||(C(n.$$.fragment,t),C(a.$$.fragment,t),C(f),d=!0)},o(t){T(n.$$.fragment,t),T(a.$$.fragment,t),T(f),d=!1},d(t){t&&(h(o),h(c),h(u)),t&&n&&h(s),j(n,t),t&&a&&h(i),j(a,t),f&&f.d(t)}}}function Bt(t,e,n){const s=g()
let{showExtraLinks:o=!1}=e,{showQuickDropLinks:a=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,o=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,a=t.showQuickDropLinks)},[o,a,t=>t?"Hide":"Show",function(){v("storeitems","toggleShowExtraLinks"),n(0,o=!o),I("showExtraLinks",o),s("showExtraLinks",o)},function(){v("storeitems","toggleShowQuickDropLinks"),n(1,a=!a),I("showQuickDropLinks",a),s("showQuickDropLinks",a)},function(){v("storeitems","selectLocked"),s("selectLocked")}]}class Ht extends s{constructor(t){super(),o(this,t,Bt,At,a,{showExtraLinks:0,showQuickDropLinks:1})}}let Ot=null
function Rt(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?H(n.parentNode.parentNode.children[2]):e.item_name}function Ut(t){return Ot||(Ot=async function(t){const e=await wt()
return e?.items?A(B(e.items).map((([e,n])=>[e,{...n,item_name:Rt(t,n)}]))):{}}(t)),Ot}function Mt(t,e){return t[e]=(t[e]||0)+1,t}const Ft=(t,e,n)=>` [<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,Gt=(t,e,n)=>Ft(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`),Pt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
const Vt=t=>Pt(`${F}items${G}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Wt=(t,e,n)=>t[Qt]&&e[n.item_id]>1,Yt=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),Zt=(t,e)=>t[Nt]&&-1===e.guild_tag
function Jt(t,e){return e[0]()?t+e[1]():t}function Kt(t,e,n){return[[()=>t[Dt],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Pt(`${M}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${Vt(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>Wt(t,e,n),()=>Ft("fshBlack","","Check All")],[()=>Yt(t,n),()=>Gt("fshBlue","SENDS","Send")],[()=>Zt(t,n),()=>Gt("fshRed","DROP","Drop")]]}function qt(t,e,[n,s]){const o=n
t[Et]&&(o.className=U[s.rarity].clas)
const a=Kt(t,e,s).reduce(Jt,"")
o.innerHTML!==a&&(o.innerHTML=a)}async function zt(t){const e=await async function(){const t=ct()
if(!t.length)return[]
const e=await Ut(t)
return t.map((t=>[X(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),n=t[Qt]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Mt,{}),13699:1}}(e):[]
O(3,ot,[[3,e,0,R(qt,t,n)]])}function Xt(t){const e=function(t){const[e]=document.forms
return new Ht({props:{showExtraLinks:t[Dt],showQuickDropLinks:t[Nt]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[Dt]=e.detail,zt(t)})),e.$on("showQuickDropLinks",(e=>{t[Nt]=e.detail,zt(t)})),e.$on("selectLocked",(()=>{!async function(){const t=kt()
if(!t.length)return
const e=await wt()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}function te(){if(P())return
if(!it())return
const t=Ct.map((t=>V(t)))
z(),Xt(t),t.some((t=>t))&&zt(t),W(Y(),yt)}export{$t as M,wt as a,kt as b,xt as c,dt as d,it as e,ct as g,te as i}
//# sourceMappingURL=injectStoreItems-f55a9521.js.map
