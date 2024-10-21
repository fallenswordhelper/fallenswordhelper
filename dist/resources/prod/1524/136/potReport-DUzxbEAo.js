import{i as e}from"./instantiate-upFtXRx7.js"
import{S as t,L as n,M as c,bj as s,bk as l,be as a,bh as o,bl as i,O as p,Q as r,T as u,a0 as d,a3 as m,s as h,aS as g,a6 as f,cZ as v,aQ as k,b5 as b,_ as x,P as y,U as M,X as $,a1 as _,N as j,b6 as w,a4 as C,R as S,V as I,W as R,bu as P,am as T}from"./calfSystem-CUgWHLtG.js"
import{h as A,u as B}from"./await_block-DpKGh93y.js"
import{a as E,d as G,b as L}from"./deepClone-v44pGRvc.js"
import{a as N}from"./all-YfMtr2SN.js"
import{i as Q}from"./isArray-eVldfhw1.js"
import{u as U}from"./uniq-Dzsj1uso.js"
import{M as q}from"./ModalTitled-DwG8wP1C.js"
import"./guild-CuLUwg__.js"
import"./guildInventory-B2V5COKS.js"
import"./Modal-BIzCdrcz.js"
const F=e=>Math.max(Math.min(e,100),0),O=e=>`000000${e.toString(16)}`.slice(-6)
function V(e,t,n){const c=e.slice()
return c[57]=t[n].name,c[58]=t[n].mapped,c[59]=t[n].ignore,c[60]=t[n].waiting,c[61]=t,c[62]=n,c}function W(e,t,n){const c=e.slice()
return c[63]=t[n].name,c}function X(e,t,n){const c=e.slice()
return c[57]=t[n].name,c[66]=t[n].count,c}function Z(e){let t
return{c(){t=p("p"),t.textContent=`${e[69].message}`,b(t,"color","red")},m(e,n){u(e,t,n)},p:x,d(e){e&&d(t)}}}function z(e){let t,n,c,s,l,a,o,i,h,g,f,v,k,b,x,j,w,C,S,I,R,P,T,A,B,E,G,L=e[2]&&D(e),N=e[3]&&J(e),Q=e[4]&&ne(e)
return{c(){t=p("div"),n=p("label"),c=p("input"),s=m("\n          Member Backpacks"),l=y(),a=p("label"),o=p("input"),i=m("\n          Guild Store"),h=y(),g=p("div"),f=p("input"),v=y(),k=p("label"),k.textContent="Composed Potion Inventory",b=y(),x=p("input"),j=y(),w=p("label"),w.textContent="Mapping",C=y(),S=p("input"),I=y(),R=p("label"),R.textContent="Thresholds",P=y(),T=p("div"),L&&L.c(),A=y(),N&&N.c(),B=y(),Q&&Q.c(),r(c,"type","checkbox"),r(n,"class","svelte-d6ps8u"),r(o,"type","checkbox"),r(a,"class","svelte-d6ps8u"),r(t,"class","filters svelte-d6ps8u"),r(f,"class","tab-ctrl svelte-d6ps8u"),r(f,"id","pr-inv"),r(f,"type","checkbox"),r(k,"for","pr-inv"),r(k,"class","svelte-d6ps8u"),r(x,"class","tab-ctrl svelte-d6ps8u"),r(x,"id","pr-map"),r(x,"type","checkbox"),r(w,"for","pr-map"),r(w,"class","svelte-d6ps8u"),r(S,"class","tab-ctrl svelte-d6ps8u"),r(S,"id","pr-levels"),r(S,"type","checkbox"),r(R,"for","pr-levels"),r(R,"class","svelte-d6ps8u"),r(T,"class","panels svelte-d6ps8u"),r(g,"class","pot-report svelte-d6ps8u")},m(p,r){u(p,t,r),M(t,n),M(n,c),c.checked=e[1].backpack,M(n,s),M(t,l),M(t,a),M(a,o),o.checked=e[1].guildstore,M(a,i),u(p,h,r),u(p,g,r),M(g,f),f.checked=e[1].inventory,M(g,v),M(g,k),M(g,b),M(g,x),x.checked=e[1].mapping,M(g,j),M(g,w),M(g,C),M(g,S),S.checked=e[1].thresholds,M(g,I),M(g,R),M(g,P),M(g,T),L&&L.m(T,null),M(T,A),N&&N.m(T,null),M(T,B),Q&&Q.m(T,null),E||(G=[$(c,"change",e[15]),$(c,"change",e[16]),$(c,"change",e[9]),$(c,"change",e[10]),$(o,"change",e[17]),$(o,"change",e[18]),$(o,"change",e[9]),$(o,"change",e[10]),$(f,"change",e[19]),$(f,"change",e[20]),$(f,"change",e[9]),$(f,"click",e[21],{once:!0}),$(x,"change",e[22]),$(x,"change",e[23]),$(x,"change",e[9]),$(x,"click",e[24],{once:!0}),$(S,"change",e[25]),$(S,"change",e[26]),$(S,"change",e[9]),$(S,"click",e[27],{once:!0})],E=!0)},p(e,t){2&t[0]&&(c.checked=e[1].backpack),2&t[0]&&(o.checked=e[1].guildstore),2&t[0]&&(f.checked=e[1].inventory),2&t[0]&&(x.checked=e[1].mapping),2&t[0]&&(S.checked=e[1].thresholds),e[2]?L?L.p(e,t):(L=D(e),L.c(),L.m(T,A)):L&&(L.d(1),L=null),e[3]?N?N.p(e,t):(N=J(e),N.c(),N.m(T,B)):N&&(N.d(1),N=null),e[4]?Q?Q.p(e,t):(Q=ne(e),Q.c(),Q.m(T,null)):Q&&(Q.d(1),Q=null)},d(e){e&&(d(t),d(h),d(g)),L&&L.d(),N&&N.d(),Q&&Q.d(),E=!1,_(G)}}}function D(e){let t,n,c=j(e[5]),s=[]
for(let t=0;t<c.length;t+=1)s[t]=H(X(e,c,t))
return{c(){t=p("div"),n=p("div")
for(let e=0;e<s.length;e+=1)s[e].c()
r(n,"class","inventory-grid-container svelte-d6ps8u"),r(t,"class","inventory svelte-d6ps8u")},m(e,c){u(e,t,c),M(t,n)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(n,null)},p(e,t){if(160&t[0]){let l
for(c=j(e[5]),l=0;l<c.length;l+=1){const a=X(e,c,l)
s[l]?s[l].p(a,t):(s[l]=H(a),s[l].c(),s[l].m(n,null))}for(;l<s.length;l+=1)s[l].d(1)
s.length=c.length}},d(e){e&&d(t),w(s,e)}}}function H(e){let t,n,c,s,l,a,o=e[57]+"",i=e[66]+""
return{c(){t=p("div"),n=m(o),c=y(),s=p("div"),l=m(i),a=y(),r(t,"class","svelte-d6ps8u"),r(s,"class","svelte-d6ps8u"),b(s,"background-color",e[7](e[66]))},m(e,o){u(e,t,o),M(t,n),u(e,c,o),u(e,s,o),M(s,l),M(s,a)},p(e,t){32&t[0]&&o!==(o=e[57]+"")&&C(n,o),32&t[0]&&i!==(i=e[66]+"")&&C(l,i),32&t[0]&&b(s,"background-color",e[7](e[66]))},d(e){e&&(d(t),d(c),d(s))}}}function J(e){let t,n,c,s,l,a,o,i,m,h,g,f=j(e[6]),v=[]
for(let t=0;t<f.length;t+=1)v[t]=te(V(e,f,t))
return{c(){t=p("div"),n=p("div")
for(let e=0;e<v.length;e+=1)v[e].c()
c=y(),s=p("div"),l=y(),a=p("div"),o=p("button"),o.textContent="Ignore All",i=y(),m=p("button"),m.textContent="Reset",r(s,"class","svelte-d6ps8u"),r(o,"class","custombutton svelte-d6ps8u"),r(o,"type","button"),r(m,"class","custombutton svelte-d6ps8u"),r(m,"type","button"),r(a,"class","svelte-d6ps8u"),r(n,"class","mapping-grid-container svelte-d6ps8u"),r(t,"class","mapping svelte-d6ps8u")},m(p,r){u(p,t,r),M(t,n)
for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(n,null)
M(n,c),M(n,s),M(n,l),M(n,a),M(a,o),M(a,i),M(a,m),h||(g=[$(o,"click",e[33]),$(o,"click",e[12]),$(m,"click",e[34]),$(m,"click",e[13])],h=!0)},p(e,t){if(2368&t[0]){let s
for(f=j(e[6]),s=0;s<f.length;s+=1){const l=V(e,f,s)
v[s]?v[s].p(l,t):(v[s]=te(l),v[s].c(),v[s].m(n,c))}for(;s<v.length;s+=1)v[s].d(1)
v.length=f.length}},d(e){e&&d(t),w(v,e),h=!1,_(g)}}}function K(e){let t,n=j(e[6]),c=[]
for(let t=0;t<n.length;t+=1)c[t]=ee(W(e,n,t))
return{c(){for(let e=0;e<c.length;e+=1)c[e].c()
t=T()},m(e,n){for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(e,n)
u(e,t,n)},p(e,s){if(64&s[0]){let l
for(n=j(e[6]),l=0;l<n.length;l+=1){const a=W(e,n,l)
c[l]?c[l].p(a,s):(c[l]=ee(a),c[l].c(),c[l].m(t.parentNode,t))}for(;l<c.length;l+=1)c[l].d(1)
c.length=n.length}},d(e){e&&d(t),w(c,e)}}}function Y(e){let t,n,c,s=e[58]+""
return{c(){t=p("option"),n=m(s),t.__value=c=e[58],R(t,t.__value)},m(e,c){u(e,t,c),M(t,n)},p(e,l){64&l[0]&&s!==(s=e[58]+"")&&C(n,s),64&l[0]&&c!==(c=e[58])&&(t.__value=c,R(t,t.__value))},d(e){e&&d(t)}}}function ee(e){let t,n,c,s,l=e[63]+""
return{c(){t=p("option"),n=m(l),t.selected=c=e[58]===e[63],t.__value=s=e[63],R(t,t.__value)},m(e,c){u(e,t,c),M(t,n)},p(e,a){64&a[0]&&l!==(l=e[63]+"")&&C(n,l),64&a[0]&&c!==(c=e[58]===e[63])&&(t.selected=c),64&a[0]&&s!==(s=e[63])&&(t.__value=s,R(t,t.__value))},d(e){e&&d(t)}}}function te(e){let t,n,c,s,l,a,o,i,h,g,f,v=e[57]+""
function k(e,t){return e[60]?Y:K}let b=k(e),x=b(e)
function j(){e[28].call(l,e[61],e[62])}function w(){return e[30](e[60],e[61],e[62])}function R(){e[31].call(h,e[61],e[62])}return{c(){t=p("div"),n=m(v),c=y(),s=p("div"),l=p("select"),x.c(),o=y(),i=p("div"),h=p("input"),r(t,"class","svelte-d6ps8u"),r(l,"name",a=e[57]),r(l,"class","svelte-d6ps8u"),void 0===e[58]&&S(j),r(s,"class","svelte-d6ps8u"),r(h,"title","Ignore"),r(h,"type","checkbox"),r(h,"class","svelte-d6ps8u"),r(i,"class","svelte-d6ps8u")},m(a,p){u(a,t,p),M(t,n),u(a,c,p),u(a,s,p),M(s,l),x.m(l,null),I(l,e[58],!0),u(a,o,p),u(a,i,p),M(i,h),h.checked=e[59],g||(f=[$(l,"change",j),$(l,"change",e[29]),$(l,"change",e[11]),$(l,"mousedown",w),$(h,"change",R),$(h,"change",e[32]),$(h,"change",e[11]),$(h,"click",ie)],g=!0)},p(t,c){e=t,64&c[0]&&v!==(v=e[57]+"")&&C(n,v),b===(b=k(e))&&x?x.p(e,c):(x.d(1),x=b(e),x&&(x.c(),x.m(l,null))),64&c[0]&&a!==(a=e[57])&&r(l,"name",a),64&c[0]&&I(l,e[58]),64&c[0]&&(h.checked=e[59])},d(e){e&&(d(t),d(c),d(s),d(o),d(i)),x.d(),g=!1,_(f)}}}function ne(e){let t,n,c,s,l,a,o
return{c(){t=p("div"),n=m("Min:\n              "),c=p("input"),s=m("\n              Max:\n              "),l=p("input"),r(c,"max","999"),r(c,"min","0"),r(c,"type","number"),r(c,"class","svelte-d6ps8u"),r(l,"max","999"),r(l,"min","0"),r(l,"type","number"),r(l,"class","svelte-d6ps8u"),r(t,"class","thresholds svelte-d6ps8u")},m(i,p){u(i,t,p),M(t,n),M(t,c),R(c,e[1].minpoint),M(t,s),M(t,l),R(l,e[1].maxpoint),a||(o=[$(c,"input",e[35]),$(c,"input",e[36]),$(c,"input",e[10]),$(l,"input",e[37]),$(l,"input",e[38]),$(l,"input",e[10])],a=!0)},p(e,t){2&t[0]&&v(c.value)!==e[1].minpoint&&R(c,e[1].minpoint),2&t[0]&&v(l.value)!==e[1].maxpoint&&R(l,e[1].maxpoint)},d(e){e&&d(t),a=!1,_(o)}}}function ce(e){let t
return{c(){t=m("Loading...")},m(e,n){u(e,t,n)},p:x,d(e){e&&d(t)}}}function se(e){let t,n={ctx:e,current:null,token:null,hasCatch:!0,pending:ce,then:z,catch:Z,error:69}
return A(e[14](),n),{c(){t=p("div"),n.block.c(),r(t,"class","main svelte-d6ps8u")},m(e,c){u(e,t,c),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p(t,c){B(n,e=t,c)},d(e){e&&d(t),n.block.d(),n.token=null,n=null}}}function le(e){let t
return{c(){t=m("Pot Report")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function ae(e){let t,n
return t=new q({props:{visible:e[0],$$slots:{title:[le],default:[se]},$$scope:{ctx:e}}}),t.$on("close",e[39]),t.$on("close",e[40]),{c(){s(t.$$.fragment)},m(e,c){l(t,e,c),n=!0},p(e,n){const c={}
1&n[0]&&(c.visible=e[0]),126&n[0]|256&n[2]&&(c.$$scope={dirty:n,ctx:e}),t.$set(c)},i(e){n||(a(t.$$.fragment,e),n=!0)},o(e){o(t.$$.fragment,e),n=!1},d(e){i(t,e)}}}const oe="fsh_potReport",ie=e=>e.target.blur()
function pe(e,t,n){const c={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let{visible:s=!0}=t,l=null,a=!1,o=!1,i=!1,p=[],r=[],u=[]
const d=({t:e})=>15===e,m=({ignore:e})=>!e,b=e=>({name:t})=>t===e,x=(e,t)=>P(e.n,t.n),y=({r:e})=>e,M=e=>h("pot-report",e),$=({player:e,n:t})=>({loc:e?1:2,n:t}),_=()=>g(oe,l),j=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),w=e=>r.filter((e=>({n:t})=>e.some(b(t)))(e)).filter((({loc:e})=>l.backpack||1!==e)).filter((({loc:e})=>l.guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(b(n)).mapped,n:n}))(e))
function C(){_(),n(5,p=function(){const e=l.potMap.filter(m),t=w(e)
return U(e,"mapped").map(j(t))}()),n(6,u=l.potMap.map((e=>({...e,waiting:!0}))))}return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},[s,l,a,o,i,p,u,e=>function(e,t,n){const c=F((e-t)/(n-t)*100)
let s=255,l=255
return c<50?l=Math.round(5.1*c):s=Math.round(510-5.1*c),`#${O(65536*s+256*l+0)}`}(e,l.minpoint,l.maxpoint),M,_,C,function(){n(1,l.potMap=u.map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),l),C()},function(){n(1,l.potMap=l.potMap.map((e=>({...e,ignore:!0}))),l),C()},function(){n(1,l.potMap=l.potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),l),C()},async function(){!async function(){n(1,l=await k(oe)||L(c)),n(2,a=l.inventory),n(3,o=l.mapping),n(4,i=l.thresholds),n(1,l.backpack=l.backpack??c.backpack,l),n(1,l.guildstore=l.guildstore??c.guildstore,l)}()
const e=await N([E(),G()])
if(!Q(e[0]?.r)||!Q(e[1]?.r))throw new Error("Server Error")
r=(e=>e.flatMap(y).filter(d).map($).sort(x))(e),n(1,l.potMap=U(r,"n").map((({n:e})=>({name:e,mapped:l?.potMap?.find(b(e))?.mapped||e,ignore:l?.potMap?.find(b(e))?.ignore??!1}))),l),C()},function(){l.backpack=this.checked,n(1,l)},()=>M("backpack"),function(){l.guildstore=this.checked,n(1,l)},()=>M("guildstore"),function(){l.inventory=this.checked,n(1,l)},()=>M("inventory"),()=>{n(2,a=!0)},function(){l.mapping=this.checked,n(1,l)},()=>M("mapping"),()=>{n(3,o=!0)},function(){l.thresholds=this.checked,n(1,l)},()=>M("thresholds"),()=>{n(4,i=!0)},function(e,t){e[t].mapped=f(this),n(6,u)},()=>M("mapped"),(e,t,c)=>{n(6,t[c].waiting=!1,u)},function(e,t){e[t].ignore=this.checked,n(6,u)},()=>M("ignore"),()=>M("ignore-all"),()=>M("reset"),function(){l.minpoint=v(this.value),n(1,l)},()=>M("minpoint"),function(){l.maxpoint=v(this.value),n(1,l)},()=>M("maxpoint"),()=>M("close"),()=>{n(0,s=!1)}]}class re extends t{constructor(e){super(),n(this,e,pe,ae,c,{visible:0},null,[-1,-1,-1])}}const ue={visible:!0}
let de=0
function me(){de=e(ue,de,re)}export{me as default}
//# sourceMappingURL=potReport-DUzxbEAo.js.map
