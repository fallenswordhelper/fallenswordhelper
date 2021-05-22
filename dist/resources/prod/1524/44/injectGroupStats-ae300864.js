import{a as e}from"./addCommas-aab57e5e.js"
import{g as a}from"./getMercStats-a4e74eed.js"
import{g as t}from"./groupViewStats-d614ecaf.js"
import{y as m,B as s}from"./calfSystem-6ad077b7.js"
import"./intValue-66f66ba9.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-ae300864.js.map
