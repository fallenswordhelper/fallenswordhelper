import{a as U}from"./chunk-VX5PBLKR.js";import{a as x}from"./chunk-23NJQDFG.js";import{a as p}from"./chunk-QZTOKJ5E.js";import{a as v}from"./chunk-GIB7COBK.js";import"./chunk-MKO4YC2H.js";import"./chunk-X6LLQZN7.js";import{a as y}from"./chunk-PX6NXDG4.js";import{a}from"./chunk-WIQ6XRGI.js";import{a as w}from"./chunk-Y4YBVKK5.js";import{a as k}from"./chunk-B2YROL26.js";import"./chunk-UHGSE7LB.js";import{a as T}from"./chunk-AXFN4LBO.js";import"./chunk-6MJKEXGN.js";import"./chunk-YQXIMIAT.js";import{a as L}from"./chunk-4X57LHCN.js";import"./chunk-6QG6UGYA.js";import{b as n}from"./chunk-JMO45TBP.js";import"./chunk-JEN6RTKA.js";import"./chunk-3LGJ7KIX.js";import{a as c}from"./chunk-F3LQDOUE.js";import{a as g}from"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import"./chunk-7PPLM4HV.js";import{a as C}from"./chunk-SLJOWJGX.js";import"./chunk-QLD5CDI7.js";import"./chunk-ULD7YHXO.js";import"./chunk-ZKTRQIGV.js";import{c as r}from"./chunk-O3NTOCCL.js";import{V as i,W as m,Y as s,ua as f}from"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-B2AFMQVU.js";import{a as h}from"./chunk-7D7WYX4S.js";var _=e=>`${s}creatures&search_name=${encodeURIComponent(e)}`,$=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,P=e=>`${s}realms&search_name=${encodeURIComponent(e)}`,b=e=>`<a href="${P(e)}" target="_blank">${e}</a>`;function E(e){let t=U(e);if(!t)return;let o=w({href:_(t.split("(")[0].trim()),target:"_blank"});y(o,e),k(o,e)}function S(e){return $.test(e.lastChild.nodeValue)}function H(e){let t=h($,e.lastChild.nodeValue);return t[2]=b(t[2]),t.slice(1).join("")}function V(e){let t=e.children[0];t.href=_(t.textContent),t.target="_blank"}function R(e){V(e);let t=v({innerHTML:H(e)});e.replaceChild(t,e.lastChild)}function d(){L('.news_body img[src*="/creatures/"]').forEach(E),a("news_body_tavern",n()).filter(S).forEach(R)}var A=(e,t)=>`&nbsp;<a href="${e}&page=2">View ${t} Page 2</a>`;function l(){let e=c(`#pCC a[href="${i}"]`);if(!e)return;p(e,A(i,"Updates"));let t=c(`#pCC a[href="${m}"]`);p(t,A(m,"News"))}var N=e=>T("PvP Ladder",e.children[1]),j=e=>x(g(e.children[2]));function u(){let t=a("news_head_tavern",n()).filter(N).map(j),o=Math.max.apply(null,t);o>r(f)&&C(f,o)}function B(){r("pageTwoLinks")&&l(),r("addUfsgLinks")&&d(),r("trackLadderReset")&&u()}export{B as default};
//# sourceMappingURL=news-JPXUOHYI.js.map
