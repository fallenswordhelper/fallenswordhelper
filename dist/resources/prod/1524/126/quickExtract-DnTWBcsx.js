import{i as t}from"./instantiate-upFtXRx7.js"
import{cO as e,aN as n,S as s,L as c,M as l,bh as o,bi as i,bc as a,bf as r,bj as u,ai as m,cf as f,cg as p,N as d,O as g,a3 as $,P as h,Q as b,T as x,U as k,X as y,ch as v,a0 as _,b4 as j,a1 as S,s as w,ae as E,bs as P,b3 as I,a4 as M,_ as q,am as L,bd as C,be as T,ca as B}from"./calfSystem-DG-hTKTe.js"
import{h as N,u as O}from"./await_block-D4X9_cLH.js"
import{d as Y}from"./daUseItem-C5f4xZqW.js"
import{a as A}from"./all-YfMtr2SN.js"
import{S as D,i as F}from"./SelectInST-8VeUE8US.js"
import{i as Q}from"./isArray-eVldfhw1.js"
import{L as R}from"./LinkButton-78VHCVdQ.js"
import{L as U}from"./LinkButtonBracketed-DughXCmu.js"
import{c as G}from"./confirm-s8-DGp6I.js"
import{M as H}from"./ModalTitled-6sbkevqG.js"
import{u as K}from"./uniq-2BNwty6I.js"
import"./daLoadInventory-BotDx7uo.js"
import"./basicItem-D_odB7Bh.js"
import"./flattenItems-C4pfIrZn.js"
import"./Modal-CAQRcsHZ.js"
function W(t){return`${t.amount} x ${e[t.type]}`}const X=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(W).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const Z=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,z=t=>`background-image: url(${n}items/${t}.gif)`
function J(t,e,n){const s=t.slice()
return s[28]=e[n].count,s[29]=e[n].delPending,s[30]=e[n].item_name,s[31]=e[n].style,s[32]=e[n].tip,s[34]=n,s}function V(t,e,n){const s=t.slice()
return s[36]=e[n],s}function tt(t){let e
return{c(){e=$("Refresh")},m(t,n){x(t,e,n)},d(t){t&&_(e)}}}function et(t){let e,n=t[36]+""
return{c(){e=$(n)},m(t,n){x(t,e,n)},p(t,s){64&s[0]&&n!==(n=t[36]+"")&&M(e,n)},d(t){t&&_(e)}}}function nt(t){let e,n,s=t[36].slice(1)+""
return{c(){e=g("span"),n=$(s),b(e,"class","fshRed")},m(t,s){x(t,e,s),k(e,n)},p(t,e){64&e[0]&&s!==(s=t[36].slice(1)+"")&&M(n,s)},d(t){t&&_(e)}}}function st(t){let e,n,s
function c(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[36].startsWith("<")),n?nt:et}let l=c(t,[-1,-1]),o=l(t)
return{c(){e=g("li"),o.c(),s=h(),b(e,"class","svelte-g50cgg")},m(t,n){x(t,e,n),o.m(e,null),k(e,s)},p(t,n){l===(l=c(t,n))&&o?o.p(t,n):(o.d(1),o=l(t),o&&(o.c(),o.m(e,s)))},d(t){t&&_(e),o.d()}}}function ct(t){let e,n,s=t[35].message+""
return{c(){e=g("p"),n=$(s),I(e,"color","red")},m(t,s){x(t,e,s),k(e,n)},p(t,e){2&e[0]&&s!==(s=t[35].message+"")&&M(n,s)},i:q,o:q,d(t){t&&_(e)}}}function lt(t){let e,n,s=d(t[5]),c=[]
for(let e=0;e<s.length;e+=1)c[e]=mt(J(t,s,e))
const l=t=>r(c[t],1,1,(()=>{c[t]=null}))
return{c(){for(let t=0;t<c.length;t+=1)c[t].c()
e=L()},m(t,s){for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,s)
x(t,e,s),n=!0},p(t,n){if(4128&n[0]){let o
for(s=d(t[5]),o=0;o<s.length;o+=1){const l=J(t,s,o)
c[o]?(c[o].p(l,n),a(c[o],1)):(c[o]=mt(l),c[o].c(),a(c[o],1),c[o].m(e.parentNode,e))}for(C(),o=s.length;o<c.length;o+=1)l(o)
T()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)a(c[t])
n=!0}},o(t){c=c.filter(Boolean)
for(let t=0;t<c.length;t+=1)r(c[t])
n=!1},d(t){t&&_(e),j(c,t)}}}function ot(t){let e
return{c(){e=$("Done")},m(t,n){x(t,e,n)},p:q,i:q,o:q,d(t){t&&_(e)}}}function it(t){let e,n,s,c
const l=[rt,at],o=[]
function i(t,e){return t[29]?0:1}return e=i(t),n=o[e]=l[e](t),{c(){n.c(),s=L()},m(t,n){o[e].m(t,n),x(t,s,n),c=!0},p(t,c){let u=e
e=i(t),e===u?o[e].p(t,c):(C(),r(o[u],1,1,(()=>{o[u]=null})),T(),n=o[e],n?n.p(t,c):(n=o[e]=l[e](t),n.c()),a(n,1),n.m(s.parentNode,s))},i(t){c||(a(n),c=!0)},o(t){r(n),c=!1},d(t){t&&_(s),o[e].d(t)}}}function at(t){let e,n
return e=new R({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){o(e.$$.fragment)},m(t,s){i(e,t,s),n=!0},p(n,s){t=n
const c={}
32&s[0]|256&s[1]&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}function rt(t){let e
return{c(){e=g("span"),b(e,"class","fshSpinner fshSpinner12")},m(t,n){x(t,e,n)},p:q,i:q,o:q,d(t){t&&_(e)}}}function ut(t){let e,n,s=t[28]+""
return{c(){e=$("Extract "),n=$(s)},m(t,s){x(t,e,s),x(t,n,s)},p(t,e){32&e[0]&&s!==(s=t[28]+"")&&M(n,s)},d(t){t&&(_(e),_(n))}}}function mt(t){let e,n,s,c,l,o,i,u,m,f,p,d,y,v,j=t[30]+""
const S=[it,ot],w=[]
function E(t,e){return t[28]?0:1}return s=E(t),c=w[s]=S[s](t),{c(){e=g("tr"),n=g("td"),c.c(),l=h(),o=g("td"),i=g("span"),f=h(),p=g("td"),d=$(j),y=h(),b(n,"class","svelte-g50cgg"),B(n,"delPending",t[29]),b(i,"class","imgSpan tip-dynamic svelte-g50cgg"),b(i,"data-tipped",u=t[32]),b(i,"style",m=t[31]),b(o,"class","imgCol svelte-g50cgg")},m(t,c){x(t,e,c),k(e,n),w[s].m(n,null),k(e,l),k(e,o),k(o,i),k(e,f),k(e,p),k(p,d),k(e,y),v=!0},p(t,e){let l=s
s=E(t),s===l?w[s].p(t,e):(C(),r(w[l],1,1,(()=>{w[l]=null})),T(),c=w[s],c?c.p(t,e):(c=w[s]=S[s](t),c.c()),a(c,1),c.m(n,null)),(!v||32&e[0])&&B(n,"delPending",t[29]),(!v||32&e[0]&&u!==(u=t[32]))&&b(i,"data-tipped",u),(!v||32&e[0]&&m!==(m=t[31]))&&b(i,"style",m),(!v||32&e[0])&&j!==(j=t[30]+"")&&M(d,j)},i(t){v||(a(c),v=!0)},o(t){r(c),v=!1},d(t){t&&_(e),w[s].d()}}}function ft(t){return{c:q,m:q,p:q,i:q,o:q,d:q}}function pt(t){let e,n,s,c,l,m,w,E,P,I,M,q,L,C,T,B,Y,A,F,Q,R,G,H,K,W,X,Z,z,J,et,nt
function ot(e){t[13](e)}let it={}
void 0!==t[2]&&(it.inSt=t[2]),l=new D({props:it}),f.push((()=>p(l,"inSt",ot))),l.$on("toggle",t[8]),B=new U({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),B.$on("click",t[11])
let at=d(t[6]),rt=[]
for(let e=0;e<at.length;e+=1)rt[e]=st(V(t,at,e))
let ut={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:lt,catch:ct,error:35,blocks:[,,,]}
return N(z=t[1],ut),{c(){e=g("div"),n=$("Select which type of plants you wish to extract all of. Only select extractable resources.\n    "),s=g("br"),c=h(),o(l.$$.fragment),w=$(" \n    "),E=g("label"),P=g("input"),I=$("\n      Main Folder Only"),M=$(" \n    "),q=g("label"),L=g("input"),C=$("\n      Disable Prompts"),T=$(" \n    "),o(B.$$.fragment),Y=h(),A=g("br"),F=h(),Q=g("table"),R=g("thead"),R.innerHTML='<tr><th class="actionCol svelte-g50cgg">Actions</th> <th colspan="2">Items</th></tr>',G=h(),H=g("tbody"),K=g("tr"),W=g("td"),X=g("ol")
for(let t=0;t<rt.length;t+=1)rt[t].c()
Z=h(),ut.block.c(),b(P,"type","checkbox"),b(P,"class","svelte-g50cgg"),b(L,"type","checkbox"),b(L,"class","svelte-g50cgg"),b(W,"colspan","3"),b(Q,"class","svelte-g50cgg"),b(e,"class","svelte-g50cgg")},m(o,a){x(o,e,a),k(e,n),k(e,s),k(e,c),i(l,e,null),k(e,w),k(e,E),k(E,P),P.checked=t[3],k(E,I),k(e,M),k(e,q),k(q,L),L.checked=t[4],k(q,C),k(e,T),i(B,e,null),k(e,Y),k(e,A),k(e,F),k(e,Q),k(Q,R),k(Q,G),k(Q,H),k(H,K),k(K,W),k(W,X)
for(let t=0;t<rt.length;t+=1)rt[t]&&rt[t].m(X,null)
k(H,Z),ut.block.m(H,ut.anchor=null),ut.mount=()=>H,ut.anchor=null,J=!0,et||(nt=[y(P,"change",t[14]),y(P,"change",t[9]),y(L,"change",t[15]),y(L,"change",t[10])],et=!0)},p(e,n){t=e
const s={}
!m&&4&n[0]&&(m=!0,s.inSt=t[2],v((()=>m=!1))),l.$set(s),8&n[0]&&(P.checked=t[3]),16&n[0]&&(L.checked=t[4])
const c={}
if(256&n[1]&&(c.$$scope={dirty:n,ctx:t}),B.$set(c),64&n[0]){let e
for(at=d(t[6]),e=0;e<at.length;e+=1){const s=V(t,at,e)
rt[e]?rt[e].p(s,n):(rt[e]=st(s),rt[e].c(),rt[e].m(X,null))}for(;e<rt.length;e+=1)rt[e].d(1)
rt.length=at.length}ut.ctx=t,2&n[0]&&z!==(z=t[1])&&N(z,ut)||O(ut,t,n)},i(t){J||(a(l.$$.fragment,t),a(B.$$.fragment,t),a(ut.block),J=!0)},o(t){r(l.$$.fragment,t),r(B.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=ut.blocks[t]
r(e)}J=!1},d(t){t&&_(e),u(l),u(B),j(rt,t),ut.block.d(),ut.token=null,ut=null,et=!1,S(nt)}}}function dt(t){let e
return{c(){e=$("Quick Extract")},m(t,n){x(t,e,n)},d(t){t&&_(e)}}}function gt(t){let e,n
return e=new H({props:{visible:t[0],$$slots:{title:[dt],default:[pt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){o(e.$$.fragment)},m(t,s){i(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),126&n[0]|256&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}const $t="selectMain",ht="disableQuickExtractPrompts"
function bt(t,e,n){let{visible:s=!0}=e,c=null,l=null,o=null,i=m($t),a=m(ht),r=null,u=null,f=[]
const p=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,d=(t,e)=>P(t.item_name,e.item_name),g=t=>o||!t.is_in_st,$=t=>!i||-1===t.folder_id
function h(){n(5,u=Q(r)&&function(t,e){return K(e,"item_name").map((n=>({...n,count:e.filter((t=>t.item_name===n.item_name)).length,delPending:!1,extractIds:e.filter((t=>t.item_name===n.item_name)).map((t=>t.inv_id)),style:z(n.item_id),tip:Z(t,n.item_id,n.inv_id)})))}(l,r.filter(g).filter($)))}async function b(){const t=await F()
l=t?.player_id,r=t?.items?.filter(p).sort(d),h()}let x
async function k(t){const e=await Y(t)
var s;(function(t){return t?.s||x===t?.e?.message||(x=t?.e?.message,n(6,f=[...f,t?.e?.message])),t?.s})(e)&&(n(6,f=[...f,(s=e.r,X.find((([t])=>t(s)))[1](s))]),r=r.filter((e=>e.inv_id!==t)))}async function y(t){w("quickExtract","extract",a);(!!a||await G("Are you sure you want to extract all similar items?"))&&(n(5,u[t].delPending=!0,u),await A(u[t].extractIds.map(k)),n(5,u[t].count=0,u))}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&s&&(n(6,f=[]),n(1,c=b()))},[s,c,o,i,a,u,f,function(){w("quickExtract","close"),n(0,s=!1)},function(){w("quickExtract","toggleSelectST"),h()},function(){w("quickExtract","toggleSelectMain"),E($t,i),h()},function(){w("quickExtract","togglePrompts"),E(ht,a)},function(){w("quickExtract","refresh"),n(6,f=[]),n(1,c=b())},y,function(t){o=t,n(2,o)},function(){i=this.checked,n(3,i)},function(){a=this.checked,n(4,a)},t=>y(t)]}var xt=class extends s{constructor(t){super(),c(this,t,bt,gt,l,{visible:0},null,[-1,-1])}}
const kt={visible:!0}
let yt=0
function vt(){yt=t(kt,yt,xt)}export{vt as default}
//# sourceMappingURL=quickExtract-DnTWBcsx.js.map
