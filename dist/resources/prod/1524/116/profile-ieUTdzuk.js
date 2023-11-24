import{c as t}from"./colouredDots-QhnSZaDR.js"
import{e as i}from"./executeAll-EzEelzhH.js"
import{i as o}from"./interceptSubmit-6P3g4nmT.js"
import{a3 as n,au as s,p as e,ct as r,ax as a,ad as u,g as c,cu as f,a9 as p,bY as l,bZ as m,co as j,w as d,aL as b}from"./calfSystem-ZGMc097r.js"
import{d as h}from"./doStatTotal-vfCasUgB.js"
import{a as k}from"./asInt-KJiq9-ya.js"
let B=0
function y(){return B||(B=n(s("h1",e())[0])),B}let g=null
function v(){return r(g)&&(g=y()===a()),g}function x(){const t=v()
return function(t){return t&&u("renderSelfBio")}(t)||function(t){return!t&&u("renderOtherBios")}(t)}const L=t=>k(m)===t
function P(){const t=Number(n(c(f)))
L(t)?p(l,""):p(l,t)}async function S(){const t=u("fastDebuff"),i=u("disableDeactivatePrompts")
if(t||i){(await import("./debuff-RzJRtgc-.js")).default(t,i)}}function w(){u("countAllyEnemy")&&j(import("./profileAllyEnemy-u6kwNio5.js"))}function A(){u("enableQuickDrink")&&j(import("./fastWear-XmkfB_kt.js"))}function D(){u("componentWidgets")&&j(import("./components-H6r1Eyxt.js"))}function W(){u("quickWearLink")&&j(import("./quickWearLink-zKuXuAlj.js"))}function G(){u("selectAllLink")&&j(import("./selectAllLink-0E4b7tGT.js"))}function Q(){u("nekidButton")&&j(import("./nekidBtn-aTn2PPGs.js"))}function _(){u("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-HJvqnabt.js"))}function q(){v()&&i([S,w,A,D,W,G,P,Q,_])}function E(){u("showGuildRelationship")&&j(import("./profileInjectGuildRel-qrwwMoY3.js"))}function I(){u("showQuickButtons")&&j(import("./profileInjectQuickButton-Rgcy6-S5.js"))}function z(){u("injectBuffGuide")&&j(import("./updateBuffs-nW9lKBQJ.js"))}function C(){u("statisticsWrap")&&j(import("./updateStatistics-0EjpRhmU.js"))}function O(){u("highlightPvpProtection")&&j(import("./highlightPvpProtection-VAcu8kSs.js"))}function R(){x()&&j(import("./bio-_fdgMGJx.js"))}function F(){u("enableBioCompressor")&&j(import("./compressBio--6nE2EUI.js"))}function K(){u("showBuffLevel")&&j(import("./buffLevelDisplay-WLimetx-.js"))}var N=Object.freeze({__proto__:null,default:function(){d()||(i([q,E,I,z,C,O,R,F,h,K]),b(3,t),o())}})
export{y as a,v as g,N as p}
//# sourceMappingURL=profile-ieUTdzuk.js.map
