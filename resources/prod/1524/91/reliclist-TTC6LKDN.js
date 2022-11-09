import{a as f}from"./chunk-ODBURNXQ.js";import{a as u}from"./chunk-E2ZETPDV.js";import{b as a}from"./chunk-2K77RJ6H.js";import{a as o}from"./chunk-UAVPZSJA.js";import"./chunk-TA6AFEKU.js";import{a as e}from"./chunk-V63CWF5P.js";import"./chunk-7CONRVJ5.js";import"./chunk-4JMLF5JM.js";import"./chunk-G7U3SZPH.js";import"./chunk-VWHQXFZ5.js";import{a as n}from"./chunk-FNUCRPZA.js";import"./chunk-WFGYEXIY.js";import"./chunk-Y4WR2IKW.js";import"./chunk-MS5TR5HI.js";import{b as s}from"./chunk-WULU2HSE.js";import"./chunk-GCBAZDNZ.js";import"./chunk-UVAAI4KD.js";import{L as c,Y as d,r as m}from"./chunk-KOVMYOV5.js";import"./chunk-SC26BEBT.js";import"./chunk-AXUZC3IG.js";async function l(t=0,r=100){let i=await f(null,t,r);return i.r.remaining_relics?i.r.relics.concat(await l(t+i.r.relics.length,Math.min(100,i.r.remaining_relics))):i.r.relics}function $(t){return`<a href="${d}relics${m}view&relic_id=${t.id}">${t.name}</a>`}function g(t){return t?`<a href="${c}${t.id}">${t.name}</a>`:""}function h(t,r){return r.id===t}function y(t){return t.attributes&&t.attributes.find(n(h,6))}function k(t,r){if(t){let i=t.find(n(h,r));if(i)return i.value}return""}function v(t){return[6,0,4,5,7,8].map(n(k,t)).join("</td><td>")}function w(t){if(!t)return"";let[r,i,p,b]=u(t);return`${e(r)}d ${e(i)}h ${e(p)}m ${e(b)}s`}function x(t){return`<tr><td>${t.location.realm.min_level}</td><td>${$(t)}</td><td>${g(t.guild)}</td><td>${v(t.attributes)}</td><td>${w(t.time)}</td></tr>`}var _=`#pCC .reliclist {
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
}`;function A(t){return`<style>${_}</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(y).map(x).join("")}</tbody></table>`}function G(t){t.sort((r,i)=>r.location.realm.min_level-i.location.realm.min_level),o(A(t),a())}function L(){!s("betaOptIn")||(o("Loading...",a()),l().then(G))}export{L as default};
//# sourceMappingURL=reliclist-TTC6LKDN.js.map
