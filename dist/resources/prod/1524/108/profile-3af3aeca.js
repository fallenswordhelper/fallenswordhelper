import{c as t}from"./colouredDots-13be7fed.js"
import{e as i}from"./executeAll-ef9da8be.js"
import{i as o}from"./interceptSubmit-2c6bfafb.js"
import{a5 as n,aw as s,p as e,cw as r,aA as a,af as c,g as f,cx as u,ab as p,c1 as l,c2 as m,cq as j,w as d,aP as h}from"./calfSystem-34913441.js"
import{d as k}from"./doStatTotal-feca30dd.js"
import{a as B}from"./asInt-f990b3d0.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let v=null
function w(){return r(v)&&(v=y()===a()),v}function P(){const t=w()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const g=t=>B(m)===t
function A(){const t=Number(n(f(u)))
g(t)?p(l,""):p(l,t)}async function S(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-49f828e5.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-c6fe6597.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-3bd44353.js"))}function L(){c("componentWidgets")&&j(import("./components-1e9d62e5.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-a6aabc38.js"))}function q(){c("selectAllLink")&&j(import("./selectAllLink-4147bbd9.js"))}function G(){c("nekidButton")&&j(import("./nekidBtn-53198cfa.js"))}function Q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-2dc98f7e.js"))}function _(){w()&&i([S,x,D,L,W,q,A,G,Q])}function E(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-342a338c.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-458bbbc8.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-e254b53a.js"))}function C(){c("statisticsWrap")&&j(import("./updateStatistics-56ac6ea8.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-c3284fc8.js"))}function R(){P()&&j(import("./bio-77b70f1b.js"))}function F(){c("enableBioCompressor")&&j(import("./compressBio-57941e53.js"))}function K(){c("showBuffLevel")&&j(import("./buffLevelDisplay-377178ce.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([_,E,I,z,C,O,R,F,k,K]),h(3,t),o())}})
export{y as a,w as g,N as p}
//# sourceMappingURL=profile-3af3aeca.js.map
