import{a as f}from"./chunk-7X3QBEI3.js";import{a as g,b as y}from"./chunk-MC2XFBKL.js";import{a as p}from"./chunk-OU5QGFPH.js";import"./chunk-P2WXVYCV.js";import{a as c}from"./chunk-RLZKHCNR.js";import{a as u}from"./chunk-55COBDR4.js";import{a}from"./chunk-DJH7MW43.js";import"./chunk-W5RHDDBD.js";import"./chunk-EFF7KNX2.js";import"./chunk-WMNBZAKD.js";import"./chunk-AMBECJSA.js";import"./chunk-N35L4X3I.js";import"./chunk-BYVXHJ5E.js";import"./chunk-P32LYIQC.js";import"./chunk-3A25HTZJ.js";import{a as s}from"./chunk-SRR4B7GE.js";import{a as l}from"./chunk-GN5NA7YF.js";import"./chunk-Y4CNOL4E.js";import"./chunk-QCFSLNAO.js";import{a as m}from"./chunk-V75REFMA.js";import"./chunk-ZTLAKSAF.js";import"./chunk-A5UFVDS4.js";import{b as d}from"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-A2JPUMZD.js";import"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=c(e);return t?t.map(f).map(m):[]}function S(e){let t=G.map(([o,i])=>[M(o),i]),n=f(m(e)),r=t.find(([o])=>o.includes(n));if(r)return r[1]}function b(e){return y()?(l("guildSelf",s(e)),"self"):S(s(e))}function x(e,t){let[,n,r]=h.find(([i])=>i===t);e.parentNode.classList.add(n);let o=d(r);o&&o.length>0&&a(e.parentNode,`<br>${u(o)}`)}function A(e){let t=b(e);t&&x(e,t)}function I(){let e=g();e?A(e):p()&&l("guildSelf","")}export{I as default};
//# sourceMappingURL=profileInjectGuildRel-G32SW4AM.js.map
