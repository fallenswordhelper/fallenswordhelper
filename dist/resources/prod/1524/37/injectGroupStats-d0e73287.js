import{a as e}from"./addCommas-e39c029a.js"
import{g as a}from"./getMercStats-fc7b4054.js"
import{g as t}from"./groupViewStats-74a14c64.js"
import{y as m,B as s}from"./calfSystem-60c20ae9.js"
import"./intValue-0e97c9b9.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function c(){m()||(n=t(document),n.attackElement&&a().then(r))}export default c
//# sourceMappingURL=injectGroupStats-d0e73287.js.map
