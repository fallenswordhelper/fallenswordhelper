import{c as t}from"./colouredDots-d7522def.js"
import{e as i}from"./executeAll-ef9da8be.js"
import{i as o}from"./interceptSubmit-54adf362.js"
import{a5 as n,aw as s,p as e,cw as r,aA as a,af as c,g as f,cx as u,ab as p,c1 as l,c2 as m,cq as j,w as d,aP as h}from"./calfSystem-076d7a01.js"
import{d as k}from"./doStatTotal-5f1c8221.js"
import{a as B}from"./asInt-25fb7d3c.js"
let b=0
function y(){return b||(b=n(s("h1",e())[0])),b}let w=null
function P(){return r(w)&&(w=y()===a()),w}function g(){const t=P()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const v=t=>B(m)===t
function A(){const t=Number(n(f(u)))
v(t)?p(l,""):p(l,t)}async function L(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-b3193813.js")).default(t,i)}}function S(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-5be49410.js"))}function x(){c("enableQuickDrink")&&j(import("./fastWear-b72ee516.js"))}function D(){c("componentWidgets")&&j(import("./components-7d3b426c.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-ecba409c.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-375b11ff.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-80ae0d86.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-8eb31b1c.js"))}function E(){P()&&i([L,S,x,D,W,G,A,_,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-0ca228a7.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-8670b4ea.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-82f02541.js"))}function z(){c("statisticsWrap")&&j(import("./updateStatistics-84da17ad.js"))}function C(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-741c1147.js"))}function O(){g()&&j(import("./bio-875522f1.js"))}function F(){c("enableBioCompressor")&&j(import("./compressBio-51d2c107.js"))}function H(){c("showBuffLevel")&&j(import("./buffLevelDisplay-021b8bbe.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([E,I,Q,R,z,C,O,F,k,H]),h(3,t),o())}})
export{y as a,P as g,N as p}
//# sourceMappingURL=profile-f952c191.js.map
