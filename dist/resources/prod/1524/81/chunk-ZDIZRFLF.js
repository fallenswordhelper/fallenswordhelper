import{a as s}from"./chunk-6TABQWKI.js";import{a as i}from"./chunk-7DSY2KYD.js";import{a as e}from"./chunk-V572RQRH.js";import{a as f,b as a}from"./chunk-HEE2ZG5Y.js";import{a as n}from"./chunk-B3OIOQDS.js";async function l(t){let r=await s(i(),t),o=r&&{...r,lastUpdate:e()};return a("fsh_selfProfile",o),o}var m=t=>e()-n.allyEnemyOnlineRefreshTime>t?.lastUpdate;function p(t){return m(t)?l():t}async function c(t){if(t)return l(t);let r=await f("fsh_selfProfile");return p(r)}export{c as a};
//# sourceMappingURL=chunk-ZDIZRFLF.js.map
