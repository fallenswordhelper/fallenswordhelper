import{i as e}from"./Modal-BMQofQrT.js"
import{S as t,O as n,P as s,bF as l,bG as c,bA as a,bD as o,bH as i,as as p,R as r,U as u,W as d,at as m,a4 as h,a7 as f,s as g,b8 as v,u as k,H as b,a9 as x,dp as y,bu as M,b6 as $,bo as _,a3 as w,T as C,X as j,_ as S,a5 as R,Q as I,bp as T,a8 as A,V as G,Y as P,Z as E,bU as H,av as U}from"./calfSystem-fMW-YMyF.js"
import{d as X,a as B}from"./deepClone-BiqS5lj8.js"
import{d as D}from"./daGuildReport-CvskNLmM.js"
import{M as F}from"./ModalTitled-DdT5kcKI.js"
import"./guildInventory-CBghvkUS.js"
const L=e=>Math.max(Math.min(e,100),0),N=e=>`000000${e.toString(16)}`.slice(-6)
function O(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[57]=t[n].mapped,s[58]=t[n].ignore,s[59]=t[n].waiting,s[60]=t,s[61]=n,s}function Q(e,t,n){const s=e.slice()
return s[62]=t[n].name,s}function V(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[65]=t[n].count,s}function W(e){let t
return{c(){t=r("p"),t.textContent=`${e[68].message}`,_(t,"color","red")},m(e,n){d(e,t,n)},p:w,d(e){e&&h(t)}}}function Y(e){let t,n,s,l,c,a,o,i,p,m,g,v,k,b,x,y,M,$,_,w,I,T,A,G,P,E,H,U=e[2]&&Z(e),X=e[3]&&z(e),B=e[4]&&ne(e)
return{c(){t=r("div"),n=r("label"),s=r("input"),l=f("\n          Member Backpacks"),c=C(),a=r("label"),o=r("input"),i=f("\n          Guild Store"),p=C(),m=r("div"),g=r("input"),v=C(),k=r("label"),k.textContent="Composed Potion Inventory",b=C(),x=r("input"),y=C(),M=r("label"),M.textContent="Mapping",$=C(),_=r("input"),w=C(),I=r("label"),I.textContent="Thresholds",T=C(),A=r("div"),U&&U.c(),G=C(),X&&X.c(),P=C(),B&&B.c(),u(s,"type","checkbox"),u(n,"class","svelte-d6ps8u"),u(o,"type","checkbox"),u(a,"class","svelte-d6ps8u"),u(t,"class","filters svelte-d6ps8u"),u(g,"class","tab-ctrl svelte-d6ps8u"),u(g,"id","pr-inv"),u(g,"type","checkbox"),u(k,"for","pr-inv"),u(k,"class","svelte-d6ps8u"),u(x,"class","tab-ctrl svelte-d6ps8u"),u(x,"id","pr-map"),u(x,"type","checkbox"),u(M,"for","pr-map"),u(M,"class","svelte-d6ps8u"),u(_,"class","tab-ctrl svelte-d6ps8u"),u(_,"id","pr-levels"),u(_,"type","checkbox"),u(I,"for","pr-levels"),u(I,"class","svelte-d6ps8u"),u(A,"class","panels svelte-d6ps8u"),u(m,"class","pot-report svelte-d6ps8u")},m(r,u){d(r,t,u),j(t,n),j(n,s),s.checked=e[1].backpack,j(n,l),j(t,c),j(t,a),j(a,o),o.checked=e[1].guildstore,j(a,i),d(r,p,u),d(r,m,u),j(m,g),g.checked=e[1].inventory,j(m,v),j(m,k),j(m,b),j(m,x),x.checked=e[1].mapping,j(m,y),j(m,M),j(m,$),j(m,_),_.checked=e[1].thresholds,j(m,w),j(m,I),j(m,T),j(m,A),U&&U.m(A,null),j(A,G),X&&X.m(A,null),j(A,P),B&&B.m(A,null),E||(H=[S(s,"change",e[15]),S(s,"change",e[16]),S(o,"change",e[17]),S(o,"change",e[18]),S(g,"change",e[19]),S(g,"change",e[20]),S(g,"click",e[21],{once:!0}),S(x,"change",e[22]),S(x,"change",e[23]),S(x,"click",e[24],{once:!0}),S(_,"change",e[25]),S(_,"change",e[26]),S(_,"click",e[27],{once:!0})],E=!0)},p(e,t){2&t[0]&&(s.checked=e[1].backpack),2&t[0]&&(o.checked=e[1].guildstore),2&t[0]&&(g.checked=e[1].inventory),2&t[0]&&(x.checked=e[1].mapping),2&t[0]&&(_.checked=e[1].thresholds),e[2]?U?U.p(e,t):(U=Z(e),U.c(),U.m(A,G)):U&&(U.d(1),U=null),e[3]?X?X.p(e,t):(X=z(e),X.c(),X.m(A,P)):X&&(X.d(1),X=null),e[4]?B?B.p(e,t):(B=ne(e),B.c(),B.m(A,null)):B&&(B.d(1),B=null)},d(e){e&&(h(t),h(p),h(m)),U&&U.d(),X&&X.d(),B&&B.d(),E=!1,R(H)}}}function Z(e){let t,n,s=I(e[5]),l=[]
for(let t=0;t<s.length;t+=1)l[t]=q(V(e,s,t))
return{c(){t=r("div"),n=r("div")
for(let e=0;e<l.length;e+=1)l[e].c()
u(n,"class","inventory-grid-container svelte-d6ps8u"),u(t,"class","inventory svelte-d6ps8u")},m(e,s){d(e,t,s),j(t,n)
for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(n,null)},p(e,t){if(160&t[0]){let c
for(s=I(e[5]),c=0;c<s.length;c+=1){const a=V(e,s,c)
l[c]?l[c].p(a,t):(l[c]=q(a),l[c].c(),l[c].m(n,null))}for(;c<l.length;c+=1)l[c].d(1)
l.length=s.length}},d(e){e&&h(t),T(l,e)}}}function q(e){let t,n,s,l,c,a,o=e[56]+"",i=e[65]+""
return{c(){t=r("div"),n=f(o),s=C(),l=r("div"),c=f(i),a=C(),u(t,"class","svelte-d6ps8u"),u(l,"class","svelte-d6ps8u"),_(l,"background-color",e[7](e[65]))},m(e,o){d(e,t,o),j(t,n),d(e,s,o),d(e,l,o),j(l,c),j(l,a)},p(e,t){32&t[0]&&o!==(o=e[56]+"")&&A(n,o),32&t[0]&&i!==(i=e[65]+"")&&A(c,i),32&t[0]&&_(l,"background-color",e[7](e[65]))},d(e){e&&(h(t),h(s),h(l))}}}function z(e){let t,n,s,l,c,a,o,i,p,m,f,g=I(e[6]),v=[]
for(let t=0;t<g.length;t+=1)v[t]=te(O(e,g,t))
return{c(){t=r("div"),n=r("div")
for(let e=0;e<v.length;e+=1)v[e].c()
s=C(),l=r("div"),c=C(),a=r("div"),o=r("button"),o.textContent="Ignore All",i=C(),p=r("button"),p.textContent="Reset",u(l,"class","svelte-d6ps8u"),u(o,"class","custombutton svelte-d6ps8u"),u(o,"type","button"),u(p,"class","custombutton svelte-d6ps8u"),u(p,"type","button"),u(a,"class","svelte-d6ps8u"),u(n,"class","mapping-grid-container svelte-d6ps8u"),u(t,"class","mapping svelte-d6ps8u")},m(r,u){d(r,t,u),j(t,n)
for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(n,null)
j(n,s),j(n,l),j(n,c),j(n,a),j(a,o),j(a,i),j(a,p),m||(f=[S(o,"click",e[33]),S(p,"click",e[34])],m=!0)},p(e,t){if(2368&t[0]){let l
for(g=I(e[6]),l=0;l<g.length;l+=1){const c=O(e,g,l)
v[l]?v[l].p(c,t):(v[l]=te(c),v[l].c(),v[l].m(n,s))}for(;l<v.length;l+=1)v[l].d(1)
v.length=g.length}},d(e){e&&h(t),T(v,e),m=!1,R(f)}}}function J(e){let t,n=I(e[6]),s=[]
for(let t=0;t<n.length;t+=1)s[t]=ee(Q(e,n,t))
return{c(){for(let e=0;e<s.length;e+=1)s[e].c()
t=U()},m(e,n){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,n)
d(e,t,n)},p(e,l){if(64&l[0]){let c
for(n=I(e[6]),c=0;c<n.length;c+=1){const a=Q(e,n,c)
s[c]?s[c].p(a,l):(s[c]=ee(a),s[c].c(),s[c].m(t.parentNode,t))}for(;c<s.length;c+=1)s[c].d(1)
s.length=n.length}},d(e){e&&h(t),T(s,e)}}}function K(e){let t,n,s,l=e[57]+""
return{c(){t=r("option"),n=f(l),t.__value=s=e[57],E(t,t.__value)},m(e,s){d(e,t,s),j(t,n)},p(e,c){64&c[0]&&l!==(l=e[57]+"")&&A(n,l),64&c[0]&&s!==(s=e[57])&&(t.__value=s,E(t,t.__value))},d(e){e&&h(t)}}}function ee(e){let t,n,s,l,c=e[62]+""
return{c(){t=r("option"),n=f(c),t.selected=s=e[57]===e[62],t.__value=l=e[62],E(t,t.__value)},m(e,s){d(e,t,s),j(t,n)},p(e,a){64&a[0]&&c!==(c=e[62]+"")&&A(n,c),64&a[0]&&s!==(s=e[57]===e[62])&&(t.selected=s),64&a[0]&&l!==(l=e[62])&&(t.__value=l,E(t,t.__value))},d(e){e&&h(t)}}}function te(e){let t,n,s,l,c,a,o,i,p,m,g,v=e[56]+""
function k(e,t){return e[59]?K:J}let b=k(e),x=b(e)
function y(){e[28].call(c,e[60],e[61])}function M(){return e[30](e[59],e[60],e[61])}function $(){e[31].call(p,e[60],e[61])}return{c(){t=r("div"),n=f(v),s=C(),l=r("div"),c=r("select"),x.c(),o=C(),i=r("div"),p=r("input"),u(t,"class","svelte-d6ps8u"),u(c,"name",a=e[56]),u(c,"class","svelte-d6ps8u"),void 0===e[57]&&G(y),u(l,"class","svelte-d6ps8u"),u(p,"title","Ignore"),u(p,"type","checkbox"),u(p,"class","svelte-d6ps8u"),u(i,"class","svelte-d6ps8u")},m(a,r){d(a,t,r),j(t,n),d(a,s,r),d(a,l,r),j(l,c),x.m(c,null),P(c,e[57],!0),d(a,o,r),d(a,i,r),j(i,p),p.checked=e[58],m||(g=[S(c,"change",y),S(c,"change",e[29]),S(c,"mousedown",M),S(p,"change",$),S(p,"change",e[32]),S(p,"click",ie)],m=!0)},p(t,s){e=t,64&s[0]&&v!==(v=e[56]+"")&&A(n,v),b===(b=k(e))&&x?x.p(e,s):(x.d(1),x=b(e),x&&(x.c(),x.m(c,null))),64&s[0]&&a!==(a=e[56])&&u(c,"name",a),64&s[0]&&P(c,e[57]),64&s[0]&&(p.checked=e[58])},d(e){e&&(h(t),h(s),h(l),h(o),h(i)),x.d(),m=!1,R(g)}}}function ne(e){let t,n,s,l,c,a,o
return{c(){t=r("div"),n=f("Min:\n              "),s=r("input"),l=f("\n              Max:\n              "),c=r("input"),u(s,"max","999"),u(s,"min","0"),u(s,"type","number"),u(s,"class","svelte-d6ps8u"),u(c,"max","999"),u(c,"min","0"),u(c,"type","number"),u(c,"class","svelte-d6ps8u"),u(t,"class","thresholds svelte-d6ps8u")},m(i,p){d(i,t,p),j(t,n),j(t,s),E(s,e[1].minpoint),j(t,l),j(t,c),E(c,e[1].maxpoint),a||(o=[S(s,"input",e[35]),S(s,"input",e[36]),S(c,"input",e[37]),S(c,"input",e[38])],a=!0)},p(e,t){2&t[0]&&y(s.value)!==e[1].minpoint&&E(s,e[1].minpoint),2&t[0]&&y(c.value)!==e[1].maxpoint&&E(c,e[1].maxpoint)},d(e){e&&h(t),a=!1,R(o)}}}function se(e){let t
return{c(){t=f("Loading...")},m(e,n){d(e,t,n)},p:w,d(e){e&&h(t)}}}function le(e){let t,n={ctx:e,current:null,token:null,hasCatch:!0,pending:se,then:Y,catch:W,error:68}
return p(e[14](),n),{c(){t=r("div"),n.block.c(),u(t,"class","main svelte-d6ps8u")},m(e,s){d(e,t,s),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p(t,s){m(n,e=t,s)},d(e){e&&h(t),n.block.d(),n.token=null,n=null}}}function ce(e){let t
return{c(){t=f("Pot Report")},m(e,n){d(e,t,n)},d(e){e&&h(t)}}}function ae(e){let t,n
return t=new F({props:{visible:e[0],$$slots:{title:[ce],default:[le]},$$scope:{ctx:e}}}),t.$on("close",e[39]),{c(){l(t.$$.fragment)},m(e,s){c(t,e,s),n=!0},p(e,n){const s={}
1&n[0]&&(s.visible=e[0]),126&n[0]|128&n[2]&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(a(t.$$.fragment,e),n=!0)},o(e){o(t.$$.fragment,e),n=!1},d(e){i(t,e)}}}const oe="fsh_potReport",ie=e=>e.target.blur()
function pe(e,t,n){const s={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let{visible:l=!0}=t,c=null,a=!1,o=!1,i=!1,p=[],r=[],u=[]
const d=({t:e})=>15===e,m=({ignore:e})=>!e,h=e=>({name:t})=>t===e,f=(e,t)=>H(e.n,t.n),_=({r:e})=>e,w=e=>g("pot-report",e),C=({player:e,n:t})=>({loc:e?1:2,n:t}),j=()=>v(oe,c),S=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),R=e=>r.filter((e=>({n:t})=>e.some(h(t)))(e)).filter((({loc:e})=>c.backpack||1!==e)).filter((({loc:e})=>c.guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(h(n)).mapped,n:n}))(e))
function I(){j(),n(5,p=function(){const e=c.potMap.filter(m),t=R(e)
return M(e,"mapped").map(S(t))}()),n(6,u=c.potMap.map((e=>({...e,waiting:!0}))))}function T(){n(1,c.potMap=u.map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),c),I()}function A(){n(1,c.potMap=c.potMap.map((e=>({...e,ignore:!0}))),c),I()}function G(){n(1,c.potMap=c.potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),c),I()}return e.$$set=e=>{"visible"in e&&n(0,l=e.visible)},[l,c,a,o,i,p,u,e=>function(e,t,n){const s=L((e-t)/(n-t)*100)
let l=255,c=255
return s<50?c=Math.round(5.1*s):l=Math.round(510-5.1*s),`#${N(65536*l+256*c+0)}`}(e,c.minpoint,c.maxpoint),w,j,I,T,A,G,async function(){!async function(){n(1,c=await $(oe)||B(s)),n(2,a=c.inventory),n(3,o=c.mapping),n(4,i=c.thresholds),n(1,c.backpack=c.backpack??s.backpack,c),n(1,c.guildstore=c.guildstore??s.guildstore,c)}()
const e=await k([X(),D()])
if(!b(e[0]?.r)||!b(e[1]?.r))throw new Error("Server Error")
r=(e=>e.flatMap(_).filter(d).map(C).sort(f))(e),n(1,c.potMap=M(r,"n").map((({n:e})=>({name:e,mapped:c?.potMap?.find(h(e))?.mapped||e,ignore:c?.potMap?.find(h(e))?.ignore??!1}))),c),I()},function(){c.backpack=this.checked,n(1,c)},()=>{w("backpack"),j(),I()},function(){c.guildstore=this.checked,n(1,c)},()=>{w("guildstore"),j(),I()},function(){c.inventory=this.checked,n(1,c)},()=>{w("inventory"),j()},()=>{n(2,a=!0)},function(){c.mapping=this.checked,n(1,c)},()=>{w("mapping"),j()},()=>{n(3,o=!0)},function(){c.thresholds=this.checked,n(1,c)},()=>{w("thresholds"),j()},()=>{n(4,i=!0)},function(e,t){e[t].mapped=x(this),n(6,u)},()=>{w("mapped"),T()},(e,t,s)=>{n(6,t[s].waiting=!1,u)},function(e,t){e[t].ignore=this.checked,n(6,u)},()=>{w("ignore"),T()},()=>{w("ignore-all"),A()},()=>{w("reset"),G()},function(){c.minpoint=y(this.value),n(1,c)},()=>{w("minpoint"),I()},function(){c.maxpoint=y(this.value),n(1,c)},()=>{w("maxpoint"),I()},()=>{w("close"),n(0,l=!1)}]}class re extends t{constructor(e){super(),n(this,e,pe,ae,s,{visible:0},null,[-1,-1,-1])}}const ue={visible:!0}
let de=0
function me(){de=e(ue,de,re)}export{me as default}
//# sourceMappingURL=potReport-BAtukgtt.js.map
