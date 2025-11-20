import{o as n}from"./onlinePlayersPage-BUQG8hCd.js"
import{cU as e,c as a,aA as t,o as s,s as l,g as i,aC as r,aO as o,r as c,dz as f,aK as u,b$ as h,aw as p,av as v,cx as d,a4 as m,bK as g,b as y,ag as L,a1 as M,bL as P,a8 as b}from"./calfSystem-HVCiy-VV.js"
import{l as x}from"./loadDataTables-BV3m4OGe.js"
import{r as I}from"./remainingPages-BUotk4St.js"
import{k}from"./keys-CFr_h3Bx.js"
import{a as C,g as O}from"./levelHighlight-CKxWO6YR.js"
import{f as w}from"./formatLocalDateTime-Cd9BptN4.js"
import{l as _,p as R}from"./lvlTests-Iza15bjh.js"
const j=(n,[e])=>n.id===e
function T(n,e){const a=$("<div/>").append(n[e][0])
return $("img",a).addClass("fshImgCntr"),[a.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=c(f,n)
if(e)return Number(e)}(n[0])!==r(),n=>o(n[2])>=C(),n=>o(n[2])<=O()]
function H(n,e){(function(n){return D.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const A=n=>l("OnlinePlayers",n),E=n=>()=>{l("OnlinePlayers",n)}
function G(n){"IMG"===n.currentTarget.children[0]?.tagName?A("guild click"):A("player click")}function K(n,e){N=t("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:H,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",G),$("#fshInv").on("click",".sorting",E("sorting")),$("#fshInv_length select").on("change",E("dataTables_length")),$("#fshInv_filter input").on("keyup",E("dataTables_filter")),s(i("fshInv_paginate"),n=>{n.target.classList.contains("paginate_button")&&A("paginate_button")})}function S(){q.draw()}function z(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),S())}function U(n,e){return parseInt($(n,e).val(),10)}function W(n,e){p(e)||v(n,e)}function B(n,e,a){const t=U("#fshMinLvl",n),s=U("#fshMaxLvl",n)
W("onlinePlayerMinLvl",t),W("onlinePlayerMaxLvl",s)
const l=h(o(a[2]),0)
return _(R,l,t,s)}let F=0,J=0,Q=0,V=0
function X(n){J=n||{},function(n){$.fn.dataTable.ext.search.push(a(B,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(t("lastOnlineCheck")))}</div>`)}(F),K(F,function(n){return k(n).map(a(T,n))}(J))}function Y(n,e,a){const t=$("td",$(a)),s=t.eq(1).text();(function(n,e){return J[n]&&J[n][3]>e})(s,n)||(J[s]=function(n,e,a){return[a.eq(0).html(),a.eq(1).html(),a.eq(2).text(),n,e]}(n,e,t))}function Z(e,a){V=function(n){const{page:e}=b(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(a)
const t=I(V,n).map(async n=>e(await n))
return M(t)}function nn(n){$("#fshOutput",F).append(n)}function en(n){nn(` ${Q+1}`)
const e=L(n),t=$("#pCC input.custominput",e).first()
!function(n,e){const t=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(Y,t))}(e,t),Q+=1,1===Q&&Z(en,t),Q===V&&(P("fsh_onlinePlayers",J),X(J))}const an=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",F).hide(),Q=0,J={}
const e=n(1)
v("lastOnlineCheck",u()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",d.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",d.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(d.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(d.onlinePlayerMaxLvl),S()}(F)]]
async function tn(){F.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return u()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(u()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
X(await g("fsh_onlinePlayers")),s(F[0],(n=an,a=>e(j,n,a))),y(F[0],"keyup",z)}async function sn(n){m()||(F=n?$(n):$("#pCC"),await x(),tn())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-Ckip49TU.js.map
