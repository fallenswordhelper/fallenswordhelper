import{c as t}from"./colouredDots-B3kprS4h.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-CbRQMY1Y.js"
import{a8 as n,az as s,p as e,cx as r,aC as a,ai as c,g as u,cy as f,ae as p,c3 as l,c4 as m,ct as j,w as d,aT as h}from"./calfSystem-0LeC9ahe.js"
import{d as k}from"./doStatTotal-9geuW1Px.js"
import{a as B}from"./asInt-BgNTeMBE.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let v=null
function g(){return r(v)&&(v=b()===a()),v}function L(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>B(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-BsOrQXBb.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-EUX7YcbY.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-B38lCI2L.js"))}function D(){c("componentWidgets")&&j(import("./components-Bl3UfvdM.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-pNYiVXDA.js"))}function _(){c("selectAllLink")&&j(import("./selectAllLink-CzcMMG-N.js"))}function q(){c("nekidButton")&&j(import("./nekidBtn-q-5sbZ0I.js"))}function z(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-BEDa90AJ.js"))}function C(){g()&&i([w,x,A,D,W,_,S,q,z])}function G(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-C77CJVeL.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-BG9FwxkD.js"))}function Q(){c("injectBuffGuide")&&j(import("./updateBuffs-ClnSlXN0.js"))}function R(){c("statisticsWrap")&&j(import("./updateStatistics-C2TWlrgH.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-BkDrLxwq.js"))}function O(){L()&&j(import("./bio-AfLp7aC-.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-Dh8kP68a.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-B3AnH_SC.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,G,I,Q,R,E,O,T,k,N]),h(3,t),o())}})
export{b as a,g,F as p}
//# sourceMappingURL=profile-BTdkvsIo.js.map
