import{a as t}from"./addCommas-37fb94e0.js"
import{q as s,at as e,aT as a,e as n,aN as r,c as o,j as i,p as c,B as f,z as l,o as h,t as d,l as p}from"./calfSystem-fe534823.js"
import{d as u}from"./doSortParams-088d8454.js"
import{p as m,s as g,a as y}from"./stringSort-0425bca0.js"
import{g as C,s as b}from"./idb-1aaf30fa.js"
import"./alpha-9f4f77c3.js"
import"./toLowerCase-179aa35f.js"
function $(t){return`${t.min.toString()} - ${t.max.toString()}`}function k(t){return`<span class="fshNoWrap">${t[0]}: ${$(t[1])}</span>`}function j(t){if(function(t){return t&&a(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=n(t).map(k).join("<br>"),`${s}</span>`}return'<span class="fshGrey">**Missing**</span>'}function L(a,n){return s(a[n],{name:n,image:(r=a[n].image_id,`<img class="tip-static" src="${e}creatures/${r}.png" data-tipped="<img src='${e}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:t(a[n].level),attack:$(a[n].attack),defense:$(a[n].defense),armor:$(a[n].armor),damage:$(a[n].damage),hp:$(a[n].hp),enhancements:j(a[n].enhancements)})
var r}function v(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function w(t,s){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!r(t.type)&&s.type>8}(t,s))return-1
let e=m(t,o.sortBy,1),a=m(s,o.sortBy,1)
e=v(e),a=v(a)
return g(e-a)}let S,A
function B(){f("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",S)}function E(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function _(){const t=l("entityTableOutput")
A&&t&&f(A.map(E).join(""),t)}function P(t){u(t)
!function(t){"string"===t?A.sort(y):A.sort(w)}(function(t){return t.getAttribute("sortType")||"string"}(t)),_()}function T(t){const{target:s}=t
if("clearEntityLog"===s.id)return b("fsh_monsterLog",""),void B();(function(t){return p("fshLink",t)&&t.hasAttribute("sortkey")})(s)&&P(s)}function N(t){t?(!function(t){A=a(t).map(d(L,t))}(t),o.sortBy="level",o.sortAsc=!0,A.sort(w),A&&(f('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',S),h(S,T)),_()):B()}function O(t){i()&&function(t){S=t||c,S&&C("fsh_monsterLog").then(N)}(t)}export default O
//# sourceMappingURL=monstorLog-fc53aba2.js.map
