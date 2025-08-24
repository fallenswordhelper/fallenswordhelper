import{c as t}from"./colouredDots-DchJRC_Z.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-c1dihHnz.js"
import{l as n,b5 as s,p as e,d9 as r,b7 as c,aA as u,g as a,da as f,av as l,cP as p,cN as m,cO as j,d0 as d,a3 as b,bn as h}from"./calfSystem-79LsojAC.js"
import{d as k}from"./doStatTotal-tBEj9xvS.js"
let B=0
function y(){return B||(B=n(s("h1",e())[0])),B}let v=null
function P(){return r(v)&&(v=y()===c()),v}function g(){const t=P()
return function(t){return t&&u("renderSelfBio")}(t)||function(t){return!t&&u("renderOtherBios")}(t)}function S(){const t=Number(n(a(f)));(t=>m(j)===t)(t)?l(p,""):l(p,t)}async function A(){const t=u("fastDebuff"),i=u("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CvRnR1Aw.js")).default(t,i)}}function L(){u("countAllyEnemy")&&d(import("./profileAllyEnemy-DftqFYs9.js"))}function w(){u("enableQuickDrink")&&d(import("./fastWear-BXdgb5kW.js"))}function x(){u("componentWidgets")&&d(import("./components-DwxTtEad.js"))}function D(){u("quickWearLink")&&d(import("./quickWearLink-BFDIw1ju.js"))}function W(){u("selectAllLink")&&d(import("./selectAllLink-DOPRgd97.js"))}function _(){u("nekidButton")&&d(import("./nekidBtn-Dv52hXWT.js"))}function q(){u("ajaxifyProfileSections")&&d(import("./ajaxifyProfileSections-BFUfLhXl.js"))}function G(){P()&&i([A,L,w,x,D,W,S,_,q])}function O(){u("showGuildRelationship")&&d(import("./profileInjectGuildRel-DXJbvzXO.js"))}function Q(){u("showQuickButtons")&&d(import("./profileInjectQuickButton-Bnv5kAEU.js"))}function E(){u("injectBuffGuide")&&d(import("./updateBuffs-DzX9sGOu.js"))}function I(){u("statisticsWrap")&&d(import("./updateStatistics-CJq9VDMg.js"))}function N(){u("highlightPvpProtection")&&d(import("./highlightPvpProtection-lcNnSJEw.js"))}function R(){g()&&d(import("./bio-BbUtwuEs.js"))}function z(){u("enableBioCompressor")&&d(import("./compressBio-DFTbIewa.js"))}function C(){u("showBuffLevel")&&d(import("./buffLevelDisplay-BGAMU8Cl.js"))}var H=Object.freeze({__proto__:null,default:function(){b()||(i([G,O,Q,E,I,N,R,z,k,C]),h(3,t),o())}})
export{y as a,P as g,H as p}
//# sourceMappingURL=profile-B_YzIzou.js.map
