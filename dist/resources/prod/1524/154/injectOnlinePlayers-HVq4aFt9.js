import{o as n}from"./onlinePlayersPage-Ckw7Ipi3.js"
import{cY as e,dH as t,c as a,az as s,o as l,s as i,g as r,ct as o,aM as c,r as f,dK as u,aI as h,bX as p,av as d,au as v,cr as g,a2 as m,bG as y,b as L,af as M,_ as P,bH as b,a6 as x}from"./calfSystem-KFszEm2S.js"
import{l as I}from"./loadDataTables-B4cGnqNh.js"
import{r as _}from"./remainingPages-BUotk4St.js"
import{a as C,g as O}from"./levelHighlight-DlRQlvAB.js"
import{f as k}from"./formatLocalDateTime-CbYUB6LF.js"
import{l as w,p as R}from"./lvlTests-7Ek6JZZ8.js"
const T=(n,[e])=>n.id===e
function j(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=C(),n=>c(n[2])<=O()]
function H(n,e){(function(n){return D.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const G=n=>i("OnlinePlayers",n),E=n=>()=>{i("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?G("guild click"):G("player click")}function X(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:H,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",E("sorting")),$("#fshInv_length select").on("change",E("dataTables_length")),$("#fshInv_filter input").on("keyup",E("dataTables_filter")),l(r("fshInv_paginate"),n=>{n.target.classList.contains("paginate_button")&&G("paginate_button")})}function z(){q.draw()}function A(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),z())}function F(n,e){return parseInt($(n,e).val(),10)}function K(n,e){d(e)||v(n,e)}function W(n,e,t){const a=F("#fshMinLvl",n),s=F("#fshMaxLvl",n)
K("onlinePlayerMinLvl",a),K("onlinePlayerMaxLvl",s)
const l=p(c(t[2]),0)
return w(R,l,a,s)}let Y=0,B=0,J=0,Q=0
function U(n){B=n||{},function(n){$.fn.dataTable.ext.search.push(a(W,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${k(new Date(s("lastOnlineCheck")))}</div>`)}(Y),X(Y,function(n){return t(n).map(a(j,n))}(B))}function V(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return B[n]&&B[n][3]>e})(s,n)||(B[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function Z(e,t){Q=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(t)
const a=_(Q,n).map(async n=>e(await n))
return P(a)}function nn(n){$("#fshOutput",Y).append(n)}function en(n){nn(` ${J+1}`)
const e=M(n),t=$("#pCC input.custominput",e).first()
!function(n,e){const t=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(V,t))}(e,t),J+=1,1===J&&Z(en,t),J===Q&&(b("fsh_onlinePlayers",B),U(B))}const tn=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",Y).hide(),J=0,B={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",g.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),z()}(Y)]]
async function an(){Y.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
U(await y("fsh_onlinePlayers")),l(Y[0],(n=tn,t=>e(T,n,t))),L(Y[0],"keyup",A)}async function sn(n){m()||(Y=n?$(n):$("#pCC"),await I(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-HVq4aFt9.js.map
