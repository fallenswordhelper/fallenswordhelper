import{cm as n,l as t,F as a,d as e,bx as s,ak as r,s as o,cn as i,aC as c,r as l,co as f,cp as d,I as u,y as p,v as m,bw as h}from"./calfSystem-DiXGAkgN.js"
import{a as v}from"./arena-DYYYOsxL.js"
import{i as b}from"./interceptSubmit-CMErm11z.js"
import{l as g}from"./loadDataTables-B_SweZpV.js"
import{f as y,a as x,m as L,t as M}from"./assets-DPlwo2nm.js"
import{l as T,p as _}from"./lvlTests-B4EAbvoo.js"
import{c as k}from"./changeMinMax-BQknyyhU.js"
import{s as w}from"./setTipped-_gKWzwad.js"
function j(){return v({subcmd:"view"})}function F(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(r(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let q=0,C=0
const E=()=>q,N=()=>C
function D(){s(y,q)}function S(n,t){q=q||{},q.minLvl=n,q.maxLvl=t,D()}function H(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function J(){o("arena","changeLvls"),k(S,H)}function R(){o("arena","resetLvls"),S(i.arenaMinLvl,i.arenaMaxLvl),$("#fshMinLvl").val(q.minLvl),$("#fshMaxLvl").val(q.maxLvl),H()}function z(n){o("arena","hideMoves"),q=q||{},q.hideMoves=n.target.checked,D(),$(".moveMax").toggle(!n.target.checked)}function A(n,t){return!E()||function(n){const t=E().minLvl,a=E().maxLvl,e=c(n[7])
return T(_,e,t,a)}(t)}function B(n,t,a,e){return!0}function G(n,t,a,e){$(`#${n}`,t).val(E()?.[a]??i[e])}function I(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=E()?.hideMoves&&(t.prop("checked",E().hideMoves),$(".moveMax").toggle(!E().hideMoves)),t.on("click",z)}(t),function(n){G("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){G("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",J),$("#fshReset",n).on("click",R)}(t),$("td",n).append(t)}function O(t,a){const e=l(/#\s(?<id>\d+)/,a.eq(0).text())
e&&n(E()?.id)&&(E().id[e]=e,function(n,t){N()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(t,e))}function K(n,t){const a=l(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function P(n,t){const a=l(L,$("img",n).attr("src"))
a&&(!function(n,t){3===E()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function Q(n,t){const a=$(t),e=a.children()
O(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(K)}(e),function(n,t){const a=n.eq(8)
E()?.moves&&P(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(f).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const U=n=>[n,Number(n.previousElementSibling.value)]
function V(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function W(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function X(n){n?.classList&&n.classList.add("fshGray")}const Y=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function Z(n,[t,,a]){a&&Y(n,a)&&X(t)}function nn(n,t,a){w(a.players.map(e(W,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&X(t)}(n,t,a)}const tn=[n,n=>u(n.players),n=>n.players.length>0]
function an(n,[t,,a]){tn.every((n=>n(a)))&&nn(n,t,a)}function en(a){if(!a?.s||!n(a.r))return
const s=function(n){return t('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(U).map(e(V,n))}(a)
s.forEach(e(an,d())),s.forEach(e(Z,a))}const sn="td.sorting, td.sorting_asc, td.sorting_desc"
function rn(n){o("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===l(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(f).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function on(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function cn(){I(),D(),$.fn.dataTable.ext.search.push(A),$.fn.dataTable.ext.search.push(B)}function ln(r,[o,i,c]){const l=$('table[width="635"]',r)
l.each(on),function(n){q=n||{},C=q.id||{},q.id={}}(o),function(n){n.children("tbody").children("tr").each(Q)}(l),function(r){if(!n(r))return
const o=t('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),i=a(r).reduce(e(F,o),{})
s("fsh_arenaFull",i)}(i),en(c),cn(),l.DataTable(M),function(n){$(sn,n).off("click"),n.on("click",sn,rn)}(r)}function fn(n,a){t('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),ln(n,a),b()}function dn(){if(p())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){fn(n,await m([h(y),h("fsh_arenaFull"),j().catch((()=>({}))),g()]))}(n):o("arena","Join error screen ?")}var un=Object.freeze({__proto__:null,default:dn})
export{dn as a,un as b,j as v}
//# sourceMappingURL=arena-C4l5EXVb.js.map
