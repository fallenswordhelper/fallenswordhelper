import{o as n}from"./onlinePlayersPage-D-D9Z4A-.js"
import{d0 as e,dM as a,c as t,aB as s,o as l,s as i,g as r,cx as o,aO as c,r as f,dP as u,aK as h,bZ as p,ax as d,aw as v,cv as g,a4 as m,bI as y,b as L,ah as M,a1 as P,bJ as b,a8 as x}from"./calfSystem-C1X5YxJZ.js"
import{l as I}from"./loadDataTables-vs2_7T4b.js"
import{r as O}from"./remainingPages-BzskAxSU.js"
import{a as w,g as C}from"./levelHighlight-DXwvwD_Y.js"
import{f as k}from"./formatLocalDateTime-B6wswID1.js"
import{l as _,p as R}from"./lvlTests-DSEjTSpw.js"
const T=(n,[e])=>n.id===e
function j(n,e){const a=$("<div/>").append(n[e][0])
return $("img",a).addClass("fshImgCntr"),[a.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=w(),n=>c(n[2])<=C()]
function E(n,e){(function(n){return D.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const G=n=>i("OnlinePlayers",n),H=n=>()=>{i("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?G("guild click"):G("player click")}function W(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",H("sorting")),$("#fshInv_length select").on("change",H("dataTables_length")),$("#fshInv_filter input").on("keyup",H("dataTables_filter")),l(r("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&G("paginate_button")}))}function A(){q.draw()}function B(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),A())}function J(n,e){return parseInt($(n,e).val(),10)}function K(n,e){d(e)||v(n,e)}function Y(n,e,a){const t=J("#fshMinLvl",n),s=J("#fshMaxLvl",n)
K("onlinePlayerMinLvl",t),K("onlinePlayerMaxLvl",s)
const l=p(c(a[2]),0)
return _(R,l,t,s)}let Z=0,z=0,F=0,Q=0
function U(n){z=n||{},function(n){$.fn.dataTable.ext.search.push(t(Y,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${k(new Date(s("lastOnlineCheck")))}</div>`)}(Z),W(Z,function(n){return a(n).map(t(j,n))}(z))}function V(n,e,a){const t=$("td",$(a)),s=t.eq(1).text();(function(n,e){return z[n]&&z[n][3]>e})(s,n)||(z[s]=function(n,e,a){return[a.eq(0).html(),a.eq(1).html(),a.eq(2).text(),n,e]}(n,e,t))}function X(e,a){Q=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(a)
const t=O(Q,n).map((async n=>e(await n)))
return P(t)}function nn(n){$("#fshOutput",Z).append(n)}function en(n){nn(` ${F+1}`)
const e=M(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(V,a))}(e,a),F+=1,1===F&&X(en,a),F===Q&&(b("fsh_onlinePlayers",z),U(z))}const an=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",Z).hide(),F=0,z={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",g.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),A()}(Z)]]
async function tn(){Z.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
U(await y("fsh_onlinePlayers")),l(Z[0],(n=an,a=>e(T,n,a))),L(Z[0],"keyup",B)}async function sn(n){m()||(Z=n?$(n):$("#pCC"),await I(),tn())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-Cl5kJ5r7.js.map
