import{i as t}from"./instantiate-880b172e.js"
import{cE as e,aJ as n,S as s,K as c,L as o,bb as l,bc as i,b6 as a,b9 as r,bd as m,ae as u,ca as f,cb as p,M as d,a0 as g,N as $,O as h,Q as b,R as x,V as k,cc as y,Y as v,a_ as _,Z as j,n as S,aa as w,bm as E,aZ as I,a1 as M,X as P,ai as q,b7 as L,b8 as C,c5 as Y}from"./calfSystem-929ac228.js"
import{h as T,u as B}from"./await_block-1344c2da.js"
import{e as F}from"./each-bac91e63.js"
import{d as Q}from"./daUseItem-fb5310a4.js"
import{a as A}from"./all-414e0607.js"
import{S as D,i as N}from"./SelectInST-6fdb4b51.js"
import{i as O}from"./isArray-09a53da7.js"
import{L as R}from"./LinkButton-abc10b8a.js"
import{L as Z}from"./LinkButtonBracketed-7f4f1978.js"
import{c as K}from"./confirm-75b63878.js"
import{M as H}from"./ModalTitled-77d1fd9a.js"
import{u as J}from"./uniq-a9975ce0.js"
import"./daLoadInventory-7d3bc344.js"
import"./basicItem-932eb681.js"
import"./flattenItems-03659160.js"
import"./Modal-b8a2fc24.js"
function U(t){return`${t.amount} x ${e[t.type]}`}const V=[[t=>t.components?.length,t=>`You successfully extracted 1 '${t.components?.[0].n}' component(s) from 1 resource(s).`],[t=>t.frags,t=>`You gained ${t.frags.map(U).join(", ")} Fragments by opening the Fragment Stash.`],[t=>t.mailbox_items?.length,t=>`You received 1 x '${t.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
const W=(t,e,n)=>`fetchitem.php?item_id=${e}&inv_id=${n}&t=1&p=${t}`,X=t=>`background-image: url(${n}items/${t}.gif)`
function z(t,e,n){const s=t.slice()
return s[28]=e[n].count,s[29]=e[n].delPending,s[30]=e[n].item_name,s[31]=e[n].style,s[32]=e[n].tip,s[34]=n,s}function G(t,e,n){const s=t.slice()
return s[36]=e[n],s}function tt(t){let e
return{c(){e=g("Refresh")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function et(t){let e,n=t[36]+""
return{c(){e=g(n)},m(t,n){b(t,e,n)},p(t,s){64&s[0]&&n!==(n=t[36]+"")&&M(e,n)},d(t){t&&v(e)}}}function nt(t){let e,n,s=t[36].slice(1)+""
return{c(){e=d("span"),n=g(s),h(e,"class","fshRed")},m(t,s){b(t,e,s),x(e,n)},p(t,e){64&e[0]&&s!==(s=t[36].slice(1)+"")&&M(n,s)},d(t){t&&v(e)}}}function st(t){let e,n,s
function c(t,e){return 64&e[0]&&(n=null),null==n&&(n=!!t[36].startsWith("<")),n?nt:et}let o=c(t,[-1,-1]),l=o(t)
return{c(){e=d("li"),l.c(),s=$(),h(e,"class","svelte-g50cgg")},m(t,n){b(t,e,n),l.m(e,null),x(e,s)},p(t,n){o===(o=c(t,n))&&l?l.p(t,n):(l.d(1),l=o(t),l&&(l.c(),l.m(e,s)))},d(t){t&&v(e),l.d()}}}function ct(t){let e,n,s=t[35].message+""
return{c(){e=d("p"),n=g(s),I(e,"color","red")},m(t,s){b(t,e,s),x(e,n)},p(t,e){2&e[0]&&s!==(s=t[35].message+"")&&M(n,s)},i:P,o:P,d(t){t&&v(e)}}}function ot(t){let e,n,s=F(t[5]),c=[]
for(let e=0;e<s.length;e+=1)c[e]=ut(z(t,s,e))
const o=t=>r(c[t],1,1,(()=>{c[t]=null}))
return{c(){for(let t=0;t<c.length;t+=1)c[t].c()
e=q()},m(t,s){for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,s)
b(t,e,s),n=!0},p(t,n){if(4128&n[0]){let l
for(s=F(t[5]),l=0;l<s.length;l+=1){const o=z(t,s,l)
c[l]?(c[l].p(o,n),a(c[l],1)):(c[l]=ut(o),c[l].c(),a(c[l],1),c[l].m(e.parentNode,e))}for(L(),l=s.length;l<c.length;l+=1)o(l)
C()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)a(c[t])
n=!0}},o(t){c=c.filter(Boolean)
for(let t=0;t<c.length;t+=1)r(c[t])
n=!1},d(t){t&&v(e),_(c,t)}}}function lt(t){let e
return{c(){e=g("Done")},m(t,n){b(t,e,n)},p:P,i:P,o:P,d(t){t&&v(e)}}}function it(t){let e,n,s,c
const o=[rt,at],l=[]
function i(t,e){return t[29]?0:1}return e=i(t),n=l[e]=o[e](t),{c(){n.c(),s=q()},m(t,n){l[e].m(t,n),b(t,s,n),c=!0},p(t,c){let m=e
e=i(t),e===m?l[e].p(t,c):(L(),r(l[m],1,1,(()=>{l[m]=null})),C(),n=l[e],n?n.p(t,c):(n=l[e]=o[e](t),n.c()),a(n,1),n.m(s.parentNode,s))},i(t){c||(a(n),c=!0)},o(t){r(n),c=!1},d(t){t&&v(s),l[e].d(t)}}}function at(t){let e,n
return e=new R({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[34])})),{c(){l(e.$$.fragment)},m(t,s){i(e,t,s),n=!0},p(n,s){t=n
const c={}
32&s[0]|256&s[1]&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function rt(t){let e
return{c(){e=d("span"),h(e,"class","fshSpinner fshSpinner12")},m(t,n){b(t,e,n)},p:P,i:P,o:P,d(t){t&&v(e)}}}function mt(t){let e,n,s=t[28]+""
return{c(){e=g("Extract "),n=g(s)},m(t,s){b(t,e,s),b(t,n,s)},p(t,e){32&e[0]&&s!==(s=t[28]+"")&&M(n,s)},d(t){t&&(v(e),v(n))}}}function ut(t){let e,n,s,c,o,l,i,m,u,f,p,k,y,_,j=t[30]+""
const S=[it,lt],w=[]
function E(t,e){return t[28]?0:1}return s=E(t),c=w[s]=S[s](t),{c(){e=d("tr"),n=d("td"),c.c(),o=$(),l=d("td"),i=d("span"),f=$(),p=d("td"),k=g(j),y=$(),h(n,"class","svelte-g50cgg"),Y(n,"delPending",t[29]),h(i,"class","imgSpan tip-dynamic svelte-g50cgg"),h(i,"data-tipped",m=t[32]),h(i,"style",u=t[31]),h(l,"class","imgCol svelte-g50cgg")},m(t,c){b(t,e,c),x(e,n),w[s].m(n,null),x(e,o),x(e,l),x(l,i),x(e,f),x(e,p),x(p,k),x(e,y),_=!0},p(t,e){let o=s
s=E(t),s===o?w[s].p(t,e):(L(),r(w[o],1,1,(()=>{w[o]=null})),C(),c=w[s],c?c.p(t,e):(c=w[s]=S[s](t),c.c()),a(c,1),c.m(n,null)),(!_||32&e[0])&&Y(n,"delPending",t[29]),(!_||32&e[0]&&m!==(m=t[32]))&&h(i,"data-tipped",m),(!_||32&e[0]&&u!==(u=t[31]))&&h(i,"style",u),(!_||32&e[0])&&j!==(j=t[30]+"")&&M(k,j)},i(t){_||(a(c),_=!0)},o(t){r(c),_=!1},d(t){t&&v(e),w[s].d()}}}function ft(t){return{c:P,m:P,p:P,i:P,o:P,d:P}}function pt(t){let e,n,s,c,o,u,S,w,E,I,M,P,q,L,C,Y,Q,A,N,O,R,K,H,J,U,V,W,X,z,et,nt
function lt(e){t[13](e)}let it={}
void 0!==t[2]&&(it.inSt=t[2]),o=new D({props:it}),f.push((()=>p(o,"inSt",lt))),o.$on("toggle",t[8]),Y=new Z({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),Y.$on("click",t[11])
let at=F(t[6]),rt=[]
for(let e=0;e<at.length;e+=1)rt[e]=st(G(t,at,e))
let mt={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:ot,catch:ct,error:35,blocks:[,,,]}
return T(X=t[1],mt),{c(){e=d("div"),n=g("Select which type of plants you wish to extract all of. Only select extractable resources.\n    "),s=d("br"),c=$(),l(o.$$.fragment),S=g(" \n    "),w=d("label"),E=d("input"),I=g("\n      Main Folder Only"),M=g(" \n    "),P=d("label"),q=d("input"),L=g("\n      Disable Prompts"),C=g(" \n    "),l(Y.$$.fragment),Q=$(),A=d("br"),N=$(),O=d("table"),R=d("thead"),R.innerHTML='<tr><th class="actionCol svelte-g50cgg">Actions</th> <th colspan="2">Items</th></tr>',K=$(),H=d("tbody"),J=d("tr"),U=d("td"),V=d("ol")
for(let t=0;t<rt.length;t+=1)rt[t].c()
W=$(),mt.block.c(),h(E,"type","checkbox"),h(E,"class","svelte-g50cgg"),h(q,"type","checkbox"),h(q,"class","svelte-g50cgg"),h(U,"colspan","3"),h(O,"class","svelte-g50cgg"),h(e,"class","svelte-g50cgg")},m(l,a){b(l,e,a),x(e,n),x(e,s),x(e,c),i(o,e,null),x(e,S),x(e,w),x(w,E),E.checked=t[3],x(w,I),x(e,M),x(e,P),x(P,q),q.checked=t[4],x(P,L),x(e,C),i(Y,e,null),x(e,Q),x(e,A),x(e,N),x(e,O),x(O,R),x(O,K),x(O,H),x(H,J),x(J,U),x(U,V)
for(let t=0;t<rt.length;t+=1)rt[t]&&rt[t].m(V,null)
x(H,W),mt.block.m(H,mt.anchor=null),mt.mount=()=>H,mt.anchor=null,z=!0,et||(nt=[k(E,"change",t[14]),k(E,"change",t[9]),k(q,"change",t[15]),k(q,"change",t[10])],et=!0)},p(e,n){t=e
const s={}
!u&&4&n[0]&&(u=!0,s.inSt=t[2],y((()=>u=!1))),o.$set(s),8&n[0]&&(E.checked=t[3]),16&n[0]&&(q.checked=t[4])
const c={}
if(256&n[1]&&(c.$$scope={dirty:n,ctx:t}),Y.$set(c),64&n[0]){let e
for(at=F(t[6]),e=0;e<at.length;e+=1){const s=G(t,at,e)
rt[e]?rt[e].p(s,n):(rt[e]=st(s),rt[e].c(),rt[e].m(V,null))}for(;e<rt.length;e+=1)rt[e].d(1)
rt.length=at.length}mt.ctx=t,2&n[0]&&X!==(X=t[1])&&T(X,mt)||B(mt,t,n)},i(t){z||(a(o.$$.fragment,t),a(Y.$$.fragment,t),a(mt.block),z=!0)},o(t){r(o.$$.fragment,t),r(Y.$$.fragment,t)
for(let t=0;t<3;t+=1){const e=mt.blocks[t]
r(e)}z=!1},d(t){t&&v(e),m(o),m(Y),_(rt,t),mt.block.d(),mt.token=null,mt=null,et=!1,j(nt)}}}function dt(t){let e
return{c(){e=g("Quick Extract")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function gt(t){let e,n
return e=new H({props:{visible:t[0],$$slots:{title:[dt],default:[pt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){l(e.$$.fragment)},m(t,s){i(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),126&n[0]|256&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}const $t="selectMain",ht="disableQuickExtractPrompts"
function bt(t,e,n){let{visible:s=!0}=e,c=null,o=null,l=null,i=u($t),a=u(ht),r=null,m=null,f=[]
const p=t=>"Zombie Coffin"===t.item_name||12===t.type||16===t.type,d=(t,e)=>E(t.item_name,e.item_name),g=t=>l||!t.is_in_st,$=t=>!i||-1===t.folder_id
function h(){n(5,m=O(r)&&function(t,e){return J(e,"item_name").map((n=>({...n,count:e.filter((t=>t.item_name===n.item_name)).length,delPending:!1,extractIds:e.filter((t=>t.item_name===n.item_name)).map((t=>t.inv_id)),style:X(n.item_id),tip:W(t,n.item_id,n.inv_id)})))}(o,r.filter(g).filter($)))}async function b(){const t=await N()
o=t?.player_id,r=t?.items?.filter(p).sort(d),h()}let x
async function k(t){const e=await Q(t)
var s;(function(t){return t?.s||x===t?.e?.message||(x=t?.e?.message,n(6,f=[...f,t?.e?.message])),t?.s})(e)&&(n(6,f=[...f,(s=e.r,V.find((([t])=>t(s)))[1](s))]),r=r.filter((e=>e.inv_id!==t)))}async function y(t){S("quickExtract","extract",a);(!!a||await K("Are you sure you want to extract all similar items?"))&&(n(5,m[t].delPending=!0,m),await A(m[t].extractIds.map(k)),n(5,m[t].count=0,m))}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},t.$$.update=()=>{1&t.$$.dirty[0]&&s&&(n(6,f=[]),n(1,c=b()))},[s,c,l,i,a,m,f,function(){S("quickExtract","close"),n(0,s=!1)},function(){S("quickExtract","toggleSelectST"),h()},function(){S("quickExtract","toggleSelectMain"),w($t,i),h()},function(){S("quickExtract","togglePrompts"),w(ht,a)},function(){S("quickExtract","refresh"),n(6,f=[]),n(1,c=b())},y,function(t){l=t,n(2,l)},function(){i=this.checked,n(3,i)},function(){a=this.checked,n(4,a)},t=>y(t)]}var xt=class extends s{constructor(t){super(),c(this,t,bt,gt,o,{visible:0},null,[-1,-1])}}
const kt={visible:!0}
let yt=0
function vt(){yt=t(kt,yt,xt)}export{vt as default}
//# sourceMappingURL=quickExtract-9ba9152c.js.map
