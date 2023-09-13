import{i as t}from"./instantiate-880b172e.js"
import{S as n,L as e,M as o,bf as l,bg as c,ba as s,bd as a,bh as i,N as r,P as p,R as u,Z as m,a1 as f,n as d,E as h,a3 as g,cM as v,bq as k,a$ as b,Y as x,O as M,T as q,W as y,_ as $,b0 as _,a2 as j,Q as w,U as C,V as I,aj as P}from"./calfSystem-34913441.js"
import{h as R,u as S}from"./await_block-d58cecee.js"
import{e as T}from"./each-6f7f5a14.js"
import{d as E,a as L,b as N}from"./deepClone-a6c4cce9.js"
import{a as Y}from"./all-414e0607.js"
import{u as A}from"./uniq-a7375dfa.js"
import{M as H}from"./ModalTitled-945b0136.js"
import{s as O,g as Q}from"./idb-ec5d6344.js"
import"./guild-014ef050.js"
import"./guildInventory-ca591da6.js"
import"./Modal-108b3dd4.js"
const U=t=>Math.max(Math.min(t,100),0),V=t=>`000000${t.toString(16)}`.slice(-6)
function W(t,n,e){const o=U((t-n)/(e-n)*100)
let l=255,c=255
o<50?c=Math.round(5.1*o):l=Math.round(510-5.1*o)
return`#${V(65536*l+256*c+0)}`}function Z(t,n,e){const o=t.slice()
return o[44]=n[e].name,o[45]=n[e].mapped,o[46]=n[e].ignore,o[47]=n[e].waiting,o[48]=n,o[49]=e,o}function z(t,n,e){const o=t.slice()
return o[50]=n[e].name,o}function B(t,n,e){const o=t.slice()
return o[44]=n[e].name,o[53]=n[e].count,o}function D(t){let n
return{c(){n=r("p"),n.textContent=`${t[56].message}`,b(n,"color","red")},m(t,e){u(t,n,e)},p:x,d(t){t&&m(n)}}}function F(t){let n,e,o,l,c,s,a,i,f,d,h,g,v,k,b,x,_,j=t[2]&&G(t),w=t[3]&&K(t),C=t[4]&&ot(t)
return{c(){n=r("input"),e=M(),o=r("label"),o.textContent="Composed Potion Inventory",l=M(),c=r("input"),s=M(),a=r("label"),a.textContent="Mapping",i=M(),f=r("input"),d=M(),h=r("label"),h.textContent="Thresholds",g=M(),v=r("div"),j&&j.c(),k=M(),w&&w.c(),b=M(),C&&C.c(),p(n,"class","tab-ctrl svelte-1k88ftq"),p(n,"id","pr-inv"),p(n,"type","checkbox"),p(o,"for","pr-inv"),p(o,"class","svelte-1k88ftq"),p(c,"class","tab-ctrl svelte-1k88ftq"),p(c,"id","pr-map"),p(c,"type","checkbox"),p(a,"for","pr-map"),p(a,"class","svelte-1k88ftq"),p(f,"class","tab-ctrl svelte-1k88ftq"),p(f,"id","pr-levels"),p(f,"type","checkbox"),p(h,"for","pr-levels"),p(h,"class","svelte-1k88ftq"),p(v,"class","panels svelte-1k88ftq")},m(r,p){u(r,n,p),n.checked=t[1].inventory,u(r,e,p),u(r,o,p),u(r,l,p),u(r,c,p),c.checked=t[1].mapping,u(r,s,p),u(r,a,p),u(r,i,p),u(r,f,p),f.checked=t[1].thresholds,u(r,d,p),u(r,h,p),u(r,g,p),u(r,v,p),j&&j.m(v,null),q(v,k),w&&w.m(v,null),q(v,b),C&&C.m(v,null),x||(_=[y(n,"change",t[12]),y(n,"change",t[13]),y(n,"change",t[7]),y(n,"click",t[14],{once:!0}),y(c,"change",t[15]),y(c,"change",t[16]),y(c,"change",t[7]),y(c,"click",t[17],{once:!0}),y(f,"change",t[18]),y(f,"change",t[19]),y(f,"change",t[7]),y(f,"click",t[20],{once:!0})],x=!0)},p(t,e){2&e[0]&&(n.checked=t[1].inventory),2&e[0]&&(c.checked=t[1].mapping),2&e[0]&&(f.checked=t[1].thresholds),t[2]?j?j.p(t,e):(j=G(t),j.c(),j.m(v,k)):j&&(j.d(1),j=null),t[3]?w?w.p(t,e):(w=K(t),w.c(),w.m(v,b)):w&&(w.d(1),w=null),t[4]?C?C.p(t,e):(C=ot(t),C.c(),C.m(v,null)):C&&(C.d(1),C=null)},d(t){t&&(m(n),m(e),m(o),m(l),m(c),m(s),m(a),m(i),m(f),m(d),m(h),m(g),m(v)),j&&j.d(),w&&w.d(),C&&C.d(),x=!1,$(_)}}}function G(t){let n,e,o=T(t[5]),l=[]
for(let n=0;n<o.length;n+=1)l[n]=J(B(t,o,n))
return{c(){n=r("div"),e=r("div")
for(let t=0;t<l.length;t+=1)l[t].c()
p(e,"class","inventory-grid-container svelte-1k88ftq"),p(n,"class","inventory svelte-1k88ftq")},m(t,o){u(t,n,o),q(n,e)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null)},p(t,n){if(34&n[0]){let c
for(o=T(t[5]),c=0;c<o.length;c+=1){const s=B(t,o,c)
l[c]?l[c].p(s,n):(l[c]=J(s),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1)
l.length=o.length}},d(t){t&&m(n),_(l,t)}}}function J(t){let n,e,o,l,c,s,a=t[44]+"",i=t[53]+""
return{c(){n=r("div"),e=f(a),o=M(),l=r("div"),c=f(i),s=M(),p(n,"class","svelte-1k88ftq"),p(l,"class","svelte-1k88ftq"),b(l,"background-color",W(t[53],t[1].minpoint,t[1].maxpoint))},m(t,a){u(t,n,a),q(n,e),u(t,o,a),u(t,l,a),q(l,c),q(l,s)},p(t,n){32&n[0]&&a!==(a=t[44]+"")&&j(e,a),32&n[0]&&i!==(i=t[53]+"")&&j(c,i),34&n[0]&&b(l,"background-color",W(t[53],t[1].minpoint,t[1].maxpoint))},d(t){t&&(m(n),m(o),m(l))}}}function K(t){let n,e,o,l,c,s,a,i,f,d,h,g=T(t[1].potMap),v=[]
for(let n=0;n<g.length;n+=1)v[n]=et(Z(t,g,n))
return{c(){n=r("div"),e=r("div")
for(let t=0;t<v.length;t+=1)v[t].c()
o=M(),l=r("div"),c=M(),s=r("div"),a=r("button"),a.textContent="Ignore All",i=M(),f=r("button"),f.textContent="Reset",p(l,"class","svelte-1k88ftq"),p(a,"class","custombutton"),p(a,"type","button"),p(f,"class","custombutton"),p(f,"type","button"),p(s,"class","svelte-1k88ftq"),p(e,"class","mapping-grid-container svelte-1k88ftq"),p(n,"class","mapping svelte-1k88ftq")},m(r,p){u(r,n,p),q(n,e)
for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(e,null)
q(e,o),q(e,l),q(e,c),q(e,s),q(s,a),q(s,i),q(s,f),d||(h=[y(a,"click",t[26]),y(a,"click",t[9]),y(f,"click",t[27]),y(f,"click",t[10])],d=!0)},p(t,n){if(322&n[0]){let l
for(g=T(t[1].potMap),l=0;l<g.length;l+=1){const c=Z(t,g,l)
v[l]?v[l].p(c,n):(v[l]=et(c),v[l].c(),v[l].m(e,o))}for(;l<v.length;l+=1)v[l].d(1)
v.length=g.length}},d(t){t&&m(n),_(v,t),d=!1,$(h)}}}function X(t){let n,e=T(t[1].potMap),o=[]
for(let n=0;n<e.length;n+=1)o[n]=nt(z(t,e,n))
return{c(){for(let t=0;t<o.length;t+=1)o[t].c()
n=P()},m(t,e){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(t,e)
u(t,n,e)},p(t,l){if(2&l[0]){let c
for(e=T(t[1].potMap),c=0;c<e.length;c+=1){const s=z(t,e,c)
o[c]?o[c].p(s,l):(o[c]=nt(s),o[c].c(),o[c].m(n.parentNode,n))}for(;c<o.length;c+=1)o[c].d(1)
o.length=e.length}},d(t){t&&m(n),_(o,t)}}}function tt(t){let n,e,o,l=t[45]+""
return{c(){n=r("option"),e=f(l),n.__value=o=t[45],I(n,n.__value)},m(t,o){u(t,n,o),q(n,e)},p(t,c){2&c[0]&&l!==(l=t[45]+"")&&j(e,l),2&c[0]&&o!==(o=t[45])&&(n.__value=o,I(n,n.__value))},d(t){t&&m(n)}}}function nt(t){let n,e,o,l,c=t[50]+""
return{c(){n=r("option"),e=f(c),n.selected=o=t[45]===t[50],n.__value=l=t[50],I(n,n.__value)},m(t,o){u(t,n,o),q(n,e)},p(t,s){2&s[0]&&c!==(c=t[50]+"")&&j(e,c),2&s[0]&&o!==(o=t[45]===t[50])&&(n.selected=o),2&s[0]&&l!==(l=t[50])&&(n.__value=l,I(n,n.__value))},d(t){t&&m(n)}}}function et(t){let n,e,o,l,c,s,a,i,d,h,g,v=t[44]+""
function k(t,n){return t[47]?tt:X}let b=k(t),x=b(t)
function _(){t[21].call(c,t[48],t[49])}function I(){return t[23](t[47],t[48],t[49])}function P(){t[24].call(d,t[48],t[49])}return{c(){n=r("div"),e=f(v),o=M(),l=r("div"),c=r("select"),x.c(),a=M(),i=r("div"),d=r("input"),p(n,"class","svelte-1k88ftq"),p(c,"name",s=t[44]),p(c,"class","svelte-1k88ftq"),void 0===t[45]&&w(_),p(l,"class","svelte-1k88ftq"),p(d,"title","Ignore"),p(d,"type","checkbox"),p(d,"class","svelte-1k88ftq"),p(i,"class","svelte-1k88ftq")},m(s,r){u(s,n,r),q(n,e),u(s,o,r),u(s,l,r),q(l,c),x.m(c,null),C(c,t[45],!0),u(s,a,r),u(s,i,r),q(i,d),d.checked=t[46],h||(g=[y(c,"change",_),y(c,"change",t[22]),y(c,"change",t[8]),y(c,"mousedown",I,{once:!0}),y(d,"change",P),y(d,"change",t[25]),y(d,"change",t[8]),y(d,"click",rt)],h=!0)},p(n,o){t=n,2&o[0]&&v!==(v=t[44]+"")&&j(e,v),b===(b=k(t))&&x?x.p(t,o):(x.d(1),x=b(t),x&&(x.c(),x.m(c,null))),2&o[0]&&s!==(s=t[44])&&p(c,"name",s),2&o[0]&&C(c,t[45]),2&o[0]&&(d.checked=t[46])},d(t){t&&(m(n),m(o),m(l),m(a),m(i)),x.d(),h=!1,$(g)}}}function ot(t){let n,e,o,l,c,s,a
return{c(){n=r("div"),e=f("Min:\n            "),o=r("input"),l=f("\n            Max:\n            "),c=r("input"),p(o,"max","999"),p(o,"min","0"),p(o,"type","number"),p(o,"class","svelte-1k88ftq"),p(c,"max","999"),p(c,"min","0"),p(c,"type","number"),p(c,"class","svelte-1k88ftq"),p(n,"class","thresholds svelte-1k88ftq")},m(i,r){u(i,n,r),q(n,e),q(n,o),I(o,t[1].minpoint),q(n,l),q(n,c),I(c,t[1].maxpoint),s||(a=[y(o,"input",t[28]),y(o,"input",t[29]),y(o,"input",t[7]),y(c,"input",t[30]),y(c,"input",t[31]),y(c,"input",t[7])],s=!0)},p(t,n){2&n[0]&&v(o.value)!==t[1].minpoint&&I(o,t[1].minpoint),2&n[0]&&v(c.value)!==t[1].maxpoint&&I(c,t[1].maxpoint)},d(t){t&&m(n),s=!1,$(a)}}}function lt(t){let n
return{c(){n=f("Loading...")},m(t,e){u(t,n,e)},p:x,d(t){t&&m(n)}}}function ct(t){let n,e={ctx:t,current:null,token:null,hasCatch:!0,pending:lt,then:F,catch:D,error:56}
return R(t[11](),e),{c(){n=r("div"),e.block.c(),p(n,"class","pot-report svelte-1k88ftq")},m(t,o){u(t,n,o),e.block.m(n,e.anchor=null),e.mount=()=>n,e.anchor=null},p(n,o){S(e,t=n,o)},d(t){t&&m(n),e.block.d(),e.token=null,e=null}}}function st(t){let n
return{c(){n=f("Pot Report")},m(t,e){u(t,n,e)},d(t){t&&m(n)}}}function at(t){let n,e
return n=new H({props:{visible:t[0],$$slots:{title:[st],default:[ct]},$$scope:{ctx:t}}}),n.$on("close",t[32]),n.$on("close",t[33]),{c(){l(n.$$.fragment)},m(t,o){c(n,t,o),e=!0},p(t,e){const o={}
1&e[0]&&(o.visible=t[0]),62&e[0]|67108864&e[1]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(s(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){i(n,t)}}}const it="fsh_potReport",rt=t=>t.target.blur()
function pt(t,n,e){const o={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30}
let{visible:l=!0}=n,c=null,s=!1,a=!1,i=!1,r=[]
const p=t=>d("pot-report",t),u=()=>O(it,c),m=({r:t})=>t,f=({t:t})=>15===t,b=({n:t})=>t,x=({ignore:t})=>!t,M=(t,{count:n})=>t+n
function q(){u(),e(5,r=function(){const t=c.potMap.filter(x)
return A(t,"mapped").map((({mapped:n})=>({name:n,count:t.filter((({mapped:t})=>t===n)).reduce(M,0)})))}())}return t.$$set=t=>{"visible"in t&&e(0,l=t.visible)},[l,c,s,a,i,r,p,u,q,function(){e(1,c.potMap=c.potMap.map((t=>({...t,ignore:!0}))),c),q()},function(){e(1,c.potMap=c.potMap.map((t=>({...t,mapped:t.name,ignore:!1}))),c),q()},async function(){!async function(){e(1,c=await Q(it)||N(o)),e(2,s=c.inventory),e(3,a=c.mapping),e(4,i=c.thresholds)}()
const t=await Y([E(),L()])
if(!h(t[0]?.r)||!h(t[1]?.r))throw new Error("Server Error")
const n=(t=>t.flatMap(m).filter(f).map(b).sort(k))(t)
e(1,c.potMap=(t=>A(t).map((n=>({name:n,mapped:c?.potMap?.find((({name:t})=>t===n))?.mapped||n,ignore:c?.potMap?.find((({name:t})=>t===n))?.ignore??!1,waiting:!0,count:t.filter((t=>t===n)).length}))))(n),c),q()},function(){c.inventory=this.checked,e(1,c)},()=>p("inventory"),()=>{e(2,s=!0)},function(){c.mapping=this.checked,e(1,c)},()=>p("mapping"),()=>{e(3,a=!0)},function(){c.thresholds=this.checked,e(1,c)},()=>p("thresholds"),()=>{e(4,i=!0)},function(t,n){t[n].mapped=g(this),e(1,c)},()=>p("mapped"),(t,n,o)=>{e(1,n[o].waiting=!1,c)},function(t,n){t[n].ignore=this.checked,e(1,c)},()=>p("ignore"),()=>p("ignore-all"),()=>p("reset"),function(){c.minpoint=v(this.value),e(1,c)},()=>p("minpoint"),function(){c.maxpoint=v(this.value),e(1,c)},()=>p("maxpoint"),()=>p("close"),()=>{e(0,l=!1)}]}var ut=class extends n{constructor(t){super(),e(this,t,pt,at,o,{visible:0},null,[-1,-1])}}
const mt={visible:!0}
let ft=0
function dt(){ft=t(mt,ft,ut)}export{dt as default}
//# sourceMappingURL=potReport-eabeffe5.js.map
