import{a as y,b as c}from"./chunk-ZSCTTD46.js";import"./chunk-T65I7RRZ.js";import"./chunk-YJWCXBI7.js";import"./chunk-ODYD27E4.js";import{a as m,b as p,c as d,d as g,e as o,f as v,g as h}from"./chunk-ATZ5GENP.js";import{a as u,b as f}from"./chunk-WHB77CI2.js";import"./chunk-JMYN526V.js";import"./chunk-RJHXDCMG.js";import"./chunk-YEGYUZNB.js";import{b as a}from"./chunk-OHOH67XG.js";import"./chunk-T5SOXK6H.js";import"./chunk-AKFTWN4L.js";import"./chunk-JHBW2WEU.js";import"./chunk-4BGELNLW.js";import"./chunk-ZGR2D6YK.js";import{a as l}from"./chunk-NFWUZ6G7.js";import"./chunk-MU27BHL6.js";import"./chunk-AA2SS673.js";import"./chunk-FJRQCZWN.js";import"./chunk-UTDTWSR5.js";import"./chunk-IZT3DORW.js";import"./chunk-REJ57ZO4.js";import"./chunk-VI6Y3FZI.js";import"./chunk-LAXTQMR6.js";import"./chunk-AOLXKWOL.js";import"./chunk-2WRNIMPS.js";import"./chunk-DVEUT6SI.js";import"./chunk-KTSA4HUA.js";import"./chunk-3WWWYMDW.js";import"./chunk-ZKT3V6EP.js";import"./chunk-562FJNCP.js";import"./chunk-JFH2ANYQ.js";import"./chunk-4RUOSMIM.js";import"./chunk-3PFYPJ7R.js";import"./chunk-6U4GCDKS.js";import"./chunk-C6Z346VW.js";import"./chunk-4X7HEDV6.js";import"./chunk-XZ2D5B2Y.js";import{a as e}from"./chunk-HGTLDLGM.js";var n,A;function _(t){n.members[t.name].push([c(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}function x(t){n.members[t.name]||(n.members[t.name]=[],_(t))}var M=[(t,i)=>i.current_stamina!==t[p],(t,i)=>i.max_stamina>t[g],(t,i)=>i.level!==t[d],(t,i)=>i.vl!==t[v],(t,i)=>i.guild_xp!==t[h]];function k(t,i,s){return s(t,i)}function w(t,i){return M.some(e(k,t,i))}function G(t,i){w(t,i)?_(i):(t[m]=c(i.last_activity),t[o]=a)}function T(t,i){x(i);let s=n.members[i.name],r=s[s.length-1];a-r[o]>=86100&&G(r,i),t.members[i.name]=n.members[i.name]}function U(t,i){i.members.forEach(e(T,t))}function C(){let t={lastUpdate:a,members:{}};A.r.ranks.forEach(e(U,t)),f("fsh_guildActivity",t)}function D(t){t&&t.r&&(A=t,C())}function E(t){t?n=t:n={lastUpdate:0,members:{}},a>l(n.lastUpdate,0)+300&&y().then(D)}function R(){u("fsh_guildActivity").then(E)}export{R as default};
//# sourceMappingURL=guildActivity-QE3OVNMC.js.map
