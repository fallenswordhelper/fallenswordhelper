import{a as B}from"./chunk-B6U3AZAR.js";import{a as z,b as G,c as p,d as J}from"./chunk-C7SAF7IW.js";import{a as N,b as P}from"./chunk-L4ZAZMNK.js";import{a as V}from"./chunk-URJHE4YN.js";import{a as C}from"./chunk-P7LHWG3T.js";import{a as E}from"./chunk-KC3JUT6W.js";import{b as K,c as Q}from"./chunk-PNLDJYS7.js";import{a as v,b as f}from"./chunk-BF7TG5EL.js";import{a as S}from"./chunk-YSEBBEII.js";import{a as _}from"./chunk-KWIXRSMY.js";import{a as R}from"./chunk-VFCOMEFT.js";import{a as q}from"./chunk-OFZ4M2H7.js";import{a as H}from"./chunk-WHAZT5VY.js";import{a as F}from"./chunk-74YALW75.js";import{a as A}from"./chunk-2PFHY365.js";import{a as j}from"./chunk-ZDFDMUO4.js";import{a as I}from"./chunk-2V5OQ7JE.js";import{a as D}from"./chunk-N2KVYLIG.js";import{a as i}from"./chunk-3IGXKFMQ.js";import{a as l}from"./chunk-GLHEJYH7.js";import{a as c,b as k}from"./chunk-HAINOYE5.js";import{a as O}from"./chunk-AN5TC666.js";import{sa as m}from"./chunk-YNXRNCRL.js";import{a as s}from"./chunk-DEDCEYVR.js";function ot(t,e,[r,n]){let a=t.find(([,h])=>h===r);return a&&(R(a[0]).style.backgroundColor="#ff0000",e[r]=n),e}function x(t){if(!i(t))return;let r=l('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(a=>[a,a.previousElementSibling.value]),n=A(t).reduce(s(ot,r),{});f("fsh_arenaFull",n)}var o,d;function u(){f(p,o)}function U(t,e){o=o||{},o.minLvl=t,o.maxLvl=e,u()}function W(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function X(){B(U,W)}function Y(){U(c.arenaMinLvl,c.arenaMaxLvl),$("#fshMinLvl").val(o.minLvl),$("#fshMaxLvl").val(o.maxLvl),W()}function Z(t){o=o||{},o.hideMoves=t.target.checked,u(),$(".moveMax").toggle(!t.target.checked)}function tt(t){o=t||{},d=o.id||{},o.id={}}function nt(t,e){let r=o.minLvl,n=o.maxLvl,a=_(e[7]);return P(N,a,r,n)}function at(t,e){return o?nt(t,e):!0}function st(t,e,r,n){return 0?n[4]["@data-order"]==="0":!0}function y(){$.fn.dataTable.ext.search.push(at),O.userIsDev&&$.fn.dataTable.ext.search.push(st)}function it(){let t=$("#pCC > table > tbody > tr:nth-child(4)");return t.clone().insertBefore(t).find("td").attr("height","2"),t.clone().insertAfter(t).find("td").attr("height","1"),t}function ct(t){let e=$("#fshHideMoves",t);o&&"hideMoves"in o&&(e.prop("checked",o.hideMoves),$(".moveMax").toggle(!o.hideMoves)),e.on("click",Z)}function lt(t){let e=$("#fshMinLvl",t);o&&"minLvl"in o?e.val(o.minLvl):e.val(c.arenaMinLvl)}function mt(t){let e=$("#fshMaxLvl",t);o&&"maxLvl"in o?e.val(o.maxLvl):e.val(c.arenaMaxLvl)}function ft(t){$("#fshMinLvl, #fshMaxLvl",t).on("keyup",X),$("#fshReset",t).on("click",Y)}function b(){let t=it(),e=$(G);ct(e),lt(e),mt(e),ft(e),$("td",t).append(e)}function pt(t,e){d&&!d[e]&&(t.css("background-color","#F5F298"),t.find("tr").css("background-color","#F5F298"))}function dt(t,e){let r=/#\s(\d+)/.exec(e.eq(0).text());[r,o,o.id].every(i)&&(o.id[r[1]]=r[1],pt(t,r[1]))}function ut(t){let e=t.eq(1),r=/(\d+)\s\/\s(\d+)/.exec(e.text());r&&e.attr("data-order",(Number(r[1])-Number(r[2]))*100+Number(r[2]))}function ht(t){let e=t.eq(2);e.attr("data-order",$("td",e).first().text().replace(/[,\s]/g,""))}function vt(t,e){let r=/(\d)\.png/.exec($("img",e).attr("src"));r&&$(e).attr("data-order",r[1])}function xt(t){t.slice(4,7).each(vt)}function yt(t,e){o.moves[t[1]]&&o.moves[t[1]]===3&&e.addClass("moveMax")}function bt(t,e){let r=J.exec($("img",t).attr("src"));r&&(yt(r,e),t.attr("data-order",r[1]))}function gt(t,e){let r=t.eq(8);o&&o.moves&&bt(r,e)}function Mt(t){let e=t.eq(8);e.children(m).length===1&&e.attr("data-order",e.find("td").first().text().replace(/[,\s]/g,""))}function Lt(t,e){let r=$(e),n=r.children();dt(r,n),ut(n),ht(n),xt(n),gt(n,r),Mt(n)}function g(t){t.children("tbody").children("tr").each(Lt)}var Tt=t=>[t,Number(t.previousElementSibling.value)];function wt(t,e){return t.r.arenas?e.concat(t.r.arenas.find(r=>r.id===e[1])):e}function $t(t,e){return e.guild_id===t?`<span class="fshRed">${e.name}</span>`:e.name}function et(t){t&&t.classList&&t.classList.add("fshGray")}var Ot=(t,e)=>e.reward_type===1&&t.r.moves,Ft=(t,e)=>t.r.moves.find(r=>r.id===e.reward),kt=t=>t&&t.max===3,At=(t,e)=>Ot(t,e)&&kt(Ft(t,e));function Dt(t,[e,,r]){r&&At(t,r)&&et(e)}function St(t,e,r){let n=r.players.filter(h=>h.guild_id===t).length,a=r.max_players/4;n===a&&et(e)}function Rt(t,e,r){S(r.players.map(s($t,t)).join("<br>"),e),e.classList.add("tip-static"),t&&e.value==="Join"&&St(t,e,r)}var _t=[i,t=>F(t.players),t=>t.players.length>0];function qt(t,[e,,r]){_t.every(n=>n(r))&&Rt(t,e,r)}function Ht(t){return l('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(Tt).map(s(wt,t))}function M(t){if(!t||!t.s||!i(t.r))return;let e=Ht(t);e.forEach(s(qt,q())),e.forEach(s(Dt,t))}var rt="td.sorting, td.sorting_asc, td.sorting_desc";function It(t){let e=t.attr("class"),r=/sorting([^\s]+)/.exec(e);return r&&r[1]==="_desc"?"asc":"desc"}function jt(t,e,r){let n=t.closest(m).DataTable();e!==3?n.order([3,"asc"],[e,r]).draw():n.order([3,r]).draw()}function Et(t){let e=$(t.target).closest("td"),r=It(e);jt(e,e.index(),r)}function L(t){$(rt,t).off("click"),t.on("click",rt,Et)}function T(t){return j(I({cmd:"arena"},t))}function w(){return T({subcmd:"view"})}function Ct(){l('#arenaTypeTabs tr[style="display: none;"]').forEach(e=>e.remove())}function Nt(t,e){let r=$("tr",e).first();$("a",r).contents().unwrap(),$(e).prepend($("<thead/>").append(r))}function Pt(){b(),u(),y()}function Vt(t,[e,r,n]){let a=$('table[width="635"]',t);a.each(Nt),tt(e),g(a),x(r),M(n),Pt(),a.DataTable(z),L(t)}function Bt(t,e){let r=k("betaOptIn");r&&K("arena.process"),Ct(),Vt(t,e),C(),r&&Q("arena.process")}function zt(t){E([v(p),v("fsh_arenaFull"),w().catch(()=>({})),V()],s(Bt,t))}function Gt(){if(H())return;let t=$("#arenaTypeTabs");t.length===1?zt(t):D("arena","Join error screen ?")}export{T as a,w as b,Gt as c};
//# sourceMappingURL=chunk-D264QIQ3.js.map
