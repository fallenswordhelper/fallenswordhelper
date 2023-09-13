import{ad as t,bE as e,$ as n,S as s,L as o,M as a,N as r,O as i,P as c,Q as u,R as l,T as d,U as m,W as f,Y as p,Z as h,b0 as $,_ as k,be as g,a1 as w,V as b,a2 as L,a3 as x,D as _,f as v,n as S,a5 as y,j as D,bf as E,aj as Q,a$ as N,bg as C,ba as j,bd as T,bh as I,ab as A,C as H,an as B,aP as O,c as R,cE as U,cv as M,aK as F,aJ as G,w as P,af as V,o as W,p as Y}from"./calfSystem-2f15e074.js"
import{m as Z,e as J,b as K,a as q,d as z}from"./dropItem-e1f6f6f1.js"
import{e as X}from"./each-d93fc3a2.js"
import{d as tt}from"./doStatTotal-86e70b40.js"
import{c as et}from"./closestTr-ce435b3a.js"
import{e as nt}from"./errorDialog-91872536.js"
import{a as st}from"./arrayFromRadioNodeList-fd82689b.js"
import{d as ot}from"./daLoadInventory-d83b540d.js"
import{f as at}from"./flattenItems-d494759a.js"
import{L as rt}from"./LinkButtonBracketed-0c040929.js"
import{b as it}from"./batch-70cc157a.js"
let ct=0,ut=0
function lt(){if(!ut){const e="dropitems"===t.subcmd?"removeIndex[]":"storeIndex[]"
ct=document.forms[0]?.elements[e],ut=!0}return ct}function dt(){const t=lt()
return t?st(t):[]}function mt(t,n){return e({subcmd:"sendtofolder",folder_id:t,folderItem:n})}async function ft(t,e){return await Z(e,t),{r:e}}function pt(t,e){return n(mt,ft,t,e)}function ht(t,e,n){const s=t.slice()
return s[5]=e[n],s}function $t(t){let e,n,s,o=t[5].name+""
return{c(){e=r("option"),n=w(o),e.__value=s=t[5].id,b(e,e.__value)},m(t,s){l(t,e,s),d(e,n)},p(t,a){1&a&&o!==(o=t[5].name+"")&&L(n,o),1&a&&s!==(s=t[5].id)&&(e.__value=s,b(e,e.__value))},d(t){t&&h(e)}}}function kt(t){let e,n,s,o,a,g,w,b,L,x,_,v=X(t[0]),S=[]
for(let e=0;e<v.length;e+=1)S[e]=$t(ht(t,v,e))
return{c(){e=r("tr"),n=r("td"),s=r("span"),s.textContent="Move selected items to:",o=i(),a=r("select")
for(let t=0;t<S.length;t+=1)S[t].c()
g=i(),w=r("span"),w.textContent=" ",b=i(),L=r("button"),L.textContent="Move",c(a,"class","customselect"),void 0===t[1]&&u((()=>t[3].call(a))),c(L,"class","custombutton svelte-vafhru"),c(L,"type","button"),c(n,"class","fshCenter")},m(r,i){l(r,e,i),d(e,n),d(n,s),d(n,o),d(n,a)
for(let t=0;t<S.length;t+=1)S[t]&&S[t].m(a,null)
m(a,t[1],!0),d(n,g),d(n,w),d(n,b),d(n,L),x||(_=[f(a,"change",t[3]),f(L,"click",t[2])],x=!0)},p(t,[e]){if(1&e){let n
for(v=X(t[0]),n=0;n<v.length;n+=1){const s=ht(t,v,n)
S[n]?S[n].p(s,e):(S[n]=$t(s),S[n].c(),S[n].m(a,null))}for(;n<S.length;n+=1)S[n].d(1)
S.length=v.length}3&e&&m(a,t[1])},i:p,o:p,d(t){t&&h(e),$(S,t),x=!1,k(_)}}}function gt(t,e,n){const s=g()
let o,{folders:a}=e
return t.$$set=t=>{"folders"in t&&n(0,a=t.folders)},[a,o,function(){s("move",o)},function(){o=x(this),n(1,o),n(0,a)}]}class wt extends s{constructor(t){super(),o(this,t,gt,kt,a,{folders:0})}}function bt(){return dt().filter((t=>!_("fshHide",et(t))))}let Lt=null
function xt(){return Lt||(Lt=async function(){const t=await ot()
if(t?.s)return{folders:J(t.r),items:v(at(t.r).map(K).map((t=>[t.inv_id,t])))}}()),Lt}function _t(t){return e({subcmd:"dodropitems",removeIndex:t})}async function vt(t){const e=await q(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function St(t){return n(_t,vt,t)}function yt(t){return et(t.target).cells[0].children[0].value}async function Dt(t,e,n){!function(t){const e=et(t)
e.cells[0].children[0].disabled=!0,D(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const s=await e([yt(t)])
s&&s.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,n):nt(s)}const Et=[["Check All",async function(t){const{items:e}=await xt()
S("storeitems","Check All of Type"),bt().filter((n=>e[n.value]&&e[n.value].item_id===e[yt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{S("storeitems","Quick Send"),Dt(t,z,"Sent")}],["Quick Drop",t=>{S("storeitems","Quick Drop"),Dt(t,St,"Dropped")}]]
function Qt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&S("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||_("custombutton",t.target))return
const e=Et.find((([e])=>e===y(t.target)))
e&&e[1](t)}const Nt=0,Ct=1,jt=2,Tt=4,It=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function At(t){let e,n,s=t[2](t[0])+""
return{c(){e=w(s),n=w(" AH and UFSG Links")},m(t,s){l(t,e,s),l(t,n,s)},p(t,n){1&n&&s!==(s=t[2](t[0])+"")&&L(e,s)},d(t){t&&(h(e),h(n))}}}function Ht(t){let e,n,s=t[2](t[1])+""
return{c(){e=w(s),n=w(" Quick Drop links")},m(t,s){l(t,e,s),l(t,n,s)},p(t,n){2&n&&s!==(s=t[2](t[1])+"")&&L(e,s)},d(t){t&&(h(e),h(n))}}}function Bt(t){let e
return{c(){e=w("Select All Guild Locked")},m(t,n){l(t,e,n)},d(t){t&&h(e)}}}function Ot(e){let n,s,o,a,i,c,u,d
n=new rt({props:{$$slots:{default:[At]},$$scope:{ctx:e}}}),n.$on("click",e[3]),a=new rt({props:{$$slots:{default:[Ht]},$$scope:{ctx:e}}}),a.$on("click",e[4])
let m="storeitems"===t.subcmd2&&function(t){let e,n,s
return e=new rt({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){n=r("div"),E(e.$$.fragment),N(n,"display","contents"),N(n,"--button-width","10.8em")},m(t,o){l(t,n,o),C(e,n,null),s=!0},p(t,n){const s={}
128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){t&&e&&h(n),I(e,t)}}}(e)
return{c(){s=r("div"),E(n.$$.fragment),o=w(" \n"),i=r("div"),E(a.$$.fragment),c=w(" \n"),m&&m.c(),u=Q(),N(s,"display","contents"),N(s,"--button-width","11.8em"),N(i,"display","contents"),N(i,"--button-width","10.6em")},m(t,e){l(t,s,e),C(n,s,null),l(t,o,e),l(t,i,e),C(a,i,null),l(t,c,e),m&&m.m(t,e),l(t,u,e),d=!0},p(e,[s]){const o={}
129&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)
const r={}
130&s&&(r.$$scope={dirty:s,ctx:e}),a.$set(r),"storeitems"===t.subcmd2&&m.p(e,s)},i(t){d||(j(n.$$.fragment,t),j(a.$$.fragment,t),j(m),d=!0)},o(t){T(n.$$.fragment,t),T(a.$$.fragment,t),T(m),d=!1},d(t){t&&(h(o),h(c),h(u)),t&&n&&h(s),I(n,t),t&&a&&h(i),I(a,t),m&&m.d(t)}}}function Rt(t,e,n){const s=g()
let{showExtraLinks:o=!1}=e,{showQuickDropLinks:a=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,o=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,a=t.showQuickDropLinks)},[o,a,t=>t?"Hide":"Show",function(){S("storeitems","toggleShowExtraLinks"),n(0,o=!o),A("showExtraLinks",o),s("showExtraLinks",o)},function(){S("storeitems","toggleShowQuickDropLinks"),n(1,a=!a),A("showQuickDropLinks",a),s("showQuickDropLinks",a)},function(){S("storeitems","selectLocked"),s("selectLocked")}]}class Ut extends s{constructor(t){super(),o(this,t,Rt,Ot,a,{showExtraLinks:0,showQuickDropLinks:1})}}let Mt=null
function Ft(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?B(n.parentNode.parentNode.children[2]):e.item_name}function Gt(t){return Mt||(Mt=async function(t){const e=await xt()
return e?.items?v(H(e.items).map((([e,n])=>[e,{...n,item_name:Ft(t,n)}]))):{}}(t)),Mt}function Pt(t,e){return t[e]=(t[e]||0)+1,t}const Vt=(t,e,n)=>` [<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,Wt=(t,e,n)=>Vt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`),Yt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
const Zt=t=>Yt(`${F}items${G}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Jt=(t,e,n)=>t[jt]&&e[n.item_id]>1,Kt=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),qt=(t,e)=>t[Tt]&&-1===e.guild_tag
function zt(t,e){return e[0]()?t+e[1]():t}function Xt(t,e,n){return[[()=>t[Nt],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Yt(`${M}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${Zt(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>Jt(t,e,n),()=>Vt("fshBlack","","Check All")],[()=>Kt(t,n),()=>Wt("fshBlue","SENDS","Send")],[()=>qt(t,n),()=>Wt("fshRed","DROP","Drop")]]}function te(t,e,[n,s]){const o=n
t[Ct]&&(o.className=U[s.rarity].clas)
const a=Xt(t,e,s).reduce(zt,"")
o.innerHTML!==a&&(o.innerHTML=a)}async function ee(t){const e=await async function(){const t=dt()
if(!t.length)return[]
const e=await Gt(t)
return t.map((t=>[et(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),n=t[jt]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Pt,{}),13699:1}}(e):[]
O(3,it,[[3,e,0,R(te,t,n)]])}function ne(t){const e=function(t){const[e]=document.forms
return new Ut({props:{showExtraLinks:t[Nt],showQuickDropLinks:t[Tt]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[Nt]=e.detail,ee(t)})),e.$on("showQuickDropLinks",(e=>{t[Tt]=e.detail,ee(t)})),e.$on("selectLocked",(()=>{!async function(){const t=bt()
if(!t.length)return
const e=await xt()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}function se(){if(P())return
if(!lt())return
const t=It.map((t=>V(t)))
tt(),ne(t),t.some((t=>t))&&ee(t),W(Y(),Qt)}export{wt as M,xt as a,bt as b,St as c,pt as d,lt as e,dt as g,se as i}
//# sourceMappingURL=injectStoreItems-7478335d.js.map
