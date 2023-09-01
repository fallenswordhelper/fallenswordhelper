import{i as t}from"./instantiate-880b172e.js"
import{S as n,L as e,M as l,bf as o,bg as c,ba as a,bd as s,bh as i,N as r,P as p,R as u,Z as m,a1 as f,n as d,a3 as h,cM as g,bq as v,Y as k,O as b,T as q,W as x,_ as M,b0 as y,a$ as $,a2 as _,Q as j,U as w,V as C,aj as I}from"./calfSystem-076d7a01.js"
import{h as R,u as N}from"./await_block-904981a0.js"
import{e as P}from"./each-d53d627d.js"
import{d as S,a as T,b as L}from"./deepClone-47c11818.js"
import{a as Q}from"./all-414e0607.js"
import{u as U}from"./uniq-925a8764.js"
import{M as Z}from"./ModalTitled-fcaa63c3.js"
import{s as A,g as D}from"./idb-807cd422.js"
import"./guild-2c117802.js"
import"./guildInventory-29f9e836.js"
import"./Modal-925b2b72.js"
const O=t=>Math.max(Math.min(t,100),0),V=t=>`000000${t.toString(16)}`.slice(-6)
function W(t,n,e){const l=O((t-n)/(e-n)*100)
let o=255,c=255
l<50?c=Math.round(5.1*l):o=Math.round(510-5.1*l)
return`#${V(65536*o+256*c+0)}`}function Y(t,n,e){const l=t.slice()
return l[44]=n[e].name,l[45]=n[e].mapped,l[46]=n[e].ignore,l[47]=n[e].waiting,l[48]=n,l[49]=e,l}function z(t,n,e){const l=t.slice()
return l[50]=n[e].name,l}function B(t,n,e){const l=t.slice()
return l[44]=n[e].name,l[53]=n[e].count,l}function E(t){return{c:k,m:k,p:k,d:k}}function F(t){let n,e,l,o,c,a,s,i,f,d,h,g,v,k,y,$,_,j=t[2]&&G(t),w=t[3]&&J(t),C=t[4]&&et(t)
return{c(){n=r("input"),e=b(),l=r("label"),l.textContent="Composed Potion Inventory",o=b(),c=r("input"),a=b(),s=r("label"),s.textContent="Mapping",i=b(),f=r("input"),d=b(),h=r("label"),h.textContent="Thresholds",g=b(),v=r("div"),j&&j.c(),k=b(),w&&w.c(),y=b(),C&&C.c(),p(n,"class","tab-ctrl svelte-1k88ftq"),p(n,"id","pr-inv"),p(n,"type","checkbox"),p(l,"for","pr-inv"),p(l,"class","svelte-1k88ftq"),p(c,"class","tab-ctrl svelte-1k88ftq"),p(c,"id","pr-map"),p(c,"type","checkbox"),p(s,"for","pr-map"),p(s,"class","svelte-1k88ftq"),p(f,"class","tab-ctrl svelte-1k88ftq"),p(f,"id","pr-levels"),p(f,"type","checkbox"),p(h,"for","pr-levels"),p(h,"class","svelte-1k88ftq"),p(v,"class","panels svelte-1k88ftq")},m(r,p){u(r,n,p),n.checked=t[1].inventory,u(r,e,p),u(r,l,p),u(r,o,p),u(r,c,p),c.checked=t[1].mapping,u(r,a,p),u(r,s,p),u(r,i,p),u(r,f,p),f.checked=t[1].thresholds,u(r,d,p),u(r,h,p),u(r,g,p),u(r,v,p),j&&j.m(v,null),q(v,k),w&&w.m(v,null),q(v,y),C&&C.m(v,null),$||(_=[x(n,"change",t[12]),x(n,"change",t[13]),x(n,"change",t[7]),x(n,"click",t[14],{once:!0}),x(c,"change",t[15]),x(c,"change",t[16]),x(c,"change",t[7]),x(c,"click",t[17],{once:!0}),x(f,"change",t[18]),x(f,"change",t[19]),x(f,"change",t[7]),x(f,"click",t[20],{once:!0})],$=!0)},p(t,e){2&e[0]&&(n.checked=t[1].inventory),2&e[0]&&(c.checked=t[1].mapping),2&e[0]&&(f.checked=t[1].thresholds),t[2]?j?j.p(t,e):(j=G(t),j.c(),j.m(v,k)):j&&(j.d(1),j=null),t[3]?w?w.p(t,e):(w=J(t),w.c(),w.m(v,y)):w&&(w.d(1),w=null),t[4]?C?C.p(t,e):(C=et(t),C.c(),C.m(v,null)):C&&(C.d(1),C=null)},d(t){t&&(m(n),m(e),m(l),m(o),m(c),m(a),m(s),m(i),m(f),m(d),m(h),m(g),m(v)),j&&j.d(),w&&w.d(),C&&C.d(),$=!1,M(_)}}}function G(t){let n,e,l=P(t[5]),o=[]
for(let n=0;n<l.length;n+=1)o[n]=H(B(t,l,n))
return{c(){n=r("div"),e=r("div")
for(let t=0;t<o.length;t+=1)o[t].c()
p(e,"class","inventory-grid-container svelte-1k88ftq"),p(n,"class","inventory svelte-1k88ftq")},m(t,l){u(t,n,l),q(n,e)
for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null)},p(t,n){if(34&n[0]){let c
for(l=P(t[5]),c=0;c<l.length;c+=1){const a=B(t,l,c)
o[c]?o[c].p(a,n):(o[c]=H(a),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1)
o.length=l.length}},d(t){t&&m(n),y(o,t)}}}function H(t){let n,e,l,o,c,a,s=t[44]+"",i=t[53]+""
return{c(){n=r("div"),e=f(s),l=b(),o=r("div"),c=f(i),a=b(),p(n,"class","svelte-1k88ftq"),p(o,"class","svelte-1k88ftq"),$(o,"background-color",W(t[53],t[1].minpoint,t[1].maxpoint))},m(t,s){u(t,n,s),q(n,e),u(t,l,s),u(t,o,s),q(o,c),q(o,a)},p(t,n){32&n[0]&&s!==(s=t[44]+"")&&_(e,s),32&n[0]&&i!==(i=t[53]+"")&&_(c,i),34&n[0]&&$(o,"background-color",W(t[53],t[1].minpoint,t[1].maxpoint))},d(t){t&&(m(n),m(l),m(o))}}}function J(t){let n,e,l,o,c,a,s,i,f,d,h,g=P(t[1].potMap),v=[]
for(let n=0;n<g.length;n+=1)v[n]=nt(Y(t,g,n))
return{c(){n=r("div"),e=r("div")
for(let t=0;t<v.length;t+=1)v[t].c()
l=b(),o=r("div"),c=b(),a=r("div"),s=r("button"),s.textContent="Ignore All",i=b(),f=r("button"),f.textContent="Reset",p(o,"class","svelte-1k88ftq"),p(s,"class","custombutton"),p(s,"type","button"),p(f,"class","custombutton"),p(f,"type","button"),p(a,"class","svelte-1k88ftq"),p(e,"class","mapping-grid-container svelte-1k88ftq"),p(n,"class","mapping svelte-1k88ftq")},m(r,p){u(r,n,p),q(n,e)
for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(e,null)
q(e,l),q(e,o),q(e,c),q(e,a),q(a,s),q(a,i),q(a,f),d||(h=[x(s,"click",t[26]),x(s,"click",t[9]),x(f,"click",t[27]),x(f,"click",t[10])],d=!0)},p(t,n){if(322&n[0]){let o
for(g=P(t[1].potMap),o=0;o<g.length;o+=1){const c=Y(t,g,o)
v[o]?v[o].p(c,n):(v[o]=nt(c),v[o].c(),v[o].m(e,l))}for(;o<v.length;o+=1)v[o].d(1)
v.length=g.length}},d(t){t&&m(n),y(v,t),d=!1,M(h)}}}function K(t){let n,e=P(t[1].potMap),l=[]
for(let n=0;n<e.length;n+=1)l[n]=tt(z(t,e,n))
return{c(){for(let t=0;t<l.length;t+=1)l[t].c()
n=I()},m(t,e){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(t,e)
u(t,n,e)},p(t,o){if(2&o[0]){let c
for(e=P(t[1].potMap),c=0;c<e.length;c+=1){const a=z(t,e,c)
l[c]?l[c].p(a,o):(l[c]=tt(a),l[c].c(),l[c].m(n.parentNode,n))}for(;c<l.length;c+=1)l[c].d(1)
l.length=e.length}},d(t){t&&m(n),y(l,t)}}}function X(t){let n,e,l,o=t[45]+""
return{c(){n=r("option"),e=f(o),n.__value=l=t[45],C(n,n.__value)},m(t,l){u(t,n,l),q(n,e)},p(t,c){2&c[0]&&o!==(o=t[45]+"")&&_(e,o),2&c[0]&&l!==(l=t[45])&&(n.__value=l,C(n,n.__value))},d(t){t&&m(n)}}}function tt(t){let n,e,l,o,c=t[50]+""
return{c(){n=r("option"),e=f(c),n.selected=l=t[45]===t[50],n.__value=o=t[50],C(n,n.__value)},m(t,l){u(t,n,l),q(n,e)},p(t,a){2&a[0]&&c!==(c=t[50]+"")&&_(e,c),2&a[0]&&l!==(l=t[45]===t[50])&&(n.selected=l),2&a[0]&&o!==(o=t[50])&&(n.__value=o,C(n,n.__value))},d(t){t&&m(n)}}}function nt(t){let n,e,l,o,c,a,s,i,d,h,g,v=t[44]+""
function k(t,n){return t[47]?X:K}let y=k(t),$=y(t)
function C(){t[21].call(c,t[48],t[49])}function I(){return t[23](t[47],t[48],t[49])}function R(){t[24].call(d,t[48],t[49])}return{c(){n=r("div"),e=f(v),l=b(),o=r("div"),c=r("select"),$.c(),s=b(),i=r("div"),d=r("input"),p(n,"class","svelte-1k88ftq"),p(c,"name",a=t[44]),p(c,"class","svelte-1k88ftq"),void 0===t[45]&&j(C),p(o,"class","svelte-1k88ftq"),p(d,"title","Ignore"),p(d,"type","checkbox"),p(d,"class","svelte-1k88ftq"),p(i,"class","svelte-1k88ftq")},m(a,r){u(a,n,r),q(n,e),u(a,l,r),u(a,o,r),q(o,c),$.m(c,null),w(c,t[45],!0),u(a,s,r),u(a,i,r),q(i,d),d.checked=t[46],h||(g=[x(c,"change",C),x(c,"change",t[22]),x(c,"change",t[8]),x(c,"mousedown",I,{once:!0}),x(d,"change",R),x(d,"change",t[25]),x(d,"change",t[8]),x(d,"click",it)],h=!0)},p(n,l){t=n,2&l[0]&&v!==(v=t[44]+"")&&_(e,v),y===(y=k(t))&&$?$.p(t,l):($.d(1),$=y(t),$&&($.c(),$.m(c,null))),2&l[0]&&a!==(a=t[44])&&p(c,"name",a),2&l[0]&&w(c,t[45]),2&l[0]&&(d.checked=t[46])},d(t){t&&(m(n),m(l),m(o),m(s),m(i)),$.d(),h=!1,M(g)}}}function et(t){let n,e,l,o,c,a,s
return{c(){n=r("div"),e=f("Min:\n            "),l=r("input"),o=f("\n            Max:\n            "),c=r("input"),p(l,"max","999"),p(l,"min","0"),p(l,"type","number"),p(l,"class","svelte-1k88ftq"),p(c,"max","999"),p(c,"min","0"),p(c,"type","number"),p(c,"class","svelte-1k88ftq"),p(n,"class","thresholds svelte-1k88ftq")},m(i,r){u(i,n,r),q(n,e),q(n,l),C(l,t[1].minpoint),q(n,o),q(n,c),C(c,t[1].maxpoint),a||(s=[x(l,"input",t[28]),x(l,"input",t[29]),x(l,"input",t[7]),x(c,"input",t[30]),x(c,"input",t[31]),x(c,"input",t[7])],a=!0)},p(t,n){2&n[0]&&g(l.value)!==t[1].minpoint&&C(l,t[1].minpoint),2&n[0]&&g(c.value)!==t[1].maxpoint&&C(c,t[1].maxpoint)},d(t){t&&m(n),a=!1,M(s)}}}function lt(t){let n
return{c(){n=f("Loading...")},m(t,e){u(t,n,e)},p:k,d(t){t&&m(n)}}}function ot(t){let n,e={ctx:t,current:null,token:null,hasCatch:!1,pending:lt,then:F,catch:E}
return R(t[11](),e),{c(){n=r("div"),e.block.c(),p(n,"class","pot-report svelte-1k88ftq")},m(t,l){u(t,n,l),e.block.m(n,e.anchor=null),e.mount=()=>n,e.anchor=null},p(n,l){N(e,t=n,l)},d(t){t&&m(n),e.block.d(),e.token=null,e=null}}}function ct(t){let n
return{c(){n=f("Pot Report")},m(t,e){u(t,n,e)},d(t){t&&m(n)}}}function at(t){let n,e
return n=new Z({props:{visible:t[0],$$slots:{title:[ct],default:[ot]},$$scope:{ctx:t}}}),n.$on("close",t[32]),n.$on("close",t[33]),{c(){o(n.$$.fragment)},m(t,l){c(n,t,l),e=!0},p(t,e){const l={}
1&e[0]&&(l.visible=t[0]),62&e[0]|33554432&e[1]&&(l.$$scope={dirty:e,ctx:t}),n.$set(l)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){s(n.$$.fragment,t),e=!1},d(t){i(n,t)}}}const st="fsh_potReport",it=t=>t.target.blur()
function rt(t,n,e){const l={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30}
let{visible:o=!0}=n,c=null,a=!1,s=!1,i=!1,r=[]
const p=t=>d("pot-report",t),u=()=>A(st,c),m=({r:t})=>t,f=({t:t})=>15===t,k=({n:t})=>t,b=({ignore:t})=>!t,q=(t,{count:n})=>t+n
function x(){u(),e(5,r=function(){const t=c.potMap.filter(b)
return U(t,"mapped").map((({mapped:n})=>({name:n,count:t.filter((({mapped:t})=>t===n)).reduce(q,0)})))}())}return t.$$set=t=>{"visible"in t&&e(0,o=t.visible)},[o,c,a,s,i,r,p,u,x,function(){e(1,c.potMap=c.potMap.map((t=>({...t,ignore:!0}))),c),x()},function(){e(1,c.potMap=c.potMap.map((t=>({...t,mapped:t.name,ignore:!1}))),c),x()},async function(){!async function(){e(1,c=await D(st)||L(l)),e(2,a=c.inventory),e(3,s=c.mapping),e(4,i=c.thresholds)}()
const t=(t=>t.flatMap(m).filter(f).map(k).sort(v))(await Q([S(),T()]))
e(1,c.potMap=(t=>U(t).map((n=>({name:n,mapped:c?.potMap?.find((({name:t})=>t===n))?.mapped||n,ignore:c?.potMap?.find((({name:t})=>t===n))?.ignore??!1,waiting:!0,count:t.filter((t=>t===n)).length}))))(t),c),x()},function(){c.inventory=this.checked,e(1,c)},()=>p("inventory"),()=>{e(2,a=!0)},function(){c.mapping=this.checked,e(1,c)},()=>p("mapping"),()=>{e(3,s=!0)},function(){c.thresholds=this.checked,e(1,c)},()=>p("thresholds"),()=>{e(4,i=!0)},function(t,n){t[n].mapped=h(this),e(1,c)},()=>p("mapped"),(t,n,l)=>{e(1,n[l].waiting=!1,c)},function(t,n){t[n].ignore=this.checked,e(1,c)},()=>p("ignore"),()=>p("ignore-all"),()=>p("reset"),function(){c.minpoint=g(this.value),e(1,c)},()=>p("minpoint"),function(){c.maxpoint=g(this.value),e(1,c)},()=>p("maxpoint"),()=>p("close"),()=>{e(0,o=!1)}]}var pt=class extends n{constructor(t){super(),e(this,t,rt,at,l,{visible:0},null,[-1,-1])}}
const ut={visible:!0}
let mt=0
function ft(){mt=t(ut,mt,pt)}export{ft as default}
//# sourceMappingURL=potReport-82d6f55b.js.map
