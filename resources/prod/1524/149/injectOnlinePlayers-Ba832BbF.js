import{o as n}from"./onlinePlayersPage-Bx91ptF9.js"
import{cL as e,dE as t,e as a,ao as s,o as l,s as i,g as r,cn as o,aC as c,r as f,dH as u,ay as h,bP as p,ak as d,aj as v,cl as g,A as m,bx as y,c as L,N as P,x as M,by as b,E as x}from"./calfSystem-BGW9cdWN.js"
import{l as C}from"./loadDataTables-Bs0m668o.js"
import{r as I}from"./remainingPages-BzskAxSU.js"
import{a as k,g as O}from"./levelHighlight-BEgi_rmq.js"
import{f as _}from"./formatLocalDateTime-BrVsPyKz.js"
import{l as w,p as R}from"./lvlTests-Bxc5Zc0a.js"
const T=(n,[e])=>n.id===e
function j(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=k(),n=>c(n[2])<=O()]
function E(n,e){(function(n){return D.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const H=n=>i("OnlinePlayers",n),S=n=>()=>{i("OnlinePlayers",n)}
function A(n){"IMG"===n.currentTarget.children[0]?.tagName?H("guild click"):H("player click")}function G(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",A),$("#fshInv").on("click",".sorting",S("sorting")),$("#fshInv_length select").on("change",S("dataTables_length")),$("#fshInv_filter input").on("keyup",S("dataTables_filter")),l(r("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&H("paginate_button")}))}function W(){q.draw()}function z(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),W())}function B(n,e){return parseInt($(n,e).val(),10)}function F(n,e){d(e)||v(n,e)}function J(n,e,t){const a=B("#fshMinLvl",n),s=B("#fshMaxLvl",n)
F("onlinePlayerMinLvl",a),F("onlinePlayerMaxLvl",s)
const l=p(c(t[2]),0)
return w(R,l,a,s)}let K=0,Q=0,U=0,V=0
function X(n){Q=n||{},function(n){$.fn.dataTable.ext.search.push(a(J,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${_(new Date(s("lastOnlineCheck")))}</div>`)}(K),G(K,function(n){return t(n).map(a(j,n))}(Q))}function Y(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return Q[n]&&Q[n][3]>e})(s,n)||(Q[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function Z(e,t){V=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=I(V,n).map((async n=>e(await n)))
return M(a)}function nn(n){$("#fshOutput",K).append(n)}function en(n){nn(` ${U+1}`)
const e=P(n),t=$("#pCC input.custominput",e).first()
!function(n,e){const t=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(Y,t))}(e,t),U+=1,1===U&&Z(en,t),U===V&&(b("fsh_onlinePlayers",Q),X(Q))}const tn=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",K).hide(),U=0,Q={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",g.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),W()}(K)]]
async function an(){K.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
X(await y("fsh_onlinePlayers")),l(K[0],(n=tn,t=>e(T,n,t))),L(K[0],"keyup",z)}async function sn(n){m()||(K=n?$(n):$("#pCC"),await C(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-Ba832BbF.js.map
