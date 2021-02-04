import{a as n}from"./allthen-259c1952.js"
import{c as t}from"./closestTr-8453785a.js"
import{ae as a,D as e,e as s,t as r,af as o,d as c,Q as i,w as l,q as f,x as d,W as u,ag as m,ah as p}from"./calfSystem-37f70deb.js"
import{s as v,g as h}from"./idb-416129aa.js"
import{i as b}from"./intValue-55d66e09.js"
import{c as g}from"./changeMinMax-ab03a69d.js"
import{f as x,a as y,m as L,t as M}from"./assets-4b152e49.js"
import{l as T,p as j}from"./lvlTests-dc675116.js"
import{i as _}from"./interceptSubmit-8392a331.js"
import{l as k}from"./loadDataTables-11148935.js"
import{c as w}from"./currentGuildId-5ba5aa94.js"
import{s as q}from"./setTipped-90ca799b.js"
function F(n,a,[e,s]){const r=n.find((([,n])=>n===e))
return r&&(t(r[0]).style.backgroundColor="#ff0000",a[e]=s),a}let D,E
function C(){v(x,D)}function N(n,t){D=D||{},D.minLvl=n,D.maxLvl=t,C()}function S(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function G(){g(N,S)}function J(){N(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(D.minLvl),$("#fshMaxLvl").val(D.maxLvl),S()}function R(n){D=D||{},D.hideMoves=n.target.checked,C(),$(".moveMax").toggle(!n.target.checked)}function z(n,t){return!D||function(n,t){const a=D.minLvl,e=D.maxLvl,s=b(t[7])
return T(j,s,a,e)}(0,t)}function A(n,t,a,e){return!0}function B(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(y)
!function(n){const t=$("#fshHideMoves",n)
D&&"hideMoves"in D&&(t.prop("checked",D.hideMoves),$(".moveMax").toggle(!D.hideMoves)),t.on("click",R)}(t),function(n){const t=$("#fshMinLvl",n)
D&&"minLvl"in D?t.val(D.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
D&&"maxLvl"in D?t.val(D.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",G),$("#fshReset",n).on("click",J)}(t),$("td",n).append(t)}function H(n,t){const e=/#\s(\d+)/.exec(t.eq(0).text());[e,D,D.id].every(a)&&(D.id[e[1]]=e[1],function(n,t){E&&!E[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e[1]))}function I(n,t){const a=/(\d)\.png/.exec($("img",t).attr("src"))
a&&$(t).attr("data-order",a[1])}function O(n,t){const a=L.exec($("img",n).attr("src"))
a&&(!function(n,t){D.moves[n[1]]&&3===D.moves[n[1]]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a[1]))}function Q(n,t){const a=$(t),e=a.children()
H(a,e),function(n){const t=n.eq(1),a=/(\d+)\s\/\s(\d+)/.exec(t.text())
a&&t.attr("data-order",100*(Number(a[1])-Number(a[2]))+Number(a[2]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(I)}(e),function(n,t){const a=n.eq(8)
D&&D.moves&&O(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(c).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const V=n=>[n,Number(n.previousElementSibling.value)]
function W(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function K(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function P(n){n&&n.classList&&n.classList.add("fshGray")}function U(n,[t,,a]){a&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===a.max
var a})(n,a)&&P(t)}function X(n,t,a){q(a.players.map(r(K,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&P(t)}(n,t,a)}const Y=[a,n=>i(n.players),n=>n.players.length>0]
function Z(n,[t,,a]){Y.every((n=>n(a)))&&X(n,t,a)}function nn(n){if(!n.s||!a(n.r))return
const t=function(n){return e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(V).map(r(W,n))}(n)
t.forEach(r(Z,w())),t.forEach(r(U,n))}const tn="td.sorting, td.sorting_asc, td.sorting_desc"
function an(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class"),a=/sorting([^\s]+)/.exec(t)
return a&&"_desc"===a[1]?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(c).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function en(n){return l(f({cmd:"arena"},n))}function sn(){return en({subcmd:"view"})}function rn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function on(){B(),C(),$.fn.dataTable.ext.search.push(z),$.fn.dataTable.ext.search.push(A)}function cn(n,[t,o,c]){const i=$('table[width="635"]',n)
i.each(rn),function(n){D=n||{},E=D.id||{},D.id={}}(t),function(n){n.children("tbody").children("tr").each(Q)}(i),function(n){if(!a(n))return
const t=e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(F,t),{})
v("fsh_arenaFull",o)}(o),nn(c),on(),i.DataTable(M),function(n){$(tn,n).off("click"),n.on("click",tn,an)}(n)}function ln(n,t){m("arena.process"),e('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),cn(n,t),_(),p("arena.process")}function fn(){if(d())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([h(x),h("fsh_arenaFull"),sn().catch((()=>({}))),k()],r(ln,t))}(t):u("arena","Join error screen ?")}var dn=Object.freeze({__proto__:null,default:fn})
export{en as a,dn as b,fn as i,sn as v}
//# sourceMappingURL=arena-9ede9b2a.js.map
