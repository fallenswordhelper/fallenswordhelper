import{a as r}from"./chunk-CJ7MNK5Q.js";import{a as m}from"./chunk-QN5NHAMX.js";import"./chunk-WMV5VMWS.js";import"./chunk-LGOCL6DR.js";import"./chunk-5TCTQYJU.js";import"./chunk-IJJZ4KIO.js";import"./chunk-X7QKS5QT.js";import"./chunk-C52HX2ZE.js";import"./chunk-XTMNLZB5.js";import"./chunk-EPZ5F5RD.js";import"./chunk-UNI23447.js";import"./chunk-P7OVAOGG.js";import"./chunk-EI23A3HQ.js";import"./chunk-PGEAU7BE.js";import"./chunk-RPQRAYS7.js";import{a as c}from"./chunk-CBGKHJZW.js";import"./chunk-FWZSNZAY.js";import"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import"./chunk-DUL3ONJJ.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import"./chunk-C5OL3C5E.js";import"./chunk-CEGFUXSK.js";import{a as f,b as l}from"./chunk-M3IY7CZ6.js";import"./chunk-IPM72WAR.js";import"./chunk-4QZL53LG.js";import"./chunk-OV3YZUE5.js";import{d as a}from"./chunk-RM642AP5.js";import"./chunk-DPQVBB2M.js";import"./chunk-YIUTYHR2.js";import{a as o}from"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import"./chunk-W5N63RWR.js";import"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import"./chunk-GHLTWNNP.js";import"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";var n=0;function p(t){n.members[t.name].push([r(t.last_activity),t.current_stamina,t.level,t.max_stamina,a(),t.vl,t.guild_xp])}function _(t){n.members[t.name]||(n.members[t.name]=[],p(t))}var x=[(t,i)=>i.current_stamina!==t[1],(t,i)=>i.max_stamina>t[3],(t,i)=>i.level!==t[2],(t,i)=>i.vl!==t[5],(t,i)=>i.guild_xp!==t[6]];function w(t,i,e){return e(t,i)}function M(t,i){return x.some(o(w,t,i))}function k(t,i){M(t,i)?p(i):(t[0]=r(i.last_activity),t[4]=a())}function D(t,i){_(i);let e=n.members[i.name],s=e[e.length-1];a()-s[4]>=86100&&k(s,i),t.members[i.name]=n.members[i.name]}function E(t,i){i.members.forEach(o(D,t))}function U(t){let i={lastUpdate:a(),members:{}};t.r.forEach(o(E,i)),l("fsh_guildActivity",i)}function R(t){t?.r&&U(t)}function b(t){return t??{lastUpdate:0,members:{}}}async function j(t){if(n=b(t),a()>c(n.lastUpdate,0)+300){let i=await m();R(i)}}async function C(){let t=await f("fsh_guildActivity");j(t)}export{C as default};
//# sourceMappingURL=guildActivity-ALFZUJHI.js.map
