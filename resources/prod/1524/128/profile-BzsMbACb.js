import{c as t}from"./colouredDots-hIq88A1v.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-BnohDH-5.js"
import{a8 as n,az as s,p as e,cx as r,aB as a,ai as c,g as u,cy as f,ae as p,c3 as l,c4 as m,ct as j,w as d,aT as B}from"./calfSystem-C2EM0fGB.js"
import{d as h}from"./doStatTotal-WVZIrVzr.js"
import{a as k}from"./asInt-CqC0IFb9.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let v=null
function g(){return r(v)&&(v=b()===a()),v}function L(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CPLuVFMK.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-B-bgD7km.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-CwT2-qmC.js"))}function D(){c("componentWidgets")&&j(import("./components-PSm1o0gL.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-3I6BIQVI.js"))}function _(){c("selectAllLink")&&j(import("./selectAllLink-Do7xCm0a.js"))}function q(){c("nekidButton")&&j(import("./nekidBtn-D9FFfqTh.js"))}function z(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-NH8eWC2o.js"))}function G(){g()&&i([w,x,A,D,W,_,S,q,z])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-oLEZTfFE.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-CCoDfR2a.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-CTKUvp5K.js"))}function C(){c("statisticsWrap")&&j(import("./updateStatistics-Dm8sH_KR.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-CWHTa4BU.js"))}function O(){L()&&j(import("./bio-D6UtPoLC.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-Djd38zva.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-BICCZbAD.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([G,I,Q,R,C,E,O,T,h,N]),B(3,t),o())}})
export{b as a,g,F as p}
//# sourceMappingURL=profile-BzsMbACb.js.map
