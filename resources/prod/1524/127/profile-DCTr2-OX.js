import{c as t}from"./colouredDots-CwDFqM9T.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-D77JWcKR.js"
import{a8 as n,az as s,p as e,cx as r,aC as a,ai as c,g as u,cy as f,ae as p,c3 as l,c4 as m,ct as j,w as d,aT as h}from"./calfSystem-DCvZki7i.js"
import{d as k}from"./doStatTotal-_TQHAqTl.js"
import{a as B}from"./asInt-BrY-dWp8.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let v=null
function g(){return r(v)&&(v=b()===a()),v}function L(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>B(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CdYZsD1F.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-0t91ObXV.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-DxrXwxpw.js"))}function D(){c("componentWidgets")&&j(import("./components-Cf_SU5_6.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-BaDJIL4l.js"))}function _(){c("selectAllLink")&&j(import("./selectAllLink-DdNPZQhO.js"))}function q(){c("nekidButton")&&j(import("./nekidBtn-DPlAda-0.js"))}function z(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-CSRZrEnV.js"))}function C(){g()&&i([w,x,A,D,W,_,S,q,z])}function G(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-d05RSTo1.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-D21XLN1P.js"))}function Q(){c("injectBuffGuide")&&j(import("./updateBuffs-Brq7TPJW.js"))}function R(){c("statisticsWrap")&&j(import("./updateStatistics-mBnMjV6L.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-BEOGDcDR.js"))}function O(){L()&&j(import("./bio-Chi-ftsJ.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-BUKAsTCm.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-DW4BDCqM.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,G,I,Q,R,E,O,T,k,N]),h(3,t),o())}})
export{b as a,g,F as p}
//# sourceMappingURL=profile-DCTr2-OX.js.map
