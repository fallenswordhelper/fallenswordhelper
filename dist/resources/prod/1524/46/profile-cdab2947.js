import{C as t,b as i,p as o,z as n,bE as e,K as s,Z as r,J as a,I as f,aA as c,y as u,a as p}from"./calfSystem-7991d843.js"
import{c as m}from"./colouredDots-8db91b1b.js"
import{d as l}from"./doStatTotal-2b4372d2.js"
import{e as d}from"./executeAll-9a33204f.js"
import{p as j}from"./playerName-541d216c.js"
import{a as b}from"./asInt-2a37aa61.js"
import{i as h}from"./interceptSubmit-b3275ec5.js"
let k,y,B
function g(){return k||(k=t(i("h1",o)[0])),k}function P(){return y||(B=g()===j(),y=!0),B}function S(){const i=Number(t(n(e)));(t=>b(s)===t)(i)?r(a,""):r(a,i)}async function v(){const t=f("fastDebuff"),i=f("disableDeactivatePrompts")
if(t||i){(await import("./debuff-b3d60571.js")).default(t,i)}}function x(){f("countAllyEnemy")&&c(import("./profileAllyEnemy-b38310ce.js"))}function A(){f("enableQuickDrink")&&c(import("./fastWear-51e49ff5.js"))}function L(){f("fixFolderImages")&&c(import("./fixFolders-95143d3b.js"))}function D(){f("componentWidgets")&&c(import("./components-b56e9d1a.js"))}function I(){f("quickWearLink")&&c(import("./quickWearLink-ed57666b.js"))}function W(){f("selectAllLink")&&c(import("./selectAllLink-864dd662.js"))}function w(){f("nekidButton")&&c(import("./nekidBtn-33332a19.js"))}function _(){f("ajaxifyProfileSections")&&c(import("./ajaxifyProfileSections-d81bb632.js"))}function E(){P()&&d([v,x,A,L,D,I,W,S,w,_])}function G(){const t=P()
return function(t){return t&&f("renderSelfBio")}(t)||function(t){return!t&&f("renderOtherBios")}(t)}function Q(){f("showGuildRelationship")&&c(import("./profileInjectGuildRel-60e02d28.js"))}function q(){f("showQuickButtons")&&c(import("./profileInjectQuickButton-1940fa34.js"))}function z(){f("injectBuffGuide")&&c(import("./updateBuffs-af75d453.js"))}function C(){f("statisticsWrap")&&c(import("./updateStatistics-16cbc741.js"))}function F(){f("highlightPvpProtection")&&c(import("./highlightPvpProtection-1a7c891d.js"))}function N(){G()&&c(import("./bio-b4fd477b.js"))}function O(){f("enableBioCompressor")&&c(import("./compressBio-127bc7b3.js"))}function R(){f("showBuffLevel")&&c(import("./buffLevelDisplay-cdae8799.js"))}var J=Object.freeze({__proto__:null,default:function(){u()||(d([E,Q,q,z,C,F,N,O,l,R]),p(3,m),P()||h())}})
export{g as a,P as g,J as p}
//# sourceMappingURL=profile-cdab2947.js.map
