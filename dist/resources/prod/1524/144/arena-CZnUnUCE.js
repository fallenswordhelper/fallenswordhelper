import{a as n,cj as t,k as a,E as e,c as s,b8 as r,ai as o,s as c,ck as i,aA as l,r as f,cl as u,cm as d,H as p,x as m,u as h,b6 as v}from"./calfSystem-fMW-YMyF.js"
import{i as b}from"./interceptSubmit-CPOodCW2.js"
import{l as g}from"./loadDataTables-DY-HcyBB.js"
import{f as y,a as x,m as L,t as M}from"./assets-DPlwo2nm.js"
import{l as T,p as k}from"./lvlTests-CWxtARst.js"
import{c as _}from"./changeMinMax-rHOFY_Cb.js"
import{s as j}from"./setTipped-_gKWzwad.js"
function w(t){return n({cmd:"arena",...t})}function E(){return w({subcmd:"view"})}function F(n,t,[a,e]){const s=n.find((([,n])=>n===a))
return s&&(o(s[0]).style.backgroundColor="#ff0000",t[a]=e),t}let q=0,C=0
const D=()=>q,N=()=>C
function S(){r(y,q)}function H(n,t){q=q||{},q.minLvl=n,q.maxLvl=t,S()}function R(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){c("arena","changeLvls"),_(H,R)}function J(){c("arena","resetLvls"),H(i.arenaMinLvl,i.arenaMaxLvl),$("#fshMinLvl").val(q.minLvl),$("#fshMaxLvl").val(q.maxLvl),R()}function z(n){c("arena","hideMoves"),q=q||{},q.hideMoves=n.target.checked,S(),$(".moveMax").toggle(!n.target.checked)}function B(n,t){return!D()||function(n){const t=D().minLvl,a=D().maxLvl,e=l(n[7])
return T(k,e,t,a)}(t)}function G(n,t,a,e){return!0}function O(n,t,a,e){$(`#${n}`,t).val(D()?.[a]??i[e])}function I(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
null!=D()?.hideMoves&&(t.prop("checked",D().hideMoves),$(".moveMax").toggle(!D().hideMoves)),t.on("click",z)}(t),function(n){O("fshMinLvl",n,"minLvl","arenaMinLvl")}(t),function(n){O("fshMaxLvl",n,"maxLvl","arenaMaxLvl")}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",J)}(t),$("td",n).append(t)}function K(n,a){const e=f(/#\s(?<id>\d+)/,a.eq(0).text())
e&&t(D()?.id)&&(D().id[e]=e,function(n,t){N()?.[t]||(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e))}function P(n,t){const a=f(/(?<move>\d)\.png/,$("img",t).attr("src"))
a&&$(t).attr("data-order",a)}function Q(n,t){const a=f(L,$("img",n).attr("src"))
a&&(!function(n,t){3===D()?.moves?.[n]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a))}function U(n,t){const a=$(t),e=a.children()
K(a,e),function(n){const t=n.eq(1),a=t.text().split(/\s\/\s/)
a&&t.attr("data-order",100*(Number(a[0])-Number(a[1]))+Number(a[1]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(P)}(e),function(n,t){const a=n.eq(8)
D()?.moves&&Q(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(u).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const V=n=>[n,Number(n.previousElementSibling.value)]
function W(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function X(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function Y(n){n?.classList&&n.classList.add("fshGray")}const Z=(n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t),a&&3===a.max)
var a}
function nn(n,[t,,a]){a&&Z(n,a)&&Y(t)}function tn(n,t,a){j(a.players.map(s(X,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&Y(t)}(n,t,a)}const an=[t,n=>p(n.players),n=>n.players.length>0]
function en(n,[t,,a]){an.every((n=>n(a)))&&tn(n,t,a)}function sn(n){if(!n?.s||!t(n.r))return
const e=function(n){return a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(V).map(s(W,n))}(n)
e.forEach(s(en,d())),e.forEach(s(nn,n))}const rn="td.sorting, td.sorting_asc, td.sorting_desc"
function on(n){c("arena","sortHandler")
const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class")
return"_desc"===f(/sorting(?<dir>[^\s]+)/,t)?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(u).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function cn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function ln(){I(),S(),$.fn.dataTable.ext.search.push(B),$.fn.dataTable.ext.search.push(G)}function fn(n,[o,c,i]){const l=$('table[width="635"]',n)
l.each(cn),function(n){q=n||{},C=q.id||{},q.id={}}(o),function(n){n.children("tbody").children("tr").each(U)}(l),function(n){if(!t(n))return
const o=a('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),c=e(n).reduce(s(F,o),{})
r("fsh_arenaFull",c)}(c),sn(i),ln(),l.DataTable(M),function(n){$(rn,n).off("click"),n.on("click",rn,on)}(n)}function un(n,t){a('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),fn(n,t),b()}function dn(){if(m())return
const n=$("#arenaTypeTabs")
1===n.length?async function(n){un(n,await h([v(y),v("fsh_arenaFull"),E().catch((()=>({}))),g()]))}(n):c("arena","Join error screen ?")}var pn=Object.freeze({__proto__:null,default:dn})
export{dn as a,w as b,pn as c,E as v}
//# sourceMappingURL=arena-CZnUnUCE.js.map
