import{a}from"./addCommas-c0fbc0a2.js"
import{g as e}from"./getMercStats-c439ba19.js"
import{g as t}from"./groupViewStats-71457820.js"
import{y as m,B as s}from"./calfSystem-ae2e69af.js"
import"./intValue-a6f9b475.js"
let n
function o(e,t,m){s(`<span class="fshBlue">${a(t)}</span> ( ${a(t-m)} )`,e)}function r(a){o(n.attackElement,n.attack,a.attack),o(n.defenseElement,n.defense,a.defense),o(n.armorElement,n.armor,a.armor),o(n.damageElement,n.damage,a.damage),o(n.hpElement,n.hp,a.hp)}function f(){m()||(n=t(document),n.attackElement&&e().then(r))}export default f
//# sourceMappingURL=injectGroupStats-637e37d8.js.map
