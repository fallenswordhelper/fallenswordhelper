import{a as n,bM as t,k as a,C as e,c as s,aQ as r,s as o,bN as i,r as c,bO as l,bP as f,w as u,aO as d,bQ as p,bR as m}from"./calfSystem-hszmVKJw.js"
import{a as h}from"./all-YfMtr2SN.js"
import{i as v}from"./interceptSubmit-Fy_b1It8.js"
import{l as b}from"./loadDataTables-CVNgVSIb.js"
import{c as g}from"./closestTr-B6tzN2bs.js"
import{f as y,a as x,m as L,t as M}from"./assets-DPlwo2nm.js"
import{l as T,p as _}from"./lvlTests-BXbkGopt.js"
import{i as j}from"./intValue-C7nTQec1.js"
import{c as k}from"./changeMinMax-8kupOwY_.js"
import{i as w}from"./isArray-eVldfhw1.js"
import{s as F}from"./setTipped-_gKWzwad.js"
function S(t){return n({cmd:"arena",...t})}function q(){return S({subcmd:"view"})}function C(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(g(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let E=0,N=0
const D=()=>E,J=()=>N
function O(){r(y,E)}function P(n,t){E=E||{},E.minLvl=n,E.maxLvl=t,O()}function R(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){o("arena","changeLvls"),k(P,R)}function G(){o("arena","resetLvls"),P(i.arenaMinLvl,i.arenaMaxLvl),$("#fshMinLvl").val(E.minLvl),$("#fshMaxLvl").val(E.maxLvl),R()}function H(n){o("arena","hideMoves"),E=E||{},E.hideMoves=n.target.checked,O(),$(".moveMax").toggle(!n.target.checked)}function Q(n,t){return!D()||function(n){const t=D().minLvl,a=D().maxLvl,e=j(n[7])
return T(_,e,t,a)}(t)}function z(n,t,a,e){return!0}function B(n,t,a,e){$(`#${n}`,t).val(D()?.[a]??i[e])}function U(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=D()?.hideMoves&&(t.prop("checked",D().hideMoves),$(".moveMax").toggle(!D().hideMoves)),t.on("click",H)}(t),function(n){B("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){B("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function V(n,a){const e=c(/#\s(?<id>\d+)/,a.eq(0).text())
e&&t(D()?.id)&&(D().id[e]=e,function(n,t){J()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e))}function I(n,t){const a=c(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function K(n,t){const a=c(L,$("img",n).attr("src"))
a&&(!function(n,t){3===D()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function W(n,t){const a=$(t),e=a.children()
V(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(I)}(e),function(n,t){const a=n.eq(8)
D()?.moves&&K(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(l).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const X=n=>[n,Number(n.previousElementSibling.value)]
function Y(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function Z(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function nn(n){n?.classList&&n.classList.add("fshGray")}const tn=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function an(n,[t,,a]){a&&tn(n,a)&&nn(t)}function en(n,t,a){F(a.players.map(s(Z,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&nn(t)}(n,t,a)}const sn=[t,n=>w(n.players),n=>n.players.length>0]
function rn(n,[t,,a]){sn.every((n=>n(a)))&&en(n,t,a)}function on(n){if(!n?.s||!t(n.r))return
const e=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(X).map(s(Y,n))}(n)
e.forEach(s(rn,f())),e.forEach(s(an,n))}const cn="td.sorting, td.sorting_asc, td.sorting_desc"
function ln(n){o("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===c(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(l).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function fn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function un(){U(),O(),$.fn.dataTable.ext.search.push(Q),$.fn.dataTable.ext.search.push(z)}function dn(n,[o,i,c]){const l=$('table[width="635"]',n)
l.each(fn),function(n){E=n||{},N=E.id||{},E.id={}}(o),function(n){n.children("tbody").children("tr").each(W)}(l),function(n){if(!t(n))return
const o=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),i=e(n).reduce(s(C,o),{})
r("fsh_arenaFull",i)}(i),on(c),un(),l.DataTable(M),function(n){$(cn,n).off("click"),n.on("click",cn,ln)}(n)}function pn(n,t){p("JS Perf","arena.process"),a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),dn(n,t),v(),m("JS Perf","arena.process")}function mn(){if(u())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){pn(n,await h([d(y),d("fsh_arenaFull"),q().catch((()=>({}))),b()]))}(n):o("arena","Join error screen ?")}var hn=Object.freeze({__proto__:null,default:mn})
export{mn as a,S as b,hn as c,q as v}
//# sourceMappingURL=arena-CpSGb2R3.js.map
