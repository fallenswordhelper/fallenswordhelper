import{c as t}from"./colouredDots-DZtRqi5r.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-BAyI76ZI.js"
import{a8 as n,aB as s,p as e,cG as r,aD as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as B}from"./calfSystem-Dr91xfiU.js"
import{d as h}from"./doStatTotal-CdoEjp-h.js"
import{a as k}from"./asInt-GR0asIsL.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let g=null
function v(){return r(g)&&(g=y()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CnV6nDs0.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-CK8BriLr.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-CAmtoASx.js"))}function x(){c("componentWidgets")&&j(import("./components-DQLpio1A.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-BLIbA6g5.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-OMN9WlD8.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-DF-OI3B0.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-GrQ0lajD.js"))}function C(){v()&&i([w,A,D,x,W,G,S,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-D8Ay_FQ3.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-CuvYb8B3.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-DPZzdnkA.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-B4Yd1CF-.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-BrkRDQ3v.js"))}function O(){L()&&j(import("./bio-BekiOURn.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-pBLiksAl.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-1Df8HBa8.js"))}var T=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,R,z,E,O,H,h,N]),B(3,t),o())}})
export{y as a,v as g,T as p}
//# sourceMappingURL=profile-2eaZppIv.js.map
