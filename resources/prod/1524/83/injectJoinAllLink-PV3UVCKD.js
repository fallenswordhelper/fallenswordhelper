import{a as P}from"./chunk-VE2ZJVIV.js";import{a as O}from"./chunk-GMXBKROV.js";import"./chunk-RX5J4B35.js";import"./chunk-FLHETUE6.js";import"./chunk-NO7SFINI.js";import{a as L}from"./chunk-XYV3WFPP.js";import"./chunk-MPETHKNA.js";import{a as z}from"./chunk-VSWYMKAA.js";import"./chunk-T6VFD3IX.js";import{a as A}from"./chunk-SDVU75NC.js";import{a as v}from"./chunk-7RWPOOJL.js";import"./chunk-GOGSW6S4.js";import{a as $}from"./chunk-6Z43IAS3.js";import"./chunk-FQRLW5RO.js";import"./chunk-5BP4JVZE.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import"./chunk-WFCAIBUQ.js";import{C as p,E as D,G as I,X as M,a as g,d as C,ea as q,fa as B,r as s,s as m,t as d,v as h,w as b,x as E,y as U,z as N}from"./chunk-N4CD3AMK.js";import"./chunk-R46NFNRI.js";import"./chunk-5IIEF6F7.js";import{a as T}from"./chunk-IBDVBQUM.js";import"./chunk-V4PGHHTG.js";import"./chunk-BG6TMPV6.js";import"./chunk-KA75H6XT.js";import"./chunk-2H46HLMH.js";import"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import{M as S,N as w}from"./chunk-XMFVZQFS.js";import{a as _}from"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function x(n){return O({subcmd2:"joinall",group:n})}function K(n){return $({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:n})}function k(n){return v(n.map(K))}function J(n){return L(x,k,n)}function Q(n){let t,o,e,l,c,f;return{c(){t=h("p"),o=b("Join all attack groups"),e=b(n[2]),l=b("."),p(t,"class","notification-content"),p(t,"style",n[3])},m(i,r){m(i,t,r),s(t,o),s(t,e),s(t,l),c||(f=N(t,"click",n[5],{once:!0}),c=!0)},p(i,r){r&4&&D(e,i[2]),r&8&&p(t,"style",i[3])},d(i){i&&d(t),c=!1,f()}}}function W(n){let t,o,e={ctx:n,current:null,token:null,hasCatch:!1,pending:Z,then:Y,catch:X};return M(o=n[4](),e),{c(){t=U(),e.block.c()},m(l,c){m(l,t,c),e.block.m(l,e.anchor=c),e.mount=()=>t.parentNode,e.anchor=t},p(l,c){n=l},d(l){l&&d(t),e.block.d(l),e.token=null,e=null}}}function X(n){return{c:g,m:g,d:g}}function Y(n){let t;return{c(){t=h("p"),t.textContent="Joined.",p(t,"class","notification-content"),I(t,"line-height","32px")},m(o,e){m(o,t,e)},d(o){o&&d(t)}}}function Z(n){let t,o;return{c(){t=h("span"),o=b("'"),p(t,"class","notification-content fshSpinner fshRelative")},m(e,l){m(e,t,l),m(e,o,l)},d(e){e&&d(t),e&&d(o)}}}function tt(n){let t,o,e,l;function c(r,u){return r[0]?W:Q}let f=c(n,-1),i=f(n);return{c(){t=h("li"),o=h("a"),e=h("span"),l=E(),i.c(),p(e,"class","notification-icon"),p(o,"href",n[1]),p(t,"class","notification")},m(r,u){m(r,t,u),s(t,o),s(o,e),s(o,l),i.m(o,null)},p(r,[u]){f===(f=c(r,u))&&i?i.p(r,u):(i.d(1),i=f(r),i&&(i.c(),i.m(o,null))),u&2&&p(o,"href",r[1])},i:g,o:g,d(r){r&&d(t),i.d()}}}function nt(n,t,o){let e=a=>!_.enableMaxGroupSizeToJoin||a.members.length<_.maxGroupSizeToJoin,l=a=>a.name===z(),c=a=>!a.members.find(l),f=a=>a.id,i=0,r=S,u="",y="height: 24px; padding: 6px 2px 10px;";_.enableMaxGroupSizeToJoin&&(r=w,u=` less than size ${_.maxGroupSizeToJoin}`,y="height: 35px; padding: 3px 2px 2px;");async function V(a){let G=a.r.filter(e).filter(c).map(f);G.length&&await J(G)}async function F(){let a=await P();a.s&&await V(a)}function H(a){a.preventDefault(),T("notification","Join All"),o(0,i=1)}return[i,r,u,y,F,H]}var j=class extends B{constructor(t){super(),q(this,t,nt,tt,C,{})}},R=j;function et(n){return new R({anchor:n.nextElementSibling,target:n.parentNode})}function ot(){let n=A("notification-guild-group");n&&et(n)}export{ot as default};
//# sourceMappingURL=injectJoinAllLink-PV3UVCKD.js.map
