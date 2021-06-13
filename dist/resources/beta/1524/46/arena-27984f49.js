import{a as n}from"./allthen-34d3fc07.js"
import{c as t}from"./closestTr-205327ed.js"
import{ai as e,E as a,e as s,t as r,as as o,d as i,x as c,q as f,y as l,S as d,at as u,au as m}from"./calfSystem-cbf77dd7.js"
import{s as p,g as v}from"./idb-82a91df1.js"
import{i as h}from"./intValue-19726e4b.js"
import{c as b}from"./changeMinMax-847fc3f2.js"
import{f as g,a as x,m as y,t as L}from"./assets-57c269a1.js"
import{l as M,p as T}from"./lvlTests-f0348094.js"
import{i as j}from"./interceptSubmit-b6d9986f.js"
import{l as _}from"./loadDataTables-e315eea0.js"
import{c as k}from"./currentGuildId-96726c8f.js"
import{i as w}from"./isArray-e47504c9.js"
import{s as q}from"./setTipped-c38098a5.js"
function E(n,e,[a,s]){const r=n.find((([,n])=>n===a))
return r&&(t(r[0]).style.backgroundColor="#ff0000",e[a]=s),e}let F,S
function C(){p(g,F)}function D(n,t){F=F||{},F.minLvl=n,F.maxLvl=t,C()}function N(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){b(D,N)}function G(){D(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(F.minLvl),$("#fshMaxLvl").val(F.maxLvl),N()}function J(n){F=F||{},F.hideMoves=n.target.checked,C(),$(".moveMax").toggle(!n.target.checked)}function R(n,t){return!F||function(n,t){const e=F.minLvl,a=F.maxLvl,s=h(t[7])
return M(T,s,e,a)}(0,t)}function z(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
F&&"hideMoves"in F&&(t.prop("checked",F.hideMoves),$(".moveMax").toggle(!F.hideMoves)),t.on("click",J)}(t),function(n){const t=$("#fshMinLvl",n)
F&&"minLvl"in F?t.val(F.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
F&&"maxLvl"in F?t.val(F.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function B(n,t){const a=/#\s(\d+)/.exec(t.eq(0).text());[a,F,F.id].every(e)&&(F.id[a[1]]=a[1],function(n,t){S&&!S[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,a[1]))}function H(n,t){const e=/(\d)\.png/.exec($("img",t).attr("src"))
e&&$(t).attr("data-order",e[1])}function I(n,t){const e=y.exec($("img",n).attr("src"))
e&&(!function(n,t){F.moves[n[1]]&&3===F.moves[n[1]]&&t.addClass("moveMax")}(e,t),n.attr("data-order",e[1]))}function O(n,t){const e=$(t),a=e.children()
B(e,a),function(n){const t=n.eq(1),e=/(\d+)\s\/\s(\d+)/.exec(t.text())
e&&t.attr("data-order",100*(Number(e[1])-Number(e[2]))+Number(e[2]))}(a),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(a),function(n){n.slice(4,7).each(H)}(a),function(n,t){const e=n.eq(8)
F&&F.moves&&I(e,t)}(a,e),function(n){const t=n.eq(8)
1===t.children(i).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(a)}const V=n=>[n,Number(n.previousElementSibling.value)]
function K(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function P(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function Q(n){n&&n.classList&&n.classList.add("fshGray")}function U(n,[t,,e]){e&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(e=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===e.max
var e})(n,e)&&Q(t)}function W(n,t,e){q(e.players.map(r(P,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,e){e.players.filter((t=>t.guild_id===n)).length===e.max_players/4&&Q(t)}(n,t,e)}const X=[e,n=>w(n.players),n=>n.players.length>0]
function Y(n,[t,,e]){X.every((n=>n(e)))&&W(n,t,e)}function Z(n){if(!n||!n.s||!e(n.r))return
const t=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(V).map(r(K,n))}(n)
t.forEach(r(Y,k())),t.forEach(r(U,n))}const nn="td.sorting, td.sorting_asc, td.sorting_desc"
function tn(n){const t=$(n.target).closest("td"),e=function(n){const t=n.attr("class"),e=/sorting([^\s]+)/.exec(t)
return e&&"_desc"===e[1]?"asc":"desc"}(t)
!function(n,t,e){const a=n.closest(i).DataTable()
3!==t?a.order([3,"asc"],[t,e]).draw():a.order([3,e]).draw()}(t,t.index(),e)}function en(n){return c(f({cmd:"arena"},n))}function an(){return en({subcmd:"view"})}function sn(n,t){const e=$("tr",t).first()
$("a",e).contents().unwrap(),$(t).prepend($("<thead/>").append(e))}function rn(){z(),C(),$.fn.dataTable.ext.search.push(R)}function on(n,[t,o,i]){const c=$('table[width="635"]',n)
c.each(sn),function(n){F=n||{},S=F.id||{},F.id={}}(t),function(n){n.children("tbody").children("tr").each(O)}(c),function(n){if(!e(n))return
const t=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(E,t),{})
p("fsh_arenaFull",o)}(o),Z(i),rn(),c.DataTable(L),function(n){$(nn,n).off("click"),n.on("click",nn,tn)}(n)}function cn(n,t){u("arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),on(n,t),j(),m("arena.process")}function fn(){if(l())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([v(g),v("fsh_arenaFull"),an().catch((()=>({}))),_()],r(cn,t))}(t):d("arena","Join error screen ?")}var ln=Object.freeze({__proto__:null,default:fn})
export{en as a,ln as b,fn as i,an as v}
//# sourceMappingURL=arena-27984f49.js.map
