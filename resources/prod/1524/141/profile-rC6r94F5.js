import{c as t}from"./colouredDots-C78onBfn.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-DTfrwUG-.js"
import{a8 as n,aB as s,p as e,cG as r,aC as a,ai as c,g as u,cH as f,ca as p,ad as l,c9 as m,cC as j,w as d,aV as k}from"./calfSystem-Blt4DbaE.js"
import{d as h}from"./doStatTotal-CybaE_J0.js"
import{a as B}from"./asInt-CnZ3Wv3g.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let P=null
function g(){return r(P)&&(P=y()===a()),P}function v(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>B(p)===t
function w(){const t=Number(n(u(f)))
S(t)?l(m,""):l(m,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-BAYeFEf5.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-BGchWUA8.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear--9WLG2T9.js"))}function D(){c("componentWidgets")&&j(import("./components-CPuIoUQQ.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-BTK1Od8d.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-DaSrrrFm.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-CYNYbPie.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-cSgcpIw9.js"))}function C(){g()&&i([L,x,A,D,W,G,w,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-CtvSxItE.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-viqpQ9_P.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-CTLz3RzQ.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-11WfDBW3.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-gQvkz_YV.js"))}function R(){v()&&j(import("./bio-BavnedYy.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-CM6ySoRG.js"))}function J(){c("showBuffLevel")&&j(import("./buffLevelDisplay-BBOASvvS.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,z,E,O,R,H,h,J]),k(3,t),o())}})
export{y as a,g,N as p}
//# sourceMappingURL=profile-rC6r94F5.js.map
