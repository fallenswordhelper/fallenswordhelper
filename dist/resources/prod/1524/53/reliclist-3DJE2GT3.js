import{a as h}from"./chunk-S4AATYOV.js";import{a as p}from"./chunk-SJPJFTM7.js";import{a as e}from"./chunk-MSZ7COHN.js";import{b as o}from"./chunk-TMMBKVUE.js";import"./chunk-FLC7HS56.js";import"./chunk-N3R6MXRE.js";import"./chunk-PX7MLT6T.js";import"./chunk-QPRB5F5E.js";import"./chunk-NOLCAT6N.js";import{a}from"./chunk-I7NTXRDN.js";import"./chunk-QHU4ICCH.js";import"./chunk-JROAODNJ.js";import"./chunk-SHVFOAM5.js";import"./chunk-N56IAE2U.js";import{b as f}from"./chunk-VMJ6DXBZ.js";import"./chunk-3PDILZ3R.js";import"./chunk-3WAX2TNR.js";import{I as u,V as c,n as d}from"./chunk-4P4O4YGO.js";import"./chunk-KTAAKVTB.js";import{a as n}from"./chunk-RH5336H4.js";function m(t,i,r){let s={subcmd:"reliclist",offset:i,limit:r};return t&&(s.guild_id=t),h(s)}async function l(t=0,i=100){let r=await m(null,t,i);return r.r.remaining_relics?r.r.relics.concat(await l(t+r.r.relics.length,Math.min(100,r.r.remaining_relics))):r.r.relics}function g(t){return`<a href="${c}relics${d}view&relic_id=${t.id}">${t.name}</a>`}function $(t){return t?`<a href="${u}${t.id}">${t.name}</a>`:""}function b(t,i){return i.id===t}function y(t){return t.attributes&&t.attributes.find(n(b,6))}function x(t,i){if(t){let r=t.find(n(b,i));if(r)return r.value}return""}function _(t){return[6,0,4,5,7,8].map(n(x,t)).join("</td><td>")}function k(t){if(!t)return"";let i=p(t);return`${e(i[0])}d ${e(i[1])}h ${e(i[2])}m ${e(i[3])}s`}function v(t){return`<tr><td>${t.min_level}</td><td>${g(t)}</td><td>${$(t.guild)}</td><td>${_(t.attributes)}</td><td>${k(t.time)}</td></tr>`}function w(t){return`<style>#pCC .reliclist {
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
      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(y).map(v).join("")}</tbody></table>`}function C(t){t.sort((i,r)=>i.min_level-r.min_level),a(w(t),o)}function L(){!f("betaOptIn")||(a("Loading...",o),l().then(C))}export{L as default};
//# sourceMappingURL=reliclist-3DJE2GT3.js.map
