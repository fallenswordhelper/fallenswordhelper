import{a as U}from"./chunk-H4I42WP4.js";import{a as x}from"./chunk-IN5EENPX.js";import{a as p}from"./chunk-D2VVBBLO.js";import"./chunk-ZBJMN2JX.js";import{a as v}from"./chunk-KD2TQDC2.js";import{a as y}from"./chunk-UJ3AJPRE.js";import{a as L}from"./chunk-NWSF57II.js";import{a}from"./chunk-AHP32JKT.js";import"./chunk-EMGUCCKH.js";import{a as k}from"./chunk-KKBP66LG.js";import"./chunk-P6DVXZYM.js";import{a as T}from"./chunk-KZGRM7CI.js";import"./chunk-XZESHS3Q.js";import"./chunk-7RUZO2DE.js";import{b as n}from"./chunk-P4Q4L6W3.js";import"./chunk-37F6LHIG.js";import"./chunk-IY43JASL.js";import{a as c}from"./chunk-XR4F2JTY.js";import{a as g}from"./chunk-AXBARIP4.js";import"./chunk-HOUKHWMK.js";import"./chunk-27OJ4RCD.js";import"./chunk-SBMEJVSZ.js";import{a as w}from"./chunk-CGJEUKDI.js";import"./chunk-Z6FGNVMR.js";import"./chunk-HI42KIAI.js";import{b as r}from"./chunk-5JUKP3OG.js";import{V as i,W as m,Y as s,ua as f}from"./chunk-3TICXWSZ.js";import{a as C}from"./chunk-YJLZLU4M.js";import"./chunk-Y7AIRXY2.js";import"./chunk-EORP6S4E.js";import"./chunk-6IEFQVWJ.js";import"./chunk-XVK7UPUF.js";import"./chunk-LEA2LHIQ.js";import"./chunk-YHV3XLCG.js";import{a as h}from"./chunk-MZSOSQQ4.js";var _=e=>`${s}creatures&search_name=${encodeURIComponent(e)}`,$=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,P=e=>`${s}realms&search_name=${encodeURIComponent(e)}`,b=e=>`<a href="${P(e)}" target="_blank">${e}</a>`;function E(e){let t=U(e);if(!t)return;let o=y({href:_(t.split("(")[0].trim()),target:"_blank"});L(o,e),k(o,e)}function S(e){return $.test(e.lastChild.nodeValue)}function H(e){let t=h($,e.lastChild.nodeValue);return t[2]=b(t[2]),t.slice(1).join("")}function V(e){let t=e.children[0];t.href=_(t.textContent),t.target="_blank"}function R(e){V(e);let t=v({innerHTML:H(e)});e.replaceChild(t,e.lastChild)}function d(){C('.news_body img[src*="/creatures/"]').forEach(E),a("news_body_tavern",n()).filter(S).forEach(R)}var A=(e,t)=>`&nbsp;<a href="${e}&page=2">View ${t} Page 2</a>`;function l(){let e=c(`#pCC a[href="${i}"]`);if(!e)return;p(e,A(i,"Updates"));let t=c(`#pCC a[href="${m}"]`);p(t,A(m,"News"))}var N=e=>T("PvP Ladder",e.children[1]),j=e=>x(g(e.children[2]));function u(){let t=a("news_head_tavern",n()).filter(N).map(j),o=Math.max.apply(null,t);o>r(f)&&w(f,o)}function B(){r("pageTwoLinks")&&l(),r("addUfsgLinks")&&d(),r("trackLadderReset")&&u()}export{B as default};
//# sourceMappingURL=news-DSOWVTQK.js.map