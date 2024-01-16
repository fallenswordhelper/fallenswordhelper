import{o as n}from"./onlinePlayersPage-pX_nm_su.js"
import{c9 as t,c as e,ai as a,o as s,g as i,s as l,bP as r,r as o,cW as c,bp as f,ae as u,bN as p,w as h,aO as m,b as v,H as d,aQ as g}from"./calfSystem-G1dN925O.js"
import{a as y}from"./all-TTLWag-d.js"
import{l as L}from"./loadDataTables-opgkYLAf.js"
import{r as P}from"./regExpGroups-4702yhMp.js"
import{r as M}from"./remainingPages-B8w0PByy.js"
import{n as b}from"./now-pQzGw6vd.js"
import{k as x}from"./keys-fO1nQfVO.js"
import{a as j,g as I}from"./levelHighlight-WJ2CNHUv.js"
import{i as k}from"./intValue-JHhLnq8V.js"
import{f as w}from"./formatLocalDateTime-53V6QKEs.js"
import{l as O,p as C}from"./lvlTests-Ed6CIznK.js"
import{n as _}from"./numberIsNaN--k2kVli9.js"
import"./asInt-PKKHs1-a.js"
import"./valueText-890HKMma.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
const R=(n,[t])=>n.id===t
function T(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let N=0,D=0
const q=[()=>N,n=>function(n){const t=o(c,n)
if(t)return Number(t)}(n[0])!==r(),n=>k(n[2])>=j(),n=>k(n[2])<=I()]
function H(n,t){(function(n){return q.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}const E=n=>l("OnlinePlayers",n),G=n=>()=>{l("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?E("guild click"):E("player click")}function W(n,t){N=a("highlightPlayersNearMyLvl"),D=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:H,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",G("sorting")),$("#fshInv_length select").on("change",G("dataTables_length")),$("#fshInv_filter input").on("keyup",G("dataTables_filter")),s(i("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&E("paginate_button")}))}function Q(){D.draw()}function V(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),Q())}function Z(n,t){return parseInt($(n,t).val(),10)}function A(n,t){_(t)||u(n,t)}function z(n,t,e){const a=Z("#fshMinLvl",n),s=Z("#fshMaxLvl",n)
A("onlinePlayerMinLvl",a),A("onlinePlayerMaxLvl",s)
const i=f(k(e[2]),0)
return O(C,i,a,s)}let B=0,F=0,J=0,K=0
function U(n){F=n||{},function(n){$.fn.dataTable.ext.search.push(e(z,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(a("lastOnlineCheck")))}</div>`)}(B),W(B,function(n){return x(n).map(e(T,n))}(F))}function X(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return F[n]&&F[n][3]>t})(s,n)||(F[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function Y(t,e){K=function(n){const{page:t}=P(/(?<page>\d+)/,n.parent().text())
return parseInt(t,10)}(e)
const a=M(K,n).map((async n=>t(await n)))
return y(a)}function nn(n){$("#fshOutput",B).append(n)}function tn(n){nn(` ${J+1}`)
const t=d(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(X,a))}(t,a),J+=1,1===J&&Y(tn,a),J===K&&(g("fsh_onlinePlayers",F),U(F))}const en=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",B).hide(),J=0,F={}
const t=n(1)
u("lastOnlineCheck",b()),nn("Parsing online players..."),tn(await t)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),u("onlinePlayerMinLvl",p.onlinePlayerMinLvl),u("onlinePlayerMaxLvl",p.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(p.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(p.onlinePlayerMaxLvl),Q()}(B)]]
async function an(){B.html(`<span><b>Online Players</b></span>${function(){const n=a("lastOnlineCheck")
return b()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(b()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
U(await m("fsh_onlinePlayers")),s(B[0],(n=en,e=>t(R,n,e))),v(B[0],"keyup",V)}async function sn(n){h()||(B=n?$(n):$("#pCC"),await L(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-pUJVEg94.js.map
