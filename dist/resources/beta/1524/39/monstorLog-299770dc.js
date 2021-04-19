import{a as t}from"./addCommas-37fb94e0.js"
import{q as e,av as s,aV as a,e as n,aP as r,c as o,j as i,p as c,B as f,z as l,o as h,t as d,l as p}from"./calfSystem-26fbeaeb.js"
import{d as u}from"./doSortParams-a59b0a1f.js"
import{p as m,s as g,a as y}from"./stringSort-fe2119d1.js"
import{g as b,s as C}from"./idb-7ea76af7.js"
import"./alpha-9f4f77c3.js"
import"./toLowerCase-179aa35f.js"
function $(t){return`${t.min.toString()} - ${t.max.toString()}`}function k(t){return`<span class="fshNoWrap">${t[0]}: ${$(t[1])}</span>`}function j(t){if(function(t){return t&&a(t).length>0}(t)){let e='<span class="fshXXSmall">'
return e+=n(t).map(k).join("<br>"),`${e}</span>`}return'<span class="fshGrey">**Missing**</span>'}function v(a,n){return e(a[n],{name:n,image:(r=a[n].image_id,`<img class="tip-static" src="${s}creatures/${r}.png" data-tipped="<img src='${s}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:t(a[n].level),attack:$(a[n].attack),defense:$(a[n].defense),armor:$(a[n].armor),damage:$(a[n].damage),hp:$(a[n].hp),enhancements:j(a[n].enhancements)})
var r}function L(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function w(t,e){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,e){return!r(t.type)&&e.type>8}(t,e))return-1
let s=m(t,o.sortBy,1),a=m(e,o.sortBy,1)
s=L(s),a=L(a)
return g(s-a)}let S,A
function B(){f("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",S)}function E(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function P(){const t=l("entityTableOutput")
A&&t&&f(A.map(E).join(""),t)}function _(t){u(t)
!function(t){"string"===t?A.sort(y):A.sort(w)}(function(t){return t.getAttribute("sortType")||"string"}(t)),P()}function O(t){const{target:e}=t
if("clearEntityLog"===e.id)return C("fsh_monsterLog",""),void B();(function(t){return p("fshLink",t)&&t.hasAttribute("sortkey")})(e)&&_(e)}function T(t){t?(!function(t){A=a(t).map(d(v,t))}(t),o.sortBy="level",o.sortAsc=!0,A.sort(w),A&&(f('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',S),h(S,O)),P()):B()}function x(t){i()&&function(t){S=t||c,S&&b("fsh_monsterLog").then(T)}(t)}export default x
//# sourceMappingURL=monstorLog-299770dc.js.map
