import{a as I}from"./chunk-N3HOJER6.js";import{c as U}from"./chunk-ZCAADZDH.js";import{a as T}from"./chunk-FO5AIT2P.js";import{a as S}from"./chunk-CJ2EAUSK.js";import"./chunk-NCDRXM67.js";import"./chunk-LFZPKT47.js";import"./chunk-OR5BPR4B.js";import{a as v}from"./chunk-A77NZCEP.js";import{a as b}from"./chunk-4NGCZM3S.js";import"./chunk-AOZMZP5H.js";import"./chunk-6NBL4CEJ.js";import"./chunk-UECO6BBS.js";import{a as h}from"./chunk-5KGM3LZY.js";import{a as d}from"./chunk-DI3XCMNE.js";import{a as R}from"./chunk-PVHDKJRP.js";import{a as M}from"./chunk-NQFMO265.js";import"./chunk-WCTHIQU3.js";import{a as l}from"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import{a as C}from"./chunk-BQPBQ4WG.js";import"./chunk-N3ED3R2T.js";import{a as N}from"./chunk-H2ANYIFW.js";import"./chunk-KUIVOAMB.js";import"./chunk-O6E23IRT.js";import"./chunk-CKRPJ7HI.js";import{a as s}from"./chunk-RUEPLNRL.js";import{a}from"./chunk-GVTRKM2F.js";import{a as E}from"./chunk-OR37OWF3.js";import{a as g,q as x}from"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import"./chunk-MR322WHU.js";var V=0,u=0,i={};function k(t,e){return l(e).includes(t)}function f(t){return V.find(s(k,t))}function w(t){return f(t).nextElementSibling.nextElementSibling.nextElementSibling}function B(t){return t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0]}function P(t,e){return e==="amount"?new RegExp(`\\+(\\d+) ${t}`):/(?<cost>\d{1,3})\xA0/u}function $(t,e,n){if(!i[t][n]){let r=P(t,n),o=a(r,l(e));i[t][n]=o}return i[t][n]}function j(t,e){return $(t,e,"amount")}function F(t,e){return $(t,e.nextElementSibling,"cost")}function G(t,e){if(i[t]||(i[t]={}),!i[t].span){let n=T();I(e," "),b(e,n),i[t].span=n}return i[t].span}function q(t,e,n,r){let o=j(t,e),m=F(t,e),p=Math.floor(u/m)*o;n*m<=u?(p=n*o,r.className="fshBlue"):r.className="fshRed",v(`(+${p} stamina)`,r)}function L(t,e,n){let{target:r}=n,o=Number(r.value),m=G(t,e);if(R(o)||o===0){m.className="fshHide";return}q(t,e,o,m)}function A(t){let e=f(t);E(B(e),"keyup",s(L,t,e))}function z(){u=M(l(d("statbar-fsp"))),A("Current"),A("Maximum"),h(`<a href="${g}${x}marketplace">Sell at Marketplace</a>`,w("Gold"))}function H(t,e){let r=f(t).nextElementSibling.nextElementSibling;if(r){let m=Number(a(/(?<value>\d{1,3}) \/ 115/,r.innerHTML));C(e,m+5)}}function c(){V=N("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),H("+1 Max Allies","alliestotal"),H("+1 Max Enemies","enemiestotal"),z()}function D(){S("type")==="1"?U():c()}export{D as default};
//# sourceMappingURL=points-A25BC4NF.js.map