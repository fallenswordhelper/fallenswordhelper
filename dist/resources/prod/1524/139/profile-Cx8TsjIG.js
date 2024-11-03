import{c as t}from"./colouredDots-DAmwta2S.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-BOGv1eqT.js"
import{a8 as n,aB as s,p as e,cG as r,aC as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as k}from"./calfSystem-B_VkFJhM.js"
import{d as h}from"./doStatTotal-CkWIgUdm.js"
import{a as B}from"./asInt-CypzCRLi.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let P=null
function g(){return r(P)&&(P=y()===a()),P}function v(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>B(m)===t
function w(){const t=Number(n(u(f)))
S(t)?p(l,""):p(l,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-hzlDrTOs.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-BsbSbcbh.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-BpOWclg_.js"))}function D(){c("componentWidgets")&&j(import("./components-Ch3OKU3_.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-D7xbbrPO.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-Ca77Mrv9.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-DaVWSGk6.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-IKgmOhyB.js"))}function C(){g()&&i([L,x,A,D,W,G,w,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-CSpixlJ0.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-C5PSsqnD.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-BzXzaAQ_.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-eeRPPWZA.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-C-VJSLL-.js"))}function R(){v()&&j(import("./bio-VFJoehmO.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-DhIKQ2uV.js"))}function J(){c("showBuffLevel")&&j(import("./buffLevelDisplay-B93njCqo.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,z,E,O,R,H,h,J]),k(3,t),o())}})
export{y as a,g,N as p}
//# sourceMappingURL=profile-Cx8TsjIG.js.map
