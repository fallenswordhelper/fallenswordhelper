import{a as O,b as P}from"./chunk-MBVGPYMU.js";import"./chunk-Z5PXTZ4Q.js";import"./chunk-HGUNGKV5.js";import"./chunk-BRZIL47S.js";import{A as p,C as I,E as M,U as q,a as _,aa as B,ba as L,d as U,p as s,q as m,r as d,t as h,u as b,v as E,w as N,x as D}from"./chunk-BNPFZHGS.js";import"./chunk-DRXOYIKT.js";import{a as C}from"./chunk-RPABO2SK.js";import{a as v}from"./chunk-OU75PILE.js";import"./chunk-63VD2FSJ.js";import"./chunk-W4Y6JSA7.js";import{a as $}from"./chunk-CZDXRXUL.js";import"./chunk-3FI2HRMQ.js";import"./chunk-TTKNE24C.js";import"./chunk-JRMPLNFZ.js";import{a as z}from"./chunk-FFD2X52P.js";import"./chunk-UC3GAOGO.js";import{a as T}from"./chunk-6FENTVGJ.js";import"./chunk-DPMIXN5L.js";import"./chunk-BH2HHYW5.js";import"./chunk-N4QHNM2E.js";import"./chunk-RNWAALFB.js";import{a as A}from"./chunk-T5HQ7FPX.js";import"./chunk-SON5T5EI.js";import"./chunk-CQJA6XZZ.js";import"./chunk-J55DBM2B.js";import"./chunk-YXCGOJCF.js";import"./chunk-GQZRPO65.js";import"./chunk-IRX7VNA6.js";import"./chunk-ZOSLBUG4.js";import"./chunk-INHQR3KU.js";import"./chunk-O5WVQXEQ.js";import{L as S,M as w}from"./chunk-KIM4IHFF.js";import{a as g}from"./chunk-AQ577ZPT.js";function K(n){return T({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:n})}function k(n){return z(n.map(K))}function x(n){return O({subcmd2:"joinall",group:n})}function J(n){return v(x,k,n)}function Q(n){let t,o,e,l,c,f;return{c(){t=h("p"),o=b("Join all attack groups"),e=b(n[2]),l=b("."),p(t,"class","notification-content"),p(t,"style",n[3])},m(i,r){m(i,t,r),s(t,o),s(t,e),s(t,l),c||(f=D(t,"click",n[5],{once:!0}),c=!0)},p(i,r){r&4&&I(e,i[2]),r&8&&p(t,"style",i[3])},d(i){i&&d(t),c=!1,f()}}}function W(n){let t,o,e={ctx:n,current:null,token:null,hasCatch:!1,pending:Z,then:Y,catch:X};return q(o=n[4](),e),{c(){t=N(),e.block.c()},m(l,c){m(l,t,c),e.block.m(l,e.anchor=c),e.mount=()=>t.parentNode,e.anchor=t},p(l,c){n=l},d(l){l&&d(t),e.block.d(l),e.token=null,e=null}}}function X(n){return{c:_,m:_,d:_}}function Y(n){let t;return{c(){t=h("p"),t.textContent="Joined.",p(t,"class","notification-content"),M(t,"line-height","32px")},m(o,e){m(o,t,e)},d(o){o&&d(t)}}}function Z(n){let t,o;return{c(){t=h("span"),o=b("'"),p(t,"class","notification-content fshSpinner fshRelative")},m(e,l){m(e,t,l),m(e,o,l)},d(e){e&&d(t),e&&d(o)}}}function tt(n){let t,o,e,l;function c(r,u){return r[0]?W:Q}let f=c(n,-1),i=f(n);return{c(){t=h("li"),o=h("a"),e=h("span"),l=E(),i.c(),p(e,"class","notification-icon"),p(o,"href",n[1]),p(t,"class","notification")},m(r,u){m(r,t,u),s(t,o),s(o,e),s(o,l),i.m(o,null)},p(r,[u]){f===(f=c(r,u))&&i?i.p(r,u):(i.d(1),i=f(r),i&&(i.c(),i.m(o,null))),u&2&&p(o,"href",r[1])},i:_,o:_,d(r){r&&d(t),i.d()}}}function nt(n,t,o){let e=a=>!g.enableMaxGroupSizeToJoin||a.members.length<g.maxGroupSizeToJoin,l=a=>a.name===$(),c=a=>!a.members.find(l),f=a=>a.id,i=0,r=S,u="",y="height: 24px; padding: 6px 2px 10px;";g.enableMaxGroupSizeToJoin&&(r=w,u=` less than size ${g.maxGroupSizeToJoin}`,y="height: 35px; padding: 3px 2px 2px;");async function V(a){let G=a.r.filter(e).filter(c).map(f);G.length&&await J(G)}async function F(){let a=await P();a.s&&await V(a)}function H(a){a.preventDefault(),C("notification","Join All"),o(0,i=1)}return[i,r,u,y,F,H]}var j=class extends L{constructor(t){super(),B(this,t,nt,tt,U,{})}},R=j;function et(n){return new R({anchor:n,target:n.parentNode})}function ot(){let n=A("notification-guild-group");n&&et(n)}export{ot as default};
//# sourceMappingURL=injectJoinAllLink-3RRACLDX.js.map