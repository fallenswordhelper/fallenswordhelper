import{a as s}from"./chunk-Z3NLCC7K.js";import{a as n}from"./chunk-R63U7AZ3.js";import{c as r}from"./chunk-V56KALMS.js";import{a as i,b as a}from"./chunk-VOI5HXP6.js";import{a as f}from"./chunk-VVTHM3UH.js";async function l(t){let e=await s(n(),t),o=e&&{...e,lastUpdate:r()};return a("fsh_selfProfile",o),o}var m=t=>r()-f.allyEnemyOnlineRefreshTime<t?.lastUpdate;function c(t){return m(t)?t:l()}async function p(t){if(t)return l(t);let e=await i("fsh_selfProfile");return c(e)}export{p as a};
//# sourceMappingURL=chunk-777JKBMR.js.map
