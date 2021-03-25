import{a as e}from"./addCommas-fc2f471e.js"
import{g as a}from"./getMercStats-d176ad26.js"
import{g as t}from"./groupViewStats-9ae6e1b0.js"
import{y as m,B as s}from"./calfSystem-e7bde0c3.js"
import"./intValue-ca51a3c0.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function c(){m()||(n=t(document),n.attackElement&&a().then(r))}export default c
//# sourceMappingURL=injectGroupStats-d78424a7.js.map
