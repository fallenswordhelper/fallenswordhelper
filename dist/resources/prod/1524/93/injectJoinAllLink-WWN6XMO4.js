import{a as P}from"./chunk-HH2BAJBF.js";import{a as O}from"./chunk-3H5FBYGC.js";import"./chunk-OFVL4Q2L.js";import"./chunk-HK3FJNIM.js";import"./chunk-FSSBYC3E.js";import{a as L}from"./chunk-SDADCBWU.js";import"./chunk-TKJCL3KA.js";import{a as z}from"./chunk-POVOVHEU.js";import"./chunk-GOQRAVSB.js";import{a as A}from"./chunk-5HI4ILOP.js";import{a as v}from"./chunk-QCQENXXV.js";import"./chunk-L4JCGVZD.js";import{a as $}from"./chunk-R5QRYD7G.js";import"./chunk-RDAHQVBW.js";import"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import"./chunk-ZDSFJLAY.js";import{C as p,E as D,G as I,Z as M,a as g,d as C,ga as q,ha as B,r as s,s as m,t as d,v as h,w as b,x as E,y as U,z as N}from"./chunk-OR3S6YUT.js";import"./chunk-XM37SDUA.js";import"./chunk-MBZ7GUCJ.js";import{a as T}from"./chunk-VRYLUPGH.js";import"./chunk-NH6FAU6Q.js";import"./chunk-LEOH7BX4.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{M as S,N as w}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import{a as _}from"./chunk-3WE6KSRQ.js";function x(n){return O({subcmd2:"joinall",group:n})}function K(n){return $({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:n})}function k(n){return v(n.map(K))}function J(n){return L(x,k,n)}function Q(n){let t,o,e,l,c,f;return{c(){t=h("p"),o=b("Join all attack groups"),e=b(n[2]),l=b("."),p(t,"class","notification-content"),p(t,"style",n[3])},m(i,r){m(i,t,r),s(t,o),s(t,e),s(t,l),c||(f=N(t,"click",n[5],{once:!0}),c=!0)},p(i,r){r&4&&D(e,i[2]),r&8&&p(t,"style",i[3])},d(i){i&&d(t),c=!1,f()}}}function W(n){let t,o,e={ctx:n,current:null,token:null,hasCatch:!1,pending:Z,then:Y,catch:X};return M(o=n[4](),e),{c(){t=U(),e.block.c()},m(l,c){m(l,t,c),e.block.m(l,e.anchor=c),e.mount=()=>t.parentNode,e.anchor=t},p(l,c){n=l},d(l){l&&d(t),e.block.d(l),e.token=null,e=null}}}function X(n){return{c:g,m:g,d:g}}function Y(n){let t;return{c(){t=h("p"),t.textContent="Joined.",p(t,"class","notification-content"),I(t,"line-height","32px")},m(o,e){m(o,t,e)},d(o){o&&d(t)}}}function Z(n){let t,o;return{c(){t=h("span"),o=b("'"),p(t,"class","notification-content fshSpinner fshRelative")},m(e,l){m(e,t,l),m(e,o,l)},d(e){e&&d(t),e&&d(o)}}}function tt(n){let t,o,e,l;function c(r,u){return r[0]?W:Q}let f=c(n,-1),i=f(n);return{c(){t=h("li"),o=h("a"),e=h("span"),l=E(),i.c(),p(e,"class","notification-icon"),p(o,"href",n[1]),p(t,"class","notification")},m(r,u){m(r,t,u),s(t,o),s(o,e),s(o,l),i.m(o,null)},p(r,[u]){f===(f=c(r,u))&&i?i.p(r,u):(i.d(1),i=f(r),i&&(i.c(),i.m(o,null))),u&2&&p(o,"href",r[1])},i:g,o:g,d(r){r&&d(t),i.d()}}}function nt(n,t,o){let e=a=>!_.enableMaxGroupSizeToJoin||a.members.length<_.maxGroupSizeToJoin,l=a=>a.name===z(),c=a=>!a.members.find(l),f=a=>a.id,i=0,r=S,u="",y="height: 24px; padding: 6px 2px 10px;";_.enableMaxGroupSizeToJoin&&(r=w,u=` less than size ${_.maxGroupSizeToJoin}`,y="height: 35px; padding: 3px 2px 2px;");async function V(a){let G=a.r.filter(e).filter(c).map(f);G.length&&await J(G)}async function F(){let a=await P();a.s&&await V(a)}function H(a){a.preventDefault(),T("notification","Join All"),o(0,i=1)}return[i,r,u,y,F,H]}var j=class extends B{constructor(t){super(),q(this,t,nt,tt,C,{})}},R=j;function et(n){return new R({anchor:n.nextElementSibling,target:n.parentNode})}function ot(){let n=A("notification-guild-group");n&&et(n)}export{ot as default};
//# sourceMappingURL=injectJoinAllLink-WWN6XMO4.js.map