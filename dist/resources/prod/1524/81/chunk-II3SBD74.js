import{a as r}from"./chunk-WTTTJAB2.js";import{a as n}from"./chunk-V572RQRH.js";import{e as o}from"./chunk-7Q74Q23I.js";function u(t){return`${r(t.getHours())}:${r(t.getMinutes())} ${t.toLocaleString("en",{weekday:"short"})} ${r(t.getDate())}/${o[t.getMonth()]}/${t.getFullYear()}`}function f(t,i){let e=t.split(" ").map(m=>m.slice(0,-1));if(!!e)return`<dd>${u(new Date(n()+((i*60+Number(e[0]))*60+Number(e[1]))*1e3))}</dd>`}export{f as a};
//# sourceMappingURL=chunk-II3SBD74.js.map