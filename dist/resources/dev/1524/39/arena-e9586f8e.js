import{a as n}from"./allthen-b65a93f3.js"
import{c as t}from"./closestTr-51be90ef.js"
import{ah as a,E as e,e as s,t as r,ar as o,d as c,R as i,x as f,q as l,y as d,X as u,as as m,at as p}from"./calfSystem-b31aba65.js"
import{s as v,g as h}from"./idb-71729176.js"
import{i as b}from"./intValue-f6303c59.js"
import{c as g}from"./changeMinMax-7a476e50.js"
import{f as x,a as y,m as L,t as M}from"./assets-b1b89ba1.js"
import{l as T,p as j}from"./lvlTests-f49fda0d.js"
import{i as _}from"./interceptSubmit-b313ecea.js"
import{l as k}from"./loadDataTables-7c33b9c3.js"
import{c as w}from"./currentGuildId-c379e204.js"
import{s as q}from"./setTipped-70cff648.js"
function E(n,a,[e,s]){const r=n.find((([,n])=>n===e))
return r&&(t(r[0]).style.backgroundColor="#ff0000",a[e]=s),a}let F,C
function D(){v(x,F)}function N(n,t){F=F||{},F.minLvl=n,F.maxLvl=t,D()}function S(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function R(){g(N,S)}function G(){N(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(F.minLvl),$("#fshMaxLvl").val(F.maxLvl),S()}function J(n){F=F||{},F.hideMoves=n.target.checked,D(),$(".moveMax").toggle(!n.target.checked)}function z(n,t){return!F||function(n,t){const a=F.minLvl,e=F.maxLvl,s=b(t[7])
return T(j,s,a,e)}(0,t)}function A(n,t,a,e){return!0}function B(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(y)
!function(n){const t=$("#fshHideMoves",n)
F&&"hideMoves"in F&&(t.prop("checked",F.hideMoves),$(".moveMax").toggle(!F.hideMoves)),t.on("click",J)}(t),function(n){const t=$("#fshMinLvl",n)
F&&"minLvl"in F?t.val(F.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
F&&"maxLvl"in F?t.val(F.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",R),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function H(n,t){const e=/#\s(\d+)/.exec(t.eq(0).text());[e,F,F.id].every(a)&&(F.id[e[1]]=e[1],function(n,t){C&&!C[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e[1]))}function I(n,t){const a=/(\d)\.png/.exec($("img",t).attr("src"))
a&&$(t).attr("data-order",a[1])}function O(n,t){const a=L.exec($("img",n).attr("src"))
a&&(!function(n,t){F.moves[n[1]]&&3===F.moves[n[1]]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a[1]))}function V(n,t){const a=$(t),e=a.children()
H(a,e),function(n){const t=n.eq(1),a=/(\d+)\s\/\s(\d+)/.exec(t.text())
a&&t.attr("data-order",100*(Number(a[1])-Number(a[2]))+Number(a[2]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(I)}(e),function(n,t){const a=n.eq(8)
F&&F.moves&&O(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(c).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const X=n=>[n,Number(n.previousElementSibling.value)]
function K(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function P(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function Q(n){n&&n.classList&&n.classList.add("fshGray")}function U(n,[t,,a]){a&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===a.max
var a})(n,a)&&Q(t)}function W(n,t,a){q(a.players.map(r(P,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&Q(t)}(n,t,a)}const Y=[a,n=>i(n.players),n=>n.players.length>0]
function Z(n,[t,,a]){Y.every((n=>n(a)))&&W(n,t,a)}function nn(n){if(!n||!n.s||!a(n.r))return
const t=function(n){return e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(X).map(r(K,n))}(n)
t.forEach(r(Z,w())),t.forEach(r(U,n))}const tn="td.sorting, td.sorting_asc, td.sorting_desc"
function an(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class"),a=/sorting([^\s]+)/.exec(t)
return a&&"_desc"===a[1]?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(c).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function en(n){return f(l({cmd:"arena"},n))}function sn(){return en({subcmd:"view"})}function rn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function on(){B(),D(),$.fn.dataTable.ext.search.push(z),$.fn.dataTable.ext.search.push(A)}function cn(n,[t,o,c]){const i=$('table[width="635"]',n)
i.each(rn),function(n){F=n||{},C=F.id||{},F.id={}}(t),function(n){n.children("tbody").children("tr").each(V)}(i),function(n){if(!a(n))return
const t=e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(E,t),{})
v("fsh_arenaFull",o)}(o),nn(c),on(),i.DataTable(M),function(n){$(tn,n).off("click"),n.on("click",tn,an)}(n)}function fn(n,t){m("arena.process"),e('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),cn(n,t),_(),p("arena.process")}function ln(){if(d())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([h(x),h("fsh_arenaFull"),sn().catch((()=>({}))),k()],r(fn,t))}(t):u("arena","Join error screen ?")}var dn=Object.freeze({__proto__:null,default:ln})
export{en as a,dn as b,ln as i,sn as v}
//# sourceMappingURL=arena-e9586f8e.js.map
