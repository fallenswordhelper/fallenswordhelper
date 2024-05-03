import{i as e}from"./instantiate-upFtXRx7.js"
import{S as t,L as n,M as s,N as l,O as c,b3 as a,dc as o,R as i,T as r,U as u,dd as d,X as m,bd as h,Z as f,de as g,be as p,bc as $,bf as v,a0 as b,d9 as k,cb as y,P as x,cd as w,ce as _,cf as C,b8 as j,ch as L,a3 as N,$ as q,bh as T,Q as G,W as M,bi as I,bj as P,a1 as H,bg as S,aO as B,aQ as E,cc as A,b4 as R,a4 as D,am as O,aJ as U,bT as Q,ap as F,at as J,au as Z,_ as z,br as K,s as V,b6 as W,aN as X,b7 as Y,c as ee,db as te,ci as ne,cj as se,a5 as le,ai as ce,ae}from"./calfSystem-BpHkrDYD.js"
import{h as oe,u as ie}from"./await_block-CZuRxqtA.js"
import{g as re}from"./guild-BjvxTKLF.js"
import{p as ue,a as de}from"./pubsub-Dm4g1PE2.js"
import{M as me}from"./ModalTitled-BbI98mYw.js"
import{L as he}from"./LinkButtonBracketed-Bg1TUl5Q.js"
import{f as fe}from"./formatUtcTimestamp-t57AV4Fr.js"
import{L as ge}from"./LinkButton-DfzCkW8s.js"
import{n as pe}from"./numberIsNaN-CGkd1jiA.js"
import{o as $e}from"./openQuickBuffById-C4DAUFrz.js"
import{g as ve}from"./getCombat-BH9AV-CH.js"
import"./Modal-D1J9RtCd.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./fshOpen-AuKioUPF.js"
import"./now-Cx4PsKjI.js"
function be(e,t,n){const s=e.slice()
return s[23]=t[n],s}const ke=e=>({item:16&e}),ye=e=>({item:e[23].data})
function xe(e,t){let n,s,l
const a=t[15].default,i=y(a,t,t[14],ye),d=i||function(e){let t
return{c(){t=N("Missing template")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}()
return{key:e,first:null,c(){n=c("svelte-virtual-list-row"),d&&d.c(),s=x(),o(n,"class","svelte-1tqh76q"),this.first=n},m(e,t){r(e,n,t),d&&d.m(n,null),u(n,s),l=!0},p(e,n){t=e,i&&i.p&&(!l||16400&n)&&w(i,a,t,t[14],l?C(a,t[14],n,ke):_(t[14]),ye)},i(e){l||($(d,e),l=!0)},o(e){v(d,e),l=!1},d(e){e&&b(n),d&&d.d(e)}}}function we(e){let t,n,s,k,y,x,w=[],_=new Map,C=l(e[4])
const j=e=>e[23].index
for(let t=0;t<C.length;t+=1){let n=be(e,C,t),s=j(n)
_.set(s,w[t]=xe(s,n))}return{c(){t=c("svelte-virtual-list-viewport"),n=c("svelte-virtual-list-contents")
for(let e=0;e<w.length;e+=1)w[e].c()
a(n,"padding-top",e[5]+"px"),a(n,"padding-bottom",e[6]+"px"),o(n,"class","svelte-1tqh76q"),a(t,"height",e[0]),o(t,"class","svelte-1tqh76q"),i((()=>e[18].call(t)))},m(l,c){r(l,t,c),u(t,n)
for(let e=0;e<w.length;e+=1)w[e]&&w[e].m(n,null)
e[16](n),e[17](t),s=d(t,e[18].bind(t)),k=!0,y||(x=m(t,"scroll",e[7]),y=!0)},p(e,[s]){16400&s&&(C=l(e[4]),h(),w=f(w,s,j,1,e,C,_,n,g,xe,null,be),p()),(!k||32&s)&&a(n,"padding-top",e[5]+"px"),(!k||64&s)&&a(n,"padding-bottom",e[6]+"px"),(!k||1&s)&&a(t,"height",e[0])},i(e){if(!k){for(let e=0;e<C.length;e+=1)$(w[e])
k=!0}},o(e){for(let e=0;e<w.length;e+=1)v(w[e])
k=!1},d(n){n&&b(t)
for(let e=0;e<w.length;e+=1)w[e].d()
e[16](null),e[17](null),s(),y=!1,x()}}}function _e(e,t,n){let s,l,c,a,o,i,{$$slots:r={},$$scope:u}=t,{items:d}=t,{height:m="100%"}=t,{itemHeight:h}=t,{start:f=0}=t,{end:g=0}=t,p=[],$=0,v=0,b=0
async function y(e,t){const{scrollTop:n}=l
t={left:0,top:n+(e-f)*(h||i),behavior:"smooth",...t},l.scrollTo(t)}return k((()=>{s=c.getElementsByTagName("svelte-virtual-list-row"),n(13,o=!0)})),e.$$set=e=>{"items"in e&&n(10,d=e.items),"height"in e&&n(0,m=e.height),"itemHeight"in e&&n(11,h=e.itemHeight),"start"in e&&n(8,f=e.start),"end"in e&&n(9,g=e.end),"$$scope"in e&&n(14,u=e.$$scope)},e.$$.update=()=>{1792&e.$$.dirty&&n(4,a=d.slice(f,g).map(((e,t)=>({index:t+f,data:e})))),11266&e.$$.dirty&&o&&async function(e,t,c){e.length<f&&await y(e.length-1,{behavior:"auto"})
const{scrollTop:a}=l
await j()
let o=v-a,r=f
for(;o<t&&r<e.length;){let e=s[r-f]
e||(n(9,g=r+1),await j(),e=s[r-f]),o+=p[r]=c||e.offsetHeight,r+=1}n(9,g=r)
const u=e.length-g
i=(v+o)/g,n(6,b=u*i),p.length=e.length}(d,$,h)},[m,$,l,c,a,v,b,async function(){const{scrollTop:e}=l
for(let e=0;e<s.length;e+=1)p[f+e]=h||s[e].offsetHeight
let t=0,c=0
for(;t<d.length;){const s=p[t]||i
if(c+s>e){n(8,f=t),n(5,v=c)
break}c+=s,t+=1}for(;t<d.length&&(c+=p[t]||i,t+=1,!(c>e+$)););n(9,g=t)
const a=d.length-g
for(i=c/g;t<d.length;)p[t++]=i
n(6,b=a*i)},f,g,d,h,y,o,u,r,function(e){L[e?"unshift":"push"]((()=>{c=e,n(3,c)}))},function(e){L[e?"unshift":"push"]((()=>{l=e,n(2,l)}))},function(){$=this.offsetHeight,n(1,$)}]}class Ce extends t{constructor(e){super(),n(this,e,_e,we,s,{items:10,height:0,itemHeight:11,start:8,end:9,scrollToIndex:12})}get scrollToIndex(){return this.$$.ctx[12]}}async function je(e=-1,t=1,n=[]){const s=await function(e,t,n){return re({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!s?.s)return void ue("guildLog-progress","Server Error.")
ue("guildLog-progress")
const l=n.concat(s.r.logs)
return 1e3!==s.r.logs.length?l:je(s.r.logs[0].id,0,l)}function Le(e){let t
return{c(){t=N("Select All")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ne(e){let t
return{c(){t=N("Select None")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function qe(e){let t
return{c(){t=N("Refresh")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Te(e){let t,n,s,l,a,o,i,d,h,f,g,p,k,y,w,_,C,j,L,q,S,B,E,A,R,D,O,U,Q,F,J,Z,z,K,V,W,X,Y,ee,te,ne,se,le,ce,ae,oe,ie,re,ue,de,me,fe,ge,pe,$e,ve,be,ke,ye,xe,we,_e,Ce,je,Te,Ge,Me,Ie,Pe,He,Se,Be,Ee
return je=new he({props:{$$slots:{default:[Le]},$$scope:{ctx:e}}}),je.$on("click",e[2]),Me=new he({props:{$$slots:{default:[Ne]},$$scope:{ctx:e}}}),Me.$on("click",e[3]),He=new he({props:{$$slots:{default:[qe]},$$scope:{ctx:e}}}),He.$on("click",e[4]),{c(){t=c("div"),n=c("div"),s=c("div"),s.innerHTML="<span>Filters:</span>",l=x(),a=c("div"),o=c("label"),i=N("Potions:\n        "),d=c("input"),h=x(),f=c("div"),g=c("label"),p=N("Store/Recalls:\n        "),k=c("input"),y=x(),w=c("div"),_=c("label"),C=N("Relics:\n        "),j=c("input"),L=x(),q=c("div"),S=c("label"),B=N("Mercenaries:\n        "),E=c("input"),A=x(),R=c("div"),D=c("label"),O=N("Group Combats:\n        "),U=c("input"),Q=x(),F=c("div"),J=x(),Z=c("div"),z=c("label"),K=N("Donations:\n        "),V=c("input"),W=x(),X=c("div"),Y=c("label"),ee=N("Rankings:\n        "),te=c("input"),ne=x(),se=c("div"),le=c("label"),ce=N("GvGs:\n        "),ae=c("input"),oe=x(),ie=c("div"),re=c("label"),ue=N("Tag/UnTags:\n        "),de=c("input"),me=x(),fe=c("div"),ge=c("label"),pe=N("Titans:\n        "),$e=c("input"),ve=x(),be=c("div"),ke=c("label"),ye=N("Other:\n        "),xe=c("input"),we=x(),_e=c("div"),Ce=c("div"),T(je.$$.fragment),Te=x(),Ge=c("div"),T(Me.$$.fragment),Ie=x(),Pe=c("div"),T(He.$$.fragment),G(s,"class","front svelte-1wbxfyn"),G(d,"type","checkbox"),d.__value="1",M(d,d.__value),G(k,"type","checkbox"),k.__value="2",M(k,k.__value),G(j,"type","checkbox"),j.__value="4",M(j,j.__value),G(E,"type","checkbox"),E.__value="5",M(E,E.__value),G(U,"type","checkbox"),U.__value="6",M(U,U.__value),G(V,"type","checkbox"),V.__value="7",M(V,V.__value),G(te,"type","checkbox"),te.__value="8",M(te,te.__value),G(ae,"type","checkbox"),ae.__value="9",M(ae,ae.__value),G(de,"type","checkbox"),de.__value="3",M(de,de.__value),G($e,"type","checkbox"),$e.__value="10",M($e,$e.__value),G(xe,"type","checkbox"),xe.__value="0",M(xe,xe.__value),G(n,"class","filters svelte-1wbxfyn"),G(_e,"class","buttons svelte-1wbxfyn"),G(t,"class","filter-header svelte-1wbxfyn")},m(c,$){r(c,t,$),u(t,n),u(n,s),u(n,l),u(n,a),u(a,o),u(o,i),u(o,d),d.checked=e[0][1],u(n,h),u(n,f),u(f,g),u(g,p),u(g,k),k.checked=e[0][2],u(n,y),u(n,w),u(w,_),u(_,C),u(_,j),j.checked=e[0][4],u(n,L),u(n,q),u(q,S),u(S,B),u(S,E),E.checked=e[0][5],u(n,A),u(n,R),u(R,D),u(D,O),u(D,U),U.checked=e[0][6],u(n,Q),u(n,F),u(n,J),u(n,Z),u(Z,z),u(z,K),u(z,V),V.checked=e[0][7],u(n,W),u(n,X),u(X,Y),u(Y,ee),u(Y,te),te.checked=e[0][8],u(n,ne),u(n,se),u(se,le),u(le,ce),u(le,ae),ae.checked=e[0][9],u(n,oe),u(n,ie),u(ie,re),u(re,ue),u(re,de),de.checked=e[0][3],u(n,me),u(n,fe),u(fe,ge),u(ge,pe),u(ge,$e),$e.checked=e[0][10],u(n,ve),u(n,be),u(be,ke),u(ke,ye),u(ke,xe),xe.checked=e[0][0],u(t,we),u(t,_e),u(_e,Ce),I(je,Ce,null),u(_e,Te),u(_e,Ge),I(Me,Ge,null),u(_e,Ie),u(_e,Pe),I(He,Pe,null),Se=!0,Be||(Ee=[m(d,"change",e[5]),m(d,"change",e[1]),m(k,"change",e[6]),m(k,"change",e[1]),m(j,"change",e[7]),m(j,"change",e[1]),m(E,"change",e[8]),m(E,"change",e[1]),m(U,"change",e[9]),m(U,"change",e[1]),m(V,"change",e[10]),m(V,"change",e[1]),m(te,"change",e[11]),m(te,"change",e[1]),m(ae,"change",e[12]),m(ae,"change",e[1]),m(de,"change",e[13]),m(de,"change",e[1]),m($e,"change",e[14]),m($e,"change",e[1]),m(xe,"change",e[15]),m(xe,"change",e[1])],Be=!0)},p(e,[t]){1&t&&(d.checked=e[0][1]),1&t&&(k.checked=e[0][2]),1&t&&(j.checked=e[0][4]),1&t&&(E.checked=e[0][5]),1&t&&(U.checked=e[0][6]),1&t&&(V.checked=e[0][7]),1&t&&(te.checked=e[0][8]),1&t&&(ae.checked=e[0][9]),1&t&&(de.checked=e[0][3]),1&t&&($e.checked=e[0][10]),1&t&&(xe.checked=e[0][0])
const n={}
1048576&t&&(n.$$scope={dirty:t,ctx:e}),je.$set(n)
const s={}
1048576&t&&(s.$$scope={dirty:t,ctx:e}),Me.$set(s)
const l={}
1048576&t&&(l.$$scope={dirty:t,ctx:e}),He.$set(l)},i(e){Se||($(je.$$.fragment,e),$(Me.$$.fragment,e),$(He.$$.fragment,e),Se=!0)},o(e){v(je.$$.fragment,e),v(Me.$$.fragment,e),v(He.$$.fragment,e),Se=!1},d(e){e&&b(t),P(je),P(Me),P(He),Be=!1,H(Ee)}}}function Ge(e,t,n){const s=S()
let{checks:l=Array(11).fill(!0)}=t
function c(){E("fsh_LogChecks",l)}function a(e){n(0,l=l.map((()=>e))),c()}return async function(){n(0,l=await B("fsh_LogChecks"))}(),e.$$set=e=>{"checks"in e&&n(0,l=e.checks)},[l,function(){c(),s("cbChange")},function(){a(!0),s("selectAll")},function(){a(!1),s("selectNone")},function(){s("refresh")},function(){l[1]=this.checked,n(0,l)},function(){l[2]=this.checked,n(0,l)},function(){l[4]=this.checked,n(0,l)},function(){l[5]=this.checked,n(0,l)},function(){l[6]=this.checked,n(0,l)},function(){l[7]=this.checked,n(0,l)},function(){l[8]=this.checked,n(0,l)},function(){l[9]=this.checked,n(0,l)},function(){l[3]=this.checked,n(0,l)},function(){l[10]=this.checked,n(0,l)},function(){l[0]=this.checked,n(0,l)}]}class Me extends t{constructor(e){super(),n(this,e,Ge,Te,s,{checks:0})}}function Ie(e,t,n){const s=e.slice()
return s[17]=t[n].data,s}function Pe(e,t,n){const s=e.slice()
return s[17]=t[n].data,s}function He(e,t,n){const s=e.slice()
return s[22]=t[n],s}function Se(e){let t
return{c(){t=c("i"),G(t,"class","fas fa-envelope"),G(t,"aria-hidden","true")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Be(e){let t,n=fe(e[2].time)+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){4&s&&n!==(n=fe(e[2].time)+"")&&D(t,n)},d(e){e&&b(t)}}}function Ee(e){let t,n=e[22]+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){4&s&&n!==(n=e[22]+"")&&D(t,n)},d(e){e&&b(t)}}}function Ae(e){let t,n,s=0===e[2].msg.attachments[e[22]].type&&Re(e),l=1===e[2].msg.attachments[e[22]].type&&De(e)
return{c(){s&&s.c(),t=x(),l&&l.c(),n=O()},m(e,c){s&&s.m(e,c),r(e,t,c),l&&l.m(e,c),r(e,n,c)},p(e,c){0===e[2].msg.attachments[e[22]].type?s?s.p(e,c):(s=Re(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),1===e[2].msg.attachments[e[22]].type?l?l.p(e,c):(l=De(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(e){e&&(b(t),b(n)),s&&s.d(e),l&&l.d(e)}}}function Re(e){let t,n,s,l=e[2].msg.attachments[e[22]].data.name+""
return{c(){t=c("a"),n=N(l),G(t,"href",s=""+(K+e[2].msg.attachments[e[22]].data.id)),G(t,"class","svelte-164vlq2")},m(e,s){r(e,t,s),u(t,n)},p(e,c){4&c&&l!==(l=e[2].msg.attachments[e[22]].data.name+"")&&D(n,l),4&c&&s!==(s=""+(K+e[2].msg.attachments[e[22]].data.id))&&G(t,"href",s)},d(e){e&&b(t)}}}function De(e){let t,n,s,l,a,o,i,d,m=e[2].msg.attachments[e[22]].data.name+""
return{c(){t=N("[\n          "),n=c("a"),s=c("img"),o=N(m),d=N("\n          ]"),W(s.src,l=X+"guilds/"+e[2].msg.attachments[e[22]].data.id+"_mini.png")||G(s,"src",l),G(s,"alt",a=e[2].msg.attachments[e[22]].data.name),G(s,"class","svelte-164vlq2"),G(n,"href",i=""+(Y+e[2].msg.attachments[e[22]].data.id)),G(n,"class","svelte-164vlq2")},m(e,l){r(e,t,l),r(e,n,l),u(n,s),u(n,o),r(e,d,l)},p(e,t){4&t&&!W(s.src,l=X+"guilds/"+e[2].msg.attachments[e[22]].data.id+"_mini.png")&&G(s,"src",l),4&t&&a!==(a=e[2].msg.attachments[e[22]].data.name)&&G(s,"alt",a),4&t&&m!==(m=e[2].msg.attachments[e[22]].data.name+"")&&D(o,m),4&t&&i!==(i=""+(Y+e[2].msg.attachments[e[22]].data.id))&&G(n,"href",i)},d(e){e&&(b(t),b(n),b(d))}}}function Oe(e){let t,n
function s(e,n){return 4&n&&(t=null),null==t&&(t=!(1!==e[22].length||pe(Number(e[22])))),t?Ae:Ee}let l=s(e,-1),c=l(e)
return{c(){c.c(),n=O()},m(e,t){c.m(e,t),r(e,n,t)},p(e,t){l===(l=s(e,t))&&c?c.p(e,t):(c.d(1),c=l(e),c&&(c.c(),c.m(n.parentNode,n)))},d(e){e&&b(n),c.d(e)}}}function Ue(e){let t,n,s,c,a=17===e[2].type&&e[0]&&e[2].msg.text.includes("victorious"),o=l(e[2].msg.attachments.filter(st)),i=[]
for(let t=0;t<o.length;t+=1)i[t]=ze(Pe(e,o,t))
const u=e=>v(i[e],1,1,(()=>{i[e]=null}))
let d=l(e[2].msg.attachments.filter(lt)),m=[]
for(let t=0;t<d.length;t+=1)m[t]=Ve(Ie(e,d,t))
const f=e=>v(m[e],1,1,(()=>{m[e]=null}))
let g=a&&We(e)
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=x()
for(let e=0;e<m.length;e+=1)m[e].c()
n=x(),g&&g.c(),s=O()},m(e,l){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,l)
r(e,t,l)
for(let t=0;t<m.length;t+=1)m[t]&&m[t].m(e,l)
r(e,n,l),g&&g.m(e,l),r(e,s,l),c=!0},p(e,c){if(932&c){let n
for(o=l(e[2].msg.attachments.filter(st)),n=0;n<o.length;n+=1){const s=Pe(e,o,n)
i[n]?(i[n].p(s,c),$(i[n],1)):(i[n]=ze(s),i[n].c(),$(i[n],1),i[n].m(t.parentNode,t))}for(h(),n=o.length;n<i.length;n+=1)u(n)
p()}if(68&c){let t
for(d=l(e[2].msg.attachments.filter(lt)),t=0;t<d.length;t+=1){const s=Ie(e,d,t)
m[t]?(m[t].p(s,c),$(m[t],1)):(m[t]=Ve(s),m[t].c(),$(m[t],1),m[t].m(n.parentNode,n))}for(h(),t=d.length;t<m.length;t+=1)f(t)
p()}5&c&&(a=17===e[2].type&&e[0]&&e[2].msg.text.includes("victorious")),a?g?g.p(e,c):(g=We(e),g.c(),g.m(s.parentNode,s)):g&&(g.d(1),g=null)},i(e){if(!c){for(let e=0;e<o.length;e+=1)$(i[e])
for(let e=0;e<d.length;e+=1)$(m[e])
c=!0}},o(e){i=i.filter(Boolean)
for(let e=0;e<i.length;e+=1)v(i[e])
m=m.filter(Boolean)
for(let e=0;e<m.length;e+=1)v(m[e])
c=!1},d(e){e&&(b(t),b(n),b(s)),R(i,e),R(m,e),g&&g.d(e)}}}function Qe(e){let t
return{c(){t=N("Reply")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Fe(e){let t
return{c(){t=N("Buff")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Je(e){let t
return{c(){t=N("Send")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ze(e){let t
return{c(){t=N("Trade")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function ze(e){let t,n,s,l,a,o,i,d,m,h,f
return s=new ge({props:{$$slots:{default:[Qe]},$$scope:{ctx:e}}}),s.$on("click",(function(){return e[10](e[17])})),a=new ge({props:{$$slots:{default:[Fe]},$$scope:{ctx:e}}}),a.$on("click",(function(){return e[11](e[17])})),i=new ge({props:{$$slots:{default:[Je]},$$scope:{ctx:e}}}),i.$on("click",(function(){return e[12](e[17])})),m=new ge({props:{$$slots:{default:[Ze]},$$scope:{ctx:e}}}),m.$on("click",(function(){return e[13](e[17])})),{c(){t=c("span"),n=N("[\n          "),T(s.$$.fragment),l=N("\n          |\n          "),T(a.$$.fragment),o=N("\n          |\n          "),T(i.$$.fragment),d=N("\n          |\n          "),T(m.$$.fragment),h=N("\n          ]"),G(t,"class","action-buttons svelte-164vlq2")},m(e,c){r(e,t,c),u(t,n),I(s,t,null),u(t,l),I(a,t,null),u(t,o),I(i,t,null),u(t,d),I(m,t,null),u(t,h),f=!0},p(t,n){e=t
const l={}
33554432&n&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)
const c={}
33554432&n&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)
const o={}
33554432&n&&(o.$$scope={dirty:n,ctx:e}),i.$set(o)
const r={}
33554432&n&&(r.$$scope={dirty:n,ctx:e}),m.$set(r)},i(e){f||($(s.$$.fragment,e),$(a.$$.fragment,e),$(i.$$.fragment,e),$(m.$$.fragment,e),f=!0)},o(e){v(s.$$.fragment,e),v(a.$$.fragment,e),v(i.$$.fragment,e),v(m.$$.fragment,e),f=!1},d(e){e&&b(t),P(s),P(a),P(i),P(m)}}}function Ke(e){let t
return{c(){t=N("View Combat")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function Ve(e){let t,n,s,l,a
return s=new ge({props:{$$slots:{default:[Ke]},$$scope:{ctx:e}}}),s.$on("click",(function(){return e[14](e[17])})),{c(){t=c("span"),n=N("[\n          "),T(s.$$.fragment),l=N("\n          ]"),G(t,"class","action-buttons svelte-164vlq2")},m(e,c){r(e,t,c),u(t,n),I(s,t,null),u(t,l),a=!0},p(t,n){e=t
const l={}
33554432&n&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)},i(e){a||($(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){e&&b(t),P(s)}}}function We(e){let t,n,s={ctx:e,current:null,token:null,hasCatch:!1,pending:tt,then:Ye,catch:Xe,value:16}
return oe(n=ve(e[2].time,e[2].msg.attachments[0].data),s),{c(){t=O(),s.block.c()},m(e,n){r(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t},p(t,l){e=t,s.ctx=e,4&l&&n!==(n=ve(e[2].time,e[2].msg.attachments[0].data))&&oe(n,s)||ie(s,e,l)},d(e){e&&b(t),s.block.d(e),s.token=null,s=null}}}function Xe(e){return{c:z,m:z,p:z,d:z}}function Ye(e){let t,n=e[16]?.r?.combat?.items?.[0]?.n&&et(e)
return{c(){n&&n.c(),t=O()},m(e,s){n&&n.m(e,s),r(e,t,s)},p(e,s){e[16]?.r?.combat?.items?.[0]?.n?n?n.p(e,s):(n=et(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&b(t),n&&n.d(e)}}}function et(e){let t,n,s,l,a,o,i,d,m=e[16].r.combat.attacker.group.players[0].name+"",h=e[16]?.r?.combat?.items?.[0]?.n+""
return{c(){t=c("div"),n=c("a"),s=N(m),a=N("'s\n              group looted the item\n              '"),o=c("span"),i=N(h),d=N("'"),G(n,"href",l=""+(K+e[16].r.combat.attacker.group.players[0].id)),G(n,"class","svelte-164vlq2"),G(o,"class","fshGreen")},m(e,l){r(e,t,l),u(t,n),u(n,s),u(t,a),u(t,o),u(o,i),u(t,d)},p(e,t){4&t&&m!==(m=e[16].r.combat.attacker.group.players[0].name+"")&&D(s,m),4&t&&l!==(l=""+(K+e[16].r.combat.attacker.group.players[0].id))&&G(n,"href",l),4&t&&h!==(h=e[16]?.r?.combat?.items?.[0]?.n+"")&&D(i,h)},d(e){e&&b(t)}}}function tt(e){return{c:z,m:z,p:z,d:z}}function nt(e){let t,n,s,a,o,i,d,m,f=e[2].time&&Se(),g=e[2].time&&Be(e),k=l(e[2].msg.text.split(/<link=a(\d)><\/link>/).filter(e[3])),y=[]
for(let t=0;t<k.length;t+=1)y[t]=Oe(He(e,k,t))
let w=e[2].msg?.attachments?.length&&Ue(e)
return{c(){t=c("div"),n=c("div"),f&&f.c(),s=x(),a=c("div"),g&&g.c(),o=x(),i=c("div")
for(let e=0;e<y.length;e+=1)y[e].c()
d=x(),w&&w.c(),G(n,"class","svelte-164vlq2"),A(n,"old",e[2].old),A(n,"new",e[2].new),G(a,"class","svelte-164vlq2"),A(a,"old",e[2].old),A(a,"new",e[2].new),G(i,"class","svelte-164vlq2"),A(i,"old",e[2].old),A(i,"new",e[2].new),G(t,"class","row-container svelte-164vlq2"),A(t,"not-self",e[1]&&e[4](e[2])),A(t,"separator",e[2].index)},m(e,l){r(e,t,l),u(t,n),f&&f.m(n,null),u(t,s),u(t,a),g&&g.m(a,null),u(t,o),u(t,i)
for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(i,null)
u(i,d),w&&w.m(i,null),m=!0},p(e,[s]){if(e[2].time?f||(f=Se(),f.c(),f.m(n,null)):f&&(f.d(1),f=null),(!m||4&s)&&A(n,"old",e[2].old),(!m||4&s)&&A(n,"new",e[2].new),e[2].time?g?g.p(e,s):(g=Be(e),g.c(),g.m(a,null)):g&&(g.d(1),g=null),(!m||4&s)&&A(a,"old",e[2].old),(!m||4&s)&&A(a,"new",e[2].new),12&s){let t
for(k=l(e[2].msg.text.split(/<link=a(\d)><\/link>/).filter(e[3])),t=0;t<k.length;t+=1){const n=He(e,k,t)
y[t]?y[t].p(n,s):(y[t]=Oe(n),y[t].c(),y[t].m(i,d))}for(;t<y.length;t+=1)y[t].d(1)
y.length=k.length}e[2].msg?.attachments?.length?w?(w.p(e,s),4&s&&$(w,1)):(w=Ue(e),w.c(),$(w,1),w.m(i,null)):w&&(h(),v(w,1,1,(()=>{w=null})),p()),(!m||4&s)&&A(i,"old",e[2].old),(!m||4&s)&&A(i,"new",e[2].new),(!m||22&s)&&A(t,"not-self",e[1]&&e[4](e[2])),(!m||4&s)&&A(t,"separator",e[2].index)},i(e){m||($(w),m=!0)},o(e){v(w),m=!1},d(e){e&&b(t),f&&f.d(),g&&g.d(),R(y,e),w&&w.d()}}}const st=({type:e})=>0===e,lt=({type:e})=>11===e
function ct(e,t,n){let{groupCombatItems:s=null}=t,{hideNonPlayerGuildLogMessages:l=null}=t,{logEntry:c=null}=t
function a(e){V("Guild Log",e)}function o(e){a("buff"),$e(e.id)}function i(e){a("combat"),Q(`${F}combat&subcmd=view&combat_id=${e}`)}function r(e){a("reply"),window.openQuickMsgDialog(e.name)}function u(e){a("send"),Q(`${J}${e.name}`)}function d(e){a("trade"),Q(`${Z}${e.name}`)}return e.$$set=e=>{"groupCombatItems"in e&&n(0,s=e.groupCombatItems),"hideNonPlayerGuildLogMessages"in e&&n(1,l=e.hideNonPlayerGuildLogMessages),"logEntry"in e&&n(2,c=e.logEntry)},[s,l,c,e=>e,function(e){const t=e.msg.attachments?.filter((e=>0===e.type))
return t?.length&&!t.filter((({data:{id:e}})=>e===U())).length},o,i,r,u,d,e=>r(e),e=>o(e),e=>u(e),e=>d(e),e=>i(e)]}class at extends t{constructor(e){super(),n(this,e,ct,nt,s,{groupCombatItems:0,hideNonPlayerGuildLogMessages:1,logEntry:2})}}const ot=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function it(e,t){return te(t)?e.includes(t):t.test(e)}function rt(e,t){return t.some(ee(it,e))}function ut(e){const t=ot.findIndex(ee(rt,e))
return-1===t?0:t}function dt(e,t,n){const s=e.slice()
return s[29]=t[n],s[31]=n,s}function mt(e){let t
return{c(){t=c("span"),t.textContent="(Guild Log messages not involving self are dimmed!)",G(t,"class","white svelte-1nxqix0")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function ht(e){let t,n=e[33]+""
return{c(){t=N(n)},m(e,n){r(e,t,n)},p(e,s){32&s[0]&&n!==(n=e[33]+"")&&D(t,n)},i:z,o:z,d(e){e&&b(t)}}}function ft(e){let t,n,s
return n=new Ce({props:{items:e[2],$$slots:{default:[gt,({item:e})=>({32:e}),({item:e})=>[0,e?2:0]]},$$scope:{ctx:e}}}),{c(){t=c("div"),T(n.$$.fragment),G(t,"class","vs svelte-1nxqix0")},m(e,l){r(e,t,l),I(n,t,null),s=!0},p(e,t){const s={}
4&t[0]&&(s.items=e[2]),24&t[0]|10&t[1]&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||($(n.$$.fragment,e),s=!0)},o(e){v(n.$$.fragment,e),s=!1},d(e){e&&b(t),P(n)}}}function gt(e){let t,n
return t=new at({props:{groupCombatItems:e[3],hideNonPlayerGuildLogMessages:e[4],logEntry:e[32]}}),{c(){T(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},p(e,n){const s={}
8&n[0]&&(s.groupCombatItems=e[3]),16&n[0]&&(s.hideNonPlayerGuildLogMessages=e[4]),2&n[1]&&(s.logEntry=e[32]),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function pt(e){let t,n=[],s=new Map,c=l(e[6])
const a=e=>e[31]
for(let t=0;t<c.length;t+=1){let l=dt(e,c,t),o=a(l)
s.set(o,n[t]=$t(o,l))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c()
t=O()},m(e,s){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,s)
r(e,t,s)},p(e,o){64&o[0]&&(c=l(e[6]),n=f(n,o,a,1,e,c,s,t.parentNode,le,$t,t,dt))},i:z,o:z,d(e){e&&b(t)
for(let t=0;t<n.length;t+=1)n[t].d(e)}}}function $t(e,t){let n,s,l,a=t[29]+""
return{key:e,first:null,c(){n=N(a),s=x(),l=c("br"),this.first=n},m(e,t){r(e,n,t),r(e,s,t),r(e,l,t)},p(e,s){t=e,64&s[0]&&a!==(a=t[29]+"")&&D(n,a)},d(e){e&&(b(n),b(s),b(l))}}}function vt(e){let t,n,s,l,a,o,i,d,m,h,f,g,p,k
function y(t){e[12](t)}let w={}
void 0!==e[1]&&(w.checks=e[1]),n=new Me({props:w}),L.push((()=>ne(n,"checks",y))),n.$on("cbChange",e[8]),n.$on("refresh",e[11]),n.$on("selectAll",e[9]),n.$on("selectNone",e[10])
let _=e[4]&&mt(),C={ctx:e,current:null,token:null,hasCatch:!0,pending:pt,then:ft,catch:ht,error:33,blocks:[,,,]}
return oe(p=e[5],C),{c(){t=c("div"),T(n.$$.fragment),l=x(),a=c("div"),o=c("div"),o.textContent=" ",i=x(),d=c("div"),d.textContent="Date",m=x(),h=c("div"),f=N("Message\n        "),_&&_.c(),g=x(),C.block.c(),G(o,"class","innerColumnHeader svelte-1nxqix0"),G(d,"class","innerColumnHeader svelte-1nxqix0"),G(h,"class","innerColumnHeader svelte-1nxqix0"),G(a,"class","row-container svelte-1nxqix0"),G(t,"class","content svelte-1nxqix0")},m(e,s){r(e,t,s),I(n,t,null),u(t,l),u(t,a),u(a,o),u(a,i),u(a,d),u(a,m),u(a,h),u(h,f),_&&_.m(h,null),u(t,g),C.block.m(t,C.anchor=null),C.mount=()=>t,C.anchor=null,k=!0},p(t,l){e=t
const c={}
!s&&2&l[0]&&(s=!0,c.checks=e[1],se((()=>s=!1))),n.$set(c),e[4]?_||(_=mt(),_.c(),_.m(h,null)):_&&(_.d(1),_=null),C.ctx=e,32&l[0]&&p!==(p=e[5])&&oe(p,C)||ie(C,e,l)},i(e){k||($(n.$$.fragment,e),$(C.block),k=!0)},o(e){v(n.$$.fragment,e)
for(let e=0;e<3;e+=1){const t=C.blocks[e]
v(t)}k=!1},d(e){e&&b(t),P(n),_&&_.d(),C.block.d(),C.token=null,C=null}}}function bt(e){let t
return{c(){t=N("Guild Log")},m(e,n){r(e,t,n)},d(e){e&&b(t)}}}function kt(e){let t,n
return t=new me({props:{visible:e[0],$$slots:{title:[bt],default:[vt]},$$scope:{ctx:e}}}),t.$on("close",e[7]),{c(){T(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},p(e,n){const s={}
1&n[0]&&(s.visible=e[0]),126&n[0]|8&n[1]&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function yt(e,t,n){let{visible:s=!0}=t,l=Array(11).fill(!0),c=0,a=[],o=null,i=null,r=null,u=null,d=[],m=null,h=[],f=null
function g(e){V("Guild Log",e)}const p=(e,t)=>({...e,index:t}),$=e=>({...e,fshType:ut(e.msg.text),new:o&&e.time>u,old:o&&(f-e.time)/60>20&&e.time<=u}),v=(e,t)=>t.time-e.time
function b(){n(2,a=d.filter((({fshType:e})=>l[e])).map(p)),a.length||n(2,a=[{index:0,msg:{text:""}}])}function k(e){n(6,h=h.concat(e))}function y(e){e?k(e):(c+=1,k(`chunk ${c}`))}async function x(){n(6,h=["Loading..."]),d=[],n(2,a=[]),f=(new Date).setUTCSeconds(0,0)/1e3,u=ce("lastModalGuildLogCheck")??f,ae("lastModalGuildLogCheck",f),o=ce("enableLogColoring"),n(3,i=ce("groupCombatItems")),n(4,r=ce("hideNonPlayerGuildLogMessages")),c=0,de("guildLog-progress",y)
const e=await q(je)
e&&(d=e.toSorted(v).map($),b())}function w(){n(5,m=x())}return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},e.$$.update=()=>{1&e.$$.dirty[0]&&s&&w()},[s,l,a,i,r,m,h,function(){g("close"),n(0,s=!1)},function(){g("cbChange"),b()},function(){g("selectAll"),b()},function(){g("selectNone"),b()},w,function(e){l=e,n(1,l)}]}var xt=class extends t{constructor(e){super(),n(this,e,yt,kt,s,{visible:0},null,[-1,-1])}}
const wt={visible:!0}
let _t=0
function Ct(){_t=e(wt,_t,xt)}export{Ct as default}
//# sourceMappingURL=guildLog-B9OiuyJa.js.map
