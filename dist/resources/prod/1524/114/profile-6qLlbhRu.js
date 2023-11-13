import{c as t}from"./colouredDots-DXYXLxko.js"
import{e as i}from"./executeAll-EzEelzhH.js"
import{i as o}from"./interceptSubmit-cB4BJ9ys.js"
import{a3 as n,au as s,p as e,cs as r,ax as a,ad as c,g as u,ct as f,a9 as p,bY as l,bZ as m,cn as j,w as d,aL as b}from"./calfSystem-rn9Rc_nF.js"
import{d as h}from"./doStatTotal-5BSd8atf.js"
import{a as k}from"./asInt-NFaqrHrG.js"
let B=0
function y(){return B||(B=n(s("h1",e())[0])),B}let g=null
function v(){return r(g)&&(g=y()===a()),g}function x(){const t=v()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const L=t=>k(m)===t
function P(){const t=Number(n(u(f)))
L(t)?p(l,""):p(l,t)}async function S(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-ZSYj7aGY.js")).default(t,i)}}function w(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-u3y1sy_e.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-mMnWYUbq.js"))}function D(){c("componentWidgets")&&j(import("./components-iNH8aKcD.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-RC5UYOy6.js"))}function G(){c("selectAllLink")&&j(import("./selectAllLink-hz0lDXW5.js"))}function Q(){c("nekidButton")&&j(import("./nekidBtn-oYOvZGiC.js"))}function _(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-Tqh1CtPy.js"))}function q(){v()&&i([S,w,A,D,W,G,P,Q,_])}function E(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-OkzYnsBW.js"))}function I(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-mzMhI8PK.js"))}function z(){c("injectBuffGuide")&&j(import("./updateBuffs-SpP3bvhV.js"))}function C(){c("statisticsWrap")&&j(import("./updateStatistics-20JHfPaA.js"))}function O(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-P19a5xSQ.js"))}function R(){x()&&j(import("./bio-9udeT-re.js"))}function F(){c("enableBioCompressor")&&j(import("./compressBio-s4jHwQuc.js"))}function K(){c("showBuffLevel")&&j(import("./buffLevelDisplay-D32234T9.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([q,E,I,z,C,O,R,F,h,K]),b(3,t),o())}})
export{y as a,v as g,N as p}
//# sourceMappingURL=profile-6qLlbhRu.js.map
