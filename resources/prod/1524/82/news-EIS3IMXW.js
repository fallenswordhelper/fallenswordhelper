import{a as U}from"./chunk-5PZT6KLP.js";import{a as x}from"./chunk-DPBN5K6P.js";import"./chunk-5IWKPYLI.js";import{a as c}from"./chunk-PTHOXQXD.js";import{a as v}from"./chunk-WRGSYYRV.js";import{a as T}from"./chunk-K5CAKVDA.js";import{a as y}from"./chunk-CCTXQSLN.js";import{a as n}from"./chunk-MF3BFDWL.js";import"./chunk-SRSFKD6I.js";import{a as k}from"./chunk-QPQYH7ZQ.js";import"./chunk-NDSZEOFH.js";import{a as C}from"./chunk-EV427Z4A.js";import"./chunk-C7PIQX7O.js";import"./chunk-H6PS5VCQ.js";import{a as w}from"./chunk-6ZR46QZG.js";import"./chunk-3VMUJXQR.js";import{b as o}from"./chunk-CBMSPOBL.js";import"./chunk-5E32VBFN.js";import"./chunk-FIUIIBOQ.js";import{a as f}from"./chunk-ZDEOOWYD.js";import{a as g}from"./chunk-MFXNKIYL.js";import"./chunk-2XKKIH7K.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import{a as L}from"./chunk-FPGEPPZC.js";import"./chunk-IRBVAK7D.js";import"./chunk-PF3P35LS.js";import"./chunk-G34A357Q.js";import{b as t}from"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import{V as a,W as i,Y as m,ua as s}from"./chunk-KWAUBU52.js";import"./chunk-TISVYXYU.js";import{a as h}from"./chunk-S3EM322F.js";var _=e=>`${m}creatures&search_name=${encodeURIComponent(e)}`,$=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,P=e=>`${m}realms&search_name=${encodeURIComponent(e)}`,b=e=>`<a href="${P(e)}" target="_blank">${e}</a>`;function E(e){let r=T({href:_(U(e)),target:"_blank"});y(r,e),k(r,e)}function S(e){return $.test(e.lastChild.nodeValue)}function H(e){let r=h($,e.lastChild.nodeValue);return r[2]=b(r[2]),r.slice(1).join("")}function V(e){let r=e.children[0];r.href=_(r.textContent),r.target="_blank"}function R(e){V(e);let r=v({innerHTML:H(e)});e.replaceChild(r,e.lastChild)}function p(){w('.news_body img[src*="/creatures/"]').forEach(E),n("news_body_tavern",o()).filter(S).forEach(R)}var A=(e,r)=>`&nbsp;<a href="${e}&page=2">View ${r} Page 2</a>`;function d(){let e=f(`#pCC a[href="${a}"]`);if(!e)return;c(e,A(a,"Updates"));let r=f(`#pCC a[href="${i}"]`);c(r,A(i,"News"))}var N=e=>C("PvP Ladder",e.children[1]),j=e=>x(g(e.children[2]));function l(){let r=n("news_head_tavern",o()).filter(N).map(j),u=Math.max.apply(null,r);u>t(s)&&L(s,u)}function B(){t("pageTwoLinks")&&d(),t("addUfsgLinks")&&p(),t("trackLadderReset")&&l()}export{B as default};
//# sourceMappingURL=news-EIS3IMXW.js.map
