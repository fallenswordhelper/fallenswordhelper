import{b as R,c as U,d as W,f as X}from"./chunk-6PZFGCQX.js";import"./chunk-PAWRBJVL.js";import"./chunk-M2LVQRBT.js";import"./chunk-WJ6WYBIB.js";import"./chunk-34CYA3O2.js";import{a as O}from"./chunk-CXSGHUR2.js";import"./chunk-75YP5RJL.js";import"./chunk-QSSSVTFW.js";import"./chunk-W5PEDCCO.js";import{a as K}from"./chunk-CX6XSC6N.js";import"./chunk-Z4DKK5CW.js";import"./chunk-AB2WHLZ2.js";import"./chunk-QXOUCFTL.js";import"./chunk-CKMK7MLG.js";import{a as I}from"./chunk-EFNZZWVY.js";import"./chunk-QATO5RVZ.js";import{a as q}from"./chunk-Y5ZGCPVX.js";import"./chunk-OPFVQC3Z.js";import"./chunk-DBB5A44L.js";import{B as G,I as w,M as H,N as J,O as h,P as g,V as E,W as S,X as B,Y as N,Z as j,a as F,d as C,o as A,p as u,q as p,r as x,s as b,t as k,u as L,w as z,z as d}from"./chunk-GQICR5FI.js";import"./chunk-T72LSAK3.js";import"./chunk-N4LM6DK3.js";import"./chunk-GCT3QDJC.js";import"./chunk-RAE67CTP.js";import"./chunk-7S52F6G2.js";import"./chunk-73QAIZKM.js";import"./chunk-RKFUGC6E.js";import"./chunk-YSGDS4H5.js";import"./chunk-EL2KYGGK.js";import{a as v}from"./chunk-QPL4UDOG.js";import"./chunk-P5WXMFOM.js";import"./chunk-N2VZWPJP.js";import"./chunk-QDHLPZKT.js";import"./chunk-HORLN2G6.js";import"./chunk-FJBSYG3T.js";import"./chunk-WZMCOCZ3.js";import"./chunk-PGXMNMPQ.js";import"./chunk-FV22T2G6.js";import"./chunk-4C3N6WGV.js";import"./chunk-MIOWB4UH.js";import"./chunk-MCIAXMHF.js";import"./chunk-FDW632OT.js";import"./chunk-PUGPLE52.js";import"./chunk-4PSUCBRT.js";import"./chunk-3NPR3CPY.js";import"./chunk-DF3664XK.js";import"./chunk-O4HYZYL5.js";import"./chunk-HTRQRB5B.js";import"./chunk-SWRTRF44.js";import"./chunk-RWFKIDH7.js";import"./chunk-THKPSV6M.js";import"./chunk-L4DDZPXD.js";import"./chunk-H4BEXNKD.js";import{a as D}from"./chunk-TBVC64JY.js";import{a as y}from"./chunk-PCBO3IJC.js";import"./chunk-JPOUNVF7.js";import{a as T}from"./chunk-V33I5Q6E.js";import"./chunk-UFBUSQTS.js";import"./chunk-M4ZGL2LG.js";import"./chunk-BH7UVVMX.js";import"./chunk-JDVPJYUH.js";import{b as P}from"./chunk-EGK63SHX.js";import"./chunk-6FME2ZRC.js";import"./chunk-7EGIQ5LI.js";import{a as Q}from"./chunk-CHZ553KP.js";import"./chunk-ZBCNB5YM.js";import"./chunk-UMUEY5TB.js";function lt(o){let t,e,n,i;return{c(){t=b("button"),t.textContent="Check All",e=k("\xA0"),d(t,"class","custombutton svelte-1recp8w"),d(t,"type","button")},m(l,a){u(l,t,a),u(l,e,a),n||(i=z(t,"click",o[0]),n=!0)},p:F,i:F,o:F,d(l){l&&p(t),l&&p(e),n=!1,i()}}}function ct(o){let t=w();function e(){v("storeitems","Check All"),t("checkall")}return[e]}var Y=class extends j{constructor(t){super();N(this,t,ct,lt,C,{})}},Z=Y;function tt(o,t,e){let n=o.slice();return n[6]=t[e][0],n[7]=t[e][1],n}function it(o){let t;return{c(){t=k("All")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function st(o){let t;return{c(){t=k("Main")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function ft(o){let t=o[7]+"",e;return{c(){e=k(t)},m(n,i){u(n,e,i)},p(n,i){i&1&&t!==(t=n[7]+"")&&G(e,t)},d(n){n&&p(e)}}}function et(o){let t,e;function n(){return o[4](o[6])}return t=new q({props:{$$slots:{default:[ft]},$$scope:{ctx:o}}}),t.$on("click",n),{c(){E(t.$$.fragment)},m(i,l){S(t,i,l),e=!0},p(i,l){o=i;let a={};l&1025&&(a.$$scope={dirty:l,ctx:o}),t.$set(a)},i(i){e||(h(t.$$.fragment,i),e=!0)},o(i){g(t.$$.fragment,i),e=!1},d(i){B(t,i)}}}function at(o){let t,e,n,i,l,a,$;n=new q({props:{$$slots:{default:[it]},$$scope:{ctx:o}}}),n.$on("click",o[2]),l=new q({props:{$$slots:{default:[st]},$$scope:{ctx:o}}}),l.$on("click",o[3]);let m=D(o[0].folders),r=[];for(let c=0;c<m.length;c+=1)r[c]=et(tt(o,m,c));let rt=c=>g(r[c],1,1,()=>{r[c]=null});return{c(){t=b("tr"),e=b("td"),E(n.$$.fragment),i=L(),E(l.$$.fragment),a=L();for(let c=0;c<r.length;c+=1)r[c].c();d(e,"colspan","3"),d(e,"class","svelte-1lc41gb"),d(t,"class","fshCenter")},m(c,s){u(c,t,s),A(t,e),S(n,e,null),A(e,i),S(l,e,null),A(e,a);for(let _=0;_<r.length;_+=1)r[_].m(e,null);$=!0},p(c,[s]){let _={};s&1024&&(_.$$scope={dirty:s,ctx:c}),n.$set(_);let V={};if(s&1024&&(V.$$scope={dirty:s,ctx:c}),l.$set(V),s&3){m=D(c[0].folders);let f;for(f=0;f<m.length;f+=1){let M=tt(c,m,f);r[f]?(r[f].p(M,s),h(r[f],1)):(r[f]=et(M),r[f].c(),h(r[f],1),r[f].m(e,null))}for(H(),f=m.length;f<r.length;f+=1)rt(f);J()}},i(c){if(!$){h(n.$$.fragment,c),h(l.$$.fragment,c);for(let s=0;s<m.length;s+=1)h(r[s]);$=!0}},o(c){g(n.$$.fragment,c),g(l.$$.fragment,c),r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)g(r[s]);$=!1},d(c){c&&p(t),B(n),B(l),x(r,c)}}}function mt(o,t,e){let n=w(),{inv:i={folders:{}}}=t;function l(r){v("storeitems","Filter Folder"),n("filter",r)}let a=()=>l("-2"),$=()=>l("-1"),m=r=>l(r);return o.$$set=r=>{"inv"in r&&e(0,i=r.inv)},[i,l,a,$,m]}var ot=class extends j{constructor(t){super();N(this,t,mt,at,C,{inv:0})}},nt=ot;function ut(o,t,e){e.checked=!1;let n=K(e),i=o.items[e.value].folder_id,l=t!==-2&&t!==i;I(n,l),I(n.nextElementSibling,l)}function pt(o,t){O([5,3,R(),0,y(ut,o,Number(t.detail))])}async function dt(){let o=await W();if(!o||!o.folders)return;let t=document.forms[0];new nt({anchor:t,props:{inv:o},target:t.parentNode}).$on("filter",y(pt,o))}function ht(){U().forEach(o=>{o.checked=!o.disabled&&!o.checked})}function $t(){let o=Q(document.forms[0].elements).filter(e=>e.type==="submit")[0];new Z({anchor:o,target:o.parentNode}).$on("checkall",ht)}function _t(){T()&&P("enableFolderFilter")&&dt(),$t(),X()}export{_t as default};
//# sourceMappingURL=storeitems-EVR26CC7.js.map
