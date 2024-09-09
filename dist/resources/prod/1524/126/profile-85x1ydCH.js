import{c as t}from"./colouredDots-DbrET3sQ.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-Mjd63zg8.js"
import{a8 as n,az as s,p as e,cx as r,aC as a,ai as c,g as u,cy as f,ae as p,c3 as l,c4 as m,ct as j,w as d,aT as h}from"./calfSystem-DG-hTKTe.js"
import{d as k}from"./doStatTotal-DL0-MbuC.js"
import{a as B}from"./asInt-B79ipQ8L.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let v=null
function g(){return r(v)&&(v=b()===a()),v}function L(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>B(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-B04qw0PM.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-BD1DHSr4.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-DLWXdeVJ.js"))}function D(){c("componentWidgets")&&j(import("./components-Ddon2iSp.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-C3hUp5Ck.js"))}function _(){c("selectAllLink")&&j(import("./selectAllLink-DkIweHlS.js"))}function q(){c("nekidButton")&&j(import("./nekidBtn-B70s0SoY.js"))}function z(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-CoPbMf-F.js"))}function C(){g()&&i([w,x,A,D,W,_,S,q,z])}function G(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-CvJ1xEDU.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-CgokL9v1.js"))}function Q(){c("injectBuffGuide")&&j(import("./updateBuffs-3MxnUKu5.js"))}function R(){c("statisticsWrap")&&j(import("./updateStatistics-CRC8TEwl.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-DnAmA_Wg.js"))}function O(){L()&&j(import("./bio-Dwhscefj.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-DYyzL1ao.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-CY1-UL4K.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,G,I,Q,R,E,O,T,k,N]),h(3,t),o())}})
export{b as a,g,F as p}
//# sourceMappingURL=profile-85x1ydCH.js.map
