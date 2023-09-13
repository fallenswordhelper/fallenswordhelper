import{a as n,bI as t,j as a,C as e,c as s,bJ as r,r as o,bK as i,bL as c,E as f,w as l,n as u,bM as d,bN as p}from"./calfSystem-2f15e074.js"
import{a as m}from"./all-414e0607.js"
import{i as h}from"./interceptSubmit-1b6c609a.js"
import{l as v}from"./loadDataTables-7cf44f18.js"
import{s as b,g}from"./idb-28aa7d4a.js"
import{c as y}from"./closestTr-ce435b3a.js"
import{f as x,a as L,m as M,t as T}from"./assets-64a7e0eb.js"
import{l as j,p as _}from"./lvlTests-3097e750.js"
import{i as k}from"./intValue-e1798d0a.js"
import{c as w}from"./changeMinMax-d4bd1aea.js"
import{s as E}from"./setTipped-cc91a1bc.js"
function F(t){return n({cmd:"arena",...t})}function S(){return F({subcmd:"view"})}function q(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(y(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let C=0,J=0
const N=()=>C,D=()=>J
function z(){b(x,C)}function P(n,t){C=C||{},C.minLvl=n,C.maxLvl=t,z()}function R(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){w(P,R)}function B(){P(r.arenaMinLvl,r.arenaMaxLvl),$("#fshMinLvl").val(C.minLvl),$("#fshMaxLvl").val(C.maxLvl),R()}function G(n){C=C||{},C.hideMoves=n.target.checked,z(),$(".moveMax").toggle(!n.target.checked)}function H(n,t){return!N()||function(n){const t=N().minLvl,a=N().maxLvl,e=k(n[7])
return j(_,e,t,a)}(t)}function I(n,t,a,e){return!0}function K(n,t,a,e){$(`#${n}`,t).val(N()?.[a]??r[e])}function O(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(L)
!function(n){const t=$("#fshHideMoves",n)
null!=N()?.hideMoves&&(t.prop("checked",N().hideMoves),$(".moveMax").toggle(!N().hideMoves)),t.on("click",G)}(t),function(n){K("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){K("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",B)}(t),$("td",n).append(t)}function U(n,a){const e=o(/#\s(?<id>\d+)/,a.eq(0).text())
e&&t(N()?.id)&&(N().id[e]=e,function(n,t){D()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e))}function V(n,t){const a=o(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function Q(n,t){const a=o(M,$("img",n).attr("src"))
a&&(!function(n,t){3===N()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function W(n,t){const a=$(t),e=a.children()
U(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(V)}(e),function(n,t){const a=n.eq(8)
N()?.moves&&Q(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(i).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const X=n=>[n,Number(n.previousElementSibling.value)]
function Y(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function Z(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function nn(n){n&&n.classList&&n.classList.add("fshGray")}const tn=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function an(n,[t,,a]){a&&tn(n,a)&&nn(t)}function en(n,t,a){E(a.players.map(s(Z,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&nn(t)}(n,t,a)}const sn=[t,n=>f(n.players),n=>n.players.length>0]
function rn(n,[t,,a]){sn.every((n=>n(a)))&&en(n,t,a)}function on(n){if(!n||!n.s||!t(n.r))return
const e=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(X).map(s(Y,n))}(n)
e.forEach(s(rn,c())),e.forEach(s(an,n))}const cn="td.sorting, td.sorting_asc, td.sorting_desc"
function fn(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===o(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(i).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function ln(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function un(){O(),z(),$.fn.dataTable.ext.search.push(H),$.fn.dataTable.ext.search.push(I)}function dn(n,[r,o,i]){const c=$('table[width="635"]',n)
c.each(ln),function(n){C=n||{},J=C.id||{},C.id={}}(r),function(n){n.children("tbody").children("tr").each(W)}(c),function(n){if(!t(n))return
const r=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=e(n).reduce(s(q,r),{})
b("fsh_arenaFull",o)}(o),on(i),un(),c.DataTable(T),function(n){$(cn,n).off("click"),n.on("click",cn,fn)}(n)}function pn(n,t){d("JS Perf","arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),dn(n,t),h(),p("JS Perf","arena.process")}function mn(){if(l())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){pn(n,await m([g(x),g("fsh_arenaFull"),S().catch((()=>({}))),v()]))}(n):u("arena","Join error screen ?")}var hn=Object.freeze({__proto__:null,default:mn})
export{mn as a,F as b,hn as c,S as v}
//# sourceMappingURL=arena-5c2e6929.js.map
