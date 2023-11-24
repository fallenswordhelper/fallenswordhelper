import{a as n,bE as t,k as a,C as e,c as s,s as r,bF as o,r as i,bG as c,bH as l,w as f,bI as u,bJ as d}from"./calfSystem-ZGMc097r.js"
import{a as m}from"./all-TTLWag-d.js"
import{i as p}from"./interceptSubmit-6P3g4nmT.js"
import{l as h}from"./loadDataTables-SyZnDOiO.js"
import{s as v,g as b}from"./idb-Asb6LweF.js"
import{c as g}from"./closestTr-7-El51TS.js"
import{f as y,a as x,m as L,t as M}from"./assets--uHrRNeA.js"
import{l as T,p as j}from"./lvlTests-Ed6CIznK.js"
import{i as _}from"./intValue-JHhLnq8V.js"
import{c as k}from"./changeMinMax-9r1ZRXOG.js"
import{i as w}from"./isArray-bNviZzJA.js"
import{s as F}from"./setTipped-G-gV03my.js"
function S(t){return n({cmd:"arena",...t})}function E(){return S({subcmd:"view"})}function q(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(g(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let C=0,J=0
const D=()=>C,N=()=>J
function A(){v(y,C)}function H(n,t){C=C||{},C.minLvl=n,C.maxLvl=t,A()}function G(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function P(){r("arena","changeLvls"),k(H,G)}function R(){r("arena","resetLvls"),H(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(C.minLvl),$("#fshMaxLvl").val(C.maxLvl),G()}function z(n){r("arena","hideMoves"),C=C||{},C.hideMoves=n.target.checked,A(),$(".moveMax").toggle(!n.target.checked)}function B(n,t){return!D()||function(n){const t=D().minLvl,a=D().maxLvl,e=_(n[7])
return T(j,e,t,a)}(t)}function I(n,t,a,e){return!0}function K(n,t,a,e){$(`#${n}`,t).val(D()?.[a]??o[e])}function O(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=D()?.hideMoves&&(t.prop("checked",D().hideMoves),$(".moveMax").toggle(!D().hideMoves)),t.on("click",z)}(t),function(n){K("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){K("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",P),$("#fshReset",n).on("click",R)}(t),$("td",n).append(t)}function V(n,a){const e=i(/#\s(?<id>\d+)/,a.eq(0).text())
e&&t(D()?.id)&&(D().id[e]=e,function(n,t){N()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e))}function Q(n,t){const a=i(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function U(n,t){const a=i(L,$("img",n).attr("src"))
a&&(!function(n,t){3===D()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function W(n,t){const a=$(t),e=a.children()
V(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(Q)}(e),function(n,t){const a=n.eq(8)
D()?.moves&&U(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(c).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const X=n=>[n,Number(n.previousElementSibling.value)]
function Y(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function Z(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function nn(n){n?.classList&&n.classList.add("fshGray")}const tn=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function an(n,[t,,a]){a&&tn(n,a)&&nn(t)}function en(n,t,a){F(a.players.map(s(Z,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&nn(t)}(n,t,a)}const sn=[t,n=>w(n.players),n=>n.players.length>0]
function rn(n,[t,,a]){sn.every((n=>n(a)))&&en(n,t,a)}function on(n){if(!n?.s||!t(n.r))return
const e=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(X).map(s(Y,n))}(n)
e.forEach(s(rn,l())),e.forEach(s(an,n))}const cn="td.sorting, td.sorting_asc, td.sorting_desc"
function ln(n){r("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===i(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(c).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function fn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function un(){O(),A(),$.fn.dataTable.ext.search.push(B),$.fn.dataTable.ext.search.push(I)}function dn(n,[r,o,i]){const c=$('table[width="635"]',n)
c.each(fn),function(n){C=n||{},J=C.id||{},C.id={}}(r),function(n){n.children("tbody").children("tr").each(W)}(c),function(n){if(!t(n))return
const r=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=e(n).reduce(s(q,r),{})
v("fsh_arenaFull",o)}(o),on(i),un(),c.DataTable(M),function(n){$(cn,n).off("click"),n.on("click",cn,ln)}(n)}function mn(n,t){u("JS Perf","arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),dn(n,t),p(),d("JS Perf","arena.process")}function pn(){if(f())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){mn(n,await m([b(y),b("fsh_arenaFull"),E().catch((()=>({}))),h()]))}(n):r("arena","Join error screen ?")}var hn=Object.freeze({__proto__:null,default:pn})
export{pn as a,S as b,hn as c,E as v}
//# sourceMappingURL=arena-TIMIONhi.js.map
