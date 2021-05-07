import{a as n}from"./allthen-0f84efe6.js"
import{c as t}from"./closestTr-0cdbb46f.js"
import{ah as e,E as a,e as s,t as r,ar as o,d as c,R as i,x as f,q as l,y as d,U as u,as as m,at as p}from"./calfSystem-3cb2f93e.js"
import{s as v,g as h}from"./idb-c9ce87e3.js"
import{i as b}from"./intValue-fefb28df.js"
import{c as g}from"./changeMinMax-54c36996.js"
import{f as x,a as y,m as L,t as M}from"./assets-c96edcaf.js"
import{l as T,p as j}from"./lvlTests-948a22c7.js"
import{i as _}from"./interceptSubmit-4878d2e6.js"
import{l as k}from"./loadDataTables-351ff0a1.js"
import{c as w}from"./currentGuildId-a71d60fb.js"
import{s as q}from"./setTipped-2c9c4c64.js"
function E(n,e,[a,s]){const r=n.find((([,n])=>n===a))
return r&&(t(r[0]).style.backgroundColor="#ff0000",e[a]=s),e}let F,C
function D(){v(x,F)}function N(n,t){F=F||{},F.minLvl=n,F.maxLvl=t,D()}function S(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function R(){g(N,S)}function G(){N(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(F.minLvl),$("#fshMaxLvl").val(F.maxLvl),S()}function J(n){F=F||{},F.hideMoves=n.target.checked,D(),$(".moveMax").toggle(!n.target.checked)}function z(n,t){return!F||function(n,t){const e=F.minLvl,a=F.maxLvl,s=b(t[7])
return T(j,s,e,a)}(0,t)}function A(n,t,e,a){return!0}function B(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(y)
!function(n){const t=$("#fshHideMoves",n)
F&&"hideMoves"in F&&(t.prop("checked",F.hideMoves),$(".moveMax").toggle(!F.hideMoves)),t.on("click",J)}(t),function(n){const t=$("#fshMinLvl",n)
F&&"minLvl"in F?t.val(F.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
F&&"maxLvl"in F?t.val(F.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",R),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function H(n,t){const a=/#\s(\d+)/.exec(t.eq(0).text());[a,F,F.id].every(e)&&(F.id[a[1]]=a[1],function(n,t){C&&!C[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,a[1]))}function I(n,t){const e=/(\d)\.png/.exec($("img",t).attr("src"))
e&&$(t).attr("data-order",e[1])}function O(n,t){const e=L.exec($("img",n).attr("src"))
e&&(!function(n,t){F.moves[n[1]]&&3===F.moves[n[1]]&&t.addClass("moveMax")}(e,t),n.attr("data-order",e[1]))}function U(n,t){const e=$(t),a=e.children()
H(e,a),function(n){const t=n.eq(1),e=/(\d+)\s\/\s(\d+)/.exec(t.text())
e&&t.attr("data-order",100*(Number(e[1])-Number(e[2]))+Number(e[2]))}(a),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(a),function(n){n.slice(4,7).each(I)}(a),function(n,t){const e=n.eq(8)
F&&F.moves&&O(e,t)}(a,e),function(n){const t=n.eq(8)
1===t.children(c).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(a)}const V=n=>[n,Number(n.previousElementSibling.value)]
function K(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function P(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function Q(n){n&&n.classList&&n.classList.add("fshGray")}function W(n,[t,,e]){e&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(e=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===e.max
var e})(n,e)&&Q(t)}function X(n,t,e){q(e.players.map(r(P,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,e){e.players.filter((t=>t.guild_id===n)).length===e.max_players/4&&Q(t)}(n,t,e)}const Y=[e,n=>i(n.players),n=>n.players.length>0]
function Z(n,[t,,e]){Y.every((n=>n(e)))&&X(n,t,e)}function nn(n){if(!n||!n.s||!e(n.r))return
const t=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(V).map(r(K,n))}(n)
t.forEach(r(Z,w())),t.forEach(r(W,n))}const tn="td.sorting, td.sorting_asc, td.sorting_desc"
function en(n){const t=$(n.target).closest("td"),e=function(n){const t=n.attr("class"),e=/sorting([^\s]+)/.exec(t)
return e&&"_desc"===e[1]?"asc":"desc"}(t)
!function(n,t,e){const a=n.closest(c).DataTable()
3!==t?a.order([3,"asc"],[t,e]).draw():a.order([3,e]).draw()}(t,t.index(),e)}function an(n){return f(l({cmd:"arena"},n))}function sn(){return an({subcmd:"view"})}function rn(n,t){const e=$("tr",t).first()
$("a",e).contents().unwrap(),$(t).prepend($("<thead/>").append(e))}function on(){B(),D(),$.fn.dataTable.ext.search.push(z),$.fn.dataTable.ext.search.push(A)}function cn(n,[t,o,c]){const i=$('table[width="635"]',n)
i.each(rn),function(n){F=n||{},C=F.id||{},F.id={}}(t),function(n){n.children("tbody").children("tr").each(U)}(i),function(n){if(!e(n))return
const t=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(E,t),{})
v("fsh_arenaFull",o)}(o),nn(c),on(),i.DataTable(M),function(n){$(tn,n).off("click"),n.on("click",tn,en)}(n)}function fn(n,t){m("arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),cn(n,t),_(),p("arena.process")}function ln(){if(d())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([h(x),h("fsh_arenaFull"),sn().catch((()=>({}))),k()],r(fn,t))}(t):u("arena","Join error screen ?")}var dn=Object.freeze({__proto__:null,default:ln})
export{an as a,dn as b,ln as i,sn as v}
//# sourceMappingURL=arena-79fdb9b1.js.map
