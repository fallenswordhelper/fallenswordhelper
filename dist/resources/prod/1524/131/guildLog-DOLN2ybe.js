import{i as e}from"./instantiate-upFtXRx7.js"
import{S as t,L as n,M as s,N as l,O as c,b5 as a,dj as o,R as i,T as r,U as u,dk as d,X as h,bf as m,Z as f,dl as g,bg as p,be as $,bh as v,a0 as b,dg as k,cf as y,P as w,ch as x,ci as _,cj as j,ba as L,cl as C,a3 as N,$ as G,bj as T,Q as M,W as q,bk as S,bl as I,a1 as P,bi as H,aQ as B,aS as A,cg as E,b6 as V,a4 as R,am as D,aL as O,bX as U,ar as Q,av as F,aw as X,_ as Z,bt as z,s as J,b8 as W,aP as Y,b9 as K,c as ee,di as te,cm as ne,cn as se,dm as le,a5 as ce,ai as ae,ae as oe}from"./calfSystem-Dr91xfiU.js"
import{h as ie,u as re}from"./await_block-BURScWZB.js"
import{g as ue}from"./guild-CPwxUxeX.js"
import{p as de,a as he}from"./pubsub-DvpIGyph.js"
import{M as me}from"./ModalTitled-D7-oeBYs.js"
import{L as fe}from"./LinkButton-CSIDWINj.js"
import{L as ge}from"./LinkButtonBracketed-6Az5XvR7.js"
import{f as pe}from"./formatUtcTimestamp-t57AV4Fr.js"
import{n as $e}from"./numberIsNaN-CGkd1jiA.js"
import{o as ve}from"./openQuickBuffById-D_7hBQoI.js"
import{g as be}from"./getCombat-DeR_b-_D.js"
import"./Modal-CXvDpMvC.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./fshOpen-AuKioUPF.js"
function ke(e,t,n){const s=e.slice()
return s[23]=t[n],s}const ye=e=>({item:16&e}),we=e=>({item:e[23].data})
function xe(e,t){let n,s,l
const a=t[15].default,i=y(a,t,t[14],we),d=i||function(e){let t
return{c(){t=N("Missing template")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}()
return{key:e,first:null,c(){n=c("svelte-virtual-list-row"),d&&d.c(),s=w(),o(n,"class","svelte-1tqh76q"),this.first=n},m(e,t){r(e,n,t),d&&d.m(n,null),u(n,s),l=!0},p(e,n){t=e,i&&i.p&&(!l||16400&n)&&x(i,a,t,t[14],l?j(a,t[14],n,ye):_(t[14]),we)},i(e){l||($(d,e),l=!0)},o(e){v(d,e),l=!1},d(e){e&&b(n),d&&d.d(e)}}}function _e(e){let t,n,s,k,y,w,x=[],_=new Map,j=l(e[4])
const L=e=>e[23].index
for(let t=0;t<j.length;t+=1){let n=ke(e,j,t),s=L(n)
_.set(s,x[t]=xe(s,n))}return{c(){t=c("svelte-virtual-list-viewport"),n=c("svelte-virtual-list-contents")
for(let e=0;e<x.length;e+=1)x[e].c()
a(n,"padding-top",e[5]+"px"),a(n,"padding-bottom",e[6]+"px"),o(n,"class","svelte-1tqh76q"),a(t,"height",e[0]),o(t,"class","svelte-1tqh76q"),i((()=>e[18].call(t)))},m(l,c){r(l,t,c),u(t,n)
for(let e=0;e<x.length;e+=1)x[e]&&x[e].m(n,null)
e[16](n),e[17](t),s=d(t,e[18].bind(t)),k=!0,y||(w=h(t,"scroll",e[7]),y=!0)},p(e,[s]){16400&s&&(j=l(e[4]),m(),x=f(x,s,L,1,e,j,_,n,g,xe,null,ke),p()),(!k||32&s)&&a(n,"padding-top",e[5]+"px"),(!k||64&s)&&a(n,"padding-bottom",e[6]+"px"),(!k||1&s)&&a(t,"height",e[0])},i(e){if(!k){for(let e=0;e<j.length;e+=1)$(x[e])
k=!0}},o(e){for(let e=0;e<x.length;e+=1)v(x[e])
k=!1},d(n){n&&b(t)
for(let e=0;e<x.length;e+=1)x[e].d()
e[16](null),e[17](null),s(),y=!1,w()}}}function je(e,t,n){let s,l,c,a,o,i,{$$slots:r={},$$scope:u}=t,{items:d}=t,{height:h="100%"}=t,{itemHeight:m}=t,{start:f=0}=t,{end:g=0}=t,p=[],$=0,v=0,b=0
async function y(e,t){const{scrollTop:n}=l
t={left:0,top:n+(e-f)*(m||i),behavior:"smooth",...t},l.scrollTo(t)}return k((()=>{s=c.getElementsByTagName("svelte-virtual-list-row"),n(13,o=!0)})),e.$$set=e=>{"items"in e&&n(10,d=e.items),"height"in e&&n(0,h=e.height),"itemHeight"in e&&n(11,m=e.itemHeight),"start"in e&&n(8,f=e.start),"end"in e&&n(9,g=e.end),"$$scope"in e&&n(14,u=e.$$scope)},e.$$.update=()=>{1792&e.$$.dirty&&n(4,a=d.slice(f,g).map(((e,t)=>({index:t+f,data:e})))),11266&e.$$.dirty&&o&&async function(e,t,c){e.length<f&&await y(e.length-1,{behavior:"auto"})
const{scrollTop:a}=l
await L()
let o=v-a,r=f
for(;o<t&&r<e.length;){let e=s[r-f]
e||(n(9,g=r+1),await L(),e=s[r-f]),o+=p[r]=c||e.offsetHeight,r+=1}n(9,g=r)
const u=e.length-g
i=(v+o)/g,n(6,b=u*i),p.length=e.length}(d,$,m)},[h,$,l,c,a,v,b,async function(){const{scrollTop:e}=l
for(let e=0;e<s.length;e+=1)p[f+e]=m||s[e].offsetHeight
let t=0,c=0
for(;t<d.length;){const s=p[t]||i
if(c+s>e){n(8,f=t),n(5,v=c)
break}c+=s,t+=1}for(;t<d.length&&(c+=p[t]||i,t+=1,!(c>e+$)););n(9,g=t)
const a=d.length-g
for(i=c/g;t<d.length;)p[t++]=i
n(6,b=a*i)},f,g,d,m,y,o,u,r,function(e){C[e?"unshift":"push"]((()=>{c=e,n(3,c)}))},function(e){C[e?"unshift":"push"]((()=>{l=e,n(2,l)}))},function(){$=this.offsetHeight,n(1,$)}]}class Le extends t{constructor(e){super(),n(this,e,je,_e,s,{items:10,height:0,itemHeight:11,start:8,end:9,scrollToIndex:12})}get scrollToIndex(){return this.$$.ctx[12]}}async function Ce(e=-1,t=1,n=[]){const s=await function(e,t,n){return ue({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!s?.s)return void de("guildLog-progress","Server Error.")
de("guildLog-progress")
const l=n.concat(s.r.logs)
return 1e3!==s.r.logs.length?l:Ce(s.r.logs[0].id,0,l)}function Ne(e){let t
return{c(){t=N("Old Guild Log")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ge(e){let t
return{c(){t=N("Select All")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Te(e){let t
return{c(){t=N("Select None")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Me(e){let t
return{c(){t=N("Refresh")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function qe(e){let t
return{c(){t=N("×")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Se(e){let t,n,s,l,o,i,d,m,f,g,p,k,y,x,_,j,L,C,G,H,B,A,E,V,R,D,O,U,Q,F,X,Z,z,J,W,Y,K,ee,te,ne,se,le,ce,ae,oe,ie,re,ue,de,he,me,pe,$e,ve,be,ke,ye,we,xe,_e,je,Le,Ce,Se,Ie,Pe,He,Be,Ae,Ee,Ve,Re,De,Oe,Ue,Qe,Fe,Xe,Ze,ze,Je,We,Ye,Ke,et,tt
return X=new fe({props:{$$slots:{default:[Ne]},$$scope:{ctx:e}}}),X.$on("click",e[3]),Be=new ge({props:{$$slots:{default:[Ge]},$$scope:{ctx:e}}}),Be.$on("click",e[4]),Ve=new ge({props:{$$slots:{default:[Te]},$$scope:{ctx:e}}}),Ve.$on("click",e[5]),Oe=new ge({props:{$$slots:{default:[Me]},$$scope:{ctx:e}}}),Oe.$on("click",e[6]),We=new fe({props:{disabled:!e[1],$$slots:{default:[qe]},$$scope:{ctx:e}}}),We.$on("click",e[7]),{c(){t=c("div"),n=c("div"),s=c("div"),s.innerHTML="<span>Filters:</span>",l=w(),o=c("div"),i=c("label"),d=N("Potions:\n        "),m=c("input"),f=w(),g=c("div"),p=c("label"),k=N("Store/Recalls:\n        "),y=c("input"),x=w(),_=c("div"),j=c("label"),L=N("Relics:\n        "),C=c("input"),G=w(),H=c("div"),B=c("label"),A=N("Mercenaries:\n        "),E=c("input"),V=w(),R=c("div"),D=c("label"),O=N("Group Combats:\n        "),U=c("input"),Q=w(),F=c("div"),T(X.$$.fragment),Z=w(),z=c("div"),J=c("label"),W=N("Donations:\n        "),Y=c("input"),K=w(),ee=c("div"),te=c("label"),ne=N("Rankings:\n        "),se=c("input"),le=w(),ce=c("div"),ae=c("label"),oe=N("GvGs:\n        "),ie=c("input"),re=w(),ue=c("div"),de=c("label"),he=N("Tag/UnTags:\n        "),me=c("input"),pe=w(),$e=c("div"),ve=c("label"),be=N("Titans:\n        "),ke=c("input"),ye=w(),we=c("div"),xe=c("label"),_e=N("Other:\n        "),je=c("input"),Le=w(),Ce=c("div"),Se=c("div"),Ie=w(),Pe=c("div"),He=c("div"),T(Be.$$.fragment),Ae=w(),Ee=c("div"),T(Ve.$$.fragment),Re=w(),De=c("div"),T(Oe.$$.fragment),Ue=w(),Qe=c("div"),Fe=c("label"),Xe=N("Search:\n        "),Ze=c("span"),ze=c("input"),Je=w(),Ye=c("div"),T(We.$$.fragment),M(s,"class","front svelte-1u4hj19"),M(m,"type","checkbox"),m.__value="1",q(m,m.__value),M(y,"type","checkbox"),y.__value="2",q(y,y.__value),M(C,"type","checkbox"),C.__value="4",q(C,C.__value),M(E,"type","checkbox"),E.__value="5",q(E,E.__value),M(U,"type","checkbox"),U.__value="6",q(U,U.__value),M(Y,"type","checkbox"),Y.__value="7",q(Y,Y.__value),M(se,"type","checkbox"),se.__value="8",q(se,se.__value),M(ie,"type","checkbox"),ie.__value="9",q(ie,ie.__value),M(me,"type","checkbox"),me.__value="3",q(me,me.__value),M(ke,"type","checkbox"),ke.__value="10",q(ke,ke.__value),M(je,"type","checkbox"),je.__value="0",q(je,je.__value),M(n,"class","filters svelte-1u4hj19"),M(Pe,"class","buttons svelte-1u4hj19"),M(ze,"type","text"),M(ze,"class","svelte-1u4hj19"),a(Ye,"display","contents"),a(Ye,"--button-deco","none"),M(Ze,"class","search-wrapper svelte-1u4hj19"),M(Qe,"class","search-box svelte-1u4hj19"),M(Ce,"class","button-row svelte-1u4hj19"),M(t,"class","filter-header svelte-1u4hj19")},m(c,a){r(c,t,a),u(t,n),u(n,s),u(n,l),u(n,o),u(o,i),u(i,d),u(i,m),m.checked=e[0][1],u(n,f),u(n,g),u(g,p),u(p,k),u(p,y),y.checked=e[0][2],u(n,x),u(n,_),u(_,j),u(j,L),u(j,C),C.checked=e[0][4],u(n,G),u(n,H),u(H,B),u(B,A),u(B,E),E.checked=e[0][5],u(n,V),u(n,R),u(R,D),u(D,O),u(D,U),U.checked=e[0][6],u(n,Q),u(n,F),S(X,F,null),u(n,Z),u(n,z),u(z,J),u(J,W),u(J,Y),Y.checked=e[0][7],u(n,K),u(n,ee),u(ee,te),u(te,ne),u(te,se),se.checked=e[0][8],u(n,le),u(n,ce),u(ce,ae),u(ae,oe),u(ae,ie),ie.checked=e[0][9],u(n,re),u(n,ue),u(ue,de),u(de,he),u(de,me),me.checked=e[0][3],u(n,pe),u(n,$e),u($e,ve),u(ve,be),u(ve,ke),ke.checked=e[0][10],u(n,ye),u(n,we),u(we,xe),u(xe,_e),u(xe,je),je.checked=e[0][0],u(t,Le),u(t,Ce),u(Ce,Se),u(Ce,Ie),u(Ce,Pe),u(Pe,He),S(Be,He,null),u(Pe,Ae),u(Pe,Ee),S(Ve,Ee,null),u(Pe,Re),u(Pe,De),S(Oe,De,null),u(Ce,Ue),u(Ce,Qe),u(Qe,Fe),u(Fe,Xe),u(Fe,Ze),u(Ze,ze),q(ze,e[1]),u(Ze,Je),u(Ze,Ye),S(We,Ye,null),Ke=!0,et||(tt=[h(m,"change",e[8]),h(m,"change",e[2]),h(y,"change",e[9]),h(y,"change",e[2]),h(C,"change",e[10]),h(C,"change",e[2]),h(E,"change",e[11]),h(E,"change",e[2]),h(U,"change",e[12]),h(U,"change",e[2]),h(Y,"change",e[13]),h(Y,"change",e[2]),h(se,"change",e[14]),h(se,"change",e[2]),h(ie,"change",e[15]),h(ie,"change",e[2]),h(me,"change",e[16]),h(me,"change",e[2]),h(ke,"change",e[17]),h(ke,"change",e[2]),h(je,"change",e[18]),h(je,"change",e[2]),h(ze,"input",e[19])],et=!0)},p(e,[t]){1&t&&(m.checked=e[0][1]),1&t&&(y.checked=e[0][2]),1&t&&(C.checked=e[0][4]),1&t&&(E.checked=e[0][5]),1&t&&(U.checked=e[0][6])
const n={}
16777216&t&&(n.$$scope={dirty:t,ctx:e}),X.$set(n),1&t&&(Y.checked=e[0][7]),1&t&&(se.checked=e[0][8]),1&t&&(ie.checked=e[0][9]),1&t&&(me.checked=e[0][3]),1&t&&(ke.checked=e[0][10]),1&t&&(je.checked=e[0][0])
const s={}
16777216&t&&(s.$$scope={dirty:t,ctx:e}),Be.$set(s)
const l={}
16777216&t&&(l.$$scope={dirty:t,ctx:e}),Ve.$set(l)
const c={}
16777216&t&&(c.$$scope={dirty:t,ctx:e}),Oe.$set(c),2&t&&ze.value!==e[1]&&q(ze,e[1])
const a={}
2&t&&(a.disabled=!e[1]),16777216&t&&(a.$$scope={dirty:t,ctx:e}),We.$set(a)},i(e){Ke||($(X.$$.fragment,e),$(Be.$$.fragment,e),$(Ve.$$.fragment,e),$(Oe.$$.fragment,e),$(We.$$.fragment,e),Ke=!0)},o(e){v(X.$$.fragment,e),v(Be.$$.fragment,e),v(Ve.$$.fragment,e),v(Oe.$$.fragment,e),v(We.$$.fragment,e),Ke=!1},d(e){e&&b(t),I(X),I(Be),I(Ve),I(Oe),I(We),et=!1,P(tt)}}}function Ie(e,t,n){const s=H()
let{checks:l=Array(11).fill(!0)}=t,{searchValue:c=""}=t
function a(){A("fsh_LogChecks",l)}function o(e){n(0,l=l.map((()=>e))),a()}return async function(){n(0,l=await B("fsh_LogChecks")??Array(11).fill(!0))}(),e.$$set=e=>{"checks"in e&&n(0,l=e.checks),"searchValue"in e&&n(1,c=e.searchValue)},[l,c,function(){a(),s("cbChange")},function(){s("oldGuildLog")},function(){o(!0),s("selectAll")},function(){o(!1),s("selectNone")},function(){s("refresh")},function(){s("clearSearch")},function(){l[1]=this.checked,n(0,l)},function(){l[2]=this.checked,n(0,l)},function(){l[4]=this.checked,n(0,l)},function(){l[5]=this.checked,n(0,l)},function(){l[6]=this.checked,n(0,l)},function(){l[7]=this.checked,n(0,l)},function(){l[8]=this.checked,n(0,l)},function(){l[9]=this.checked,n(0,l)},function(){l[3]=this.checked,n(0,l)},function(){l[10]=this.checked,n(0,l)},function(){l[0]=this.checked,n(0,l)},function(){c=this.value,n(1,c)}]}class Pe extends t{constructor(e){super(),n(this,e,Ie,Se,s,{checks:0,searchValue:1})}}function He(e,t,n){const s=e.slice()
return s[17]=t[n].data,s}function Be(e,t,n){const s=e.slice()
return s[17]=t[n].data,s}function Ae(e,t,n){const s=e.slice()
return s[22]=t[n],s}function Ee(e){let t
return{c(){t=c("i"),M(t,"class","fas fa-envelope"),M(t,"aria-hidden","true")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ve(e){let t,n=pe(e[2].time)+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){4&s&&n!==(n=pe(e[2].time)+"")&&R(t,n)},d(e){e&&b(t)}}}function Re(e){let t,n=e[22]+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){4&s&&n!==(n=e[22]+"")&&R(t,n)},d(e){e&&b(t)}}}function De(e){let t,n,s=0===e[2].msg.attachments[e[22]].type&&Oe(e),l=1===e[2].msg.attachments[e[22]].type&&Ue(e)
return{c(){s&&s.c(),t=w(),l&&l.c(),n=D()},m(e,c){s&&s.m(e,c),r(e,t,c),l&&l.m(e,c),r(e,n,c)},p(e,c){0===e[2].msg.attachments[e[22]].type?s?s.p(e,c):(s=Oe(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),1===e[2].msg.attachments[e[22]].type?l?l.p(e,c):(l=Ue(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(e){e&&(b(t),b(n)),s&&s.d(e),l&&l.d(e)}}}function Oe(e){let t,n,s,l=e[2].msg.attachments[e[22]].data.name+""
return{c(){t=c("a"),n=N(l),M(t,"href",s=""+(z+e[2].msg.attachments[e[22]].data.id)),M(t,"class","svelte-164vlq2")},m(e,s){r(e,t,s),u(t,n)},p(e,c){4&c&&l!==(l=e[2].msg.attachments[e[22]].data.name+"")&&R(n,l),4&c&&s!==(s=""+(z+e[2].msg.attachments[e[22]].data.id))&&M(t,"href",s)},d(e){e&&b(t)}}}function Ue(e){let t,n,s,l,a,o,i,d,h=e[2].msg.attachments[e[22]].data.name+""
return{c(){t=N("[\n          "),n=c("a"),s=c("img"),o=N(h),d=N("\n          ]"),W(s.src,l=Y+"guilds/"+e[2].msg.attachments[e[22]].data.id+"_mini.png")||M(s,"src",l),M(s,"alt",a=e[2].msg.attachments[e[22]].data.name),M(s,"class","svelte-164vlq2"),M(n,"href",i=""+(K+e[2].msg.attachments[e[22]].data.id)),M(n,"class","svelte-164vlq2")},m(e,l){r(e,t,l),r(e,n,l),u(n,s),u(n,o),r(e,d,l)},p(e,t){4&t&&!W(s.src,l=Y+"guilds/"+e[2].msg.attachments[e[22]].data.id+"_mini.png")&&M(s,"src",l),4&t&&a!==(a=e[2].msg.attachments[e[22]].data.name)&&M(s,"alt",a),4&t&&h!==(h=e[2].msg.attachments[e[22]].data.name+"")&&R(o,h),4&t&&i!==(i=""+(K+e[2].msg.attachments[e[22]].data.id))&&M(n,"href",i)},d(e){e&&(b(t),b(n),b(d))}}}function Qe(e){let t,n
function s(e,n){return 4&n&&(t=null),null==t&&(t=!(1!==e[22].length||$e(Number(e[22])))),t?De:Re}let l=s(e,-1),c=l(e)
return{c(){c.c(),n=D()},m(e,t){c.m(e,t),r(e,n,t)},p(e,t){l===(l=s(e,t))&&c?c.p(e,t):(c.d(1),c=l(e),c&&(c.c(),c.m(n.parentNode,n)))},d(e){e&&b(n),c.d(e)}}}function Fe(e){let t,n,s,c,a=17===e[2].type&&e[0]&&e[2].msg.text.includes("victorious"),o=l(e[2].msg.attachments.filter(at)),i=[]
for(let t=0;t<o.length;t+=1)i[t]=We(Be(e,o,t))
const u=e=>v(i[e],1,1,(()=>{i[e]=null}))
let d=l(e[2].msg.attachments.filter(ot)),h=[]
for(let t=0;t<d.length;t+=1)h[t]=Ke(He(e,d,t))
const f=e=>v(h[e],1,1,(()=>{h[e]=null}))
let g=a&&et(e)
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=w()
for(let e=0;e<h.length;e+=1)h[e].c()
n=w(),g&&g.c(),s=D()},m(e,l){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,l)
r(e,t,l)
for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(e,l)
r(e,n,l),g&&g.m(e,l),r(e,s,l),c=!0},p(e,c){if(932&c){let n
for(o=l(e[2].msg.attachments.filter(at)),n=0;n<o.length;n+=1){const s=Be(e,o,n)
i[n]?(i[n].p(s,c),$(i[n],1)):(i[n]=We(s),i[n].c(),$(i[n],1),i[n].m(t.parentNode,t))}for(m(),n=o.length;n<i.length;n+=1)u(n)
p()}if(68&c){let t
for(d=l(e[2].msg.attachments.filter(ot)),t=0;t<d.length;t+=1){const s=He(e,d,t)
h[t]?(h[t].p(s,c),$(h[t],1)):(h[t]=Ke(s),h[t].c(),$(h[t],1),h[t].m(n.parentNode,n))}for(m(),t=d.length;t<h.length;t+=1)f(t)
p()}5&c&&(a=17===e[2].type&&e[0]&&e[2].msg.text.includes("victorious")),a?g?g.p(e,c):(g=et(e),g.c(),g.m(s.parentNode,s)):g&&(g.d(1),g=null)},i(e){if(!c){for(let e=0;e<o.length;e+=1)$(i[e])
for(let e=0;e<d.length;e+=1)$(h[e])
c=!0}},o(e){i=i.filter(Boolean)
for(let e=0;e<i.length;e+=1)v(i[e])
h=h.filter(Boolean)
for(let e=0;e<h.length;e+=1)v(h[e])
c=!1},d(e){e&&(b(t),b(n),b(s)),V(i,e),V(h,e),g&&g.d(e)}}}function Xe(e){let t
return{c(){t=N("Reply")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ze(e){let t
return{c(){t=N("Buff")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function ze(e){let t
return{c(){t=N("Send")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Je(e){let t
return{c(){t=N("Trade")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function We(e){let t,n,s,l,a,o,i,d,h,m,f
return s=new fe({props:{$$slots:{default:[Xe]},$$scope:{ctx:e}}}),s.$on("click",(function(){return e[10](e[17])})),a=new fe({props:{$$slots:{default:[Ze]},$$scope:{ctx:e}}}),a.$on("click",(function(){return e[11](e[17])})),i=new fe({props:{$$slots:{default:[ze]},$$scope:{ctx:e}}}),i.$on("click",(function(){return e[12](e[17])})),h=new fe({props:{$$slots:{default:[Je]},$$scope:{ctx:e}}}),h.$on("click",(function(){return e[13](e[17])})),{c(){t=c("span"),n=N("[\n          "),T(s.$$.fragment),l=N("\n          |\n          "),T(a.$$.fragment),o=N("\n          |\n          "),T(i.$$.fragment),d=N("\n          |\n          "),T(h.$$.fragment),m=N("\n          ]"),M(t,"class","action-buttons svelte-164vlq2")},m(e,c){r(e,t,c),u(t,n),S(s,t,null),u(t,l),S(a,t,null),u(t,o),S(i,t,null),u(t,d),S(h,t,null),u(t,m),f=!0},p(t,n){e=t
const l={}
33554432&n&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)
const c={}
33554432&n&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)
const o={}
33554432&n&&(o.$$scope={dirty:n,ctx:e}),i.$set(o)
const r={}
33554432&n&&(r.$$scope={dirty:n,ctx:e}),h.$set(r)},i(e){f||($(s.$$.fragment,e),$(a.$$.fragment,e),$(i.$$.fragment,e),$(h.$$.fragment,e),f=!0)},o(e){v(s.$$.fragment,e),v(a.$$.fragment,e),v(i.$$.fragment,e),v(h.$$.fragment,e),f=!1},d(e){e&&b(t),I(s),I(a),I(i),I(h)}}}function Ye(e){let t
return{c(){t=N("View Combat")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ke(e){let t,n,s,l,a
return s=new fe({props:{$$slots:{default:[Ye]},$$scope:{ctx:e}}}),s.$on("click",(function(){return e[14](e[17])})),{c(){t=c("span"),n=N("[\n          "),T(s.$$.fragment),l=N("\n          ]"),M(t,"class","action-buttons svelte-164vlq2")},m(e,c){r(e,t,c),u(t,n),S(s,t,null),u(t,l),a=!0},p(t,n){e=t
const l={}
33554432&n&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)},i(e){a||($(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){e&&b(t),I(s)}}}function et(e){let t,n,s={ctx:e,current:null,token:null,hasCatch:!1,pending:lt,then:nt,catch:tt,value:16}
return ie(n=be(e[2].time,e[2].msg.attachments[0].data),s),{c(){t=D(),s.block.c()},m(e,n){r(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t},p(t,l){e=t,s.ctx=e,4&l&&n!==(n=be(e[2].time,e[2].msg.attachments[0].data))&&ie(n,s)||re(s,e,l)},d(e){e&&b(t),s.block.d(e),s.token=null,s=null}}}function tt(e){return{c:Z,m:Z,p:Z,d:Z}}function nt(e){let t,n=e[16]?.r?.combat?.items?.[0]?.n&&st(e)
return{c(){n&&n.c(),t=D()},m(e,s){n&&n.m(e,s),r(e,t,s)},p(e,s){e[16]?.r?.combat?.items?.[0]?.n?n?n.p(e,s):(n=st(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&b(t),n&&n.d(e)}}}function st(e){let t,n,s,l,a,o,i,d,h=e[16].r.combat.attacker.group.players[0].name+"",m=e[16]?.r?.combat?.items?.[0]?.n+""
return{c(){t=c("div"),n=c("a"),s=N(h),a=N("'s\n              group looted the item\n              '"),o=c("span"),i=N(m),d=N("'"),M(n,"href",l=""+(z+e[16].r.combat.attacker.group.players[0].id)),M(n,"class","svelte-164vlq2"),M(o,"class","fshGreen")},m(e,l){r(e,t,l),u(t,n),u(n,s),u(t,a),u(t,o),u(o,i),u(t,d)},p(e,t){4&t&&h!==(h=e[16].r.combat.attacker.group.players[0].name+"")&&R(s,h),4&t&&l!==(l=""+(z+e[16].r.combat.attacker.group.players[0].id))&&M(n,"href",l),4&t&&m!==(m=e[16]?.r?.combat?.items?.[0]?.n+"")&&R(i,m)},d(e){e&&b(t)}}}function lt(e){return{c:Z,m:Z,p:Z,d:Z}}function ct(e){let t,n,s,a,o,i,d,h,f=e[2].time&&Ee(),g=e[2].time&&Ve(e),k=l(e[2].msg.text.split(/<link=a(\d)><\/link>/).filter(e[3])),y=[]
for(let t=0;t<k.length;t+=1)y[t]=Qe(Ae(e,k,t))
let x=e[2].msg?.attachments?.length&&Fe(e)
return{c(){t=c("div"),n=c("div"),f&&f.c(),s=w(),a=c("div"),g&&g.c(),o=w(),i=c("div")
for(let e=0;e<y.length;e+=1)y[e].c()
d=w(),x&&x.c(),M(n,"class","svelte-164vlq2"),E(n,"old",e[2].old),E(n,"new",e[2].new),M(a,"class","svelte-164vlq2"),E(a,"old",e[2].old),E(a,"new",e[2].new),M(i,"class","svelte-164vlq2"),E(i,"old",e[2].old),E(i,"new",e[2].new),M(t,"class","row-container svelte-164vlq2"),E(t,"not-self",e[1]&&e[4](e[2])),E(t,"separator",e[2].index)},m(e,l){r(e,t,l),u(t,n),f&&f.m(n,null),u(t,s),u(t,a),g&&g.m(a,null),u(t,o),u(t,i)
for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(i,null)
u(i,d),x&&x.m(i,null),h=!0},p(e,[s]){if(e[2].time?f||(f=Ee(),f.c(),f.m(n,null)):f&&(f.d(1),f=null),(!h||4&s)&&E(n,"old",e[2].old),(!h||4&s)&&E(n,"new",e[2].new),e[2].time?g?g.p(e,s):(g=Ve(e),g.c(),g.m(a,null)):g&&(g.d(1),g=null),(!h||4&s)&&E(a,"old",e[2].old),(!h||4&s)&&E(a,"new",e[2].new),12&s){let t
for(k=l(e[2].msg.text.split(/<link=a(\d)><\/link>/).filter(e[3])),t=0;t<k.length;t+=1){const n=Ae(e,k,t)
y[t]?y[t].p(n,s):(y[t]=Qe(n),y[t].c(),y[t].m(i,d))}for(;t<y.length;t+=1)y[t].d(1)
y.length=k.length}e[2].msg?.attachments?.length?x?(x.p(e,s),4&s&&$(x,1)):(x=Fe(e),x.c(),$(x,1),x.m(i,null)):x&&(m(),v(x,1,1,(()=>{x=null})),p()),(!h||4&s)&&E(i,"old",e[2].old),(!h||4&s)&&E(i,"new",e[2].new),(!h||22&s)&&E(t,"not-self",e[1]&&e[4](e[2])),(!h||4&s)&&E(t,"separator",e[2].index)},i(e){h||($(x),h=!0)},o(e){v(x),h=!1},d(e){e&&b(t),f&&f.d(),g&&g.d(),V(y,e),x&&x.d()}}}const at=({type:e})=>0===e,ot=({type:e})=>11===e
function it(e,t,n){let{groupCombatItems:s=null}=t,{hideNonPlayerGuildLogMessages:l=null}=t,{logEntry:c=null}=t
function a(e){J("Guild Log",e)}function o(e){a("buff"),ve(e.id)}function i(e){a("combat"),U(`${Q}combat&subcmd=view&combat_id=${e}`)}function r(e){a("reply"),window.openQuickMsgDialog(e.name)}function u(e){a("send"),U(`${F}${e.name}`)}function d(e){a("trade"),U(`${X}${e.name}`)}return e.$$set=e=>{"groupCombatItems"in e&&n(0,s=e.groupCombatItems),"hideNonPlayerGuildLogMessages"in e&&n(1,l=e.hideNonPlayerGuildLogMessages),"logEntry"in e&&n(2,c=e.logEntry)},[s,l,c,e=>e,function(e){const t=e.msg.attachments?.filter((e=>0===e.type))
return t?.length&&!t.filter((({data:{id:e}})=>e===O())).length},o,i,r,u,d,e=>r(e),e=>o(e),e=>u(e),e=>d(e),e=>i(e)]}class rt extends t{constructor(e){super(),n(this,e,it,ct,s,{groupCombatItems:0,hideNonPlayerGuildLogMessages:1,logEntry:2})}}const ut=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function dt(e,t){return te(t)?e.includes(t):t.test(e)}function ht(e,t){return t.some(ee(dt,e))}function mt(e){const t=ut.findIndex(ee(ht,e))
return-1===t?0:t}function ft(e,t,n){const s=e.slice()
return s[34]=t[n],s[36]=n,s}function gt(e){let t
return{c(){t=c("span"),t.textContent="(Guild Log messages not involving self are dimmed!)",M(t,"class","white svelte-1u02a2w")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function pt(e){let t,n=e[38]+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){64&s[0]&&n!==(n=e[38]+"")&&R(t,n)},i:Z,o:Z,d(e){e&&b(t)}}}function $t(e){let t,n,s
return n=new Le({props:{items:e[3],$$slots:{default:[vt,({item:e})=>({37:e}),({item:e})=>[0,e?64:0]]},$$scope:{ctx:e}}}),{c(){t=c("div"),T(n.$$.fragment),M(t,"class","vs svelte-1u02a2w")},m(e,l){r(e,t,l),S(n,t,null),s=!0},p(e,t){const s={}
8&t[0]&&(s.items=e[3]),48&t[0]|320&t[1]&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||($(n.$$.fragment,e),s=!0)},o(e){v(n.$$.fragment,e),s=!1},d(e){e&&b(t),I(n)}}}function vt(e){let t,n
return t=new rt({props:{groupCombatItems:e[4],hideNonPlayerGuildLogMessages:e[5],logEntry:e[37]}}),{c(){T(t.$$.fragment)},m(e,s){S(t,e,s),n=!0},p(e,n){const s={}
16&n[0]&&(s.groupCombatItems=e[4]),32&n[0]&&(s.hideNonPlayerGuildLogMessages=e[5]),64&n[1]&&(s.logEntry=e[37]),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function bt(e){let t,n=[],s=new Map,c=l(e[7])
const a=e=>e[36]
for(let t=0;t<c.length;t+=1){let l=ft(e,c,t),o=a(l)
s.set(o,n[t]=kt(o,l))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c()
t=D()},m(e,s){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,s)
r(e,t,s)},p(e,o){128&o[0]&&(c=l(e[7]),n=f(n,o,a,1,e,c,s,t.parentNode,ce,kt,t,ft))},i:Z,o:Z,d(e){e&&b(t)
for(let t=0;t<n.length;t+=1)n[t].d(e)}}}function kt(e,t){let n,s,l,a=t[34]+""
return{key:e,first:null,c(){n=N(a),s=w(),l=c("br"),this.first=n},m(e,t){r(e,n,t),r(e,s,t),r(e,l,t)},p(e,s){t=e,128&s[0]&&a!==(a=t[34]+"")&&R(n,a)},d(e){e&&(b(n),b(s),b(l))}}}function yt(e){let t,n,s,l,a,o,i,d,h,m,f,g,p,k,y
function x(t){e[15](t)}function _(t){e[16](t)}let j={}
void 0!==e[2]&&(j.checks=e[2]),void 0!==e[1]&&(j.searchValue=e[1]),n=new Pe({props:j}),C.push((()=>ne(n,"checks",x))),C.push((()=>ne(n,"searchValue",_))),n.$on("cbChange",e[9]),n.$on("clearSearch",e[13]),n.$on("oldGuildLog",e[12]),n.$on("refresh",e[14]),n.$on("selectAll",e[10]),n.$on("selectNone",e[11])
let L=e[5]&&gt(),G={ctx:e,current:null,token:null,hasCatch:!0,pending:bt,then:$t,catch:pt,error:38,blocks:[,,,]}
return ie(k=e[6],G),{c(){t=c("div"),T(n.$$.fragment),a=w(),o=c("div"),i=c("div"),i.textContent=" ",d=w(),h=c("div"),h.textContent="Date",m=w(),f=c("div"),g=N("Message\n        "),L&&L.c(),p=w(),G.block.c(),M(i,"class","innerColumnHeader svelte-1u02a2w"),M(h,"class","innerColumnHeader svelte-1u02a2w"),M(f,"class","innerColumnHeader svelte-1u02a2w"),M(o,"class","row-container svelte-1u02a2w"),M(t,"class","content svelte-1u02a2w")},m(e,s){r(e,t,s),S(n,t,null),u(t,a),u(t,o),u(o,i),u(o,d),u(o,h),u(o,m),u(o,f),u(f,g),L&&L.m(f,null),u(t,p),G.block.m(t,G.anchor=null),G.mount=()=>t,G.anchor=null,y=!0},p(t,c){e=t
const a={}
!s&&4&c[0]&&(s=!0,a.checks=e[2],se((()=>s=!1))),!l&&2&c[0]&&(l=!0,a.searchValue=e[1],se((()=>l=!1))),n.$set(a),e[5]?L||(L=gt(),L.c(),L.m(f,null)):L&&(L.d(1),L=null),G.ctx=e,64&c[0]&&k!==(k=e[6])&&ie(k,G)||re(G,e,c)},i(e){y||($(n.$$.fragment,e),$(G.block),y=!0)},o(e){v(n.$$.fragment,e)
for(let e=0;e<3;e+=1){const t=G.blocks[e]
v(t)}y=!1},d(e){e&&b(t),I(n),L&&L.d(),G.block.d(),G.token=null,G=null}}}function wt(e){let t
return{c(){t=N("Guild Log")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function xt(e){let t,n
return t=new me({props:{visible:e[0],$$slots:{title:[wt],default:[yt]},$$scope:{ctx:e}}}),t.$on("close",e[8]),{c(){T(t.$$.fragment)},m(e,s){S(t,e,s),n=!0},p(e,n){const s={}
1&n[0]&&(s.visible=e[0]),254&n[0]|256&n[1]&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function _t(e,t,n){let{visible:s=!0}=t,l=Array(11).fill(!0),c=0,a=[],o=null,i=null,r=null,u=null,d=[],h=null,m=[],f=null,g=""
function p(e){J("Guild Log",e)}const $=(e,t)=>({...e,index:t}),v=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,((t,n)=>e.attachments[n].data.name)),b=e=>({...e,fshType:mt(e.msg.text),new:o&&e.time>u,old:o&&(f-e.time)/60>20&&e.time<=u,searchable:v(e).toLowerCase()}),k=(e,t)=>t.time-e.time
function y(){n(3,a=d.filter((({fshType:e})=>l[e])).filter((({searchable:e})=>""===g||e.includes(g.toLowerCase()))).map($)),a.length||n(3,a=[{index:0,msg:{text:""}}])}function w(e){n(7,m=m.concat(e))}function x(e){e?w(e):(c+=1,w(`chunk ${c}`))}async function _(){n(7,m=["Loading..."]),d=[],n(3,a=[]),f=(new Date).setUTCSeconds(0,0)/1e3,u=ae("lastModalGuildLogCheck")??f,oe("lastModalGuildLogCheck",f),o=ae("enableLogColoring"),n(4,i=ae("groupCombatItems")),n(5,r=ae("hideNonPlayerGuildLogMessages")),c=0,he("guildLog-progress",x)
const e=await G(Ce)
e&&(d=e.toSorted(k).map(b),y())}function j(){n(6,h=_())}return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},e.$$.update=()=>{1&e.$$.dirty[0]&&s&&j(),2&e.$$.dirty[0]&&y()},[s,g,l,a,i,r,h,m,function(){p("close"),n(0,s=!1)},function(){p("cbChange"),y()},function(){p("selectAll"),y()},function(){p("selectNone"),y()},function(){p("oldGuildLog"),U(le)},function(){p("clearSearch"),n(1,g="")},j,function(e){l=e,n(2,l)},function(e){g=e,n(1,g)}]}var jt=class extends t{constructor(e){super(),n(this,e,_t,xt,s,{visible:0},null,[-1,-1])}}
const Lt={visible:!0}
let Ct=0
function Nt(){Ct=e(Lt,Ct,jt)}export{Nt as default}
//# sourceMappingURL=guildLog-DOLN2ybe.js.map
