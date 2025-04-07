import{ck as n,n as t,H as a,e,by as s,ai as r,s as o,cl as i,aC as c,r as l,cm as f,cn as u,K as d,A as p,x as m,bx as h}from"./calfSystem-BGW9cdWN.js"
import{a as v}from"./arena-R70npqlC.js"
import{i as b}from"./interceptSubmit-CcvGNLGd.js"
import{l as g}from"./loadDataTables-Bs0m668o.js"
import{f as y,a as x,m as L,t as M}from"./assets-DPlwo2nm.js"
import{l as T,p as _}from"./lvlTests-Bxc5Zc0a.js"
import{c as k}from"./changeMinMax-DWgKtd6E.js"
import{s as j}from"./setTipped-_gKWzwad.js"
function w(){return v({subcmd:"view"})}function E(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(r(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let F=0,q=0
const C=()=>F,D=()=>q
function N(){s(y,F)}function S(n,t){F=F||{},F.minLvl=n,F.maxLvl=t,N()}function H(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){o("arena","changeLvls"),k(S,H)}function J(){o("arena","resetLvls"),S(i.arenaMinLvl,i.arenaMaxLvl),$("#fshMinLvl").val(F.minLvl),$("#fshMaxLvl").val(F.maxLvl),H()}function R(n){o("arena","hideMoves"),F=F||{},F.hideMoves=n.target.checked,N(),$(".moveMax").toggle(!n.target.checked)}function z(n,t){return!C()||function(n){const t=C().minLvl,a=C().maxLvl,e=c(n[7])
return T(_,e,t,a)}(t)}function B(n,t,a,e){return!0}function G(n,t,a,e){$(`#${n}`,t).val(C()?.[a]??i[e])}function K(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=C()?.hideMoves&&(t.prop("checked",C().hideMoves),$(".moveMax").toggle(!C().hideMoves)),t.on("click",R)}(t),function(n){G("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){G("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",J)}(t),$("td",n).append(t)}function O(t,a){const e=l(/#\s(?<id>\d+)/,a.eq(0).text())
e&&n(C()?.id)&&(C().id[e]=e,function(n,t){D()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(t,e))}function Z(n,t){const a=l(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function I(n,t){const a=l(L,$("img",n).attr("src"))
a&&(!function(n,t){3===C()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function P(n,t){const a=$(t),e=a.children()
O(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(Z)}(e),function(n,t){const a=n.eq(8)
C()?.moves&&I(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(f).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const Q=n=>[n,Number(n.previousElementSibling.value)]
function U(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function V(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function W(n){n?.classList&&n.classList.add("fshGray")}const X=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function Y(n,[t,,a]){a&&X(n,a)&&W(t)}function nn(n,t,a){j(a.players.map(e(V,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&W(t)}(n,t,a)}const tn=[n,n=>d(n.players),n=>n.players.length>0]
function an(n,[t,,a]){tn.every((n=>n(a)))&&nn(n,t,a)}function en(a){if(!a?.s||!n(a.r))return
const s=function(n){return t('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(Q).map(e(U,n))}(a)
s.forEach(e(an,u())),s.forEach(e(Y,a))}const sn="td.sorting, td.sorting_asc, td.sorting_desc"
function rn(n){o("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===l(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(f).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function on(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function cn(){K(),N(),$.fn.dataTable.ext.search.push(z),$.fn.dataTable.ext.search.push(B)}function ln(r,[o,i,c]){const l=$('table[width="635"]',r)
l.each(on),function(n){F=n||{},q=F.id||{},F.id={}}(o),function(n){n.children("tbody").children("tr").each(P)}(l),function(r){if(!n(r))return
const o=t('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),i=a(r).reduce(e(E,o),{})
s("fsh_arenaFull",i)}(i),en(c),cn(),l.DataTable(M),function(n){$(sn,n).off("click"),n.on("click",sn,rn)}(r)}function fn(n,a){t('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),ln(n,a),b()}function un(){if(p())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){fn(n,await m([h(y),h("fsh_arenaFull"),w().catch((()=>({}))),g()]))}(n):o("arena","Join error screen ?")}var dn=Object.freeze({__proto__:null,default:un})
export{un as a,dn as b,w as v}
//# sourceMappingURL=arena-DGXfl4Eb.js.map
