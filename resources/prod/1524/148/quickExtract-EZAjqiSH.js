import{ds as t,bu as e,b8 as n,S as s,P as c,Q as l,bJ as o,bD as a,bE as i,bK as r,bL as u,aq as m,d1 as f,d2 as d,R as p,au as g,U as $,bq as h,V as b,d3 as x,av as k,_ as y,a0 as v,a1 as _,a3 as S,a9 as j,a4 as w,a5 as E,bX as I,s as P,al as q,ag as L,v as M,I as T,a8 as B,T as C,bp as F,bF as R,bG as Y,ax as D,c_ as Q,dR as A}from"./calfSystem-BldO1y8X.js"
import{d as N}from"./daUseItem-Deu1zmzV.js"
import{S as O,i as U}from"./SelectInST-rLAtQhVr.js"
import{L as W}from"./LinkButton-uS4wZBSJ.js"
import{L as G}from"./LinkButtonBracketed-CpS4fDdD.js"
import{M as H}from"./ModalTitled-DgIzlEw4.js"
import"./daLoadInventory-B1LI3IE_.js"
import"./basicItem-jvMH1Iol.js"
import"./flattenItems-g5kEa2JG.js"
function J(e){return`${e.amount} x ${t[e.type]}`}const K=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(J).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const V=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,X=t=>`background-image: url(${n}items/${t}.gif)`
function Z(t,e,n){const s=t.slice()
return s[28]=e[n].count,s[29]=e[n].delPending,s[30]=e[n].item_name,s[31]=e[n].style,s[32]=e[n].tip,s[34]=n,s}function z(t,e,n){const s=t.slice()
return s[36]=e[n],s}function tt(t){let e
return{c(){e=j("Refresh")},m(t,n){y(t,e,n)},d(t){t&&$(e)}}}function et(t){let e,n=t[36]+""
return{c(){e=j(n)},m(t,n){y(t,e,n)},p(t,s){64&s[0]&&n!==(n=t[36]+"")&&B(e,n)},d(t){t&&$(e)}}}function nt(t){let e,n,s=t[36].slice(1)+""
return{c(){e=S("span"),n=j(s),E(e,"class","fshRed")},m(t,s){y(t,e,s),v(e,n)},p(t,e){64&e[0]&&s!==(s=t[36].slice(1)+"")&&B(n,s)},d(t){t&&$(e)}}}function st(t){let e,n,s
function c(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[36].startsWith("<")),n?nt:et}let l=c(t,[-1,-1]),o=l(t)
return{c(){e=S("li"),o.c(),s=w(),E(e,"class","svelte-g50cgg")},m(t,n){y(t,e,n),o.m(e,null),v(e,s)},p(t,n){l===(l=c(t,n))&&o?o.p(t,n):(o.d(1),o=l(t),o&&(o.c(),o.m(e,s)))},d(t){t&&$(e),o.d()}}}function ct(t){let e,n,s,c,l=t[35].message+""
return{c(){e=S("tr"),n=S("td"),s=S("p"),c=j(l),F(s,"color","red"),E(n,"colspan","3")},m(t,l){y(t,e,l),v(e,n),v(n,s),v(s,c)},p(t,e){2&e[0]&&l!==(l=t[35].message+"")&&B(c,l)},i:C,o:C,d(t){t&&$(e)}}}function lt(t){let e,n,s=p(t[5]),c=[]
for(let e=0;e<s.length;e+=1)c[e]=mt(Z(t,s,e))
const l=t=>a(c[t],1,1,(()=>{c[t]=null}))
return{c(){for(let t=0;t<c.length;t+=1)c[t].c()
e=D()},m(t,s){for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,s)
y(t,e,s),n=!0},p(t,n){if(4128&n[0]){let o
for(s=p(t[5]),o=0;o<s.length;o+=1){const l=Z(t,s,o)
c[o]?(c[o].p(l,n),i(c[o],1)):(c[o]=mt(l),c[o].c(),i(c[o],1),c[o].m(e.parentNode,e))}for(R(),o=s.length;o<c.length;o+=1)l(o)
Y()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)i(c[t])
n=!0}},o(t){c=c.filter(Boolean)
for(let t=0;t<c.length;t+=1)a(c[t])
n=!1},d(t){t&&$(e),h(c,t)}}}function ot(t){let e
return{c(){e=j("Done")},m(t,n){y(t,e,n)},p:C,i:C,o:C,d(t){t&&$(e)}}}function at(t){let e,n,s,c
const l=[rt,it],o=[]
function r(t,e){return t[29]?0:1}return e=r(t),n=o[e]=l[e](t),{c(){n.c(),s=D()},m(t,n){o[e].m(t,n),y(t,s,n),c=!0},p(t,c){let u=e
e=r(t),e===u?o[e].p(t,c):(R(),a(o[u],1,1,(()=>{o[u]=null})),Y(),n=o[e],n?n.p(t,c):(n=o[e]=l[e](t),n.c()),i(n,1),n.m(s.parentNode,s))},i(t){c||(i(n),c=!0)},o(t){a(n),c=!1},d(t){t&&$(s),o[e].d(t)}}}function it(t){let e,n
return e=new W({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){u(e.$$.fragment)},m(t,s){r(e,t,s),n=!0},p(n,s){t=n
const c={}
32&s[0]|256&s[1]&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){o(e,t)}}}function rt(t){let e
return{c(){e=S("span"),E(e,"class","fshSpinner fshSpinner12")},m(t,n){y(t,e,n)},p:C,i:C,o:C,d(t){t&&$(e)}}}function ut(t){let e,n,s=t[28]+""
return{c(){e=j("Extract "),n=j(s)},m(t,s){y(t,e,s),y(t,n,s)},p(t,e){32&e[0]&&s!==(s=t[28]+"")&&B(n,s)},d(t){t&&($(e),$(n))}}}function mt(t){let e,n,s,c,l,o,r,u,m,f,d,p,g,h,b=t[30]+""
const x=[at,ot],k=[]
function _(t,e){return t[28]?0:1}return s=_(t),c=k[s]=x[s](t),{c(){e=S("tr"),n=S("td"),c.c(),l=w(),o=S("td"),r=S("span"),f=w(),d=S("td"),p=j(b),g=w(),E(n,"class","svelte-g50cgg"),Q(n,"delPending",t[29]),E(r,"class","imgSpan tip-dynamic svelte-g50cgg"),E(r,"data-tipped",u=t[32]),E(r,"style",m=t[31]),E(o,"class","imgCol svelte-g50cgg")},m(t,c){y(t,e,c),v(e,n),k[s].m(n,null),v(e,l),v(e,o),v(o,r),v(e,f),v(e,d),v(d,p),v(e,g),h=!0},p(t,e){let l=s
s=_(t),s===l?k[s].p(t,e):(R(),a(k[l],1,1,(()=>{k[l]=null})),Y(),c=k[s],c?c.p(t,e):(c=k[s]=x[s](t),c.c()),i(c,1),c.m(n,null)),(!h||32&e[0])&&Q(n,"delPending",t[29]),(!h||32&e[0]&&u!==(u=t[32]))&&E(r,"data-tipped",u),(!h||32&e[0]&&m!==(m=t[31]))&&E(r,"style",m),(!h||32&e[0])&&b!==(b=t[30]+"")&&B(p,b)},i(t){h||(i(c),h=!0)},o(t){a(c),h=!1},d(t){t&&$(e),k[s].d()}}}function ft(t){return{c:C,m:C,p:C,i:C,o:C,d:C}}function dt(t){let e,n,s,c,l,m,I,P,q,L,M,T,B,C,F,R,Y,D,Q,A,N,U,W,H,J,K,V,X,Z,et,nt
function ot(e){t[13](e)}let at={}
void 0!==t[2]&&(at.inSt=t[2]),l=new O({props:at}),f.push((()=>d(l,"inSt",ot))),l.$on("toggle",t[8]),R=new G({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),R.$on("click",t[11])
let it=p(t[6]),rt=[]
for(let e=0;e<it.length;e+=1)rt[e]=st(z(t,it,e))
let ut={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:lt,catch:ct,error:35,blocks:[,,,]}
return g(X=t[1],ut),{c(){e=S("div"),n=j("Select which type of plants you wish to extract all of. Only select\n    extractable resources.\n    "),s=S("br"),c=w(),u(l.$$.fragment),I=j(" \n    "),P=S("label"),q=S("input"),L=j("\n      Main Folder Only"),M=j(" \n    "),T=S("label"),B=S("input"),C=j("\n      Disable Prompts"),F=j(" \n    "),u(R.$$.fragment),Y=w(),D=S("br"),Q=w(),A=S("table"),N=S("thead"),N.innerHTML='<tr><th class="actionCol svelte-g50cgg">Actions</th> <th colspan="2">Items</th></tr>',U=w(),W=S("tbody"),H=S("tr"),J=S("td"),K=S("ol")
for(let t=0;t<rt.length;t+=1)rt[t].c()
V=w(),ut.block.c(),E(q,"type","checkbox"),E(q,"class","svelte-g50cgg"),E(B,"type","checkbox"),E(B,"class","svelte-g50cgg"),E(J,"colspan","3"),E(A,"class","svelte-g50cgg"),E(e,"class","svelte-g50cgg")},m(o,a){y(o,e,a),v(e,n),v(e,s),v(e,c),r(l,e,null),v(e,I),v(e,P),v(P,q),q.checked=t[3],v(P,L),v(e,M),v(e,T),v(T,B),B.checked=t[4],v(T,C),v(e,F),r(R,e,null),v(e,Y),v(e,D),v(e,Q),v(e,A),v(A,N),v(A,U),v(A,W),v(W,H),v(H,J),v(J,K)
for(let t=0;t<rt.length;t+=1)rt[t]&&rt[t].m(K,null)
v(W,V),ut.block.m(W,ut.anchor=null),ut.mount=()=>W,ut.anchor=null,Z=!0,et||(nt=[_(q,"change",t[14]),_(q,"change",t[9]),_(B,"change",t[15]),_(B,"change",t[10])],et=!0)},p(e,n){t=e
const s={}
!m&&4&n[0]&&(m=!0,s.inSt=t[2],x((()=>m=!1))),l.$set(s),8&n[0]&&(q.checked=t[3]),16&n[0]&&(B.checked=t[4])
const c={}
if(256&n[1]&&(c.$$scope={dirty:n,ctx:t}),R.$set(c),64&n[0]){let e
for(it=p(t[6]),e=0;e<it.length;e+=1){const s=z(t,it,e)
rt[e]?rt[e].p(s,n):(rt[e]=st(s),rt[e].c(),rt[e].m(K,null))}for(;e<rt.length;e+=1)rt[e].d(1)
rt.length=it.length}ut.ctx=t,2&n[0]&&X!==(X=t[1])&&g(X,ut)||k(ut,t,n)},i(t){Z||(i(l.$$.fragment,t),i(R.$$.fragment,t),i(ut.block),Z=!0)},o(t){a(l.$$.fragment,t),a(R.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=ut.blocks[t]
a(e)}Z=!1},d(t){t&&$(e),o(l),o(R),h(rt,t),ut.block.d(),ut.token=null,ut=null,et=!1,b(nt)}}}function pt(t){let e
return{c(){e=j("Quick Extract")},m(t,n){y(t,e,n)},d(t){t&&$(e)}}}function gt(t){let e,n
return e=new H({props:{visible:t[0],$$slots:{title:[pt],default:[dt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){u(e.$$.fragment)},m(t,s){r(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),126&n[0]|256&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){o(e,t)}}}const $t="selectMain",ht="disableQuickExtractPrompts"
function bt(t,n,s){let{visible:c=!0}=n,l=null,o=null,a=null,i=m($t),r=m(ht),u=null,f=null,d=[]
const p=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,g=(t,e)=>I(t.item_name,e.item_name),$=t=>a||!t.is_in_st,h=t=>!i||-1===t.folder_id
function b(){s(5,f=T(u)&&function(t,n){return e(n,"item_name").map((e=>({...e,count:n.filter((t=>t.item_name===e.item_name)).length,delPending:!1,extractIds:n.filter((t=>t.item_name===e.item_name)).map((t=>t.inv_id)),style:X(e.item_id),tip:V(t,e.item_id,e.inv_id)})))}(o,u.filter($).filter(h)))}async function x(){const t=await U()
o=t?.player_id,u=t?.items?.filter(p).sort(g),b()}let k
async function y(t){const e=await N(t)
var n;(function(t){return t?.s||k===t?.e?.message||(k=t?.e?.message,s(6,d=[...d,t?.e?.message])),t?.s})(e)&&(s(6,d=[...d,(n=e.r,K.find((([t])=>t(n)))[1](n))]),u=u.filter((e=>e.inv_id!==t)))}async function v(t){P("quickExtract","extract",r);(!!r||await L("Are you sure you want to extract all similar items?"))&&(s(5,f[t].delPending=!0,f),await M(f[t].extractIds.map(y)),f[t]?.count&&s(5,f[t].count=0,f))}return t.$$set=t=>{"visible"in t&&s(0,c=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&c&&(s(6,d=[]),s(1,l=x()))},[c,l,a,i,r,f,d,function(){P("quickExtract","close"),s(0,c=!1)},function(){P("quickExtract","toggleSelectST"),b()},function(){P("quickExtract","toggleSelectMain"),q($t,i),b()},function(){P("quickExtract","togglePrompts"),q(ht,r)},function(){P("quickExtract","refresh"),s(6,d=[]),s(1,l=x())},v,function(t){a=t,s(2,a)},function(){i=this.checked,s(3,i)},function(){r=this.checked,s(4,r)},t=>v(t)]}class xt extends s{constructor(t){super(),c(this,t,bt,gt,l,{visible:0},null,[-1,-1])}}const kt={visible:!0}
let yt=0
function vt(){yt=A(kt,yt,xt)}export{vt as default}
//# sourceMappingURL=quickExtract-EZAjqiSH.js.map
