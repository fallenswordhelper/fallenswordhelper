import{a as u}from"./chunk-CT2BMXOG.js";import{a as c}from"./chunk-VI447U6R.js";import{a as g,b as y}from"./chunk-5NFIERNB.js";import"./chunk-L5WNUAZM.js";import{a as p}from"./chunk-XG3XJ43M.js";import{a as d}from"./chunk-PWPFMMB4.js";import{a}from"./chunk-6WXPRACV.js";import"./chunk-34NYN3UK.js";import"./chunk-7ONOIJO4.js";import"./chunk-K6MZKY6U.js";import"./chunk-V3AM6ELX.js";import"./chunk-57Z3RMCJ.js";import"./chunk-VSE6PNGN.js";import"./chunk-IXAZ6GFZ.js";import"./chunk-YIEWHY6V.js";import{a as l}from"./chunk-C5OE7PQU.js";import{a as s}from"./chunk-XDUXVHJP.js";import"./chunk-ZOPLLTNB.js";import"./chunk-HTCI2HHR.js";import{a as f}from"./chunk-4VL7TVGR.js";import"./chunk-QOWOSZRG.js";import"./chunk-FM7OJ7NO.js";import{b as m}from"./chunk-FTOV4GKD.js";import"./chunk-NY6FBFCL.js";import"./chunk-POXCGSYQ.js";import"./chunk-M72CYKCS.js";import"./chunk-ZP7KCDX3.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=p(e);return t?t.map(u).map(f):[]}function R(e){let t=G.map(([i,n])=>[M(i),n]),o=u(f(e)),r=t.find(([i])=>i.includes(o));if(r)return r[1]}function S(e){return y()?(s("guildSelf",l(e)),"self"):R(l(e))}function b(e,t){let[,o,r]=h.find(([n])=>n===t);e.parentNode.classList.add(o);let i=m(r);i&&i.length>0&&a(e.parentNode,`<br>${d(i)}`)}function x(e){let t=S(e);t&&b(e,t)}function A(){let e=g();e?x(e):c()&&s("guildSelf","")}export{A as default};
//# sourceMappingURL=profileInjectGuildRel-BKJMHWXT.js.map