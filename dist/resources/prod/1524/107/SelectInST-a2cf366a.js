import{S as s,L as e,M as t,N as a,a1 as n,P as c,R as i,T as o,W as l,Y as r,Z as u,_ as S,be as f,af as h,ab as p}from"./calfSystem-2fff342b.js"
function d(s){let e,t,f,h,p
return{c(){e=a("label"),t=a("input"),f=n("\n  Select items in ST"),c(t,"type","checkbox"),c(t,"class","svelte-f8757j")},m(a,n){i(a,e,n),o(e,t),t.checked=s[0],o(e,f),h||(p=[l(t,"change",s[2]),l(t,"change",s[1])],h=!0)},p(s,[e]){1&e&&(t.checked=s[0])},i:r,o:r,d(s){s&&u(e),h=!1,S(p)}}}const m="selectST"
function b(s,e,t){const a=f()
let{inSt:n=null}=e
return n=h(m),s.$$set=s=>{"inSt"in s&&t(0,n=s.inSt)},[n,function(){p(m,n),a("toggle")},function(){n=this.checked,t(0,n)}]}class g extends s{constructor(s){super(),e(this,s,b,d,t,{inSt:0})}}export{g as S}
//# sourceMappingURL=SelectInST-a2cf366a.js.map
