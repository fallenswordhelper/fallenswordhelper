import{a as n,bG as t,j as a,C as e,c as s,bH as r,r as o,bI as i,bJ as c,w as f,n as l,bK as u,bL as d}from"./calfSystem-abb16b0d.js"
import{a as m}from"./all-414e0607.js"
import{i as p}from"./interceptSubmit-2c452287.js"
import{l as h}from"./loadDataTables-36dfed14.js"
import{s as v,g as b}from"./idb-e719862a.js"
import{c as g}from"./closestTr-d0dbc351.js"
import{f as y,a as x,m as L,t as M}from"./assets-64a7e0eb.js"
import{l as T,p as j}from"./lvlTests-3097e750.js"
import{i as _}from"./intValue-e1798d0a.js"
import{c as k}from"./changeMinMax-d4bd1aea.js"
import{i as w}from"./isArray-09a53da7.js"
import{s as F}from"./setTipped-cc91a1bc.js"
function S(t){return n({cmd:"arena",...t})}function q(){return S({subcmd:"view"})}function C(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(g(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let E=0,J=0
const D=()=>E,N=()=>J
function A(){v(y,E)}function G(n,t){E=E||{},E.minLvl=n,E.maxLvl=t,A()}function H(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function K(){k(G,H)}function P(){G(r.arenaMinLvl,r.arenaMaxLvl),$("#fshMinLvl").val(E.minLvl),$("#fshMaxLvl").val(E.maxLvl),H()}function R(n){E=E||{},E.hideMoves=n.target.checked,A(),$(".moveMax").toggle(!n.target.checked)}function z(n,t){return!D()||function(n){const t=D().minLvl,a=D().maxLvl,e=_(n[7])
return T(j,e,t,a)}(t)}function B(n,t,a,e){return!0}function I(n,t,a,e){$(`#${n}`,t).val(D()?.[a]??r[e])}function O(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=D()?.hideMoves&&(t.prop("checked",D().hideMoves),$(".moveMax").toggle(!D().hideMoves)),t.on("click",R)}(t),function(n){I("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){I("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",K),$("#fshReset",n).on("click",P)}(t),$("td",n).append(t)}function V(n,a){const e=o(/#\s(?<id>\d+)/,a.eq(0).text())
e&&t(D()?.id)&&(D().id[e]=e,function(n,t){N()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e))}function Q(n,t){const a=o(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function U(n,t){const a=o(L,$("img",n).attr("src"))
a&&(!function(n,t){3===D()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function W(n,t){const a=$(t),e=a.children()
V(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(Q)}(e),function(n,t){const a=n.eq(8)
D()?.moves&&U(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(i).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const X=n=>[n,Number(n.previousElementSibling.value)]
function Y(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function Z(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function nn(n){n?.classList&&n.classList.add("fshGray")}const tn=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function an(n,[t,,a]){a&&tn(n,a)&&nn(t)}function en(n,t,a){F(a.players.map(s(Z,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&nn(t)}(n,t,a)}const sn=[t,n=>w(n.players),n=>n.players.length>0]
function rn(n,[t,,a]){sn.every((n=>n(a)))&&en(n,t,a)}function on(n){if(!n?.s||!t(n.r))return
const e=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(X).map(s(Y,n))}(n)
e.forEach(s(rn,c())),e.forEach(s(an,n))}const cn="td.sorting, td.sorting_asc, td.sorting_desc"
function fn(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===o(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(i).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function ln(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function un(){O(),A(),$.fn.dataTable.ext.search.push(z),$.fn.dataTable.ext.search.push(B)}function dn(n,[r,o,i]){const c=$('table[width="635"]',n)
c.each(ln),function(n){E=n||{},J=E.id||{},E.id={}}(r),function(n){n.children("tbody").children("tr").each(W)}(c),function(n){if(!t(n))return
const r=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=e(n).reduce(s(C,r),{})
v("fsh_arenaFull",o)}(o),on(i),un(),c.DataTable(M),function(n){$(cn,n).off("click"),n.on("click",cn,fn)}(n)}function mn(n,t){u("JS Perf","arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),dn(n,t),p(),d("JS Perf","arena.process")}function pn(){if(f())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){mn(n,await m([b(y),b("fsh_arenaFull"),q().catch((()=>({}))),h()]))}(n):l("arena","Join error screen ?")}var hn=Object.freeze({__proto__:null,default:pn})
export{pn as a,S as b,hn as c,q as v}
//# sourceMappingURL=arena-01b1abff.js.map
