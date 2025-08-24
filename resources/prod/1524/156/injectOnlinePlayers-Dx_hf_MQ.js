import{o as n}from"./onlinePlayersPage-z0CO7_Qh.js"
import{cR as e,dA as a,c as t,aA as s,o as l,s as i,g as r,cu as o,aN as c,r as f,dD as u,aJ as h,bY as p,aw as d,av as v,cs as g,a3 as m,bH as y,b as L,ag as M,a0 as P,bI as b,a7 as x}from"./calfSystem-79LsojAC.js"
import{l as I}from"./loadDataTables-VTwwaj33.js"
import{r as w}from"./remainingPages-BUotk4St.js"
import{a as C,g as O}from"./levelHighlight-DiLR0cOI.js"
import{f as k}from"./formatLocalDateTime-CwDWzRUp.js"
import{l as _,p as R}from"./lvlTests-CmrBffHL.js"
const T=(n,[e])=>n.id===e
function j(n,e){const a=$("<div/>").append(n[e][0])
return $("img",a).addClass("fshImgCntr"),[a.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=f(u,n)
if(e)return Number(e)}(n[0])!==o(),n=>c(n[2])>=C(),n=>c(n[2])<=O()]
function A(n,e){(function(n){return D.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const H=n=>i("OnlinePlayers",n),S=n=>()=>{i("OnlinePlayers",n)}
function E(n){"IMG"===n.currentTarget.children[0]?.tagName?H("guild click"):H("player click")}function G(n,e){N=s("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:A,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",E),$("#fshInv").on("click",".sorting",S("sorting")),$("#fshInv_length select").on("change",S("dataTables_length")),$("#fshInv_filter input").on("keyup",S("dataTables_filter")),l(r("fshInv_paginate"),n=>{n.target.classList.contains("paginate_button")&&H("paginate_button")})}function W(){q.draw()}function J(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(i("OnlinePlayers","changeLvl"),W())}function Y(n,e){return parseInt($(n,e).val(),10)}function z(n,e){d(e)||v(n,e)}function B(n,e,a){const t=Y("#fshMinLvl",n),s=Y("#fshMaxLvl",n)
z("onlinePlayerMinLvl",t),z("onlinePlayerMaxLvl",s)
const l=p(c(a[2]),0)
return _(R,l,t,s)}let F=0,K=0,Q=0,U=0
function V(n){K=n||{},function(n){$.fn.dataTable.ext.search.push(t(B,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${k(new Date(s("lastOnlineCheck")))}</div>`)}(F),G(F,function(n){return a(n).map(t(j,n))}(K))}function X(n,e,a){const t=$("td",$(a)),s=t.eq(1).text();(function(n,e){return K[n]&&K[n][3]>e})(s,n)||(K[s]=function(n,e,a){return[a.eq(0).html(),a.eq(1).html(),a.eq(2).text(),n,e]}(n,e,t))}function Z(e,a){U=function(n){const{page:e}=x(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(a)
const t=w(U,n).map(async n=>e(await n))
return P(t)}function nn(n){$("#fshOutput",F).append(n)}function en(n){nn(` ${Q+1}`)
const e=M(n),a=$("#pCC input.custominput",e).first()
!function(n,e){const a=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(t(X,a))}(e,a),Q+=1,1===Q&&Z(en,a),Q===U&&(b("fsh_onlinePlayers",K),V(K))}const an=[["fshRefresh",async function(){i("OnlinePlayers","refreshEvt"),$("#fshRefresh",F).hide(),Q=0,K={}
const e=n(1)
v("lastOnlineCheck",h()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){i("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",g.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",g.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(g.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(g.onlinePlayerMaxLvl),W()}(F)]]
async function tn(){F.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return h()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(h()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
V(await y("fsh_onlinePlayers")),l(F[0],(n=an,a=>e(T,n,a))),L(F[0],"keyup",J)}async function sn(n){m()||(F=n?$(n):$("#pCC"),await I(),tn())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-Dx_hf_MQ.js.map
