import{o as n}from"./onlinePlayersPage-p3GhQIBY.js"
import{c1 as t,c as e,ad as a,o as s,g as i,s as l,bH as r,r as o,cL as c,bh as f,a9 as u,bF as p,w as h,b as m,F as d}from"./calfSystem-VUa7wwu1.js"
import{a as v}from"./all-TTLWag-d.js"
import{l as g}from"./loadDataTables-ITdAx-eG.js"
import{r as y}from"./regExpGroups-Qkm3EIP8.js"
import{r as L}from"./remainingPages-B8w0PByy.js"
import{n as M}from"./now-pQzGw6vd.js"
import{g as b,s as P}from"./idb-gpu32B-C.js"
import{k as j}from"./keys-fO1nQfVO.js"
import{a as x,g as I}from"./levelHighlight-9qo1ycLz.js"
import{i as k}from"./intValue-JHhLnq8V.js"
import{f as w}from"./formatLocalDateTime-53V6QKEs.js"
import{l as C,p as O}from"./lvlTests-Ed6CIznK.js"
import{n as _}from"./numberIsNaN--k2kVli9.js"
import"./asInt-X0f7ehmu.js"
import"./valueText-13w7MOtM.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
const R=(n,[t])=>n.id===t
function T(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let N=0,D=0
const q=[()=>N,n=>function(n){const t=o(c,n)
if(t)return Number(t)}(n[0])!==r(),n=>k(n[2])>=x(),n=>k(n[2])<=I()]
function E(n,t){(function(n){return q.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}const G=n=>l("OnlinePlayers",n),H=n=>()=>{l("OnlinePlayers",n)}
function S(n){"IMG"===n.currentTarget.children[0]?.tagName?G("guild click"):G("player click")}function F(n,t){N=a("highlightPlayersNearMyLvl"),D=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:E,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t)),$("#fshInv").on("click","a",S),$("#fshInv").on("click",".sorting",H("sorting")),$("#fshInv_length select").on("change",H("dataTables_length")),$("#fshInv_filter input").on("keyup",H("dataTables_filter")),s(i("fshInv_paginate"),(n=>{n.target.classList.contains("paginate_button")&&G("paginate_button")}))}function A(){D.draw()}function K(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||(l("OnlinePlayers","changeLvl"),A())}function Q(n,t){return parseInt($(n,t).val(),10)}function U(n,t){_(t)||u(n,t)}function V(n,t,e){const a=Q("#fshMinLvl",n),s=Q("#fshMaxLvl",n)
U("onlinePlayerMinLvl",a),U("onlinePlayerMaxLvl",s)
const i=f(k(e[2]),0)
return C(O,i,a,s)}let W=0,X=0,Y=0,Z=0
function z(n){X=n||{},function(n){$.fn.dataTable.ext.search.push(e(V,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(a("lastOnlineCheck")))}</div>`)}(W),F(W,function(n){return j(n).map(e(T,n))}(X))}function B(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return X[n]&&X[n][3]>t})(s,n)||(X[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function J(t,e){Z=function(n){const{page:t}=y(/(?<page>\d+)/,n.parent().text())
return parseInt(t,10)}(e)
const a=L(Z,n).map((async n=>t(await n)))
return v(a)}function nn(n){$("#fshOutput",W).append(n)}function tn(n){nn(` ${Y+1}`)
const t=d(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(B,a))}(t,a),Y+=1,1===Y&&J(tn,a),Y===Z&&(P("fsh_onlinePlayers",X),z(X))}const en=[["fshRefresh",async function(){l("OnlinePlayers","refreshEvt"),$("#fshRefresh",W).hide(),Y=0,X={}
const t=n(1)
u("lastOnlineCheck",M()),nn("Parsing online players..."),tn(await t)}],["fshReset",()=>function(n){l("OnlinePlayers","resetEvt"),u("onlinePlayerMinLvl",p.onlinePlayerMinLvl),u("onlinePlayerMaxLvl",p.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(p.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(p.onlinePlayerMaxLvl),A()}(W)]]
async function an(){W.html(`<span><b>Online Players</b></span>${function(){const n=a("lastOnlineCheck")
return M()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(M()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
z(await b("fsh_onlinePlayers")),s(W[0],(n=en,e=>t(R,n,e))),m(W[0],"keyup",K)}async function sn(n){h()||(W=n?$(n):$("#pCC"),await g(),an())}export{sn as default}
//# sourceMappingURL=injectOnlinePlayers-ooTlUJHi.js.map
