import{am as t,cf as e,$ as n,S as s,O as o,P as a,Q as i,R as r,T as c,U as u,V as l,W as d,X as m,Y as f,_ as p,a3 as h,a4 as $,bp as k,a5 as g,bE as b,a7 as w,Z as L,a8 as x,a9 as v,F as _,ai as S,f as y,s as D,ac as E,k as Q,bF as N,av as C,bo as I,bG as T,bA as j,bD as A,bH as H,aj as B,E as F,aF as O,bb as R,c as U,de as G,d0 as M,b3 as P,b2 as V,x as W,ao as X,o as Y,p as q}from"./calfSystem-ChzN4Q-P.js"
import{m as Z,e as z,a as J,d as K}from"./dropItem-C0wwOEuw.js"
import{d as tt}from"./doStatTotal-CXgr6RmM.js"
import{e as et}from"./errorDialog-B4_TjdGG.js"
import{a as nt}from"./arrayFromRadioNodeList-C70oEO0t.js"
import{d as st}from"./daLoadInventory-BJGfaSuo.js"
import{b as ot}from"./basicItem-Dp_qF4zf.js"
import{f as at}from"./flattenItems-DRKC5Ux6.js"
import{L as it}from"./LinkButtonBracketed-DOkZNd-3.js"
import{b as rt}from"./batch-CcQbYj5o.js"
let ct=0,ut=0
function lt(){if(!ut){const e="dropitems"===t.subcmd?"removeIndex[]":"storeIndex[]"
ct=document.forms[0]?.elements[e],ut=!0}return ct}function dt(){const t=lt()
return t?nt(t):[]}function mt(t,n){return e({subcmd:"sendtofolder",folder_id:t,folderItem:n})}async function ft(t,e){return await Z(e,t),{r:e}}function pt(t,e){return n(mt,ft,t,e)}function ht(t,e,n){const s=t.slice()
return s[5]=e[n],s}function $t(t){let e,n,s,o=t[5].name+""
return{c(){e=r("option"),n=w(o),e.__value=s=t[5].id,L(e,e.__value)},m(t,s){d(t,e,s),m(e,n)},p(t,a){1&a&&o!==(o=t[5].name+"")&&x(n,o),1&a&&s!==(s=t[5].id)&&(e.__value=s,L(e,e.__value))},d(t){t&&$(e)}}}function kt(t){let e,n,s,o,a,b,w,L,x,v,_,S=i(t[0]),y=[]
for(let e=0;e<S.length;e+=1)y[e]=$t(ht(t,S,e))
return{c(){e=r("tr"),n=r("td"),s=r("span"),s.textContent="Move selected items to:",o=c(),a=r("select")
for(let t=0;t<y.length;t+=1)y[t].c()
b=c(),w=r("span"),w.textContent=" ",L=c(),x=r("button"),x.textContent="Move",u(a,"class","customselect"),void 0===t[1]&&l((()=>t[3].call(a))),u(x,"class","custombutton svelte-vafhru"),u(x,"type","button"),u(n,"class","fshCenter")},m(i,r){d(i,e,r),m(e,n),m(n,s),m(n,o),m(n,a)
for(let t=0;t<y.length;t+=1)y[t]&&y[t].m(a,null)
f(a,t[1],!0),m(n,b),m(n,w),m(n,L),m(n,x),v||(_=[p(a,"change",t[3]),p(x,"click",t[2])],v=!0)},p(t,[e]){if(1&e){let n
for(S=i(t[0]),n=0;n<S.length;n+=1){const s=ht(t,S,n)
y[n]?y[n].p(s,e):(y[n]=$t(s),y[n].c(),y[n].m(a,null))}for(;n<y.length;n+=1)y[n].d(1)
y.length=S.length}3&e&&f(a,t[1])},i:h,o:h,d(t){t&&$(e),k(y,t),v=!1,g(_)}}}function gt(t,e,n){const s=b()
let o,{folders:a}=e
return t.$$set=t=>{"folders"in t&&n(0,a=t.folders)},[a,o,function(){s("move",o)},function(){o=v(this),n(1,o),n(0,a)}]}class bt extends s{constructor(t){super(),o(this,t,gt,kt,a,{folders:0})}}function wt(){return dt().filter((t=>!_("fshHide",S(t))))}let Lt=null
function xt(){return Lt||(Lt=async function(){const t=await st()
if(t?.s)return{folders:z(t.r),items:y(at(t.r).map(ot).map((t=>[t.inv_id,t])))}}()),Lt}function vt(t){return e({subcmd:"dodropitems",removeIndex:t})}async function _t(t){const e=await J(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function St(t){return n(vt,_t,t)}function yt(t){return S(t.target).cells[0].children[0].value}async function Dt(t,e,n){!function(t){const e=S(t)
e.cells[0].children[0].disabled=!0,Q(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const s=await e([yt(t)])
s?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,n):et(s)}const Et=[["Check All",async function(t){const{items:e}=await xt()
D("storeitems","Check All of Type"),wt().filter((n=>e[n.value]&&e[n.value].item_id===e[yt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{D("storeitems","Quick Send"),Dt(t,K,"Sent")}],["Quick Drop",t=>{D("storeitems","Quick Drop"),Dt(t,St,"Dropped")}]]
function Qt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&D("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||_("custombutton",t.target))return
const e=Et.find((([e])=>e===E(t.target)))
e&&e[1](t)}const Nt=0,Ct=1,It=2,Tt=4,jt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function At(t){let e,n,s=t[2](t[0])+""
return{c(){e=w(s),n=w(" AH and UFSG Links")},m(t,s){d(t,e,s),d(t,n,s)},p(t,n){1&n&&s!==(s=t[2](t[0])+"")&&x(e,s)},d(t){t&&($(e),$(n))}}}function Ht(t){let e,n,s=t[2](t[1])+""
return{c(){e=w(s),n=w(" Quick Drop links")},m(t,s){d(t,e,s),d(t,n,s)},p(t,n){2&n&&s!==(s=t[2](t[1])+"")&&x(e,s)},d(t){t&&($(e),$(n))}}}function Bt(t){let e
return{c(){e=w("Select All Guild Locked")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function Ft(e){let n,s,o,a,i,c,u,l
n=new it({props:{$$slots:{default:[At]},$$scope:{ctx:e}}}),n.$on("click",e[3]),a=new it({props:{$$slots:{default:[Ht]},$$scope:{ctx:e}}}),a.$on("click",e[4])
let m="storeitems"===t.subcmd2&&function(t){let e,n,s
return e=new it({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){n=r("div"),N(e.$$.fragment),I(n,"display","contents"),I(n,"--button-width","10.8em")},m(t,o){d(t,n,o),T(e,n,null),s=!0},p(t,n){const s={}
128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){t&&e&&$(n),H(e,t)}}}(e)
return{c(){s=r("div"),N(n.$$.fragment),o=w(" \n"),i=r("div"),N(a.$$.fragment),c=w(" \n"),m&&m.c(),u=C(),I(s,"display","contents"),I(s,"--button-width","11.8em"),I(i,"display","contents"),I(i,"--button-width","10.6em")},m(t,e){d(t,s,e),T(n,s,null),d(t,o,e),d(t,i,e),T(a,i,null),d(t,c,e),m&&m.m(t,e),d(t,u,e),l=!0},p(e,[s]){const o={}
129&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)
const i={}
130&s&&(i.$$scope={dirty:s,ctx:e}),a.$set(i),"storeitems"===t.subcmd2&&m.p(e,s)},i(t){l||(j(n.$$.fragment,t),j(a.$$.fragment,t),j(m),l=!0)},o(t){A(n.$$.fragment,t),A(a.$$.fragment,t),A(m),l=!1},d(t){t&&($(o),$(c),$(u)),t&&n&&$(s),H(n,t),t&&a&&$(i),H(a,t),m&&m.d(t)}}}function Ot(t,e,n){const s=b()
let{showExtraLinks:o=!1}=e,{showQuickDropLinks:a=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,o=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,a=t.showQuickDropLinks)},[o,a,t=>t?"Hide":"Show",function(){D("storeitems","toggleShowExtraLinks"),n(0,o=!o),B("showExtraLinks",o),s("showExtraLinks",o)},function(){D("storeitems","toggleShowQuickDropLinks"),n(1,a=!a),B("showQuickDropLinks",a),s("showQuickDropLinks",a)},function(){D("storeitems","selectLocked"),s("selectLocked")}]}class Rt extends s{constructor(t){super(),o(this,t,Ot,Ft,a,{showExtraLinks:0,showQuickDropLinks:1})}}let Ut=null
function Gt(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?O(n.parentNode.parentNode.children[2]):e.item_name}function Mt(t){return Ut||(Ut=async function(t){const e=await xt()
return e?.items?y(F(e.items).map((([e,n])=>[e,{...n,item_name:Gt(t,n)}]))):{}}(t)),Ut}function Pt(t,e){return t[e]=(t[e]||0)+1,t}const Vt=(t,e,n)=>` [<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,Wt=(t,e,n)=>Vt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`),Xt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
const Yt=t=>Xt(`${P}items${V}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),qt=(t,e,n)=>t[It]&&e[n.item_id]>1,Zt=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),zt=(t,e)=>t[Tt]&&-1===e.guild_tag
function Jt(t,e){return e[0]()?t+e[1]():t}function Kt(t,e,n){return[[()=>t[Nt],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Xt(`${M}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${Yt(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>qt(t,e,n),()=>Vt("fshBlack","","Check All")],[()=>Zt(t,n),()=>Wt("fshBlue","SENDS","Send")],[()=>zt(t,n),()=>Wt("fshRed","DROP","Drop")]]}function te(t,e,[n,s]){const o=n
t[Ct]&&(o.className=G[s.rarity].clas)
const a=Kt(t,e,s).reduce(Jt,"")
o.innerHTML!==a&&(o.innerHTML=a)}async function ee(t){const e=await async function(){const t=dt()
if(!t.length)return[]
const e=await Mt(t)
return t.map((t=>[S(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),n=t[It]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Pt,{}),13699:1}}(e):[]
R(3,rt,[[3,e,0,U(te,t,n)]])}function ne(t){const e=function(t){const[e]=document.forms
return new Rt({props:{showExtraLinks:t[Nt],showQuickDropLinks:t[Tt]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[Nt]=e.detail,ee(t)})),e.$on("showQuickDropLinks",(e=>{t[Tt]=e.detail,ee(t)})),e.$on("selectLocked",(()=>{!async function(){const t=wt()
if(!t.length)return
const e=await xt()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}function se(){if(W())return
if(!lt())return
const t=jt.map((t=>X(t)))
tt(),ne(t),t.some((t=>t))&&ee(t),Y(q(),Qt)}export{bt as M,xt as a,wt as b,St as c,pt as d,lt as e,dt as g,se as i}
//# sourceMappingURL=injectStoreItems-CJhTEwHt.js.map