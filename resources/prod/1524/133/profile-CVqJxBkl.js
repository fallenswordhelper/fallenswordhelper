import{c as t}from"./colouredDots-C7OWUwMT.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-kR9ShX_F.js"
import{a8 as n,aB as s,p as e,cG as r,aD as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as B}from"./calfSystem-DKih1pr1.js"
import{d as h}from"./doStatTotal-BesuVsPp.js"
import{a as k}from"./asInt-IcDDYOt_.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let g=null
function v(){return r(g)&&(g=y()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CLHvLFbp.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-k6cMQXi0.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-CqpfUFDP.js"))}function x(){c("componentWidgets")&&j(import("./components-CzC1xTDl.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-Cq3QqvIn.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-BpDakFxA.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-Bhm4soTC.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-B49uzBAY.js"))}function C(){v()&&i([w,A,D,x,W,G,S,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-BnnpRyvE.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-CLelVf8h.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-Dvl93rFS.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-DfhJfHE9.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-FL01ZUK8.js"))}function O(){L()&&j(import("./bio-D8bT2wWO.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-CrmhpqUO.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-DoXR_aby.js"))}var T=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,R,z,E,O,H,h,N]),B(3,t),o())}})
export{y as a,v as g,T as p}
//# sourceMappingURL=profile-CVqJxBkl.js.map
