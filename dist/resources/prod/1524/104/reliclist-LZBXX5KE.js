import{a as h}from"./chunk-RJVB5SC3.js";import{a as u}from"./chunk-BLQUXFLH.js";import"./chunk-CBRFJXMQ.js";import"./chunk-XSBXLWG4.js";import"./chunk-AF6X2EPJ.js";import{a as e}from"./chunk-PXJZZGPY.js";import{a as d}from"./chunk-VYBTCWLD.js";import"./chunk-Z7UI4YWM.js";import"./chunk-27TM5UBE.js";import{b as l}from"./chunk-OHGKEFPZ.js";import{a}from"./chunk-KGBQEEPA.js";import"./chunk-KWZPRQOD.js";import{c as s}from"./chunk-7CIGM6WR.js";import{L as m,Y as c,r as o}from"./chunk-S2DS6Q2Q.js";import"./chunk-DPOGJLEK.js";import"./chunk-MHZN7LER.js";import{a as f}from"./chunk-JVNW5U7Y.js";import"./chunk-IWZ3GP32.js";async function n(t=0,r=100){let i=await h(null,t,r);if(i?.s)return i.r.remaining_relics?i.r.relics.concat(await n(t+i.r.relics.length,Math.min(100,i.r.remaining_relics))):i.r.relics}function g(t){return`<a href="${c}relics${o}view&relic_id=${t.id}">${t.name}</a>`}function y(t){return t?`<a href="${m}${t.id}">${t.name}</a>`:""}var p=t=>r=>r.id===t,w=t=>t?.attributes?.find(p(6));function k(t,r){if(t){let i=t.find(p(r));if(i)return i.value}return""}function v(t){return[6,0,4,5,7,8].map(f(k,t)).join("</td><td>")}function x(t){if(!t)return"";let[r,i,b,$]=u(t);return`${e(r)}d ${e(i)}h ${e(b)}m ${e($)}s`}function _(t){return`<tr><td>${t.location.realm.min_level}</td><td>${g(t)}</td><td>${y(t.guild)}</td><td>${v(t.attributes)}</td><td>${x(t.time)}</td></tr>`}var A=`#pCC .reliclist {
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
}`;function G(t){return`<style>${A}</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(w).map(_).join("")}</tbody></table>`}function L(t){t.sort((r,i)=>r.location.realm.min_level-i.location.realm.min_level),a(G(t),l())}async function S(){if(!s("betaOptIn"))return;a("Loading...",l());let t=await n();d(t)&&L(t)}export{S as default};
//# sourceMappingURL=reliclist-LZBXX5KE.js.map
