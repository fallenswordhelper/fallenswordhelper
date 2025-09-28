import{cv as n,h as t,aa as a,c as e,bJ as s,j as r,s as o,cw as i,aN as c,r as l,cx as f,aB as u,ac as d,a3 as p,a0 as m,bI as h}from"./calfSystem-CIuUjh4H.js"
import{a as v}from"./arena-DdaGCcYg.js"
import{i as b}from"./interceptSubmit-UQt2BX0g.js"
import{l as g}from"./loadDataTables-DXBOfBxz.js"
import{f as y,a as x,m as L,t as M}from"./assets-DPlwo2nm.js"
import{l as T,p as _}from"./lvlTests-DDQni82g.js"
import{c as j}from"./changeMinMax-Cwzcq-Cs.js"
import{s as k}from"./setTipped-_gKWzwad.js"
function w(){return v({subcmd:"view"})}function F(n,t,[a,e]){const s=n.find(([,n])=>n===a)
return s&&(r(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let q=0,E=0
const N=()=>q
function C(){s(y,q)}function D(n,t){q=q||{},q.minLvl=n,q.maxLvl=t,C()}function S(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function J(){o("arena","changeLvls"),j(D,S)}function B(){o("arena","resetLvls"),D(i.arenaMinLvl,i.arenaMaxLvl),$("#fshMinLvl").val(q.minLvl),$("#fshMaxLvl").val(q.maxLvl),S()}function H(n){o("arena","hideMoves"),q=q||{},q.hideMoves=n.target.checked,C(),$(".moveMax").toggle(!n.target.checked)}function R(n,t){return!N()||function(n){const t=N().minLvl,a=N().maxLvl,e=c(n[7])
return T(_,e,t,a)}(t)}function z(n,t,a,e){return!0}function A(n,t,a,e){$(`#${n}`,t).val(N()?.[a]??i[e])}function G(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=N()?.hideMoves&&(t.prop("checked",N().hideMoves),$(".moveMax").toggle(!N().hideMoves)),t.on("click",H)}(t),function(n){A("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){A("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",J),$("#fshReset",n).on("click",B)}(t),$("td",n).append(t)}function I(n,t){E?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}function O(n,t){const a=l(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function K(n,t){const a=l(L,$("img",n).attr("src"))
a&&(!function(n,t){3===N()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function P(t,a){const e=$(a),s=e.children()
!function(t,a){const e=l(/#\s(?<id>\d+)/,a.eq(0).text())
e&&n(N()?.id)&&(N().id[e]=e,I(t,e))}(e,s),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(s),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(s),function(n){n.slice(4,7).each(O)}(s),function(n,t){const a=n.eq(8)
N()?.moves&&K(a,t)}(s,e),function(n){const t=n.eq(8)
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
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function rn(){G(),C(),$.fn.dataTable.ext.search.push(R),$.fn.dataTable.ext.search.push(z)}function on(r,[o,i,c]){const l=$('table[width="635"]',r)
l.each(sn),function(n){q=n||{},E=q.id||{},q.id={}}(o),function(n){n.children("tbody").children("tr").each(P)}(l),function(r){if(!n(r))return
const o=t('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(n=>[n,n.previousElementSibling.value]),i=a(r).reduce(e(F,o),{})
s("fsh_arenaFull",i)}(i),tn(c),rn(),l.DataTable(M),function(n){$(an,n).off("click"),n.on("click",an,en)}(r)}function cn(n,a){t('#arenaTypeTabs tr[style="display: none;"]').forEach(n=>n.remove()),on(n,a),b()}function ln(){if(p())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){cn(n,await m([h(y),h("fsh_arenaFull"),w().catch(()=>({})),g()]))}(n):o("arena","Join error screen ?")}var fn=Object.freeze({__proto__:null,default:ln})
export{ln as a,fn as b,w as v}
//# sourceMappingURL=arena-BTeGeGZ4.js.map
