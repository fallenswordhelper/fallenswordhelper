import{a as Ut}from"./chunk-COPV3TBI.js";import{a as Qt}from"./chunk-2IIDEFZM.js";import{a as Ot}from"./chunk-FIMBYO62.js";import"./chunk-QDV4PRAL.js";import{a as G,b as Pt,c as Vt}from"./chunk-QUKKQXFA.js";import{a as Mt}from"./chunk-KIR2WSYI.js";import{b as gt}from"./chunk-BVUEH4PC.js";import{a as Y}from"./chunk-QINL52B7.js";import{a as pt}from"./chunk-KTSXFSFV.js";import"./chunk-64OF43RY.js";import{a as Rt}from"./chunk-76ARFLBC.js";import{a as ht}from"./chunk-CFKGXEY7.js";import{a as dt}from"./chunk-H5J4K67Q.js";import"./chunk-GU4CBJV2.js";import"./chunk-FSSBYC3E.js";import{a as z}from"./chunk-D6NHBHDF.js";import{a as qt}from"./chunk-N2ROMVCU.js";import{a as Bt}from"./chunk-TWEQZVC2.js";import"./chunk-TKJCL3KA.js";import{a as j}from"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as ft}from"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import{a as mt}from"./chunk-64W2OSE7.js";import{a as Ft}from"./chunk-P6EW3726.js";import"./chunk-RAUMC5JB.js";import"./chunk-ATELUZSH.js";import"./chunk-GOQRAVSB.js";import{b as Ct}from"./chunk-PWSQLISA.js";import{a as Lt}from"./chunk-HPU5ZEP3.js";import"./chunk-5HI4ILOP.js";import"./chunk-73NUJ3MC.js";import{a as Et}from"./chunk-D2RKZAOL.js";import{a as St}from"./chunk-OX3SBSJB.js";import{a as I}from"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import{a as R}from"./chunk-LGDJTMPN.js";import"./chunk-GKVMJ4PA.js";import{a as rt,b as lt}from"./chunk-KCGDJ5EJ.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import{a as $t}from"./chunk-A45QJTDQ.js";import"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as Ht}from"./chunk-CRWX7KCS.js";import{C as d,E as It,W as q,X as M,Z as jt,_ as At,a as k,b as ut,d as O,da as Q,ea as U,fa as X,ga as D,ha as K,r as a,s as y,t as v,u as st,v as p,w as E,x as _,z as $}from"./chunk-OR3S6YUT.js";import{a as A}from"./chunk-VRYLUPGH.js";import{a as it}from"./chunk-WFI3HTBS.js";import{a as ot}from"./chunk-5RFQSTDG.js";import"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{Y as at,wa as Nt}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import"./chunk-3WE6KSRQ.js";function te(t){t.previousElementSibling&&dt(ht(t.previousElementSibling.href))}var ee=t=>ht(t.cells[0].children[0].href);function ne(t){let e=t.parentNode.parentNode.parentNode.parentNode,n=Y(e,3,0).map(ee).join();dt(n)}function oe(t){let{target:e}=t;mt("[b]",e)&&te(e),mt("all",e)&&ne(e)}function re(t){Bt("fshBl",t.target)&&oe(t)}function le(t){j(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function ie(t){Y(t,3,0).forEach(le),j(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function se(t,e){return t.rows.length>1&&e>1}function ce(t){ot(t).filter(se).forEach(ie),Ht(t[1],re)}function bt(t){t.length>2&&ce(t)}function ae(t,e,n){return`<br><span class="fshBlue"> (${gt(Pt(n-e,t),2)}% Current <br>${gt(t*100/n,2)}% Total<br>${Vt(t,n,e)})`}function fe(t){let e=t.hp.split("/");j(t.tr.cells[3],ae(Number(I(t.tr.cells[3])),Number(e[0]),Number(e[1])))}function _t(t){t.active&&fe(t)}function Xt(t,e,n){let r=t.slice();return r[4]=e[n][0],r[5]=e[n][1],r}function Dt(t){let e,n,r=t[4]+"",u,f,l,o=t[5].cooldownText+"",s,c,i,h=t[5].seen+"",b,C;return{c(){e=p("tr"),n=p("td"),u=E(r),f=_(),l=p("td"),s=E(o),c=_(),i=p("td"),b=E(h),C=_(),d(n,"class","svelte-1g6lyd8"),d(l,"class","cd svelte-1g6lyd8"),d(i,"class","svelte-1g6lyd8")},m(g,w){y(g,e,w),a(e,n),a(n,u),a(e,f),a(e,l),a(l,s),a(e,c),a(e,i),a(i,b),a(e,C)},p:k,d(g){g&&v(e)}}}function me(t){let e,n,r,u,f=t[0](),l=[];for(let o=0;o<f.length;o+=1)l[o]=Dt(Xt(t,f,o));return{c(){e=p("table"),n=p("tbody"),r=p("tr"),r.innerHTML=`<td class="header svelte-1g6lyd8">Titan</td> 
      <td class="header svelte-1g6lyd8">Cooldown</td> 
      <td class="header svelte-1g6lyd8">Visible</td>`,u=_();for(let o=0;o<l.length;o+=1)l[o].c();d(e,"class","svelte-1g6lyd8")},m(o,s){y(o,e,s),a(e,n),a(n,r),a(n,u);for(let c=0;c<l.length;c+=1)l[c].m(n,null)},p(o,[s]){if(s&1){f=o[0]();let c;for(c=0;c<f.length;c+=1){let i=Xt(o,f,c);l[c]?l[c].p(i,s):(l[c]=Dt(i),l[c].c(),l[c].m(n,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=f.length}},i:k,o:k,d(o){o&&v(e),st(l,o)}}}function ue(t,e,n){let{theTitans:r}=e,u=([,o])=>o.coolTime>it(),f=([,o],[,s])=>o.coolTime-s.coolTime,l=()=>R(r).filter(u).sort(f);return t.$$set=o=>{"theTitans"in o&&n(1,r=o.theTitans)},[l,r]}var kt=class extends K{constructor(e){super(),D(this,e,ue,me,O,{theTitans:1})}},Kt=kt;function zt(t,e,n){let r=t.slice();return r[29]=e[n][0],r[30]=e[n][1],r[31]=e,r[32]=n,r}function pe(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function he(t){let e,n,r,u,f,l,o,s=t[3],c=[];for(let i=0;i<s.length;i+=1)c[i]=Gt(zt(t,s,i));return u=new pt({props:{$$slots:{default:[de]},$$scope:{ctx:t}}}),u.$on("click",t[9]),l=new pt({props:{$$slots:{default:[ge]},$$scope:{ctx:t}}}),l.$on("click",t[10]),{c(){e=p("div");for(let i=0;i<c.length;i+=1)c[i].c();n=_(),r=p("div"),Q(u.$$.fragment),f=_(),Q(l.$$.fragment),d(e,"id","titan-list"),d(e,"class","svelte-1s0h251"),d(r,"class","svelte-1s0h251")},m(i,h){y(i,e,h);for(let b=0;b<c.length;b+=1)c[b].m(e,null);y(i,n,h),y(i,r,h),U(u,r,null),a(r,f),U(l,r,null),o=!0},p(i,h){if(h[0]&264){s=i[3];let g;for(g=0;g<s.length;g+=1){let w=zt(i,s,g);c[g]?c[g].p(w,h):(c[g]=Gt(w),c[g].c(),c[g].m(e,null))}for(;g<c.length;g+=1)c[g].d(1);c.length=s.length}let b={};h[1]&4&&(b.$$scope={dirty:h,ctx:i}),u.$set(b);let C={};h[1]&4&&(C.$$scope={dirty:h,ctx:i}),l.$set(C)},i(i){o||(q(u.$$.fragment,i),q(l.$$.fragment,i),o=!0)},o(i){M(u.$$.fragment,i),M(l.$$.fragment,i),o=!1},d(i){i&&v(e),st(c,i),i&&v(n),i&&v(r),X(u),X(l)}}}function Gt(t){let e,n,r,u=t[29]+"",f,l,o,s;function c(){t[16].call(n,t[31],t[32])}return{c(){e=p("label"),n=p("input"),r=_(),f=E(u),l=_(),d(n,"type","checkbox"),d(e,"class","svelte-1s0h251")},m(i,h){y(i,e,h),a(e,n),n.checked=t[30],a(e,r),a(e,f),y(i,l,h),o||(s=[$(n,"change",c),$(n,"change",t[8])],o=!0)},p(i,h){t=i,h[0]&8&&(n.checked=t[30]),h[0]&8&&u!==(u=t[29]+"")&&It(f,u)},d(i){i&&v(e),i&&v(l),o=!1,ut(s)}}}function de(t){let e;return{c(){e=E("Select All")},m(n,r){y(n,e,r)},d(n){n&&v(e)}}}function ge(t){let e;return{c(){e=E("Select None")},m(n,r){y(n,e,r)},d(n){n&&v(e)}}}function be(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function _e(t){let e,n,r,u,f,l,o,s,c,i,h,b,C,g,w,H,Z,x,P,tt,B,F,ct,et,J,V,W,nt,T={ctx:t,current:null,token:null,hasCatch:!1,pending:be,then:he,catch:pe,blocks:[,,,]};return jt(ct=t[4](),T),{c(){e=p("table"),n=p("tbody"),r=p("tr"),r.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',u=_(),f=p("tr"),l=p("td"),o=p("label"),s=p("input"),c=E(`
          Current`),i=_(),h=p("label"),b=p("input"),C=E(`
          History`),g=_(),w=p("label"),H=p("input"),Z=E(`
          Securable`),x=_(),P=p("tr"),P.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',tt=_(),B=p("tr"),F=p("td"),T.block.c(),et=_(),J=p("tr"),J.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',d(s,"type","checkbox"),d(o,"class","svelte-1s0h251"),d(b,"type","checkbox"),d(h,"class","svelte-1s0h251"),d(H,"type","checkbox"),d(w,"class","svelte-1s0h251"),d(l,"colspan","3"),d(l,"class","svelte-1s0h251"),d(F,"colspan","3"),d(F,"class","svelte-1s0h251"),d(e,"class","svelte-1s0h251")},m(L,N){y(L,e,N),a(e,n),a(n,r),a(n,u),a(n,f),a(f,l),a(l,o),a(o,s),s.checked=t[0],a(o,c),a(l,i),a(l,h),a(h,b),b.checked=t[1],a(h,C),a(l,g),a(l,w),a(w,H),H.checked=t[2],a(w,Z),a(n,x),a(n,P),a(n,tt),a(n,B),a(B,F),T.block.m(F,T.anchor=null),T.mount=()=>F,T.anchor=null,a(n,et),a(n,J),V=!0,W||(nt=[$(s,"change",t[13]),$(s,"change",t[5]),$(b,"change",t[14]),$(b,"change",t[6]),$(H,"change",t[15]),$(H,"change",t[7])],W=!0)},p(L,N){t=L,N[0]&1&&(s.checked=t[0]),N[0]&2&&(b.checked=t[1]),N[0]&4&&(H.checked=t[2]),At(T,t,N)},i(L){V||(q(T.block),V=!0)},o(L){for(let N=0;N<3;N+=1){let m=T.blocks[N];M(m)}V=!1},d(L){L&&v(e),T.block.d(),T.token=null,T=null,W=!1,ut(nt)}}}var Jt="fsh_titanFilter";function ke(t,e,n){let{theTitans:r}=e,{titanRows:u}=e,f=!0,l=!0,o=!1,s=[],c=([m],[S])=>Ft(m,S),i=()=>rt(Jt),h=()=>lt(Jt,{current:f,history:l,securable:o,titans:s}),b=({titanName:m})=>s.find(([S])=>S===m)[1],C=()=>R({...z(R(r).map(([m])=>[m,!0])),...z(s.map(([m,S])=>[G(m),S]))}).sort(c),g=m=>m.active&&f,w=m=>!m.active&&l,H=m=>m.securable||!o;function Z(m){return(g(m)||w(m))&&b(m)&&H(m)}function x([m,S]){let Zt=ot(Ot(m.tr).rows),wt=m.tr.rowIndex;Zt.slice(wt,wt+6).forEach(xt=>Mt(xt,!S)),m.visible=S}function P(){u.map(m=>[m,Z(m)]).filter(([m,S])=>m.visible!==S).forEach(x)}async function tt(){let m=await i();m&&n(0,{current:f,history:l,securable:o,titans:s}=m,f,n(1,l),n(2,o),n(3,s)),n(3,s=C()),P()}function B(){h(),P()}function F(){A("TitanFilter","toggleCurrent"),B()}function ct(){A("TitanFilter","toggleHistory"),B()}function et(){A("TitanFilter","toggleSecurable"),B()}function J(){A("TitanFilter","toggleTitan"),B()}function V(){A("TitanFilter","selectAll"),n(3,s=s.map(([m])=>[m,!0])),B()}function W(){A("TitanFilter","selectNone"),n(3,s=s.map(([m])=>[m,!1])),B()}function nt(){f=this.checked,n(0,f)}function T(){l=this.checked,n(1,l)}function L(){o=this.checked,n(2,o)}function N(m,S){m[S][1]=this.checked,n(3,s)}return t.$$set=m=>{"theTitans"in m&&n(11,r=m.theTitans),"titanRows"in m&&n(12,u=m.titanRows)},[f,l,o,s,tt,F,ct,et,J,V,W,r,u,nt,T,L,N]}var Tt=class extends K{constructor(e){super(),D(this,e,ke,_e,O,{theTitans:11,titanRows:12},null,[-1,-1])}},Wt=Tt;function Te(t){let e,n,r,u,f,l;return r=new Kt({props:{theTitans:t[0]}}),f=new Wt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=p("tr"),n=p("td"),Q(r.$$.fragment),u=_(),Q(f.$$.fragment),d(n,"colspan","3")},m(o,s){y(o,e,s),a(e,n),U(r,n,null),a(n,u),U(f,n,null),l=!0},p(o,[s]){let c={};s&1&&(c.theTitans=o[0]),r.$set(c);let i={};s&1&&(i.theTitans=o[0]),s&2&&(i.titanRows=o[1]),f.$set(i)},i(o){l||(q(r.$$.fragment,o),q(f.$$.fragment,o),l=!0)},o(o){M(r.$$.fragment,o),M(f.$$.fragment,o),l=!1},d(o){o&&v(e),X(r),X(f)}}}function ye(t,e,n){let{theTitans:r}=e,{titanRows:u}=e;return t.$$set=f=>{"theTitans"in f&&n(0,r=f.theTitans),"titanRows"in f&&n(1,u=f.titanRows)},[r,u]}var yt=class extends K{constructor(e){super(),D(this,e,ye,Te,O,{theTitans:0,titanRows:1})}},Yt=yt;function ve(t,e,n){return new Yt({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}var we=t=>t?.includes("until")?Qt(t.replace("Cooldown until: ","")):0;function Ne(t){let e=I(t.nextElementSibling.cells[0]);return{cooldownText:e,coolTime:we(e),seen:"yes"}}var Se=({titanName:t,tr:e})=>[t,Ne(e)];function Ee(t,e){return z(R(t).map(([n,r])=>[G(n),r]).filter(([n])=>!e[n]).filter(([,n])=>n.coolTime>it()).map(([n,r])=>[n,{...r,seen:"no"}]))}function Ce(t,e){let n=z(Rt(e,"titanName").map(Se));return{...n,...t&&Ee(t,n)}}async function vt(t,e){let n=Ce(await rt("fsh_titans"),e);t[0].rows.length>5&&ve(t[0],n,e),lt("fsh_titans",n)}function Be(t){let e=encodeURIComponent(t.titanName),[n]=t.tr.cells[0].children,r=qt({href:`${at}creatures&search_name=${e}`,target:"_blank"});ft(r,n),ft(t.tr.cells[0],r)}function He(t){let[,e]=t.tr.cells,n=I(e);Lt(`<a href="${at}realms&search_name=${n}" target="_blank">${n}</a>`,e)}function Le(t){j(t.tr.cells[0],t.titanName)}function $e(t){Be(t),Le(t)}function Fe(t){_t(t),$e(t),He(t)}function Ie(t){return Ut(St("img",t))}var je=t=>({guildKills:Number(I(t.cells[3])),hp:I(t.cells[2]),titanName:G(Ie(t)),tr:t,visible:!0}),Ae=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Re=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]}),qe=t=>Y(t[1],4,0)?.map(je).map(Ae).map(Re);function Me(){if($t())return;let t=Et(Nt,Ct());if(!t?.length)return;bt(t);let e=qe(t);e&&(e.forEach(Fe),vt(t,e))}export{Me as default};
//# sourceMappingURL=injectScouttower-KKHQPEN3.js.map
