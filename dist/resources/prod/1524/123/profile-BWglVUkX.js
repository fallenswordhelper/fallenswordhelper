import{c as t}from"./colouredDots-DmxXrKj6.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-BOa9u4Un.js"
import{a8 as n,az as s,p as e,cz as r,aC as a,ai as c,g as u,cA as f,ae as p,c5 as l,c6 as m,cv as j,w as d,aT as h}from"./calfSystem-wTzwei3t.js"
import{d as k}from"./doStatTotal-D5BIInIA.js"
import{a as B}from"./asInt-DcpIJRg8.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let v=null
function g(){return r(v)&&(v=y()===a()),v}function A(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const L=t=>B(m)===t
function P(){const t=Number(n(u(f)))
L(t)?p(l,""):p(l,t)}async function S(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-Bol2nYmM.js")).default(t,i)}}function w(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-CdAANyuj.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-BpA3Xzs3.js"))}function x(){c("componentWidgets")&&j(import("./components-Cw3_TH_k.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-BeTg5KyW.js"))}function z(){c("selectAllLink")&&j(import("./selectAllLink-CnDyywk4.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-DFkKskfn.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-Bh0i6fYE.js"))}function C(){g()&&i([S,w,D,x,W,z,P,_,q])}function G(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-DIM0IOG7.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-AR3nlOp4.js"))}function Q(){c("injectBuffGuide")&&j(import("./updateBuffs-Dkrz8n-2.js"))}function R(){c("statisticsWrap")&&j(import("./updateStatistics-BLnKN7QC.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-mdAdc--h.js"))}function O(){A()&&j(import("./bio-DVx2yUlf.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-0tBPn__h.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-aKTfxsxf.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,G,I,Q,R,E,O,T,k,N]),h(3,t),o())}})
export{y as a,g,F as p}
//# sourceMappingURL=profile-BWglVUkX.js.map
