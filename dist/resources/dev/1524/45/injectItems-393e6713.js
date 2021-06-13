import{c as a}from"./createAnchor-0fa218c7.js"
import{c as n}from"./createLi-85fedf56.js"
import{z as e,ad as i,o as t,t as s,h as o,T as r,X as c,c4 as l,c5 as f,c6 as d,c7 as u,E as v,c8 as g,a3 as h,bP as m,aF as p,I as L,c9 as k,Y as y,Z as $,ca as j,c1 as N,a9 as b}from"./calfSystem-6a3c85e0.js"
import{i as B}from"./insertElementAfter-677202b8.js"
import{i as G}from"./insertHtmlAfterEnd-219827a9.js"
import{c as M}from"./currentGuildId-3f5ba5ad.js"
import{i as w}from"./insertHtmlBeforeBegin-5d78259d.js"
import"./insertElementBefore-c442a2a7.js"
function I(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function P(a,n){r("accordion",a),c(n)}function x(a,n){B(n,a)}function A(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(P,i,r)),o(l,f),I(c,x,l)}function E(a){!function(a){a.recipeManagerLink&&A("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&A("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&A("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&A("1","Creature Logs",$,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&A("1","Quick Links",j,"nav-character-notepad")}(a)}function C(a,n,e){E(e),function(a){a.auctionSearchLink&&A("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&A("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&A("2","Find Other",d,"nav-actions-interaction-findplayer"),a.findBuffsLink&&A("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&I("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&I("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${N}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&I("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${b}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-393e6713.js.map
