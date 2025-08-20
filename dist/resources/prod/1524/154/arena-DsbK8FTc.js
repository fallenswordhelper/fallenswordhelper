import{cq as n,h as t,a9 as a,c as e,bH as s,j as r,s as o,cr as c,aM as i,r as l,cs as f,ct as u,ac as d,a2 as p,_ as m,bG as h}from"./calfSystem-KFszEm2S.js"
import{a as v}from"./arena-BpdJexB0.js"
import{i as b}from"./interceptSubmit-DBzRBI1G.js"
import{l as g}from"./loadDataTables-B4cGnqNh.js"
import{f as y,a as x,m as L,t as M}from"./assets-DPlwo2nm.js"
import{l as T,p as _}from"./lvlTests-7Ek6JZZ8.js"
import{c as j}from"./changeMinMax-Lzmm6ncf.js"
import{s as k}from"./setTipped-_gKWzwad.js"
function w(){return v({subcmd:"view"})}function q(n,t,[a,e]){const s=n.find(([,n])=>n===a)
return s&&(r(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let F=0,E=0
const C=()=>F
function D(){s(y,F)}function N(n,t){F=F||{},F.minLvl=n,F.maxLvl=t,D()}function S(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function H(){o("arena","changeLvls"),j(N,S)}function G(){o("arena","resetLvls"),N(c.arenaMinLvl,c.arenaMaxLvl),$("#fshMinLvl").val(F.minLvl),$("#fshMaxLvl").val(F.maxLvl),S()}function J(n){o("arena","hideMoves"),F=F||{},F.hideMoves=n.target.checked,D(),$(".moveMax").toggle(!n.target.checked)}function R(n,t){return!C()||function(n){const t=C().minLvl,a=C().maxLvl,e=i(n[7])
return T(_,e,t,a)}(t)}function z(n,t,a,e){return!0}function A(n,t,a,e){$(`#${n}`,t).val(C()?.[a]??c[e])}function B(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=C()?.hideMoves&&(t.prop("checked",C().hideMoves),$(".moveMax").toggle(!C().hideMoves)),t.on("click",J)}(t),function(n){A("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){A("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",H),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function O(n,t){E?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}function I(n,t){const a=l(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function K(n,t){const a=l(L,$("img",n).attr("src"))
a&&(!function(n,t){3===C()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function P(t,a){const e=$(a),s=e.children()
!function(t,a){const e=l(/#\s(?<id>\d+)/,a.eq(0).text())
e&&n(C()?.id)&&(C().id[e]=e,O(t,e))}(e,s),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(s),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(s),function(n){n.slice(4,7).each(I)}(s),function(n,t){const a=n.eq(8)
C()?.moves&&K(a,t)}(s,e),function(n){const t=n.eq(8)
1===t.children(f).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(s)}const Q=n=>[n,Number(n.previousElementSibling.value)]
function U(n,t){return n.r.arenas?t.concat(n.r.arenas.find(n=>n.id===t[1])):t}function V(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function W(n){n?.classList&&n.classList.add("fshGray")}function X(n,[t,,a]){a&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find(n=>n.id===t.reward))(n,t),a&&3===a.max)
var a})(n,a)&&W(t)}function Y(n,t,a){k(a.players.map(e(V,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter(t=>t.guild_id===n).length===a.max_players/4&&W(t)}(n,t,a)}const Z=[n,n=>d(n.players),n=>n.players.length>0]
function nn(n,[t,,a]){Z.every(n=>n(a))&&Y(n,t,a)}function tn(a){if(!a?.s||!n(a.r))return
const s=function(n){return t('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(Q).map(e(U,n))}(a)
s.forEach(e(nn,u())),s.forEach(e(X,a))}const an="td.sorting, td.sorting_asc, td.sorting_desc"
function en(n){o("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===l(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(f).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function sn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function rn(){B(),D(),$.fn.dataTable.ext.search.push(R),$.fn.dataTable.ext.search.push(z)}function on(r,[o,c,i]){const l=$('table[width="635"]',r)
l.each(sn),function(n){F=n||{},E=F.id||{},F.id={}}(o),function(n){n.children("tbody").children("tr").each(P)}(l),function(r){if(!n(r))return
const o=t('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(n=>[n,n.previousElementSibling.value]),c=a(r).reduce(e(q,o),{})
s("fsh_arenaFull",c)}(c),tn(i),rn(),l.DataTable(M),function(n){$(an,n).off("click"),n.on("click",an,en)}(r)}function cn(n,a){t('#arenaTypeTabs tr[style="display: none;"]').forEach(n=>n.remove()),on(n,a),b()}function ln(){if(p())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){cn(n,await m([h(y),h("fsh_arenaFull"),w().catch(()=>({})),g()]))}(n):o("arena","Join error screen ?")}var fn=Object.freeze({__proto__:null,default:ln})
export{ln as a,fn as b,w as v}
//# sourceMappingURL=arena-DsbK8FTc.js.map
