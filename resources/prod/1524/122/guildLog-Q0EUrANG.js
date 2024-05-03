import{i as e}from"./instantiate-upFtXRx7.js"
import{S as t,L as n,M as s,N as l,O as c,b3 as o,dc as a,R as i,T as r,U as u,dd as d,X as m,bd as h,Z as f,de as g,be as p,bc as $,bf as v,a0 as b,d9 as k,cb as y,P as x,cd as w,ce as _,cf as L,b8 as C,ch as j,a3 as N,$ as q,bh as G,Q as T,W as M,bi as I,bj as P,a1 as H,bg as S,aO as B,aQ as A,cc as E,b4 as R,a4 as D,am as O,aJ as U,bT as Q,ap as F,at as J,au as Z,_ as z,br as K,s as V,b6 as W,aN as X,b7 as Y,c as ee,db as te,ci as ne,cj as se,df as le,a5 as ce,ai as oe,ae}from"./calfSystem-C4gAE-9q.js"
import{h as ie,u as re}from"./await_block-DmJVVCA7.js"
import{g as ue}from"./guild-CfTVed6c.js"
import{p as de,a as me}from"./pubsub-CZcT2LWD.js"
import{M as he}from"./ModalTitled-DQuNR7tw.js"
import{L as fe}from"./LinkButton-Ccne2AMZ.js"
import{L as ge}from"./LinkButtonBracketed-jMU7wdWi.js"
import{f as pe}from"./formatUtcTimestamp-t57AV4Fr.js"
import{n as $e}from"./numberIsNaN-CGkd1jiA.js"
import{o as ve}from"./openQuickBuffById-BD5VkF0F.js"
import{g as be}from"./getCombat-DwS4PzoC.js"
import"./Modal-seireTkf.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./fshOpen-AuKioUPF.js"
import"./now-Cx4PsKjI.js"
function ke(e,t,n){const s=e.slice()
return s[23]=t[n],s}const ye=e=>({item:16&e}),xe=e=>({item:e[23].data})
function we(e,t){let n,s,l
const o=t[15].default,i=y(o,t,t[14],xe),d=i||function(e){let t
return{c(){t=N("Missing template")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}()
return{key:e,first:null,c(){n=c("svelte-virtual-list-row"),d&&d.c(),s=x(),a(n,"class","svelte-1tqh76q"),this.first=n},m(e,t){r(e,n,t),d&&d.m(n,null),u(n,s),l=!0},p(e,n){t=e,i&&i.p&&(!l||16400&n)&&w(i,o,t,t[14],l?L(o,t[14],n,ye):_(t[14]),xe)},i(e){l||($(d,e),l=!0)},o(e){v(d,e),l=!1},d(e){e&&b(n),d&&d.d(e)}}}function _e(e){let t,n,s,k,y,x,w=[],_=new Map,L=l(e[4])
const C=e=>e[23].index
for(let t=0;t<L.length;t+=1){let n=ke(e,L,t),s=C(n)
_.set(s,w[t]=we(s,n))}return{c(){t=c("svelte-virtual-list-viewport"),n=c("svelte-virtual-list-contents")
for(let e=0;e<w.length;e+=1)w[e].c()
o(n,"padding-top",e[5]+"px"),o(n,"padding-bottom",e[6]+"px"),a(n,"class","svelte-1tqh76q"),o(t,"height",e[0]),a(t,"class","svelte-1tqh76q"),i((()=>e[18].call(t)))},m(l,c){r(l,t,c),u(t,n)
for(let e=0;e<w.length;e+=1)w[e]&&w[e].m(n,null)
e[16](n),e[17](t),s=d(t,e[18].bind(t)),k=!0,y||(x=m(t,"scroll",e[7]),y=!0)},p(e,[s]){16400&s&&(L=l(e[4]),h(),w=f(w,s,C,1,e,L,_,n,g,we,null,ke),p()),(!k||32&s)&&o(n,"padding-top",e[5]+"px"),(!k||64&s)&&o(n,"padding-bottom",e[6]+"px"),(!k||1&s)&&o(t,"height",e[0])},i(e){if(!k){for(let e=0;e<L.length;e+=1)$(w[e])
k=!0}},o(e){for(let e=0;e<w.length;e+=1)v(w[e])
k=!1},d(n){n&&b(t)
for(let e=0;e<w.length;e+=1)w[e].d()
e[16](null),e[17](null),s(),y=!1,x()}}}function Le(e,t,n){let s,l,c,o,a,i,{$$slots:r={},$$scope:u}=t,{items:d}=t,{height:m="100%"}=t,{itemHeight:h}=t,{start:f=0}=t,{end:g=0}=t,p=[],$=0,v=0,b=0
async function y(e,t){const{scrollTop:n}=l
t={left:0,top:n+(e-f)*(h||i),behavior:"smooth",...t},l.scrollTo(t)}return k((()=>{s=c.getElementsByTagName("svelte-virtual-list-row"),n(13,a=!0)})),e.$$set=e=>{"items"in e&&n(10,d=e.items),"height"in e&&n(0,m=e.height),"itemHeight"in e&&n(11,h=e.itemHeight),"start"in e&&n(8,f=e.start),"end"in e&&n(9,g=e.end),"$$scope"in e&&n(14,u=e.$$scope)},e.$$.update=()=>{1792&e.$$.dirty&&n(4,o=d.slice(f,g).map(((e,t)=>({index:t+f,data:e})))),11266&e.$$.dirty&&a&&async function(e,t,c){e.length<f&&await y(e.length-1,{behavior:"auto"})
const{scrollTop:o}=l
await C()
let a=v-o,r=f
for(;a<t&&r<e.length;){let e=s[r-f]
e||(n(9,g=r+1),await C(),e=s[r-f]),a+=p[r]=c||e.offsetHeight,r+=1}n(9,g=r)
const u=e.length-g
i=(v+a)/g,n(6,b=u*i),p.length=e.length}(d,$,h)},[m,$,l,c,o,v,b,async function(){const{scrollTop:e}=l
for(let e=0;e<s.length;e+=1)p[f+e]=h||s[e].offsetHeight
let t=0,c=0
for(;t<d.length;){const s=p[t]||i
if(c+s>e){n(8,f=t),n(5,v=c)
break}c+=s,t+=1}for(;t<d.length&&(c+=p[t]||i,t+=1,!(c>e+$)););n(9,g=t)
const o=d.length-g
for(i=c/g;t<d.length;)p[t++]=i
n(6,b=o*i)},f,g,d,h,y,a,u,r,function(e){j[e?"unshift":"push"]((()=>{c=e,n(3,c)}))},function(e){j[e?"unshift":"push"]((()=>{l=e,n(2,l)}))},function(){$=this.offsetHeight,n(1,$)}]}class Ce extends t{constructor(e){super(),n(this,e,Le,_e,s,{items:10,height:0,itemHeight:11,start:8,end:9,scrollToIndex:12})}get scrollToIndex(){return this.$$.ctx[12]}}async function je(e=-1,t=1,n=[]){const s=await function(e,t,n){return ue({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!s?.s)return void de("guildLog-progress","Server Error.")
de("guildLog-progress")
const l=n.concat(s.r.logs)
return 1e3!==s.r.logs.length?l:je(s.r.logs[0].id,0,l)}function Ne(e){let t
return{c(){t=N("Old Guild Log")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function qe(e){let t
return{c(){t=N("Select All")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ge(e){let t
return{c(){t=N("Select None")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Te(e){let t
return{c(){t=N("Refresh")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Me(e){let t,n,s,l,a,i,d,h,f,g,p,k,y,w,_,L,C,j,q,S,B,A,E,R,D,O,U,Q,F,J,Z,z,K,V,W,X,Y,ee,te,ne,se,le,ce,oe,ae,ie,re,ue,de,me,he,pe,$e,ve,be,ke,ye,xe,we,_e,Le,Ce,je,Me,Ie,Pe,He,Se,Be,Ae,Ee,Re,De,Oe,Ue
return Z=new fe({props:{$$slots:{default:[Ne]},$$scope:{ctx:e}}}),Z.$on("click",e[2]),Pe=new ge({props:{$$slots:{default:[qe]},$$scope:{ctx:e}}}),Pe.$on("click",e[3]),Be=new ge({props:{$$slots:{default:[Ge]},$$scope:{ctx:e}}}),Be.$on("click",e[4]),Re=new ge({props:{$$slots:{default:[Te]},$$scope:{ctx:e}}}),Re.$on("click",e[5]),{c(){t=c("div"),n=c("div"),s=c("div"),s.innerHTML="<span>Filters:</span>",l=x(),a=c("div"),i=c("label"),d=N("Potions:\n        "),h=c("input"),f=x(),g=c("div"),p=c("label"),k=N("Store/Recalls:\n        "),y=c("input"),w=x(),_=c("div"),L=c("label"),C=N("Relics:\n        "),j=c("input"),q=x(),S=c("div"),B=c("label"),A=N("Mercenaries:\n        "),E=c("input"),R=x(),D=c("div"),O=c("label"),U=N("Group Combats:\n        "),Q=c("input"),F=x(),J=c("div"),z=c("div"),G(Z.$$.fragment),K=x(),V=c("div"),W=c("label"),X=N("Donations:\n        "),Y=c("input"),ee=x(),te=c("div"),ne=c("label"),se=N("Rankings:\n        "),le=c("input"),ce=x(),oe=c("div"),ae=c("label"),ie=N("GvGs:\n        "),re=c("input"),ue=x(),de=c("div"),me=c("label"),he=N("Tag/UnTags:\n        "),pe=c("input"),$e=x(),ve=c("div"),be=c("label"),ke=N("Titans:\n        "),ye=c("input"),xe=x(),we=c("div"),_e=c("label"),Le=N("Other:\n        "),Ce=c("input"),je=x(),Me=c("div"),Ie=c("div"),G(Pe.$$.fragment),He=x(),Se=c("div"),G(Be.$$.fragment),Ae=x(),Ee=c("div"),G(Re.$$.fragment),T(s,"class","front svelte-1wbxfyn"),T(h,"type","checkbox"),h.__value="1",M(h,h.__value),T(y,"type","checkbox"),y.__value="2",M(y,y.__value),T(j,"type","checkbox"),j.__value="4",M(j,j.__value),T(E,"type","checkbox"),E.__value="5",M(E,E.__value),T(Q,"type","checkbox"),Q.__value="6",M(Q,Q.__value),o(z,"display","contents"),o(z,"--button-color","blue"),T(Y,"type","checkbox"),Y.__value="7",M(Y,Y.__value),T(le,"type","checkbox"),le.__value="8",M(le,le.__value),T(re,"type","checkbox"),re.__value="9",M(re,re.__value),T(pe,"type","checkbox"),pe.__value="3",M(pe,pe.__value),T(ye,"type","checkbox"),ye.__value="10",M(ye,ye.__value),T(Ce,"type","checkbox"),Ce.__value="0",M(Ce,Ce.__value),T(n,"class","filters svelte-1wbxfyn"),T(Me,"class","buttons svelte-1wbxfyn"),T(t,"class","filter-header svelte-1wbxfyn")},m(c,o){r(c,t,o),u(t,n),u(n,s),u(n,l),u(n,a),u(a,i),u(i,d),u(i,h),h.checked=e[0][1],u(n,f),u(n,g),u(g,p),u(p,k),u(p,y),y.checked=e[0][2],u(n,w),u(n,_),u(_,L),u(L,C),u(L,j),j.checked=e[0][4],u(n,q),u(n,S),u(S,B),u(B,A),u(B,E),E.checked=e[0][5],u(n,R),u(n,D),u(D,O),u(O,U),u(O,Q),Q.checked=e[0][6],u(n,F),u(n,J),u(J,z),I(Z,z,null),u(n,K),u(n,V),u(V,W),u(W,X),u(W,Y),Y.checked=e[0][7],u(n,ee),u(n,te),u(te,ne),u(ne,se),u(ne,le),le.checked=e[0][8],u(n,ce),u(n,oe),u(oe,ae),u(ae,ie),u(ae,re),re.checked=e[0][9],u(n,ue),u(n,de),u(de,me),u(me,he),u(me,pe),pe.checked=e[0][3],u(n,$e),u(n,ve),u(ve,be),u(be,ke),u(be,ye),ye.checked=e[0][10],u(n,xe),u(n,we),u(we,_e),u(_e,Le),u(_e,Ce),Ce.checked=e[0][0],u(t,je),u(t,Me),u(Me,Ie),I(Pe,Ie,null),u(Me,He),u(Me,Se),I(Be,Se,null),u(Me,Ae),u(Me,Ee),I(Re,Ee,null),De=!0,Oe||(Ue=[m(h,"change",e[6]),m(h,"change",e[1]),m(y,"change",e[7]),m(y,"change",e[1]),m(j,"change",e[8]),m(j,"change",e[1]),m(E,"change",e[9]),m(E,"change",e[1]),m(Q,"change",e[10]),m(Q,"change",e[1]),m(Y,"change",e[11]),m(Y,"change",e[1]),m(le,"change",e[12]),m(le,"change",e[1]),m(re,"change",e[13]),m(re,"change",e[1]),m(pe,"change",e[14]),m(pe,"change",e[1]),m(ye,"change",e[15]),m(ye,"change",e[1]),m(Ce,"change",e[16]),m(Ce,"change",e[1])],Oe=!0)},p(e,[t]){1&t&&(h.checked=e[0][1]),1&t&&(y.checked=e[0][2]),1&t&&(j.checked=e[0][4]),1&t&&(E.checked=e[0][5]),1&t&&(Q.checked=e[0][6])
const n={}
2097152&t&&(n.$$scope={dirty:t,ctx:e}),Z.$set(n),1&t&&(Y.checked=e[0][7]),1&t&&(le.checked=e[0][8]),1&t&&(re.checked=e[0][9]),1&t&&(pe.checked=e[0][3]),1&t&&(ye.checked=e[0][10]),1&t&&(Ce.checked=e[0][0])
const s={}
2097152&t&&(s.$$scope={dirty:t,ctx:e}),Pe.$set(s)
const l={}
2097152&t&&(l.$$scope={dirty:t,ctx:e}),Be.$set(l)
const c={}
2097152&t&&(c.$$scope={dirty:t,ctx:e}),Re.$set(c)},i(e){De||($(Z.$$.fragment,e),$(Pe.$$.fragment,e),$(Be.$$.fragment,e),$(Re.$$.fragment,e),De=!0)},o(e){v(Z.$$.fragment,e),v(Pe.$$.fragment,e),v(Be.$$.fragment,e),v(Re.$$.fragment,e),De=!1},d(e){e&&b(t),P(Z),P(Pe),P(Be),P(Re),Oe=!1,H(Ue)}}}function Ie(e,t,n){const s=S()
let{checks:l=Array(11).fill(!0)}=t
function c(){A("fsh_LogChecks",l)}function o(e){n(0,l=l.map((()=>e))),c()}return async function(){n(0,l=await B("fsh_LogChecks")??Array(11).fill(!0))}(),e.$$set=e=>{"checks"in e&&n(0,l=e.checks)},[l,function(){c(),s("cbChange")},function(){s("oldGuildLog")},function(){o(!0),s("selectAll")},function(){o(!1),s("selectNone")},function(){s("refresh")},function(){l[1]=this.checked,n(0,l)},function(){l[2]=this.checked,n(0,l)},function(){l[4]=this.checked,n(0,l)},function(){l[5]=this.checked,n(0,l)},function(){l[6]=this.checked,n(0,l)},function(){l[7]=this.checked,n(0,l)},function(){l[8]=this.checked,n(0,l)},function(){l[9]=this.checked,n(0,l)},function(){l[3]=this.checked,n(0,l)},function(){l[10]=this.checked,n(0,l)},function(){l[0]=this.checked,n(0,l)}]}class Pe extends t{constructor(e){super(),n(this,e,Ie,Me,s,{checks:0})}}function He(e,t,n){const s=e.slice()
return s[17]=t[n].data,s}function Se(e,t,n){const s=e.slice()
return s[17]=t[n].data,s}function Be(e,t,n){const s=e.slice()
return s[22]=t[n],s}function Ae(e){let t
return{c(){t=c("i"),T(t,"class","fas fa-envelope"),T(t,"aria-hidden","true")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ee(e){let t,n=pe(e[2].time)+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){4&s&&n!==(n=pe(e[2].time)+"")&&D(t,n)},d(e){e&&b(t)}}}function Re(e){let t,n=e[22]+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){4&s&&n!==(n=e[22]+"")&&D(t,n)},d(e){e&&b(t)}}}function De(e){let t,n,s=0===e[2].msg.attachments[e[22]].type&&Oe(e),l=1===e[2].msg.attachments[e[22]].type&&Ue(e)
return{c(){s&&s.c(),t=x(),l&&l.c(),n=O()},m(e,c){s&&s.m(e,c),r(e,t,c),l&&l.m(e,c),r(e,n,c)},p(e,c){0===e[2].msg.attachments[e[22]].type?s?s.p(e,c):(s=Oe(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),1===e[2].msg.attachments[e[22]].type?l?l.p(e,c):(l=Ue(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(e){e&&(b(t),b(n)),s&&s.d(e),l&&l.d(e)}}}function Oe(e){let t,n,s,l=e[2].msg.attachments[e[22]].data.name+""
return{c(){t=c("a"),n=N(l),T(t,"href",s=""+(K+e[2].msg.attachments[e[22]].data.id)),T(t,"class","svelte-164vlq2")},m(e,s){r(e,t,s),u(t,n)},p(e,c){4&c&&l!==(l=e[2].msg.attachments[e[22]].data.name+"")&&D(n,l),4&c&&s!==(s=""+(K+e[2].msg.attachments[e[22]].data.id))&&T(t,"href",s)},d(e){e&&b(t)}}}function Ue(e){let t,n,s,l,o,a,i,d,m=e[2].msg.attachments[e[22]].data.name+""
return{c(){t=N("[\n          "),n=c("a"),s=c("img"),a=N(m),d=N("\n          ]"),W(s.src,l=X+"guilds/"+e[2].msg.attachments[e[22]].data.id+"_mini.png")||T(s,"src",l),T(s,"alt",o=e[2].msg.attachments[e[22]].data.name),T(s,"class","svelte-164vlq2"),T(n,"href",i=""+(Y+e[2].msg.attachments[e[22]].data.id)),T(n,"class","svelte-164vlq2")},m(e,l){r(e,t,l),r(e,n,l),u(n,s),u(n,a),r(e,d,l)},p(e,t){4&t&&!W(s.src,l=X+"guilds/"+e[2].msg.attachments[e[22]].data.id+"_mini.png")&&T(s,"src",l),4&t&&o!==(o=e[2].msg.attachments[e[22]].data.name)&&T(s,"alt",o),4&t&&m!==(m=e[2].msg.attachments[e[22]].data.name+"")&&D(a,m),4&t&&i!==(i=""+(Y+e[2].msg.attachments[e[22]].data.id))&&T(n,"href",i)},d(e){e&&(b(t),b(n),b(d))}}}function Qe(e){let t,n
function s(e,n){return 4&n&&(t=null),null==t&&(t=!(1!==e[22].length||$e(Number(e[22])))),t?De:Re}let l=s(e,-1),c=l(e)
return{c(){c.c(),n=O()},m(e,t){c.m(e,t),r(e,n,t)},p(e,t){l===(l=s(e,t))&&c?c.p(e,t):(c.d(1),c=l(e),c&&(c.c(),c.m(n.parentNode,n)))},d(e){e&&b(n),c.d(e)}}}function Fe(e){let t,n,s,c,o=17===e[2].type&&e[0]&&e[2].msg.text.includes("victorious"),a=l(e[2].msg.attachments.filter(ct)),i=[]
for(let t=0;t<a.length;t+=1)i[t]=Ve(Se(e,a,t))
const u=e=>v(i[e],1,1,(()=>{i[e]=null}))
let d=l(e[2].msg.attachments.filter(ot)),m=[]
for(let t=0;t<d.length;t+=1)m[t]=Xe(He(e,d,t))
const f=e=>v(m[e],1,1,(()=>{m[e]=null}))
let g=o&&Ye(e)
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=x()
for(let e=0;e<m.length;e+=1)m[e].c()
n=x(),g&&g.c(),s=O()},m(e,l){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,l)
r(e,t,l)
for(let t=0;t<m.length;t+=1)m[t]&&m[t].m(e,l)
r(e,n,l),g&&g.m(e,l),r(e,s,l),c=!0},p(e,c){if(932&c){let n
for(a=l(e[2].msg.attachments.filter(ct)),n=0;n<a.length;n+=1){const s=Se(e,a,n)
i[n]?(i[n].p(s,c),$(i[n],1)):(i[n]=Ve(s),i[n].c(),$(i[n],1),i[n].m(t.parentNode,t))}for(h(),n=a.length;n<i.length;n+=1)u(n)
p()}if(68&c){let t
for(d=l(e[2].msg.attachments.filter(ot)),t=0;t<d.length;t+=1){const s=He(e,d,t)
m[t]?(m[t].p(s,c),$(m[t],1)):(m[t]=Xe(s),m[t].c(),$(m[t],1),m[t].m(n.parentNode,n))}for(h(),t=d.length;t<m.length;t+=1)f(t)
p()}5&c&&(o=17===e[2].type&&e[0]&&e[2].msg.text.includes("victorious")),o?g?g.p(e,c):(g=Ye(e),g.c(),g.m(s.parentNode,s)):g&&(g.d(1),g=null)},i(e){if(!c){for(let e=0;e<a.length;e+=1)$(i[e])
for(let e=0;e<d.length;e+=1)$(m[e])
c=!0}},o(e){i=i.filter(Boolean)
for(let e=0;e<i.length;e+=1)v(i[e])
m=m.filter(Boolean)
for(let e=0;e<m.length;e+=1)v(m[e])
c=!1},d(e){e&&(b(t),b(n),b(s)),R(i,e),R(m,e),g&&g.d(e)}}}function Je(e){let t
return{c(){t=N("Reply")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ze(e){let t
return{c(){t=N("Buff")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function ze(e){let t
return{c(){t=N("Send")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ke(e){let t
return{c(){t=N("Trade")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ve(e){let t,n,s,l,o,a,i,d,m,h,f
return s=new fe({props:{$$slots:{default:[Je]},$$scope:{ctx:e}}}),s.$on("click",(function(){return e[10](e[17])})),o=new fe({props:{$$slots:{default:[Ze]},$$scope:{ctx:e}}}),o.$on("click",(function(){return e[11](e[17])})),i=new fe({props:{$$slots:{default:[ze]},$$scope:{ctx:e}}}),i.$on("click",(function(){return e[12](e[17])})),m=new fe({props:{$$slots:{default:[Ke]},$$scope:{ctx:e}}}),m.$on("click",(function(){return e[13](e[17])})),{c(){t=c("span"),n=N("[\n          "),G(s.$$.fragment),l=N("\n          |\n          "),G(o.$$.fragment),a=N("\n          |\n          "),G(i.$$.fragment),d=N("\n          |\n          "),G(m.$$.fragment),h=N("\n          ]"),T(t,"class","action-buttons svelte-164vlq2")},m(e,c){r(e,t,c),u(t,n),I(s,t,null),u(t,l),I(o,t,null),u(t,a),I(i,t,null),u(t,d),I(m,t,null),u(t,h),f=!0},p(t,n){e=t
const l={}
33554432&n&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)
const c={}
33554432&n&&(c.$$scope={dirty:n,ctx:e}),o.$set(c)
const a={}
33554432&n&&(a.$$scope={dirty:n,ctx:e}),i.$set(a)
const r={}
33554432&n&&(r.$$scope={dirty:n,ctx:e}),m.$set(r)},i(e){f||($(s.$$.fragment,e),$(o.$$.fragment,e),$(i.$$.fragment,e),$(m.$$.fragment,e),f=!0)},o(e){v(s.$$.fragment,e),v(o.$$.fragment,e),v(i.$$.fragment,e),v(m.$$.fragment,e),f=!1},d(e){e&&b(t),P(s),P(o),P(i),P(m)}}}function We(e){let t
return{c(){t=N("View Combat")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Xe(e){let t,n,s,l,o
return s=new fe({props:{$$slots:{default:[We]},$$scope:{ctx:e}}}),s.$on("click",(function(){return e[14](e[17])})),{c(){t=c("span"),n=N("[\n          "),G(s.$$.fragment),l=N("\n          ]"),T(t,"class","action-buttons svelte-164vlq2")},m(e,c){r(e,t,c),u(t,n),I(s,t,null),u(t,l),o=!0},p(t,n){e=t
const l={}
33554432&n&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)},i(e){o||($(s.$$.fragment,e),o=!0)},o(e){v(s.$$.fragment,e),o=!1},d(e){e&&b(t),P(s)}}}function Ye(e){let t,n,s={ctx:e,current:null,token:null,hasCatch:!1,pending:st,then:tt,catch:et,value:16}
return ie(n=be(e[2].time,e[2].msg.attachments[0].data),s),{c(){t=O(),s.block.c()},m(e,n){r(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t},p(t,l){e=t,s.ctx=e,4&l&&n!==(n=be(e[2].time,e[2].msg.attachments[0].data))&&ie(n,s)||re(s,e,l)},d(e){e&&b(t),s.block.d(e),s.token=null,s=null}}}function et(e){return{c:z,m:z,p:z,d:z}}function tt(e){let t,n=e[16]?.r?.combat?.items?.[0]?.n&&nt(e)
return{c(){n&&n.c(),t=O()},m(e,s){n&&n.m(e,s),r(e,t,s)},p(e,s){e[16]?.r?.combat?.items?.[0]?.n?n?n.p(e,s):(n=nt(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&b(t),n&&n.d(e)}}}function nt(e){let t,n,s,l,o,a,i,d,m=e[16].r.combat.attacker.group.players[0].name+"",h=e[16]?.r?.combat?.items?.[0]?.n+""
return{c(){t=c("div"),n=c("a"),s=N(m),o=N("'s\n              group looted the item\n              '"),a=c("span"),i=N(h),d=N("'"),T(n,"href",l=""+(K+e[16].r.combat.attacker.group.players[0].id)),T(n,"class","svelte-164vlq2"),T(a,"class","fshGreen")},m(e,l){r(e,t,l),u(t,n),u(n,s),u(t,o),u(t,a),u(a,i),u(t,d)},p(e,t){4&t&&m!==(m=e[16].r.combat.attacker.group.players[0].name+"")&&D(s,m),4&t&&l!==(l=""+(K+e[16].r.combat.attacker.group.players[0].id))&&T(n,"href",l),4&t&&h!==(h=e[16]?.r?.combat?.items?.[0]?.n+"")&&D(i,h)},d(e){e&&b(t)}}}function st(e){return{c:z,m:z,p:z,d:z}}function lt(e){let t,n,s,o,a,i,d,m,f=e[2].time&&Ae(),g=e[2].time&&Ee(e),k=l(e[2].msg.text.split(/<link=a(\d)><\/link>/).filter(e[3])),y=[]
for(let t=0;t<k.length;t+=1)y[t]=Qe(Be(e,k,t))
let w=e[2].msg?.attachments?.length&&Fe(e)
return{c(){t=c("div"),n=c("div"),f&&f.c(),s=x(),o=c("div"),g&&g.c(),a=x(),i=c("div")
for(let e=0;e<y.length;e+=1)y[e].c()
d=x(),w&&w.c(),T(n,"class","svelte-164vlq2"),E(n,"old",e[2].old),E(n,"new",e[2].new),T(o,"class","svelte-164vlq2"),E(o,"old",e[2].old),E(o,"new",e[2].new),T(i,"class","svelte-164vlq2"),E(i,"old",e[2].old),E(i,"new",e[2].new),T(t,"class","row-container svelte-164vlq2"),E(t,"not-self",e[1]&&e[4](e[2])),E(t,"separator",e[2].index)},m(e,l){r(e,t,l),u(t,n),f&&f.m(n,null),u(t,s),u(t,o),g&&g.m(o,null),u(t,a),u(t,i)
for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(i,null)
u(i,d),w&&w.m(i,null),m=!0},p(e,[s]){if(e[2].time?f||(f=Ae(),f.c(),f.m(n,null)):f&&(f.d(1),f=null),(!m||4&s)&&E(n,"old",e[2].old),(!m||4&s)&&E(n,"new",e[2].new),e[2].time?g?g.p(e,s):(g=Ee(e),g.c(),g.m(o,null)):g&&(g.d(1),g=null),(!m||4&s)&&E(o,"old",e[2].old),(!m||4&s)&&E(o,"new",e[2].new),12&s){let t
for(k=l(e[2].msg.text.split(/<link=a(\d)><\/link>/).filter(e[3])),t=0;t<k.length;t+=1){const n=Be(e,k,t)
y[t]?y[t].p(n,s):(y[t]=Qe(n),y[t].c(),y[t].m(i,d))}for(;t<y.length;t+=1)y[t].d(1)
y.length=k.length}e[2].msg?.attachments?.length?w?(w.p(e,s),4&s&&$(w,1)):(w=Fe(e),w.c(),$(w,1),w.m(i,null)):w&&(h(),v(w,1,1,(()=>{w=null})),p()),(!m||4&s)&&E(i,"old",e[2].old),(!m||4&s)&&E(i,"new",e[2].new),(!m||22&s)&&E(t,"not-self",e[1]&&e[4](e[2])),(!m||4&s)&&E(t,"separator",e[2].index)},i(e){m||($(w),m=!0)},o(e){v(w),m=!1},d(e){e&&b(t),f&&f.d(),g&&g.d(),R(y,e),w&&w.d()}}}const ct=({type:e})=>0===e,ot=({type:e})=>11===e
function at(e,t,n){let{groupCombatItems:s=null}=t,{hideNonPlayerGuildLogMessages:l=null}=t,{logEntry:c=null}=t
function o(e){V("Guild Log",e)}function a(e){o("buff"),ve(e.id)}function i(e){o("combat"),Q(`${F}combat&subcmd=view&combat_id=${e}`)}function r(e){o("reply"),window.openQuickMsgDialog(e.name)}function u(e){o("send"),Q(`${J}${e.name}`)}function d(e){o("trade"),Q(`${Z}${e.name}`)}return e.$$set=e=>{"groupCombatItems"in e&&n(0,s=e.groupCombatItems),"hideNonPlayerGuildLogMessages"in e&&n(1,l=e.hideNonPlayerGuildLogMessages),"logEntry"in e&&n(2,c=e.logEntry)},[s,l,c,e=>e,function(e){const t=e.msg.attachments?.filter((e=>0===e.type))
return t?.length&&!t.filter((({data:{id:e}})=>e===U())).length},a,i,r,u,d,e=>r(e),e=>a(e),e=>u(e),e=>d(e),e=>i(e)]}class it extends t{constructor(e){super(),n(this,e,at,lt,s,{groupCombatItems:0,hideNonPlayerGuildLogMessages:1,logEntry:2})}}const rt=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function ut(e,t){return te(t)?e.includes(t):t.test(e)}function dt(e,t){return t.some(ee(ut,e))}function mt(e){const t=rt.findIndex(ee(dt,e))
return-1===t?0:t}function ht(e,t,n){const s=e.slice()
return s[30]=t[n],s[32]=n,s}function ft(e){let t
return{c(){t=c("span"),t.textContent="(Guild Log messages not involving self are dimmed!)",T(t,"class","white svelte-1nxqix0")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function gt(e){let t,n=e[34]+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){32&s[0]&&n!==(n=e[34]+"")&&D(t,n)},i:z,o:z,d(e){e&&b(t)}}}function pt(e){let t,n,s
return n=new Ce({props:{items:e[2],$$slots:{default:[$t,({item:e})=>({33:e}),({item:e})=>[0,e?4:0]]},$$scope:{ctx:e}}}),{c(){t=c("div"),G(n.$$.fragment),T(t,"class","vs svelte-1nxqix0")},m(e,l){r(e,t,l),I(n,t,null),s=!0},p(e,t){const s={}
4&t[0]&&(s.items=e[2]),24&t[0]|20&t[1]&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||($(n.$$.fragment,e),s=!0)},o(e){v(n.$$.fragment,e),s=!1},d(e){e&&b(t),P(n)}}}function $t(e){let t,n
return t=new it({props:{groupCombatItems:e[3],hideNonPlayerGuildLogMessages:e[4],logEntry:e[33]}}),{c(){G(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},p(e,n){const s={}
8&n[0]&&(s.groupCombatItems=e[3]),16&n[0]&&(s.hideNonPlayerGuildLogMessages=e[4]),4&n[1]&&(s.logEntry=e[33]),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function vt(e){let t,n=[],s=new Map,c=l(e[6])
const o=e=>e[32]
for(let t=0;t<c.length;t+=1){let l=ht(e,c,t),a=o(l)
s.set(a,n[t]=bt(a,l))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c()
t=O()},m(e,s){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,s)
r(e,t,s)},p(e,a){64&a[0]&&(c=l(e[6]),n=f(n,a,o,1,e,c,s,t.parentNode,ce,bt,t,ht))},i:z,o:z,d(e){e&&b(t)
for(let t=0;t<n.length;t+=1)n[t].d(e)}}}function bt(e,t){let n,s,l,o=t[30]+""
return{key:e,first:null,c(){n=N(o),s=x(),l=c("br"),this.first=n},m(e,t){r(e,n,t),r(e,s,t),r(e,l,t)},p(e,s){t=e,64&s[0]&&o!==(o=t[30]+"")&&D(n,o)},d(e){e&&(b(n),b(s),b(l))}}}function kt(e){let t,n,s,l,o,a,i,d,m,h,f,g,p,k
function y(t){e[13](t)}let w={}
void 0!==e[1]&&(w.checks=e[1]),n=new Pe({props:w}),j.push((()=>ne(n,"checks",y))),n.$on("cbChange",e[8]),n.$on("oldGuildLog",e[11]),n.$on("refresh",e[12]),n.$on("selectAll",e[9]),n.$on("selectNone",e[10])
let _=e[4]&&ft(),L={ctx:e,current:null,token:null,hasCatch:!0,pending:vt,then:pt,catch:gt,error:34,blocks:[,,,]}
return ie(p=e[5],L),{c(){t=c("div"),G(n.$$.fragment),l=x(),o=c("div"),a=c("div"),a.textContent=" ",i=x(),d=c("div"),d.textContent="Date",m=x(),h=c("div"),f=N("Message\n        "),_&&_.c(),g=x(),L.block.c(),T(a,"class","innerColumnHeader svelte-1nxqix0"),T(d,"class","innerColumnHeader svelte-1nxqix0"),T(h,"class","innerColumnHeader svelte-1nxqix0"),T(o,"class","row-container svelte-1nxqix0"),T(t,"class","content svelte-1nxqix0")},m(e,s){r(e,t,s),I(n,t,null),u(t,l),u(t,o),u(o,a),u(o,i),u(o,d),u(o,m),u(o,h),u(h,f),_&&_.m(h,null),u(t,g),L.block.m(t,L.anchor=null),L.mount=()=>t,L.anchor=null,k=!0},p(t,l){e=t
const c={}
!s&&2&l[0]&&(s=!0,c.checks=e[1],se((()=>s=!1))),n.$set(c),e[4]?_||(_=ft(),_.c(),_.m(h,null)):_&&(_.d(1),_=null),L.ctx=e,32&l[0]&&p!==(p=e[5])&&ie(p,L)||re(L,e,l)},i(e){k||($(n.$$.fragment,e),$(L.block),k=!0)},o(e){v(n.$$.fragment,e)
for(let e=0;e<3;e+=1){const t=L.blocks[e]
v(t)}k=!1},d(e){e&&b(t),P(n),_&&_.d(),L.block.d(),L.token=null,L=null}}}function yt(e){let t
return{c(){t=N("Guild Log")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function xt(e){let t,n
return t=new he({props:{visible:e[0],$$slots:{title:[yt],default:[kt]},$$scope:{ctx:e}}}),t.$on("close",e[7]),{c(){G(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},p(e,n){const s={}
1&n[0]&&(s.visible=e[0]),126&n[0]|16&n[1]&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function wt(e,t,n){let{visible:s=!0}=t,l=Array(11).fill(!0),c=0,o=[],a=null,i=null,r=null,u=null,d=[],m=null,h=[],f=null
function g(e){V("Guild Log",e)}const p=(e,t)=>({...e,index:t}),$=e=>({...e,fshType:mt(e.msg.text),new:a&&e.time>u,old:a&&(f-e.time)/60>20&&e.time<=u}),v=(e,t)=>t.time-e.time
function b(){n(2,o=d.filter((({fshType:e})=>l[e])).map(p)),o.length||n(2,o=[{index:0,msg:{text:""}}])}function k(e){n(6,h=h.concat(e))}function y(e){e?k(e):(c+=1,k(`chunk ${c}`))}async function x(){n(6,h=["Loading..."]),d=[],n(2,o=[]),f=(new Date).setUTCSeconds(0,0)/1e3,u=oe("lastModalGuildLogCheck")??f,ae("lastModalGuildLogCheck",f),a=oe("enableLogColoring"),n(3,i=oe("groupCombatItems")),n(4,r=oe("hideNonPlayerGuildLogMessages")),c=0,me("guildLog-progress",y)
const e=await q(je)
e&&(d=e.toSorted(v).map($),b())}function w(){n(5,m=x())}return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},e.$$.update=()=>{1&e.$$.dirty[0]&&s&&w()},[s,l,o,i,r,m,h,function(){g("close"),n(0,s=!1)},function(){g("cbChange"),b()},function(){g("selectAll"),b()},function(){g("selectNone"),b()},function(){g("oldGuildLog"),Q(le)},w,function(e){l=e,n(1,l)}]}var _t=class extends t{constructor(e){super(),n(this,e,wt,xt,s,{visible:0},null,[-1,-1])}}
const Lt={visible:!0}
let Ct=0
function jt(){Ct=e(Lt,Ct,_t)}export{jt as default}
//# sourceMappingURL=guildLog-Q0EUrANG.js.map
