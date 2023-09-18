import{d as a,m as t}from"./mercEffect-7727d3f6.js"
import{g as e}from"./attribsToArray-82e70568.js"
import{w as s,s as m}from"./calfSystem-929ac228.js"
import{a as n}from"./addCommas-47d6aaa1.js"
import"./view-d2d3e996.js"
import"./guild-5e30924d.js"
import"./intValue-e1798d0a.js"
function o(a,t,e){m(`<span class="fshBlue">${n(t)}</span> ( ${n(t-e)} )`,a)}async function r(){if(s())return
const m=e(document)
if(m.attackElement){const e=await a()
!function(a,t){o(a.attackElement,a.attack,t?.[0]),o(a.defenseElement,a.defense,t?.[1]),o(a.armorElement,a.armor,t?.[2]),o(a.hpElement,a.hp,t?.[3]),o(a.damageElement,a.damage,t?.[4])}(m,t(e))}}export{r as default}
//# sourceMappingURL=injectGroupStats-d552cf3c.js.map
