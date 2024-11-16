import{i as t}from"./Modal-D6I5F6g9.js"
import{cX as e,aO as n,S as s,L as c,M as l,cl as o,cm as i,O as a,R as r,V as u,N as m,P as f,T as p,U as d,X as g,W as $,Z as h,b5 as b,be as x,bf as k,bg as y,bh as v,bi as _,bj as j,bk as S,am as w,cj as E,b9 as P,Y as I,cn as M,a2 as q,ai as L,bw as B,s as C,ad as O}from"./calfSystem-Blt4DbaE.js"
import{h as T,u as Y}from"./await_block-Bf7EOqQ9.js"
import{d as A}from"./daUseItem-CAXQaGUX.js"
import{a as F}from"./all-YfMtr2SN.js"
import{S as N,i as R}from"./SelectInST-CX3QyODd.js"
import{i as D}from"./isArray-eVldfhw1.js"
import{L as Q}from"./LinkButton-CTQrdC0s.js"
import{L as U}from"./LinkButtonBracketed-C9l9Kpoo.js"
import{c as W}from"./confirm-DOY8kXhY.js"
import{M as X}from"./ModalTitled-DCrh-JGN.js"
import{u as Z}from"./uniq-D422dDMJ.js"
import"./daLoadInventory-XbR6QBDO.js"
import"./basicItem-B4VQEJwm.js"
import"./flattenItems-C4pfIrZn.js"
function G(t){return`${t.amount} x ${e[t.type]}`}const H=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(G).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const V=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,z=t=>`background-image: url(${n}items/${t}.gif)`
function J(t,e,n){const s=t.slice()
return s[28]=e[n].count,s[29]=e[n].delPending,s[30]=e[n].item_name,s[31]=e[n].style,s[32]=e[n].tip,s[34]=n,s}function K(t,e,n){const s=t.slice()
return s[36]=e[n],s}function tt(t){let e
return{c(){e=u("Refresh")},m(t,n){r(t,e,n)},d(t){t&&a(e)}}}function et(t){let e,n=t[36]+""
return{c(){e=u(n)},m(t,n){r(t,e,n)},p(t,s){64&s[0]&&n!==(n=t[36]+"")&&f(e,n)},d(t){t&&a(e)}}}function nt(t){let e,n,s=t[36].slice(1)+""
return{c(){e=d("span"),n=u(s),g(e,"class","fshRed")},m(t,s){r(t,e,s),p(e,n)},p(t,e){64&e[0]&&s!==(s=t[36].slice(1)+"")&&f(n,s)},d(t){t&&a(e)}}}function st(t){let e,n,s
function c(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[36].startsWith("<")),n?nt:et}let l=c(t,[-1,-1]),o=l(t)
return{c(){e=d("li"),o.c(),s=$(),g(e,"class","svelte-g50cgg")},m(t,n){r(t,e,n),o.m(e,null),p(e,s)},p(t,n){l===(l=c(t,n))&&o?o.p(t,n):(o.d(1),o=l(t),o&&(o.c(),o.m(e,s)))},d(t){t&&a(e),o.d()}}}function ct(t){let e,n,s,c,l=t[35].message+""
return{c(){e=d("tr"),n=d("td"),s=d("p"),c=u(l),b(s,"color","red"),g(n,"colspan","3")},m(t,l){r(t,e,l),p(e,n),p(n,s),p(s,c)},p(t,e){2&e[0]&&l!==(l=t[35].message+"")&&f(c,l)},i:h,o:h,d(t){t&&a(e)}}}function lt(t){let e,n,s=m(t[5]),c=[]
for(let e=0;e<s.length;e+=1)c[e]=mt(J(t,s,e))
const l=t=>k(c[t],1,1,(()=>{c[t]=null}))
return{c(){for(let t=0;t<c.length;t+=1)c[t].c()
e=w()},m(t,s){for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,s)
r(t,e,s),n=!0},p(t,n){if(4128&n[0]){let o
for(s=m(t[5]),o=0;o<s.length;o+=1){const l=J(t,s,o)
c[o]?(c[o].p(l,n),y(c[o],1)):(c[o]=mt(l),c[o].c(),y(c[o],1),c[o].m(e.parentNode,e))}for(j(),o=s.length;o<c.length;o+=1)l(o)
S()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)y(c[t])
n=!0}},o(t){c=c.filter(Boolean)
for(let t=0;t<c.length;t+=1)k(c[t])
n=!1},d(t){t&&a(e),P(c,t)}}}function ot(t){let e
return{c(){e=u("Done")},m(t,n){r(t,e,n)},p:h,i:h,o:h,d(t){t&&a(e)}}}function it(t){let e,n,s,c
const l=[rt,at],o=[]
function i(t,e){return t[29]?0:1}return e=i(t),n=o[e]=l[e](t),{c(){n.c(),s=w()},m(t,n){o[e].m(t,n),r(t,s,n),c=!0},p(t,c){let a=e
e=i(t),e===a?o[e].p(t,c):(j(),k(o[a],1,1,(()=>{o[a]=null})),S(),n=o[e],n?n.p(t,c):(n=o[e]=l[e](t),n.c()),y(n,1),n.m(s.parentNode,s))},i(t){c||(y(n),c=!0)},o(t){k(n),c=!1},d(t){t&&a(s),o[e].d(t)}}}function at(t){let e,n
return e=new Q({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){_(e.$$.fragment)},m(t,s){v(e,t,s),n=!0},p(n,s){t=n
const c={}
32&s[0]|256&s[1]&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function rt(t){let e
return{c(){e=d("span"),g(e,"class","fshSpinner fshSpinner12")},m(t,n){r(t,e,n)},p:h,i:h,o:h,d(t){t&&a(e)}}}function ut(t){let e,n,s=t[28]+""
return{c(){e=u("Extract "),n=u(s)},m(t,s){r(t,e,s),r(t,n,s)},p(t,e){32&e[0]&&s!==(s=t[28]+"")&&f(n,s)},d(t){t&&(a(e),a(n))}}}function mt(t){let e,n,s,c,l,o,i,m,h,b,x,v,_,w,P=t[30]+""
const I=[it,ot],M=[]
function q(t,e){return t[28]?0:1}return s=q(t),c=M[s]=I[s](t),{c(){e=d("tr"),n=d("td"),c.c(),l=$(),o=d("td"),i=d("span"),b=$(),x=d("td"),v=u(P),_=$(),g(n,"class","svelte-g50cgg"),E(n,"delPending",t[29]),g(i,"class","imgSpan tip-dynamic svelte-g50cgg"),g(i,"data-tipped",m=t[32]),g(i,"style",h=t[31]),g(o,"class","imgCol svelte-g50cgg")},m(t,c){r(t,e,c),p(e,n),M[s].m(n,null),p(e,l),p(e,o),p(o,i),p(e,b),p(e,x),p(x,v),p(e,_),w=!0},p(t,e){let l=s
s=q(t),s===l?M[s].p(t,e):(j(),k(M[l],1,1,(()=>{M[l]=null})),S(),c=M[s],c?c.p(t,e):(c=M[s]=I[s](t),c.c()),y(c,1),c.m(n,null)),(!w||32&e[0])&&E(n,"delPending",t[29]),(!w||32&e[0]&&m!==(m=t[32]))&&g(i,"data-tipped",m),(!w||32&e[0]&&h!==(h=t[31]))&&g(i,"style",h),(!w||32&e[0])&&P!==(P=t[30]+"")&&f(v,P)},i(t){w||(y(c),w=!0)},o(t){k(c),w=!1},d(t){t&&a(e),M[s].d()}}}function ft(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function pt(t){let e,n,s,c,l,f,h,b,j,S,w,E,L,B,C,O,A,F,R,D,Q,W,X,Z,G,H,V,z,J,et,nt
function ot(e){t[13](e)}let it={}
void 0!==t[2]&&(it.inSt=t[2]),l=new N({props:it}),o.push((()=>i(l,"inSt",ot))),l.$on("toggle",t[8]),O=new U({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),O.$on("click",t[11])
let at=m(t[6]),rt=[]
for(let e=0;e<at.length;e+=1)rt[e]=st(K(t,at,e))
let ut={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:lt,catch:ct,error:35,blocks:[,,,]}
return T(z=t[1],ut),{c(){e=d("div"),n=u("Select which type of plants you wish to extract all of. Only select\n    extractable resources.\n    "),s=d("br"),c=$(),_(l.$$.fragment),h=u(" \n    "),b=d("label"),j=d("input"),S=u("\n      Main Folder Only"),w=u(" \n    "),E=d("label"),L=d("input"),B=u("\n      Disable Prompts"),C=u(" \n    "),_(O.$$.fragment),A=$(),F=d("br"),R=$(),D=d("table"),Q=d("thead"),Q.innerHTML='<tr><th class="actionCol svelte-g50cgg">Actions</th> <th colspan="2">Items</th></tr>',W=$(),X=d("tbody"),Z=d("tr"),G=d("td"),H=d("ol")
for(let t=0;t<rt.length;t+=1)rt[t].c()
V=$(),ut.block.c(),g(j,"type","checkbox"),g(j,"class","svelte-g50cgg"),g(L,"type","checkbox"),g(L,"class","svelte-g50cgg"),g(G,"colspan","3"),g(D,"class","svelte-g50cgg"),g(e,"class","svelte-g50cgg")},m(o,i){r(o,e,i),p(e,n),p(e,s),p(e,c),v(l,e,null),p(e,h),p(e,b),p(b,j),j.checked=t[3],p(b,S),p(e,w),p(e,E),p(E,L),L.checked=t[4],p(E,B),p(e,C),v(O,e,null),p(e,A),p(e,F),p(e,R),p(e,D),p(D,Q),p(D,W),p(D,X),p(X,Z),p(Z,G),p(G,H)
for(let t=0;t<rt.length;t+=1)rt[t]&&rt[t].m(H,null)
p(X,V),ut.block.m(X,ut.anchor=null),ut.mount=()=>X,ut.anchor=null,J=!0,et||(nt=[q(j,"change",t[14]),q(j,"change",t[9]),q(L,"change",t[15]),q(L,"change",t[10])],et=!0)},p(e,n){t=e
const s={}
!f&&4&n[0]&&(f=!0,s.inSt=t[2],M((()=>f=!1))),l.$set(s),8&n[0]&&(j.checked=t[3]),16&n[0]&&(L.checked=t[4])
const c={}
if(256&n[1]&&(c.$$scope={dirty:n,ctx:t}),O.$set(c),64&n[0]){let e
for(at=m(t[6]),e=0;e<at.length;e+=1){const s=K(t,at,e)
rt[e]?rt[e].p(s,n):(rt[e]=st(s),rt[e].c(),rt[e].m(H,null))}for(;e<rt.length;e+=1)rt[e].d(1)
rt.length=at.length}ut.ctx=t,2&n[0]&&z!==(z=t[1])&&T(z,ut)||Y(ut,t,n)},i(t){J||(y(l.$$.fragment,t),y(O.$$.fragment,t),y(ut.block),J=!0)},o(t){k(l.$$.fragment,t),k(O.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=ut.blocks[t]
k(e)}J=!1},d(t){t&&a(e),x(l),x(O),P(rt,t),ut.block.d(),ut.token=null,ut=null,et=!1,I(nt)}}}function dt(t){let e
return{c(){e=u("Quick Extract")},m(t,n){r(t,e,n)},d(t){t&&a(e)}}}function gt(t){let e,n
return e=new X({props:{visible:t[0],$$slots:{title:[dt],default:[pt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){_(e.$$.fragment)},m(t,s){v(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),126&n[0]|256&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}const $t="selectMain",ht="disableQuickExtractPrompts"
function bt(t,e,n){let{visible:s=!0}=e,c=null,l=null,o=null,i=L($t),a=L(ht),r=null,u=null,m=[]
const f=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,p=(t,e)=>B(t.item_name,e.item_name),d=t=>o||!t.is_in_st,g=t=>!i||-1===t.folder_id
function $(){n(5,u=D(r)&&function(t,e){return Z(e,"item_name").map((n=>({...n,count:e.filter((t=>t.item_name===n.item_name)).length,delPending:!1,extractIds:e.filter((t=>t.item_name===n.item_name)).map((t=>t.inv_id)),style:z(n.item_id),tip:V(t,n.item_id,n.inv_id)})))}(l,r.filter(d).filter(g)))}async function h(){const t=await R()
l=t?.player_id,r=t?.items?.filter(f).sort(p),$()}let b
async function x(t){const e=await A(t)
var s;(function(t){return t?.s||b===t?.e?.message||(b=t?.e?.message,n(6,m=[...m,t?.e?.message])),t?.s})(e)&&(n(6,m=[...m,(s=e.r,H.find((([t])=>t(s)))[1](s))]),r=r.filter((e=>e.inv_id!==t)))}async function k(t){C("quickExtract","extract",a);(!!a||await W("Are you sure you want to extract all similar items?"))&&(n(5,u[t].delPending=!0,u),await F(u[t].extractIds.map(x)),u[t]?.count&&n(5,u[t].count=0,u))}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&s&&(n(6,m=[]),n(1,c=h()))},[s,c,o,i,a,u,m,function(){C("quickExtract","close"),n(0,s=!1)},function(){C("quickExtract","toggleSelectST"),$()},function(){C("quickExtract","toggleSelectMain"),O($t,i),$()},function(){C("quickExtract","togglePrompts"),O(ht,a)},function(){C("quickExtract","refresh"),n(6,m=[]),n(1,c=h())},k,function(t){o=t,n(2,o)},function(){i=this.checked,n(3,i)},function(){a=this.checked,n(4,a)},t=>k(t)]}class xt extends s{constructor(t){super(),c(this,t,bt,gt,l,{visible:0},null,[-1,-1])}}const kt={visible:!0}
let yt=0
function vt(){yt=t(kt,yt,xt)}export{vt as default}
//# sourceMappingURL=quickExtract-B4Ypdu_k.js.map
