import{g as t}from"./getBuff-ab7330ac.js"
import{j as e,az as a,as as s,ao as i}from"./calfSystem-34913441.js"
import"./buffObj-18893259.js"
const l=[1,25,75,150,200,250,300,400,500,600,700,800,900,1e3,1200,1400,1600,2e3,2500,3e3,3500,4e3,4500],n=t=>[s(t.href,"skill_id"),l[t.closest('table[width="300"] > tbody > tr').rowIndex].toString(),t.children[0].dataset.tipped],p=([t,e,a])=>[t,e,a.split(/[<>]/)],o=([t,e,a])=>[t,e,a[2],a[a.length-3].split(" ")[1]],r=([e,a,s,l])=>['  {"name": "',s,'",'," ".repeat(20-s.length),'"stam": ',l,","," ".repeat(3-l.length),'"lvl": ',a,","," ".repeat(5-a.length),'"id": ',e,","," ".repeat(4-e.length),'"nicks": "',t(s)?.nicks||i(s),'"},'],m=t=>t.join("")
function f(){const t=e('a[href*="&skill_id="]').map(n).map(p).map(o).map(r).map(m).join("\n")
a(t)}export{f as default}
//# sourceMappingURL=skills-3444e174.js.map
