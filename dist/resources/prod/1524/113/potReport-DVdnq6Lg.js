import{i as e}from"./instantiate-zhKnqr-J.js"
import{S as n,J as t,K as c,b9 as l,ba as a,b4 as o,b7 as s,bb as i,L as r,N as p,P as u,X as m,_ as d,s as f,a1 as h,cI as g,aX as v,W as k,M as y,Q as b,U as q,Y as z,aY as x,a0 as M,O as $,R as _,T as j,bk as w,ah as C}from"./calfSystem-VUa7wwu1.js"
import{h as I,u as S}from"./await_block-5SUqwqnQ.js"
import{e as R}from"./each-z4oZkgsq.js"
import{a as T,d as E,b as P}from"./deepClone-9z5VY-wG.js"
import{a as Y}from"./all-TTLWag-d.js"
import{i as A}from"./isArray-bNviZzJA.js"
import{u as J}from"./uniq-zrnDDej-.js"
import{M as L}from"./ModalTitled-vMxB-XQb.js"
import{s as N,g as Q}from"./idb-gpu32B-C.js"
import"./guild-K9OhcFT0.js"
import"./guildInventory-oaARvJ08.js"
import"./Modal-uOwFwRjo.js"
const X=e=>Math.max(Math.min(e,100),0),B=e=>`000000${e.toString(16)}`.slice(-6)
function F(e,n,t){const c=e.slice()
return c[57]=n[t].name,c[58]=n[t].mapped,c[59]=n[t].ignore,c[60]=n[t].waiting,c[61]=n,c[62]=t,c}function G(e,n,t){const c=e.slice()
return c[63]=n[t].name,c}function K(e,n,t){const c=e.slice()
return c[57]=n[t].name,c[66]=n[t].count,c}function O(e){let n
return{c(){n=r("p"),n.textContent=`${e[69].message}`,v(n,"color","red")},m(e,t){u(e,n,t)},p:k,d(e){e&&m(n)}}}function U(e){let n,t,c,l,a,o,s,i,f,h,g,v,k,x,M,$,_,j,w,C,I,S,R,T,E,P,Y,A=e[2]&&W(e),J=e[3]&&H(e),L=e[4]&&te(e)
return{c(){n=r("div"),t=r("label"),c=r("input"),l=d("\n          Member Backpacks"),a=y(),o=r("label"),s=r("input"),i=d("\n          Guild Store"),f=y(),h=r("div"),g=r("input"),v=y(),k=r("label"),k.textContent="Composed Potion Inventory",x=y(),M=r("input"),$=y(),_=r("label"),_.textContent="Mapping",j=y(),w=r("input"),C=y(),I=r("label"),I.textContent="Thresholds",S=y(),R=r("div"),A&&A.c(),T=y(),J&&J.c(),E=y(),L&&L.c(),p(c,"type","checkbox"),p(t,"class","svelte-unfzyq"),p(s,"type","checkbox"),p(o,"class","svelte-unfzyq"),p(n,"class","filters svelte-unfzyq"),p(g,"class","tab-ctrl svelte-unfzyq"),p(g,"id","pr-inv"),p(g,"type","checkbox"),p(k,"for","pr-inv"),p(k,"class","svelte-unfzyq"),p(M,"class","tab-ctrl svelte-unfzyq"),p(M,"id","pr-map"),p(M,"type","checkbox"),p(_,"for","pr-map"),p(_,"class","svelte-unfzyq"),p(w,"class","tab-ctrl svelte-unfzyq"),p(w,"id","pr-levels"),p(w,"type","checkbox"),p(I,"for","pr-levels"),p(I,"class","svelte-unfzyq"),p(R,"class","panels svelte-unfzyq"),p(h,"class","pot-report svelte-unfzyq")},m(r,p){u(r,n,p),b(n,t),b(t,c),c.checked=e[1].backpack,b(t,l),b(n,a),b(n,o),b(o,s),s.checked=e[1].guildstore,b(o,i),u(r,f,p),u(r,h,p),b(h,g),g.checked=e[1].inventory,b(h,v),b(h,k),b(h,x),b(h,M),M.checked=e[1].mapping,b(h,$),b(h,_),b(h,j),b(h,w),w.checked=e[1].thresholds,b(h,C),b(h,I),b(h,S),b(h,R),A&&A.m(R,null),b(R,T),J&&J.m(R,null),b(R,E),L&&L.m(R,null),P||(Y=[q(c,"change",e[15]),q(c,"change",e[16]),q(c,"change",e[9]),q(c,"change",e[10]),q(s,"change",e[17]),q(s,"change",e[18]),q(s,"change",e[9]),q(s,"change",e[10]),q(g,"change",e[19]),q(g,"change",e[20]),q(g,"change",e[9]),q(g,"click",e[21],{once:!0}),q(M,"change",e[22]),q(M,"change",e[23]),q(M,"change",e[9]),q(M,"click",e[24],{once:!0}),q(w,"change",e[25]),q(w,"change",e[26]),q(w,"change",e[9]),q(w,"click",e[27],{once:!0})],P=!0)},p(e,n){2&n[0]&&(c.checked=e[1].backpack),2&n[0]&&(s.checked=e[1].guildstore),2&n[0]&&(g.checked=e[1].inventory),2&n[0]&&(M.checked=e[1].mapping),2&n[0]&&(w.checked=e[1].thresholds),e[2]?A?A.p(e,n):(A=W(e),A.c(),A.m(R,T)):A&&(A.d(1),A=null),e[3]?J?J.p(e,n):(J=H(e),J.c(),J.m(R,E)):J&&(J.d(1),J=null),e[4]?L?L.p(e,n):(L=te(e),L.c(),L.m(R,null)):L&&(L.d(1),L=null)},d(e){e&&(m(n),m(f),m(h)),A&&A.d(),J&&J.d(),L&&L.d(),P=!1,z(Y)}}}function W(e){let n,t,c=R(e[5]),l=[]
for(let n=0;n<c.length;n+=1)l[n]=D(K(e,c,n))
return{c(){n=r("div"),t=r("div")
for(let e=0;e<l.length;e+=1)l[e].c()
p(t,"class","inventory-grid-container svelte-unfzyq"),p(n,"class","inventory svelte-unfzyq")},m(e,c){u(e,n,c),b(n,t)
for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,null)},p(e,n){if(160&n[0]){let a
for(c=R(e[5]),a=0;a<c.length;a+=1){const o=K(e,c,a)
l[a]?l[a].p(o,n):(l[a]=D(o),l[a].c(),l[a].m(t,null))}for(;a<l.length;a+=1)l[a].d(1)
l.length=c.length}},d(e){e&&m(n),x(l,e)}}}function D(e){let n,t,c,l,a,o,s=e[57]+"",i=e[66]+""
return{c(){n=r("div"),t=d(s),c=y(),l=r("div"),a=d(i),o=y(),p(n,"class","svelte-unfzyq"),p(l,"class","svelte-unfzyq"),v(l,"background-color",e[7](e[66]))},m(e,s){u(e,n,s),b(n,t),u(e,c,s),u(e,l,s),b(l,a),b(l,o)},p(e,n){32&n[0]&&s!==(s=e[57]+"")&&M(t,s),32&n[0]&&i!==(i=e[66]+"")&&M(a,i),32&n[0]&&v(l,"background-color",e[7](e[66]))},d(e){e&&(m(n),m(c),m(l))}}}function H(e){let n,t,c,l,a,o,s,i,d,f,h,g=R(e[6]),v=[]
for(let n=0;n<g.length;n+=1)v[n]=ne(F(e,g,n))
return{c(){n=r("div"),t=r("div")
for(let e=0;e<v.length;e+=1)v[e].c()
c=y(),l=r("div"),a=y(),o=r("div"),s=r("button"),s.textContent="Ignore All",i=y(),d=r("button"),d.textContent="Reset",p(l,"class","svelte-unfzyq"),p(s,"class","custombutton svelte-unfzyq"),p(s,"type","button"),p(d,"class","custombutton svelte-unfzyq"),p(d,"type","button"),p(o,"class","svelte-unfzyq"),p(t,"class","mapping-grid-container svelte-unfzyq"),p(n,"class","mapping svelte-unfzyq")},m(r,p){u(r,n,p),b(n,t)
for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(t,null)
b(t,c),b(t,l),b(t,a),b(t,o),b(o,s),b(o,i),b(o,d),f||(h=[q(s,"click",e[33]),q(s,"click",e[12]),q(d,"click",e[34]),q(d,"click",e[13])],f=!0)},p(e,n){if(2368&n[0]){let l
for(g=R(e[6]),l=0;l<g.length;l+=1){const a=F(e,g,l)
v[l]?v[l].p(a,n):(v[l]=ne(a),v[l].c(),v[l].m(t,c))}for(;l<v.length;l+=1)v[l].d(1)
v.length=g.length}},d(e){e&&m(n),x(v,e),f=!1,z(h)}}}function V(e){let n,t=R(e[6]),c=[]
for(let n=0;n<t.length;n+=1)c[n]=ee(G(e,t,n))
return{c(){for(let e=0;e<c.length;e+=1)c[e].c()
n=C()},m(e,t){for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(e,t)
u(e,n,t)},p(e,l){if(64&l[0]){let a
for(t=R(e[6]),a=0;a<t.length;a+=1){const o=G(e,t,a)
c[a]?c[a].p(o,l):(c[a]=ee(o),c[a].c(),c[a].m(n.parentNode,n))}for(;a<c.length;a+=1)c[a].d(1)
c.length=t.length}},d(e){e&&m(n),x(c,e)}}}function Z(e){let n,t,c,l=e[58]+""
return{c(){n=r("option"),t=d(l),n.__value=c=e[58],j(n,n.__value)},m(e,c){u(e,n,c),b(n,t)},p(e,a){64&a[0]&&l!==(l=e[58]+"")&&M(t,l),64&a[0]&&c!==(c=e[58])&&(n.__value=c,j(n,n.__value))},d(e){e&&m(n)}}}function ee(e){let n,t,c,l,a=e[63]+""
return{c(){n=r("option"),t=d(a),n.selected=c=e[58]===e[63],n.__value=l=e[63],j(n,n.__value)},m(e,c){u(e,n,c),b(n,t)},p(e,o){64&o[0]&&a!==(a=e[63]+"")&&M(t,a),64&o[0]&&c!==(c=e[58]===e[63])&&(n.selected=c),64&o[0]&&l!==(l=e[63])&&(n.__value=l,j(n,n.__value))},d(e){e&&m(n)}}}function ne(e){let n,t,c,l,a,o,s,i,f,h,g,v=e[57]+""
function k(e,n){return e[60]?Z:V}let x=k(e),j=x(e)
function w(){e[28].call(a,e[61],e[62])}function C(){return e[30](e[60],e[61],e[62])}function I(){e[31].call(f,e[61],e[62])}return{c(){n=r("div"),t=d(v),c=y(),l=r("div"),a=r("select"),j.c(),s=y(),i=r("div"),f=r("input"),p(n,"class","svelte-unfzyq"),p(a,"name",o=e[57]),p(a,"class","svelte-unfzyq"),void 0===e[58]&&$(w),p(l,"class","svelte-unfzyq"),p(f,"title","Ignore"),p(f,"type","checkbox"),p(f,"class","svelte-unfzyq"),p(i,"class","svelte-unfzyq")},m(o,r){u(o,n,r),b(n,t),u(o,c,r),u(o,l,r),b(l,a),j.m(a,null),_(a,e[58],!0),u(o,s,r),u(o,i,r),b(i,f),f.checked=e[59],h||(g=[q(a,"change",w),q(a,"change",e[29]),q(a,"change",e[11]),q(a,"mousedown",C,{once:!0}),q(f,"change",I),q(f,"change",e[32]),q(f,"change",e[11]),q(f,"click",ie)],h=!0)},p(n,c){e=n,64&c[0]&&v!==(v=e[57]+"")&&M(t,v),x===(x=k(e))&&j?j.p(e,c):(j.d(1),j=x(e),j&&(j.c(),j.m(a,null))),64&c[0]&&o!==(o=e[57])&&p(a,"name",o),64&c[0]&&_(a,e[58]),64&c[0]&&(f.checked=e[59])},d(e){e&&(m(n),m(c),m(l),m(s),m(i)),j.d(),h=!1,z(g)}}}function te(e){let n,t,c,l,a,o,s
return{c(){n=r("div"),t=d("Min:\n              "),c=r("input"),l=d("\n              Max:\n              "),a=r("input"),p(c,"max","999"),p(c,"min","0"),p(c,"type","number"),p(c,"class","svelte-unfzyq"),p(a,"max","999"),p(a,"min","0"),p(a,"type","number"),p(a,"class","svelte-unfzyq"),p(n,"class","thresholds svelte-unfzyq")},m(i,r){u(i,n,r),b(n,t),b(n,c),j(c,e[1].minpoint),b(n,l),b(n,a),j(a,e[1].maxpoint),o||(s=[q(c,"input",e[35]),q(c,"input",e[36]),q(c,"input",e[9]),q(a,"input",e[37]),q(a,"input",e[38]),q(a,"input",e[9])],o=!0)},p(e,n){2&n[0]&&g(c.value)!==e[1].minpoint&&j(c,e[1].minpoint),2&n[0]&&g(a.value)!==e[1].maxpoint&&j(a,e[1].maxpoint)},d(e){e&&m(n),o=!1,z(s)}}}function ce(e){let n
return{c(){n=d("Loading...")},m(e,t){u(e,n,t)},p:k,d(e){e&&m(n)}}}function le(e){let n,t={ctx:e,current:null,token:null,hasCatch:!0,pending:ce,then:U,catch:O,error:69}
return I(e[14](),t),{c(){n=r("div"),t.block.c(),p(n,"class","main svelte-unfzyq")},m(e,c){u(e,n,c),t.block.m(n,t.anchor=null),t.mount=()=>n,t.anchor=null},p(n,c){S(t,e=n,c)},d(e){e&&m(n),t.block.d(),t.token=null,t=null}}}function ae(e){let n
return{c(){n=d("Pot Report")},m(e,t){u(e,n,t)},d(e){e&&m(n)}}}function oe(e){let n,t
return n=new L({props:{visible:e[0],$$slots:{title:[ae],default:[le]},$$scope:{ctx:e}}}),n.$on("close",e[39]),n.$on("close",e[40]),{c(){l(n.$$.fragment)},m(e,c){a(n,e,c),t=!0},p(e,t){const c={}
1&t[0]&&(c.visible=e[0]),126&t[0]|256&t[2]&&(c.$$scope={dirty:t,ctx:e}),n.$set(c)},i(e){t||(o(n.$$.fragment,e),t=!0)},o(e){s(n.$$.fragment,e),t=!1},d(e){i(n,e)}}}const se="fsh_potReport",ie=e=>e.target.blur()
function re(e,n,t){const c={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let{visible:l=!0}=n,a=null,o=!1,s=!1,i=!1,r=[],p=[],u=[]
const m=({t:e})=>15===e,d=({ignore:e})=>!e,v=e=>({name:n})=>n===e,k=(e,n)=>w(e.n,n.n),y=({r:e})=>e,b=e=>f("pot-report",e),q=({player:e,n:n})=>({loc:e?1:2,n:n}),z=()=>N(se,a),x=e=>({mapped:n})=>({name:n,count:e.filter((({mapped:e})=>e===n)).length}),M=e=>p.filter((e=>({n:n})=>e.some(v(n)))(e)).filter((({loc:e})=>a.backpack||1!==e)).filter((({loc:e})=>a.guildstore||2!==e)).map((e=>({loc:n,n:t})=>({loc:n,mapped:e.find(v(t)).mapped,n:t}))(e))
function $(){z(),t(5,r=function(){const e=a.potMap.filter(d),n=M(e)
return J(e,"mapped").map(x(n))}()),t(6,u=a.potMap.map((e=>({...e,waiting:!0}))))}return e.$$set=e=>{"visible"in e&&t(0,l=e.visible)},[l,a,o,s,i,r,u,e=>function(e,n,t){const c=X((e-n)/(t-n)*100)
let l=255,a=255
return c<50?a=Math.round(5.1*c):l=Math.round(510-5.1*c),`#${B(65536*l+256*a+0)}`}(e,a.minpoint,a.maxpoint),b,z,$,function(){t(1,a.potMap=u.map((({ignore:e,mapped:n,name:t})=>({ignore:e,mapped:n,name:t}))),a),$()},function(){t(1,a.potMap=a.potMap.map((e=>({...e,ignore:!0}))),a),$()},function(){t(1,a.potMap=a.potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),a),$()},async function(){!async function(){t(1,a=await Q(se)||P(c)),t(2,o=a.inventory),t(3,s=a.mapping),t(4,i=a.thresholds),t(1,a.backpack=a.backpack??c.backpack,a),t(1,a.guildstore=a.guildstore??c.guildstore,a)}()
const e=await Y([T(),E()])
if(!A(e[0]?.r)||!A(e[1]?.r))throw new Error("Server Error")
p=(e=>e.flatMap(y).filter(m).map(q).sort(k))(e),t(1,a.potMap=J(p,"n").map((({n:e})=>({name:e,mapped:a?.potMap?.find(v(e))?.mapped||e,ignore:a?.potMap?.find(v(e))?.ignore??!1}))),a),$()},function(){a.backpack=this.checked,t(1,a)},()=>b("backpack"),function(){a.guildstore=this.checked,t(1,a)},()=>b("guildstore"),function(){a.inventory=this.checked,t(1,a)},()=>b("inventory"),()=>{t(2,o=!0)},function(){a.mapping=this.checked,t(1,a)},()=>b("mapping"),()=>{t(3,s=!0)},function(){a.thresholds=this.checked,t(1,a)},()=>b("thresholds"),()=>{t(4,i=!0)},function(e,n){e[n].mapped=h(this),t(6,u)},()=>b("mapped"),(e,n,c)=>{t(6,n[c].waiting=!1,u)},function(e,n){e[n].ignore=this.checked,t(6,u)},()=>b("ignore"),()=>b("ignore-all"),()=>b("reset"),function(){a.minpoint=g(this.value),t(1,a)},()=>b("minpoint"),function(){a.maxpoint=g(this.value),t(1,a)},()=>b("maxpoint"),()=>b("close"),()=>{t(0,l=!1)}]}var pe=class extends n{constructor(e){super(),t(this,e,re,oe,c,{visible:0},null,[-1,-1,-1])}}
const ue={visible:!0}
let me=0
function de(){me=e(ue,me,pe)}export{de as default}
//# sourceMappingURL=potReport-DVdnq6Lg.js.map
