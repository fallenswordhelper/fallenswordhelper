import{A as a,D as I,P as r,a as Z,b as V,d as W,ia as C,ja as x,s as d,t as g,u as m,w as G,x as b}from"./chunk-TVNPLL64.js";import{a as N}from"./chunk-S7AF3SZF.js";import{c as p}from"./chunk-R7J7NY4A.js";function X(n){let l,t,s,e,u;return{c(){l=G("label"),t=G("input"),s=b(`
  Select items in ST`),I(t,"type","checkbox"),I(t,"class","svelte-f8757j")},m(c,i){g(c,l,i),d(l,t),t.checked=n[0],d(l,s),e||(u=[a(t,"change",n[2]),a(t,"change",n[1])],e=!0)},p(c,[i]){i&1&&(t.checked=c[0])},i:Z,o:Z,d(c){c&&m(l),e=!1,V(u)}}}var B="selectST";function S(n,l,t){let s=r(),{inSt:e=null}=l;e=p(B);function u(){N(B,e),s("toggle")}function c(){e=this.checked,t(0,e)}return n.$$set=i=>{"inSt"in i&&t(0,e=i.inSt)},[e,u,c]}var o=class extends x{constructor(l){super(),C(this,l,S,X,W,{inSt:0})}},z=o;export{z as a};
//# sourceMappingURL=chunk-X4F6QEH6.js.map
