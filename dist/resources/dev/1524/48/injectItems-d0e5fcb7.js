import{c as a}from"./createAnchor-6205437d.js"
import{c as n}from"./createLi-90108ed9.js"
import{z as e,ag as i,o as t,t as s,h as o,T as r,Y as c,c1 as l,c2 as d,c3 as f,c4 as u,E as v,c5 as g,a4 as h,bR as m,aI as p,I as L,c6 as k,Z as y,_ as $,c7 as j,c0 as N,ac as b}from"./calfSystem-01849445.js"
import{i as B}from"./insertElementAfter-5072c360.js"
import{i as G}from"./insertHtmlAfterEnd-7c1bc6a6.js"
import{c as I}from"./currentGuildId-8dd620e8.js"
import{i as M}from"./insertHtmlBeforeBegin-465533ca.js"
import"./insertElementBefore-5adb1609.js"
function w(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function x(a,n){r("accordion",a),c(n)}function A(a,n){B(n,a)}function E(e,i,r,c){const l=n({className:`nav-level-${e}`}),d=a({className:"nav-link fshPoint",textContent:i})
t(d,s(x,i,r)),o(l,d),w(c,A,l)}function P(a){!function(a){a.recipeManagerLink&&E("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&w("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&w("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&E("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&E("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&E("1","Creature Logs",$,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&E("1","Quick Links",j,"nav-character-notepad")}(a)}function C(a,n,e){P(e),function(a){a.auctionSearchLink&&E("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&E("2","Online Players",d,"nav-actions-interaction-findplayer"),a.findOtherLink&&E("2","Find Other",f,"nav-actions-interaction-findplayer"),a.findBuffsLink&&E("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&I()&&w("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&I()&&!L("useNewGuildLog")&&w("nav-guild-ledger-guildlog",M,`<li class="nav-level-2"><a class="nav-link" href="${N}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&w("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${b}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-d0e5fcb7.js.map
