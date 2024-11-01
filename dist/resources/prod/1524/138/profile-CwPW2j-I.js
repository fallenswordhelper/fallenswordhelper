import{c as t}from"./colouredDots-CCSWkiz-.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-YMLQpszw.js"
import{a8 as n,aB as s,p as e,cG as r,aC as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as k}from"./calfSystem-BjarbvkO.js"
import{d as h}from"./doStatTotal-Cc6iDyVn.js"
import{a as B}from"./asInt-CfdXMnIc.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let P=null
function g(){return r(P)&&(P=y()===a()),P}function v(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>B(m)===t
function w(){const t=Number(n(u(f)))
S(t)?p(l,""):p(l,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-SDqcJnM3.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-C1AmxFcN.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-CWkQ6Tyo.js"))}function D(){c("componentWidgets")&&j(import("./components-77wXaoL2.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-_gVRRWbY.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-Yc5TrkT2.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-4GZwg-bT.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-DVMDlACf.js"))}function C(){g()&&i([L,x,A,D,W,G,w,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-B1pyXwjK.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-DhgWm--d.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-BrBMzf6P.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-CJg-XIpV.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-CCi_rNkP.js"))}function R(){v()&&j(import("./bio-DtepWvQR.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-B8QlPgw_.js"))}function J(){c("showBuffLevel")&&j(import("./buffLevelDisplay-Fs0OCgyE.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,z,E,O,R,H,h,J]),k(3,t),o())}})
export{y as a,g,N as p}
//# sourceMappingURL=profile-CwPW2j-I.js.map
