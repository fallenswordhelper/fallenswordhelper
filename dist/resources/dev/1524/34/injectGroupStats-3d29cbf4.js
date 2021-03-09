import{a as e}from"./addCommas-4b913655.js"
import{g as a}from"./getMercStats-475d6e45.js"
import{g as t}from"./groupViewStats-c231931a.js"
import{x as m,A as s}from"./calfSystem-c07e3259.js"
import"./intValue-d2a6f461.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-3d29cbf4.js.map
