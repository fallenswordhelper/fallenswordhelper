import{a as e}from"./addCommas-8af578e2.js"
import{g as a}from"./getMercStats-09ea16af.js"
import{g as t}from"./groupViewStats-cd1ac528.js"
import{y as m,B as s}from"./calfSystem-cbf77dd7.js"
import"./intValue-19726e4b.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-bc97ae67.js.map
