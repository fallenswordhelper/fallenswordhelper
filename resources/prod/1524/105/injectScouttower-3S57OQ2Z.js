import{a as Dt}from"./chunk-HOLWJTUP.js";import{a as jt}from"./chunk-S55WOQYI.js";import{a as Ut}from"./chunk-BWC3ASDO.js";import{a as K,b as Jt,c as wt}from"./chunk-RAIATHSF.js";import{b as Gt}from"./chunk-SYSZTM2L.js";import{a as Tt}from"./chunk-ALXGJJZV.js";import{a as dt}from"./chunk-UACQUCUH.js";import{a as Ct}from"./chunk-XF27WXPN.js";import"./chunk-YKSRGHW2.js";import{a as mt}from"./chunk-6HYHAIWX.js";import"./chunk-6RNWJDUW.js";import"./chunk-DZF5XANJ.js";import{a as $}from"./chunk-ORW7B7YJ.js";import"./chunk-VIYL46Q6.js";import{a as kt}from"./chunk-HPPEXIMR.js";import{a as Y}from"./chunk-WP265O3M.js";import"./chunk-TZIXO72F.js";import"./chunk-EJFOLQ4R.js";import"./chunk-JJ7LU6FF.js";import{a as Lt}from"./chunk-CAX7THIP.js";import{a as Qt}from"./chunk-G2WQ6YZF.js";import{a as ut}from"./chunk-GXOFVYKC.js";import{a as E}from"./chunk-LGNFNBOW.js";import"./chunk-A6LP6MUS.js";import{a as gt,b as st}from"./chunk-K2ALIVI4.js";import"./chunk-7VIXIIBV.js";import{a as L}from"./chunk-Y5EGDMIB.js";import{$ as yt,A as y,D as d,F as xt,X as H,Y as Q,_ as Nt,a as h,aa as U,b as It,d as w,fa as j,ga as D,ha as P,ia as _,ja as z,s as I,t as A,u as X,v as ct,w as b,x as v,y as C}from"./chunk-TVNPLL64.js";import"./chunk-SNNJRQSX.js";import"./chunk-5YAX7RCO.js";import"./chunk-Z5JYB3FL.js";import"./chunk-DLFQE7QF.js";import{c as ot}from"./chunk-FR27OJE5.js";import{a as bt}from"./chunk-GMQMPQTF.js";import{a as St}from"./chunk-NT4BD23Z.js";import"./chunk-E3BH7XBT.js";import"./chunk-IUVEXKRJ.js";import"./chunk-JG7KZ32H.js";import{a as Vt}from"./chunk-FMA2QB7F.js";import"./chunk-35MRBVSX.js";import{a as Ft}from"./chunk-AH7GU5B4.js";import{a as Ht}from"./chunk-V7IRBBI6.js";import"./chunk-B72RCTA5.js";import{a as R}from"./chunk-KOM3R443.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import{a as S}from"./chunk-YXAOTQ2S.js";import{a as it}from"./chunk-OHAOQZFW.js";import"./chunk-PJWDCLVE.js";import{b as Rt}from"./chunk-Q3ULPWYK.js";import{a as vt}from"./chunk-SSAI4GAC.js";import{a as Yt}from"./chunk-JCK66TTB.js";import"./chunk-SY4ES3W2.js";import"./chunk-TFKKNJKY.js";import"./chunk-R7J7NY4A.js";import{Y as rt,wa as Wt}from"./chunk-5ELKH2XV.js";import"./chunk-5ORZS6IQ.js";import"./chunk-BRQN5OZB.js";import"./chunk-BZJZQFW2.js";import"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";function ee(t){t.previousElementSibling&&Ct(dt(t.previousElementSibling.href))}var le=t=>dt(t.cells[0].children[0].href);function ne(t){let e=t.parentNode.parentNode.parentNode.parentNode,l=$(e,3,0).map(le).join();Ct(l)}function ce(t){let{target:e}=t;bt("[b]",e)&&ee(e),bt("all",e)&&ne(e)}function ie(t){kt("fshBl",t.target)&&ce(t)}function ge(t){Y(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function se(t){$(t,3,0).forEach(ge),Y(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function oe(t,e){return t.rows.length>1&&e>1}function ae(t){it(t).filter(oe).forEach(se),Yt(t[1],ie)}function pt(t){t.length>2&&ae(t)}function re(t,e,l){return`<br><span class="fshBlue"> (${Gt(Jt(l-e,t),2)}% Current <br>${Gt(t*100/l,2)}% Total<br>${wt(t,l,e)})`}function Ie(t){let e=t.hp.split("/");Y(t.tr.cells[3],re(Number(R(t.tr.cells[3])),Number(e[0]),Number(e[1])))}function ht(t){t.active&&Ie(t)}function Pt(t,e,l){let c=t.slice();return c[4]=e[l][0],c[5]=e[l][1],c}function _t(t){let e,l,c,u,a,i,n;return{c(){e=b("tr"),l=b("td"),l.textContent=`${t[4]}`,c=C(),u=b("td"),u.textContent=`${t[5].cooldownText}`,a=C(),i=b("td"),i.textContent=`${t[5].seen}`,n=C(),d(l,"class","svelte-1g6lyd8"),d(u,"class","cd svelte-1g6lyd8"),d(i,"class","svelte-1g6lyd8")},m(g,s){A(g,e,s),I(e,l),I(e,c),I(e,u),I(e,a),I(e,i),I(e,n)},p:h,d(g){g&&X(e)}}}function ue(t){let e,l,c,u,a=U(t[0]()),i=[];for(let n=0;n<a.length;n+=1)i[n]=_t(Pt(t,a,n));return{c(){e=b("table"),l=b("tbody"),c=b("tr"),c.innerHTML='<td class="header svelte-1g6lyd8">Titan</td> <td class="header svelte-1g6lyd8">Cooldown</td> <td class="header svelte-1g6lyd8">Visible</td>',u=C();for(let n=0;n<i.length;n+=1)i[n].c();d(e,"class","svelte-1g6lyd8")},m(n,g){A(n,e,g),I(e,l),I(l,c),I(l,u);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(l,null)},p(n,[g]){if(g&1){a=U(n[0]());let s;for(s=0;s<a.length;s+=1){let o=Pt(n,a,s);i[s]?i[s].p(o,g):(i[s]=_t(o),i[s].c(),i[s].m(l,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=a.length}},i:h,o:h,d(n){n&&X(e),ct(i,n)}}}function be(t,e,l){let{theTitans:c}=e,u=([,n])=>n.coolTime>ot(),a=([,n],[,g])=>n.coolTime-g.coolTime,i=()=>S(c).filter(u).sort(a);return t.$$set=n=>{"theTitans"in n&&l(1,c=n.theTitans)},[i,c]}var ft=class extends z{constructor(e){super(),_(this,e,be,ue,w,{theTitans:1})}},zt=ft;function Et(t,e,l){let c=t.slice();return c[29]=e[l][0],c[30]=e[l][1],c[31]=e,c[32]=l,c}function me(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function de(t){let e,l,c,u,a,i,n,g=U(t[3]),s=[];for(let o=0;o<g.length;o+=1)s[o]=Kt(Et(t,g,o));return u=new mt({props:{$$slots:{default:[Ce]},$$scope:{ctx:t}}}),u.$on("click",t[9]),i=new mt({props:{$$slots:{default:[Ge]},$$scope:{ctx:t}}}),i.$on("click",t[10]),{c(){e=b("div");for(let o=0;o<s.length;o+=1)s[o].c();l=C(),c=b("div"),j(u.$$.fragment),a=C(),j(i.$$.fragment),d(e,"id","titan-list"),d(e,"class","svelte-1s0h251"),d(c,"class","svelte-1s0h251")},m(o,m){A(o,e,m);for(let G=0;G<s.length;G+=1)s[G]&&s[G].m(e,null);A(o,l,m),A(o,c,m),D(u,c,null),I(c,a),D(i,c,null),n=!0},p(o,m){if(m[0]&264){g=U(o[3]);let p;for(p=0;p<g.length;p+=1){let W=Et(o,g,p);s[p]?s[p].p(W,m):(s[p]=Kt(W),s[p].c(),s[p].m(e,null))}for(;p<s.length;p+=1)s[p].d(1);s.length=g.length}let G={};m[1]&4&&(G.$$scope={dirty:m,ctx:o}),u.$set(G);let k={};m[1]&4&&(k.$$scope={dirty:m,ctx:o}),i.$set(k)},i(o){n||(H(u.$$.fragment,o),H(i.$$.fragment,o),n=!0)},o(o){Q(u.$$.fragment,o),Q(i.$$.fragment,o),n=!1},d(o){o&&(X(e),X(l),X(c)),ct(s,o),P(u),P(i)}}}function Kt(t){let e,l,c,u=t[29]+"",a,i,n,g;function s(){t[16].call(l,t[31],t[32])}return{c(){e=b("label"),l=b("input"),c=C(),a=v(u),i=C(),d(l,"type","checkbox"),d(e,"class","svelte-1s0h251")},m(o,m){A(o,e,m),I(e,l),l.checked=t[30],I(e,c),I(e,a),A(o,i,m),n||(g=[y(l,"change",s),y(l,"change",t[8])],n=!0)},p(o,m){t=o,m[0]&8&&(l.checked=t[30]),m[0]&8&&u!==(u=t[29]+"")&&xt(a,u)},d(o){o&&(X(e),X(i)),n=!1,It(g)}}}function Ce(t){let e;return{c(){e=v("Select All")},m(l,c){A(l,e,c)},d(l){l&&X(e)}}}function Ge(t){let e;return{c(){e=v("Select None")},m(l,c){A(l,e,c)},d(l){l&&X(e)}}}function pe(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function he(t){let e,l,c,u,a,i,n,g,s,o,m,G,k,p,W,x,q,tt,T,et,V,F,at,lt,O,J,M,nt,f={ctx:t,current:null,token:null,hasCatch:!1,pending:pe,then:de,catch:me,blocks:[,,,]};return Nt(at=t[4](),f),{c(){e=b("table"),l=b("tbody"),c=b("tr"),c.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',u=C(),a=b("tr"),i=b("td"),n=b("label"),g=b("input"),s=v(`
          Current`),o=C(),m=b("label"),G=b("input"),k=v(`
          History`),p=C(),W=b("label"),x=b("input"),q=v(`
          Securable`),tt=C(),T=b("tr"),T.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',et=C(),V=b("tr"),F=b("td"),f.block.c(),lt=C(),O=b("tr"),O.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',d(g,"type","checkbox"),d(n,"class","svelte-1s0h251"),d(G,"type","checkbox"),d(m,"class","svelte-1s0h251"),d(x,"type","checkbox"),d(W,"class","svelte-1s0h251"),d(i,"colspan","3"),d(i,"class","svelte-1s0h251"),d(F,"colspan","3"),d(F,"class","svelte-1s0h251"),d(e,"class","svelte-1s0h251")},m(N,Z){A(N,e,Z),I(e,l),I(l,c),I(l,u),I(l,a),I(a,i),I(i,n),I(n,g),g.checked=t[0],I(n,s),I(i,o),I(i,m),I(m,G),G.checked=t[1],I(m,k),I(i,p),I(i,W),I(W,x),x.checked=t[2],I(W,q),I(l,tt),I(l,T),I(l,et),I(l,V),I(V,F),f.block.m(F,f.anchor=null),f.mount=()=>F,f.anchor=null,I(l,lt),I(l,O),J=!0,M||(nt=[y(g,"change",t[13]),y(g,"change",t[5]),y(G,"change",t[14]),y(G,"change",t[6]),y(x,"change",t[15]),y(x,"change",t[7])],M=!0)},p(N,Z){t=N,Z[0]&1&&(g.checked=t[0]),Z[0]&2&&(G.checked=t[1]),Z[0]&4&&(x.checked=t[2]),yt(f,t,Z)},i(N){J||(H(f.block),J=!0)},o(N){for(let Z=0;Z<3;Z+=1){let r=f.blocks[Z];Q(r)}J=!1},d(N){N&&X(e),f.block.d(),f.token=null,f=null,M=!1,It(nt)}}}var Ot="fsh_titanFilter";function fe(t,e,l){let{theTitans:c}=e,{titanRows:u}=e,a=!0,i=!0,n=!1,g=[],s=([r],[B])=>Ht(r,B),o=()=>gt(Ot),m=()=>st(Ot,{current:a,history:i,securable:n,titans:g}),G=({titanName:r})=>g.find(([B])=>B===r)[1],k=()=>S({...E(S(c).map(([r])=>[r,!0])),...E(g.map(([r,B])=>[K(r),B]))}).sort(s),p=r=>r.active&&a,W=r=>!r.active&&i,x=r=>r.securable||!n;function q(r){return(p(r)||W(r))&&G(r)&&x(r)}function tt([r,B]){let qt=it(Ut(r.tr).rows),Bt=r.tr.rowIndex;qt.slice(Bt,Bt+6).forEach(te=>Tt(te,!B)),r.visible=B}function T(){u.map(r=>[r,q(r)]).filter(([r,B])=>r.visible!==B).forEach(tt)}async function et(){let r=await o();r&&l(0,{current:a,history:i,securable:n,titans:g}=r,a,l(1,i),l(2,n),l(3,g)),l(3,g=k()),T()}function V(){m(),T()}function F(){L("TitanFilter","toggleCurrent"),V()}function at(){L("TitanFilter","toggleHistory"),V()}function lt(){L("TitanFilter","toggleSecurable"),V()}function O(){L("TitanFilter","toggleTitan"),V()}function J(){L("TitanFilter","selectAll"),l(3,g=g.map(([r])=>[r,!0])),V()}function M(){L("TitanFilter","selectNone"),l(3,g=g.map(([r])=>[r,!1])),V()}function nt(){a=this.checked,l(0,a)}function f(){i=this.checked,l(1,i)}function N(){n=this.checked,l(2,n)}function Z(r,B){r[B][1]=this.checked,l(3,g)}return t.$$set=r=>{"theTitans"in r&&l(11,c=r.theTitans),"titanRows"in r&&l(12,u=r.titanRows)},[a,i,n,g,et,F,at,lt,O,J,M,c,u,nt,f,N,Z]}var At=class extends z{constructor(e){super(),_(this,e,fe,he,w,{theTitans:11,titanRows:12},null,[-1,-1])}},Mt=At;function Ae(t){let e,l,c,u,a,i;return c=new zt({props:{theTitans:t[0]}}),a=new Mt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=b("tr"),l=b("td"),j(c.$$.fragment),u=C(),j(a.$$.fragment),d(l,"colspan","3")},m(n,g){A(n,e,g),I(e,l),D(c,l,null),I(l,u),D(a,l,null),i=!0},p(n,[g]){let s={};g&1&&(s.theTitans=n[0]),c.$set(s);let o={};g&1&&(o.theTitans=n[0]),g&2&&(o.titanRows=n[1]),a.$set(o)},i(n){i||(H(c.$$.fragment,n),H(a.$$.fragment,n),i=!0)},o(n){Q(c.$$.fragment,n),Q(a.$$.fragment,n),i=!1},d(n){n&&X(e),P(c),P(a)}}}function Xe(t,e,l){let{theTitans:c}=e,{titanRows:u}=e;return t.$$set=a=>{"theTitans"in a&&l(0,c=a.theTitans),"titanRows"in a&&l(1,u=a.titanRows)},[c,u]}var Xt=class extends z{constructor(e){super(),_(this,e,Xe,Ae,w,{theTitans:0,titanRows:1})}},$t=Xt;function Ze(t,e,l){return new $t({anchor:t.rows[5],props:{theTitans:e,titanRows:l},target:t.children[0]})}var Be=t=>t?.includes("until")?jt(t.replace("Cooldown until: ","")):0;function We(t){let e=R(t.nextElementSibling.cells[0]);return{cooldownText:e,coolTime:Be(e),seen:"yes"}}var Ve=({titanName:t,tr:e})=>[t,We(e)];function xe(t,e){return E(S(t).map(([l,c])=>[K(l),c]).filter(([l])=>!e[l]).filter(([,l])=>l.coolTime>ot()).map(([l,c])=>[l,{...c,seen:"no"}]))}function Ne(t,e){let l=E(Lt(e,"titanName").map(Ve));return{...l,...t&&xe(t,l)}}async function Zt(t,e){let l=Ne(await gt("fsh_titans"),e);t[0].rows.length>5&&Ze(t[0],l,e),st("fsh_titans",l)}function ye(t){let e=encodeURIComponent(t.titanName),[l]=t.tr.cells[0].children,c=Qt({href:`${rt}creatures&search_name=${e}`,target:"_blank"});ut(c,l),ut(t.tr.cells[0],c)}function Fe(t){let[,e]=t.tr.cells,l=R(e);vt(`<a href="${rt}realms&search_name=${l}" target="_blank">${l}</a>`,e)}function Re(t){Y(t.tr.cells[0],t.titanName)}function ke(t){ye(t),Re(t)}function Ye(t){ht(t),ke(t),Fe(t)}function ve(t){return Dt(Vt("img",t))}var He=t=>({guildKills:Number(R(t.cells[3])),hp:R(t.cells[2]),titanName:K(ve(t)),tr:t,visible:!0}),Qe=t=>({...t,active:!t.hp.includes("-"),titanHp:t.hp.split("/").map(Number)}),Le=t=>({...t,securable:t.active&&Math.ceil(t.titanHp[1]/2+1)-t.guildKills<=t.titanHp[0]}),Se=t=>$(t[1],4,0)?.map(He).map(Qe).map(Le);function Te(){if(St())return;let t=Ft(Wt,Rt());if(!t?.length)return;pt(t);let e=Se(t);e&&(e.forEach(Ye),Zt(t,e))}export{Te as default};
//# sourceMappingURL=injectScouttower-3S57OQ2Z.js.map
