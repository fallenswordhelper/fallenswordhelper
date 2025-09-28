import{c as t}from"./colouredDots-BfpJMcdJ.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-UQt2BX0g.js"
import{l as n,b5 as s,p as e,db as r,b7 as c,az as u,g as a,dc as f,au as l,cS as p,cQ as m,cR as j,d4 as d,a3 as b,bo as h}from"./calfSystem-CIuUjh4H.js"
import{d as k}from"./doStatTotal-CiVM0LYo.js"
let B=0
function y(){return B||(B=n(s("h1",e())[0])),B}let S=null
function g(){return r(S)&&(S=y()===c()),S}function v(){const t=g()
return function(t){return t&&u("renderSelfBio")}(t)||function(t){return!t&&u("renderOtherBios")}(t)}function L(){const t=Number(n(a(f)));(t=>m(j)===t)(t)?l(p,""):l(p,t)}async function P(){const t=u("fastDebuff"),i=u("disableDeactivatePrompts")
if(t||i){(await import("./debuff-D3T-LPM4.js")).default(t,i)}}function A(){u("countAllyEnemy")&&d(import("./profileAllyEnemy-R8Zh7Hg6.js"))}function D(){u("enableQuickDrink")&&d(import("./fastWear-C1SYZ-iI.js"))}function w(){u("componentWidgets")&&d(import("./components-BbbhKNKA.js"))}function x(){u("quickWearLink")&&d(import("./quickWearLink-iJcYk0Pe.js"))}function W(){u("selectAllLink")&&d(import("./selectAllLink-DKp55P8o.js"))}function Q(){u("nekidButton")&&d(import("./nekidBtn-B8Xhgfik.js"))}function _(){u("ajaxifyProfileSections")&&d(import("./ajaxifyProfileSections-BVIgpH4Y.js"))}function q(){g()&&i([P,A,D,w,x,W,L,Q,_])}function z(){u("showGuildRelationship")&&d(import("./profileInjectGuildRel-C9mYTu0J.js"))}function G(){u("showQuickButtons")&&d(import("./profileInjectQuickButton-DlDHoUZ0.js"))}function R(){u("injectBuffGuide")&&d(import("./updateBuffs-CrruOjqF.js"))}function C(){u("statisticsWrap")&&d(import("./updateStatistics-CLq-FHII.js"))}function E(){u("highlightPvpProtection")&&d(import("./highlightPvpProtection-CRiK9AU2.js"))}function I(){v()&&d(import("./bio-Djwakfni.js"))}function O(){u("enableBioCompressor")&&d(import("./compressBio-D8pQQikM.js"))}function N(){u("showBuffLevel")&&d(import("./buffLevelDisplay-C4ptUJ1N.js"))}var T=Object.freeze({__proto__:null,default:function(){b()||(i([q,z,G,R,C,E,I,O,k,N]),h(3,t),o())}})
export{y as a,g,T as p}
//# sourceMappingURL=profile-CaBVP_jT.js.map
