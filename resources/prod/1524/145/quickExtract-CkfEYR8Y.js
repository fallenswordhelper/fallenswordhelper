import{i as t}from"./Modal-Cc9OeAYd.js"
import{dl as e,bu as n,b5 as s,S as c,O as l,P as o,bF as i,bG as a,bA as r,bD as u,bH as m,ao as f,cO as d,cP as p,Q as g,as as $,R as h,a7 as b,T as x,U as k,W as y,X as v,_,cQ as S,at as j,a4 as w,bp as P,a5 as E,s as I,aj as M,u as q,bU as L,H as B,bo as C,a8 as T,a3 as A,av as F,bB as O,bC as Q,cJ as Y}from"./calfSystem-CvwhhJv4.js"
import{d as D}from"./daUseItem-DGqwb-TL.js"
import{S as H,i as R}from"./SelectInST-DNzCu0u1.js"
import{L as U}from"./LinkButton-DGK9y3f9.js"
import{L as N}from"./LinkButtonBracketed-CA2auUeo.js"
import{c as W}from"./confirm-NdPgDHCg.js"
import{M as Z}from"./ModalTitled-BuRy86X7.js"
import"./daLoadInventory-4yalcPvn.js"
import"./basicItem-BMNuU5Rv.js"
import"./flattenItems-DOc6e0_m.js"
function z(t){return`${t.amount} x ${e[t.type]}`}const G=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(z).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const J=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,X=t=>`background-image: url(${s}items/${t}.gif)`
function K(t,e,n){const s=t.slice()
return s[28]=e[n].count,s[29]=e[n].delPending,s[30]=e[n].item_name,s[31]=e[n].style,s[32]=e[n].tip,s[34]=n,s}function V(t,e,n){const s=t.slice()
return s[36]=e[n],s}function tt(t){let e
return{c(){e=b("Refresh")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function et(t){let e,n=t[36]+""
return{c(){e=b(n)},m(t,n){y(t,e,n)},p(t,s){64&s[0]&&n!==(n=t[36]+"")&&T(e,n)},d(t){t&&w(e)}}}function nt(t){let e,n,s=t[36].slice(1)+""
return{c(){e=h("span"),n=b(s),k(e,"class","fshRed")},m(t,s){y(t,e,s),v(e,n)},p(t,e){64&e[0]&&s!==(s=t[36].slice(1)+"")&&T(n,s)},d(t){t&&w(e)}}}function st(t){let e,n,s
function c(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[36].startsWith("<")),n?nt:et}let l=c(t,[-1,-1]),o=l(t)
return{c(){e=h("li"),o.c(),s=x(),k(e,"class","svelte-g50cgg")},m(t,n){y(t,e,n),o.m(e,null),v(e,s)},p(t,n){l===(l=c(t,n))&&o?o.p(t,n):(o.d(1),o=l(t),o&&(o.c(),o.m(e,s)))},d(t){t&&w(e),o.d()}}}function ct(t){let e,n,s,c,l=t[35].message+""
return{c(){e=h("tr"),n=h("td"),s=h("p"),c=b(l),C(s,"color","red"),k(n,"colspan","3")},m(t,l){y(t,e,l),v(e,n),v(n,s),v(s,c)},p(t,e){2&e[0]&&l!==(l=t[35].message+"")&&T(c,l)},i:A,o:A,d(t){t&&w(e)}}}function lt(t){let e,n,s=g(t[5]),c=[]
for(let e=0;e<s.length;e+=1)c[e]=mt(K(t,s,e))
const l=t=>u(c[t],1,1,(()=>{c[t]=null}))
return{c(){for(let t=0;t<c.length;t+=1)c[t].c()
e=F()},m(t,s){for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,s)
y(t,e,s),n=!0},p(t,n){if(4128&n[0]){let o
for(s=g(t[5]),o=0;o<s.length;o+=1){const l=K(t,s,o)
c[o]?(c[o].p(l,n),r(c[o],1)):(c[o]=mt(l),c[o].c(),r(c[o],1),c[o].m(e.parentNode,e))}for(O(),o=s.length;o<c.length;o+=1)l(o)
Q()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)r(c[t])
n=!0}},o(t){c=c.filter(Boolean)
for(let t=0;t<c.length;t+=1)u(c[t])
n=!1},d(t){t&&w(e),P(c,t)}}}function ot(t){let e
return{c(){e=b("Done")},m(t,n){y(t,e,n)},p:A,i:A,o:A,d(t){t&&w(e)}}}function it(t){let e,n,s,c
const l=[rt,at],o=[]
function i(t,e){return t[29]?0:1}return e=i(t),n=o[e]=l[e](t),{c(){n.c(),s=F()},m(t,n){o[e].m(t,n),y(t,s,n),c=!0},p(t,c){let a=e
e=i(t),e===a?o[e].p(t,c):(O(),u(o[a],1,1,(()=>{o[a]=null})),Q(),n=o[e],n?n.p(t,c):(n=o[e]=l[e](t),n.c()),r(n,1),n.m(s.parentNode,s))},i(t){c||(r(n),c=!0)},o(t){u(n),c=!1},d(t){t&&w(s),o[e].d(t)}}}function at(t){let e,n
return e=new U({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){i(e.$$.fragment)},m(t,s){a(e,t,s),n=!0},p(n,s){t=n
const c={}
32&s[0]|256&s[1]&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function rt(t){let e
return{c(){e=h("span"),k(e,"class","fshSpinner fshSpinner12")},m(t,n){y(t,e,n)},p:A,i:A,o:A,d(t){t&&w(e)}}}function ut(t){let e,n,s=t[28]+""
return{c(){e=b("Extract "),n=b(s)},m(t,s){y(t,e,s),y(t,n,s)},p(t,e){32&e[0]&&s!==(s=t[28]+"")&&T(n,s)},d(t){t&&(w(e),w(n))}}}function mt(t){let e,n,s,c,l,o,i,a,m,f,d,p,g,$,_=t[30]+""
const S=[it,ot],j=[]
function P(t,e){return t[28]?0:1}return s=P(t),c=j[s]=S[s](t),{c(){e=h("tr"),n=h("td"),c.c(),l=x(),o=h("td"),i=h("span"),f=x(),d=h("td"),p=b(_),g=x(),k(n,"class","svelte-g50cgg"),Y(n,"delPending",t[29]),k(i,"class","imgSpan tip-dynamic svelte-g50cgg"),k(i,"data-tipped",a=t[32]),k(i,"style",m=t[31]),k(o,"class","imgCol svelte-g50cgg")},m(t,c){y(t,e,c),v(e,n),j[s].m(n,null),v(e,l),v(e,o),v(o,i),v(e,f),v(e,d),v(d,p),v(e,g),$=!0},p(t,e){let l=s
s=P(t),s===l?j[s].p(t,e):(O(),u(j[l],1,1,(()=>{j[l]=null})),Q(),c=j[s],c?c.p(t,e):(c=j[s]=S[s](t),c.c()),r(c,1),c.m(n,null)),(!$||32&e[0])&&Y(n,"delPending",t[29]),(!$||32&e[0]&&a!==(a=t[32]))&&k(i,"data-tipped",a),(!$||32&e[0]&&m!==(m=t[31]))&&k(i,"style",m),(!$||32&e[0])&&_!==(_=t[30]+"")&&T(p,_)},i(t){$||(r(c),$=!0)},o(t){u(c),$=!1},d(t){t&&w(e),j[s].d()}}}function ft(t){return{c:A,m:A,p:A,i:A,o:A,d:A}}function dt(t){let e,n,s,c,l,o,f,I,M,q,L,B,C,T,A,F,O,Q,Y,D,R,U,W,Z,z,G,J,X,K,et,nt
function ot(e){t[13](e)}let it={}
void 0!==t[2]&&(it.inSt=t[2]),l=new H({props:it}),d.push((()=>p(l,"inSt",ot))),l.$on("toggle",t[8]),F=new N({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),F.$on("click",t[11])
let at=g(t[6]),rt=[]
for(let e=0;e<at.length;e+=1)rt[e]=st(V(t,at,e))
let ut={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:lt,catch:ct,error:35,blocks:[,,,]}
return $(X=t[1],ut),{c(){e=h("div"),n=b("Select which type of plants you wish to extract all of. Only select\n    extractable resources.\n    "),s=h("br"),c=x(),i(l.$$.fragment),f=b(" \n    "),I=h("label"),M=h("input"),q=b("\n      Main Folder Only"),L=b(" \n    "),B=h("label"),C=h("input"),T=b("\n      Disable Prompts"),A=b(" \n    "),i(F.$$.fragment),O=x(),Q=h("br"),Y=x(),D=h("table"),R=h("thead"),R.innerHTML='<tr><th class="actionCol svelte-g50cgg">Actions</th> <th colspan="2">Items</th></tr>',U=x(),W=h("tbody"),Z=h("tr"),z=h("td"),G=h("ol")
for(let t=0;t<rt.length;t+=1)rt[t].c()
J=x(),ut.block.c(),k(M,"type","checkbox"),k(M,"class","svelte-g50cgg"),k(C,"type","checkbox"),k(C,"class","svelte-g50cgg"),k(z,"colspan","3"),k(D,"class","svelte-g50cgg"),k(e,"class","svelte-g50cgg")},m(o,i){y(o,e,i),v(e,n),v(e,s),v(e,c),a(l,e,null),v(e,f),v(e,I),v(I,M),M.checked=t[3],v(I,q),v(e,L),v(e,B),v(B,C),C.checked=t[4],v(B,T),v(e,A),a(F,e,null),v(e,O),v(e,Q),v(e,Y),v(e,D),v(D,R),v(D,U),v(D,W),v(W,Z),v(Z,z),v(z,G)
for(let t=0;t<rt.length;t+=1)rt[t]&&rt[t].m(G,null)
v(W,J),ut.block.m(W,ut.anchor=null),ut.mount=()=>W,ut.anchor=null,K=!0,et||(nt=[_(M,"change",t[14]),_(M,"change",t[9]),_(C,"change",t[15]),_(C,"change",t[10])],et=!0)},p(e,n){t=e
const s={}
!o&&4&n[0]&&(o=!0,s.inSt=t[2],S((()=>o=!1))),l.$set(s),8&n[0]&&(M.checked=t[3]),16&n[0]&&(C.checked=t[4])
const c={}
if(256&n[1]&&(c.$$scope={dirty:n,ctx:t}),F.$set(c),64&n[0]){let e
for(at=g(t[6]),e=0;e<at.length;e+=1){const s=V(t,at,e)
rt[e]?rt[e].p(s,n):(rt[e]=st(s),rt[e].c(),rt[e].m(G,null))}for(;e<rt.length;e+=1)rt[e].d(1)
rt.length=at.length}ut.ctx=t,2&n[0]&&X!==(X=t[1])&&$(X,ut)||j(ut,t,n)},i(t){K||(r(l.$$.fragment,t),r(F.$$.fragment,t),r(ut.block),K=!0)},o(t){u(l.$$.fragment,t),u(F.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=ut.blocks[t]
u(e)}K=!1},d(t){t&&w(e),m(l),m(F),P(rt,t),ut.block.d(),ut.token=null,ut=null,et=!1,E(nt)}}}function pt(t){let e
return{c(){e=b("Quick Extract")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function gt(t){let e,n
return e=new Z({props:{visible:t[0],$$slots:{title:[pt],default:[dt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){i(e.$$.fragment)},m(t,s){a(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),126&n[0]|256&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}const $t="selectMain",ht="disableQuickExtractPrompts"
function bt(t,e,s){let{visible:c=!0}=e,l=null,o=null,i=null,a=f($t),r=f(ht),u=null,m=null,d=[]
const p=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,g=(t,e)=>L(t.item_name,e.item_name),$=t=>i||!t.is_in_st,h=t=>!a||-1===t.folder_id
function b(){s(5,m=B(u)&&function(t,e){return n(e,"item_name").map((n=>({...n,count:e.filter((t=>t.item_name===n.item_name)).length,delPending:!1,extractIds:e.filter((t=>t.item_name===n.item_name)).map((t=>t.inv_id)),style:X(n.item_id),tip:J(t,n.item_id,n.inv_id)})))}(o,u.filter($).filter(h)))}async function x(){const t=await R()
o=t?.player_id,u=t?.items?.filter(p).sort(g),b()}let k
async function y(t){const e=await D(t)
var n;(function(t){return t?.s||k===t?.e?.message||(k=t?.e?.message,s(6,d=[...d,t?.e?.message])),t?.s})(e)&&(s(6,d=[...d,(n=e.r,G.find((([t])=>t(n)))[1](n))]),u=u.filter((e=>e.inv_id!==t)))}async function v(t){I("quickExtract","extract",r);(!!r||await W("Are you sure you want to extract all similar items?"))&&(s(5,m[t].delPending=!0,m),await q(m[t].extractIds.map(y)),m[t]?.count&&s(5,m[t].count=0,m))}return t.$$set=t=>{"visible"in t&&s(0,c=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&c&&(s(6,d=[]),s(1,l=x()))},[c,l,i,a,r,m,d,function(){I("quickExtract","close"),s(0,c=!1)},function(){I("quickExtract","toggleSelectST"),b()},function(){I("quickExtract","toggleSelectMain"),M($t,a),b()},function(){I("quickExtract","togglePrompts"),M(ht,r)},function(){I("quickExtract","refresh"),s(6,d=[]),s(1,l=x())},v,function(t){i=t,s(2,i)},function(){a=this.checked,s(3,a)},function(){r=this.checked,s(4,r)},t=>v(t)]}class xt extends c{constructor(t){super(),l(this,t,bt,gt,o,{visible:0},null,[-1,-1])}}const kt={visible:!0}
let yt=0
function vt(){yt=t(kt,yt,xt)}export{vt as default}
//# sourceMappingURL=quickExtract-CkfEYR8Y.js.map
