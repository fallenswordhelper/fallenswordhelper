import{a as e}from"./addCommas-8af578e2.js"
import{g as a}from"./getMercStats-c26f3d63.js"
import{g as t}from"./groupViewStats-c85a5e0e.js"
import{y as m,B as s}from"./calfSystem-7991d843.js"
import"./intValue-19726e4b.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-beaf2ce8.js.map
