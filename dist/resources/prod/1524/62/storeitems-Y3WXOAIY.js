import{b as R,c as U,d as W,f as X}from"./chunk-QSN7XJUE.js";import"./chunk-FB2TEXY3.js";import"./chunk-FEBSB7BX.js";import"./chunk-G3M5GNE3.js";import"./chunk-D4VE7LUA.js";import{a as q}from"./chunk-GFYMJ5JH.js";import"./chunk-VDKZDXOF.js";import{a as O}from"./chunk-JAM7CGM2.js";import"./chunk-FMQZALNE.js";import"./chunk-UQMMT5PA.js";import{A as G,G as w,J as H,K as J,L as h,M as g,Q as E,R as S,S as B,T as N,U as j,a as F,d as C,o as A,p as u,q as p,r as x,s as b,t as k,u as L,w as z,y as d}from"./chunk-5AZ2HWTX.js";import{a as K}from"./chunk-DC5ZFAIU.js";import"./chunk-YMRJ7NHP.js";import"./chunk-T5JQDVOM.js";import"./chunk-YKENGH6A.js";import"./chunk-Y4UDZE3F.js";import"./chunk-5RU2F3WM.js";import{a as I}from"./chunk-5D4H3P6Q.js";import"./chunk-TNC2Z5WR.js";import"./chunk-EAK4QJFH.js";import"./chunk-LTJ4PJJD.js";import"./chunk-LX6BJAAE.js";import"./chunk-HUVFJU6B.js";import"./chunk-L3KWCNKY.js";import"./chunk-N6DHR4HD.js";import"./chunk-5VTP3GQ6.js";import"./chunk-7N7KYOCQ.js";import{a as v}from"./chunk-EHOBQCEV.js";import"./chunk-VML6VTTW.js";import"./chunk-73BUZD3L.js";import"./chunk-IPXXUBBR.js";import"./chunk-TTIL6Q2Q.js";import"./chunk-CYTNSAKG.js";import"./chunk-4KBBARFN.js";import"./chunk-57Z3RMCJ.js";import"./chunk-7XTGUVW5.js";import"./chunk-CF4P6XS2.js";import"./chunk-G3R5NAPB.js";import"./chunk-CQ3PZTYF.js";import"./chunk-C5OE7PQU.js";import"./chunk-RY5JB5JV.js";import"./chunk-XDUXVHJP.js";import"./chunk-ZOPLLTNB.js";import"./chunk-HTCI2HHR.js";import"./chunk-5AABVCBG.js";import"./chunk-VWMHLX6I.js";import"./chunk-SWDYJ63E.js";import"./chunk-QOWOSZRG.js";import"./chunk-FM7OJ7NO.js";import"./chunk-HA7HK2NF.js";import"./chunk-YBC6MMGI.js";import"./chunk-U546IVLZ.js";import{a as D}from"./chunk-DXI2WUUD.js";import{a as y}from"./chunk-JQPK3YVC.js";import"./chunk-J2QMB37G.js";import{a as T}from"./chunk-HT7PAWAR.js";import"./chunk-T34QP7UC.js";import"./chunk-WHLURLGI.js";import"./chunk-M6FQTS4T.js";import"./chunk-2URZ55LX.js";import{b as P}from"./chunk-FTOV4GKD.js";import"./chunk-NY6FBFCL.js";import"./chunk-UWALNOSV.js";import{a as Q}from"./chunk-POXCGSYQ.js";import"./chunk-M72CYKCS.js";import"./chunk-ZP7KCDX3.js";function lt(o){let t,e,n,i;return{c(){t=b("button"),t.textContent="Check All",e=k("\xA0"),d(t,"class","custombutton svelte-1recp8w"),d(t,"type","button")},m(l,a){u(l,t,a),u(l,e,a),n||(i=z(t,"click",o[0]),n=!0)},p:F,i:F,o:F,d(l){l&&p(t),l&&p(e),n=!1,i()}}}function ct(o){let t=w();function e(){v("storeitems","Check All"),t("checkall")}return[e]}var Y=class extends j{constructor(t){super();N(this,t,ct,lt,C,{})}},Z=Y;function tt(o,t,e){let n=o.slice();return n[6]=t[e][0],n[7]=t[e][1],n}function it(o){let t;return{c(){t=k("All")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function st(o){let t;return{c(){t=k("Main")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function ft(o){let t=o[7]+"",e;return{c(){e=k(t)},m(n,i){u(n,e,i)},p(n,i){i&1&&t!==(t=n[7]+"")&&G(e,t)},d(n){n&&p(e)}}}function et(o){let t,e;function n(){return o[4](o[6])}return t=new q({props:{$$slots:{default:[ft]},$$scope:{ctx:o}}}),t.$on("click",n),{c(){E(t.$$.fragment)},m(i,l){S(t,i,l),e=!0},p(i,l){o=i;let a={};l&1025&&(a.$$scope={dirty:l,ctx:o}),t.$set(a)},i(i){e||(h(t.$$.fragment,i),e=!0)},o(i){g(t.$$.fragment,i),e=!1},d(i){B(t,i)}}}function at(o){let t,e,n,i,l,a,$;n=new q({props:{$$slots:{default:[it]},$$scope:{ctx:o}}}),n.$on("click",o[2]),l=new q({props:{$$slots:{default:[st]},$$scope:{ctx:o}}}),l.$on("click",o[3]);let m=D(o[0].folders),r=[];for(let c=0;c<m.length;c+=1)r[c]=et(tt(o,m,c));let rt=c=>g(r[c],1,1,()=>{r[c]=null});return{c(){t=b("tr"),e=b("td"),E(n.$$.fragment),i=L(),E(l.$$.fragment),a=L();for(let c=0;c<r.length;c+=1)r[c].c();d(e,"colspan","3"),d(e,"class","svelte-1lc41gb"),d(t,"class","fshCenter")},m(c,s){u(c,t,s),A(t,e),S(n,e,null),A(e,i),S(l,e,null),A(e,a);for(let _=0;_<r.length;_+=1)r[_].m(e,null);$=!0},p(c,[s]){let _={};s&1024&&(_.$$scope={dirty:s,ctx:c}),n.$set(_);let V={};if(s&1024&&(V.$$scope={dirty:s,ctx:c}),l.$set(V),s&3){m=D(c[0].folders);let f;for(f=0;f<m.length;f+=1){let M=tt(c,m,f);r[f]?(r[f].p(M,s),h(r[f],1)):(r[f]=et(M),r[f].c(),h(r[f],1),r[f].m(e,null))}for(H(),f=m.length;f<r.length;f+=1)rt(f);J()}},i(c){if(!$){h(n.$$.fragment,c),h(l.$$.fragment,c);for(let s=0;s<m.length;s+=1)h(r[s]);$=!0}},o(c){g(n.$$.fragment,c),g(l.$$.fragment,c),r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)g(r[s]);$=!1},d(c){c&&p(t),B(n),B(l),x(r,c)}}}function mt(o,t,e){let n=w(),{inv:i={folders:{}}}=t;function l(r){v("storeitems","Filter Folder"),n("filter",r)}let a=()=>l("-2"),$=()=>l("-1"),m=r=>l(r);return o.$$set=r=>{"inv"in r&&e(0,i=r.inv)},[i,l,a,$,m]}var ot=class extends j{constructor(t){super();N(this,t,mt,at,C,{inv:0})}},nt=ot;function ut(o,t,e){e.checked=!1;let n=K(e),i=o.items[e.value].folder_id,l=t!==-2&&t!==i;I(n,l),I(n.nextElementSibling,l)}function pt(o,t){O([5,3,R(),0,y(ut,o,Number(t.detail))])}async function dt(){let o=await W();if(!o||!o.folders)return;let t=document.forms[0];new nt({anchor:t,props:{inv:o},target:t.parentNode}).$on("filter",y(pt,o))}function ht(){U().forEach(o=>{o.checked=!o.disabled&&!o.checked})}function $t(){let o=Q(document.forms[0].elements).filter(e=>e.type==="submit")[0];new Z({anchor:o,target:o.parentNode}).$on("checkall",ht)}function _t(){T()&&P("enableFolderFilter")&&dt(),$t(),X()}export{_t as default};
//# sourceMappingURL=storeitems-Y3WXOAIY.js.map
