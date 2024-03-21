import{o as n}from"./onlinePlayersPage-CWmiTy7s.js"
import{c9 as t,c as e,ai as a,o as s,g as i,s as l,bP as r,r as o,cW as c,bp as f,ae as u,bN as p,w as h,aO as m,b as v,H as d,aQ as g}from"./calfSystem-Bit7wh4p.js"
import{a as y}from"./all-YfMtr2SN.js"
import{l as L}from"./loadDataTables-84USdclV.js"
import{r as M}from"./regExpGroups-B2dSaIn_.js"
import{r as P}from"./remainingPages-BzskAxSU.js"
import{n as b}from"./now-Cx4PsKjI.js"
import{k as x}from"./keys-CFr_h3Bx.js"
import{a as I,g as j}from"./levelHighlight-DtT9TXBN.js"
import{i as k}from"./intValue-C7nTQec1.js"
import{f as w}from"./formatLocalDateTime-BeD03EnZ.js"
import{l as O,p as C}from"./lvlTests-BXbkGopt.js"
import{n as _}from"./numberIsNaN-CGkd1jiA.js"
import"./asInt-ChOO1BWT.js"
import"./valueText-BctNKhqv.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const R=(n,[t])=>n.id===t
function T(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let N=0,D=0
const q=[()=>N,n=>function(n){const t=o(c,n)
if(t)return Number(t)}(n[0])!==r(),n=>k(n[2])>=I(),n=>k(n[2])<=j()]
function E(n,t){(function(n){return q.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}const G=n=>l("OnlinePlayers",n),H=n=>()=>{l("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?G("guild click"):G("player click")}function Q(n,t){N=a("highlightPlayersNearMyLvl"),D=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",H("sorting")),$("#fshInv_length select").on("change",H("dataTables_length")),$("#fshInv_filter input").on("keyup",H("dataTables_filter")),s(i("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&G("paginate_button")}))}function W(){D.draw()}function X(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),W())}function A(n,t){return parseInt($(n,t).val(),10)}function J(n,t){_(t)||u(n,t)}function U(n,t,e){const a=A("#fshMinLvl",n),s=A("#fshMaxLvl",n)
J("onlinePlayerMinLvl",a),J("onlinePlayerMaxLvl",s)
const i=f(k(e[2]),0)
return O(C,i,a,s)}let V=0,Z=0,z=0,B=0
function F(n){Z=n||{},function(n){$.fn.dataTable.ext.search.push(e(U,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(a("lastOnlineCheck")))}</div>`)}(V),Q(V,function(n){return x(n).map(e(T,n))}(Z))}function K(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return Z[n]&&Z[n][3]>t})(s,n)||(Z[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function Y(t,e){B=function(n){const{page:t}=M(/(?<page>\d+)/,n.parent().text())
return parseInt(t,10)}(e)
const a=P(B,n).map((async n=>t(await n)))
return y(a)}function nn(n){$("#fshOutput",V).append(n)}function tn(n){nn(` ${z+1}`)
const t=d(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(K,a))}(t,a),z+=1,1===z&&Y(tn,a),z===B&&(g("fsh_onlinePlayers",Z),F(Z))}const en=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",V).hide(),z=0,Z={}
const t=n(1)
u("lastOnlineCheck",b()),nn("Parsing online players..."),tn(await t)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),u("onlinePlayerMinLvl",p.onlinePlayerMinLvl),u("onlinePlayerMaxLvl",p.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(p.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(p.onlinePlayerMaxLvl),W()}(V)]]
async function an(){V.html(`<span><b>Online Players</b></span>${function(){const n=a("lastOnlineCheck")
return b()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(b()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
F(await m("fsh_onlinePlayers")),s(V[0],(n=en,e=>t(R,n,e))),v(V[0],"keyup",X)}async function sn(n){h()||(V=n?$(n):$("#pCC"),await L(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-BS726vhF.js.map
