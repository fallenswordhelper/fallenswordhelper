import{c as t}from"./colouredDots-BTgt6lkb.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-C09fkxcU.js"
import{a8 as n,az as s,p as e,cx as r,aB as a,ai as c,g as u,cy as f,ae as p,c3 as l,c4 as m,ct as j,w as d,aT as B}from"./calfSystem-CXltiP6P.js"
import{d as h}from"./doStatTotal-CDTUKF7e.js"
import{a as k}from"./asInt-BRv9ppFc.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let v=null
function g(){return r(v)&&(v=b()===a()),v}function L(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-BE1SxLiY.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-BcNdy4yC.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-CoKCy7c4.js"))}function D(){c("componentWidgets")&&j(import("./components-PW5sRSNx.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-17SFtoYQ.js"))}function _(){c("selectAllLink")&&j(import("./selectAllLink-y97k4z-D.js"))}function q(){c("nekidButton")&&j(import("./nekidBtn-B2UauIGo.js"))}function z(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-C59B5KSH.js"))}function G(){g()&&i([w,x,A,D,W,_,S,q,z])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-CGMe3nVY.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-BaDxhJ34.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-DvRXMxFj.js"))}function C(){c("statisticsWrap")&&j(import("./updateStatistics-B2phgW1E.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-IvKueUmn.js"))}function O(){L()&&j(import("./bio-BHkhNq6Q.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-C4Hfqsdq.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-CK-QZFFK.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([G,I,Q,R,C,E,O,T,h,N]),B(3,t),o())}})
export{b as a,g,F as p}
//# sourceMappingURL=profile-zIFaGVxW.js.map
