import{a as B}from"./chunk-OSSPEUOU.js";import{a as J}from"./chunk-2I377PGA.js";import{a as G}from"./chunk-7YBBGNO5.js";import{a as P,b as z,c as d,d as V}from"./chunk-IBCPEFGU.js";import{a as N}from"./chunk-YJMONPHD.js";import{a as E}from"./chunk-CGP6PEOR.js";import{b as K,c as Q}from"./chunk-6XBHVXKT.js";import{a as C}from"./chunk-COVFZC6T.js";import{a as A}from"./chunk-V7YJKIIO.js";import{a as O}from"./chunk-3JDXB3EI.js";import{a as f}from"./chunk-3F6JEXZ5.js";import{a as I,b as S}from"./chunk-2TN2MIGB.js";import{a as q}from"./chunk-XCFUVUC4.js";import{a as H}from"./chunk-2U4UTP4T.js";import{a as _}from"./chunk-PYVS5VYO.js";import{a as R}from"./chunk-S4QW6F63.js";import{a as s}from"./chunk-XFCSBA6U.js";import{a as F}from"./chunk-4L4BW6XC.js";import{a as i}from"./chunk-6OIRWEPN.js";import{a as v,b as m}from"./chunk-LR3ZNNXD.js";import{a as c,b as D}from"./chunk-WAWYOTCQ.js";import{ua as l}from"./chunk-J2ILMRN6.js";import{a as k}from"./chunk-ZDQ6OSIO.js";function rt(t,e,[r,n]){let a=t.find(([,h])=>h===r);return a&&(E(a[0]).style.backgroundColor="#ff0000",e[r]=n),e}function x(t){if(!s(t))return;let r=f('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(a=>[a,a.previousElementSibling.value]),n=F(t).reduce(i(rt,r),{});m("fsh_arenaFull",n)}var o,p;function u(){m(d,o)}function j(t,e){o=o||{},o.minLvl=t,o.maxLvl=e,u()}function U(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function W(){B(j,U)}function X(){j(c.arenaMinLvl,c.arenaMaxLvl),$("#fshMinLvl").val(o.minLvl),$("#fshMaxLvl").val(o.maxLvl),U()}function Y(t){o=o||{},o.hideMoves=t.target.checked,u(),$(".moveMax").toggle(!t.target.checked)}function Z(t){o=t||{},p=o.id||{},o.id={}}function ot(t,e){let r=o.minLvl,n=o.maxLvl,a=_(e[7]);return S(I,a,r,n)}function nt(t,e){return o?ot(t,e):!0}function at(t,e,r,n){return!0}function b(){$.fn.dataTable.ext.search.push(nt),k.userIsDev&&$.fn.dataTable.ext.search.push(at)}function it(){let t=$("#pCC > table > tbody > tr:nth-child(4)");return t.clone().insertBefore(t).find("td").attr("height","2"),t.clone().insertAfter(t).find("td").attr("height","1"),t}function st(t){let e=$("#fshHideMoves",t);o&&"hideMoves"in o&&(e.prop("checked",o.hideMoves),$(".moveMax").toggle(!o.hideMoves)),e.on("click",Y)}function ct(t){let e=$("#fshMinLvl",t);o&&"minLvl"in o?e.val(o.minLvl):e.val(c.arenaMinLvl)}function ft(t){let e=$("#fshMaxLvl",t);o&&"maxLvl"in o?e.val(o.maxLvl):e.val(c.arenaMaxLvl)}function lt(t){$("#fshMinLvl, #fshMaxLvl",t).on("keyup",W),$("#fshReset",t).on("click",X)}function y(){let t=it(),e=$(z);st(e),ct(e),ft(e),lt(e),$("td",t).append(e)}function mt(t,e){p&&!p[e]&&(t.css("background-color","#F5F298"),t.find("tr").css("background-color","#F5F298"))}function dt(t,e){let r=/#\s(\d+)/.exec(e.eq(0).text());[r,o,o.id].every(s)&&(o.id[r[1]]=r[1],mt(t,r[1]))}function pt(t){let e=t.eq(1),r=e.text().split(/\s\/\s/);r&&e.attr("data-order",(Number(r[0])-Number(r[1]))*100+Number(r[1]))}function ut(t){let e=t.eq(2);e.attr("data-order",$("td",e).first().text().replace(/[,\s]/g,""))}function ht(t,e){let r=/(\d)\.png/.exec($("img",e).attr("src"));r&&$(e).attr("data-order",r[1])}function vt(t){t.slice(4,7).each(ht)}function xt(t,e){o.moves[t[1]]&&o.moves[t[1]]===3&&e.addClass("moveMax")}function bt(t,e){let r=V.exec($("img",t).attr("src"));r&&(xt(r,e),t.attr("data-order",r[1]))}function yt(t,e){let r=t.eq(8);o&&o.moves&&bt(r,e)}function gt(t){let e=t.eq(8);e.children(l).length===1&&e.attr("data-order",e.find("td").first().text().replace(/[,\s]/g,""))}function Mt(t,e){let r=$(e),n=r.children();dt(r,n),pt(n),ut(n),vt(n),yt(n,r),gt(n)}function g(t){t.children("tbody").children("tr").each(Mt)}var Lt=t=>[t,Number(t.previousElementSibling.value)];function wt(t,e){return t.r.arenas?e.concat(t.r.arenas.find(r=>r.id===e[1])):e}function $t(t,e){return e.guild_id===t?`<span class="fshRed">${e.name}</span>`:e.name}function tt(t){t&&t.classList&&t.classList.add("fshGray")}var Tt=(t,e)=>e.reward_type===1&&t.r.moves,kt=(t,e)=>t.r.moves.find(r=>r.id===e.reward),Dt=t=>t&&t.max===3,Ot=(t,e)=>Tt(t,e)&&Dt(kt(t,e));function Ft(t,[e,,r]){r&&Ot(t,r)&&tt(e)}function Rt(t,e,r){let n=r.players.filter(h=>h.guild_id===t).length,a=r.max_players/4;n===a&&tt(e)}function _t(t,e,r){J(r.players.map(i($t,t)).join("<br>"),e),e.classList.add("tip-static"),t&&e.value==="Join"&&Rt(t,e,r)}var Ht=[s,t=>O(t.players),t=>t.players.length>0];function It(t,[e,,r]){Ht.every(n=>n(r))&&_t(t,e,r)}function St(t){return f('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(Lt).map(i(wt,t))}function M(t){if(!t||!t.s||!s(t.r))return;let e=St(t);e.forEach(i(It,H())),e.forEach(i(Ft,t))}var et="td.sorting, td.sorting_asc, td.sorting_desc";function qt(t){let e=t.attr("class"),r=/sorting([^\s]+)/.exec(e);return r&&r[1]==="_desc"?"asc":"desc"}function At(t,e,r){let n=t.closest(l).DataTable();e!==3?n.order([3,"asc"],[e,r]).draw():n.order([3,r]).draw()}function Ct(t){let e=$(t.target).closest("td"),r=qt(e);At(e,e.index(),r)}function L(t){$(et,t).off("click"),t.on("click",et,Ct)}function w(t){return A({cmd:"arena",...t})}function T(){return w({subcmd:"view"})}function Et(){f('#arenaTypeTabs tr[style="display: none;"]').forEach(e=>e.remove())}function Nt(t,e){let r=$("tr",e).first();$("a",r).contents().unwrap(),$(e).prepend($("<thead/>").append(r))}function Bt(){y(),u(),b()}function Pt(t,[e,r,n]){let a=$('table[width="635"]',t);a.each(Nt),Z(e),g(a),x(r),M(n),Bt(),a.DataTable(P),L(t)}function zt(t,e){let r=D("betaOptIn");r&&K("arena.process"),Et(),Pt(t,e),G(),r&&Q("arena.process")}function Vt(t){N([v(d),v("fsh_arenaFull"),T().catch(()=>({})),q()],i(zt,t))}function Gt(){if(R())return;let t=$("#arenaTypeTabs");t.length===1?Vt(t):C("arena","Join error screen ?")}export{w as a,T as b,Gt as c};
//# sourceMappingURL=chunk-FADHZ25P.js.map
