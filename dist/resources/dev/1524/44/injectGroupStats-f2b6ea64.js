import{a as e}from"./addCommas-aab57e5e.js"
import{g as a}from"./getMercStats-1a87cecb.js"
import{g as t}from"./groupViewStats-8b0d987c.js"
import{y as m,B as s}from"./calfSystem-f7cf24f6.js"
import"./intValue-66f66ba9.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-f2b6ea64.js.map
