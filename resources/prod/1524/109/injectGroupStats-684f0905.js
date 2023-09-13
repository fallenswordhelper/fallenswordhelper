import{d as t,m as a}from"./mercEffect-79be6d71.js"
import{g as e}from"./attribsToArray-6fd164f1.js"
import{w as s,s as m}from"./calfSystem-2f15e074.js"
import{a as n}from"./addCommas-47d6aaa1.js"
import"./view-a95c048e.js"
import"./guild-07edae00.js"
import"./intValue-e1798d0a.js"
function o(t,a,e){m(`<span class="fshBlue">${n(a)}</span> ( ${n(a-e)} )`,t)}async function r(){if(s())return
const m=e(document)
if(m.attackElement){const e=await t()
!function(t,a){o(t.attackElement,t.attack,a?.[0]),o(t.defenseElement,t.defense,a?.[1]),o(t.armorElement,t.armor,a?.[2]),o(t.hpElement,t.hp,a?.[3]),o(t.damageElement,t.damage,a?.[4])}(m,a(e))}}export{r as default}
//# sourceMappingURL=injectGroupStats-684f0905.js.map
