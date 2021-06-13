import{a as e}from"./addCommas-c0fbc0a2.js"
import{g as a}from"./getMercStats-cc4d4ef3.js"
import{g as t}from"./groupViewStats-5edcc42d.js"
import{y as m,B as s}from"./calfSystem-6a3c85e0.js"
import"./intValue-a6f9b475.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function c(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function r(){m()||(n=t(document),n.attackElement&&a().then(c))}export default r
//# sourceMappingURL=injectGroupStats-b2a698f1.js.map
