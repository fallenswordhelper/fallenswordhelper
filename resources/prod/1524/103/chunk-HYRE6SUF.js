import{a as y}from"./chunk-4SRNLPHK.js";import{a as c}from"./chunk-777JKBMR.js";import{a as o}from"./chunk-4BKRRB5O.js";import{a as f}from"./chunk-4JYNGGXH.js";import{a as s}from"./chunk-EL33JOKC.js";import{a as u}from"./chunk-EOP2LXLP.js";import{a as m}from"./chunk-FBJYO5PW.js";import{a}from"./chunk-DMJF4GTY.js";var p=e=>e.username,r=null;async function j(){let e=await c(!1);return(!e||!e._allies||!e._enemies)&&m(`myStats returned ${a(e)}`),{...e?._allies&&{_allies:e._allies.map(p)},...e?._enemies&&{_enemies:e._enemies.map(p)}}}function d(){return r||(r=j()),r}async function _(e){return(await d())._allies?.includes(e)}async function g(e){return(await d())._enemies?.includes(e)}var n=null;async function E(){let e=await y(!1);if(e)return u(e).filter(([,t])=>s(t)).map(([t])=>t)}async function l(e){return f()&&!n&&(n=E()),(await n)?.includes(e)}async function M(e){let t="",i=o(e),[w,x,P]=await Promise.all([l(i),_(i),g(i)]);return w?t="guild":x?t="ally":P&&(t="enemy"),[e,t]}export{l as a,M as b};
//# sourceMappingURL=chunk-HYRE6SUF.js.map
