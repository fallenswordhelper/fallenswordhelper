import{a as e}from"./addCommas-c0fbc0a2.js"
import{g as a}from"./getMercStats-a08a919e.js"
import{g as t}from"./groupViewStats-5fcf4e45.js"
import{y as m,B as s}from"./calfSystem-e1e858cd.js"
import"./intValue-a6f9b475.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-e9830a1f.js.map
