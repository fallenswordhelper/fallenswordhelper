import{c as t}from"./colouredDots-DYqpMLRA.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-Fy_b1It8.js"
import{a8 as n,az as s,p as e,cy as r,aC as a,ai as c,g as u,cz as f,ae as p,c4 as l,c5 as m,cu as j,w as d,aT as h}from"./calfSystem-hszmVKJw.js"
import{d as k}from"./doStatTotal-B0PGURoa.js"
import{a as B}from"./asInt-D7uD_FES.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let g=null
function v(){return r(g)&&(g=b()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>B(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-Ddfg8w3M.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-D0lgl__7.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-BbyqMZje.js"))}function x(){c("componentWidgets")&&j(import("./components-B1Ekmnvf.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-DjqEwkYb.js"))}function z(){c("selectAllLink")&&j(import("./selectAllLink-J6FjHVQN.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-F70bWhIl.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-DBbQMCVz.js"))}function C(){v()&&i([w,A,D,x,W,z,S,_,q])}function E(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-B5DwiXHn.js"))}function G(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-CMfjekWn.js"))}function I(){c("injectBuffGuide")&&j(import("./updateBuffs-B6x6FJX9.js"))}function Q(){c("statisticsWrap")&&j(import("./updateStatistics-CtQmS-rO.js"))}function R(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-Bz4Q_Vsk.js"))}function O(){L()&&j(import("./bio-CwJdkE1t.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-BSD5VlgC.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-BRkr1xYx.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,E,G,I,Q,R,O,T,k,N]),h(3,t),o())}})
export{b as a,v as g,F as p}
//# sourceMappingURL=profile-Ce7TaNKl.js.map
