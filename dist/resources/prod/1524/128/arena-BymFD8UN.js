import{a as n,bN as t,k as a,C as e,c as s,aQ as r,s as o,bO as i,r as c,bP as l,bQ as f,w as u,aO as d}from"./calfSystem-C2EM0fGB.js"
import{a as m}from"./all-YfMtr2SN.js"
import{i as p}from"./interceptSubmit-BnohDH-5.js"
import{l as h}from"./loadDataTables-B-iRsGrR.js"
import{c as v}from"./closestTr-BTaj8Hzz.js"
import{f as b,a as g,m as y,t as L}from"./assets-DPlwo2nm.js"
import{l as x,p as M}from"./lvlTests-BXbkGopt.js"
import{i as T}from"./intValue-C7nTQec1.js"
import{c as _}from"./changeMinMax-8kupOwY_.js"
import{i as j}from"./isArray-eVldfhw1.js"
import{s as k}from"./setTipped-_gKWzwad.js"
function w(t){return n({cmd:"arena",...t})}function F(){return w({subcmd:"view"})}function q(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(v(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let C=0,E=0
const N=()=>C,D=()=>E
function S(){r(b,C)}function O(n,t){C=C||{},C.minLvl=n,C.maxLvl=t,S()}function A(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function G(){o("arena","changeLvls"),_(O,A)}function H(){o("arena","resetLvls"),O(i.arenaMinLvl,i.arenaMaxLvl),$("#fshMinLvl").val(C.minLvl),$("#fshMaxLvl").val(C.maxLvl),A()}function J(n){o("arena","hideMoves"),C=C||{},C.hideMoves=n.target.checked,S(),$(".moveMax").toggle(!n.target.checked)}function Q(n,t){return!N()||function(n){const t=N().minLvl,a=N().maxLvl,e=T(n[7])
return x(M,e,t,a)}(t)}function R(n,t,a,e){return!0}function z(n,t,a,e){$(`#${n}`,t).val(N()?.[a]??i[e])}function B(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(g)
!function(n){const t=$("#fshHideMoves",n)
null!=N()?.hideMoves&&(t.prop("checked",N().hideMoves),$(".moveMax").toggle(!N().hideMoves)),t.on("click",J)}(t),function(n){z("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){z("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",G),$("#fshReset",n).on("click",H)}(t),$("td",n).append(t)}function P(n,a){const e=c(/#\s(?<id>\d+)/,a.eq(0).text())
e&&t(N()?.id)&&(N().id[e]=e,function(n,t){D()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e))}function U(n,t){const a=c(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function V(n,t){const a=c(y,$("img",n).attr("src"))
a&&(!function(n,t){3===N()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function I(n,t){const a=$(t),e=a.children()
P(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(U)}(e),function(n,t){const a=n.eq(8)
N()?.moves&&V(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(l).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const K=n=>[n,Number(n.previousElementSibling.value)]
function W(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function X(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function Y(n){n?.classList&&n.classList.add("fshGray")}const Z=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function nn(n,[t,,a]){a&&Z(n,a)&&Y(t)}function tn(n,t,a){k(a.players.map(s(X,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&Y(t)}(n,t,a)}const an=[t,n=>j(n.players),n=>n.players.length>0]
function en(n,[t,,a]){an.every((n=>n(a)))&&tn(n,t,a)}function sn(n){if(!n?.s||!t(n.r))return
const e=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(K).map(s(W,n))}(n)
e.forEach(s(en,f())),e.forEach(s(nn,n))}const rn="td.sorting, td.sorting_asc, td.sorting_desc"
function on(n){o("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===c(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(l).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function cn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function ln(){B(),S(),$.fn.dataTable.ext.search.push(Q),$.fn.dataTable.ext.search.push(R)}function fn(n,[o,i,c]){const l=$('table[width="635"]',n)
l.each(cn),function(n){C=n||{},E=C.id||{},C.id={}}(o),function(n){n.children("tbody").children("tr").each(I)}(l),function(n){if(!t(n))return
const o=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),i=e(n).reduce(s(q,o),{})
r("fsh_arenaFull",i)}(i),sn(c),ln(),l.DataTable(L),function(n){$(rn,n).off("click"),n.on("click",rn,on)}(n)}function un(n,t){a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),fn(n,t),p()}function dn(){if(u())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){un(n,await m([d(b),d("fsh_arenaFull"),F().catch((()=>({}))),h()]))}(n):o("arena","Join error screen ?")}var mn=Object.freeze({__proto__:null,default:dn})
export{dn as a,w as b,mn as c,F as v}
//# sourceMappingURL=arena-BymFD8UN.js.map
