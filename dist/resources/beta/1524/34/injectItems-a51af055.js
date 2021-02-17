import{c as a}from"./createAnchor-f3eb99a7.js"
import{c as n}from"./createLi-2ae6a63d.js"
import{y as e,ab as i,o as t,t as s,h as o,V as r,W as c,c1 as l,c2 as f,c3 as d,c4 as u,D as v,c5 as g,a1 as h,bI as m,aq as p,H as L,c6 as k,X as y,Y as b,c7 as $,bY as j,a7 as N}from"./calfSystem-dfa26790.js"
import{i as B}from"./insertElementAfter-73b44a15.js"
import{i as G}from"./insertHtmlAfterEnd-1adfe0ea.js"
import{c as M}from"./currentGuildId-8fb4e32d.js"
import{i as w}from"./insertHtmlBeforeBegin-2480fc3f.js"
import"./insertElementBefore-9e5d02cd.js"
function I(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function x(a,n){r("accordion",a),c(n)}function A(a,n){B(n,a)}function H(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(x,i,r)),o(l,f),I(c,A,l)}function P(a){!function(a){a.recipeManagerLink&&H("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&H("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&H("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&H("1","Creature Logs",b,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&H("1","Quick Links",$,"nav-character-notepad")}(a)}function C(a,n,e){P(e),function(a){a.auctionSearchLink&&H("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&H("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&H("2","Find Other",d,"nav-actions-interaction-findplayer"),a.findBuffsLink&&H("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&I("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&I("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&I("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-a51af055.js.map
