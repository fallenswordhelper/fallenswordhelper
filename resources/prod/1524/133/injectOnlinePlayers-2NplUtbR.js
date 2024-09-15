import{o as n}from"./onlinePlayersPage-COehmKgE.js"
import{ce as e,c as t,ai as a,o as s,g as i,s as l,bW as r,r as o,d0 as c,ap as f,br as u,ae as p,bU as h,w as d,aQ as v,b as m,H as g,aS as y}from"./calfSystem-DKih1pr1.js"
import{a as L}from"./all-YfMtr2SN.js"
import{l as M}from"./loadDataTables-BD5DwvoO.js"
import{r as P}from"./regExpGroups-BwTAtkeC.js"
import{r as b}from"./remainingPages-BzskAxSU.js"
import{k as x}from"./keys-CFr_h3Bx.js"
import{a as I,g as j}from"./levelHighlight-f_dkWKmS.js"
import{i as k}from"./intValue-C7nTQec1.js"
import{f as w}from"./formatLocalDateTime-BeD03EnZ.js"
import{l as C,p as O}from"./lvlTests-BXbkGopt.js"
import{n as _}from"./numberIsNaN-CGkd1jiA.js"
import"./asInt-IcDDYOt_.js"
import"./valueText-jeQmVqbY.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const R=(n,[e])=>n.id===e
function T(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,D=0
const q=[()=>N,n=>function(n){const e=o(c,n)
if(e)return Number(e)}(n[0])!==r(),n=>k(n[2])>=I(),n=>k(n[2])<=j()]
function G(n,e){(function(n){return q.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const H=n=>l("OnlinePlayers",n),S=n=>()=>{l("OnlinePlayers",n)}
function E(n){"IMG"===n.currentTarget.children[0]?.tagName?H("guild click"):H("player click")}function U(n,e){N=a("highlightPlayersNearMyLvl"),D=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:G,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",E),$("#fshInv").on("click",".sorting",S("sorting")),$("#fshInv_length select").on("change",S("dataTables_length")),$("#fshInv_filter input").on("keyup",S("dataTables_filter")),s(i("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&H("paginate_button")}))}function Q(){D.draw()}function W(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),Q())}function Z(n,e){return parseInt($(n,e).val(),10)}function A(n,e){_(e)||p(n,e)}function V(n,e,t){const a=Z("#fshMinLvl",n),s=Z("#fshMaxLvl",n)
A("onlinePlayerMinLvl",a),A("onlinePlayerMaxLvl",s)
const i=u(k(t[2]),0)
return C(O,i,a,s)}let X=0,z=0,B=0,F=0
function J(n){z=n||{},function(n){$.fn.dataTable.ext.search.push(t(V,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(a("lastOnlineCheck")))}</div>`)}(X),U(X,function(n){return x(n).map(t(T,n))}(z))}function K(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return z[n]&&z[n][3]>e})(s,n)||(z[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function Y(e,t){F=function(n){const{page:e}=P(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=b(F,n).map((async n=>e(await n)))
return L(a)}function nn(n){$("#fshOutput",X).append(n)}function en(n){nn(` ${B+1}`)
const e=g(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(K,a))}(e,a),B+=1,1===B&&Y(en,a),B===F&&(y("fsh_onlinePlayers",z),J(z))}const tn=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",X).hide(),B=0,z={}
const e=n(1)
p("lastOnlineCheck",f()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),p("onlinePlayerMinLvl",h.onlinePlayerMinLvl),p("onlinePlayerMaxLvl",h.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(h.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(h.onlinePlayerMaxLvl),Q()}(X)]]
async function an(){X.html(`<span><b>Online Players</b></span>${function(){const n=a("lastOnlineCheck")
return f()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(f()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
J(await v("fsh_onlinePlayers")),s(X[0],(n=tn,t=>e(R,n,t))),m(X[0],"keyup",W)}async function sn(n){d()||(X=n?$(n):$("#pCC"),await M(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-2NplUtbR.js.map
