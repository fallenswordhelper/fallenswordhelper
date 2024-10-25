import{c as t}from"./colouredDots-BjlEZWIT.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-ee1pG6cx.js"
import{a8 as n,aB as s,p as e,cG as r,aC as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as k}from"./calfSystem-DZGU7L1H.js"
import{d as h}from"./doStatTotal-BQCP8rxV.js"
import{a as B}from"./asInt-BEghcCcW.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let P=null
function g(){return r(P)&&(P=y()===a()),P}function v(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>B(m)===t
function w(){const t=Number(n(u(f)))
S(t)?p(l,""):p(l,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-IAYtSOv1.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-B33Ijy5-.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-bXCW8LNu.js"))}function D(){c("componentWidgets")&&j(import("./components-BemYyWEd.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-DRUdJcqN.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-B2zfvywP.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-DnFeqGSG.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-CyEtNBq0.js"))}function C(){g()&&i([L,x,A,D,W,G,w,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-DVKpHR7d.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-C8gTZ4MC.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-CPhMtLPi.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-DW4eeMjA.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-JM_p-k9K.js"))}function R(){v()&&j(import("./bio-Co_305zA.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-6yjgGAKQ.js"))}function J(){c("showBuffLevel")&&j(import("./buffLevelDisplay-lA2JKxVm.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,z,E,O,R,H,h,J]),k(3,t),o())}})
export{y as a,g,N as p}
//# sourceMappingURL=profile-DETzIrR5.js.map
