import{i as e}from"./Modal-CqAsf3fh.js"
import{S as t,L as n,M as s,bj as l,bk as c,be as o,bh as a,bl as i,O as p,Q as r,T as u,a1 as d,a4 as m,s as h,aS as f,a6 as g,cZ as v,aQ as k,b5 as b,a0 as x,P as y,U as M,X as $,a2 as _,N as j,b6 as w,a5 as C,R as S,V as R,W as I,bu as E,am as G}from"./calfSystem-B_VkFJhM.js"
import{h as P,u as T}from"./await_block-BL1ifHOf.js"
import{d as A,a as L}from"./deepClone-BfLspvK9.js"
import{d as N}from"./daGuildReport-BMV-KWve.js"
import{a as Q}from"./all-YfMtr2SN.js"
import{i as q}from"./isArray-eVldfhw1.js"
import{u as B}from"./uniq-BMMV7Mwa.js"
import{M as F}from"./ModalTitled-Cm4EkxR5.js"
import"./guild-D9cOzrqg.js"
import"./guildInventory-C_KVmMnj.js"
const K=e=>Math.max(Math.min(e,100),0),O=e=>`000000${e.toString(16)}`.slice(-6)
function U(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[57]=t[n].mapped,s[58]=t[n].ignore,s[59]=t[n].waiting,s[60]=t,s[61]=n,s}function V(e,t,n){const s=e.slice()
return s[62]=t[n].name,s}function W(e,t,n){const s=e.slice()
return s[56]=t[n].name,s[65]=t[n].count,s}function X(e){let t
return{c(){t=p("p"),t.textContent=`${e[68].message}`,b(t,"color","red")},m(e,n){u(e,t,n)},p:x,d(e){e&&d(t)}}}function Z(e){let t,n,s,l,c,o,a,i,h,f,g,v,k,b,x,j,w,C,S,R,I,E,G,P,T,A,L,N=e[2]&&z(e),Q=e[3]&&H(e),q=e[4]&&ne(e)
return{c(){t=p("div"),n=p("label"),s=p("input"),l=m("\n          Member Backpacks"),c=y(),o=p("label"),a=p("input"),i=m("\n          Guild Store"),h=y(),f=p("div"),g=p("input"),v=y(),k=p("label"),k.textContent="Composed Potion Inventory",b=y(),x=p("input"),j=y(),w=p("label"),w.textContent="Mapping",C=y(),S=p("input"),R=y(),I=p("label"),I.textContent="Thresholds",E=y(),G=p("div"),N&&N.c(),P=y(),Q&&Q.c(),T=y(),q&&q.c(),r(s,"type","checkbox"),r(n,"class","svelte-d6ps8u"),r(a,"type","checkbox"),r(o,"class","svelte-d6ps8u"),r(t,"class","filters svelte-d6ps8u"),r(g,"class","tab-ctrl svelte-d6ps8u"),r(g,"id","pr-inv"),r(g,"type","checkbox"),r(k,"for","pr-inv"),r(k,"class","svelte-d6ps8u"),r(x,"class","tab-ctrl svelte-d6ps8u"),r(x,"id","pr-map"),r(x,"type","checkbox"),r(w,"for","pr-map"),r(w,"class","svelte-d6ps8u"),r(S,"class","tab-ctrl svelte-d6ps8u"),r(S,"id","pr-levels"),r(S,"type","checkbox"),r(I,"for","pr-levels"),r(I,"class","svelte-d6ps8u"),r(G,"class","panels svelte-d6ps8u"),r(f,"class","pot-report svelte-d6ps8u")},m(p,r){u(p,t,r),M(t,n),M(n,s),s.checked=e[1].backpack,M(n,l),M(t,c),M(t,o),M(o,a),a.checked=e[1].guildstore,M(o,i),u(p,h,r),u(p,f,r),M(f,g),g.checked=e[1].inventory,M(f,v),M(f,k),M(f,b),M(f,x),x.checked=e[1].mapping,M(f,j),M(f,w),M(f,C),M(f,S),S.checked=e[1].thresholds,M(f,R),M(f,I),M(f,E),M(f,G),N&&N.m(G,null),M(G,P),Q&&Q.m(G,null),M(G,T),q&&q.m(G,null),A||(L=[$(s,"change",e[15]),$(s,"change",e[16]),$(a,"change",e[17]),$(a,"change",e[18]),$(g,"change",e[19]),$(g,"change",e[20]),$(g,"click",e[21],{once:!0}),$(x,"change",e[22]),$(x,"change",e[23]),$(x,"click",e[24],{once:!0}),$(S,"change",e[25]),$(S,"change",e[26]),$(S,"click",e[27],{once:!0})],A=!0)},p(e,t){2&t[0]&&(s.checked=e[1].backpack),2&t[0]&&(a.checked=e[1].guildstore),2&t[0]&&(g.checked=e[1].inventory),2&t[0]&&(x.checked=e[1].mapping),2&t[0]&&(S.checked=e[1].thresholds),e[2]?N?N.p(e,t):(N=z(e),N.c(),N.m(G,P)):N&&(N.d(1),N=null),e[3]?Q?Q.p(e,t):(Q=H(e),Q.c(),Q.m(G,T)):Q&&(Q.d(1),Q=null),e[4]?q?q.p(e,t):(q=ne(e),q.c(),q.m(G,null)):q&&(q.d(1),q=null)},d(e){e&&(d(t),d(h),d(f)),N&&N.d(),Q&&Q.d(),q&&q.d(),A=!1,_(L)}}}function z(e){let t,n,s=j(e[5]),l=[]
for(let t=0;t<s.length;t+=1)l[t]=D(W(e,s,t))
return{c(){t=p("div"),n=p("div")
for(let e=0;e<l.length;e+=1)l[e].c()
r(n,"class","inventory-grid-container svelte-d6ps8u"),r(t,"class","inventory svelte-d6ps8u")},m(e,s){u(e,t,s),M(t,n)
for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(n,null)},p(e,t){if(160&t[0]){let c
for(s=j(e[5]),c=0;c<s.length;c+=1){const o=W(e,s,c)
l[c]?l[c].p(o,t):(l[c]=D(o),l[c].c(),l[c].m(n,null))}for(;c<l.length;c+=1)l[c].d(1)
l.length=s.length}},d(e){e&&d(t),w(l,e)}}}function D(e){let t,n,s,l,c,o,a=e[56]+"",i=e[65]+""
return{c(){t=p("div"),n=m(a),s=y(),l=p("div"),c=m(i),o=y(),r(t,"class","svelte-d6ps8u"),r(l,"class","svelte-d6ps8u"),b(l,"background-color",e[7](e[65]))},m(e,a){u(e,t,a),M(t,n),u(e,s,a),u(e,l,a),M(l,c),M(l,o)},p(e,t){32&t[0]&&a!==(a=e[56]+"")&&C(n,a),32&t[0]&&i!==(i=e[65]+"")&&C(c,i),32&t[0]&&b(l,"background-color",e[7](e[65]))},d(e){e&&(d(t),d(s),d(l))}}}function H(e){let t,n,s,l,c,o,a,i,m,h,f,g=j(e[6]),v=[]
for(let t=0;t<g.length;t+=1)v[t]=te(U(e,g,t))
return{c(){t=p("div"),n=p("div")
for(let e=0;e<v.length;e+=1)v[e].c()
s=y(),l=p("div"),c=y(),o=p("div"),a=p("button"),a.textContent="Ignore All",i=y(),m=p("button"),m.textContent="Reset",r(l,"class","svelte-d6ps8u"),r(a,"class","custombutton svelte-d6ps8u"),r(a,"type","button"),r(m,"class","custombutton svelte-d6ps8u"),r(m,"type","button"),r(o,"class","svelte-d6ps8u"),r(n,"class","mapping-grid-container svelte-d6ps8u"),r(t,"class","mapping svelte-d6ps8u")},m(p,r){u(p,t,r),M(t,n)
for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(n,null)
M(n,s),M(n,l),M(n,c),M(n,o),M(o,a),M(o,i),M(o,m),h||(f=[$(a,"click",e[33]),$(m,"click",e[34])],h=!0)},p(e,t){if(2368&t[0]){let l
for(g=j(e[6]),l=0;l<g.length;l+=1){const c=U(e,g,l)
v[l]?v[l].p(c,t):(v[l]=te(c),v[l].c(),v[l].m(n,s))}for(;l<v.length;l+=1)v[l].d(1)
v.length=g.length}},d(e){e&&d(t),w(v,e),h=!1,_(f)}}}function J(e){let t,n=j(e[6]),s=[]
for(let t=0;t<n.length;t+=1)s[t]=ee(V(e,n,t))
return{c(){for(let e=0;e<s.length;e+=1)s[e].c()
t=G()},m(e,n){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,n)
u(e,t,n)},p(e,l){if(64&l[0]){let c
for(n=j(e[6]),c=0;c<n.length;c+=1){const o=V(e,n,c)
s[c]?s[c].p(o,l):(s[c]=ee(o),s[c].c(),s[c].m(t.parentNode,t))}for(;c<s.length;c+=1)s[c].d(1)
s.length=n.length}},d(e){e&&d(t),w(s,e)}}}function Y(e){let t,n,s,l=e[57]+""
return{c(){t=p("option"),n=m(l),t.__value=s=e[57],I(t,t.__value)},m(e,s){u(e,t,s),M(t,n)},p(e,c){64&c[0]&&l!==(l=e[57]+"")&&C(n,l),64&c[0]&&s!==(s=e[57])&&(t.__value=s,I(t,t.__value))},d(e){e&&d(t)}}}function ee(e){let t,n,s,l,c=e[62]+""
return{c(){t=p("option"),n=m(c),t.selected=s=e[57]===e[62],t.__value=l=e[62],I(t,t.__value)},m(e,s){u(e,t,s),M(t,n)},p(e,o){64&o[0]&&c!==(c=e[62]+"")&&C(n,c),64&o[0]&&s!==(s=e[57]===e[62])&&(t.selected=s),64&o[0]&&l!==(l=e[62])&&(t.__value=l,I(t,t.__value))},d(e){e&&d(t)}}}function te(e){let t,n,s,l,c,o,a,i,h,f,g,v=e[56]+""
function k(e,t){return e[59]?Y:J}let b=k(e),x=b(e)
function j(){e[28].call(c,e[60],e[61])}function w(){return e[30](e[59],e[60],e[61])}function I(){e[31].call(h,e[60],e[61])}return{c(){t=p("div"),n=m(v),s=y(),l=p("div"),c=p("select"),x.c(),a=y(),i=p("div"),h=p("input"),r(t,"class","svelte-d6ps8u"),r(c,"name",o=e[56]),r(c,"class","svelte-d6ps8u"),void 0===e[57]&&S(j),r(l,"class","svelte-d6ps8u"),r(h,"title","Ignore"),r(h,"type","checkbox"),r(h,"class","svelte-d6ps8u"),r(i,"class","svelte-d6ps8u")},m(o,p){u(o,t,p),M(t,n),u(o,s,p),u(o,l,p),M(l,c),x.m(c,null),R(c,e[57],!0),u(o,a,p),u(o,i,p),M(i,h),h.checked=e[58],f||(g=[$(c,"change",j),$(c,"change",e[29]),$(c,"mousedown",w),$(h,"change",I),$(h,"change",e[32]),$(h,"click",ie)],f=!0)},p(t,s){e=t,64&s[0]&&v!==(v=e[56]+"")&&C(n,v),b===(b=k(e))&&x?x.p(e,s):(x.d(1),x=b(e),x&&(x.c(),x.m(c,null))),64&s[0]&&o!==(o=e[56])&&r(c,"name",o),64&s[0]&&R(c,e[57]),64&s[0]&&(h.checked=e[58])},d(e){e&&(d(t),d(s),d(l),d(a),d(i)),x.d(),f=!1,_(g)}}}function ne(e){let t,n,s,l,c,o,a
return{c(){t=p("div"),n=m("Min:\n              "),s=p("input"),l=m("\n              Max:\n              "),c=p("input"),r(s,"max","999"),r(s,"min","0"),r(s,"type","number"),r(s,"class","svelte-d6ps8u"),r(c,"max","999"),r(c,"min","0"),r(c,"type","number"),r(c,"class","svelte-d6ps8u"),r(t,"class","thresholds svelte-d6ps8u")},m(i,p){u(i,t,p),M(t,n),M(t,s),I(s,e[1].minpoint),M(t,l),M(t,c),I(c,e[1].maxpoint),o||(a=[$(s,"input",e[35]),$(s,"input",e[36]),$(c,"input",e[37]),$(c,"input",e[38])],o=!0)},p(e,t){2&t[0]&&v(s.value)!==e[1].minpoint&&I(s,e[1].minpoint),2&t[0]&&v(c.value)!==e[1].maxpoint&&I(c,e[1].maxpoint)},d(e){e&&d(t),o=!1,_(a)}}}function se(e){let t
return{c(){t=m("Loading...")},m(e,n){u(e,t,n)},p:x,d(e){e&&d(t)}}}function le(e){let t,n={ctx:e,current:null,token:null,hasCatch:!0,pending:se,then:Z,catch:X,error:68}
return P(e[14](),n),{c(){t=p("div"),n.block.c(),r(t,"class","main svelte-d6ps8u")},m(e,s){u(e,t,s),n.block.m(t,n.anchor=null),n.mount=()=>t,n.anchor=null},p(t,s){T(n,e=t,s)},d(e){e&&d(t),n.block.d(),n.token=null,n=null}}}function ce(e){let t
return{c(){t=m("Pot Report")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function oe(e){let t,n
return t=new F({props:{visible:e[0],$$slots:{title:[ce],default:[le]},$$scope:{ctx:e}}}),t.$on("close",e[39]),{c(){l(t.$$.fragment)},m(e,s){c(t,e,s),n=!0},p(e,n){const s={}
1&n[0]&&(s.visible=e[0]),126&n[0]|128&n[2]&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(o(t.$$.fragment,e),n=!0)},o(e){a(t.$$.fragment,e),n=!1},d(e){i(t,e)}}}const ae="fsh_potReport",ie=e=>e.target.blur()
function pe(e,t,n){const s={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let{visible:l=!0}=t,c=null,o=!1,a=!1,i=!1,p=[],r=[],u=[]
const d=({t:e})=>15===e,m=({ignore:e})=>!e,b=e=>({name:t})=>t===e,x=(e,t)=>E(e.n,t.n),y=({r:e})=>e,M=e=>h("pot-report",e),$=({player:e,n:t})=>({loc:e?1:2,n:t}),_=()=>f(ae,c),j=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),w=e=>r.filter((e=>({n:t})=>e.some(b(t)))(e)).filter((({loc:e})=>c.backpack||1!==e)).filter((({loc:e})=>c.guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(b(n)).mapped,n:n}))(e))
function C(){_(),n(5,p=function(){const e=c.potMap.filter(m),t=w(e)
return B(e,"mapped").map(j(t))}()),n(6,u=c.potMap.map((e=>({...e,waiting:!0}))))}function S(){n(1,c.potMap=u.map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),c),C()}function R(){n(1,c.potMap=c.potMap.map((e=>({...e,ignore:!0}))),c),C()}function I(){n(1,c.potMap=c.potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),c),C()}return e.$$set=e=>{"visible"in e&&n(0,l=e.visible)},[l,c,o,a,i,p,u,e=>function(e,t,n){const s=K((e-t)/(n-t)*100)
let l=255,c=255
return s<50?c=Math.round(5.1*s):l=Math.round(510-5.1*s),`#${O(65536*l+256*c+0)}`}(e,c.minpoint,c.maxpoint),M,_,C,S,R,I,async function(){!async function(){n(1,c=await k(ae)||L(s)),n(2,o=c.inventory),n(3,a=c.mapping),n(4,i=c.thresholds),n(1,c.backpack=c.backpack??s.backpack,c),n(1,c.guildstore=c.guildstore??s.guildstore,c)}()
const e=await Q([A(),N()])
if(!q(e[0]?.r)||!q(e[1]?.r))throw new Error("Server Error")
r=(e=>e.flatMap(y).filter(d).map($).sort(x))(e),n(1,c.potMap=B(r,"n").map((({n:e})=>({name:e,mapped:c?.potMap?.find(b(e))?.mapped||e,ignore:c?.potMap?.find(b(e))?.ignore??!1}))),c),C()},function(){c.backpack=this.checked,n(1,c)},()=>{M("backpack"),_(),C()},function(){c.guildstore=this.checked,n(1,c)},()=>{M("guildstore"),_(),C()},function(){c.inventory=this.checked,n(1,c)},()=>{M("inventory"),_()},()=>{n(2,o=!0)},function(){c.mapping=this.checked,n(1,c)},()=>{M("mapping"),_()},()=>{n(3,a=!0)},function(){c.thresholds=this.checked,n(1,c)},()=>{M("thresholds"),_()},()=>{n(4,i=!0)},function(e,t){e[t].mapped=g(this),n(6,u)},()=>{M("mapped"),S()},(e,t,s)=>{n(6,t[s].waiting=!1,u)},function(e,t){e[t].ignore=this.checked,n(6,u)},()=>{M("ignore"),S()},()=>{M("ignore-all"),R()},()=>{M("reset"),I()},function(){c.minpoint=v(this.value),n(1,c)},()=>{M("minpoint"),C()},function(){c.maxpoint=v(this.value),n(1,c)},()=>{M("maxpoint"),C()},()=>{M("close"),n(0,l=!1)}]}class re extends t{constructor(e){super(),n(this,e,pe,oe,s,{visible:0},null,[-1,-1,-1])}}const ue={visible:!0}
let de=0
function me(){de=e(ue,de,re)}export{me as default}
//# sourceMappingURL=potReport-DwZVrcZw.js.map
