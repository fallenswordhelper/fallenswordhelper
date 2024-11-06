import{c as t}from"./colouredDots-92mmL_zX.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-Br2DCRBv.js"
import{a8 as n,aB as s,p as e,cG as r,aC as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as k}from"./calfSystem-BhNMi9iJ.js"
import{d as h}from"./doStatTotal-CuQKuxuE.js"
import{a as B}from"./asInt-B9Mjft_p.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let P=null
function g(){return r(P)&&(P=y()===a()),P}function v(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>B(m)===t
function w(){const t=Number(n(u(f)))
S(t)?p(l,""):p(l,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-LObOBoD_.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-qXSqGcx4.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-DhMJjd-S.js"))}function D(){c("componentWidgets")&&j(import("./components-DHfqnwlN.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-CI9pqz3X.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-CBbP_QVG.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-CVefKFsq.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-uKYM1ee-.js"))}function C(){g()&&i([L,x,A,D,W,G,w,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-CX-kHF6r.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-BdczAvho.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-WG_fBYo0.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-B67jItys.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-ykdAhxkd.js"))}function R(){v()&&j(import("./bio-DptI3dDb.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-ly7Iesic.js"))}function J(){c("showBuffLevel")&&j(import("./buffLevelDisplay-DhaBLQrZ.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,z,E,O,R,H,h,J]),k(3,t),o())}})
export{y as a,g,N as p}
//# sourceMappingURL=profile-Cds2v8CV.js.map
