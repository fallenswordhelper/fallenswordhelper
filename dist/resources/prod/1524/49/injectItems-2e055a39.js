import{c as a}from"./createAnchor-24329b70.js"
import{c as n}from"./createLi-70d99e1d.js"
import{z as e,ae as i,o as t,t as s,h as o,S as r,W as c,b$ as l,c0 as f,c1 as d,c2 as u,E as v,c3 as g,a2 as h,bP as m,aG as p,I as L,c4 as k,X as b,Y as y,c5 as $,b_ as j,aa as G}from"./calfSystem-2172498b.js"
import{i as N}from"./insertElementAfter-d7162528.js"
import{i as B}from"./insertHtmlAfterEnd-ab1f79ab.js"
import{c as M}from"./currentGuildId-7d9d343b.js"
import{i as w}from"./insertHtmlBeforeBegin-6f6dcc84.js"
import"./insertElementBefore-c7161beb.js"
function I(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function P(a,n){r("accordion",a),c(n)}function x(a,n){N(n,a)}function A(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(P,i,r)),o(l,f),I(c,x,l)}function E(a){!function(a){a.recipeManagerLink&&A("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&I("nav-character-log",B,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&I("nav-character-log",B,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&A("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&A("1","Combat Logs",b,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&A("1","Creature Logs",y,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&A("1","Quick Links",$,"nav-character-notepad")}(a)}function S(a,n,e){E(e),function(a){a.auctionSearchLink&&A("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&A("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&A("2","Find Other",d,"nav-actions-interaction-findplayer"),a.findBuffsLink&&A("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&I("nav-guild-storehouse-inventory",B,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&I("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&I("nav-toprated-players-level",B,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${G}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default S
//# sourceMappingURL=injectItems-2e055a39.js.map
