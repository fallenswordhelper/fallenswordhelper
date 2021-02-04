import{a as e}from"./addCommas-20414553.js"
import{g as a}from"./getMercStats-a8bc7e47.js"
import{g as t}from"./groupViewStats-368ea845.js"
import{x as m,A as s}from"./calfSystem-0708a9bb.js"
import"./intValue-55d66e09.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-389d6d5b.js.map
