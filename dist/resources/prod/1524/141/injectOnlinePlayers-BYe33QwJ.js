import{o as n}from"./onlinePlayersPage-BRm6szYG.js"
import{ce as e,b as t,ai as a,r as s,d0 as i,bW as l,s as r,e as o,g as c,ap as f,ad as u,br as p,bU as h,w as d,aQ as v,J as m,aS as g,o as y}from"./calfSystem-Blt4DbaE.js"
import{a as L}from"./all-YfMtr2SN.js"
import{l as P}from"./loadDataTables-CByWfiDg.js"
import{r as M}from"./regExpGroups-B7iOxfb4.js"
import{r as b}from"./remainingPages-BzskAxSU.js"
import{k as x}from"./keys-CFr_h3Bx.js"
import{a as j,g as I}from"./levelHighlight-DkyDPktg.js"
import{i as k}from"./intValue-C7nTQec1.js"
import{f as w}from"./formatLocalDateTime-BeD03EnZ.js"
import{l as C,p as O}from"./lvlTests-BXbkGopt.js"
import{n as R}from"./numberIsNaN-CGkd1jiA.js"
import"./asInt-CnZ3Wv3g.js"
import"./valueText-CRDZBw-0.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const _=(n,[e])=>n.id===e
function N(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let T=0,D=0
const q=[()=>T,n=>function(n){const e=s(i,n)
if(e)return Number(e)}(n[0])!==l(),n=>k(n[2])>=j(),n=>k(n[2])<=I()]
function E(n,e){(function(n){return q.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const S=n=>r("OnlinePlayers",n),G=n=>()=>{r("OnlinePlayers",n)}
function W(n){"IMG"===n.currentTarget.children[0]?.tagName?S("guild click"):S("player click")}function H(n,e){T=a("highlightPlayersNearMyLvl"),D=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",W),$("#fshInv").on("click",".sorting",G("sorting")),$("#fshInv_length select").on("change",G("dataTables_length")),$("#fshInv_filter input").on("keyup",G("dataTables_filter")),o(c("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&S("paginate_button")}))}function Q(){D.draw()}function V(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(r("OnlinePlayers","changeLvl"),Q())}function A(n,e){return parseInt($(n,e).val(),10)}function F(n,e){R(e)||u(n,e)}function J(n,e,t){const a=A("#fshMinLvl",n),s=A("#fshMaxLvl",n)
F("onlinePlayerMinLvl",a),F("onlinePlayerMaxLvl",s)
const i=p(k(t[2]),0)
return C(O,i,a,s)}let K=0,U=0,Y=0,Z=0
function z(n){U=n||{},function(n){$.fn.dataTable.ext.search.push(t(J,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(a("lastOnlineCheck")))}</div>`)}(K),H(K,function(n){return x(n).map(t(N,n))}(U))}function B(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return U[n]&&U[n][3]>e})(s,n)||(U[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function X(e,t){Z=function(n){const{page:e}=M(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=b(Z,n).map((async n=>e(await n)))
return L(a)}function nn(n){$("#fshOutput",K).append(n)}function en(n){nn(` ${Y+1}`)
const e=m(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(B,a))}(e,a),Y+=1,1===Y&&X(en,a),Y===Z&&(g("fsh_onlinePlayers",U),z(U))}const tn=[["fshRefresh",async function(){r("OnlinePlayers","refreshEvt"),$("#fshRefresh",K).hide(),Y=0,U={}
const e=n(1)
u("lastOnlineCheck",f()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){r("OnlinePlayers","resetEvt"),u("onlinePlayerMinLvl",h.onlinePlayerMinLvl),u("onlinePlayerMaxLvl",h.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(h.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(h.onlinePlayerMaxLvl),Q()}(K)]]
async function an(){K.html(`<span><b>Online Players</b></span>${function(){const n=a("lastOnlineCheck")
return f()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(f()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
z(await v("fsh_onlinePlayers")),o(K[0],(n=tn,t=>e(_,n,t))),y(K[0],"keyup",V)}async function sn(n){d()||(K=n?$(n):$("#pCC"),await P(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-BYe33QwJ.js.map
