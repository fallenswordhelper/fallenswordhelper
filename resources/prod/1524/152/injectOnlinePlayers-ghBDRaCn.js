import{o as n}from"./onlinePlayersPage-C7Zk_SRa.js"
import{c_ as e,dK as t,c as a,aB as s,o as l,s as i,g as r,cv as o,ct as c,r as f,dN as u,aK as h,bW as p,ax as d,aw as v,cs as g,a4 as m,bF as y,b as L,ah as M,a1 as P,bG as b,a8 as x}from"./calfSystem-BlPuMQGT.js"
import{l as I}from"./loadDataTables-BKhODvop.js"
import{r as w}from"./remainingPages-BzskAxSU.js"
import{a as C,g as O}from"./levelHighlight-zWITRPw2.js"
import{f as _}from"./formatLocalDateTime-CFMWw0OF.js"
import{l as k,p as R}from"./lvlTests-BPuVsAU3.js"
const T=(n,[e])=>n.id===e
function j(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=C(),n=>c(n[2])<=O()]
function E(n,e){(function(n){return D.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const G=n=>i("OnlinePlayers",n),W=n=>()=>{i("OnlinePlayers",n)}
function H(n){"IMG"===n.currentTarget.children[0]?.tagName?G("guild click"):G("player click")}function K(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",H),$("#fshInv").on("click",".sorting",W("sorting")),$("#fshInv_length select").on("change",W("dataTables_length")),$("#fshInv_filter input").on("keyup",W("dataTables_filter")),l(r("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&G("paginate_button")}))}function S(){q.draw()}function A(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),S())}function B(n,e){return parseInt($(n,e).val(),10)}function F(n,e){d(e)||v(n,e)}function Y(n,e,t){const a=B("#fshMinLvl",n),s=B("#fshMaxLvl",n)
F("onlinePlayerMinLvl",a),F("onlinePlayerMaxLvl",s)
const l=p(c(t[2]),0)
return k(R,l,a,s)}let z=0,J=0,Q=0,U=0
function V(n){J=n||{},function(n){$.fn.dataTable.ext.search.push(a(Y,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${_(new Date(s("lastOnlineCheck")))}</div>`)}(z),K(z,function(n){return t(n).map(a(j,n))}(J))}function X(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return J[n]&&J[n][3]>e})(s,n)||(J[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function Z(e,t){U=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=w(U,n).map((async n=>e(await n)))
return P(a)}function nn(n){$("#fshOutput",z).append(n)}function en(n){nn(` ${Q+1}`)
const e=M(n),t=$("#pCC input.custominput",e).first()
!function(n,e){const t=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(X,t))}(e,t),Q+=1,1===Q&&Z(en,t),Q===U&&(b("fsh_onlinePlayers",J),V(J))}const tn=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",z).hide(),Q=0,J={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",g.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),S()}(z)]]
async function an(){z.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
V(await y("fsh_onlinePlayers")),l(z[0],(n=tn,t=>e(T,n,t))),L(z[0],"keyup",A)}async function sn(n){m()||(z=n?$(n):$("#pCC"),await I(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-ghBDRaCn.js.map
