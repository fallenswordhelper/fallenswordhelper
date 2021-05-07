import{a as e}from"./addCommas-5b74e836.js"
import{g as t}from"./getMercStats-260531e5.js"
import{g as a}from"./groupViewStats-41d43de5.js"
import{y as m,B as s}from"./calfSystem-9942149b.js"
import"./intValue-fefb28df.js"
let n
function o(t,a,m){s(`<span class="fshBlue">${e(a)}</span> ( ${e(a-m)} )`,t)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=a(document),n.attackElement&&t().then(r))}export default f
//# sourceMappingURL=injectGroupStats-3a8b9d07.js.map
