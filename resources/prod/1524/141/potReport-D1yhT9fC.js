import{i as e}from"./Modal-D6I5F6g9.js"
import{S as t,L as n,M as s,O as l,Z as c,R as o,U as a,b5 as i,N as p,P as r,T as u,V as d,W as m,X as h,b9 as f,Q as g,am as v,Y as k,a1 as b,a2 as x,a4 as y,c_ as M,be as _,bf as $,bg as j,bh as w,bi as C,s as S,aS as R,aQ as I,bw as E,a7 as G}from"./calfSystem-Blt4DbaE.js"
import{h as P,u as T}from"./await_block-Bf7EOqQ9.js"
import{a as A,d as L}from"./deepClone-Cz-9yEiv.js"
import{d as N}from"./daGuildReport-DGJ9QQbT.js"
import{a as Q}from"./all-YfMtr2SN.js"
import{i as q}from"./isArray-eVldfhw1.js"
import{u as B}from"./uniq-D422dDMJ.js"
import{M as F}from"./ModalTitled-DCrh-JGN.js"
import"./guild-hKlLzHll.js"
import"./guildInventory-6KpNnrkd.js"
const K=e=>Math.max(Math.min(e,100),0),O=e=>`000000${e.toString(16)}`.slice(-6)
function U(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[57]=t[n].mapped,s[58]=t[n].ignore,s[59]=t[n].waiting,s[60]=t,s[61]=n,s}function V(e,t,n){const s=e.slice()
return s[62]=t[n].name,s}function W(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[65]=t[n].count,s}function X(e){let t
return{c(){t=a("p"),t.textContent=`${e[68].message}`,i(t,"color","red")},m(e,n){o(e,t,n)},p:c,d(e){e&&l(t)}}}function Y(e){let t,n,s,c,i,p,r,f,g,v,b,y,M,_,$,j,w,C,S,R,I,E,G,P,T,A,L,N=e[2]&&Z(e),Q=e[3]&&D(e),q=e[4]&&ne(e)
return{c(){t=a("div"),n=a("label"),s=a("input"),c=d("\n          Member Backpacks"),i=m(),p=a("label"),r=a("input"),f=d("\n          Guild Store"),g=m(),v=a("div"),b=a("input"),y=m(),M=a("label"),M.textContent="Composed Potion Inventory",_=m(),$=a("input"),j=m(),w=a("label"),w.textContent="Mapping",C=m(),S=a("input"),R=m(),I=a("label"),I.textContent="Thresholds",E=m(),G=a("div"),N&&N.c(),P=m(),Q&&Q.c(),T=m(),q&&q.c(),h(s,"type","checkbox"),h(n,"class","svelte-d6ps8u"),h(r,"type","checkbox"),h(p,"class","svelte-d6ps8u"),h(t,"class","filters svelte-d6ps8u"),h(b,"class","tab-ctrl svelte-d6ps8u"),h(b,"id","pr-inv"),h(b,"type","checkbox"),h(M,"for","pr-inv"),h(M,"class","svelte-d6ps8u"),h($,"class","tab-ctrl svelte-d6ps8u"),h($,"id","pr-map"),h($,"type","checkbox"),h(w,"for","pr-map"),h(w,"class","svelte-d6ps8u"),h(S,"class","tab-ctrl svelte-d6ps8u"),h(S,"id","pr-levels"),h(S,"type","checkbox"),h(I,"for","pr-levels"),h(I,"class","svelte-d6ps8u"),h(G,"class","panels svelte-d6ps8u"),h(v,"class","pot-report svelte-d6ps8u")},m(l,a){o(l,t,a),u(t,n),u(n,s),s.checked=e[1].backpack,u(n,c),u(t,i),u(t,p),u(p,r),r.checked=e[1].guildstore,u(p,f),o(l,g,a),o(l,v,a),u(v,b),b.checked=e[1].inventory,u(v,y),u(v,M),u(v,_),u(v,$),$.checked=e[1].mapping,u(v,j),u(v,w),u(v,C),u(v,S),S.checked=e[1].thresholds,u(v,R),u(v,I),u(v,E),u(v,G),N&&N.m(G,null),u(G,P),Q&&Q.m(G,null),u(G,T),q&&q.m(G,null),A||(L=[x(s,"change",e[15]),x(s,"change",e[16]),x(r,"change",e[17]),x(r,"change",e[18]),x(b,"change",e[19]),x(b,"change",e[20]),x(b,"click",e[21],{once:!0}),x($,"change",e[22]),x($,"change",e[23]),x($,"click",e[24],{once:!0}),x(S,"change",e[25]),x(S,"change",e[26]),x(S,"click",e[27],{once:!0})],A=!0)},p(e,t){2&t[0]&&(s.checked=e[1].backpack),2&t[0]&&(r.checked=e[1].guildstore),2&t[0]&&(b.checked=e[1].inventory),2&t[0]&&($.checked=e[1].mapping),2&t[0]&&(S.checked=e[1].thresholds),e[2]?N?N.p(e,t):(N=Z(e),N.c(),N.m(G,P)):N&&(N.d(1),N=null),e[3]?Q?Q.p(e,t):(Q=D(e),Q.c(),Q.m(G,T)):Q&&(Q.d(1),Q=null),e[4]?q?q.p(e,t):(q=ne(e),q.c(),q.m(G,null)):q&&(q.d(1),q=null)},d(e){e&&(l(t),l(g),l(v)),N&&N.d(),Q&&Q.d(),q&&q.d(),A=!1,k(L)}}}function Z(e){let t,n,s=p(e[5]),c=[]
for(let t=0;t<s.length;t+=1)c[t]=z(W(e,s,t))
return{c(){t=a("div"),n=a("div")
for(let e=0;e<c.length;e+=1)c[e].c()
h(n,"class","inventory-grid-container svelte-d6ps8u"),h(t,"class","inventory svelte-d6ps8u")},m(e,s){o(e,t,s),u(t,n)
for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(n,null)},p(e,t){if(160&t[0]){let l
for(s=p(e[5]),l=0;l<s.length;l+=1){const o=W(e,s,l)
c[l]?c[l].p(o,t):(c[l]=z(o),c[l].c(),c[l].m(n,null))}for(;l<c.length;l+=1)c[l].d(1)
c.length=s.length}},d(e){e&&l(t),f(c,e)}}}function z(e){let t,n,s,c,p,f,g=e[56]+"",v=e[65]+""
return{c(){t=a("div"),n=d(g),s=m(),c=a("div"),p=d(v),f=m(),h(t,"class","svelte-d6ps8u"),h(c,"class","svelte-d6ps8u"),i(c,"background-color",e[7](e[65]))},m(e,l){o(e,t,l),u(t,n),o(e,s,l),o(e,c,l),u(c,p),u(c,f)},p(e,t){32&t[0]&&g!==(g=e[56]+"")&&r(n,g),32&t[0]&&v!==(v=e[65]+"")&&r(p,v),32&t[0]&&i(c,"background-color",e[7](e[65]))},d(e){e&&(l(t),l(s),l(c))}}}function D(e){let t,n,s,c,i,r,d,g,v,b,y,M=p(e[6]),_=[]
for(let t=0;t<M.length;t+=1)_[t]=te(U(e,M,t))
return{c(){t=a("div"),n=a("div")
for(let e=0;e<_.length;e+=1)_[e].c()
s=m(),c=a("div"),i=m(),r=a("div"),d=a("button"),d.textContent="Ignore All",g=m(),v=a("button"),v.textContent="Reset",h(c,"class","svelte-d6ps8u"),h(d,"class","custombutton svelte-d6ps8u"),h(d,"type","button"),h(v,"class","custombutton svelte-d6ps8u"),h(v,"type","button"),h(r,"class","svelte-d6ps8u"),h(n,"class","mapping-grid-container svelte-d6ps8u"),h(t,"class","mapping svelte-d6ps8u")},m(l,a){o(l,t,a),u(t,n)
for(let e=0;e<_.length;e+=1)_[e]&&_[e].m(n,null)
u(n,s),u(n,c),u(n,i),u(n,r),u(r,d),u(r,g),u(r,v),b||(y=[x(d,"click",e[33]),x(v,"click",e[34])],b=!0)},p(e,t){if(2368&t[0]){let l
for(M=p(e[6]),l=0;l<M.length;l+=1){const c=U(e,M,l)
_[l]?_[l].p(c,t):(_[l]=te(c),_[l].c(),_[l].m(n,s))}for(;l<_.length;l+=1)_[l].d(1)
_.length=M.length}},d(e){e&&l(t),f(_,e),b=!1,k(y)}}}function H(e){let t,n=p(e[6]),s=[]
for(let t=0;t<n.length;t+=1)s[t]=ee(V(e,n,t))
return{c(){for(let e=0;e<s.length;e+=1)s[e].c()
t=v()},m(e,n){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,n)
o(e,t,n)},p(e,l){if(64&l[0]){let c
for(n=p(e[6]),c=0;c<n.length;c+=1){const o=V(e,n,c)
s[c]?s[c].p(o,l):(s[c]=ee(o),s[c].c(),s[c].m(t.parentNode,t))}for(;c<s.length;c+=1)s[c].d(1)
s.length=n.length}},d(e){e&&l(t),f(s,e)}}}function J(e){let t,n,s,c=e[57]+""
return{c(){t=a("option"),n=d(c),t.__value=s=e[57],g(t,t.__value)},m(e,s){o(e,t,s),u(t,n)},p(e,l){64&l[0]&&c!==(c=e[57]+"")&&r(n,c),64&l[0]&&s!==(s=e[57])&&(t.__value=s,g(t,t.__value))},d(e){e&&l(t)}}}function ee(e){let t,n,s,c,i=e[62]+""
return{c(){t=a("option"),n=d(i),t.selected=s=e[57]===e[62],t.__value=c=e[62],g(t,t.__value)},m(e,s){o(e,t,s),u(t,n)},p(e,l){64&l[0]&&i!==(i=e[62]+"")&&r(n,i),64&l[0]&&s!==(s=e[57]===e[62])&&(t.selected=s),64&l[0]&&c!==(c=e[62])&&(t.__value=c,g(t,t.__value))},d(e){e&&l(t)}}}function te(e){let t,n,s,c,i,p,f,g,v,M,_,$=e[56]+""
function j(e,t){return e[59]?J:H}let w=j(e),C=w(e)
function S(){e[28].call(i,e[60],e[61])}function R(){return e[30](e[59],e[60],e[61])}function I(){e[31].call(v,e[60],e[61])}return{c(){t=a("div"),n=d($),s=m(),c=a("div"),i=a("select"),C.c(),f=m(),g=a("div"),v=a("input"),h(t,"class","svelte-d6ps8u"),h(i,"name",p=e[56]),h(i,"class","svelte-d6ps8u"),void 0===e[57]&&y(S),h(c,"class","svelte-d6ps8u"),h(v,"title","Ignore"),h(v,"type","checkbox"),h(v,"class","svelte-d6ps8u"),h(g,"class","svelte-d6ps8u")},m(l,a){o(l,t,a),u(t,n),o(l,s,a),o(l,c,a),u(c,i),C.m(i,null),b(i,e[57],!0),o(l,f,a),o(l,g,a),u(g,v),v.checked=e[58],M||(_=[x(i,"change",S),x(i,"change",e[29]),x(i,"mousedown",R),x(v,"change",I),x(v,"change",e[32]),x(v,"click",ie)],M=!0)},p(t,s){e=t,64&s[0]&&$!==($=e[56]+"")&&r(n,$),w===(w=j(e))&&C?C.p(e,s):(C.d(1),C=w(e),C&&(C.c(),C.m(i,null))),64&s[0]&&p!==(p=e[56])&&h(i,"name",p),64&s[0]&&b(i,e[57]),64&s[0]&&(v.checked=e[58])},d(e){e&&(l(t),l(s),l(c),l(f),l(g)),C.d(),M=!1,k(_)}}}function ne(e){let t,n,s,c,i,p,r
return{c(){t=a("div"),n=d("Min:\n              "),s=a("input"),c=d("\n              Max:\n              "),i=a("input"),h(s,"max","999"),h(s,"min","0"),h(s,"type","number"),h(s,"class","svelte-d6ps8u"),h(i,"max","999"),h(i,"min","0"),h(i,"type","number"),h(i,"class","svelte-d6ps8u"),h(t,"class","thresholds svelte-d6ps8u")},m(l,a){o(l,t,a),u(t,n),u(t,s),g(s,e[1].minpoint),u(t,c),u(t,i),g(i,e[1].maxpoint),p||(r=[x(s,"input",e[35]),x(s,"input",e[36]),x(i,"input",e[37]),x(i,"input",e[38])],p=!0)},p(e,t){2&t[0]&&M(s.value)!==e[1].minpoint&&g(s,e[1].minpoint),2&t[0]&&M(i.value)!==e[1].maxpoint&&g(i,e[1].maxpoint)},d(e){e&&l(t),p=!1,k(r)}}}function se(e){let t
return{c(){t=d("Loading...")},m(e,n){o(e,t,n)},p:c,d(e){e&&l(t)}}}function le(e){let t,n={ctx:e,current:null,token:null,hasCatch:!0,pending:se,then:Y,catch:X,error:68}
return P(e[14](),n),{c(){t=a("div"),n.block.c(),h(t,"class","main svelte-d6ps8u")},m(e,s){o(e,t,s),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p(t,s){T(n,e=t,s)},d(e){e&&l(t),n.block.d(),n.token=null,n=null}}}function ce(e){let t
return{c(){t=d("Pot Report")},m(e,n){o(e,t,n)},d(e){e&&l(t)}}}function oe(e){let t,n
return t=new F({props:{visible:e[0],$$slots:{title:[ce],default:[le]},$$scope:{ctx:e}}}),t.$on("close",e[39]),{c(){C(t.$$.fragment)},m(e,s){w(t,e,s),n=!0},p(e,n){const s={}
1&n[0]&&(s.visible=e[0]),126&n[0]|128&n[2]&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(j(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}const ae="fsh_potReport",ie=e=>e.target.blur()
function pe(e,t,n){const s={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let{visible:l=!0}=t,c=null,o=!1,a=!1,i=!1,p=[],r=[],u=[]
const d=({t:e})=>15===e,m=({ignore:e})=>!e,h=e=>({name:t})=>t===e,f=(e,t)=>E(e.n,t.n),g=({r:e})=>e,v=e=>S("pot-report",e),k=({player:e,n:t})=>({loc:e?1:2,n:t}),b=()=>R(ae,c),x=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),y=e=>r.filter((e=>({n:t})=>e.some(h(t)))(e)).filter((({loc:e})=>c.backpack||1!==e)).filter((({loc:e})=>c.guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(h(n)).mapped,n:n}))(e))
function _(){b(),n(5,p=function(){const e=c.potMap.filter(m),t=y(e)
return B(e,"mapped").map(x(t))}()),n(6,u=c.potMap.map((e=>({...e,waiting:!0}))))}function $(){n(1,c.potMap=u.map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),c),_()}function j(){n(1,c.potMap=c.potMap.map((e=>({...e,ignore:!0}))),c),_()}function w(){n(1,c.potMap=c.potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),c),_()}return e.$$set=e=>{"visible"in e&&n(0,l=e.visible)},[l,c,o,a,i,p,u,e=>function(e,t,n){const s=K((e-t)/(n-t)*100)
let l=255,c=255
return s<50?c=Math.round(5.1*s):l=Math.round(510-5.1*s),`#${O(65536*l+256*c+0)}`}(e,c.minpoint,c.maxpoint),v,b,_,$,j,w,async function(){!async function(){n(1,c=await I(ae)||A(s)),n(2,o=c.inventory),n(3,a=c.mapping),n(4,i=c.thresholds),n(1,c.backpack=c.backpack??s.backpack,c),n(1,c.guildstore=c.guildstore??s.guildstore,c)}()
const e=await Q([L(),N()])
if(!q(e[0]?.r)||!q(e[1]?.r))throw new Error("Server Error")
r=(e=>e.flatMap(g).filter(d).map(k).sort(f))(e),n(1,c.potMap=B(r,"n").map((({n:e})=>({name:e,mapped:c?.potMap?.find(h(e))?.mapped||e,ignore:c?.potMap?.find(h(e))?.ignore??!1}))),c),_()},function(){c.backpack=this.checked,n(1,c)},()=>{v("backpack"),b(),_()},function(){c.guildstore=this.checked,n(1,c)},()=>{v("guildstore"),b(),_()},function(){c.inventory=this.checked,n(1,c)},()=>{v("inventory"),b()},()=>{n(2,o=!0)},function(){c.mapping=this.checked,n(1,c)},()=>{v("mapping"),b()},()=>{n(3,a=!0)},function(){c.thresholds=this.checked,n(1,c)},()=>{v("thresholds"),b()},()=>{n(4,i=!0)},function(e,t){e[t].mapped=G(this),n(6,u)},()=>{v("mapped"),$()},(e,t,s)=>{n(6,t[s].waiting=!1,u)},function(e,t){e[t].ignore=this.checked,n(6,u)},()=>{v("ignore"),$()},()=>{v("ignore-all"),j()},()=>{v("reset"),w()},function(){c.minpoint=M(this.value),n(1,c)},()=>{v("minpoint"),_()},function(){c.maxpoint=M(this.value),n(1,c)},()=>{v("maxpoint"),_()},()=>{v("close"),n(0,l=!1)}]}class re extends t{constructor(e){super(),n(this,e,pe,oe,s,{visible:0},null,[-1,-1,-1])}}const ue={visible:!0}
let de=0
function me(){de=e(ue,de,re)}export{me as default}
//# sourceMappingURL=potReport-D1yhT9fC.js.map
