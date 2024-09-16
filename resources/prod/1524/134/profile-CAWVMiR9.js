import{c as t}from"./colouredDots-CnrxCdAU.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-BRkBno07.js"
import{a8 as n,aB as s,p as e,cG as r,aD as a,ai as c,g as u,cH as f,ae as p,c9 as l,ca as m,cC as j,w as d,aV as B}from"./calfSystem-CyLCrHqa.js"
import{d as h}from"./doStatTotal-B9WUQYOt.js"
import{a as k}from"./asInt-4JuHFs_W.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let g=null
function v(){return r(g)&&(g=y()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-DS2cXphk.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-CIRBnd3s.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-Cm2pWK3v.js"))}function x(){c("componentWidgets")&&j(import("./components-CNRI4tKl.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-3sg0D94J.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-BAijEjXA.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-D3PGUg-H.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-Gxmgrcdx.js"))}function C(){v()&&i([w,A,D,x,W,G,S,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-BRYXAek5.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-Bc-mH-v1.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-DHl5_6Xo.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-D7C7dQkX.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-BkNoa53k.js"))}function O(){L()&&j(import("./bio-De7S4m16.js"))}function H(){c("enableBioCompressor")&&j(import("./compressBio-BOjetYND.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-CDGBF-yc.js"))}var T=Object.freeze({__proto__:null,default:function(){d()||(i([C,I,Q,R,z,E,O,H,h,N]),B(3,t),o())}})
export{y as a,v as g,T as p}
//# sourceMappingURL=profile-CAWVMiR9.js.map
