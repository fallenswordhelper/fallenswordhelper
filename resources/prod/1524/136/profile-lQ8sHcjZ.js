import{c as t}from"./colouredDots-C578-IN3.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-Cmu1wKZK.js"
import{a8 as n,aB as s,p as e,cG as r,aC as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as B}from"./calfSystem-CUgWHLtG.js"
import{d as h}from"./doStatTotal-Df1XDnrc.js"
import{a as k}from"./asInt-Bqhf3xYw.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let g=null
function v(){return r(g)&&(g=y()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-DJ8kSlM7.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-BqiAkfNv.js"))}function x(){c("enableQuickDrink")&&j(import("./fastWear-Bai4V_1Y.js"))}function D(){c("componentWidgets")&&j(import("./components-DzgIwxtq.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-CeQSMb_Y.js"))}function C(){c("selectAllLink")&&j(import("./selectAllLink-BUIU73wj.js"))}function G(){c("nekidButton")&&j(import("./nekidBtn-Da4PQf3z.js"))}function _(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-wuH80nB-.js"))}function q(){v()&&i([w,A,x,D,W,C,S,G,_])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-Clbvq9lK.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-CF_s13Vj.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-7qb7XRI-.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-BogUT_hJ.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-B-8V6myy.js"))}function O(){L()&&j(import("./bio-3jCgnslE.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-CZW1Mo2c.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-B8oD6r9F.js"))}var T=Object.freeze({__proto__:null,default:function(){d()||(i([q,I,Q,R,z,E,O,H,h,N]),B(3,t),o())}})
export{y as a,v as g,T as p}
//# sourceMappingURL=profile-lQ8sHcjZ.js.map
