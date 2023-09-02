import{c as t}from"./colouredDots-9496dfbc.js"
import{e as i}from"./executeAll-ef9da8be.js"
import{i as o}from"./interceptSubmit-fde9f84f.js"
import{a5 as n,aw as s,p as e,cw as r,aA as a,af as c,g as f,cx as u,ab as p,c1 as l,c2 as m,cq as j,w as d,aP as h}from"./calfSystem-2fff342b.js"
import{d as k}from"./doStatTotal-94a01fa9.js"
import{a as B}from"./asInt-45536bb6.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let w=null
function P(){return r(w)&&(w=y()===a()),w}function g(){const t=P()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const v=t=>B(m)===t
function A(){const t=Number(n(f(u)))
v(t)?p(l,""):p(l,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-55c4e63e.js")).default(t,i)}}function S(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-11ef5288.js"))}function x(){c("enableQuickDrink")&&j(import("./fastWear-a458d7f9.js"))}function D(){c("componentWidgets")&&j(import("./components-4b7ba101.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-e8ccfe13.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-c3e7ea54.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-500460a1.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-9d735545.js"))}function E(){P()&&i([L,S,x,D,W,G,A,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-d36f9aa2.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-a862ee2d.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-b61e4e40.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-963238b0.js"))}function C(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-77e1cb0d.js"))}function O(){g()&&j(import("./bio-95e8fe41.js"))}function F(){c("enableBioCompressor")&&j(import("./compressBio-534abd37.js"))}function H(){c("showBuffLevel")&&j(import("./buffLevelDisplay-73ccbf88.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([E,I,Q,R,z,C,O,F,k,H]),h(3,t),o())}})
export{y as a,P as g,N as p}
//# sourceMappingURL=profile-6f240b96.js.map
