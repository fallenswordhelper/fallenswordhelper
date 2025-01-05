import{c as t}from"./colouredDots-vtVAORAX.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-CPOodCW2.js"
import{ac as n,aS as s,p as e,d1 as r,aU as c,ao as a,g as u,d2 as f,aj as l,cD as p,cE as m,cF as j,cZ as d,x as b,bb as h}from"./calfSystem-fMW-YMyF.js"
import{d as k}from"./doStatTotal-ZW6rfEGB.js"
let B=0
function y(){return B||(B=n(s("h1",e())[0])),B}let S=null
function g(){return r(S)&&(S=y()===c()),S}function D(){const t=g()
return function(t){return t&&a("renderSelfBio")}(t)||function(t){return!t&&a("renderOtherBios")}(t)}const L=t=>m(j)===t
function P(){const t=Number(n(u(f)))
L(t)?l(p,""):l(p,t)}async function v(){const t=a("fastDebuff"),i=a("disableDeactivatePrompts")
if(t||i){(await import("./debuff-ibvP4GaJ.js")).default(t,i)}}function A(){a("countAllyEnemy")&&d(import("./profileAllyEnemy-Do6HJuYa.js"))}function x(){a("enableQuickDrink")&&d(import("./fastWear-LBTDi_8g.js"))}function W(){a("componentWidgets")&&d(import("./components-CGu3d6hh.js"))}function w(){a("quickWearLink")&&d(import("./quickWearLink-CeiXYEGn.js"))}function E(){a("selectAllLink")&&d(import("./selectAllLink-Db6U3vXf.js"))}function G(){a("nekidButton")&&d(import("./nekidBtn-CtOHtzsl.js"))}function Q(){a("ajaxifyProfileSections")&&d(import("./ajaxifyProfileSections-xEpDcBKM.js"))}function _(){g()&&i([v,A,x,W,w,E,P,G,Q])}function I(){a("showGuildRelationship")&&d(import("./profileInjectGuildRel-BUAjxi2l.js"))}function O(){a("showQuickButtons")&&d(import("./profileInjectQuickButton-CxPU3QYi.js"))}function q(){a("injectBuffGuide")&&d(import("./updateBuffs-D5HCjWQ4.js"))}function z(){a("statisticsWrap")&&d(import("./updateStatistics-bRWUoIkS.js"))}function C(){a("highlightPvpProtection")&&d(import("./highlightPvpProtection-DgeZadYZ.js"))}function F(){D()&&d(import("./bio-CwvXlp2Y.js"))}function N(){a("enableBioCompressor")&&d(import("./compressBio-BtTrlYAA.js"))}function R(){a("showBuffLevel")&&d(import("./buffLevelDisplay-584mGdb2.js"))}var H=Object.freeze({__proto__:null,default:function(){b()||(i([_,I,O,q,z,C,F,N,k,R]),h(3,t),o())}})
export{y as a,g,H as p}
//# sourceMappingURL=profile-BW3ZVcnq.js.map
