import{c as t}from"./colouredDots-c4afc6e5.js"
import{e as o}from"./executeAll-ef9da8be.js"
import{i}from"./interceptSubmit-2c452287.js"
import{a4 as n,av as s,p as e,ct as r,ay as a,ae as c,g as u,cu as f,aa as p,b_ as l,b$ as m,co as j,w as d,aN as b}from"./calfSystem-abb16b0d.js"
import{d as h}from"./doStatTotal-7ecf6088.js"
import{a as k}from"./asInt-030fcf94.js"
let B=0
function y(){return B||(B=n(s("h1",e())[0])),B}let v=null
function g(){return r(v)&&(v=y()===a()),v}function P(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const S=t=>k(m)===t
function w(){const t=Number(n(u(f)))
S(t)?p(l,""):p(l,t)}async function A(){const t=c("fastDebuff"),o=c("disableDeactivatePrompts")
if(t||o){(await import("./debuff-b4e5a209.js")).default(t,o)}}function D(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-3919e757.js"))}function L(){c("enableQuickDrink")&&j(import("./fastWear-ec56843a.js"))}function x(){c("componentWidgets")&&j(import("./components-0bb27efd.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-140fa5a8.js"))}function _(){c("selectAllLink")&&j(import("./selectAllLink-71209a1f.js"))}function Q(){c("nekidButton")&&j(import("./nekidBtn-0fd80fa5.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-9c977554.js"))}function G(){g()&&o([A,D,L,x,W,_,w,Q,q])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-b255e2aa.js"))}function z(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-18f079ff.js"))}function C(){c("injectBuffGuide")&&j(import("./updateBuffs-96e43dc6.js"))}function E(){c("statisticsWrap")&&j(import("./updateStatistics-69d6c8ae.js"))}function N(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-1bc85c52.js"))}function O(){P()&&j(import("./bio-a2102312.js"))}function R(){c("enableBioCompressor")&&j(import("./compressBio-ad0ea156.js"))}function K(){c("showBuffLevel")&&j(import("./buffLevelDisplay-0779d6d4.js"))}var T=Object.freeze({__proto__:null,default:function(){d()||(o([G,I,z,C,E,N,O,R,h,K]),b(3,t),i())}})
export{y as a,g,T as p}
//# sourceMappingURL=profile-366ec6e6.js.map
