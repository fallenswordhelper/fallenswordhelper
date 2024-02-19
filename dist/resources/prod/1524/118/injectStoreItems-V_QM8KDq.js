import{ag as t,bI as e,$ as n,S as s,L as o,M as a,N as i,O as r,P as c,Q as u,R as l,T as d,U as m,V as f,X as p,_ as h,a0 as $,b4 as k,a1 as g,bg as w,a3 as L,W as b,a4 as x,a6 as _,D as v,f as S,s as y,a8 as D,k as E,bh as Q,am as I,b3 as N,bi as C,bc as T,bf as j,bj as A,ae as H,C as B,aq as M,aT as O,c as R,cI as U,cx as F,aM as G,aL as P,w as V,ai as W,o as q,p as X}from"./calfSystem-hszmVKJw.js"
import{m as Y,e as z,a as J,d as K}from"./dropItem-CL8N5QJj.js"
import{d as Z}from"./doStatTotal-B0PGURoa.js"
import{c as tt}from"./closestTr-B6tzN2bs.js"
import{e as et}from"./errorDialog-B4_TjdGG.js"
import{a as nt}from"./arrayFromRadioNodeList-DW7sTE2K.js"
import{d as st}from"./daLoadInventory-BWlBTX3u.js"
import{b as ot}from"./basicItem-DJLq_WAO.js"
import{f as at}from"./flattenItems-C4pfIrZn.js"
import{L as it}from"./LinkButtonBracketed-BDm5HJO2.js"
import{b as rt}from"./batch-DXYI5I4-.js"
let ct=0,ut=0
function lt(){if(!ut){const e="dropitems"===t.subcmd?"removeIndex[]":"storeIndex[]"
ct=document.forms[0]?.elements[e],ut=!0}return ct}function dt(){const t=lt()
return t?nt(t):[]}function mt(t,n){return e({subcmd:"sendtofolder",folder_id:t,folderItem:n})}async function ft(t,e){return await Y(e,t),{r:e}}function pt(t,e){return n(mt,ft,t,e)}function ht(t,e,n){const s=t.slice()
return s[5]=e[n],s}function $t(t){let e,n,s,o=t[5].name+""
return{c(){e=r("option"),n=L(o),e.__value=s=t[5].id,b(e,e.__value)},m(t,s){d(t,e,s),m(e,n)},p(t,a){1&a&&o!==(o=t[5].name+"")&&x(n,o),1&a&&s!==(s=t[5].id)&&(e.__value=s,b(e,e.__value))},d(t){t&&$(e)}}}function kt(t){let e,n,s,o,a,w,L,b,x,_,v,S=i(t[0]),y=[]
for(let e=0;e<S.length;e+=1)y[e]=$t(ht(t,S,e))
return{c(){e=r("tr"),n=r("td"),s=r("span"),s.textContent="Move selected items to:",o=c(),a=r("select")
for(let t=0;t<y.length;t+=1)y[t].c()
w=c(),L=r("span"),L.textContent=" ",b=c(),x=r("button"),x.textContent="Move",u(a,"class","customselect"),void 0===t[1]&&l((()=>t[3].call(a))),u(x,"class","custombutton svelte-vafhru"),u(x,"type","button"),u(n,"class","fshCenter")},m(i,r){d(i,e,r),m(e,n),m(n,s),m(n,o),m(n,a)
for(let t=0;t<y.length;t+=1)y[t]&&y[t].m(a,null)
f(a,t[1],!0),m(n,w),m(n,L),m(n,b),m(n,x),_||(v=[p(a,"change",t[3]),p(x,"click",t[2])],_=!0)},p(t,[e]){if(1&e){let n
for(S=i(t[0]),n=0;n<S.length;n+=1){const s=ht(t,S,n)
y[n]?y[n].p(s,e):(y[n]=$t(s),y[n].c(),y[n].m(a,null))}for(;n<y.length;n+=1)y[n].d(1)
y.length=S.length}3&e&&f(a,t[1])},i:h,o:h,d(t){t&&$(e),k(y,t),_=!1,g(v)}}}function gt(t,e,n){const s=w()
let o,{folders:a}=e
return t.$$set=t=>{"folders"in t&&n(0,a=t.folders)},[a,o,function(){s("move",o)},function(){o=_(this),n(1,o),n(0,a)}]}class wt extends s{constructor(t){super(),o(this,t,gt,kt,a,{folders:0})}}function Lt(){return dt().filter((t=>!v("fshHide",tt(t))))}let bt=null
function xt(){return bt||(bt=async function(){const t=await st()
if(t?.s)return{folders:z(t.r),items:S(at(t.r).map(ot).map((t=>[t.inv_id,t])))}}()),bt}function _t(t){return e({subcmd:"dodropitems",removeIndex:t})}async function vt(t){const e=await J(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function St(t){return n(_t,vt,t)}function yt(t){return tt(t.target).cells[0].children[0].value}async function Dt(t,e,n){!function(t){const e=tt(t)
e.cells[0].children[0].disabled=!0,E(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const s=await e([yt(t)])
s?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,n):et(s)}const Et=[["Check All",async function(t){const{items:e}=await xt()
y("storeitems","Check All of Type"),Lt().filter((n=>e[n.value]&&e[n.value].item_id===e[yt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{y("storeitems","Quick Send"),Dt(t,K,"Sent")}],["Quick Drop",t=>{y("storeitems","Quick Drop"),Dt(t,St,"Dropped")}]]
function Qt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&y("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||v("custombutton",t.target))return
const e=Et.find((([e])=>e===D(t.target)))
e&&e[1](t)}const It=0,Nt=1,Ct=2,Tt=4,jt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function At(t){let e,n,s=t[2](t[0])+""
return{c(){e=L(s),n=L(" AH and UFSG Links")},m(t,s){d(t,e,s),d(t,n,s)},p(t,n){1&n&&s!==(s=t[2](t[0])+"")&&x(e,s)},d(t){t&&($(e),$(n))}}}function Ht(t){let e,n,s=t[2](t[1])+""
return{c(){e=L(s),n=L(" Quick Drop links")},m(t,s){d(t,e,s),d(t,n,s)},p(t,n){2&n&&s!==(s=t[2](t[1])+"")&&x(e,s)},d(t){t&&($(e),$(n))}}}function Bt(t){let e
return{c(){e=L("Select All Guild Locked")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function Mt(e){let n,s,o,a,i,c,u,l
n=new it({props:{$$slots:{default:[At]},$$scope:{ctx:e}}}),n.$on("click",e[3]),a=new it({props:{$$slots:{default:[Ht]},$$scope:{ctx:e}}}),a.$on("click",e[4])
let m="storeitems"===t.subcmd2&&function(t){let e,n,s
return e=new it({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){n=r("div"),Q(e.$$.fragment),N(n,"display","contents"),N(n,"--button-width","10.8em")},m(t,o){d(t,n,o),C(e,n,null),s=!0},p(t,n){const s={}
128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(T(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){t&&e&&$(n),A(e,t)}}}(e)
return{c(){s=r("div"),Q(n.$$.fragment),o=L(" \n"),i=r("div"),Q(a.$$.fragment),c=L(" \n"),m&&m.c(),u=I(),N(s,"display","contents"),N(s,"--button-width","11.8em"),N(i,"display","contents"),N(i,"--button-width","10.6em")},m(t,e){d(t,s,e),C(n,s,null),d(t,o,e),d(t,i,e),C(a,i,null),d(t,c,e),m&&m.m(t,e),d(t,u,e),l=!0},p(e,[s]){const o={}
129&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)
const i={}
130&s&&(i.$$scope={dirty:s,ctx:e}),a.$set(i),"storeitems"===t.subcmd2&&m.p(e,s)},i(t){l||(T(n.$$.fragment,t),T(a.$$.fragment,t),T(m),l=!0)},o(t){j(n.$$.fragment,t),j(a.$$.fragment,t),j(m),l=!1},d(t){t&&($(o),$(c),$(u)),t&&n&&$(s),A(n,t),t&&a&&$(i),A(a,t),m&&m.d(t)}}}function Ot(t,e,n){const s=w()
let{showExtraLinks:o=!1}=e,{showQuickDropLinks:a=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,o=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,a=t.showQuickDropLinks)},[o,a,t=>t?"Hide":"Show",function(){y("storeitems","toggleShowExtraLinks"),n(0,o=!o),H("showExtraLinks",o),s("showExtraLinks",o)},function(){y("storeitems","toggleShowQuickDropLinks"),n(1,a=!a),H("showQuickDropLinks",a),s("showQuickDropLinks",a)},function(){y("storeitems","selectLocked"),s("selectLocked")}]}class Rt extends s{constructor(t){super(),o(this,t,Ot,Mt,a,{showExtraLinks:0,showQuickDropLinks:1})}}let Ut=null
function Ft(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?M(n.parentNode.parentNode.children[2]):e.item_name}function Gt(t){return Ut||(Ut=async function(t){const e=await xt()
return e?.items?S(B(e.items).map((([e,n])=>[e,{...n,item_name:Ft(t,n)}]))):{}}(t)),Ut}function Pt(t,e){return t[e]=(t[e]||0)+1,t}const Vt=(t,e,n)=>` [<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,Wt=(t,e,n)=>Vt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`),qt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
const Xt=t=>qt(`${G}items${P}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Yt=(t,e,n)=>t[Ct]&&e[n.item_id]>1,zt=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),Jt=(t,e)=>t[Tt]&&-1===e.guild_tag
function Kt(t,e){return e[0]()?t+e[1]():t}function Zt(t,e,n){return[[()=>t[It],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':qt(`${F}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${Xt(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>Yt(t,e,n),()=>Vt("fshBlack","","Check All")],[()=>zt(t,n),()=>Wt("fshBlue","SENDS","Send")],[()=>Jt(t,n),()=>Wt("fshRed","DROP","Drop")]]}function te(t,e,[n,s]){const o=n
t[Nt]&&(o.className=U[s.rarity].clas)
const a=Zt(t,e,s).reduce(Kt,"")
o.innerHTML!==a&&(o.innerHTML=a)}async function ee(t){const e=await async function(){const t=dt()
if(!t.length)return[]
const e=await Gt(t)
return t.map((t=>[tt(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),n=t[Ct]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Pt,{}),13699:1}}(e):[]
O(3,rt,[[3,e,0,R(te,t,n)]])}function ne(t){const e=function(t){const[e]=document.forms
return new Rt({props:{showExtraLinks:t[It],showQuickDropLinks:t[Tt]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[It]=e.detail,ee(t)})),e.$on("showQuickDropLinks",(e=>{t[Tt]=e.detail,ee(t)})),e.$on("selectLocked",(()=>{!async function(){const t=Lt()
if(!t.length)return
const e=await xt()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}function se(){if(V())return
if(!lt())return
const t=jt.map((t=>W(t)))
Z(),ne(t),t.some((t=>t))&&ee(t),q(X(),Qt)}export{wt as M,xt as a,Lt as b,St as c,pt as d,lt as e,dt as g,se as i}
//# sourceMappingURL=injectStoreItems-V_QM8KDq.js.map
