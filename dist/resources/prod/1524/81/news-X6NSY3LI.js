import{a as U}from"./chunk-HUHCD4XC.js";import{a as x}from"./chunk-JWKKXSOQ.js";import"./chunk-EYNT3Q7T.js";import{a as c}from"./chunk-4CSQPYP4.js";import{a as v}from"./chunk-76VE6QGR.js";import{a as T}from"./chunk-JJI3SKNS.js";import{a as y}from"./chunk-ATB4WLZR.js";import{a as n}from"./chunk-LVAJIHIF.js";import"./chunk-EJAPIT2N.js";import{a as k}from"./chunk-KHQZO2PT.js";import"./chunk-WMUUSPIG.js";import{a as C}from"./chunk-DKG6D46Z.js";import"./chunk-HOFZHHFM.js";import"./chunk-DHIC45XN.js";import{a as w}from"./chunk-VIE5ZNPH.js";import"./chunk-OKCEI7IO.js";import{b as o}from"./chunk-U2LW7DMT.js";import"./chunk-CF6OUIZ5.js";import"./chunk-6MPENS2G.js";import{a as f}from"./chunk-LZHFM6TG.js";import{a as g}from"./chunk-RVROEHXL.js";import"./chunk-EPL4X55B.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import"./chunk-6TE7Y3DR.js";import{a as L}from"./chunk-JNLLRLHL.js";import"./chunk-IPQXTCLP.js";import"./chunk-3FPE4KHJ.js";import"./chunk-SOFFOM3C.js";import{b as t}from"./chunk-SYO7WFPA.js";import"./chunk-FNQX6KHV.js";import{V as a,W as i,Y as m,ua as s}from"./chunk-7Q74Q23I.js";import"./chunk-B3OIOQDS.js";import{a as h}from"./chunk-7X7SMYZT.js";var _=e=>`${m}creatures&search_name=${encodeURIComponent(e)}`,$=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,P=e=>`${m}realms&search_name=${encodeURIComponent(e)}`,b=e=>`<a href="${P(e)}" target="_blank">${e}</a>`;function E(e){let r=T({href:_(U(e)),target:"_blank"});y(r,e),k(r,e)}function S(e){return $.test(e.lastChild.nodeValue)}function H(e){let r=h($,e.lastChild.nodeValue);return r[2]=b(r[2]),r.slice(1).join("")}function V(e){let r=e.children[0];r.href=_(r.textContent),r.target="_blank"}function R(e){V(e);let r=v({innerHTML:H(e)});e.replaceChild(r,e.lastChild)}function p(){w('.news_body img[src*="/creatures/"]').forEach(E),n("news_body_tavern",o()).filter(S).forEach(R)}var A=(e,r)=>`&nbsp;<a href="${e}&page=2">View ${r} Page 2</a>`;function d(){let e=f(`#pCC a[href="${a}"]`);if(!e)return;c(e,A(a,"Updates"));let r=f(`#pCC a[href="${i}"]`);c(r,A(i,"News"))}var N=e=>C("PvP Ladder",e.children[1]),j=e=>x(g(e.children[2]));function l(){let r=n("news_head_tavern",o()).filter(N).map(j),u=Math.max.apply(null,r);u>t(s)&&L(s,u)}function B(){t("pageTwoLinks")&&d(),t("addUfsgLinks")&&p(),t("trackLadderReset")&&l()}export{B as default};
//# sourceMappingURL=news-X6NSY3LI.js.map
