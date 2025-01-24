import{o as n}from"./onlinePlayersPage-Diz69BlG.js"
import{cH as e,dn as t,c as a,ao as s,o as l,g as i,s as r,cm as o,aA as c,r as f,ds as u,ay as h,bQ as p,ak as d,aj as v,ck as m,x as g,b6 as y,b as L,K as M,b8 as P,u as b,B as x}from"./calfSystem-CvwhhJv4.js"
import{l as I}from"./loadDataTables-Djl1XjSy.js"
import{r as k}from"./remainingPages-BzskAxSU.js"
import{a as C,g as O}from"./levelHighlight-BCIkKawI.js"
import{f as w}from"./formatLocalDateTime-BhcG8Fc8.js"
import{l as _,p as R}from"./lvlTests-9KC65II_.js"
const j=(n,[e])=>n.id===e
function T(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=C(),n=>c(n[2])<=O()]
function H(n,e){(function(n){return D.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const A=n=>r("OnlinePlayers",n),E=n=>()=>{r("OnlinePlayers",n)}
function G(n){"IMG"===n.currentTarget.children[0]?.tagName?A("guild click"):A("player click")}function S(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:H,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",G),$("#fshInv").on("click",".sorting",E("sorting")),$("#fshInv_length select").on("change",E("dataTables_length")),$("#fshInv_filter input").on("keyup",E("dataTables_filter")),l(i("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&A("paginate_button")}))}function B(){q.draw()}function K(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(r("OnlinePlayers","changeLvl"),B())}function Q(n,e){return parseInt($(n,e).val(),10)}function W(n,e){d(e)||v(n,e)}function z(n,e,t){const a=Q("#fshMinLvl",n),s=Q("#fshMaxLvl",n)
W("onlinePlayerMinLvl",a),W("onlinePlayerMaxLvl",s)
const l=p(c(t[2]),0)
return _(R,l,a,s)}let F=0,J=0,U=0,V=0
function X(n){J=n||{},function(n){$.fn.dataTable.ext.search.push(a(z,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(s("lastOnlineCheck")))}</div>`)}(F),S(F,function(n){return t(n).map(a(T,n))}(J))}function Y(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return J[n]&&J[n][3]>e})(s,n)||(J[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function Z(e,t){V=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=k(V,n).map((async n=>e(await n)))
return b(a)}function nn(n){$("#fshOutput",F).append(n)}function en(n){nn(` ${U+1}`)
const e=M(n),t=$("#pCC input.custominput",e).first()
!function(n,e){const t=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(Y,t))}(e,t),U+=1,1===U&&Z(en,t),U===V&&(P("fsh_onlinePlayers",J),X(J))}const tn=[["fshRefresh",async function(){r("OnlinePlayers","refreshEvt"),$("#fshRefresh",F).hide(),U=0,J={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){r("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",m.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",m.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(m.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(m.onlinePlayerMaxLvl),B()}(F)]]
async function an(){F.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
X(await y("fsh_onlinePlayers")),l(F[0],(n=tn,t=>e(j,n,t))),L(F[0],"keyup",K)}async function sn(n){g()||(F=n?$(n):$("#pCC"),await I(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-D1otMMNm.js.map
