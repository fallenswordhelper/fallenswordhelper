import{a}from"./addCommas-fc2f471e.js"
import{g as e}from"./getMercStats-2bd6921d.js"
import{g as t}from"./groupViewStats-f06aab4f.js"
import{y as m,B as s}from"./calfSystem-4a40365f.js"
import"./intValue-ca51a3c0.js"
let n
function o(e,t,m){s(`<span class="fshBlue">${a(t)}</span> ( ${a(t-m)} )`,e)}function f(a){o(n.attackElement,n.attack,a.attack),o(n.defenseElement,n.defense,a.defense),o(n.armorElement,n.armor,a.armor),o(n.damageElement,n.damage,a.damage),o(n.hpElement,n.hp,a.hp)}function r(){m()||(n=t(document),n.attackElement&&e().then(f))}export default r
//# sourceMappingURL=injectGroupStats-5a229398.js.map
