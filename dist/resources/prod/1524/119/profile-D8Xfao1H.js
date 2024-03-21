import{c as t}from"./colouredDots-CbB6pxg8.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-Cdswf9c6.js"
import{a8 as n,az as s,p as e,cy as r,aC as a,ai as c,g as u,cz as f,ae as p,c4 as l,c5 as m,cu as j,w as d,aT as h}from"./calfSystem-Bit7wh4p.js"
import{d as k}from"./doStatTotal-BMszkFli.js"
import{a as B}from"./asInt-ChOO1BWT.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let g=null
function v(){return r(g)&&(g=b()===a()),g}function L(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>B(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-BzRKMm98.js")).default(t,i)}}function A(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-CoEgEPx6.js"))}function D(){c("enableQuickDrink")&&j(import("./fastWear-DhVRB0KD.js"))}function x(){c("componentWidgets")&&j(import("./components-DWmJPOGh.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-DHiEvZxI.js"))}function z(){c("selectAllLink")&&j(import("./selectAllLink-CqRFp9b0.js"))}function _(){c("nekidButton")&&j(import("./nekidBtn-CXzyqkgM.js"))}function q(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-8JKrBYBE.js"))}function C(){v()&&i([w,A,D,x,W,z,S,_,q])}function E(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-Dez0uPqM.js"))}function G(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-BJq2RBXS.js"))}function I(){c("injectBuffGuide")&&j(import("./updateBuffs-CZmzBNAa.js"))}function Q(){c("statisticsWrap")&&j(import("./updateStatistics-BMLG_ecd.js"))}function R(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-Wf6uoeMF.js"))}function O(){L()&&j(import("./bio-Bn7n32Kw.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-F-8mH-nE.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-L7Z9Mv51.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([C,E,G,I,Q,R,O,T,k,N]),h(3,t),o())}})
export{b as a,v as g,F as p}
//# sourceMappingURL=profile-D8Xfao1H.js.map
