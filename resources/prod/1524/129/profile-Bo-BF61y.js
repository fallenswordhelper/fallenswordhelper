import{c as t}from"./colouredDots-ib5-6Jcx.js"
import{e as i}from"./executeAll-DIAWIge1.js"
import{i as o}from"./interceptSubmit-DWgiQbkW.js"
import{a8 as n,az as s,p as e,cx as r,aB as a,ai as c,g as u,cy as f,ae as p,c3 as l,c4 as m,ct as j,w as d,aT as B}from"./calfSystem-B3Rc3sVt.js"
import{d as h}from"./doStatTotal-CUaKfHvk.js"
import{a as k}from"./asInt-Ba7iwPlc.js"
let y=0
function b(){return y||(y=n(s("h1",e())[0])),y}let v=null
function g(){return r(v)&&(v=b()===a()),v}function L(){const t=g()
return function(t){return t&&c("renderSelfBio")}(t)||function(t){return!t&&c("renderOtherBios")}(t)}const P=t=>k(m)===t
function S(){const t=Number(n(u(f)))
P(t)?p(l,""):p(l,t)}async function w(){const t=c("fastDebuff"),i=c("disableDeactivatePrompts")
if(t||i){(await import("./debuff-cBW5VeTT.js")).default(t,i)}}function x(){c("countAllyEnemy")&&j(import("./profileAllyEnemy-CdgOTq7z.js"))}function A(){c("enableQuickDrink")&&j(import("./fastWear-CiMGY6yU.js"))}function D(){c("componentWidgets")&&j(import("./components-D4gBNXuz.js"))}function W(){c("quickWearLink")&&j(import("./quickWearLink-DlIEdVtn.js"))}function _(){c("selectAllLink")&&j(import("./selectAllLink-hcyPpKlz.js"))}function q(){c("nekidButton")&&j(import("./nekidBtn-qLh0eOgd.js"))}function z(){c("ajaxifyProfileSections")&&j(import("./ajaxifyProfileSections-BGQEWZau.js"))}function G(){g()&&i([w,x,A,D,W,_,S,q,z])}function I(){c("showGuildRelationship")&&j(import("./profileInjectGuildRel-D9ZG01yh.js"))}function Q(){c("showQuickButtons")&&j(import("./profileInjectQuickButton-Bc9LGd84.js"))}function R(){c("injectBuffGuide")&&j(import("./updateBuffs-BEwDR6V7.js"))}function C(){c("statisticsWrap")&&j(import("./updateStatistics-ChxsuJzg.js"))}function E(){c("highlightPvpProtection")&&j(import("./highlightPvpProtection-DKYFxocS.js"))}function O(){L()&&j(import("./bio-DrDuIRrg.js"))}function T(){c("enableBioCompressor")&&j(import("./compressBio-8pjdBYlr.js"))}function N(){c("showBuffLevel")&&j(import("./buffLevelDisplay-aq7XxIAQ.js"))}var F=Object.freeze({__proto__:null,default:function(){d()||(i([G,I,Q,R,C,E,O,T,h,N]),B(3,t),o())}})
export{b as a,g,F as p}
//# sourceMappingURL=profile-Bo-BF61y.js.map
