import{a as e}from"./addCommas-5b74e836.js"
import{g as a}from"./getMercStats-18f2ac26.js"
import{g as t}from"./groupViewStats-df0cddf4.js"
import{y as m,B as s}from"./calfSystem-3cb2f93e.js"
import"./intValue-fefb28df.js"
let f
function n(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function o(e){n(f.attackElement,f.attack,e.attack),n(f.defenseElement,f.defense,e.defense),n(f.armorElement,f.armor,e.armor),n(f.damageElement,f.damage,e.damage),n(f.hpElement,f.hp,e.hp)}function r(){m()||(f=t(document),f.attackElement&&a().then(o))}export default r
//# sourceMappingURL=injectGroupStats-8541d877.js.map
