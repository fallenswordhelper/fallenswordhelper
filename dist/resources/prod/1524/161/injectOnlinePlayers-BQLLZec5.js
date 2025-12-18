import{o as n}from"./onlinePlayersPage-ORnpdX3j.js"
import{cS as e,c as a,aA as t,o as s,s as l,g as i,aC as r,aO as o,r as c,dz as f,aK as u,bZ as h,aw as p,av as v,cw as d,a4 as m,bH as g,b as y,ag as L,a1 as M,bI as P,a8 as b}from"./calfSystem-Cs6CSxoU.js"
import{l as x}from"./loadDataTables-Ck0U5wjM.js"
import{r as I}from"./remainingPages-BUotk4St.js"
import{k}from"./keys-CFr_h3Bx.js"
import{a as w,g as C}from"./levelHighlight-CfrLxVu5.js"
import{f as O}from"./formatLocalDateTime-C9f9m_Zb.js"
import{l as _,p as R}from"./lvlTests-CVDQ4SVd.js"
const j=(n,[e])=>n.id===e
function T(n,e){const a=$("<div/>").append(n[e][0])
return $("img",a).addClass("fshImgCntr"),[a.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let N=0,q=0
const D=[()=>N,n=>function(n){const e=c(f,n)
if(e)return Number(e)}(n[0])!==r(),n=>o(n[2])>=w(),n=>o(n[2])<=C()]
function S(n,e){(function(n){return D.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}const H=n=>l("OnlinePlayers",n),A=n=>()=>{l("OnlinePlayers",n)}
function E(n){"IMG"===n.currentTarget.children[0]?.tagName?H("guild click"):H("player click")}function G(n,e){N=t("highlightPlayersNearMyLvl"),q=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:S,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e)),$("#fshInv").on("click","a",E),$("#fshInv").on("click",".sorting",A("sorting")),$("#fshInv_length select").on("change",A("dataTables_length")),$("#fshInv_filter input").on("keyup",A("dataTables_filter")),s(i("fshInv_paginate"),n=>{n.target.classList.contains("paginate_button")&&H("paginate_button")})}function z(){q.draw()}function K(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),z())}function W(n,e){return parseInt($(n,e).val(),10)}function Z(n,e){p(e)||v(n,e)}function B(n,e,a){const t=W("#fshMinLvl",n),s=W("#fshMaxLvl",n)
Z("onlinePlayerMinLvl",t),Z("onlinePlayerMaxLvl",s)
const l=h(o(a[2]),0)
return _(R,l,t,s)}let F=0,J=0,Q=0,U=0
function V(n){J=n||{},function(n){$.fn.dataTable.ext.search.push(a(B,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${O(new Date(t("lastOnlineCheck")))}</div>`)}(F),G(F,function(n){return k(n).map(a(T,n))}(J))}function X(n,e,a){const t=$("td",$(a)),s=t.eq(1).text();(function(n,e){return J[n]&&J[n][3]>e})(s,n)||(J[s]=function(n,e,a){return[a.eq(0).html(),a.eq(1).html(),a.eq(2).text(),n,e]}(n,e,t))}function Y(e,a){U=function(n){const{page:e}=b(/(?<page>\d+)/,n.parent().text())
return parseInt(e,10)}(a)
const t=I(U,n).map(async n=>e(await n))
return M(t)}function nn(n){$("#fshOutput",F).append(n)}function en(n){nn(` ${Q+1}`)
const e=L(n),t=$("#pCC input.custominput",e).first()
!function(n,e){const t=e.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(X,t))}(e,t),Q+=1,1===Q&&Y(en,t),Q===U&&(P("fsh_onlinePlayers",J),V(J))}const an=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",F).hide(),Q=0,J={}
const e=n(1)
v("lastOnlineCheck",u()),nn("Parsing online players..."),en(await e)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),v("onlinePlayerMinLvl",d.onlinePlayerMinLvl),v("onlinePlayerMaxLvl",d.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(d.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(d.onlinePlayerMaxLvl),z()}(F)]]
async function tn(){F.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return u()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(u()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
V(await g("fsh_onlinePlayers")),s(F[0],(n=an,a=>e(j,n,a))),y(F[0],"keyup",K)}async function sn(n){m()||(F=n?$(n):$("#pCC"),await x(),tn())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-BQLLZec5.js.map
