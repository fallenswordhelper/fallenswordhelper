import{C as t,b as i,p as o,z as e,bH as n,K as s,Z as f,J as a,I as r,aC as c,y as u,a as p}from"./calfSystem-ae2e69af.js"
import{c as m}from"./colouredDots-6efa5d36.js"
import{d as l}from"./doStatTotal-7fb789f5.js"
import{e as d}from"./executeAll-4bb3b899.js"
import{p as j}from"./playerName-1b929217.js"
import{a as b}from"./asInt-0415d444.js"
import{i as h}from"./interceptSubmit-9058efa4.js"
let k,y,B
function g(){return k||(k=t(i("h1",o)[0])),k}function P(){return y||(B=g()===j(),y=!0),B}function S(){const i=Number(t(e(n)));(t=>b(s)===t)(i)?f(a,""):f(a,i)}async function v(){const t=r("fastDebuff"),i=r("disableDeactivatePrompts")
if(t||i){(await import("./debuff-530f8e6f.js")).default(t,i)}}function x(){r("countAllyEnemy")&&c(import("./profileAllyEnemy-5aee9a30.js"))}function L(){r("enableQuickDrink")&&c(import("./fastWear-9b76fc66.js"))}function A(){r("fixFolderImages")&&c(import("./fixFolders-62786385.js"))}function D(){r("componentWidgets")&&c(import("./components-0d4e178d.js"))}function I(){r("quickWearLink")&&c(import("./quickWearLink-10f922ef.js"))}function W(){r("selectAllLink")&&c(import("./selectAllLink-174b0a6c.js"))}function w(){r("nekidButton")&&c(import("./nekidBtn-cab1cc7c.js"))}function _(){r("ajaxifyProfileSections")&&c(import("./ajaxifyProfileSections-f3ad07cc.js"))}function C(){P()&&d([v,x,L,A,D,I,W,S,w,_])}function G(){const t=P()
return function(t){return t&&r("renderSelfBio")}(t)||function(t){return!t&&r("renderOtherBios")}(t)}function Q(){r("showGuildRelationship")&&c(import("./profileInjectGuildRel-8f42f7ca.js"))}function q(){r("showQuickButtons")&&c(import("./profileInjectQuickButton-60de04f7.js"))}function z(){r("injectBuffGuide")&&c(import("./updateBuffs-bc24f762.js"))}function E(){r("statisticsWrap")&&c(import("./updateStatistics-f3857ba5.js"))}function F(){r("highlightPvpProtection")&&c(import("./highlightPvpProtection-6ddb4fcd.js"))}function N(){G()&&c(import("./bio-71bdc117.js"))}function O(){r("enableBioCompressor")&&c(import("./compressBio-679a1659.js"))}function R(){r("showBuffLevel")&&c(import("./buffLevelDisplay-8bee0dae.js"))}var H=Object.freeze({__proto__:null,default:function(){u()||(d([C,Q,q,z,E,F,N,O,l,R]),p(3,m),P()||h())}})
export{g as a,P as g,H as p}
//# sourceMappingURL=profile-edd49393.js.map
