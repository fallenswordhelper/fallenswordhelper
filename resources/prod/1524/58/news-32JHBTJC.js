import{a as w}from"./chunk-AWSEMNPD.js";import{a as P}from"./chunk-KXDIIP67.js";import{a as p}from"./chunk-LE4R2UZU.js";import{a as n}from"./chunk-56DZBOU2.js";import{a as A}from"./chunk-IIQPZFRQ.js";import{a as T}from"./chunk-JQ6TFVPK.js";import"./chunk-KANBDIY6.js";import{a as c}from"./chunk-7VEIRK6Q.js";import{a as L}from"./chunk-LM2VUNGX.js";import"./chunk-HGQBSNNF.js";import{b as o}from"./chunk-7KGOEIPC.js";import{a as C}from"./chunk-KIGZSTQN.js";import{a as g}from"./chunk-PAAWM2NJ.js";import"./chunk-7QZ7K4JT.js";import"./chunk-JNMWULRZ.js";import"./chunk-5YYRQ4XP.js";import"./chunk-BOK6PI4C.js";import{a as y}from"./chunk-V6QPYEQA.js";import"./chunk-E6LT46ZX.js";import"./chunk-B4CACURR.js";import"./chunk-X3N42HIO.js";import"./chunk-EMXVU7FX.js";import"./chunk-PZET6DEP.js";import{a as k}from"./chunk-44LY5GOE.js";import"./chunk-TXXA2PXS.js";import"./chunk-353SUQQH.js";import{a as h}from"./chunk-IKPUDF3E.js";import{b as r}from"./chunk-ICRHQMJP.js";import"./chunk-FJHRVDDP.js";import"./chunk-SVFIEWQV.js";import{S as a,T as m,V as s,ra as i}from"./chunk-NEZAPTHY.js";import"./chunk-GTEPU6L3.js";import"./chunk-J6WQ3WGO.js";var v=e=>`${s}creatures&search_name=${encodeURIComponent(e)}`,U=/( titan has been spotted in )([^!]+)(!)/,E=e=>`${s}realms&search_name=${encodeURIComponent(e)}`,S=e=>`<a href="${E(e)}" target="_blank">${e}</a>`;function _(e){let t=A({href:v(w(e)),target:"_blank"});C(t,e),y(t,e)}function $(e){return U.test(e.lastChild.nodeValue)}function V(e){let t=e.lastChild.nodeValue.match(U);return t[2]=S(t[2]),t.slice(1).join("")}function H(e){let t=e.children[0];t.href=v(t.textContent),t.target="_blank"}function b(e){H(e);let t=T({innerHTML:V(e)});e.replaceChild(t,e.lastChild)}function f(){k('.news_body img[src*="/creatures/"]').forEach(_),n("news_body_tavern",o).filter($).forEach(b)}var x=(e,t)=>`&nbsp;<a href="${e}&page=2">View ${t} Page 2</a>`;function l(){let e=c(`#pCC a[href="${a}"]`);if(!e)return;p(e,x(a,"Updates"));let t=c(`#pCC a[href="${m}"]`);p(t,x(m,"News"))}var B=e=>g("PvP Ladder",e.children[1]),N=e=>P(h(e.children[2]));function d(){let t=n("news_head_tavern",o).filter(B).map(N),u=Math.max.apply(null,t);u>r(i)&&L(i,u)}function R(){r("pageTwoLinks")&&l(),r("addUfsgLinks")&&f(),r("trackLadderReset")&&d()}export{R as default};
//# sourceMappingURL=news-32JHBTJC.js.map
