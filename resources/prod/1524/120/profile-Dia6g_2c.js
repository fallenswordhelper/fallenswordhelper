import{c as t}from"./colouredDots-DtM594IM.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-CoCizFzi.js"
import{a8 as n,az as s,p as e,cz as r,aC as a,ai as c,g as u,cA as f,ae as p,c5 as l,c6 as m,cv as j,w as d,aT as h}from"./calfSystem-BpHkrDYD.js"
import{d as k}from"./doStatTotal-ZdcJ2KWg.js"
import{a as B}from"./asInt-BQeVnH5K.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let v=null
function g(){return r(v)&&(v=y()===a()),v}function A(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const L=t=>B(m)===t
function P(){const t=Number(n(u(f)))
L(t)?p(l,""):p(l,t)}async function S(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-Cd-qa1Y7.js")).default(t,i)}}function w(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-CGSke5Ec.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-Bi5jFWIp.js"))}function x(){c("componentWidgets")&&j(import("./components-DnmPdhtI.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-Fp5rCnLz.js"))}function z(){c("selectAllLink")&&j(import("./selectAllLink-DmSg63n3.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-BvcwGMKP.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-asp65bNd.js"))}function C(){g()&&i([S,w,D,x,W,z,P,_,q])}function G(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-B-bZkTya.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-BpBK_7Dl.js"))}function Q(){c("injectBuffGuide")&&j(import("./updateBuffs-DTvYf1q_.js"))}function R(){c("statisticsWrap")&&j(import("./updateStatistics-CdnoVr6d.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-C3phtZFW.js"))}function O(){A()&&j(import("./bio-Iq1cfAGl.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-CW2VLJ2f.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-DjHWoA_U.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,G,I,Q,R,E,O,T,k,N]),h(3,t),o())}})
export{y as a,g,F as p}
//# sourceMappingURL=profile-Dia6g_2c.js.map
