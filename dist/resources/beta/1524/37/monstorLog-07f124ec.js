import{a as t}from"./addCommas-e39c029a.js"
import{q as s,am as e,aP as n,e as a,aJ as r,c as o,j as i,p as c,B as l,z as f,o as h,t as d,l as m}from"./calfSystem-cb2a6f39.js"
import{d as p}from"./doSortParams-ccabf806.js"
import{p as u,s as g,a as y}from"./stringSort-904101fc.js"
import{g as b,s as C}from"./idb-b27e17a7.js"
import"./alpha-3d8909e7.js"
import"./toLowerCase-9d38da0b.js"
function $(t){return`${t.min.toString()} - ${t.max.toString()}`}function k(t){return`<span class="fshNoWrap">${t[0]}: ${$(t[1])}</span>`}function j(t){if(function(t){return t&&n(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=a(t).map(k).join("<br>"),`${s}</span>`}return'<span class="fshGrey">**Missing**</span>'}function L(n,a){return s(n[a],{name:a,image:(r=n[a].image_id,`<img class="tip-static" src="${e}creatures/${r}.png" data-tipped="<img src='${e}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:t(n[a].level),attack:$(n[a].attack),defense:$(n[a].defense),armor:$(n[a].armor),damage:$(n[a].damage),hp:$(n[a].hp),enhancements:j(n[a].enhancements)})
var r}function v(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function w(t,s){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!r(t.type)&&s.type>8}(t,s))return-1
let e=u(t,o.sortBy,1),n=u(s,o.sortBy,1)
e=v(e),n=v(n)
return g(e-n)}let S,A
function B(){l("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",S)}function E(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function P(){const t=f("entityTableOutput")
A&&t&&l(A.map(E).join(""),t)}function _(t){p(t)
!function(t){"string"===t?A.sort(y):A.sort(w)}(function(t){return t.getAttribute("sortType")||"string"}(t)),P()}function O(t){const{target:s}=t
if("clearEntityLog"===s.id)return C("fsh_monsterLog",""),void B();(function(t){return m("fshLink",t)&&t.hasAttribute("sortkey")})(s)&&_(s)}function T(t){t?(!function(t){A=n(t).map(d(L,t))}(t),o.sortBy="level",o.sortAsc=!0,A.sort(w),A&&(l('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',S),h(S,O)),P()):B()}function x(t){i()&&function(t){S=t||c,S&&b("fsh_monsterLog").then(T)}(t)}export default x
//# sourceMappingURL=monstorLog-07f124ec.js.map
