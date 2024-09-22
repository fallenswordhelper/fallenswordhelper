import{c as t}from"./colouredDots-rQi3B-oS.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-Cei7B88B.js"
import{a8 as n,aB as s,p as e,cG as r,aD as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as B}from"./calfSystem-B-q5dZfX.js"
import{d as h}from"./doStatTotal-B4Wy7AjO.js"
import{a as k}from"./asInt-zhJPHZFv.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let g=null
function v(){return r(g)&&(g=y()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-DxsoEru4.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-CVF4qEXw.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-DPuGuAsl.js"))}function x(){c("componentWidgets")&&j(import("./components-DGeN2KJL.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-DjMvrjXq.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-BEiaf_-3.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-Du4zryit.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-DtgrpL7H.js"))}function C(){v()&&i([w,A,D,x,W,G,S,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-CQmUlZiG.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-BCYvf9sO.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-D14W0vsn.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-DYLvpqaE.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-D1LgIXuB.js"))}function O(){L()&&j(import("./bio-b9NH4mBT.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-gHaFjp6Y.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-D4sCKgFz.js"))}var T=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,R,z,E,O,H,h,N]),B(3,t),o())}})
export{y as a,v as g,T as p}
//# sourceMappingURL=profile-p5LVJlY-.js.map
