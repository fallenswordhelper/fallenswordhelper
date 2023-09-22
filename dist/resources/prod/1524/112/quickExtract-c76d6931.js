import{i as t}from"./instantiate-880b172e.js"
import{cE as e,aI as n,S as s,J as c,K as o,ba as l,bb as i,b5 as a,b8 as r,bc as u,ad as m,c9 as f,ca as p,L as d,_ as g,M as $,N as h,P as b,Q as x,U as k,cb as y,X as v,aZ as _,Y as j,n as S,a9 as w,bl as E,aY as I,a0 as P,W as L,ah as M,b6 as q,b7 as Y,c4 as C}from"./calfSystem-4830a18d.js"
import{h as T,u as B}from"./await_block-31b017e2.js"
import{e as D}from"./each-1f09c43f.js"
import{d as F}from"./daUseItem-9fccc07b.js"
import{a as A}from"./all-414e0607.js"
import{S as N,i as Q}from"./SelectInST-8c6a2089.js"
import{i as R}from"./isArray-09a53da7.js"
import{L as O}from"./LinkButton-59368dc4.js"
import{L as U}from"./LinkButtonBracketed-0fb81602.js"
import{c as W}from"./confirm-68e1ea7c.js"
import{M as Z}from"./ModalTitled-c3fc6c07.js"
import{u as H}from"./uniq-e12b948a.js"
import"./daLoadInventory-9c7bd6b5.js"
import"./basicItem-cb072d2b.js"
import"./flattenItems-03659160.js"
import"./Modal-75c69e5d.js"
function J(t){return`${t.amount} x ${e[t.type]}`}const K=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(J).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const X=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,z=t=>`background-image: url(${n}items/${t}.gif)`
function G(t,e,n){const s=t.slice()
return s[28]=e[n].count,s[29]=e[n].delPending,s[30]=e[n].item_name,s[31]=e[n].style,s[32]=e[n].tip,s[34]=n,s}function V(t,e,n){const s=t.slice()
return s[36]=e[n],s}function tt(t){let e
return{c(){e=g("Refresh")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function et(t){let e,n=t[36]+""
return{c(){e=g(n)},m(t,n){b(t,e,n)},p(t,s){64&s[0]&&n!==(n=t[36]+"")&&P(e,n)},d(t){t&&v(e)}}}function nt(t){let e,n,s=t[36].slice(1)+""
return{c(){e=d("span"),n=g(s),h(e,"class","fshRed")},m(t,s){b(t,e,s),x(e,n)},p(t,e){64&e[0]&&s!==(s=t[36].slice(1)+"")&&P(n,s)},d(t){t&&v(e)}}}function st(t){let e,n,s
function c(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[36].startsWith("<")),n?nt:et}let o=c(t,[-1,-1]),l=o(t)
return{c(){e=d("li"),l.c(),s=$(),h(e,"class","svelte-g50cgg")},m(t,n){b(t,e,n),l.m(e,null),x(e,s)},p(t,n){o===(o=c(t,n))&&l?l.p(t,n):(l.d(1),l=o(t),l&&(l.c(),l.m(e,s)))},d(t){t&&v(e),l.d()}}}function ct(t){let e,n,s=t[35].message+""
return{c(){e=d("p"),n=g(s),I(e,"color","red")},m(t,s){b(t,e,s),x(e,n)},p(t,e){2&e[0]&&s!==(s=t[35].message+"")&&P(n,s)},i:L,o:L,d(t){t&&v(e)}}}function ot(t){let e,n,s=D(t[5]),c=[]
for(let e=0;e<s.length;e+=1)c[e]=mt(G(t,s,e))
const o=t=>r(c[t],1,1,(()=>{c[t]=null}))
return{c(){for(let t=0;t<c.length;t+=1)c[t].c()
e=M()},m(t,s){for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,s)
b(t,e,s),n=!0},p(t,n){if(4128&n[0]){let l
for(s=D(t[5]),l=0;l<s.length;l+=1){const o=G(t,s,l)
c[l]?(c[l].p(o,n),a(c[l],1)):(c[l]=mt(o),c[l].c(),a(c[l],1),c[l].m(e.parentNode,e))}for(q(),l=s.length;l<c.length;l+=1)o(l)
Y()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)a(c[t])
n=!0}},o(t){c=c.filter(Boolean)
for(let t=0;t<c.length;t+=1)r(c[t])
n=!1},d(t){t&&v(e),_(c,t)}}}function lt(t){let e
return{c(){e=g("Done")},m(t,n){b(t,e,n)},p:L,i:L,o:L,d(t){t&&v(e)}}}function it(t){let e,n,s,c
const o=[rt,at],l=[]
function i(t,e){return t[29]?0:1}return e=i(t),n=l[e]=o[e](t),{c(){n.c(),s=M()},m(t,n){l[e].m(t,n),b(t,s,n),c=!0},p(t,c){let u=e
e=i(t),e===u?l[e].p(t,c):(q(),r(l[u],1,1,(()=>{l[u]=null})),Y(),n=l[e],n?n.p(t,c):(n=l[e]=o[e](t),n.c()),a(n,1),n.m(s.parentNode,s))},i(t){c||(a(n),c=!0)},o(t){r(n),c=!1},d(t){t&&v(s),l[e].d(t)}}}function at(t){let e,n
return e=new O({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){l(e.$$.fragment)},m(t,s){i(e,t,s),n=!0},p(n,s){t=n
const c={}
32&s[0]|256&s[1]&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}function rt(t){let e
return{c(){e=d("span"),h(e,"class","fshSpinner fshSpinner12")},m(t,n){b(t,e,n)},p:L,i:L,o:L,d(t){t&&v(e)}}}function ut(t){let e,n,s=t[28]+""
return{c(){e=g("Extract "),n=g(s)},m(t,s){b(t,e,s),b(t,n,s)},p(t,e){32&e[0]&&s!==(s=t[28]+"")&&P(n,s)},d(t){t&&(v(e),v(n))}}}function mt(t){let e,n,s,c,o,l,i,u,m,f,p,k,y,_,j=t[30]+""
const S=[it,lt],w=[]
function E(t,e){return t[28]?0:1}return s=E(t),c=w[s]=S[s](t),{c(){e=d("tr"),n=d("td"),c.c(),o=$(),l=d("td"),i=d("span"),f=$(),p=d("td"),k=g(j),y=$(),h(n,"class","svelte-g50cgg"),C(n,"delPending",t[29]),h(i,"class","imgSpan tip-dynamic svelte-g50cgg"),h(i,"data-tipped",u=t[32]),h(i,"style",m=t[31]),h(l,"class","imgCol svelte-g50cgg")},m(t,c){b(t,e,c),x(e,n),w[s].m(n,null),x(e,o),x(e,l),x(l,i),x(e,f),x(e,p),x(p,k),x(e,y),_=!0},p(t,e){let o=s
s=E(t),s===o?w[s].p(t,e):(q(),r(w[o],1,1,(()=>{w[o]=null})),Y(),c=w[s],c?c.p(t,e):(c=w[s]=S[s](t),c.c()),a(c,1),c.m(n,null)),(!_||32&e[0])&&C(n,"delPending",t[29]),(!_||32&e[0]&&u!==(u=t[32]))&&h(i,"data-tipped",u),(!_||32&e[0]&&m!==(m=t[31]))&&h(i,"style",m),(!_||32&e[0])&&j!==(j=t[30]+"")&&P(k,j)},i(t){_||(a(c),_=!0)},o(t){r(c),_=!1},d(t){t&&v(e),w[s].d()}}}function ft(t){return{c:L,m:L,p:L,i:L,o:L,d:L}}function pt(t){let e,n,s,c,o,m,S,w,E,I,P,L,M,q,Y,C,F,A,Q,R,O,W,Z,H,J,K,X,z,G,et,nt
function lt(e){t[13](e)}let it={}
void 0!==t[2]&&(it.inSt=t[2]),o=new N({props:it}),f.push((()=>p(o,"inSt",lt))),o.$on("toggle",t[8]),C=new U({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),C.$on("click",t[11])
let at=D(t[6]),rt=[]
for(let e=0;e<at.length;e+=1)rt[e]=st(V(t,at,e))
let ut={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:ot,catch:ct,error:35,blocks:[,,,]}
return T(z=t[1],ut),{c(){e=d("div"),n=g("Select which type of plants you wish to extract all of. Only select extractable resources.\n    "),s=d("br"),c=$(),l(o.$$.fragment),S=g(" \n    "),w=d("label"),E=d("input"),I=g("\n      Main Folder Only"),P=g(" \n    "),L=d("label"),M=d("input"),q=g("\n      Disable Prompts"),Y=g(" \n    "),l(C.$$.fragment),F=$(),A=d("br"),Q=$(),R=d("table"),O=d("thead"),O.innerHTML='<tr><th class="actionCol svelte-g50cgg">Actions</th> <th colspan="2">Items</th></tr>',W=$(),Z=d("tbody"),H=d("tr"),J=d("td"),K=d("ol")
for(let t=0;t<rt.length;t+=1)rt[t].c()
X=$(),ut.block.c(),h(E,"type","checkbox"),h(E,"class","svelte-g50cgg"),h(M,"type","checkbox"),h(M,"class","svelte-g50cgg"),h(J,"colspan","3"),h(R,"class","svelte-g50cgg"),h(e,"class","svelte-g50cgg")},m(l,a){b(l,e,a),x(e,n),x(e,s),x(e,c),i(o,e,null),x(e,S),x(e,w),x(w,E),E.checked=t[3],x(w,I),x(e,P),x(e,L),x(L,M),M.checked=t[4],x(L,q),x(e,Y),i(C,e,null),x(e,F),x(e,A),x(e,Q),x(e,R),x(R,O),x(R,W),x(R,Z),x(Z,H),x(H,J),x(J,K)
for(let t=0;t<rt.length;t+=1)rt[t]&&rt[t].m(K,null)
x(Z,X),ut.block.m(Z,ut.anchor=null),ut.mount=()=>Z,ut.anchor=null,G=!0,et||(nt=[k(E,"change",t[14]),k(E,"change",t[9]),k(M,"change",t[15]),k(M,"change",t[10])],et=!0)},p(e,n){t=e
const s={}
!m&&4&n[0]&&(m=!0,s.inSt=t[2],y((()=>m=!1))),o.$set(s),8&n[0]&&(E.checked=t[3]),16&n[0]&&(M.checked=t[4])
const c={}
if(256&n[1]&&(c.$$scope={dirty:n,ctx:t}),C.$set(c),64&n[0]){let e
for(at=D(t[6]),e=0;e<at.length;e+=1){const s=V(t,at,e)
rt[e]?rt[e].p(s,n):(rt[e]=st(s),rt[e].c(),rt[e].m(K,null))}for(;e<rt.length;e+=1)rt[e].d(1)
rt.length=at.length}ut.ctx=t,2&n[0]&&z!==(z=t[1])&&T(z,ut)||B(ut,t,n)},i(t){G||(a(o.$$.fragment,t),a(C.$$.fragment,t),a(ut.block),G=!0)},o(t){r(o.$$.fragment,t),r(C.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=ut.blocks[t]
r(e)}G=!1},d(t){t&&v(e),u(o),u(C),_(rt,t),ut.block.d(),ut.token=null,ut=null,et=!1,j(nt)}}}function dt(t){let e
return{c(){e=g("Quick Extract")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function gt(t){let e,n
return e=new Z({props:{visible:t[0],$$slots:{title:[dt],default:[pt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){l(e.$$.fragment)},m(t,s){i(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),126&n[0]|256&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}const $t="selectMain",ht="disableQuickExtractPrompts"
function bt(t,e,n){let{visible:s=!0}=e,c=null,o=null,l=null,i=m($t),a=m(ht),r=null,u=null,f=[]
const p=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,d=(t,e)=>E(t.item_name,e.item_name),g=t=>l||!t.is_in_st,$=t=>!i||-1===t.folder_id
function h(){n(5,u=R(r)&&function(t,e){return H(e,"item_name").map((n=>({...n,count:e.filter((t=>t.item_name===n.item_name)).length,delPending:!1,extractIds:e.filter((t=>t.item_name===n.item_name)).map((t=>t.inv_id)),style:z(n.item_id),tip:X(t,n.item_id,n.inv_id)})))}(o,r.filter(g).filter($)))}async function b(){const t=await Q()
o=t?.player_id,r=t?.items?.filter(p).sort(d),h()}let x
async function k(t){const e=await F(t)
var s;(function(t){return t?.s||x===t?.e?.message||(x=t?.e?.message,n(6,f=[...f,t?.e?.message])),t?.s})(e)&&(n(6,f=[...f,(s=e.r,K.find((([t])=>t(s)))[1](s))]),r=r.filter((e=>e.inv_id!==t)))}async function y(t){S("quickExtract","extract",a);(!!a||await W("Are you sure you want to extract all similar items?"))&&(n(5,u[t].delPending=!0,u),await A(u[t].extractIds.map(k)),n(5,u[t].count=0,u))}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&s&&(n(6,f=[]),n(1,c=b()))},[s,c,l,i,a,u,f,function(){S("quickExtract","close"),n(0,s=!1)},function(){S("quickExtract","toggleSelectST"),h()},function(){S("quickExtract","toggleSelectMain"),w($t,i),h()},function(){S("quickExtract","togglePrompts"),w(ht,a)},function(){S("quickExtract","refresh"),n(6,f=[]),n(1,c=b())},y,function(t){l=t,n(2,l)},function(){i=this.checked,n(3,i)},function(){a=this.checked,n(4,a)},t=>y(t)]}var xt=class extends s{constructor(t){super(),c(this,t,bt,gt,o,{visible:0},null,[-1,-1])}}
const kt={visible:!0}
let yt=0
function vt(){yt=t(kt,yt,xt)}export{vt as default}
//# sourceMappingURL=quickExtract-c76d6931.js.map
