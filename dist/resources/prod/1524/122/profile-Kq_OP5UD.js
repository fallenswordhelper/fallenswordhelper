import{c as t}from"./colouredDots-DIyreNsV.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-CIYNYcxj.js"
import{a8 as n,az as s,p as e,cz as r,aC as a,ai as c,g as u,cA as f,ae as p,c5 as l,c6 as m,cv as j,w as d,aT as h}from"./calfSystem-C4gAE-9q.js"
import{d as k}from"./doStatTotal-Bhm6O3Og.js"
import{a as B}from"./asInt-CSRojw0c.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let v=null
function g(){return r(v)&&(v=y()===a()),v}function A(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const L=t=>B(m)===t
function P(){const t=Number(n(u(f)))
L(t)?p(l,""):p(l,t)}async function S(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CDdJOVDT.js")).default(t,i)}}function w(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-DKD8nH8F.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-XuZ_ZAIC.js"))}function x(){c("componentWidgets")&&j(import("./components-Bp1VRj9H.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-mh8sx9m7.js"))}function z(){c("selectAllLink")&&j(import("./selectAllLink-BULasqgc.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-cNO_2OZ7.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-DPm3Y3b5.js"))}function C(){g()&&i([S,w,D,x,W,z,P,_,q])}function G(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-Bxq4swrc.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-GByjK228.js"))}function Q(){c("injectBuffGuide")&&j(import("./updateBuffs-DSJbdh41.js"))}function R(){c("statisticsWrap")&&j(import("./updateStatistics-CYmlZdUd.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-HnR-bua5.js"))}function O(){A()&&j(import("./bio-DvbQLKXw.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-DsqJhcO0.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-DIhE_Iq7.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,G,I,Q,R,E,O,T,k,N]),h(3,t),o())}})
export{y as a,g,F as p}
//# sourceMappingURL=profile-Kq_OP5UD.js.map
