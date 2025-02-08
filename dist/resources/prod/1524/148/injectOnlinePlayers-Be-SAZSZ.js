import{o as n}from"./onlinePlayersPage-DLaThPjl.js"
import{cK as e,du as t,d as a,aq as s,o as l,s as i,g as r,cp as o,aC as c,r as f,dy as u,az as h,bT as p,am as d,al as v,cn as m,y as g,bw as y,c as L,L as P,v as M,bx as b,C as x}from"./calfSystem-BldO1y8X.js"
import{l as C}from"./loadDataTables-CufrQcn_.js"
import{r as I}from"./remainingPages-BzskAxSU.js"
import{a as w,g as O}from"./levelHighlight-WTMV1LFX.js"
import{f as k}from"./formatLocalDateTime-BTgJPGXi.js"
import{l as _,p as R}from"./lvlTests-D_cSf1Ux.js"
const T=(n,[e])=>n.id===e
function j(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let q=0,N=0
const D=[()=>q,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=w(),n=>c(n[2])<=O()]
function E(n,e){(function(n){return D.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const G=n=>i("OnlinePlayers",n),H=n=>()=>{i("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?G("guild click"):G("player click")}function z(n,e){q=s("highlightPlayersNearMyLvl"),N=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",H("sorting")),$("#fshInv_length select").on("change",H("dataTables_length")),$("#fshInv_filter input").on("keyup",H("dataTables_filter")),l(r("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&G("paginate_button")}))}function A(){N.draw()}function K(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),A())}function W(n,e){return parseInt($(n,e).val(),10)}function B(n,e){d(e)||v(n,e)}function F(n,e,t){const a=W("#fshMinLvl",n),s=W("#fshMaxLvl",n)
B("onlinePlayerMinLvl",a),B("onlinePlayerMaxLvl",s)
const l=p(c(t[2]),0)
return _(R,l,a,s)}let J=0,Q=0,U=0,V=0
function X(n){Q=n||{},function(n){$.fn.dataTable.ext.search.push(a(F,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${k(new Date(s("lastOnlineCheck")))}</div>`)}(J),z(J,function(n){return t(n).map(a(j,n))}(Q))}function Y(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return Q[n]&&Q[n][3]>e})(s,n)||(Q[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function Z(e,t){V=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=I(V,n).map((async n=>e(await n)))
return M(a)}function nn(n){$("#fshOutput",J).append(n)}function en(n){nn(` ${U+1}`)
const e=P(n),t=$("#pCC input.custominput",e).first()
!function(n,e){const t=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(Y,t))}(e,t),U+=1,1===U&&Z(en,t),U===V&&(b("fsh_onlinePlayers",Q),X(Q))}const tn=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",J).hide(),U=0,Q={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",m.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",m.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(m.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(m.onlinePlayerMaxLvl),A()}(J)]]
async function an(){J.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
X(await y("fsh_onlinePlayers")),l(J[0],(n=tn,t=>e(T,n,t))),L(J[0],"keyup",K)}async function sn(n){g()||(J=n?$(n):$("#pCC"),await C(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-Be-SAZSZ.js.map
