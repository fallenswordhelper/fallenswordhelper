import{c as t}from"./colouredDots-eBcyl-KU.js"
import{e as i}from"./executeAll-EzEelzhH.js"
import{i as o}from"./interceptSubmit-Ji3kORWO.js"
import{a8 as n,az as s,p as e,cy as r,aC as a,ai as c,g as u,cz as f,ae as p,c4 as l,c5 as m,cu as j,w as d,aT as h}from"./calfSystem-G1dN925O.js"
import{d as k}from"./doStatTotal-KBtXKxVq.js"
import{a as B}from"./asInt-PKKHs1-a.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let g=null
function v(){return r(g)&&(g=b()===a()),g}function P(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>B(m)===t
function w(){const t=Number(n(u(f)))
S(t)?p(l,""):p(l,t)}async function A(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-c8f2CF4_.js")).default(t,i)}}function D(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-iuhfXF6G.js"))}function L(){c("enableQuickDrink")&&j(import("./fastWear-1EB3uIje.js"))}function x(){c("componentWidgets")&&j(import("./components-396Yg0f0.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-4vLz_u7V.js"))}function z(){c("selectAllLink")&&j(import("./selectAllLink-KO1-i1MD.js"))}function Q(){c("nekidButton")&&j(import("./nekidBtn-B_mQJY0E.js"))}function _(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-YP1Qr_Pv.js"))}function q(){v()&&i([A,D,L,x,W,z,w,Q,_])}function C(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-jM169x1G.js"))}function G(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-O8QJ8Kfi.js"))}function I(){c("injectBuffGuide")&&j(import("./updateBuffs-I-1bRwY-.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-C32e0nKH.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-TS5qp4Fl.js"))}function R(){P()&&j(import("./bio-G0Ci0JqC.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-1rcmWPeN.js"))}function K(){c("showBuffLevel")&&j(import("./buffLevelDisplay-PEWrXCKV.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([q,C,G,I,E,O,R,T,k,K]),h(3,t),o())}})
export{b as a,v as g,N as p}
//# sourceMappingURL=profile-jI3i8MQO.js.map
