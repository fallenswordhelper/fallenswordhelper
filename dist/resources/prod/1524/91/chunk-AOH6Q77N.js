import{a as Rt,b as Ut,c as Ot}from"./chunk-DGTGHR4E.js";import{a as Ht}from"./chunk-TBT6LOFQ.js";import{a as Bt}from"./chunk-WM3ZDTFF.js";import{a as Nt}from"./chunk-EAADH4KW.js";import{a as Qt}from"./chunk-BFG42INY.js";import{a as At}from"./chunk-UH2OYRUK.js";import{a as $}from"./chunk-BZVD6YUU.js";import{a as q}from"./chunk-TYWB2WL2.js";import{a as yt}from"./chunk-Q3GHEBJN.js";import{a as G}from"./chunk-XVWB66RC.js";import{a as j}from"./chunk-L4KRSPGL.js";import{a as B}from"./chunk-KU3RNGBL.js";import{a as gt}from"./chunk-A7L7OPQH.js";import{a as wt}from"./chunk-UEEKDGD3.js";import{b as Lt}from"./chunk-2K77RJ6H.js";import{a as ut}from"./chunk-GDFIPJIS.js";import{a as xt}from"./chunk-L2YJ66JH.js";import{a as z}from"./chunk-WVJXETLD.js";import{a as vt}from"./chunk-KJAAAA67.js";import{a as $t}from"./chunk-WMVV5BR3.js";import{A as K,D as I,F as E,H as x,I as X,J as Et,P as U,T as Tt,X as T,Y as y,a as J,c as Dt,e as H,fa as O,ga as F,ha as P,ia as M,ja as V,s as g,t as p,u as d,v as Ct,w as h,x as b,y as R,z as It}from"./chunk-BGHXTXB3.js";import{a as L}from"./chunk-SLXSHGYV.js";import{a as St}from"./chunk-IS4DNI73.js";import{a as bt}from"./chunk-FNUCRPZA.js";import{b as _t}from"./chunk-WULU2HSE.js";import{Y as ht,c as pt,r as dt,u as kt}from"./chunk-KOVMYOV5.js";import{a as C}from"./chunk-AXUZC3IG.js";var Ft=0,Pt=0;function Q(){if(!Pt){let t=C.subcmd==="dropitems"?"removeIndex[]":"storeIndex[]";Ft=document.forms[0]?.elements[t],Pt=!0}return Ft}function A(){let t=Q();return t?Ht(t):[]}function N(){return A().filter(t=>!B("fshHide",$(t)))}var Z=null;function v(){return Z||(Z=At()),Z}function tt(t){return G({subcmd:"dodropitems",removeIndex:t})}async function et(t){let e=await Ot(t),o={s:e.r===0};return o.s?o.r={items:[],deleted_items:t}:o.e={message:e.m},o}function ot(t){return j(tt,et,t)}function Vt(t){return $(t.target).cells[0].children[0].value}async function Xt(t){let{items:e}=await v();L("storeitems","Check All of Type"),N().filter(o=>e[o.value]&&e[o.value].item_id===e[Vt(t)].item_id).forEach(o=>{o.checked=!o.disabled&&!o.checked})}function Zt(t){let e=$(t);e.cells[0].children[0].disabled=!0,St(".actionButton",e).forEach(o=>{o.disabled=!0,o.textContent="",o.removeAttribute("data-tooltip"),o.classList.add("inProgress")}),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}function te(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}async function Mt(t,e,o){Zt(t.target);let i=await e([Vt(t)]);i&&i.s?te(t,o):Bt(i)}var ee=[["Check All",Xt],["Quick Send",t=>{L("storeitems","Quick Send"),Mt(t,Ut,"Sent")}],["Quick Drop",t=>{L("storeitems","Quick Drop"),Mt(t,ot,"Dropped")}]];function nt(t){if(t.target.tagName==="A"&&["AH","UFSG"].includes(t.target.textContent)&&L("storeitems",t.target.textContent),t.target.tagName!=="BUTTON"||B("custombutton",t.target))return;let e=ee.find(([o])=>o===ut(t.target));e&&e[1](t)}var Gt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"];function oe(t){let e=t[2](t[0])+"",o,i;return{c(){o=b(e),i=b(" AH and UFSG Links")},m(n,r){p(n,o,r),p(n,i,r)},p(n,r){r&1&&e!==(e=n[2](n[0])+"")&&E(o,e)},d(n){n&&d(o),n&&d(i)}}}function ne(t){let e=t[2](t[1])+"",o,i;return{c(){o=b(e),i=b(" Quick Drop links")},m(n,r){p(n,o,r),p(n,i,r)},p(n,r){r&2&&e!==(e=n[2](n[1])+"")&&E(o,e)},d(n){n&&d(o),n&&d(i)}}}function re(t){let e,o,i;return e=new q({props:{$$slots:{default:[ie]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){o=h("div"),O(e.$$.fragment),x(o,"display","contents"),x(o,"--button-width","10.8em")},m(n,r){p(n,o,r),F(e,o,null),i=!0},p(n,r){let l={};r&128&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){i||(T(e.$$.fragment,n),i=!0)},o(n){y(e.$$.fragment,n),i=!1},d(n){n&&e&&d(o),P(e,n)}}}function ie(t){let e;return{c(){e=b("Select All Guild Locked")},m(o,i){p(o,e,i)},d(o){o&&d(e)}}}function se(t){let e,o,i,n,r,l,_,k;e=new q({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),e.$on("click",t[3]),n=new q({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}}),n.$on("click",t[4]);let c=C.subcmd2==="storeitems"&&re(t);return{c(){o=h("div"),O(e.$$.fragment),i=b(`\xA0
`),r=h("div"),O(n.$$.fragment),l=b(`\xA0
`),c&&c.c(),_=It(),x(o,"display","contents"),x(o,"--button-width","11.8em"),x(r,"display","contents"),x(r,"--button-width","10.6em")},m(s,u){p(s,o,u),F(e,o,null),p(s,i,u),p(s,r,u),F(n,r,null),p(s,l,u),c&&c.m(s,u),p(s,_,u),k=!0},p(s,[u]){let w={};u&129&&(w.$$scope={dirty:u,ctx:s}),e.$set(w);let a={};u&130&&(a.$$scope={dirty:u,ctx:s}),n.$set(a),C.subcmd2==="storeitems"&&c.p(s,u)},i(s){k||(T(e.$$.fragment,s),T(n.$$.fragment,s),T(c),k=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),y(c),k=!1},d(s){s&&e&&d(o),P(e,s),s&&d(i),s&&n&&d(r),P(n,s),s&&d(l),c&&c.d(s),s&&d(_)}}}function le(t,e,o){let i=U(),n=s=>s?"Hide":"Show",{showExtraLinks:r=!1}=e,{showQuickDropLinks:l=!1}=e;function _(){L("storeitems","toggleShowExtraLinks"),o(0,r=!r),z("showExtraLinks",r),i("showExtraLinks",r)}function k(){L("storeitems","toggleShowQuickDropLinks"),o(1,l=!l),z("showQuickDropLinks",l),i("showQuickDropLinks",l)}function c(){L("storeitems","selectLocked"),i("selectLocked")}return t.$$set=s=>{"showExtraLinks"in s&&o(0,r=s.showExtraLinks),"showQuickDropLinks"in s&&o(1,l=s.showQuickDropLinks)},[r,l,n,_,k,c]}var rt=class extends V{constructor(e){super(),M(this,e,le,se,H,{showExtraLinks:0,showQuickDropLinks:1})}},jt=rt;var it=null;function ce(t,e){if(e.item_id!==13699)return e.item_name;let o=t.find(i=>i.value===String(e.inv_id));return o?wt(o.parentNode.parentNode.children[2]):e.item_name}async function ae(t){let e=await v();return e.items?yt(xt(e.items).map(([o,i])=>[o,{...i,item_name:ce(t,i)}])):{}}function me(t){return it||(it=ae(t)),it}async function st(){let t=A();if(!t.length)return[];let e=await me(t);return t.map(o=>[$(o).cells[2],e[o.value]]).filter(([,o])=>o)}function pe(t,e){return t[e]=(t[e]||0)+1,t}function de(t){return{...t.map(([,e])=>e.item_id).reduce(pe,{}),13699:1}}var ke=t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`,Yt=(t,e,o)=>` [<button class="fshStoreItemsButton ${t}"${e}>${o}</button>]`,qt=(t,e,o)=>Yt(`${t} actionButton tooltip-multiline fshNoWrap`,ke(e),`Quick ${o}`),zt=(t,e,o)=>`[<a href="${t}"${e}>${o}</a>]`;function he(t){return t.bound?'<span class="aHSpacer"></span>':zt(`${kt}${encodeURIComponent(t.item_name)}`,"","AH")}var _e=t=>zt(`${ht}items${dt}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"),ge=(t,e,o)=>t[2]&&e[o.item_id]>1,be=(t,e)=>t[3]&&(!e.bound||e.guild_tag!==-1),we=(t,e)=>t[4]&&e.guild_tag===-1;function Le(t,e){return e[0]()?t+e[1]():t}function xe(t,e,o){return[[()=>t[0],()=>`${he(o)} ${_e(o)}`],[()=>!0,()=>`&nbsp;${o.item_name}`],[()=>ge(t,e,o),()=>Yt("fshBlack","","Check All")],[()=>be(t,o),()=>qt("fshBlue","SENDS","Send")],[()=>we(t,o),()=>qt("fshRed","DROP","Drop")]]}function $e(t,e,[o,i]){let n=o;t[1]&&(n.className=pt[i.rarity].clas);let r=xe(t,e,i).reduce(Le,"");n.innerHTML!==r&&(n.innerHTML=r)}async function S(t){let e=await st(),o=t[2]?de(e):[];gt(3,Nt,[[3,e,0,bt($e,t,o)]])}function ve(t){let[e]=document.forms;return new jt({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}async function Se(){let t=N();if(!t.length)return;let e=await v();!e.items||t.map(o=>[o,e.items[o.value]]).filter(([,o])=>o).forEach(([o,i])=>{o.checked=!o.disabled&&i.guild_tag!==-1})}function lt(t){let e=ve(t);e.$on("showExtraLinks",o=>{t[0]=o.detail,S(t)}),e.$on("showQuickDropLinks",o=>{t[4]=o.detail,S(t)}),e.$on("selectLocked",()=>{Se()})}function De(){if(vt()||!Q())return;let e=Gt.map(o=>_t(o));Qt(),lt(e),e.some(o=>o)&&S(e),$t(Lt(),nt)}function ct(t,e){return G({subcmd:"sendtofolder",folder_id:t,folderItem:e})}function at(t,e){return Rt(e,t).then(()=>({r:e}))}function Ce(t,e){return j(ct,at,t,e)}function Jt(t,e,o){let i=t.slice();return i[5]=e[o],i}function Kt(t){let e,o=t[5].name+"",i,n;return{c(){e=h("option"),i=b(o),e.__value=n=t[5].id,e.value=e.__value},m(r,l){p(r,e,l),g(e,i)},p(r,l){l&1&&o!==(o=r[5].name+"")&&E(i,o),l&1&&n!==(n=r[5].id)&&(e.__value=n,e.value=e.__value)},d(r){r&&d(e)}}}function Ie(t){let e,o,i,n,r,l,_,k,c,s,u,w=t[0],a=[];for(let m=0;m<w.length;m+=1)a[m]=Kt(Jt(t,w,m));return{c(){e=h("tr"),o=h("td"),i=h("span"),i.textContent="Move selected items to:",n=R(),r=h("select");for(let m=0;m<a.length;m+=1)a[m].c();l=R(),_=h("span"),_.textContent="\xA0",k=R(),c=h("button"),c.textContent="Move",I(r,"class","customselect"),t[1]===void 0&&Tt(()=>t[3].call(r)),I(c,"class","custombutton"),I(c,"type","button"),I(o,"class","fshCenter")},m(m,D){p(m,e,D),g(e,o),g(o,i),g(o,n),g(o,r);for(let f=0;f<a.length;f+=1)a[f].m(r,null);X(r,t[1]),g(o,l),g(o,_),g(o,k),g(o,c),s||(u=[K(r,"change",t[3]),K(c,"click",t[2])],s=!0)},p(m,[D]){if(D&1){w=m[0];let f;for(f=0;f<w.length;f+=1){let ft=Jt(m,w,f);a[f]?a[f].p(ft,D):(a[f]=Kt(ft),a[f].c(),a[f].m(r,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=w.length}D&3&&X(r,m[1])},i:J,o:J,d(m){m&&d(e),Ct(a,m),s=!1,Dt(u)}}}function Ee(t,e,o){let i=U(),{folders:n}=e,r;function l(){i("move",r)}function _(){r=Et(this),o(1,r),o(0,n)}return t.$$set=k=>{"folders"in k&&o(0,n=k.folders)},[n,r,l,_]}var mt=class extends V{constructor(e){super(),M(this,e,Ee,Ie,H,{folders:0})}},sn=mt;export{Q as a,A as b,Ce as c,sn as d,N as e,v as f,ot as g,De as h};
//# sourceMappingURL=chunk-AOH6Q77N.js.map
