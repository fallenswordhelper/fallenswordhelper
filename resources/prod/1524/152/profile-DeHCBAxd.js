import{c as t}from"./colouredDots-C7VpQq2a.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-Cvm926dN.js"
import{n,b3 as s,p as e,di as r,b5 as c,aB as u,g as a,dj as f,aw as l,cY as p,cW as m,cX as j,d8 as d,a4 as b,bl as B}from"./calfSystem-BlPuMQGT.js"
import{d as h}from"./doStatTotal-B-MyqY5z.js"
let k=0
function y(){return k||(k=n(s("h1",e())[0])),k}let g=null
function v(){return r(g)&&(g=y()===c()),g}function P(){const t=v()
return function(t){return t&&u("renderSelfBio")}(t)||function(t){return!t&&u("renderOtherBios")}(t)}const S=t=>m(j)===t
function w(){const t=Number(n(a(f)))
S(t)?l(p,""):l(p,t)}async function A(){const t=u("fastDebuff"),i=u("disableDeactivatePrompts")
if(t||i){(await import("./debuff-DNUWVtQq.js")).default(t,i)}}function L(){u("countAllyEnemy")&&d(import("./profileAllyEnemy-CFo9gH-V.js"))}function W(){u("enableQuickDrink")&&d(import("./fastWear-vPG4wdn7.js"))}function x(){u("componentWidgets")&&d(import("./components-DhtSTKzK.js"))}function D(){u("quickWearLink")&&d(import("./quickWearLink-BRommquZ.js"))}function q(){u("selectAllLink")&&d(import("./selectAllLink-BfJKk88r.js"))}function _(){u("nekidButton")&&d(import("./nekidBtn-BCf_zcWm.js"))}function G(){u("ajaxifyProfileSections")&&d(import("./ajaxifyProfileSections-DKhCKeWs.js"))}function Q(){v()&&i([A,L,W,x,D,q,w,_,G])}function z(){u("showGuildRelationship")&&d(import("./profileInjectGuildRel-CPiJHhiF.js"))}function E(){u("showQuickButtons")&&d(import("./profileInjectQuickButton-CXQ7c75G.js"))}function I(){u("injectBuffGuide")&&d(import("./updateBuffs-B6839L9n.js"))}function O(){u("statisticsWrap")&&d(import("./updateStatistics-YNfG2LZ-.js"))}function R(){u("highlightPvpProtection")&&d(import("./highlightPvpProtection-C9L1ZnCK.js"))}function C(){P()&&d(import("./bio-BoOE-k7M.js"))}function J(){u("enableBioCompressor")&&d(import("./compressBio-GdFyGVA_.js"))}function N(){u("showBuffLevel")&&d(import("./buffLevelDisplay-CGpxj8zM.js"))}var T=Object.freeze({__proto__:null,default:function(){b()||(i([Q,z,E,I,O,R,C,J,h,N]),B(3,t),o())}})
export{y as a,v as g,T as p}
//# sourceMappingURL=profile-DeHCBAxd.js.map
