import{i as e}from"./instantiate-upFtXRx7.js"
import{S as n,L as t,M as c,bh as l,bi as a,bc as o,bf as s,bj as i,O as r,Q as p,T as u,a0 as m,a3 as d,s as f,aQ as h,a6 as g,cQ as v,aO as k,b3 as y,_ as b,P as q,U as z,X as x,a1 as M,N as $,b4 as _,a4 as j,R as w,V as C,W as S,bs as I,am as R}from"./calfSystem-CgXU6vdM.js"
import{h as G,u as N}from"./await_block-CQaPQ6ae.js"
import{a as P,d as Q,b as T}from"./deepClone-u4IIU98Q.js"
import{a as A}from"./all-YfMtr2SN.js"
import{i as E}from"./isArray-eVldfhw1.js"
import{u as L}from"./uniq-BYorpzeb.js"
import{M as O}from"./ModalTitled-DySjEPv0.js"
import"./guild-BgOwQ7Kg.js"
import"./guildInventory-CfSYxNu9.js"
import"./Modal-DGZNxGeL.js"
const U=e=>Math.max(Math.min(e,100),0),B=e=>`000000${e.toString(16)}`.slice(-6)
function J(e,n,t){const c=e.slice()
return c[57]=n[t].name,c[58]=n[t].mapped,c[59]=n[t].ignore,c[60]=n[t].waiting,c[61]=n,c[62]=t,c}function V(e,n,t){const c=e.slice()
return c[63]=n[t].name,c}function W(e,n,t){const c=e.slice()
return c[57]=n[t].name,c[66]=n[t].count,c}function X(e){let n
return{c(){n=r("p"),n.textContent=`${e[69].message}`,y(n,"color","red")},m(e,t){u(e,n,t)},p:b,d(e){e&&m(n)}}}function D(e){let n,t,c,l,a,o,s,i,f,h,g,v,k,y,b,$,_,j,w,C,S,I,R,G,N,P,Q,T=e[2]&&F(e),A=e[3]&&K(e),E=e[4]&&te(e)
return{c(){n=r("div"),t=r("label"),c=r("input"),l=d("\n          Member Backpacks"),a=q(),o=r("label"),s=r("input"),i=d("\n          Guild Store"),f=q(),h=r("div"),g=r("input"),v=q(),k=r("label"),k.textContent="Composed Potion Inventory",y=q(),b=r("input"),$=q(),_=r("label"),_.textContent="Mapping",j=q(),w=r("input"),C=q(),S=r("label"),S.textContent="Thresholds",I=q(),R=r("div"),T&&T.c(),G=q(),A&&A.c(),N=q(),E&&E.c(),p(c,"type","checkbox"),p(t,"class","svelte-unfzyq"),p(s,"type","checkbox"),p(o,"class","svelte-unfzyq"),p(n,"class","filters svelte-unfzyq"),p(g,"class","tab-ctrl svelte-unfzyq"),p(g,"id","pr-inv"),p(g,"type","checkbox"),p(k,"for","pr-inv"),p(k,"class","svelte-unfzyq"),p(b,"class","tab-ctrl svelte-unfzyq"),p(b,"id","pr-map"),p(b,"type","checkbox"),p(_,"for","pr-map"),p(_,"class","svelte-unfzyq"),p(w,"class","tab-ctrl svelte-unfzyq"),p(w,"id","pr-levels"),p(w,"type","checkbox"),p(S,"for","pr-levels"),p(S,"class","svelte-unfzyq"),p(R,"class","panels svelte-unfzyq"),p(h,"class","pot-report svelte-unfzyq")},m(r,p){u(r,n,p),z(n,t),z(t,c),c.checked=e[1].backpack,z(t,l),z(n,a),z(n,o),z(o,s),s.checked=e[1].guildstore,z(o,i),u(r,f,p),u(r,h,p),z(h,g),g.checked=e[1].inventory,z(h,v),z(h,k),z(h,y),z(h,b),b.checked=e[1].mapping,z(h,$),z(h,_),z(h,j),z(h,w),w.checked=e[1].thresholds,z(h,C),z(h,S),z(h,I),z(h,R),T&&T.m(R,null),z(R,G),A&&A.m(R,null),z(R,N),E&&E.m(R,null),P||(Q=[x(c,"change",e[15]),x(c,"change",e[16]),x(c,"change",e[9]),x(c,"change",e[10]),x(s,"change",e[17]),x(s,"change",e[18]),x(s,"change",e[9]),x(s,"change",e[10]),x(g,"change",e[19]),x(g,"change",e[20]),x(g,"change",e[9]),x(g,"click",e[21],{once:!0}),x(b,"change",e[22]),x(b,"change",e[23]),x(b,"change",e[9]),x(b,"click",e[24],{once:!0}),x(w,"change",e[25]),x(w,"change",e[26]),x(w,"change",e[9]),x(w,"click",e[27],{once:!0})],P=!0)},p(e,n){2&n[0]&&(c.checked=e[1].backpack),2&n[0]&&(s.checked=e[1].guildstore),2&n[0]&&(g.checked=e[1].inventory),2&n[0]&&(b.checked=e[1].mapping),2&n[0]&&(w.checked=e[1].thresholds),e[2]?T?T.p(e,n):(T=F(e),T.c(),T.m(R,G)):T&&(T.d(1),T=null),e[3]?A?A.p(e,n):(A=K(e),A.c(),A.m(R,N)):A&&(A.d(1),A=null),e[4]?E?E.p(e,n):(E=te(e),E.c(),E.m(R,null)):E&&(E.d(1),E=null)},d(e){e&&(m(n),m(f),m(h)),T&&T.d(),A&&A.d(),E&&E.d(),P=!1,M(Q)}}}function F(e){let n,t,c=$(e[5]),l=[]
for(let n=0;n<c.length;n+=1)l[n]=H(W(e,c,n))
return{c(){n=r("div"),t=r("div")
for(let e=0;e<l.length;e+=1)l[e].c()
p(t,"class","inventory-grid-container svelte-unfzyq"),p(n,"class","inventory svelte-unfzyq")},m(e,c){u(e,n,c),z(n,t)
for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,null)},p(e,n){if(160&n[0]){let a
for(c=$(e[5]),a=0;a<c.length;a+=1){const o=W(e,c,a)
l[a]?l[a].p(o,n):(l[a]=H(o),l[a].c(),l[a].m(t,null))}for(;a<l.length;a+=1)l[a].d(1)
l.length=c.length}},d(e){e&&m(n),_(l,e)}}}function H(e){let n,t,c,l,a,o,s=e[57]+"",i=e[66]+""
return{c(){n=r("div"),t=d(s),c=q(),l=r("div"),a=d(i),o=q(),p(n,"class","svelte-unfzyq"),p(l,"class","svelte-unfzyq"),y(l,"background-color",e[7](e[66]))},m(e,s){u(e,n,s),z(n,t),u(e,c,s),u(e,l,s),z(l,a),z(l,o)},p(e,n){32&n[0]&&s!==(s=e[57]+"")&&j(t,s),32&n[0]&&i!==(i=e[66]+"")&&j(a,i),32&n[0]&&y(l,"background-color",e[7](e[66]))},d(e){e&&(m(n),m(c),m(l))}}}function K(e){let n,t,c,l,a,o,s,i,d,f,h,g=$(e[6]),v=[]
for(let n=0;n<g.length;n+=1)v[n]=ne(J(e,g,n))
return{c(){n=r("div"),t=r("div")
for(let e=0;e<v.length;e+=1)v[e].c()
c=q(),l=r("div"),a=q(),o=r("div"),s=r("button"),s.textContent="Ignore All",i=q(),d=r("button"),d.textContent="Reset",p(l,"class","svelte-unfzyq"),p(s,"class","custombutton svelte-unfzyq"),p(s,"type","button"),p(d,"class","custombutton svelte-unfzyq"),p(d,"type","button"),p(o,"class","svelte-unfzyq"),p(t,"class","mapping-grid-container svelte-unfzyq"),p(n,"class","mapping svelte-unfzyq")},m(r,p){u(r,n,p),z(n,t)
for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(t,null)
z(t,c),z(t,l),z(t,a),z(t,o),z(o,s),z(o,i),z(o,d),f||(h=[x(s,"click",e[33]),x(s,"click",e[12]),x(d,"click",e[34]),x(d,"click",e[13])],f=!0)},p(e,n){if(2368&n[0]){let l
for(g=$(e[6]),l=0;l<g.length;l+=1){const a=J(e,g,l)
v[l]?v[l].p(a,n):(v[l]=ne(a),v[l].c(),v[l].m(t,c))}for(;l<v.length;l+=1)v[l].d(1)
v.length=g.length}},d(e){e&&m(n),_(v,e),f=!1,M(h)}}}function Y(e){let n,t=$(e[6]),c=[]
for(let n=0;n<t.length;n+=1)c[n]=ee(V(e,t,n))
return{c(){for(let e=0;e<c.length;e+=1)c[e].c()
n=R()},m(e,t){for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(e,t)
u(e,n,t)},p(e,l){if(64&l[0]){let a
for(t=$(e[6]),a=0;a<t.length;a+=1){const o=V(e,t,a)
c[a]?c[a].p(o,l):(c[a]=ee(o),c[a].c(),c[a].m(n.parentNode,n))}for(;a<c.length;a+=1)c[a].d(1)
c.length=t.length}},d(e){e&&m(n),_(c,e)}}}function Z(e){let n,t,c,l=e[58]+""
return{c(){n=r("option"),t=d(l),n.__value=c=e[58],S(n,n.__value)},m(e,c){u(e,n,c),z(n,t)},p(e,a){64&a[0]&&l!==(l=e[58]+"")&&j(t,l),64&a[0]&&c!==(c=e[58])&&(n.__value=c,S(n,n.__value))},d(e){e&&m(n)}}}function ee(e){let n,t,c,l,a=e[63]+""
return{c(){n=r("option"),t=d(a),n.selected=c=e[58]===e[63],n.__value=l=e[63],S(n,n.__value)},m(e,c){u(e,n,c),z(n,t)},p(e,o){64&o[0]&&a!==(a=e[63]+"")&&j(t,a),64&o[0]&&c!==(c=e[58]===e[63])&&(n.selected=c),64&o[0]&&l!==(l=e[63])&&(n.__value=l,S(n,n.__value))},d(e){e&&m(n)}}}function ne(e){let n,t,c,l,a,o,s,i,f,h,g,v=e[57]+""
function k(e,n){return e[60]?Z:Y}let y=k(e),b=y(e)
function $(){e[28].call(a,e[61],e[62])}function _(){return e[30](e[60],e[61],e[62])}function S(){e[31].call(f,e[61],e[62])}return{c(){n=r("div"),t=d(v),c=q(),l=r("div"),a=r("select"),b.c(),s=q(),i=r("div"),f=r("input"),p(n,"class","svelte-unfzyq"),p(a,"name",o=e[57]),p(a,"class","svelte-unfzyq"),void 0===e[58]&&w($),p(l,"class","svelte-unfzyq"),p(f,"title","Ignore"),p(f,"type","checkbox"),p(f,"class","svelte-unfzyq"),p(i,"class","svelte-unfzyq")},m(o,r){u(o,n,r),z(n,t),u(o,c,r),u(o,l,r),z(l,a),b.m(a,null),C(a,e[58],!0),u(o,s,r),u(o,i,r),z(i,f),f.checked=e[59],h||(g=[x(a,"change",$),x(a,"change",e[29]),x(a,"change",e[11]),x(a,"mousedown",_),x(f,"change",S),x(f,"change",e[32]),x(f,"change",e[11]),x(f,"click",ie)],h=!0)},p(n,c){e=n,64&c[0]&&v!==(v=e[57]+"")&&j(t,v),y===(y=k(e))&&b?b.p(e,c):(b.d(1),b=y(e),b&&(b.c(),b.m(a,null))),64&c[0]&&o!==(o=e[57])&&p(a,"name",o),64&c[0]&&C(a,e[58]),64&c[0]&&(f.checked=e[59])},d(e){e&&(m(n),m(c),m(l),m(s),m(i)),b.d(),h=!1,M(g)}}}function te(e){let n,t,c,l,a,o,s
return{c(){n=r("div"),t=d("Min:\n              "),c=r("input"),l=d("\n              Max:\n              "),a=r("input"),p(c,"max","999"),p(c,"min","0"),p(c,"type","number"),p(c,"class","svelte-unfzyq"),p(a,"max","999"),p(a,"min","0"),p(a,"type","number"),p(a,"class","svelte-unfzyq"),p(n,"class","thresholds svelte-unfzyq")},m(i,r){u(i,n,r),z(n,t),z(n,c),S(c,e[1].minpoint),z(n,l),z(n,a),S(a,e[1].maxpoint),o||(s=[x(c,"input",e[35]),x(c,"input",e[36]),x(c,"input",e[9]),x(a,"input",e[37]),x(a,"input",e[38]),x(a,"input",e[9])],o=!0)},p(e,n){2&n[0]&&v(c.value)!==e[1].minpoint&&S(c,e[1].minpoint),2&n[0]&&v(a.value)!==e[1].maxpoint&&S(a,e[1].maxpoint)},d(e){e&&m(n),o=!1,M(s)}}}function ce(e){let n
return{c(){n=d("Loading...")},m(e,t){u(e,n,t)},p:b,d(e){e&&m(n)}}}function le(e){let n,t={ctx:e,current:null,token:null,hasCatch:!0,pending:ce,then:D,catch:X,error:69}
return G(e[14](),t),{c(){n=r("div"),t.block.c(),p(n,"class","main svelte-unfzyq")},m(e,c){u(e,n,c),t.block.m(n,t.anchor=null),t.mount=()=>n,t.anchor=null},p(n,c){N(t,e=n,c)},d(e){e&&m(n),t.block.d(),t.token=null,t=null}}}function ae(e){let n
return{c(){n=d("Pot Report")},m(e,t){u(e,n,t)},d(e){e&&m(n)}}}function oe(e){let n,t
return n=new O({props:{visible:e[0],$$slots:{title:[ae],default:[le]},$$scope:{ctx:e}}}),n.$on("close",e[39]),n.$on("close",e[40]),{c(){l(n.$$.fragment)},m(e,c){a(n,e,c),t=!0},p(e,t){const c={}
1&t[0]&&(c.visible=e[0]),126&t[0]|256&t[2]&&(c.$$scope={dirty:t,ctx:e}),n.$set(c)},i(e){t||(o(n.$$.fragment,e),t=!0)},o(e){s(n.$$.fragment,e),t=!1},d(e){i(n,e)}}}const se="fsh_potReport",ie=e=>e.target.blur()
function re(e,n,t){const c={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let{visible:l=!0}=n,a=null,o=!1,s=!1,i=!1,r=[],p=[],u=[]
const m=({t:e})=>15===e,d=({ignore:e})=>!e,y=e=>({name:n})=>n===e,b=(e,n)=>I(e.n,n.n),q=({r:e})=>e,z=e=>f("pot-report",e),x=({player:e,n:n})=>({loc:e?1:2,n:n}),M=()=>h(se,a),$=e=>({mapped:n})=>({name:n,count:e.filter((({mapped:e})=>e===n)).length}),_=e=>p.filter((e=>({n:n})=>e.some(y(n)))(e)).filter((({loc:e})=>a.backpack||1!==e)).filter((({loc:e})=>a.guildstore||2!==e)).map((e=>({loc:n,n:t})=>({loc:n,mapped:e.find(y(t)).mapped,n:t}))(e))
function j(){M(),t(5,r=function(){const e=a.potMap.filter(d),n=_(e)
return L(e,"mapped").map($(n))}()),t(6,u=a.potMap.map((e=>({...e,waiting:!0}))))}return e.$$set=e=>{"visible"in e&&t(0,l=e.visible)},[l,a,o,s,i,r,u,e=>function(e,n,t){const c=U((e-n)/(t-n)*100)
let l=255,a=255
return c<50?a=Math.round(5.1*c):l=Math.round(510-5.1*c),`#${B(65536*l+256*a+0)}`}(e,a.minpoint,a.maxpoint),z,M,j,function(){t(1,a.potMap=u.map((({ignore:e,mapped:n,name:t})=>({ignore:e,mapped:n,name:t}))),a),j()},function(){t(1,a.potMap=a.potMap.map((e=>({...e,ignore:!0}))),a),j()},function(){t(1,a.potMap=a.potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),a),j()},async function(){!async function(){t(1,a=await k(se)||T(c)),t(2,o=a.inventory),t(3,s=a.mapping),t(4,i=a.thresholds),t(1,a.backpack=a.backpack??c.backpack,a),t(1,a.guildstore=a.guildstore??c.guildstore,a)}()
const e=await A([P(),Q()])
if(!E(e[0]?.r)||!E(e[1]?.r))throw new Error("Server Error")
p=(e=>e.flatMap(q).filter(m).map(x).sort(b))(e),t(1,a.potMap=L(p,"n").map((({n:e})=>({name:e,mapped:a?.potMap?.find(y(e))?.mapped||e,ignore:a?.potMap?.find(y(e))?.ignore??!1}))),a),j()},function(){a.backpack=this.checked,t(1,a)},()=>z("backpack"),function(){a.guildstore=this.checked,t(1,a)},()=>z("guildstore"),function(){a.inventory=this.checked,t(1,a)},()=>z("inventory"),()=>{t(2,o=!0)},function(){a.mapping=this.checked,t(1,a)},()=>z("mapping"),()=>{t(3,s=!0)},function(){a.thresholds=this.checked,t(1,a)},()=>z("thresholds"),()=>{t(4,i=!0)},function(e,n){e[n].mapped=g(this),t(6,u)},()=>z("mapped"),(e,n,c)=>{t(6,n[c].waiting=!1,u)},function(e,n){e[n].ignore=this.checked,t(6,u)},()=>z("ignore"),()=>z("ignore-all"),()=>z("reset"),function(){a.minpoint=v(this.value),t(1,a)},()=>z("minpoint"),function(){a.maxpoint=v(this.value),t(1,a)},()=>z("maxpoint"),()=>z("close"),()=>{t(0,l=!1)}]}var pe=class extends n{constructor(e){super(),t(this,e,re,oe,c,{visible:0},null,[-1,-1,-1])}}
const ue={visible:!0}
let me=0
function de(){me=e(ue,me,pe)}export{de as default}
//# sourceMappingURL=potReport-DQ6mar1A.js.map
