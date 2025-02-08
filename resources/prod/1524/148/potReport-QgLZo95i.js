import{S as e,P as t,Q as n,bJ as s,bD as l,bE as c,bK as a,bL as o,s as i,bx as p,au as r,U as u,av as d,_ as m,a3 as h,a5 as f,a9 as v,v as g,I as k,bu as b,aa as x,dv as y,bw as M,bX as $,T as _,bp as w,V as C,a0 as R,a1 as j,a4 as I,R as S,bq as E,Z as P,a8 as T,Y as G,a6 as L,ax as Q,dR as V}from"./calfSystem-BldO1y8X.js"
import{d as q,a as A}from"./deepClone-Dxf3yU2s.js"
import{d as B}from"./daGuildReport-435Svqig.js"
import{M as D}from"./ModalTitled-DgIzlEw4.js"
import"./guildInventory-BTZVy_1P.js"
const J=e=>Math.max(Math.min(e,100),0),K=e=>`000000${e.toString(16)}`.slice(-6)
function N(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[57]=t[n].mapped,s[58]=t[n].ignore,s[59]=t[n].waiting,s[60]=t,s[61]=n,s}function U(e,t,n){const s=e.slice()
return s[62]=t[n].name,s}function X(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[65]=t[n].count,s}function Y(e){let t
return{c(){t=h("p"),t.textContent=`${e[68].message}`,w(t,"color","red")},m(e,n){m(e,t,n)},p:_,d(e){e&&u(t)}}}function Z(e){let t,n,s,l,c,a,o,i,p,r,d,g,k,b,x,y,M,$,_,w,S,E,P,T,G,L,Q,V=e[2]&&z(e),q=e[3]&&H(e),A=e[4]&&ne(e)
return{c(){t=h("div"),n=h("label"),s=h("input"),l=v("\n          Member Backpacks"),c=I(),a=h("label"),o=h("input"),i=v("\n          Guild Store"),p=I(),r=h("div"),d=h("input"),g=I(),k=h("label"),k.textContent="Composed Potion Inventory",b=I(),x=h("input"),y=I(),M=h("label"),M.textContent="Mapping",$=I(),_=h("input"),w=I(),S=h("label"),S.textContent="Thresholds",E=I(),P=h("div"),V&&V.c(),T=I(),q&&q.c(),G=I(),A&&A.c(),f(s,"type","checkbox"),f(n,"class","svelte-d6ps8u"),f(o,"type","checkbox"),f(a,"class","svelte-d6ps8u"),f(t,"class","filters svelte-d6ps8u"),f(d,"class","tab-ctrl svelte-d6ps8u"),f(d,"id","pr-inv"),f(d,"type","checkbox"),f(k,"for","pr-inv"),f(k,"class","svelte-d6ps8u"),f(x,"class","tab-ctrl svelte-d6ps8u"),f(x,"id","pr-map"),f(x,"type","checkbox"),f(M,"for","pr-map"),f(M,"class","svelte-d6ps8u"),f(_,"class","tab-ctrl svelte-d6ps8u"),f(_,"id","pr-levels"),f(_,"type","checkbox"),f(S,"for","pr-levels"),f(S,"class","svelte-d6ps8u"),f(P,"class","panels svelte-d6ps8u"),f(r,"class","pot-report svelte-d6ps8u")},m(u,h){m(u,t,h),R(t,n),R(n,s),s.checked=e[1].backpack,R(n,l),R(t,c),R(t,a),R(a,o),o.checked=e[1].guildstore,R(a,i),m(u,p,h),m(u,r,h),R(r,d),d.checked=e[1].inventory,R(r,g),R(r,k),R(r,b),R(r,x),x.checked=e[1].mapping,R(r,y),R(r,M),R(r,$),R(r,_),_.checked=e[1].thresholds,R(r,w),R(r,S),R(r,E),R(r,P),V&&V.m(P,null),R(P,T),q&&q.m(P,null),R(P,G),A&&A.m(P,null),L||(Q=[j(s,"change",e[15]),j(s,"change",e[16]),j(o,"change",e[17]),j(o,"change",e[18]),j(d,"change",e[19]),j(d,"change",e[20]),j(d,"click",e[21],{once:!0}),j(x,"change",e[22]),j(x,"change",e[23]),j(x,"click",e[24],{once:!0}),j(_,"change",e[25]),j(_,"change",e[26]),j(_,"click",e[27],{once:!0})],L=!0)},p(e,t){2&t[0]&&(s.checked=e[1].backpack),2&t[0]&&(o.checked=e[1].guildstore),2&t[0]&&(d.checked=e[1].inventory),2&t[0]&&(x.checked=e[1].mapping),2&t[0]&&(_.checked=e[1].thresholds),e[2]?V?V.p(e,t):(V=z(e),V.c(),V.m(P,T)):V&&(V.d(1),V=null),e[3]?q?q.p(e,t):(q=H(e),q.c(),q.m(P,G)):q&&(q.d(1),q=null),e[4]?A?A.p(e,t):(A=ne(e),A.c(),A.m(P,null)):A&&(A.d(1),A=null)},d(e){e&&(u(t),u(p),u(r)),V&&V.d(),q&&q.d(),A&&A.d(),L=!1,C(Q)}}}function z(e){let t,n,s=S(e[5]),l=[]
for(let t=0;t<s.length;t+=1)l[t]=F(X(e,s,t))
return{c(){t=h("div"),n=h("div")
for(let e=0;e<l.length;e+=1)l[e].c()
f(n,"class","inventory-grid-container svelte-d6ps8u"),f(t,"class","inventory svelte-d6ps8u")},m(e,s){m(e,t,s),R(t,n)
for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(n,null)},p(e,t){if(160&t[0]){let c
for(s=S(e[5]),c=0;c<s.length;c+=1){const a=X(e,s,c)
l[c]?l[c].p(a,t):(l[c]=F(a),l[c].c(),l[c].m(n,null))}for(;c<l.length;c+=1)l[c].d(1)
l.length=s.length}},d(e){e&&u(t),E(l,e)}}}function F(e){let t,n,s,l,c,a,o=e[56]+"",i=e[65]+""
return{c(){t=h("div"),n=v(o),s=I(),l=h("div"),c=v(i),a=I(),f(t,"class","svelte-d6ps8u"),f(l,"class","svelte-d6ps8u"),w(l,"background-color",e[7](e[65]))},m(e,o){m(e,t,o),R(t,n),m(e,s,o),m(e,l,o),R(l,c),R(l,a)},p(e,t){32&t[0]&&o!==(o=e[56]+"")&&T(n,o),32&t[0]&&i!==(i=e[65]+"")&&T(c,i),32&t[0]&&w(l,"background-color",e[7](e[65]))},d(e){e&&(u(t),u(s),u(l))}}}function H(e){let t,n,s,l,c,a,o,i,p,r,d,v=S(e[6]),g=[]
for(let t=0;t<v.length;t+=1)g[t]=te(N(e,v,t))
return{c(){t=h("div"),n=h("div")
for(let e=0;e<g.length;e+=1)g[e].c()
s=I(),l=h("div"),c=I(),a=h("div"),o=h("button"),o.textContent="Ignore All",i=I(),p=h("button"),p.textContent="Reset",f(l,"class","svelte-d6ps8u"),f(o,"class","custombutton svelte-d6ps8u"),f(o,"type","button"),f(p,"class","custombutton svelte-d6ps8u"),f(p,"type","button"),f(a,"class","svelte-d6ps8u"),f(n,"class","mapping-grid-container svelte-d6ps8u"),f(t,"class","mapping svelte-d6ps8u")},m(u,h){m(u,t,h),R(t,n)
for(let e=0;e<g.length;e+=1)g[e]&&g[e].m(n,null)
R(n,s),R(n,l),R(n,c),R(n,a),R(a,o),R(a,i),R(a,p),r||(d=[j(o,"click",e[33]),j(p,"click",e[34])],r=!0)},p(e,t){if(2368&t[0]){let l
for(v=S(e[6]),l=0;l<v.length;l+=1){const c=N(e,v,l)
g[l]?g[l].p(c,t):(g[l]=te(c),g[l].c(),g[l].m(n,s))}for(;l<g.length;l+=1)g[l].d(1)
g.length=v.length}},d(e){e&&u(t),E(g,e),r=!1,C(d)}}}function O(e){let t,n=S(e[6]),s=[]
for(let t=0;t<n.length;t+=1)s[t]=ee(U(e,n,t))
return{c(){for(let e=0;e<s.length;e+=1)s[e].c()
t=Q()},m(e,n){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,n)
m(e,t,n)},p(e,l){if(64&l[0]){let c
for(n=S(e[6]),c=0;c<n.length;c+=1){const a=U(e,n,c)
s[c]?s[c].p(a,l):(s[c]=ee(a),s[c].c(),s[c].m(t.parentNode,t))}for(;c<s.length;c+=1)s[c].d(1)
s.length=n.length}},d(e){e&&u(t),E(s,e)}}}function W(e){let t,n,s,l=e[57]+""
return{c(){t=h("option"),n=v(l),t.__value=s=e[57],P(t,t.__value)},m(e,s){m(e,t,s),R(t,n)},p(e,c){64&c[0]&&l!==(l=e[57]+"")&&T(n,l),64&c[0]&&s!==(s=e[57])&&(t.__value=s,P(t,t.__value))},d(e){e&&u(t)}}}function ee(e){let t,n,s,l,c=e[62]+""
return{c(){t=h("option"),n=v(c),t.selected=s=e[57]===e[62],t.__value=l=e[62],P(t,t.__value)},m(e,s){m(e,t,s),R(t,n)},p(e,a){64&a[0]&&c!==(c=e[62]+"")&&T(n,c),64&a[0]&&s!==(s=e[57]===e[62])&&(t.selected=s),64&a[0]&&l!==(l=e[62])&&(t.__value=l,P(t,t.__value))},d(e){e&&u(t)}}}function te(e){let t,n,s,l,c,a,o,i,p,r,d,g=e[56]+""
function k(e,t){return e[59]?W:O}let b=k(e),x=b(e)
function y(){e[28].call(c,e[60],e[61])}function M(){return e[30](e[59],e[60],e[61])}function $(){e[31].call(p,e[60],e[61])}return{c(){t=h("div"),n=v(g),s=I(),l=h("div"),c=h("select"),x.c(),o=I(),i=h("div"),p=h("input"),f(t,"class","svelte-d6ps8u"),f(c,"name",a=e[56]),f(c,"class","svelte-d6ps8u"),void 0===e[57]&&L(y),f(l,"class","svelte-d6ps8u"),f(p,"title","Ignore"),f(p,"type","checkbox"),f(p,"class","svelte-d6ps8u"),f(i,"class","svelte-d6ps8u")},m(a,u){m(a,t,u),R(t,n),m(a,s,u),m(a,l,u),R(l,c),x.m(c,null),G(c,e[57],!0),m(a,o,u),m(a,i,u),R(i,p),p.checked=e[58],r||(d=[j(c,"change",y),j(c,"change",e[29]),j(c,"mousedown",M),j(p,"change",$),j(p,"change",e[32]),j(p,"click",ie)],r=!0)},p(t,s){e=t,64&s[0]&&g!==(g=e[56]+"")&&T(n,g),b===(b=k(e))&&x?x.p(e,s):(x.d(1),x=b(e),x&&(x.c(),x.m(c,null))),64&s[0]&&a!==(a=e[56])&&f(c,"name",a),64&s[0]&&G(c,e[57]),64&s[0]&&(p.checked=e[58])},d(e){e&&(u(t),u(s),u(l),u(o),u(i)),x.d(),r=!1,C(d)}}}function ne(e){let t,n,s,l,c,a,o
return{c(){t=h("div"),n=v("Min:\n              "),s=h("input"),l=v("\n              Max:\n              "),c=h("input"),f(s,"max","999"),f(s,"min","0"),f(s,"type","number"),f(s,"class","svelte-d6ps8u"),f(c,"max","999"),f(c,"min","0"),f(c,"type","number"),f(c,"class","svelte-d6ps8u"),f(t,"class","thresholds svelte-d6ps8u")},m(i,p){m(i,t,p),R(t,n),R(t,s),P(s,e[1].minpoint),R(t,l),R(t,c),P(c,e[1].maxpoint),a||(o=[j(s,"input",e[35]),j(s,"input",e[36]),j(c,"input",e[37]),j(c,"input",e[38])],a=!0)},p(e,t){2&t[0]&&y(s.value)!==e[1].minpoint&&P(s,e[1].minpoint),2&t[0]&&y(c.value)!==e[1].maxpoint&&P(c,e[1].maxpoint)},d(e){e&&u(t),a=!1,C(o)}}}function se(e){let t
return{c(){t=v("Loading...")},m(e,n){m(e,t,n)},p:_,d(e){e&&u(t)}}}function le(e){let t,n={ctx:e,current:null,token:null,hasCatch:!0,pending:se,then:Z,catch:Y,error:68}
return r(e[14](),n),{c(){t=h("div"),n.block.c(),f(t,"class","main svelte-d6ps8u")},m(e,s){m(e,t,s),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p(t,s){d(n,e=t,s)},d(e){e&&u(t),n.block.d(),n.token=null,n=null}}}function ce(e){let t
return{c(){t=v("Pot Report")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function ae(e){let t,n
return t=new D({props:{visible:e[0],$$slots:{title:[ce],default:[le]},$$scope:{ctx:e}}}),t.$on("close",e[39]),{c(){o(t.$$.fragment)},m(e,s){a(t,e,s),n=!0},p(e,n){const s={}
1&n[0]&&(s.visible=e[0]),126&n[0]|128&n[2]&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){l(t.$$.fragment,e),n=!1},d(e){s(t,e)}}}const oe="fsh_potReport",ie=e=>e.target.blur()
function pe(e,t,n){const s={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let{visible:l=!0}=t,c=null,a=!1,o=!1,r=!1,u=[],d=[],m=[]
const h=({t:e})=>15===e,f=({ignore:e})=>!e,v=e=>({name:t})=>t===e,_=(e,t)=>$(e.n,t.n),w=({r:e})=>e,C=e=>i("pot-report",e),R=({player:e,n:t})=>({loc:e?1:2,n:t}),j=()=>p(oe,c),I=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),S=e=>d.filter((e=>({n:t})=>e.some(v(t)))(e)).filter((({loc:e})=>c.backpack||1!==e)).filter((({loc:e})=>c.guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(v(n)).mapped,n:n}))(e))
function E(){j(),n(5,u=function(){const e=c.potMap.filter(f),t=S(e)
return b(e,"mapped").map(I(t))}()),n(6,m=c.potMap.map((e=>({...e,waiting:!0}))))}function P(){n(1,c.potMap=m.map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),c),E()}function T(){n(1,c.potMap=c.potMap.map((e=>({...e,ignore:!0}))),c),E()}function G(){n(1,c.potMap=c.potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),c),E()}return e.$$set=e=>{"visible"in e&&n(0,l=e.visible)},[l,c,a,o,r,u,m,e=>function(e,t,n){const s=J((e-t)/(n-t)*100)
let l=255,c=255
return s<50?c=Math.round(5.1*s):l=Math.round(510-5.1*s),`#${K(65536*l+256*c+0)}`}(e,c.minpoint,c.maxpoint),C,j,E,P,T,G,async function(){!async function(){n(1,c=await M(oe)||A(s)),n(2,a=c.inventory),n(3,o=c.mapping),n(4,r=c.thresholds),n(1,c.backpack=c.backpack??s.backpack,c),n(1,c.guildstore=c.guildstore??s.guildstore,c)}()
const e=await g([q(),B()])
if(!k(e[0]?.r)||!k(e[1]?.r))throw new Error("Server Error")
d=(e=>e.flatMap(w).filter(h).map(R).sort(_))(e),n(1,c.potMap=b(d,"n").map((({n:e})=>({name:e,mapped:c?.potMap?.find(v(e))?.mapped||e,ignore:c?.potMap?.find(v(e))?.ignore??!1}))),c),E()},function(){c.backpack=this.checked,n(1,c)},()=>{C("backpack"),j(),E()},function(){c.guildstore=this.checked,n(1,c)},()=>{C("guildstore"),j(),E()},function(){c.inventory=this.checked,n(1,c)},()=>{C("inventory"),j()},()=>{n(2,a=!0)},function(){c.mapping=this.checked,n(1,c)},()=>{C("mapping"),j()},()=>{n(3,o=!0)},function(){c.thresholds=this.checked,n(1,c)},()=>{C("thresholds"),j()},()=>{n(4,r=!0)},function(e,t){e[t].mapped=x(this),n(6,m)},()=>{C("mapped"),P()},(e,t,s)=>{n(6,t[s].waiting=!1,m)},function(e,t){e[t].ignore=this.checked,n(6,m)},()=>{C("ignore"),P()},()=>{C("ignore-all"),T()},()=>{C("reset"),G()},function(){c.minpoint=y(this.value),n(1,c)},()=>{C("minpoint"),E()},function(){c.maxpoint=y(this.value),n(1,c)},()=>{C("maxpoint"),E()},()=>{C("close"),n(0,l=!1)}]}class re extends e{constructor(e){super(),t(this,e,pe,ae,n,{visible:0},null,[-1,-1,-1])}}const ue={visible:!0}
let de=0
function me(){de=V(ue,de,re)}export{me as default}
//# sourceMappingURL=potReport-QgLZo95i.js.map
