import{a as f}from"./chunk-WHLLS5MC.js";import{a as u}from"./chunk-GKZVQL4F.js";import"./chunk-ZQHXN6JO.js";import"./chunk-DQJLU6BH.js";import"./chunk-7YTTTE44.js";import{b as a}from"./chunk-DLFJWHV6.js";import{a as o}from"./chunk-MT75LODT.js";import"./chunk-6SYTCZ5G.js";import{a as e}from"./chunk-LEOMCKME.js";import"./chunk-NIE6URWE.js";import{a as n}from"./chunk-ARPRWHND.js";import{c as d}from"./chunk-5D3DZNMD.js";import{L as m,Y as s,r as c}from"./chunk-B3TUML6P.js";import"./chunk-U2JBD6QP.js";import"./chunk-KXXSC5XL.js";import"./chunk-VVTHM3UH.js";async function l(t=0,r=100){let i=await f(null,t,r);if(i)return i.r.remaining_relics?i.r.relics.concat(await l(t+i.r.relics.length,Math.min(100,i.r.remaining_relics))):i.r.relics}function $(t){return`<a href="${s}relics${c}view&relic_id=${t.id}">${t.name}</a>`}function g(t){return t?`<a href="${m}${t.id}">${t.name}</a>`:""}function h(t,r){return r.id===t}function y(t){return t.attributes&&t.attributes.find(n(h,6))}function w(t,r){if(t){let i=t.find(n(h,r));if(i)return i.value}return""}function k(t){return[6,0,4,5,7,8].map(n(w,t)).join("</td><td>")}function v(t){if(!t)return"";let[r,i,p,b]=u(t);return`${e(r)}d ${e(i)}h ${e(p)}m ${e(b)}s`}function x(t){return`<tr><td>${t.location.realm.min_level}</td><td>${$(t)}</td><td>${g(t.guild)}</td><td>${k(t.attributes)}</td><td>${v(t.time)}</td></tr>`}var _=`#pCC .reliclist {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
.reliclist, .reliclist th, .reliclist td {
  border: 1px solid black;
}
.reliclist th, .reliclist td {
  padding: 5px;
}
.reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {
  width: 100px;
}`;function A(t){return`<style>${_}</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(y).map(x).join("")}</tbody></table>`}function G(t){t.sort((r,i)=>r.location.realm.min_level-i.location.realm.min_level),o(A(t),a())}async function L(){if(!d("betaOptIn"))return;o("Loading...",a());let t=await l();G(t)}export{L as default};
//# sourceMappingURL=reliclist-BX6QGBNR.js.map
