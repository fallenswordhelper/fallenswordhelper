import{a as n,bT as t,k as a,C as e,c as s,aS as r,s as o,bU as i,r as c,bV as l,bW as f,w as u,aQ as d}from"./calfSystem-CyLCrHqa.js"
import{a as m}from"./all-YfMtr2SN.js"
import{i as p}from"./interceptSubmit-BRkBno07.js"
import{l as h}from"./loadDataTables-CUx_iUlF.js"
import{c as v}from"./closestTr-BHr42g8T.js"
import{f as b,a as g,m as y,t as x}from"./assets-DPlwo2nm.js"
import{l as L,p as M}from"./lvlTests-BXbkGopt.js"
import{i as T}from"./intValue-C7nTQec1.js"
import{c as _}from"./changeMinMax-8kupOwY_.js"
import{i as j}from"./isArray-eVldfhw1.js"
import{s as k}from"./setTipped-_gKWzwad.js"
function w(t){return n({cmd:"arena",...t})}function F(){return w({subcmd:"view"})}function q(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(v(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let C=0,E=0
const S=()=>C,D=()=>E
function N(){r(b,C)}function A(n,t){C=C||{},C.minLvl=n,C.maxLvl=t,N()}function G(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function H(){o("arena","changeLvls"),_(A,G)}function J(){o("arena","resetLvls"),A(i.arenaMinLvl,i.arenaMaxLvl),$("#fshMinLvl").val(C.minLvl),$("#fshMaxLvl").val(C.maxLvl),G()}function R(n){o("arena","hideMoves"),C=C||{},C.hideMoves=n.target.checked,N(),$(".moveMax").toggle(!n.target.checked)}function U(n,t){return!S()||function(n){const t=S().minLvl,a=S().maxLvl,e=T(n[7])
return L(M,e,t,a)}(t)}function V(n,t,a,e){return!0}function z(n,t,a,e){$(`#${n}`,t).val(S()?.[a]??i[e])}function B(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(g)
!function(n){const t=$("#fshHideMoves",n)
null!=S()?.hideMoves&&(t.prop("checked",S().hideMoves),$(".moveMax").toggle(!S().hideMoves)),t.on("click",R)}(t),function(n){z("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){z("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",H),$("#fshReset",n).on("click",J)}(t),$("td",n).append(t)}function O(n,a){const e=c(/#\s(?<id>\d+)/,a.eq(0).text())
e&&t(S()?.id)&&(S().id[e]=e,function(n,t){D()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e))}function Q(n,t){const a=c(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function W(n,t){const a=c(y,$("img",n).attr("src"))
a&&(!function(n,t){3===S()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function Z(n,t){const a=$(t),e=a.children()
O(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(Q)}(e),function(n,t){const a=n.eq(8)
S()?.moves&&W(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(l).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const I=n=>[n,Number(n.previousElementSibling.value)]
function K(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function P(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function X(n){n?.classList&&n.classList.add("fshGray")}const Y=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function nn(n,[t,,a]){a&&Y(n,a)&&X(t)}function tn(n,t,a){k(a.players.map(s(P,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&X(t)}(n,t,a)}const an=[t,n=>j(n.players),n=>n.players.length>0]
function en(n,[t,,a]){an.every((n=>n(a)))&&tn(n,t,a)}function sn(n){if(!n?.s||!t(n.r))return
const e=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(I).map(s(K,n))}(n)
e.forEach(s(en,f())),e.forEach(s(nn,n))}const rn="td.sorting, td.sorting_asc, td.sorting_desc"
function on(n){o("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===c(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(l).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function cn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function ln(){B(),N(),$.fn.dataTable.ext.search.push(U),$.fn.dataTable.ext.search.push(V)}function fn(n,[o,i,c]){const l=$('table[width="635"]',n)
l.each(cn),function(n){C=n||{},E=C.id||{},C.id={}}(o),function(n){n.children("tbody").children("tr").each(Z)}(l),function(n){if(!t(n))return
const o=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),i=e(n).reduce(s(q,o),{})
r("fsh_arenaFull",i)}(i),sn(c),ln(),l.DataTable(x),function(n){$(rn,n).off("click"),n.on("click",rn,on)}(n)}function un(n,t){a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),fn(n,t),p()}function dn(){if(u())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){un(n,await m([d(b),d("fsh_arenaFull"),F().catch((()=>({}))),h()]))}(n):o("arena","Join error screen ?")}var mn=Object.freeze({__proto__:null,default:dn})
export{dn as a,w as b,mn as c,F as v}
//# sourceMappingURL=arena-Cw4i2Igq.js.map
