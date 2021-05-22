import{a}from"./addCommas-aab57e5e.js"
import{g as e}from"./getMercStats-f8b2a592.js"
import{g as t}from"./groupViewStats-dd96a5b4.js"
import{y as m,B as s}from"./calfSystem-a8d582b6.js"
import"./intValue-66f66ba9.js"
let n
function o(e,t,m){s(`<span class="fshBlue">${a(t)}</span> ( ${a(t-m)} )`,e)}function r(a){o(n.attackElement,n.attack,a.attack),o(n.defenseElement,n.defense,a.defense),o(n.armorElement,n.armor,a.armor),o(n.damageElement,n.damage,a.damage),o(n.hpElement,n.hp,a.hp)}function f(){m()||(n=t(document),n.attackElement&&e().then(r))}export default f
//# sourceMappingURL=injectGroupStats-0af91a4c.js.map
