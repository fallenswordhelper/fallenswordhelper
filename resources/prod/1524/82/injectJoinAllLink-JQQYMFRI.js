import{a as P}from"./chunk-4FGCPPHQ.js";import{a as O}from"./chunk-JY4A3DSP.js";import"./chunk-A336Z3P3.js";import"./chunk-FWL2OWGY.js";import"./chunk-X2QJ4F75.js";import"./chunk-6BVGCO3I.js";import"./chunk-BRCSGVHL.js";import{C as p,E,G as U,X as N,a as g,d as $,ea as D,fa as I,r as s,s as m,t as d,v as h,w as b,x as z,y as v,z as C}from"./chunk-BG5LHYCF.js";import{a as T}from"./chunk-VKNAZHSW.js";import{a as M}from"./chunk-3KOSRNPL.js";import"./chunk-SGIZTIIQ.js";import"./chunk-WHTJ2U55.js";import{a as L}from"./chunk-VAQJPTXA.js";import"./chunk-H6PS5VCQ.js";import"./chunk-6ZR46QZG.js";import"./chunk-3VMUJXQR.js";import{a as A}from"./chunk-5E32VBFN.js";import{a as B}from"./chunk-PD56GEXW.js";import"./chunk-MFXNKIYL.js";import"./chunk-2XKKIH7K.js";import"./chunk-JZI3CAHX.js";import{a as q}from"./chunk-L5KUFFVQ.js";import"./chunk-UYGGJ3YF.js";import"./chunk-EE5B6X24.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import"./chunk-G34A357Q.js";import"./chunk-FEFVGSP2.js";import"./chunk-EJENCRJV.js";import"./chunk-IWCA3B2P.js";import"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import"./chunk-OIO6LGXZ.js";import{M as S,N as w}from"./chunk-KWAUBU52.js";import{a as _}from"./chunk-TISVYXYU.js";import"./chunk-S3EM322F.js";function x(n){return O({subcmd2:"joinall",group:n})}function K(n){return q({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:n})}function k(n){return B(n.map(K))}function J(n){return M(x,k,n)}function Q(n){let t,o,e,l,c,f;return{c(){t=h("p"),o=b("Join all attack groups"),e=b(n[2]),l=b("."),p(t,"class","notification-content"),p(t,"style",n[3])},m(i,r){m(i,t,r),s(t,o),s(t,e),s(t,l),c||(f=C(t,"click",n[5],{once:!0}),c=!0)},p(i,r){r&4&&E(e,i[2]),r&8&&p(t,"style",i[3])},d(i){i&&d(t),c=!1,f()}}}function W(n){let t,o,e={ctx:n,current:null,token:null,hasCatch:!1,pending:Z,then:Y,catch:X};return N(o=n[4](),e),{c(){t=v(),e.block.c()},m(l,c){m(l,t,c),e.block.m(l,e.anchor=c),e.mount=()=>t.parentNode,e.anchor=t},p(l,c){n=l},d(l){l&&d(t),e.block.d(l),e.token=null,e=null}}}function X(n){return{c:g,m:g,d:g}}function Y(n){let t;return{c(){t=h("p"),t.textContent="Joined.",p(t,"class","notification-content"),U(t,"line-height","32px")},m(o,e){m(o,t,e)},d(o){o&&d(t)}}}function Z(n){let t,o;return{c(){t=h("span"),o=b("'"),p(t,"class","notification-content fshSpinner fshRelative")},m(e,l){m(e,t,l),m(e,o,l)},d(e){e&&d(t),e&&d(o)}}}function tt(n){let t,o,e,l;function c(r,u){return r[0]?W:Q}let f=c(n,-1),i=f(n);return{c(){t=h("li"),o=h("a"),e=h("span"),l=z(),i.c(),p(e,"class","notification-icon"),p(o,"href",n[1]),p(t,"class","notification")},m(r,u){m(r,t,u),s(t,o),s(o,e),s(o,l),i.m(o,null)},p(r,[u]){f===(f=c(r,u))&&i?i.p(r,u):(i.d(1),i=f(r),i&&(i.c(),i.m(o,null))),u&2&&p(o,"href",r[1])},i:g,o:g,d(r){r&&d(t),i.d()}}}function nt(n,t,o){let e=a=>!_.enableMaxGroupSizeToJoin||a.members.length<_.maxGroupSizeToJoin,l=a=>a.name===L(),c=a=>!a.members.find(l),f=a=>a.id,i=0,r=S,u="",y="height: 24px; padding: 6px 2px 10px;";_.enableMaxGroupSizeToJoin&&(r=w,u=` less than size ${_.maxGroupSizeToJoin}`,y="height: 35px; padding: 3px 2px 2px;");async function V(a){let G=a.r.filter(e).filter(c).map(f);G.length&&await J(G)}async function F(){let a=await P();a.s&&await V(a)}function H(a){a.preventDefault(),T("notification","Join All"),o(0,i=1)}return[i,r,u,y,F,H]}var j=class extends I{constructor(t){super(),D(this,t,nt,tt,$,{})}},R=j;function et(n){return new R({anchor:n.nextElementSibling,target:n.parentNode})}function ot(){let n=A("notification-guild-group");n&&et(n)}export{ot as default};
//# sourceMappingURL=injectJoinAllLink-JQQYMFRI.js.map
