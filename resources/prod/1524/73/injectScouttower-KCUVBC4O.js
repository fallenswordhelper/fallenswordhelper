import{a as At}from"./chunk-DFAGM6GS.js";import{a as Rt,b as qt,c as U}from"./chunk-DYHY6OV2.js";import{a as It}from"./chunk-RP3N4V3U.js";import{b as mt}from"./chunk-BU437SH3.js";import{a as Ft}from"./chunk-4AHGUYDC.js";import{a as G}from"./chunk-P4U5WM2K.js";import"./chunk-762OQDNK.js";import{a as jt}from"./chunk-CPTQUCQO.js";import{a as at}from"./chunk-RSFH7S7C.js";import"./chunk-WMCZFGCW.js";import{$ as M,A as _,C as $t,R as z,S as F,U as Lt,V as Ht,Z as q,_ as P,a as b,aa as V,b as st,ba as O,d as R,p as f,q as y,r as v,s as et,t as p,u as S,v as k,x as H}from"./chunk-ORBHZR4S.js";import{a as zt}from"./chunk-G54YS6XN.js";import{a as ct}from"./chunk-5VPDEFUM.js";import{a as ft}from"./chunk-6RB5V7WT.js";import"./chunk-S4KQNLGC.js";import{a as Q}from"./chunk-RS336C42.js";import{a as Bt}from"./chunk-C67K6TFM.js";import"./chunk-N3ER3OGK.js";import{a as A}from"./chunk-TSUHFY5W.js";import{a as B}from"./chunk-SC2PSRG5.js";import"./chunk-JAXKMKJG.js";import{a as it}from"./chunk-7ZZM3PI5.js";import"./chunk-H32ZIF3T.js";import{a as Ct}from"./chunk-PV2I23US.js";import{a as lt}from"./chunk-NUF6WYPU.js";import"./chunk-SIQKD6OY.js";import"./chunk-N7SUA7LP.js";import"./chunk-W63VP4AC.js";import{a as wt}from"./chunk-25QBSENP.js";import{a as Z}from"./chunk-RFXG7YID.js";import{a as $}from"./chunk-UHIE2U7H.js";import"./chunk-SGTVLZZY.js";import"./chunk-W2KQHOA7.js";import{a as Nt}from"./chunk-JN32CCUR.js";import{a as vt}from"./chunk-2CWUWNBM.js";import{a as Et}from"./chunk-BN7XNLUY.js";import"./chunk-Q4EXCAYO.js";import{b as Tt}from"./chunk-GUWFFNX3.js";import{a as yt}from"./chunk-JS6L3KUY.js";import"./chunk-NHZZ7LZ4.js";import"./chunk-UHYEXGNQ.js";import{a as L}from"./chunk-7B7EL4RE.js";import"./chunk-DY5UVCP4.js";import{a as x,b as tt}from"./chunk-GL5QHOTK.js";import"./chunk-C6NE64RN.js";import"./chunk-XUIDQDTX.js";import"./chunk-LJJ4O6SU.js";import"./chunk-AODVCOO3.js";import"./chunk-CPTULJAW.js";import{a as St}from"./chunk-HUN5OHNR.js";import"./chunk-MWTT7SJH.js";import"./chunk-65ZLY3NC.js";import"./chunk-YLJQNWRW.js";import{a as K}from"./chunk-E6R3MXCQ.js";import{X as rt,ua as kt}from"./chunk-E2WYTXH7.js";import"./chunk-S7VLPIAI.js";function Jt(t){t.previousElementSibling&&ft(ct(t.previousElementSibling.href))}var Wt=t=>ct(t.cells[0].children[0].href);function Yt(t){let e=t.parentNode.parentNode.parentNode.parentNode,n=G(e,3,0).map(Wt).join();ft(n)}function Zt(t){let{target:e}=t;lt("[b]",e)&&Jt(e),lt("all",e)&&Yt(e)}function Kt(t){vt("fshBl",t.target)&&Zt(t)}function xt(t){B(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function te(t){G(t,3,0).forEach(xt),B(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function ee(t,e){return t.rows.length>1&&e>1}function ne(t){K(t).filter(ee).forEach(te),St(t[1],Kt)}function ut(t){t.length>2&&ne(t)}function oe(t,e,n){return`<br><span class="fshBlue"> (${mt(Rt(n-e,t),2)}% Current <br>${mt(t*100/n,2)}% Total<br>${qt(t,n,e)})`}function re(t){let e=t.hp.split("/");B(t.tr.cells[3],oe(Number($(t.tr.cells[3])),Number(e[0]),Number(e[1])))}function pt(t){!t.active||re(t)}function Pt(t,e,n){let r=t.slice();return r[4]=e[n][0],r[5]=e[n][1],r}function Mt(t){let e,n,r=t[4]+"",u,s,i,o=t[5].cooldownText+"",a,l,m,d=t[5].seen+"",T,g;return{c(){e=p("tr"),n=p("td"),u=S(r),s=k(),i=p("td"),a=S(o),l=k(),m=p("td"),T=S(d),g=k(),_(n,"class","svelte-1g6lyd8"),_(i,"class","cd svelte-1g6lyd8"),_(m,"class","svelte-1g6lyd8")},m(N,E){y(N,e,E),f(e,n),f(n,u),f(e,s),f(e,i),f(i,a),f(e,l),f(e,m),f(m,T),f(e,g)},p:b,d(N){N&&v(e)}}}function le(t){let e,n,r,u,s=t[0](),i=[];for(let o=0;o<s.length;o+=1)i[o]=Mt(Pt(t,s,o));return{c(){e=p("table"),n=p("tbody"),r=p("tr"),r.innerHTML=`<td class="header svelte-1g6lyd8">Titan</td> 
      <td class="header svelte-1g6lyd8">Cooldown</td> 
      <td class="header svelte-1g6lyd8">Visible</td>`,u=k();for(let o=0;o<i.length;o+=1)i[o].c();_(e,"class","svelte-1g6lyd8")},m(o,a){y(o,e,a),f(e,n),f(n,r),f(n,u);for(let l=0;l<i.length;l+=1)i[l].m(n,null)},p(o,[a]){if(a&1){s=o[0]();let l;for(l=0;l<s.length;l+=1){let m=Pt(o,s,l);i[l]?i[l].p(m,a):(i[l]=Mt(m),i[l].c(),i[l].m(n,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},i:b,o:b,d(o){o&&v(e),et(i,o)}}}function ie(t,e,n){let{theTitans:r}=e,u=([,o])=>o.coolTime>Z,s=([,o],[,a])=>o.coolTime-a.coolTime,i=()=>L(r).filter(u).sort(s);return t.$$set=o=>{"theTitans"in o&&n(1,r=o.theTitans)},[i,r]}var dt=class extends O{constructor(e){super(),V(this,e,ie,le,R,{theTitans:1})}},Vt=dt;function Ot(t,e,n){let r=t.slice();return r[23]=e[n][0],r[24]=e[n][1],r[25]=e,r[26]=n,r}function se(t){return{c:b,m:b,p:b,i:b,o:b,d:b}}function ae(t){let e,n,r,u,s,i,o=t[2],a=[];for(let l=0;l<o.length;l+=1)a[l]=Qt(Ot(t,o,l));return r=new at({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}}),r.$on("click",t[7]),s=new at({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),s.$on("click",t[8]),{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=k(),n=p("div"),q(r.$$.fragment),u=k(),q(s.$$.fragment),_(n,"class","svelte-16ajzwe")},m(l,m){for(let d=0;d<a.length;d+=1)a[d].m(l,m);y(l,e,m),y(l,n,m),P(r,n,null),f(n,u),P(s,n,null),i=!0},p(l,m){if(m&68){o=l[2];let g;for(g=0;g<o.length;g+=1){let N=Ot(l,o,g);a[g]?a[g].p(N,m):(a[g]=Qt(N),a[g].c(),a[g].m(e.parentNode,e))}for(;g<a.length;g+=1)a[g].d(1);a.length=o.length}let d={};m&134217728&&(d.$$scope={dirty:m,ctx:l}),r.$set(d);let T={};m&134217728&&(T.$$scope={dirty:m,ctx:l}),s.$set(T)},i(l){i||(z(r.$$.fragment,l),z(s.$$.fragment,l),i=!0)},o(l){F(r.$$.fragment,l),F(s.$$.fragment,l),i=!1},d(l){et(a,l),l&&v(e),l&&v(n),M(r),M(s)}}}function Qt(t){let e,n,r,u=t[23]+"",s,i,o,a;function l(){t[13].call(n,t[25],t[26])}return{c(){e=p("label"),n=p("input"),r=k(),s=S(u),i=k(),_(n,"type","checkbox"),_(e,"class","svelte-16ajzwe")},m(m,d){y(m,e,d),f(e,n),n.checked=t[24],f(e,r),f(e,s),y(m,i,d),o||(a=[H(n,"change",l),H(n,"change",t[6])],o=!0)},p(m,d){t=m,d&4&&(n.checked=t[24]),d&4&&u!==(u=t[23]+"")&&$t(s,u)},d(m){m&&v(e),m&&v(i),o=!1,st(a)}}}function ce(t){let e;return{c(){e=S("Select All")},m(n,r){y(n,e,r)},d(n){n&&v(e)}}}function fe(t){let e;return{c(){e=S("Select None")},m(n,r){y(n,e,r)},d(n){n&&v(e)}}}function me(t){return{c:b,m:b,p:b,i:b,o:b,d:b}}function ue(t){let e,n,r,u,s,i,o,a,l,m,d,T,g,N,E,J,C,j,nt,W,X,I,D,Y,w={ctx:t,current:null,token:null,hasCatch:!1,pending:me,then:ae,catch:se,blocks:[,,,]};return Lt(nt=t[3](),w),{c(){e=p("table"),n=p("tbody"),r=p("tr"),r.innerHTML='<td class="header svelte-16ajzwe" colspan="3"></td>',u=k(),s=p("tr"),i=p("td"),o=p("label"),a=p("input"),l=S(`
          Current`),m=k(),d=p("label"),T=p("input"),g=S(`
          History`),N=k(),E=p("tr"),E.innerHTML='<td class="header svelte-16ajzwe" colspan="3"></td>',J=k(),C=p("tr"),j=p("td"),w.block.c(),W=k(),X=p("tr"),X.innerHTML='<td class="header svelte-16ajzwe" colspan="3"></td>',_(a,"type","checkbox"),_(o,"class","svelte-16ajzwe"),_(T,"type","checkbox"),_(d,"class","svelte-16ajzwe"),_(i,"colspan","3"),_(i,"class","svelte-16ajzwe"),_(j,"colspan","3"),_(j,"class","svelte-16ajzwe"),_(e,"class","svelte-16ajzwe")},m(c,h){y(c,e,h),f(e,n),f(n,r),f(n,u),f(n,s),f(s,i),f(i,o),f(o,a),a.checked=t[0],f(o,l),f(i,m),f(i,d),f(d,T),T.checked=t[1],f(d,g),f(n,N),f(n,E),f(n,J),f(n,C),f(C,j),w.block.m(j,w.anchor=null),w.mount=()=>j,w.anchor=null,f(n,W),f(n,X),I=!0,D||(Y=[H(a,"change",t[11]),H(a,"change",t[4]),H(T,"change",t[12]),H(T,"change",t[5])],D=!0)},p(c,[h]){t=c,h&1&&(a.checked=t[0]),h&2&&(T.checked=t[1]),Ht(w,t,h)},i(c){I||(z(w.block),I=!0)},o(c){for(let h=0;h<3;h+=1){let ot=w.blocks[h];F(ot)}I=!1},d(c){c&&v(e),w.block.d(),w.token=null,w=null,D=!1,st(Y)}}}var Ut="fsh_titanFilter";function pe(t,e,n){let{theTitans:r}=e,{titanRows:u}=e,s=!0,i=!0,o=[],a=([c],[h])=>Et(c,h),l=()=>x(Ut),m=()=>tt(Ut,{current:s,history:i,titans:o}),d=({titanName:c})=>o.find(([h])=>h===c)[1],T=()=>L({...Q(L(r).map(([c])=>[c,!0])),...Q(o.map(([c,h])=>[U(c),h]))}).sort(a);function g(c){return!((c.active&&s||!c.active&&i)&&d(c))}function N([c,h]){let ot=K(Ft(c.tr).rows),bt=c.tr.rowIndex;ot.slice(bt,bt+6).forEach(Gt=>jt(Gt,h)),c.visible=!h}function E(){u.map(c=>[c,g(c)]).filter(([c,h])=>c.visible===h).forEach(N)}async function J(){let c=await l();c&&n(0,{current:s,history:i,titans:o}=c,s,n(1,i),n(2,o)),n(2,o=T()),E()}function C(){m(),E()}function j(){A("TitanFilter","toggleCurrent"),C()}function nt(){A("TitanFilter","toggleHistory"),C()}function W(){A("TitanFilter","toggleTitan"),C()}function X(){A("TitanFilter","selectAll"),n(2,o=o.map(([c])=>[c,!0])),C()}function I(){A("TitanFilter","selectNone"),n(2,o=o.map(([c])=>[c,!1])),C()}function D(){s=this.checked,n(0,s)}function Y(){i=this.checked,n(1,i)}function w(c,h){c[h][1]=this.checked,n(2,o)}return t.$$set=c=>{"theTitans"in c&&n(9,r=c.theTitans),"titanRows"in c&&n(10,u=c.titanRows)},[s,i,o,J,j,nt,W,X,I,r,u,D,Y,w]}var ht=class extends O{constructor(e){super(),V(this,e,pe,ue,R,{theTitans:9,titanRows:10})}},Xt=ht;function de(t){let e,n,r,u,s,i;return r=new Vt({props:{theTitans:t[0]}}),s=new Xt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=p("tr"),n=p("td"),q(r.$$.fragment),u=k(),q(s.$$.fragment),_(n,"colspan","3")},m(o,a){y(o,e,a),f(e,n),P(r,n,null),f(n,u),P(s,n,null),i=!0},p(o,[a]){let l={};a&1&&(l.theTitans=o[0]),r.$set(l);let m={};a&1&&(m.theTitans=o[0]),a&2&&(m.titanRows=o[1]),s.$set(m)},i(o){i||(z(r.$$.fragment,o),z(s.$$.fragment,o),i=!0)},o(o){F(r.$$.fragment,o),F(s.$$.fragment,o),i=!1},d(o){o&&v(e),M(r),M(s)}}}function he(t,e,n){let{theTitans:r}=e,{titanRows:u}=e;return t.$$set=s=>{"theTitans"in s&&n(0,r=s.theTitans),"titanRows"in s&&n(1,u=s.titanRows)},[r,u]}var gt=class extends O{constructor(e){super(),V(this,e,he,de,R,{theTitans:0,titanRows:1})}},Dt=gt;function ge(t,e,n){return new Dt({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}var _e=t=>t.includes("until")?It(t.replace("Cooldown until: ","")):0;function be(t){let e=$(t.nextElementSibling.cells[0]);return{cooldownText:e,coolTime:_e(e),seen:"yes"}}var ke=({titanName:t,tr:e})=>[t,be(e)];function Te(t,e){return Q(L(t).map(([n,r])=>[U(n),r]).filter(([n])=>!e[n]).filter(([,n])=>n.coolTime>Z).map(([n,r])=>[n,{...r,seen:"no"}]))}function we(t,e){let n=Q(zt(e,"titanName").map(ke));return{...n,...t&&Te(t,n)}}async function _t(t,e){let n=we(await x("fsh_titans"),e);t[0].rows.length>5&&ge(t[0],n,e),tt("fsh_titans",n)}function ye(t){let e=encodeURIComponent(t.titanName),[n]=t.tr.cells[0].children,r=Bt({href:`${rt}creatures&search_name=${e}`,target:"_blank"});it(r,n),it(t.tr.cells[0],r)}function ve(t){let[,e]=t.tr.cells,n=$(e);yt(`<a href="${rt}realms&search_name=${n}" target="_blank">${n}</a>`,e)}function Ne(t){B(t.tr.cells[0],t.titanName)}function Se(t){ye(t),Ne(t)}function Ce(t){pt(t),Se(t),ve(t)}function Ee(t){return At(Ct("img",t))}var je=t=>({hp:$(t.cells[2]),titanName:U(Ee(t)),tr:t,visible:!0}),Be=t=>({...t,active:!t.hp.includes("-")}),$e=t=>G(t[1],4,0).map(je).map(Be);function Le(){if(Nt())return;let t=wt(kt,Tt);ut(t);let e=$e(t);e.forEach(Ce),_t(t,e)}export{Le as default};
//# sourceMappingURL=injectScouttower-KCUVBC4O.js.map
