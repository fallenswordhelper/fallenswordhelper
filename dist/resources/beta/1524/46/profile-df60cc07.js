import{C as t,b as i,p as o,z as n,bH as e,K as s,Z as f,J as a,I as r,aC as c,y as u,a as p}from"./calfSystem-cbf77dd7.js"
import{c as m}from"./colouredDots-9edfaf4c.js"
import{d as l}from"./doStatTotal-94b8b51b.js"
import{e as j}from"./executeAll-9a33204f.js"
import{p as d}from"./playerName-448aa7ca.js"
import{a as b}from"./asInt-f1541708.js"
import{i as h}from"./interceptSubmit-b6d9986f.js"
let k,y,B
function g(){return k||(k=t(i("h1",o)[0])),k}function P(){return y||(B=g()===d(),y=!0),B}function S(){const i=Number(t(n(e)));(t=>b(s)===t)(i)?f(a,""):f(a,i)}async function v(){const t=r("fastDebuff"),i=r("disableDeactivatePrompts")
if(t||i){(await import("./debuff-fdf3c305.js")).default(t,i)}}function x(){r("countAllyEnemy")&&c(import("./profileAllyEnemy-36b2e4c0.js"))}function L(){r("enableQuickDrink")&&c(import("./fastWear-4754d1ee.js"))}function A(){r("fixFolderImages")&&c(import("./fixFolders-d971e5a3.js"))}function D(){r("componentWidgets")&&c(import("./components-b548c5ac.js"))}function I(){r("quickWearLink")&&c(import("./quickWearLink-69014960.js"))}function W(){r("selectAllLink")&&c(import("./selectAllLink-686447ff.js"))}function w(){r("nekidButton")&&c(import("./nekidBtn-be7beae0.js"))}function _(){r("ajaxifyProfileSections")&&c(import("./ajaxifyProfileSections-e9d8243c.js"))}function C(){P()&&j([v,x,L,A,D,I,W,S,w,_])}function G(){const t=P()
return function(t){return t&&r("renderSelfBio")}(t)||function(t){return!t&&r("renderOtherBios")}(t)}function Q(){r("showGuildRelationship")&&c(import("./profileInjectGuildRel-aa7f8a95.js"))}function q(){r("showQuickButtons")&&c(import("./profileInjectQuickButton-b1c98760.js"))}function z(){r("injectBuffGuide")&&c(import("./updateBuffs-f724f171.js"))}function E(){r("statisticsWrap")&&c(import("./updateStatistics-ce91a813.js"))}function F(){r("highlightPvpProtection")&&c(import("./highlightPvpProtection-cf6a4c6f.js"))}function N(){G()&&c(import("./bio-22d84bba.js"))}function O(){r("enableBioCompressor")&&c(import("./compressBio-fc563f0f.js"))}function R(){r("showBuffLevel")&&c(import("./buffLevelDisplay-4a35a8e7.js"))}var H=Object.freeze({__proto__:null,default:function(){u()||(j([C,Q,q,z,E,F,N,O,l,R]),p(3,m),P()||h())}})
export{g as a,P as g,H as p}
//# sourceMappingURL=profile-df60cc07.js.map
