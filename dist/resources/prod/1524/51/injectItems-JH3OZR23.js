import{a as D}from"./chunk-I6LPG6MF.js";import{a as H}from"./chunk-RIBB3TW7.js";import{a as M}from"./chunk-5YGGYRSE.js";import{a as c}from"./chunk-T5AVYL5Z.js";import{a as G}from"./chunk-ZAUIJHD6.js";import{j as $,l as b,m as w,n as S,o as I,r as Q,s as O,t as U,u as q}from"./chunk-HXGZXAAM.js";import"./chunk-5ITL5FDM.js";import{a as u}from"./chunk-OFZ4M2H7.js";import"./chunk-LVNLH6ER.js";import{a as x}from"./chunk-73DVOOSI.js";import"./chunk-57PZ6XJI.js";import"./chunk-EUBCJC2U.js";import"./chunk-UWAT3VA7.js";import{a as j}from"./chunk-R5ZZQ5HH.js";import"./chunk-XQ3ZEJ26.js";import"./chunk-PO34EML4.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import{a as y}from"./chunk-JSWEJZHY.js";import"./chunk-4OJTKSB2.js";import{a as P}from"./chunk-G3O526VI.js";import"./chunk-GHQYBWLT.js";import{a as E}from"./chunk-N2KVYLIG.js";import"./chunk-PKDG64MH.js";import{a as A}from"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import{a as f}from"./chunk-GLHEJYH7.js";import"./chunk-EPYDL6MF.js";import"./chunk-TDNJGM62.js";import"./chunk-TP7JP7VV.js";import{b as a}from"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import{A as s,m as L,n as m,p as v,u as k}from"./chunk-YNXRNCRL.js";import"./chunk-7DPOBF7C.js";import{a as B}from"./chunk-DEDCEYVR.js";function o(e,t,n){let i=A(e);if(i instanceof Node){let l=i.parentNode;t(l,n)}else y(`#${e} is not a Node`,!1)}function F(e,t){E("accordion",e),G(t)}function R(e,t){D(t,e)}function r(e,t,n,i){let l=H({className:`nav-level-${e}`}),h=M({className:"nav-link fshPoint",textContent:t});P(h,B(F,t,n)),j(l,h),o(i,R,l)}function d(e){e.auctionSearchLink&&r("2","AH Quick Search",Q,"nav-actions-trade-auctionhouse"),e.onlinePlayersLink&&r("2","Online Players",S,"nav-actions-interaction-findplayer"),e.findOtherLink&&r("2","Find Other",q,"nav-actions-interaction-findplayer"),e.findBuffsLink&&r("2","Find Buffs",U,"nav-actions-interaction-findplayer")}function p(e,t){t.heights=f("#nav > li").map(i=>f("li",i).length*22||null);let n=Number(t.state);n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}function V(e){e.recipeManagerLink&&r("1","Recipe Manager",I,"nav-character-log")}function N(e){e.inventoryManagerLink&&o("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${s}invmanagernew">Inventory Manager</a></li>`)}function T(e){e.medalGuideLink&&o("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${k}${m}medalguide">Medal Guide</a></li>`)}function z(e){e.buffLogLink&&a("keepBuffLog")&&r("1","Buff Log",$,"nav-character-log")}function J(e){e.combatLogLink&&a("keepLogs")&&r("1","Combat Logs",w,"nav-character-notepad")}function K(e){e.creatureLogLink&&a("showMonsterLog")&&r("1","Creature Logs",b,"nav-character-notepad")}function W(e){e.quickLinksLink&&r("1","Quick Links",O,"nav-character-notepad")}function g(e){V(e),N(e),T(e),z(e),J(e),K(e),W(e)}function X(e){e.guildInventoryLink&&u()&&o("nav-guild-storehouse-inventory",c,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${s}guildinvmgr">Guild Inventory</a></li>`)}function Y(e){e.newGuildLogLink&&u()&&!a("useNewGuildLog")&&o("nav-guild-ledger-guildlog",x,`<li class="nav-level-2"><a class="nav-link" href="${v}">New Guild Log</a></li>`)}function Z(e){e.topRatedLink&&o("nav-toprated-players-level",c,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${L}toprated${m}xp">Top 250 Players</a></li>`)}function _(e,t,n){g(n),d(n),X(n),Y(n),Z(n),p(e,t)}export{_ as default};
//# sourceMappingURL=injectItems-JH3OZR23.js.map
