import{i as t}from"./instantiate-880b172e.js"
import{S as n,K as e,L as o,bb as l,bc as c,b6 as s,b9 as a,bd as i,M as r,O as p,Q as u,Y as m,a0 as f,n as d,a2 as h,cI as g,bm as v,aZ as k,X as b,N as x,R as M,V as q,Z as y,a_ as $,a1 as _,P as j,T as w,U as C,ai as I}from"./calfSystem-929ac228.js"
import{h as R,u as S}from"./await_block-1344c2da.js"
import{e as T}from"./each-bac91e63.js"
import{a as P,d as A,b as E}from"./deepClone-972cb1f2.js"
import{a as L}from"./all-414e0607.js"
import{i as N}from"./isArray-09a53da7.js"
import{u as Y}from"./uniq-a9975ce0.js"
import{M as Z}from"./ModalTitled-77d1fd9a.js"
import{s as F,g as G}from"./idb-8fd6b5d1.js"
import"./guild-5e30924d.js"
import"./guildInventory-3f94b7aa.js"
import"./Modal-b8a2fc24.js"
const J=t=>Math.max(Math.min(t,100),0),K=t=>`000000${t.toString(16)}`.slice(-6)
function O(t,n,e){const o=J((t-n)/(e-n)*100)
let l=255,c=255
o<50?c=Math.round(5.1*o):l=Math.round(510-5.1*o)
return`#${K(65536*l+256*c+0)}`}function Q(t,n,e){const o=t.slice()
return o[44]=n[e].name,o[45]=n[e].mapped,o[46]=n[e].ignore,o[47]=n[e].waiting,o[48]=n,o[49]=e,o}function U(t,n,e){const o=t.slice()
return o[50]=n[e].name,o}function V(t,n,e){const o=t.slice()
return o[44]=n[e].name,o[53]=n[e].count,o}function X(t){let n
return{c(){n=r("p"),n.textContent=`${t[56].message}`,k(n,"color","red")},m(t,e){u(t,n,e)},p:b,d(t){t&&m(n)}}}function z(t){let n,e,o,l,c,s,a,i,f,d,h,g,v,k,b,$,_,j=t[2]&&B(t),w=t[3]&&H(t),C=t[4]&&ot(t)
return{c(){n=r("input"),e=x(),o=r("label"),o.textContent="Composed Potion Inventory",l=x(),c=r("input"),s=x(),a=r("label"),a.textContent="Mapping",i=x(),f=r("input"),d=x(),h=r("label"),h.textContent="Thresholds",g=x(),v=r("div"),j&&j.c(),k=x(),w&&w.c(),b=x(),C&&C.c(),p(n,"class","tab-ctrl svelte-1k88ftq"),p(n,"id","pr-inv"),p(n,"type","checkbox"),p(o,"for","pr-inv"),p(o,"class","svelte-1k88ftq"),p(c,"class","tab-ctrl svelte-1k88ftq"),p(c,"id","pr-map"),p(c,"type","checkbox"),p(a,"for","pr-map"),p(a,"class","svelte-1k88ftq"),p(f,"class","tab-ctrl svelte-1k88ftq"),p(f,"id","pr-levels"),p(f,"type","checkbox"),p(h,"for","pr-levels"),p(h,"class","svelte-1k88ftq"),p(v,"class","panels svelte-1k88ftq")},m(r,p){u(r,n,p),n.checked=t[1].inventory,u(r,e,p),u(r,o,p),u(r,l,p),u(r,c,p),c.checked=t[1].mapping,u(r,s,p),u(r,a,p),u(r,i,p),u(r,f,p),f.checked=t[1].thresholds,u(r,d,p),u(r,h,p),u(r,g,p),u(r,v,p),j&&j.m(v,null),M(v,k),w&&w.m(v,null),M(v,b),C&&C.m(v,null),$||(_=[q(n,"change",t[12]),q(n,"change",t[13]),q(n,"change",t[7]),q(n,"click",t[14],{once:!0}),q(c,"change",t[15]),q(c,"change",t[16]),q(c,"change",t[7]),q(c,"click",t[17],{once:!0}),q(f,"change",t[18]),q(f,"change",t[19]),q(f,"change",t[7]),q(f,"click",t[20],{once:!0})],$=!0)},p(t,e){2&e[0]&&(n.checked=t[1].inventory),2&e[0]&&(c.checked=t[1].mapping),2&e[0]&&(f.checked=t[1].thresholds),t[2]?j?j.p(t,e):(j=B(t),j.c(),j.m(v,k)):j&&(j.d(1),j=null),t[3]?w?w.p(t,e):(w=H(t),w.c(),w.m(v,b)):w&&(w.d(1),w=null),t[4]?C?C.p(t,e):(C=ot(t),C.c(),C.m(v,null)):C&&(C.d(1),C=null)},d(t){t&&(m(n),m(e),m(o),m(l),m(c),m(s),m(a),m(i),m(f),m(d),m(h),m(g),m(v)),j&&j.d(),w&&w.d(),C&&C.d(),$=!1,y(_)}}}function B(t){let n,e,o=T(t[5]),l=[]
for(let n=0;n<o.length;n+=1)l[n]=D(V(t,o,n))
return{c(){n=r("div"),e=r("div")
for(let t=0;t<l.length;t+=1)l[t].c()
p(e,"class","inventory-grid-container svelte-1k88ftq"),p(n,"class","inventory svelte-1k88ftq")},m(t,o){u(t,n,o),M(n,e)
for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null)},p(t,n){if(34&n[0]){let c
for(o=T(t[5]),c=0;c<o.length;c+=1){const s=V(t,o,c)
l[c]?l[c].p(s,n):(l[c]=D(s),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1)
l.length=o.length}},d(t){t&&m(n),$(l,t)}}}function D(t){let n,e,o,l,c,s,a=t[44]+"",i=t[53]+""
return{c(){n=r("div"),e=f(a),o=x(),l=r("div"),c=f(i),s=x(),p(n,"class","svelte-1k88ftq"),p(l,"class","svelte-1k88ftq"),k(l,"background-color",O(t[53],t[1].minpoint,t[1].maxpoint))},m(t,a){u(t,n,a),M(n,e),u(t,o,a),u(t,l,a),M(l,c),M(l,s)},p(t,n){32&n[0]&&a!==(a=t[44]+"")&&_(e,a),32&n[0]&&i!==(i=t[53]+"")&&_(c,i),34&n[0]&&k(l,"background-color",O(t[53],t[1].minpoint,t[1].maxpoint))},d(t){t&&(m(n),m(o),m(l))}}}function H(t){let n,e,o,l,c,s,a,i,f,d,h,g=T(t[1].potMap),v=[]
for(let n=0;n<g.length;n+=1)v[n]=et(Q(t,g,n))
return{c(){n=r("div"),e=r("div")
for(let t=0;t<v.length;t+=1)v[t].c()
o=x(),l=r("div"),c=x(),s=r("div"),a=r("button"),a.textContent="Ignore All",i=x(),f=r("button"),f.textContent="Reset",p(l,"class","svelte-1k88ftq"),p(a,"class","custombutton"),p(a,"type","button"),p(f,"class","custombutton"),p(f,"type","button"),p(s,"class","svelte-1k88ftq"),p(e,"class","mapping-grid-container svelte-1k88ftq"),p(n,"class","mapping svelte-1k88ftq")},m(r,p){u(r,n,p),M(n,e)
for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(e,null)
M(e,o),M(e,l),M(e,c),M(e,s),M(s,a),M(s,i),M(s,f),d||(h=[q(a,"click",t[26]),q(a,"click",t[9]),q(f,"click",t[27]),q(f,"click",t[10])],d=!0)},p(t,n){if(322&n[0]){let l
for(g=T(t[1].potMap),l=0;l<g.length;l+=1){const c=Q(t,g,l)
v[l]?v[l].p(c,n):(v[l]=et(c),v[l].c(),v[l].m(e,o))}for(;l<v.length;l+=1)v[l].d(1)
v.length=g.length}},d(t){t&&m(n),$(v,t),d=!1,y(h)}}}function W(t){let n,e=T(t[1].potMap),o=[]
for(let n=0;n<e.length;n+=1)o[n]=nt(U(t,e,n))
return{c(){for(let t=0;t<o.length;t+=1)o[t].c()
n=I()},m(t,e){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(t,e)
u(t,n,e)},p(t,l){if(2&l[0]){let c
for(e=T(t[1].potMap),c=0;c<e.length;c+=1){const s=U(t,e,c)
o[c]?o[c].p(s,l):(o[c]=nt(s),o[c].c(),o[c].m(n.parentNode,n))}for(;c<o.length;c+=1)o[c].d(1)
o.length=e.length}},d(t){t&&m(n),$(o,t)}}}function tt(t){let n,e,o,l=t[45]+""
return{c(){n=r("option"),e=f(l),n.__value=o=t[45],C(n,n.__value)},m(t,o){u(t,n,o),M(n,e)},p(t,c){2&c[0]&&l!==(l=t[45]+"")&&_(e,l),2&c[0]&&o!==(o=t[45])&&(n.__value=o,C(n,n.__value))},d(t){t&&m(n)}}}function nt(t){let n,e,o,l,c=t[50]+""
return{c(){n=r("option"),e=f(c),n.selected=o=t[45]===t[50],n.__value=l=t[50],C(n,n.__value)},m(t,o){u(t,n,o),M(n,e)},p(t,s){2&s[0]&&c!==(c=t[50]+"")&&_(e,c),2&s[0]&&o!==(o=t[45]===t[50])&&(n.selected=o),2&s[0]&&l!==(l=t[50])&&(n.__value=l,C(n,n.__value))},d(t){t&&m(n)}}}function et(t){let n,e,o,l,c,s,a,i,d,h,g,v=t[44]+""
function k(t,n){return t[47]?tt:W}let b=k(t),$=b(t)
function C(){t[21].call(c,t[48],t[49])}function I(){return t[23](t[47],t[48],t[49])}function R(){t[24].call(d,t[48],t[49])}return{c(){n=r("div"),e=f(v),o=x(),l=r("div"),c=r("select"),$.c(),a=x(),i=r("div"),d=r("input"),p(n,"class","svelte-1k88ftq"),p(c,"name",s=t[44]),p(c,"class","svelte-1k88ftq"),void 0===t[45]&&j(C),p(l,"class","svelte-1k88ftq"),p(d,"title","Ignore"),p(d,"type","checkbox"),p(d,"class","svelte-1k88ftq"),p(i,"class","svelte-1k88ftq")},m(s,r){u(s,n,r),M(n,e),u(s,o,r),u(s,l,r),M(l,c),$.m(c,null),w(c,t[45],!0),u(s,a,r),u(s,i,r),M(i,d),d.checked=t[46],h||(g=[q(c,"change",C),q(c,"change",t[22]),q(c,"change",t[8]),q(c,"mousedown",I,{once:!0}),q(d,"change",R),q(d,"change",t[25]),q(d,"change",t[8]),q(d,"click",rt)],h=!0)},p(n,o){t=n,2&o[0]&&v!==(v=t[44]+"")&&_(e,v),b===(b=k(t))&&$?$.p(t,o):($.d(1),$=b(t),$&&($.c(),$.m(c,null))),2&o[0]&&s!==(s=t[44])&&p(c,"name",s),2&o[0]&&w(c,t[45]),2&o[0]&&(d.checked=t[46])},d(t){t&&(m(n),m(o),m(l),m(a),m(i)),$.d(),h=!1,y(g)}}}function ot(t){let n,e,o,l,c,s,a
return{c(){n=r("div"),e=f("Min:\n            "),o=r("input"),l=f("\n            Max:\n            "),c=r("input"),p(o,"max","999"),p(o,"min","0"),p(o,"type","number"),p(o,"class","svelte-1k88ftq"),p(c,"max","999"),p(c,"min","0"),p(c,"type","number"),p(c,"class","svelte-1k88ftq"),p(n,"class","thresholds svelte-1k88ftq")},m(i,r){u(i,n,r),M(n,e),M(n,o),C(o,t[1].minpoint),M(n,l),M(n,c),C(c,t[1].maxpoint),s||(a=[q(o,"input",t[28]),q(o,"input",t[29]),q(o,"input",t[7]),q(c,"input",t[30]),q(c,"input",t[31]),q(c,"input",t[7])],s=!0)},p(t,n){2&n[0]&&g(o.value)!==t[1].minpoint&&C(o,t[1].minpoint),2&n[0]&&g(c.value)!==t[1].maxpoint&&C(c,t[1].maxpoint)},d(t){t&&m(n),s=!1,y(a)}}}function lt(t){let n
return{c(){n=f("Loading...")},m(t,e){u(t,n,e)},p:b,d(t){t&&m(n)}}}function ct(t){let n,e={ctx:t,current:null,token:null,hasCatch:!0,pending:lt,then:z,catch:X,error:56}
return R(t[11](),e),{c(){n=r("div"),e.block.c(),p(n,"class","pot-report svelte-1k88ftq")},m(t,o){u(t,n,o),e.block.m(n,e.anchor=null),e.mount=()=>n,e.anchor=null},p(n,o){S(e,t=n,o)},d(t){t&&m(n),e.block.d(),e.token=null,e=null}}}function st(t){let n
return{c(){n=f("Pot Report")},m(t,e){u(t,n,e)},d(t){t&&m(n)}}}function at(t){let n,e
return n=new Z({props:{visible:t[0],$$slots:{title:[st],default:[ct]},$$scope:{ctx:t}}}),n.$on("close",t[32]),n.$on("close",t[33]),{c(){l(n.$$.fragment)},m(t,o){c(n,t,o),e=!0},p(t,e){const o={}
1&e[0]&&(o.visible=t[0]),62&e[0]|67108864&e[1]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(s(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){i(n,t)}}}const it="fsh_potReport",rt=t=>t.target.blur()
function pt(t,n,e){const o={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30}
let{visible:l=!0}=n,c=null,s=!1,a=!1,i=!1,r=[]
const p=t=>d("pot-report",t),u=()=>F(it,c),m=({r:t})=>t,f=({t:t})=>15===t,k=({n:t})=>t,b=({ignore:t})=>!t,x=(t,{count:n})=>t+n
function M(){u(),e(5,r=function(){const t=c.potMap.filter(b)
return Y(t,"mapped").map((({mapped:n})=>({name:n,count:t.filter((({mapped:t})=>t===n)).reduce(x,0)})))}())}return t.$$set=t=>{"visible"in t&&e(0,l=t.visible)},[l,c,s,a,i,r,p,u,M,function(){e(1,c.potMap=c.potMap.map((t=>({...t,ignore:!0}))),c),M()},function(){e(1,c.potMap=c.potMap.map((t=>({...t,mapped:t.name,ignore:!1}))),c),M()},async function(){!async function(){e(1,c=await G(it)||E(o)),e(2,s=c.inventory),e(3,a=c.mapping),e(4,i=c.thresholds)}()
const t=await L([P(),A()])
if(!N(t[0]?.r)||!N(t[1]?.r))throw new Error("Server Error")
const n=(t=>t.flatMap(m).filter(f).map(k).sort(v))(t)
e(1,c.potMap=(t=>Y(t).map((n=>({name:n,mapped:c?.potMap?.find((({name:t})=>t===n))?.mapped||n,ignore:c?.potMap?.find((({name:t})=>t===n))?.ignore??!1,waiting:!0,count:t.filter((t=>t===n)).length}))))(n),c),M()},function(){c.inventory=this.checked,e(1,c)},()=>p("inventory"),()=>{e(2,s=!0)},function(){c.mapping=this.checked,e(1,c)},()=>p("mapping"),()=>{e(3,a=!0)},function(){c.thresholds=this.checked,e(1,c)},()=>p("thresholds"),()=>{e(4,i=!0)},function(t,n){t[n].mapped=h(this),e(1,c)},()=>p("mapped"),(t,n,o)=>{e(1,n[o].waiting=!1,c)},function(t,n){t[n].ignore=this.checked,e(1,c)},()=>p("ignore"),()=>p("ignore-all"),()=>p("reset"),function(){c.minpoint=g(this.value),e(1,c)},()=>p("minpoint"),function(){c.maxpoint=g(this.value),e(1,c)},()=>p("maxpoint"),()=>p("close"),()=>{e(0,l=!1)}]}var ut=class extends n{constructor(t){super(),e(this,t,pt,at,o,{visible:0},null,[-1,-1])}}
const mt={visible:!0}
let ft=0
function dt(){ft=t(mt,ft,ut)}export{dt as default}
//# sourceMappingURL=potReport-90a1dc96.js.map
