import{m as t,e,a as n,d as s}from"./dropItem-BQ0Xs17T.js"
import{ao as o,ci as a,$ as i,S as r,P as c,Q as u,R as l,T as d,U as m,bq as f,V as p,Y as h,_ as $,a0 as k,a1 as g,a3 as b,a4 as w,a5 as L,a6 as x,bH as _,a8 as S,Z as v,a9 as y,aa as D,G as E,ak as Q,f as N,s as C,ad as I,l as T,bJ as j,bD as A,bE as H,bK as B,bL as R,ax as U,bp as O,al as F,F as G,aH as M,bc as P,d as q,dk as V,d7 as W,b6 as Y,b5 as J,y as K,aq as Z,o as z,p as X}from"./calfSystem-BAeDn21M.js"
import{d as tt}from"./doStatTotal-tZMNla4Z.js"
import{e as et}from"./errorDialog-B4_TjdGG.js"
import{a as nt}from"./arrayFromRadioNodeList-C6bFFPg-.js"
import{d as st}from"./daLoadInventory-CO87bGXD.js"
import{b as ot}from"./basicItem-jvMH1Iol.js"
import{f as at}from"./flattenItems-BaJ8xXkd.js"
import{L as it}from"./LinkButtonBracketed-BBtbkBtS.js"
import{b as rt}from"./batch-DC6H1oLU.js"
let ct=0,ut=0
function lt(){if(!ut){const t="dropitems"===o.subcmd?"removeIndex[]":"storeIndex[]"
ct=document.forms[0]?.elements[t],ut=!0}return ct}function dt(){const t=lt()
return t?nt(t):[]}function mt(t,e){return a({subcmd:"sendtofolder",folder_id:t,folderItem:e})}async function ft(e,n){return await t(n,e),{r:n}}function pt(t,e){return i(mt,ft,t,e)}function ht(t,e,n){const s=t.slice()
return s[5]=e[n],s}function $t(t){let e,n,s,o=t[5].name+""
return{c(){e=b("option"),n=y(o),e.__value=s=t[5].id,v(e,e.__value)},m(t,s){$(t,e,s),k(e,n)},p(t,a){1&a&&o!==(o=t[5].name+"")&&S(n,o),1&a&&s!==(s=t[5].id)&&(e.__value=s,v(e,e.__value))},d(t){t&&m(e)}}}function kt(t){let e,n,s,o,a,i,r,c,u,_,S,v=l(t[0]),y=[]
for(let e=0;e<v.length;e+=1)y[e]=$t(ht(t,v,e))
return{c(){e=b("tr"),n=b("td"),s=b("span"),s.textContent="Move selected items to:",o=w(),a=b("select")
for(let t=0;t<y.length;t+=1)y[t].c()
i=w(),r=b("span"),r.textContent=" ",c=w(),u=b("button"),u.textContent="Move",L(a,"class","customselect"),void 0===t[1]&&x((()=>t[3].call(a))),L(u,"class","custombutton svelte-vafhru"),L(u,"type","button"),L(n,"class","fshCenter")},m(l,d){$(l,e,d),k(e,n),k(n,s),k(n,o),k(n,a)
for(let t=0;t<y.length;t+=1)y[t]&&y[t].m(a,null)
h(a,t[1],!0),k(n,i),k(n,r),k(n,c),k(n,u),_||(S=[g(a,"change",t[3]),g(u,"click",t[2])],_=!0)},p(t,[e]){if(1&e){let n
for(v=l(t[0]),n=0;n<v.length;n+=1){const s=ht(t,v,n)
y[n]?y[n].p(s,e):(y[n]=$t(s),y[n].c(),y[n].m(a,null))}for(;n<y.length;n+=1)y[n].d(1)
y.length=v.length}3&e&&h(a,t[1])},i:d,o:d,d(t){t&&m(e),f(y,t),_=!1,p(S)}}}function gt(t,e,n){const s=_()
let o,{folders:a}=e
return t.$$set=t=>{"folders"in t&&n(0,a=t.folders)},[a,o,function(){s("move",o)},function(){o=D(this),n(1,o),n(0,a)}]}class bt extends r{constructor(t){super(),c(this,t,gt,kt,u,{folders:0})}}function wt(){return dt().filter((t=>!E("fshHide",Q(t))))}let Lt=null
function xt(){return Lt||(Lt=async function(){const t=await st()
if(t?.s)return{folders:e(t.r),items:N(at(t.r).map(ot).map((t=>[t.inv_id,t])))}}()),Lt}function _t(t){return a({subcmd:"dodropitems",removeIndex:t})}async function St(t){const e=await n(t),s={s:0===e.r}
return s.s?s.r={items:[],deleted_items:t}:s.e={message:e.m},s}function vt(t){return i(_t,St,t)}function yt(t){return Q(t.target).cells[0].children[0].value}async function Dt(t,e,n){!function(t){const e=Q(t)
e.cells[0].children[0].disabled=!0,T(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const s=await e([yt(t)])
s?.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(t,n):et(s)}const Et=[["Check All",async function(t){const{items:e}=await xt()
C("storeitems","Check All of Type"),wt().filter((n=>e[n.value]&&e[n.value].item_id===e[yt(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{C("storeitems","Quick Send"),Dt(t,s,"Sent")}],["Quick Drop",t=>{C("storeitems","Quick Drop"),Dt(t,vt,"Dropped")}]]
function Qt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&C("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||E("custombutton",t.target))return
const e=Et.find((([e])=>e===I(t.target)))
e&&e[1](t)}const Nt=0,Ct=1,It=2,Tt=4,jt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function At(t){let e,n,s=t[2](t[0])+""
return{c(){e=y(s),n=y(" AH and UFSG Links")},m(t,s){$(t,e,s),$(t,n,s)},p(t,n){1&n&&s!==(s=t[2](t[0])+"")&&S(e,s)},d(t){t&&(m(e),m(n))}}}function Ht(t){let e,n,s=t[2](t[1])+""
return{c(){e=y(s),n=y(" Quick Drop links")},m(t,s){$(t,e,s),$(t,n,s)},p(t,n){2&n&&s!==(s=t[2](t[1])+"")&&S(e,s)},d(t){t&&(m(e),m(n))}}}function Bt(t){let e
return{c(){e=y("Select All Guild Locked")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function Rt(t){let e,n,s,a,i,r,c,u
e=new it({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),e.$on("click",t[3]),a=new it({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),a.$on("click",t[4])
let l="storeitems"===o.subcmd2&&function(t){let e,n,s
return e=new it({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){n=b("div"),R(e.$$.fragment),O(n,"display","contents"),O(n,"--button-width","10.8em")},m(t,o){$(t,n,o),B(e,n,null),s=!0},p(t,n){const s={}
128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){t&&e&&m(n),j(e,t)}}}(t)
return{c(){n=b("div"),R(e.$$.fragment),s=y(" \n"),i=b("div"),R(a.$$.fragment),r=y(" \n"),l&&l.c(),c=U(),O(n,"display","contents"),O(n,"--button-width","11.8em"),O(i,"display","contents"),O(i,"--button-width","10.6em")},m(t,o){$(t,n,o),B(e,n,null),$(t,s,o),$(t,i,o),B(a,i,null),$(t,r,o),l&&l.m(t,o),$(t,c,o),u=!0},p(t,[n]){const s={}
129&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)
const i={}
130&n&&(i.$$scope={dirty:n,ctx:t}),a.$set(i),"storeitems"===o.subcmd2&&l.p(t,n)},i(t){u||(H(e.$$.fragment,t),H(a.$$.fragment,t),H(l),u=!0)},o(t){A(e.$$.fragment,t),A(a.$$.fragment,t),A(l),u=!1},d(t){t&&(m(s),m(r),m(c)),t&&e&&m(n),j(e,t),t&&a&&m(i),j(a,t),l&&l.d(t)}}}function Ut(t,e,n){const s=_()
let{showExtraLinks:o=!1}=e,{showQuickDropLinks:a=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,o=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,a=t.showQuickDropLinks)},[o,a,t=>t?"Hide":"Show",function(){C("storeitems","toggleShowExtraLinks"),n(0,o=!o),F("showExtraLinks",o),s("showExtraLinks",o)},function(){C("storeitems","toggleShowQuickDropLinks"),n(1,a=!a),F("showQuickDropLinks",a),s("showQuickDropLinks",a)},function(){C("storeitems","selectLocked"),s("selectLocked")}]}class Ot extends r{constructor(t){super(),c(this,t,Ut,Rt,u,{showExtraLinks:0,showQuickDropLinks:1})}}let Ft=null
function Gt(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?M(n.parentNode.parentNode.children[2]):e.item_name}function Mt(t){return Ft||(Ft=async function(t){const e=await xt()
return e?.items?N(G(e.items).map((([e,n])=>[e,{...n,item_name:Gt(t,n)}]))):{}}(t)),Ft}function Pt(t,e){return t[e]=(t[e]||0)+1,t}const qt=(t,e,n)=>` [<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,Vt=(t,e,n)=>qt(`${t} actionButton tooltip-multiline fshNoWrap`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`),Wt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
const Yt=t=>Wt(`${Y}items${J}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),Jt=(t,e,n)=>t[It]&&e[n.item_id]>1,Kt=(t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag),Zt=(t,e)=>t[Tt]&&-1===e.guild_tag
function zt(t,e){return e[0]()?t+e[1]():t}function Xt(t,e,n){return[[()=>t[Nt],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':Wt(`${W}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${Yt(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>Jt(t,e,n),()=>qt("fshBlack","","Check All")],[()=>Kt(t,n),()=>Vt("fshBlue","SENDS","Send")],[()=>Zt(t,n),()=>Vt("fshRed","DROP","Drop")]]}function te(t,e,[n,s]){const o=n
t[Ct]&&(o.className=V[s.rarity].clas)
const a=Xt(t,e,s).reduce(zt,"")
o.innerHTML!==a&&(o.innerHTML=a)}async function ee(t){const e=await async function(){const t=dt()
if(!t.length)return[]
const e=await Mt(t)
return t.map((t=>[Q(t).cells[2],e[t.value]])).filter((([,t])=>t))}(),n=t[It]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(Pt,{}),13699:1}}(e):[]
P(3,rt,[[3,e,0,q(te,t,n)]])}function ne(t){const e=function(t){const[e]=document.forms
return new Ot({props:{showExtraLinks:t[Nt],showQuickDropLinks:t[Tt]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[Nt]=e.detail,ee(t)})),e.$on("showQuickDropLinks",(e=>{t[Tt]=e.detail,ee(t)})),e.$on("selectLocked",(()=>{!async function(){const t=wt()
if(!t.length)return
const e=await xt()
e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}function se(){if(K())return
if(!lt())return
const t=jt.map((t=>Z(t)))
tt(),ne(t),t.some((t=>t))&&ee(t),z(X(),Qt)}export{bt as M,xt as a,wt as b,vt as c,pt as d,lt as e,dt as g,se as i}
//# sourceMappingURL=injectStoreItems-DUmrq6np.js.map
