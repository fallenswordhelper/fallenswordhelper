import{a as U}from"./chunk-3Q3HFNOO.js";import{a as x}from"./chunk-QHW7R23D.js";import{a as p}from"./chunk-MTW3GLVW.js";import"./chunk-YCWFPE5S.js";import{a as v}from"./chunk-L2BZTPQS.js";import{a as y}from"./chunk-ZVLZEKHJ.js";import{a as L}from"./chunk-DT4L6H53.js";import{a}from"./chunk-X6X25TQC.js";import"./chunk-FLANWCWH.js";import{a as k}from"./chunk-WEH2BEPF.js";import"./chunk-S4LJSUOM.js";import{a as T}from"./chunk-FQH3XCI6.js";import"./chunk-OZO3C2DW.js";import"./chunk-GMLTBP5U.js";import{b as n}from"./chunk-MVLZ5DIF.js";import"./chunk-RLMEWYFJ.js";import"./chunk-V6KZDOYH.js";import{a as c}from"./chunk-X6HXFDDM.js";import{a as g}from"./chunk-HDDSTVDW.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import"./chunk-5AMVPEUS.js";import{a as w}from"./chunk-BSRRLYDA.js";import"./chunk-EEOI3QHS.js";import"./chunk-E5RHLETX.js";import{b as r}from"./chunk-5IFOIBKY.js";import{V as i,W as m,Y as s,ua as f}from"./chunk-LGYGKPKS.js";import{a as C}from"./chunk-A4HY7BPZ.js";import"./chunk-XR4XHCV2.js";import"./chunk-VX5V3MQE.js";import"./chunk-C4N36YS5.js";import"./chunk-DG6P646J.js";import"./chunk-OXVY43H4.js";import"./chunk-QDZWRTTK.js";import{a as h}from"./chunk-WWWWNWRL.js";var _=e=>`${s}creatures&search_name=${encodeURIComponent(e)}`,$=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,P=e=>`${s}realms&search_name=${encodeURIComponent(e)}`,b=e=>`<a href="${P(e)}" target="_blank">${e}</a>`;function E(e){let t=U(e);if(!t)return;let o=y({href:_(t.split("(")[0].trim()),target:"_blank"});L(o,e),k(o,e)}function S(e){return $.test(e.lastChild.nodeValue)}function H(e){let t=h($,e.lastChild.nodeValue);return t[2]=b(t[2]),t.slice(1).join("")}function V(e){let t=e.children[0];t.href=_(t.textContent),t.target="_blank"}function R(e){V(e);let t=v({innerHTML:H(e)});e.replaceChild(t,e.lastChild)}function d(){C('.news_body img[src*="/creatures/"]').forEach(E),a("news_body_tavern",n()).filter(S).forEach(R)}var A=(e,t)=>`&nbsp;<a href="${e}&page=2">View ${t} Page 2</a>`;function l(){let e=c(`#pCC a[href="${i}"]`);if(!e)return;p(e,A(i,"Updates"));let t=c(`#pCC a[href="${m}"]`);p(t,A(m,"News"))}var N=e=>T("PvP Ladder",e.children[1]),j=e=>x(g(e.children[2]));function u(){let t=a("news_head_tavern",n()).filter(N).map(j),o=Math.max.apply(null,t);o>r(f)&&w(f,o)}function B(){r("pageTwoLinks")&&l(),r("addUfsgLinks")&&d(),r("trackLadderReset")&&u()}export{B as default};
//# sourceMappingURL=news-7SZUOUM6.js.map
