import{a}from"./addCommas-4b913655.js"
import{g as e}from"./getMercStats-1a0b11c0.js"
import{g as t}from"./groupViewStats-fda5fcc8.js"
import{x as m,A as s}from"./calfSystem-793da633.js"
import"./intValue-d2a6f461.js"
let n
function o(e,t,m){s(`<span class="fshBlue">${a(t)}</span> ( ${a(t-m)} )`,e)}function r(a){o(n.attackElement,n.attack,a.attack),o(n.defenseElement,n.defense,a.defense),o(n.armorElement,n.armor,a.armor),o(n.damageElement,n.damage,a.damage),o(n.hpElement,n.hp,a.hp)}function f(){m()||(n=t(document),n.attackElement&&e().then(r))}export default f
//# sourceMappingURL=injectGroupStats-5b4d4908.js.map
