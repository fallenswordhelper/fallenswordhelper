import{a as u}from"./chunk-6JXQCPDD.js";import{a as c}from"./chunk-QBCX6FZI.js";import{a as g,b as y}from"./chunk-WOHCFK4T.js";import"./chunk-AU6YW23B.js";import{a as p}from"./chunk-YA4XWNIU.js";import{a as d}from"./chunk-PHWFVGPC.js";import{a}from"./chunk-SC2PSRG5.js";import"./chunk-JAXKMKJG.js";import"./chunk-3EZQPKK2.js";import"./chunk-J5CGKSFM.js";import"./chunk-PV2I23US.js";import"./chunk-N7SUA7LP.js";import"./chunk-JMJTPPQZ.js";import"./chunk-2SW32QWU.js";import"./chunk-25QBSENP.js";import{a as l}from"./chunk-UHIE2U7H.js";import{a as s}from"./chunk-BN2EMHT7.js";import"./chunk-Q6THDLFL.js";import"./chunk-W2KQHOA7.js";import{a as f}from"./chunk-Q4EXCAYO.js";import"./chunk-GUWFFNX3.js";import"./chunk-NHZZ7LZ4.js";import{b as m}from"./chunk-MWTT7SJH.js";import"./chunk-65ZLY3NC.js";import"./chunk-E6R3MXCQ.js";import"./chunk-E2WYTXH7.js";import"./chunk-S7VLPIAI.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=p(e);return t?t.map(u).map(f):[]}function R(e){let t=G.map(([i,n])=>[M(i),n]),o=u(f(e)),r=t.find(([i])=>i.includes(o));if(r)return r[1]}function S(e){return y()?(s("guildSelf",l(e)),"self"):R(l(e))}function b(e,t){let[,o,r]=h.find(([n])=>n===t);e.parentNode.classList.add(o);let i=m(r);i&&i.length>0&&a(e.parentNode,`<br>${d(i)}`)}function x(e){let t=S(e);t&&b(e,t)}function A(){let e=g();e?x(e):c()&&s("guildSelf","")}export{A as default};
//# sourceMappingURL=profileInjectGuildRel-XF6XA6D6.js.map
