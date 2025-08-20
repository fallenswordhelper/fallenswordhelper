import{o as n}from"./onlinePlayersPage-B4GshMDd.js"
import{cX as e,dG as a,c as t,az as s,o as l,s as i,g as r,cr as o,aM as c,r as f,dJ as u,aI as h,bX as p,av as d,au as v,cp as g,a2 as m,bG as y,b as L,af as M,_ as P,bH as b,a6 as x}from"./calfSystem-CT1aM4VG.js"
import{l as I}from"./loadDataTables-Ijv1_QQZ.js"
import{r as C}from"./remainingPages-BzskAxSU.js"
import{a as O,g as _}from"./levelHighlight-w_oY2gIP.js"
import{f as k}from"./formatLocalDateTime-B_p3ONjw.js"
import{l as w,p as R}from"./lvlTests-DQGH0k0Y.js"
const T=(n,[e])=>n.id===e
function j(n,e){const a=$("<div/>").append(n[e][0])
return $("img",a).addClass("fshImgCntr"),[a.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let D=0,N=0
const q=[()=>D,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=O(),n=>c(n[2])<=_()]
function G(n,e){(function(n){return q.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const H=n=>i("OnlinePlayers",n),E=n=>()=>{i("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?H("guild click"):H("player click")}function W(n,e){D=s("highlightPlayersNearMyLvl"),N=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:G,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",E("sorting")),$("#fshInv_length select").on("change",E("dataTables_length")),$("#fshInv_filter input").on("keyup",E("dataTables_filter")),l(r("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&H("paginate_button")}))}function X(){N.draw()}function z(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),X())}function A(n,e){return parseInt($(n,e).val(),10)}function J(n,e){d(e)||v(n,e)}function Z(n,e,a){const t=A("#fshMinLvl",n),s=A("#fshMaxLvl",n)
J("onlinePlayerMinLvl",t),J("onlinePlayerMaxLvl",s)
const l=p(c(a[2]),0)
return w(R,l,t,s)}let B=0,F=0,K=0,Q=0
function U(n){F=n||{},function(n){$.fn.dataTable.ext.search.push(t(Z,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${k(new Date(s("lastOnlineCheck")))}</div>`)}(B),W(B,function(n){return a(n).map(t(j,n))}(F))}function V(n,e,a){const t=$("td",$(a)),s=t.eq(1).text();(function(n,e){return F[n]&&F[n][3]>e})(s,n)||(F[s]=function(n,e,a){return[a.eq(0).html(),a.eq(1).html(),a.eq(2).text(),n,e]}(n,e,t))}function Y(e,a){Q=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(a)
const t=C(Q,n).map((async n=>e(await n)))
return P(t)}function nn(n){$("#fshOutput",B).append(n)}function en(n){nn(` ${K+1}`)
const e=M(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(V,a))}(e,a),K+=1,1===K&&Y(en,a),K===Q&&(b("fsh_onlinePlayers",F),U(F))}const an=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",B).hide(),K=0,F={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",g.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),X()}(B)]]
async function tn(){B.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
U(await y("fsh_onlinePlayers")),l(B[0],(n=an,a=>e(T,n,a))),L(B[0],"keyup",z)}async function sn(n){m()||(B=n?$(n):$("#pCC"),await I(),tn())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-DPJ4wWlr.js.map
