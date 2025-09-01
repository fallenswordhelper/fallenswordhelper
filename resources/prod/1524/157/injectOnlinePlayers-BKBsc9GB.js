import{o as n}from"./onlinePlayersPage-D4HreKCI.js"
import{cV as e,dC as a,c as t,aA as s,o as l,s as i,g as r,aC as o,aO as c,r as f,dF as u,aK as h,b_ as p,aw as d,av as v,cx as g,a3 as m,bJ as y,b as L,ag as M,a0 as P,bK as b,a7 as x}from"./calfSystem-CQOGdqPv.js"
import{l as C}from"./loadDataTables-AKoQZyAz.js"
import{r as I}from"./remainingPages-BUotk4St.js"
import{a as O,g as _}from"./levelHighlight-CBP5Y6cR.js"
import{f as w}from"./formatLocalDateTime-DGZZjaA1.js"
import{l as k,p as R}from"./lvlTests-CX0APdgk.js"
const T=(n,[e])=>n.id===e
function j(n,e){const a=$("<div/>").append(n[e][0])
return $("img",a).addClass("fshImgCntr"),[a.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=O(),n=>c(n[2])<=_()]
function A(n,e){(function(n){return D.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const E=n=>i("OnlinePlayers",n),F=n=>()=>{i("OnlinePlayers",n)}
function G(n){"IMG"===n.currentTarget.children[0]?.tagName?E("guild click"):E("player click")}function H(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:A,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",G),$("#fshInv").on("click",".sorting",F("sorting")),$("#fshInv_length select").on("change",F("dataTables_length")),$("#fshInv_filter input").on("keyup",F("dataTables_filter")),l(r("fshInv_paginate"),n=>{n.target.classList.contains("paginate_button")&&E("paginate_button")})}function K(){q.draw()}function S(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),K())}function J(n,e){return parseInt($(n,e).val(),10)}function V(n,e){d(e)||v(n,e)}function W(n,e,a){const t=J("#fshMinLvl",n),s=J("#fshMaxLvl",n)
V("onlinePlayerMinLvl",t),V("onlinePlayerMaxLvl",s)
const l=p(c(a[2]),0)
return k(R,l,t,s)}let X=0,z=0,B=0,Q=0
function U(n){z=n||{},function(n){$.fn.dataTable.ext.search.push(t(W,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(s("lastOnlineCheck")))}</div>`)}(X),H(X,function(n){return a(n).map(t(j,n))}(z))}function Y(n,e,a){const t=$("td",$(a)),s=t.eq(1).text();(function(n,e){return z[n]&&z[n][3]>e})(s,n)||(z[s]=function(n,e,a){return[a.eq(0).html(),a.eq(1).html(),a.eq(2).text(),n,e]}(n,e,t))}function Z(e,a){Q=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(a)
const t=I(Q,n).map(async n=>e(await n))
return P(t)}function nn(n){$("#fshOutput",X).append(n)}function en(n){nn(` ${B+1}`)
const e=M(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(Y,a))}(e,a),B+=1,1===B&&Z(en,a),B===Q&&(b("fsh_onlinePlayers",z),U(z))}const an=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",X).hide(),B=0,z={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",g.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),K()}(X)]]
async function tn(){X.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
U(await y("fsh_onlinePlayers")),l(X[0],(n=an,a=>e(T,n,a))),L(X[0],"keyup",S)}async function sn(n){m()||(X=n?$(n):$("#pCC"),await C(),tn())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-BKBsc9GB.js.map
