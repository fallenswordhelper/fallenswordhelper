import{a as c}from"./chunk-BBP5AYZH.js";import{a as u}from"./chunk-ML2FSRIP.js";import{a as g,b as y}from"./chunk-5KRVJZUN.js";import"./chunk-S6E3MK2X.js";import{a as p}from"./chunk-3ATWGYLD.js";import{a}from"./chunk-VCELXIKS.js";import{a as d}from"./chunk-NCMEUMLE.js";import"./chunk-G2RN5QP2.js";import"./chunk-DIOS3EFN.js";import"./chunk-OTDUXAAH.js";import{a as f}from"./chunk-CFDFCOR3.js";import"./chunk-5TD4FW2O.js";import"./chunk-HZOZPFQX.js";import"./chunk-ZC2VG7OL.js";import"./chunk-B3Y6PSMQ.js";import"./chunk-JGAHWCWU.js";import"./chunk-XXK2POF2.js";import"./chunk-M5ZUFNEH.js";import{a as l}from"./chunk-HUBAYN2T.js";import{a as s}from"./chunk-MCDZT6O2.js";import"./chunk-52NQXPZP.js";import"./chunk-LQ2ARGUI.js";import"./chunk-FIOQMJU7.js";import"./chunk-JDVJBZWD.js";import{b as m}from"./chunk-7JP44NWZ.js";import"./chunk-I57GWZIZ.js";import"./chunk-LROIQ2AY.js";import"./chunk-DDP3QCAT.js";import"./chunk-RBWWPJJC.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=p(e);return t?t.map(u).map(f):[]}function R(e){let t=G.map(([i,n])=>[M(i),n]),o=u(f(e)),r=t.find(([i])=>i.includes(o));if(r)return r[1]}function S(e){return y()?(s("guildSelf",l(e)),"self"):R(l(e))}function b(e,t){let[,o,r]=h.find(([n])=>n===t);e.parentNode.classList.add(o);let i=m(r);i&&i.length>0&&d(e.parentNode,`<br>${a(i)}`)}function x(e){let t=S(e);t&&b(e,t)}function A(){let e=g();e?x(e):c()&&s("guildSelf","")}export{A as default};
//# sourceMappingURL=profileInjectGuildRel-B4264FNE.js.map
