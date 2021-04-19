import{a as n}from"./allthen-b65a93f3.js"
import{c as t}from"./closestTr-57989f73.js"
import{ag as e,E as a,e as s,t as r,aq as o,d as i,x as c,q as f,y as l,W as d}from"./calfSystem-fe534823.js"
import{s as u,g as m}from"./idb-1aaf30fa.js"
import{i as p}from"./intValue-f6303c59.js"
import{c as v}from"./changeMinMax-7a476e50.js"
import{f as h,a as b,m as g,t as x}from"./assets-b1b89ba1.js"
import{l as y,p as L}from"./lvlTests-c0e94680.js"
import{i as M}from"./interceptSubmit-bb91bdd6.js"
import{l as T}from"./loadDataTables-5f8ffe3f.js"
import{c as j}from"./currentGuildId-cf47b942.js"
import{i as _}from"./isArray-f324e0ac.js"
import{s as k}from"./setTipped-70cff648.js"
function w(n,e,[a,s]){const r=n.find((([,n])=>n===a))
return r&&(t(r[0]).style.backgroundColor="#ff0000",e[a]=s),e}let q,E
function F(){u(h,q)}function C(n,t){q=q||{},q.minLvl=n,q.maxLvl=t,F()}function D(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function N(){v(C,D)}function S(){C(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(q.minLvl),$("#fshMaxLvl").val(q.maxLvl),D()}function A(n){q=q||{},q.hideMoves=n.target.checked,F(),$(".moveMax").toggle(!n.target.checked)}function G(n,t){return!q||function(n,t){const e=q.minLvl,a=q.maxLvl,s=p(t[7])
return y(L,s,e,a)}(0,t)}function J(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(b)
!function(n){const t=$("#fshHideMoves",n)
q&&"hideMoves"in q&&(t.prop("checked",q.hideMoves),$(".moveMax").toggle(!q.hideMoves)),t.on("click",A)}(t),function(n){const t=$("#fshMinLvl",n)
q&&"minLvl"in q?t.val(q.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
q&&"maxLvl"in q?t.val(q.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",N),$("#fshReset",n).on("click",S)}(t),$("td",n).append(t)}function R(n,t){const a=/#\s(\d+)/.exec(t.eq(0).text());[a,q,q.id].every(e)&&(q.id[a[1]]=a[1],function(n,t){E&&!E[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,a[1]))}function z(n,t){const e=/(\d)\.png/.exec($("img",t).attr("src"))
e&&$(t).attr("data-order",e[1])}function B(n,t){const e=g.exec($("img",n).attr("src"))
e&&(!function(n,t){q.moves[n[1]]&&3===q.moves[n[1]]&&t.addClass("moveMax")}(e,t),n.attr("data-order",e[1]))}function H(n,t){const e=$(t),a=e.children()
R(e,a),function(n){const t=n.eq(1),e=/(\d+)\s\/\s(\d+)/.exec(t.text())
e&&t.attr("data-order",100*(Number(e[1])-Number(e[2]))+Number(e[2]))}(a),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(a),function(n){n.slice(4,7).each(z)}(a),function(n,t){const e=n.eq(8)
q&&q.moves&&B(e,t)}(a,e),function(n){const t=n.eq(8)
1===t.children(i).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(a)}const I=n=>[n,Number(n.previousElementSibling.value)]
function O(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function V(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function W(n){n&&n.classList&&n.classList.add("fshGray")}function K(n,[t,,e]){e&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(e=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===e.max
var e})(n,e)&&W(t)}function P(n,t,e){k(e.players.map(r(V,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,e){e.players.filter((t=>t.guild_id===n)).length===e.max_players/4&&W(t)}(n,t,e)}const Q=[e,n=>_(n.players),n=>n.players.length>0]
function U(n,[t,,e]){Q.every((n=>n(e)))&&P(n,t,e)}function X(n){if(!n||!n.s||!e(n.r))return
const t=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(I).map(r(O,n))}(n)
t.forEach(r(U,j())),t.forEach(r(K,n))}const Y="td.sorting, td.sorting_asc, td.sorting_desc"
function Z(n){const t=$(n.target).closest("td"),e=function(n){const t=n.attr("class"),e=/sorting([^\s]+)/.exec(t)
return e&&"_desc"===e[1]?"asc":"desc"}(t)
!function(n,t,e){const a=n.closest(i).DataTable()
3!==t?a.order([3,"asc"],[t,e]).draw():a.order([3,e]).draw()}(t,t.index(),e)}function nn(n){return c(f({cmd:"arena"},n))}function tn(){return nn({subcmd:"view"})}function en(n,t){const e=$("tr",t).first()
$("a",e).contents().unwrap(),$(t).prepend($("<thead/>").append(e))}function an(){J(),F(),$.fn.dataTable.ext.search.push(G)}function sn(n,[t,o,i]){const c=$('table[width="635"]',n)
c.each(en),function(n){q=n||{},E=q.id||{},q.id={}}(t),function(n){n.children("tbody").children("tr").each(H)}(c),function(n){if(!e(n))return
const t=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(w,t),{})
u("fsh_arenaFull",o)}(o),X(i),an(),c.DataTable(x),function(n){$(Y,n).off("click"),n.on("click",Y,Z)}(n)}function rn(n,t){a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),sn(n,t),M()}function on(){if(l())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([m(h),m("fsh_arenaFull"),tn().catch((()=>({}))),T()],r(rn,t))}(t):d("arena","Join error screen ?")}var cn=Object.freeze({__proto__:null,default:on})
export{nn as a,cn as b,on as i,tn as v}
//# sourceMappingURL=arena-dd098537.js.map
