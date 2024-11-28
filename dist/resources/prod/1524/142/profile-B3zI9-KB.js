import{c as t}from"./colouredDots-Bm42bfVL.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-CGoY21WA.js"
import{a8 as n,aB as s,p as e,cG as r,aC as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as k}from"./calfSystem-KuDT30_2.js"
import{d as h}from"./doStatTotal-D_h7gMbO.js"
import{a as B}from"./asInt-Dqcsg_oM.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let P=null
function g(){return r(P)&&(P=y()===a()),P}function v(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>B(m)===t
function w(){const t=Number(n(u(f)))
S(t)?p(l,""):p(l,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-C01nNklR.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-DOg0rldj.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-BxoOMj6o.js"))}function D(){c("componentWidgets")&&j(import("./components-S2NANc_j.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-DAait-Dz.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-Xi8o02dR.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-CqHkmFMt.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-BYJOa_yw.js"))}function C(){g()&&i([L,x,A,D,W,G,w,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-B1AqfAuI.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-oVQzgAtd.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-rZZCMR-C.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-I5wkLWlb.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-56ksQCTO.js"))}function R(){v()&&j(import("./bio-BSOK1nNw.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-8hrwzYVn.js"))}function J(){c("showBuffLevel")&&j(import("./buffLevelDisplay-BUEqu9YE.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,z,E,O,R,H,h,J]),k(3,t),o())}})
export{y as a,g,N as p}
//# sourceMappingURL=profile-B3zI9-KB.js.map
