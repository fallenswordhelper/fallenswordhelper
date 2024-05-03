import{c as t}from"./colouredDots-BHWRDT2U.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-CjRw20o2.js"
import{a8 as n,az as s,p as e,cz as r,aC as a,ai as c,g as u,cA as f,ae as p,c5 as l,c6 as m,cv as j,w as d,aT as h}from"./calfSystem-BtgQSp8m.js"
import{d as k}from"./doStatTotal-C-BP9n92.js"
import{a as B}from"./asInt-DAijoojz.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let v=null
function g(){return r(v)&&(v=y()===a()),v}function A(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const L=t=>B(m)===t
function P(){const t=Number(n(u(f)))
L(t)?p(l,""):p(l,t)}async function S(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CnxV-Unz.js")).default(t,i)}}function w(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-BW6_9ykS.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-C6gyuWKD.js"))}function x(){c("componentWidgets")&&j(import("./components-DRq2oc0t.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-B-hHsbvP.js"))}function z(){c("selectAllLink")&&j(import("./selectAllLink-EpURufhw.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-BDDHIkji.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-DuCWWHwF.js"))}function C(){g()&&i([S,w,D,x,W,z,P,_,q])}function G(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-i8-cG5eU.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-BPpyYmph.js"))}function Q(){c("injectBuffGuide")&&j(import("./updateBuffs-D98T1i-B.js"))}function R(){c("statisticsWrap")&&j(import("./updateStatistics-C8x1Xv2E.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-N3hGH9t9.js"))}function O(){A()&&j(import("./bio-x_Kv_HF-.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-D0t2SCyM.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-9PMnn5IH.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,G,I,Q,R,E,O,T,k,N]),h(3,t),o())}})
export{y as a,g,F as p}
//# sourceMappingURL=profile-DIZG4-PV.js.map
