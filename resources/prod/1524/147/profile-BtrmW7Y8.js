import{c as t}from"./colouredDots-CcVKMZje.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-CqzbaM3V.js"
import{ad as n,aV as s,p as e,d8 as r,aX as c,aq as a,g as u,d9 as f,al as l,cI as p,cG as m,cH as j,d0 as d,y as h,bc as k}from"./calfSystem-BAeDn21M.js"
import{d as B}from"./doStatTotal-tZMNla4Z.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let g=null
function L(){return r(g)&&(g=y()===c()),g}function P(){const t=L()
return function(t){return t&&a("renderSelfBio")}(t)||function(t){return!t&&a("renderOtherBios")}(t)}const S=t=>m(j)===t
function v(){const t=Number(n(u(f)))
S(t)?l(p,""):l(p,t)}async function A(){const t=a("fastDebuff"),i=a("disableDeactivatePrompts")
if(t||i){(await import("./debuff-CESGUWAg.js")).default(t,i)}}function D(){a("countAllyEnemy")&&d(import("./profileAllyEnemy-BuWgtNBJ.js"))}function w(){a("enableQuickDrink")&&d(import("./fastWear-CVXwwbN-.js"))}function x(){a("componentWidgets")&&d(import("./components-CSIoZziN.js"))}function G(){a("quickWearLink")&&d(import("./quickWearLink-BydtdnOA.js"))}function W(){a("selectAllLink")&&d(import("./selectAllLink-BxKxSqdL.js"))}function q(){a("nekidButton")&&d(import("./nekidBtn-B9V_Wljg.js"))}function I(){a("ajaxifyProfileSections")&&d(import("./ajaxifyProfileSections-o3-1DkRS.js"))}function _(){L()&&i([A,D,w,x,G,W,v,q,I])}function E(){a("showGuildRelationship")&&d(import("./profileInjectGuildRel-Blq8KY2c.js"))}function Q(){a("showQuickButtons")&&d(import("./profileInjectQuickButton-HoqgMgpK.js"))}function z(){a("injectBuffGuide")&&d(import("./updateBuffs-DNCRkkaM.js"))}function C(){a("statisticsWrap")&&d(import("./updateStatistics-Kyh-jb4g.js"))}function H(){a("highlightPvpProtection")&&d(import("./highlightPvpProtection-DF_w2Wa-.js"))}function M(){P()&&d(import("./bio-D1ZaQ2tq.js"))}function O(){a("enableBioCompressor")&&d(import("./compressBio-DioB-gBg.js"))}function R(){a("showBuffLevel")&&d(import("./buffLevelDisplay-SqKeszc8.js"))}var F=Object.freeze({__proto__:null,default:function(){h()||(i([_,E,Q,z,C,H,M,O,B,R]),k(3,t),o())}})
export{y as a,L as g,F as p}
//# sourceMappingURL=profile-BtrmW7Y8.js.map
