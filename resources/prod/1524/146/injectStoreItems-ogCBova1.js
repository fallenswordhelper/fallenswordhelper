import{ao as t,ci as e,$ as n,S as s,P as o,Q as a,R as i,T as r,U as c,bq as u,V as l,Y as d,_ as m,a0 as f,a1 as p,a3 as h,a4 as $,a5 as k,a6 as g,bH as b,a8 as w,Z as L,a9 as x,aa as _,G as S,ak as v,f as y,s as D,ad as E,l as Q,bJ as N,bD as C,bE as I,bK as T,bL as j,ax as A,bp as H,al as B,F as R,aH as U,bc as O,d as F,dk as G,d7 as M,b6 as P,b5 as q,y as V,aq as W,o as Y,p as J}from"./calfSystem-DiXGAkgN.js"
import{m as K,e as Z,a as z,d as X}from"./dropItem-Czf2Zf9J.js"
import{d as tt}from"./doStatTotal-DEO625vL.js"
import{e as et}from"./errorDialog-B4_TjdGG.js"
import{a as nt}from"./arrayFromRadioNodeList-DcVbkydp.js"
import{d as st}from"./daLoadInventory-DgtAUlVi.js"
import{b as ot}from"./basicItem-jvMH1Iol.js"
import{f as at}from"./flattenItems-DhYCzXK-.js"
import{L as it}from"./LinkButtonBracketed-BJfzmIPV.js"
import{b as rt}from"./batch-C8ATbTx-.js"
let ct=0,ut=0
function lt(){if(!ut){const e="dropitems"===t.subcmd?"removeIndex[]":"storeIndex[]"
ct=document.forms[0]?.elements[e],ut=!0}return ct}function dt(){const t=lt()
return t?nt(t):[]}function mt(t,n){return e({subcmd:"sendtofolder",folder_id:t,folderItem:n})}async function ft(t,e){return await K(e,t),{r:e}}function pt(t,e){return n(mt,ft,t,e)}function ht(t,e,n){const s=t.slice()
return s[5]=e[n],s}function $t(t){let e,n,s,o=t[5].name+""
return{c(){e=h("option"),n=x(o),e.__value=s=t[5].id,L(e,e.__value)},m(t,s){m(t,e,s),f(e,n)},p(t,a){1&a&&o!==(o=t[5].name+"")&&w(n,o),1&a&&s!==(s=t[5].id)&&(e.__value=s,L(e,e.__value))},d(t){t&&c(e)}}}function kt(t){let e,n,s,o,a,b,w,L,x,_,S,v=i(t[0]),y=[]
for(let e=0;e<v.length;e+=1)y[e]=$t(ht(t,v,e))
return{c(){e=h("tr"),n=h("td"),s=h("span"),s.textContent="Move selected items to:",o=$(),a=h("select")
for(let t=0;t<y.length;t+=1)y[t].c()
b=$(),w=h("span"),w.textContent=" ",L=$(),x=h("button"),x.textContent="Move",k(a,"class","customselect"),void 0===t[1]&&g((()=>t[3].call(a))),k(x,"class","custombutton svelte-vafhru"),k(x,"type","button"),k(n,"class","fshCenter")},m(i,r){m(i,e,r),f(e,n),f(n,s),f(n,o),f(n,a)
for(let t=0;t<y.length;t+=1)y[t]&&y[t].m(a,null)
d(a,t[1],!0),f(n,b),f(n,w),f(n,L),f(n,x),_||(S=[p(a,"change",t[3]),p(x,"click",t[2])],_=!0)},p(t,[e]){if(1&e){let n
for(v=i(t[0]),n=0;n<v.length;n+=1){const s=ht(t,v,n)
y[n]?y[n].p(s,e):(y[n]=$t(s),y[n].c(),y[n].m(a,null))}for(;n<y.length;n+=1)y[n].d(1)
y.length=v.length}3&e&&d(a,t[1])},i:r,o:r,d(t){t&&c(e),u(y,t),_=!1,l(S)}}}function gt(t,e,n){const s=b()
let o,{folders:a}=e
return t.$$set=t=>{"folders"in t&&n(0,a=t.folders)},[a,o,function(){s("move",o)},function(){o=_(this),n(1,o),n(0,a)}]}class bt extends s{constructor(t){super(),o(this,t,gt,kt,a,{folders:0})}}function wt(){return dt().filter((t=>!S("fshHide",v(t))))}let Lt=null
function xt(){return Lt||(Lt=async function(){const t=await st()
if(t?.s)return{folders:Z(t.r),items:y(at(t.r).map(ot).map((t=>[t.inv_id,t])))}}()),Lt}function _t(t){return e({subcmd:"dodropitems",removeIndex:t})}async function St(t){const e=await z(t),n={s:0===e.r}
return n.s?n.r={items:[],deleted_items:t}:n.e={message:e.m},n}function vt(t){return n(_t,St,t)}function yt(t){return v(t.target).cells[0].children[0].value}async function Dt(t,e,n){!function(t){const e=v(t)
e.cells[0].children[0].disabled=!0,Q(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const s=await e([yt(t)])
s?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,n):et(s)}const Et=[["Check All",async function(t){const{items:e}=await xt()
D("storeitems","Check All of Type"),wt().filter((n=>e[n.value]&&e[n.value].item_id===e[yt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{D("storeitems","Quick Send"),Dt(t,X,"Sent")}],["Quick Drop",t=>{D("storeitems","Quick Drop"),Dt(t,vt,"Dropped")}]]
function Qt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&D("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||S("custombutton",t.target))return
const e=Et.find((([e])=>e===E(t.target)))
e&&e[1](t)}const Nt=0,Ct=1,It=2,Tt=4,jt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function At(t){let e,n,s=t[2](t[0])+""
return{c(){e=x(s),n=x(" AH and UFSG Links")},m(t,s){m(t,e,s),m(t,n,s)},p(t,n){1&n&&s!==(s=t[2](t[0])+"")&&w(e,s)},d(t){t&&(c(e),c(n))}}}function Ht(t){let e,n,s=t[2](t[1])+""
return{c(){e=x(s),n=x(" Quick Drop links")},m(t,s){m(t,e,s),m(t,n,s)},p(t,n){2&n&&s!==(s=t[2](t[1])+"")&&w(e,s)},d(t){t&&(c(e),c(n))}}}function Bt(t){let e
return{c(){e=x("Select All Guild Locked")},m(t,n){m(t,e,n)},d(t){t&&c(e)}}}function Rt(e){let n,s,o,a,i,r,u,l
n=new it({props:{$$slots:{default:[At]},$$scope:{ctx:e}}}),n.$on("click",e[3]),a=new it({props:{$$slots:{default:[Ht]},$$scope:{ctx:e}}}),a.$on("click",e[4])
let d="storeitems"===t.subcmd2&&function(t){let e,n,s
return e=new it({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){n=h("div"),j(e.$$.fragment),H(n,"display","contents"),H(n,"--button-width","10.8em")},m(t,o){m(t,n,o),T(e,n,null),s=!0},p(t,n){const s={}
128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){t&&e&&c(n),N(e,t)}}}(e)
return{c(){s=h("div"),j(n.$$.fragment),o=x(" \n"),i=h("div"),j(a.$$.fragment),r=x(" \n"),d&&d.c(),u=A(),H(s,"display","contents"),H(s,"--button-width","11.8em"),H(i,"display","contents"),H(i,"--button-width","10.6em")},m(t,e){m(t,s,e),T(n,s,null),m(t,o,e),m(t,i,e),T(a,i,null),m(t,r,e),d&&d.m(t,e),m(t,u,e),l=!0},p(e,[s]){const o={}
129&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)
const i={}
130&s&&(i.$$scope={dirty:s,ctx:e}),a.$set(i),"storeitems"===t.subcmd2&&d.p(e,s)},i(t){l||(I(n.$$.fragment,t),I(a.$$.fragment,t),I(d),l=!0)},o(t){C(n.$$.fragment,t),C(a.$$.fragment,t),C(d),l=!1},d(t){t&&(c(o),c(r),c(u)),t&&n&&c(s),N(n,t),t&&a&&c(i),N(a,t),d&&d.d(t)}}}function Ut(t,e,n){const s=b()
let{showExtraLinks:o=!1}=e,{showQuickDropLinks:a=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,o=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,a=t.showQuickDropLinks)},[o,a,t=>t?"Hide":"Show",function(){D("storeitems","toggleShowExtraLinks"),n(0,o=!o),B("showExtraLinks",o),s("showExtraLinks",o)},function(){D("storeitems","toggleShowQuickDropLinks"),n(1,a=!a),B("showQuickDropLinks",a),s("showQuickDropLinks",a)},function(){D("storeitems","selectLocked"),s("selectLocked")}]}class Ot extends s{constructor(t){super(),o(this,t,Ut,Rt,a,{showExtraLinks:0,showQuickDropLinks:1})}}let Ft=null
function Gt(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?U(n.parentNode.parentNode.children[2]):e.item_name}function Mt(t){return Ft||(Ft=async function(t){const e=await xt()
return e?.items?y(R(e.items).map((([e,n])=>[e,{...n,item_name:Gt(t,n)}]))):{}}(t)),Ft}function Pt(t,e){return t[e]=(t[e]||0)+1,t}const qt=(t,e,n)=>` [<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,Vt=(t,e,n)=>qt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`),Wt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
const Yt=t=>Wt(`${P}items${q}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Jt=(t,e,n)=>t[It]&&e[n.item_id]>1,Kt=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),Zt=(t,e)=>t[Tt]&&-1===e.guild_tag
function zt(t,e){return e[0]()?t+e[1]():t}function Xt(t,e,n){return[[()=>t[Nt],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Wt(`${M}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${Yt(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>Jt(t,e,n),()=>qt("fshBlack","","Check All")],[()=>Kt(t,n),()=>Vt("fshBlue","SENDS","Send")],[()=>Zt(t,n),()=>Vt("fshRed","DROP","Drop")]]}function te(t,e,[n,s]){const o=n
t[Ct]&&(o.className=G[s.rarity].clas)
const a=Xt(t,e,s).reduce(zt,"")
o.innerHTML!==a&&(o.innerHTML=a)}async function ee(t){const e=await async function(){const t=dt()
if(!t.length)return[]
const e=await Mt(t)
return t.map((t=>[v(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),n=t[It]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Pt,{}),13699:1}}(e):[]
O(3,rt,[[3,e,0,F(te,t,n)]])}function ne(t){const e=function(t){const[e]=document.forms
return new Ot({props:{showExtraLinks:t[Nt],showQuickDropLinks:t[Tt]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[Nt]=e.detail,ee(t)})),e.$on("showQuickDropLinks",(e=>{t[Tt]=e.detail,ee(t)})),e.$on("selectLocked",(()=>{!async function(){const t=wt()
if(!t.length)return
const e=await xt()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}function se(){if(V())return
if(!lt())return
const t=jt.map((t=>W(t)))
tt(),ne(t),t.some((t=>t))&&ee(t),Y(J(),Qt)}export{bt as M,xt as a,wt as b,vt as c,pt as d,lt as e,dt as g,se as i}
//# sourceMappingURL=injectStoreItems-ogCBova1.js.map
