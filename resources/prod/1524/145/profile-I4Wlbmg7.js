import{c as t}from"./colouredDots-C-EPKG_P.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-BwEZyHDv.js"
import{ac as n,aS as s,p as e,d1 as r,aU as c,ao as a,g as u,d2 as f,aj as l,cD as p,cE as m,cF as j,cZ as d,x as b,bb as h}from"./calfSystem-CvwhhJv4.js"
import{d as k}from"./doStatTotal-CKI0MEYY.js"
let B=0
function y(){return B||(B=n(s("h1",e())[0])),B}let S=null
function g(){return r(S)&&(S=y()===c()),S}function D(){const t=g()
return function(t){return t&&a("renderSelfBio")}(t)||function(t){return!t&&a("renderOtherBios")}(t)}const L=t=>m(j)===t
function P(){const t=Number(n(u(f)))
L(t)?l(p,""):l(p,t)}async function v(){const t=a("fastDebuff"),i=a("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CBIdvG5d.js")).default(t,i)}}function A(){a("countAllyEnemy")&&d(import("./profileAllyEnemy-D1dgHnDH.js"))}function x(){a("enableQuickDrink")&&d(import("./fastWear-DgniDSQf.js"))}function W(){a("componentWidgets")&&d(import("./components-DLsGLrsw.js"))}function w(){a("quickWearLink")&&d(import("./quickWearLink-B2TmyVPv.js"))}function E(){a("selectAllLink")&&d(import("./selectAllLink-BuI2fk49.js"))}function G(){a("nekidButton")&&d(import("./nekidBtn-B9TR7ffV.js"))}function Q(){a("ajaxifyProfileSections")&&d(import("./ajaxifyProfileSections-BZ1_iwED.js"))}function _(){g()&&i([v,A,x,W,w,E,P,G,Q])}function I(){a("showGuildRelationship")&&d(import("./profileInjectGuildRel-CRf4NeOp.js"))}function O(){a("showQuickButtons")&&d(import("./profileInjectQuickButton-Bh6TFjKs.js"))}function q(){a("injectBuffGuide")&&d(import("./updateBuffs-B8ERJ_VV.js"))}function z(){a("statisticsWrap")&&d(import("./updateStatistics-CtwkLrpb.js"))}function C(){a("highlightPvpProtection")&&d(import("./highlightPvpProtection-iFVhZxFu.js"))}function F(){D()&&d(import("./bio-C1uGsUwv.js"))}function N(){a("enableBioCompressor")&&d(import("./compressBio-B9wHNVMV.js"))}function R(){a("showBuffLevel")&&d(import("./buffLevelDisplay-BxRBgi1_.js"))}var H=Object.freeze({__proto__:null,default:function(){b()||(i([_,I,O,q,z,C,F,N,k,R]),h(3,t),o())}})
export{y as a,g,H as p}
//# sourceMappingURL=profile-I4Wlbmg7.js.map
