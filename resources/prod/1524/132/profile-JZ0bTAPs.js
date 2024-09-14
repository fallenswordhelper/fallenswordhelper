import{c as t}from"./colouredDots-aquXZFo8.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-D5K_4yIl.js"
import{a8 as n,aB as s,p as e,cG as r,aD as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as B}from"./calfSystem-Dh7h0wep.js"
import{d as h}from"./doStatTotal-9DHaKp1F.js"
import{a as k}from"./asInt-DPj71rxF.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let g=null
function v(){return r(g)&&(g=y()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-DniUXQr_.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-BRtrJ_8q.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-QS183l2I.js"))}function x(){c("componentWidgets")&&j(import("./components-D2xNa6Od.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-BRCvIlgh.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-eN0fdae4.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-MLob2wMM.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-8O9oADay.js"))}function C(){v()&&i([w,A,D,x,W,G,S,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-DWJAia2f.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-MGISkYQ1.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-gJq8Iy8n.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-C_r3x_dk.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-3je0rO_Z.js"))}function O(){L()&&j(import("./bio-C4Y8YOWI.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-p_mRdXS0.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-CgLAiTZR.js"))}var T=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,R,z,E,O,H,h,N]),B(3,t),o())}})
export{y as a,v as g,T as p}
//# sourceMappingURL=profile-JZ0bTAPs.js.map
