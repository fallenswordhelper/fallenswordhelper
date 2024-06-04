import{o as n}from"./onlinePlayersPage-EjiCUXFf.js"
import{ca as t,c as e,ai as a,o as s,g as i,s as l,bQ as r,r as o,cV as c,bp as f,ae as u,bO as p,w as h,aO as m,b as v,H as d,aQ as g}from"./calfSystem-wTzwei3t.js"
import{a as y}from"./all-YfMtr2SN.js"
import{l as L}from"./loadDataTables-D5u8DInA.js"
import{r as M}from"./regExpGroups-B8v1pE-x.js"
import{r as P}from"./remainingPages-BzskAxSU.js"
import{n as b}from"./now-Cx4PsKjI.js"
import{k as x}from"./keys-CFr_h3Bx.js"
import{a as j,g as I}from"./levelHighlight--LzzvzYB.js"
import{i as O}from"./intValue-C7nTQec1.js"
import{f as k}from"./formatLocalDateTime-BeD03EnZ.js"
import{l as w,p as C}from"./lvlTests-BXbkGopt.js"
import{n as _}from"./numberIsNaN-CGkd1jiA.js"
import"./asInt-DcpIJRg8.js"
import"./valueText-CDmZqpbc.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const R=(n,[t])=>n.id===t
function T(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let N=0,D=0
const q=[()=>N,n=>function(n){const t=o(c,n)
if(t)return Number(t)}(n[0])!==r(),n=>O(n[2])>=j(),n=>O(n[2])<=I()]
function H(n,t){(function(n){return q.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}const E=n=>l("OnlinePlayers",n),G=n=>()=>{l("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?E("guild click"):E("player click")}function V(n,t){N=a("highlightPlayersNearMyLvl"),D=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:H,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",G("sorting")),$("#fshInv_length select").on("change",G("dataTables_length")),$("#fshInv_filter input").on("keyup",G("dataTables_filter")),s(i("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&E("paginate_button")}))}function Q(){D.draw()}function A(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),Q())}function J(n,t){return parseInt($(n,t).val(),10)}function U(n,t){_(t)||u(n,t)}function W(n,t,e){const a=J("#fshMinLvl",n),s=J("#fshMaxLvl",n)
U("onlinePlayerMinLvl",a),U("onlinePlayerMaxLvl",s)
const i=f(O(e[2]),0)
return w(C,i,a,s)}let X=0,Z=0,z=0,B=0
function F(n){Z=n||{},function(n){$.fn.dataTable.ext.search.push(e(W,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${k(new Date(a("lastOnlineCheck")))}</div>`)}(X),V(X,function(n){return x(n).map(e(T,n))}(Z))}function K(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return Z[n]&&Z[n][3]>t})(s,n)||(Z[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function Y(t,e){B=function(n){const{page:t}=M(/(?<page>\d+)/,n.parent().text())
return parseInt(t,10)}(e)
const a=P(B,n).map((async n=>t(await n)))
return y(a)}function nn(n){$("#fshOutput",X).append(n)}function tn(n){nn(` ${z+1}`)
const t=d(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(K,a))}(t,a),z+=1,1===z&&Y(tn,a),z===B&&(g("fsh_onlinePlayers",Z),F(Z))}const en=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",X).hide(),z=0,Z={}
const t=n(1)
u("lastOnlineCheck",b()),nn("Parsing online players..."),tn(await t)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),u("onlinePlayerMinLvl",p.onlinePlayerMinLvl),u("onlinePlayerMaxLvl",p.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(p.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(p.onlinePlayerMaxLvl),Q()}(X)]]
async function an(){X.html(`<span><b>Online Players</b></span>${function(){const n=a("lastOnlineCheck")
return b()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(b()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
F(await m("fsh_onlinePlayers")),s(X[0],(n=en,e=>t(R,n,e))),v(X[0],"keyup",A)}async function sn(n){h()||(X=n?$(n):$("#pCC"),await L(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-CjyNhMsy.js.map
