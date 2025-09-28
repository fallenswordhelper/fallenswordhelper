import{o as n}from"./onlinePlayersPage-TNcYlxel.js"
import{cU as e,dv as a,c as t,az as s,o as l,s as i,g as r,aB as o,aN as c,r as f,dy as u,aJ as h,bZ as p,av as v,au as d,cw as g,a3 as m,bI as y,b as L,af as M,a0 as P,bJ as b,a7 as x}from"./calfSystem-CIuUjh4H.js"
import{l as I}from"./loadDataTables-DXBOfBxz.js"
import{r as w}from"./remainingPages-BUotk4St.js"
import{a as C,g as O}from"./levelHighlight-qcL3fFVb.js"
import{f as k}from"./formatLocalDateTime-oAH2XjjL.js"
import{l as _,p as R}from"./lvlTests-DDQni82g.js"
const T=(n,[e])=>n.id===e
function j(n,e){const a=$("<div/>").append(n[e][0])
return $("img",a).addClass("fshImgCntr"),[a.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=C(),n=>c(n[2])<=O()]
function G(n,e){(function(n){return D.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const E=n=>i("OnlinePlayers",n),H=n=>()=>{i("OnlinePlayers",n)}
function J(n){"IMG"===n.currentTarget.children[0]?.tagName?E("guild click"):E("player click")}function S(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:G,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",J),$("#fshInv").on("click",".sorting",H("sorting")),$("#fshInv_length select").on("change",H("dataTables_length")),$("#fshInv_filter input").on("keyup",H("dataTables_filter")),l(r("fshInv_paginate"),n=>{n.target.classList.contains("paginate_button")&&E("paginate_button")})}function z(){q.draw()}function A(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),z())}function B(n,e){return parseInt($(n,e).val(),10)}function U(n,e){v(e)||d(n,e)}function W(n,e,a){const t=B("#fshMinLvl",n),s=B("#fshMaxLvl",n)
U("onlinePlayerMinLvl",t),U("onlinePlayerMaxLvl",s)
const l=p(c(a[2]),0)
return _(R,l,t,s)}let Y=0,Z=0,F=0,K=0
function Q(n){Z=n||{},function(n){$.fn.dataTable.ext.search.push(t(W,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${k(new Date(s("lastOnlineCheck")))}</div>`)}(Y),S(Y,function(n){return a(n).map(t(j,n))}(Z))}function V(n,e,a){const t=$("td",$(a)),s=t.eq(1).text();(function(n,e){return Z[n]&&Z[n][3]>e})(s,n)||(Z[s]=function(n,e,a){return[a.eq(0).html(),a.eq(1).html(),a.eq(2).text(),n,e]}(n,e,t))}function X(e,a){K=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(a)
const t=w(K,n).map(async n=>e(await n))
return P(t)}function nn(n){$("#fshOutput",Y).append(n)}function en(n){nn(` ${F+1}`)
const e=M(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(V,a))}(e,a),F+=1,1===F&&X(en,a),F===K&&(b("fsh_onlinePlayers",Z),Q(Z))}const an=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",Y).hide(),F=0,Z={}
const e=n(1)
d("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),d("onlinePlayerMinLvl",g.onlinePlayerMinLvl),d("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),z()}(Y)]]
async function tn(){Y.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
Q(await y("fsh_onlinePlayers")),l(Y[0],(n=an,a=>e(T,n,a))),L(Y[0],"keyup",A)}async function sn(n){m()||(Y=n?$(n):$("#pCC"),await I(),tn())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-CwsDnuD0.js.map
