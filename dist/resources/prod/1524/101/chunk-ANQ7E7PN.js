import{a as r}from"./chunk-YD43NXMH.js";import{e as o}from"./chunk-3TICXWSZ.js";import{a as n}from"./chunk-JIAGBML5.js";function u(t){return`${r(t.getHours())}:${r(t.getMinutes())} ${t.toLocaleString("en",{weekday:"short"})} ${r(t.getDate())}/${o[t.getMonth()]}/${t.getFullYear()}`}function f(t,i){let e=t.split(" ").map(m=>m.slice(0,-1));if(e)return`<dd>${u(new Date(n()+((i*60+Number(e[0]))*60+Number(e[1]))*1e3))}</dd>`}export{f as a};
//# sourceMappingURL=chunk-ANQ7E7PN.js.map