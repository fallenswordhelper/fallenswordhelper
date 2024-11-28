import{o as n}from"./onlinePlayersPage-CZxfudqK.js"
import{ce as e,c as t,ai as a,o as s,g as i,s as l,bW as r,r as o,d0 as c,ap as f,br as u,ae as p,bU as h,w as d,aQ as v,b as m,H as g,aS as y}from"./calfSystem-KuDT30_2.js"
import{a as L}from"./all-YfMtr2SN.js"
import{l as P}from"./loadDataTables-D2vPiaS1.js"
import{r as M}from"./regExpGroups-BrPI0Zio.js"
import{r as b}from"./remainingPages-BzskAxSU.js"
import{k as x}from"./keys-CFr_h3Bx.js"
import{a as j,g as I}from"./levelHighlight-Ckr_5ehQ.js"
import{i as k}from"./intValue-C7nTQec1.js"
import{f as w}from"./formatLocalDateTime-BeD03EnZ.js"
import{l as C,p as O}from"./lvlTests-BXbkGopt.js"
import{n as R}from"./numberIsNaN-CGkd1jiA.js"
import"./asInt-Dqcsg_oM.js"
import"./valueText-DmqsoxRt.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const _=(n,[e])=>n.id===e
function N(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let T=0,D=0
const q=[()=>T,n=>function(n){const e=o(c,n)
if(e)return Number(e)}(n[0])!==r(),n=>k(n[2])>=j(),n=>k(n[2])<=I()]
function E(n,e){(function(n){return q.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const S=n=>l("OnlinePlayers",n),G=n=>()=>{l("OnlinePlayers",n)}
function H(n){"IMG"===n.currentTarget.children[0]?.tagName?S("guild click"):S("player click")}function W(n,e){T=a("highlightPlayersNearMyLvl"),D=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",H),$("#fshInv").on("click",".sorting",G("sorting")),$("#fshInv_length select").on("change",G("dataTables_length")),$("#fshInv_filter input").on("keyup",G("dataTables_filter")),s(i("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&S("paginate_button")}))}function Q(){D.draw()}function V(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),Q())}function A(n,e){return parseInt($(n,e).val(),10)}function F(n,e){R(e)||p(n,e)}function K(n,e,t){const a=A("#fshMinLvl",n),s=A("#fshMaxLvl",n)
F("onlinePlayerMinLvl",a),F("onlinePlayerMaxLvl",s)
const i=u(k(t[2]),0)
return C(O,i,a,s)}let U=0,Y=0,Z=0,z=0
function B(n){Y=n||{},function(n){$.fn.dataTable.ext.search.push(t(K,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(a("lastOnlineCheck")))}</div>`)}(U),W(U,function(n){return x(n).map(t(N,n))}(Y))}function J(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return Y[n]&&Y[n][3]>e})(s,n)||(Y[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function X(e,t){z=function(n){const{page:e}=M(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=b(z,n).map((async n=>e(await n)))
return L(a)}function nn(n){$("#fshOutput",U).append(n)}function en(n){nn(` ${Z+1}`)
const e=g(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(J,a))}(e,a),Z+=1,1===Z&&X(en,a),Z===z&&(y("fsh_onlinePlayers",Y),B(Y))}const tn=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",U).hide(),Z=0,Y={}
const e=n(1)
p("lastOnlineCheck",f()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),p("onlinePlayerMinLvl",h.onlinePlayerMinLvl),p("onlinePlayerMaxLvl",h.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(h.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(h.onlinePlayerMaxLvl),Q()}(U)]]
async function an(){U.html(`<span><b>Online Players</b></span>${function(){const n=a("lastOnlineCheck")
return f()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(f()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
B(await v("fsh_onlinePlayers")),s(U[0],(n=tn,t=>e(_,n,t))),m(U[0],"keyup",V)}async function sn(n){d()||(U=n?$(n):$("#pCC"),await P(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-CugG2ZZ3.js.map
