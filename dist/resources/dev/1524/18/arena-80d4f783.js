import{aW as t,I as n,l as a,s as e,aX as s,d as r,M as o,w as c,T as i,aY as l,aZ as f}from"./calfSystem-5545a3e6.js"
import{s as d}from"./setTipped-b17b5374.js"
import{c as u}from"./currentGuildId-2b105bba.js"
import{i as m}from"./intValue-02f9213d.js"
import{s as p,g as v}from"./idb-ab1a88c6.js"
import{a as h}from"./allthen-d56c46ae.js"
import{c as b}from"./closestTr-4d73d7e9.js"
import{l as g,p as x}from"./lvlTests-4716a9a2.js"
import{l as y}from"./loadDataTables-6b7a4c95.js"
import{c as L}from"./changeMinMax-c13b1b5a.js"
import{f as M,a as T,m as j,t as _}from"./assets-b2433606.js"
import{u as k}from"./updateUrl-f2860fab.js"
import{a as w}from"./arena-f3eca74c.js"
function F(t,n,[a,e]){const s=t.find(([,t])=>t===a)
return s&&(b(s[0]).style.backgroundColor="#ff0000",n[a]=e),n}let q,E
function C(){p(M,q)}function D(t,n){q=q||{},q.minLvl=t,q.maxLvl=n,C()}function N(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function S(){L(D,N)}function G(){D(s.arenaMinLvl,s.arenaMaxLvl),$("#fshMinLvl").val(q.minLvl),$("#fshMaxLvl").val(q.maxLvl),N()}function I(t){q=q||{},q.hideMoves=t.target.checked,C(),$(".moveMax").toggle(!t.target.checked)}function J(t,n){return!q||function(t,n){const a=q.minLvl,e=q.maxLvl,s=m(n[7])
return g(x,s,a,e)}(0,n)}function R(t,n,a,e){return!0}function z(){const t=function(){const t=$("#pCC > table > tbody > tr:nth-child(4)")
return t.clone().insertBefore(t).find("td").attr("height","2"),t.clone().insertAfter(t).find("td").attr("height","1"),t}(),n=$(T)
!function(t){const n=$("#fshHideMoves",t)
q&&"hideMoves"in q&&(n.prop("checked",q.hideMoves),$(".moveMax").toggle(!q.hideMoves)),n.on("click",I)}(n),function(t){const n=$("#fshMinLvl",t)
q&&"minLvl"in q?n.val(q.minLvl):n.val(s.arenaMinLvl)}(n),function(t){const n=$("#fshMaxLvl",t)
q&&"maxLvl"in q?n.val(q.maxLvl):n.val(s.arenaMaxLvl)}(n),function(t){$("#fshMinLvl, #fshMaxLvl",t).on("keyup",S),$("#fshReset",t).on("click",G)}(n),$("td",t).append(n)}function A(n,a){const e=/#\s(\d+)/.exec(a.eq(0).text());[e,q,q.id].every(t)&&(q.id[e[1]]=e[1],function(t,n){E&&!E[n]&&(t.css("background-color","#F5F298"),t.find("tr").css("background-color","#F5F298"))}(n,e[1]))}function B(t,n){const a=/(\d)\.png/.exec($("img",n).attr("src"))
a&&$(n).attr("data-order",a[1])}function H(t,n){const a=j.exec($("img",t).attr("src"))
a&&(!function(t,n){q.moves[t[1]]&&3===q.moves[t[1]]&&n.addClass("moveMax")}(a,n),t.attr("data-order",a[1]))}function O(t,n){const a=$(n),e=a.children()
A(a,e),function(t){const n=t.eq(1),a=/(\d+)\s\/\s(\d+)/.exec(n.text())
a&&n.attr("data-order",100*(Number(a[1])-Number(a[2]))+Number(a[2]))}(e),function(t){const n=t.eq(2)
n.attr("data-order",$("td",n).first().text().replace(/[,\s]/g,""))}(e),function(t){t.slice(4,7).each(B)}(e),function(t,n){const a=t.eq(8)
q&&q.moves&&H(a,n)}(e,a),function(t){const n=t.eq(8)
1===n.children(r).length&&n.attr("data-order",n.find("td").first().text().replace(/[,\s]/g,""))}(e)}const U=t=>[t,Number(t.previousElementSibling.value)]
function V(t,n){return t.r.arenas?n.concat(t.r.arenas.find(t=>t.id===n[1])):n}function W(t,n){return n.guild_id===t?`<span class="fshRed">${n.name}</span>`:n.name}function X(t){t&&t.classList&&t.classList.add("fshGray")}function Y(t,[n,,a]){a&&((t,n)=>{return((t,n)=>1===n.reward_type&&t.r.moves)(t,n)&&((a=((t,n)=>t.r.moves.find(t=>t.id===n.reward))(t,n))&&3===a.max)
var a})(t,a)&&X(n)}function Z(t,n,a){d(a.players.map(e(W,t)).join("<br>"),n),n.classList.add("tip-static"),t&&"Join"===n.value&&function(t,n,a){a.players.filter(n=>n.guild_id===t).length===a.max_players/4&&X(n)}(t,n,a)}const K=[t,t=>o(t.players),t=>t.players.length>0]
function P(t,[n,,a]){K.every(t=>t(a))&&Z(t,n,a)}const Q="td.sorting, td.sorting_asc, td.sorting_desc"
function tt(t){const n=$(t.target).closest("td"),a=function(t){const n=t.attr("class"),a=/sorting([^\s]+)/.exec(n)
return a&&"_desc"===a[1]?"asc":"desc"}(n)
!function(t,n,a){const e=t.closest(r).DataTable()
3!==n?e.order([3,"asc"],[n,a]).draw():e.order([3,a]).draw()}(n,n.index(),a)}function nt(){return w({subcmd:"view"})}function at(t,n){const a=$("tr",n).first()
$("a",a).contents().unwrap(),$(n).prepend($("<thead/>").append(a))}function et(){z(),C(),$.fn.dataTable.ext.search.push(J),$.fn.dataTable.ext.search.push(R)}function st(s,[r,o,c]){const i=$('table[width="635"]',s)
i.each(at),function(t){q=t||{},E=q.id||{},q.id={}}(r),function(t){t.children("tbody").children("tr").each(O)}(i),function(s){if(!t(s))return
const r=n('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(t=>[t,t.previousElementSibling.value]),o=a(s).reduce(e(F,r),{})
p("fsh_arenaFull",o)}(o),function(a){if(!a.s||!t(a.r))return
const s=n('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(U).map(e(V,a))
s.forEach(e(P,u())),s.forEach(e(Y,a))}(c),et(),i.DataTable(_),function(t){$(Q,t).off("click"),t.on("click",Q,tt)}(s),s.on("click",'input.custombutton[type="submit"]',k)}function rt(t,a){l("arena.process"),n('#arenaTypeTabs tr[style="display: none;"]').forEach(t=>t.remove()),st(t,a),f("arena.process")}function ot(){if(c())return
const t=$("#arenaTypeTabs")
1===t.length?h([v(M),v("fsh_arenaFull"),nt().catch(()=>({})),y()],e(rt,t)):i("arena","Join error screen ?")}var ct=Object.freeze({__proto__:null,default:ot})
export{ct as a,ot as i,nt as v}
//# sourceMappingURL=arena-80d4f783.js.map
