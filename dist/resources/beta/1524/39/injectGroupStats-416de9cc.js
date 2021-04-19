import{a as e}from"./addCommas-37fb94e0.js"
import{g as a}from"./getMercStats-d00dff24.js"
import{g as t}from"./groupViewStats-39d3064c.js"
import{y as m,B as s}from"./calfSystem-26fbeaeb.js"
import"./intValue-f6303c59.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function f(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function r(){m()||(n=t(document),n.attackElement&&a().then(f))}export default r
//# sourceMappingURL=injectGroupStats-416de9cc.js.map
