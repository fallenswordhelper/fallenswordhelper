import{ag as t,bP as e,$ as n,S as s,L as o,M as a,N as i,O as r,P as c,Q as u,R as l,T as d,U as m,V as f,b9 as p,Y as h,Z as $,a1 as k,a2 as g,W as w,X as b,a4 as L,bl as x,a7 as _,D as v,f as S,s as y,n as D,a8 as Q,be as E,bf as C,bg as N,bh as I,bi as T,b5 as j,am as A,ad as H,C as B,as as O,aV as R,b as U,cQ as M,cF as F,aL as G,aK as P,w as V,ai as W,e as Y,p as Z}from"./calfSystem-Blt4DbaE.js"
import{m as K,e as X,a as q,d as z}from"./dropItem-B8Cjt0uN.js"
import{d as J}from"./doStatTotal-CybaE_J0.js"
import{c as tt}from"./closestTr-BGA5O97h.js"
import{e as et}from"./errorDialog-B4_TjdGG.js"
import{a as nt}from"./arrayFromRadioNodeList-Cz0XwDMw.js"
import{d as st}from"./daLoadInventory-XbR6QBDO.js"
import{b as ot}from"./basicItem-B4VQEJwm.js"
import{f as at}from"./flattenItems-C4pfIrZn.js"
import{L as it}from"./LinkButtonBracketed-C9l9Kpoo.js"
import{b as rt}from"./batch-C_j5R0ng.js"
let ct=0,ut=0
function lt(){if(!ut){const e="dropitems"===t.subcmd?"removeIndex[]":"storeIndex[]"
ct=document.forms[0]?.elements[e],ut=!0}return ct}function dt(){const t=lt()
return t?nt(t):[]}function mt(t,n){return e({subcmd:"sendtofolder",folder_id:t,folderItem:n})}async function ft(t,e){return await K(e,t),{r:e}}function pt(t,e){return n(mt,ft,t,e)}function ht(t,e,n){const s=t.slice()
return s[5]=e[n],s}function $t(t){let e,n,s,o=t[5].name+""
return{c(){e=m("option"),n=f(o),e.__value=s=t[5].id,u(e,e.__value)},m(t,s){l(t,e,s),d(e,n)},p(t,a){1&a&&o!==(o=t[5].name+"")&&c(n,o),1&a&&s!==(s=t[5].id)&&(e.__value=s,u(e,e.__value))},d(t){t&&r(e)}}}function kt(t){let e,n,s,o,a,c,u,f,x,_,v,S=i(t[0]),y=[]
for(let e=0;e<S.length;e+=1)y[e]=$t(ht(t,S,e))
return{c(){e=m("tr"),n=m("td"),s=m("span"),s.textContent="Move selected items to:",o=w(),a=m("select")
for(let t=0;t<y.length;t+=1)y[t].c()
c=w(),u=m("span"),u.textContent=" ",f=w(),x=m("button"),x.textContent="Move",b(a,"class","customselect"),void 0===t[1]&&L((()=>t[3].call(a))),b(x,"class","custombutton svelte-vafhru"),b(x,"type","button"),b(n,"class","fshCenter")},m(i,r){l(i,e,r),d(e,n),d(n,s),d(n,o),d(n,a)
for(let t=0;t<y.length;t+=1)y[t]&&y[t].m(a,null)
k(a,t[1],!0),d(n,c),d(n,u),d(n,f),d(n,x),_||(v=[g(a,"change",t[3]),g(x,"click",t[2])],_=!0)},p(t,[e]){if(1&e){let n
for(S=i(t[0]),n=0;n<S.length;n+=1){const s=ht(t,S,n)
y[n]?y[n].p(s,e):(y[n]=$t(s),y[n].c(),y[n].m(a,null))}for(;n<y.length;n+=1)y[n].d(1)
y.length=S.length}3&e&&k(a,t[1])},i:$,o:$,d(t){t&&r(e),p(y,t),_=!1,h(v)}}}function gt(t,e,n){const s=x()
let o,{folders:a}=e
return t.$$set=t=>{"folders"in t&&n(0,a=t.folders)},[a,o,function(){s("move",o)},function(){o=_(this),n(1,o),n(0,a)}]}class wt extends s{constructor(t){super(),o(this,t,gt,kt,a,{folders:0})}}function bt(){return dt().filter((t=>!v("fshHide",tt(t))))}let Lt=null
function xt(){return Lt||(Lt=async function(){const t=await st()
if(t?.s)return{folders:X(t.r),items:S(at(t.r).map(ot).map((t=>[t.inv_id,t])))}}()),Lt}function _t(t){return e({subcmd:"dodropitems",removeIndex:t})}async function vt(t){const e=await q(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function St(t){return n(_t,vt,t)}function yt(t){return tt(t.target).cells[0].children[0].value}async function Dt(t,e,n){!function(t){const e=tt(t)
e.cells[0].children[0].disabled=!0,D(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const s=await e([yt(t)])
s?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,n):et(s)}const Qt=[["Check All",async function(t){const{items:e}=await xt()
y("storeitems","Check All of Type"),bt().filter((n=>e[n.value]&&e[n.value].item_id===e[yt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{y("storeitems","Quick Send"),Dt(t,z,"Sent")}],["Quick Drop",t=>{y("storeitems","Quick Drop"),Dt(t,St,"Dropped")}]]
function Et(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&y("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||v("custombutton",t.target))return
const e=Qt.find((([e])=>e===Q(t.target)))
e&&e[1](t)}const Ct=0,Nt=1,It=2,Tt=4,jt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function At(t){let e,n,s=t[2](t[0])+""
return{c(){e=f(s),n=f(" AH and UFSG Links")},m(t,s){l(t,e,s),l(t,n,s)},p(t,n){1&n&&s!==(s=t[2](t[0])+"")&&c(e,s)},d(t){t&&(r(e),r(n))}}}function Ht(t){let e,n,s=t[2](t[1])+""
return{c(){e=f(s),n=f(" Quick Drop links")},m(t,s){l(t,e,s),l(t,n,s)},p(t,n){2&n&&s!==(s=t[2](t[1])+"")&&c(e,s)},d(t){t&&(r(e),r(n))}}}function Bt(t){let e
return{c(){e=f("Select All Guild Locked")},m(t,n){l(t,e,n)},d(t){t&&r(e)}}}function Ot(e){let n,s,o,a,i,c,u,d
n=new it({props:{$$slots:{default:[At]},$$scope:{ctx:e}}}),n.$on("click",e[3]),a=new it({props:{$$slots:{default:[Ht]},$$scope:{ctx:e}}}),a.$on("click",e[4])
let p="storeitems"===t.subcmd2&&function(t){let e,n,s
return e=new it({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){n=m("div"),T(e.$$.fragment),j(n,"display","contents"),j(n,"--button-width","10.8em")},m(t,o){l(t,n,o),I(e,n,null),s=!0},p(t,n){const s={}
128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(N(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){t&&e&&r(n),E(e,t)}}}(e)
return{c(){s=m("div"),T(n.$$.fragment),o=f(" \n"),i=m("div"),T(a.$$.fragment),c=f(" \n"),p&&p.c(),u=A(),j(s,"display","contents"),j(s,"--button-width","11.8em"),j(i,"display","contents"),j(i,"--button-width","10.6em")},m(t,e){l(t,s,e),I(n,s,null),l(t,o,e),l(t,i,e),I(a,i,null),l(t,c,e),p&&p.m(t,e),l(t,u,e),d=!0},p(e,[s]){const o={}
129&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)
const i={}
130&s&&(i.$$scope={dirty:s,ctx:e}),a.$set(i),"storeitems"===t.subcmd2&&p.p(e,s)},i(t){d||(N(n.$$.fragment,t),N(a.$$.fragment,t),N(p),d=!0)},o(t){C(n.$$.fragment,t),C(a.$$.fragment,t),C(p),d=!1},d(t){t&&(r(o),r(c),r(u)),t&&n&&r(s),E(n,t),t&&a&&r(i),E(a,t),p&&p.d(t)}}}function Rt(t,e,n){const s=x()
let{showExtraLinks:o=!1}=e,{showQuickDropLinks:a=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,o=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,a=t.showQuickDropLinks)},[o,a,t=>t?"Hide":"Show",function(){y("storeitems","toggleShowExtraLinks"),n(0,o=!o),H("showExtraLinks",o),s("showExtraLinks",o)},function(){y("storeitems","toggleShowQuickDropLinks"),n(1,a=!a),H("showQuickDropLinks",a),s("showQuickDropLinks",a)},function(){y("storeitems","selectLocked"),s("selectLocked")}]}class Ut extends s{constructor(t){super(),o(this,t,Rt,Ot,a,{showExtraLinks:0,showQuickDropLinks:1})}}let Mt=null
function Ft(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?O(n.parentNode.parentNode.children[2]):e.item_name}function Gt(t){return Mt||(Mt=async function(t){const e=await xt()
return e?.items?S(B(e.items).map((([e,n])=>[e,{...n,item_name:Ft(t,n)}]))):{}}(t)),Mt}function Pt(t,e){return t[e]=(t[e]||0)+1,t}const Vt=(t,e,n)=>` [<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,Wt=(t,e,n)=>Vt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`),Yt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
const Zt=t=>Yt(`${G}items${P}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Kt=(t,e,n)=>t[It]&&e[n.item_id]>1,Xt=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),qt=(t,e)=>t[Tt]&&-1===e.guild_tag
function zt(t,e){return e[0]()?t+e[1]():t}function Jt(t,e,n){return[[()=>t[Ct],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Yt(`${F}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${Zt(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>Kt(t,e,n),()=>Vt("fshBlack","","Check All")],[()=>Xt(t,n),()=>Wt("fshBlue","SENDS","Send")],[()=>qt(t,n),()=>Wt("fshRed","DROP","Drop")]]}function te(t,e,[n,s]){const o=n
t[Nt]&&(o.className=M[s.rarity].clas)
const a=Jt(t,e,s).reduce(zt,"")
o.innerHTML!==a&&(o.innerHTML=a)}async function ee(t){const e=await async function(){const t=dt()
if(!t.length)return[]
const e=await Gt(t)
return t.map((t=>[tt(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),n=t[It]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Pt,{}),13699:1}}(e):[]
R(3,rt,[[3,e,0,U(te,t,n)]])}function ne(t){const e=function(t){const[e]=document.forms
return new Ut({props:{showExtraLinks:t[Ct],showQuickDropLinks:t[Tt]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[Ct]=e.detail,ee(t)})),e.$on("showQuickDropLinks",(e=>{t[Tt]=e.detail,ee(t)})),e.$on("selectLocked",(()=>{!async function(){const t=bt()
if(!t.length)return
const e=await xt()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}function se(){if(V())return
if(!lt())return
const t=jt.map((t=>W(t)))
J(),ne(t),t.some((t=>t))&&ee(t),Y(Z(),Et)}export{wt as M,xt as a,bt as b,St as c,pt as d,lt as e,dt as g,se as i}
//# sourceMappingURL=injectStoreItems-DinmFb6T.js.map
