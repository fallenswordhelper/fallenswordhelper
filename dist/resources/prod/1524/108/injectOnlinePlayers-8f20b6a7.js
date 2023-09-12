import{o as n}from"./onlinePlayersPage-fbd5328e.js"
import{a as t}from"./all-414e0607.js"
import{c6 as e,c as a,af as s,bL as i,r,cP as l,bn as o,ab as f,bJ as u,w as c,o as p,b as m,H as h}from"./calfSystem-34913441.js"
import{l as d}from"./loadDataTables-f80b56a0.js"
import{r as v}from"./regExpGroups-e9c1f885.js"
import{r as y}from"./remainingPages-9b4c19bf.js"
import{n as g}from"./now-6f22aec9.js"
import{g as L,s as M}from"./idb-ec5d6344.js"
import{k as b}from"./keys-ae03eaa2.js"
import{a as P,g as j}from"./levelHighlight-530526cf.js"
import{i as x}from"./intValue-e1798d0a.js"
import{f as w}from"./formatLocalDateTime-284e8dc1.js"
import{l as C,p as I}from"./lvlTests-3097e750.js"
import{n as R}from"./numberIsNaN-a40c3bbb.js"
import"./asInt-f990b3d0.js"
import"./valueText-238d2284.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
const k=(n,[t])=>n.id===t
function N(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let O=0,T=0
const D=[()=>O,n=>function(n){const t=r(l,n)
if(t)return Number(t)}(n[0])!==i(),n=>x(n[2])>=P(),n=>x(n[2])<=j()]
function q(n,t){(function(n){return D.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}function S(n,t){O=s("highlightPlayersNearMyLvl"),T=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:q,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t))}function _(){T.draw()}function H(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||_()}function G(n,t){return parseInt($(n,t).val(),10)}function K(n,t){R(t)||f(n,t)}function X(n,t,e){const a=G("#fshMinLvl",n),s=G("#fshMaxLvl",n)
K("onlinePlayerMinLvl",a),K("onlinePlayerMaxLvl",s)
const i=o(x(e[2]),0)
return C(I,i,a,s)}let A=0,E=0,J=0,Q=0
function V(n){E=n||{},function(n){$.fn.dataTable.ext.search.push(a(X,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(s("lastOnlineCheck")))}</div>`)}(A),S(A,function(n){return b(n).map(a(N,n))}(E))}function W(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return E[n]&&E[n][3]>t})(s,n)||(E[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function Z(e,a){Q=function(n){const{page:t}=v(/(?<page>\d+)/,n.parent().text())
return parseInt(t,10)}(a)
const s=y(Q,n).map((async n=>e(await n)))
return t(s)}function z(n){$("#fshOutput",A).append(n)}function B(n){z(` ${J+1}`)
const t=h(n),e=$("#pCC input.custominput",t).first()
!function(n,t){const e=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(W,e))}(t,e),J+=1,1===J&&Z(B,e),J===Q&&(M("fsh_onlinePlayers",E),V(E))}const F=[["fshRefresh",async function(){$("#fshRefresh",A).hide(),J=0,E={}
const t=n(1)
f("lastOnlineCheck",g()),z("Parsing online players..."),B(await t)}],["fshReset",()=>function(n){f("onlinePlayerMinLvl",u.onlinePlayerMinLvl),f("onlinePlayerMaxLvl",u.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(u.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(u.onlinePlayerMaxLvl),_()}(A)]]
async function U(){A.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return g()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(g()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
V(await L("fsh_onlinePlayers")),p(A[0],(n=F,t=>e(k,n,t))),m(A[0],"keyup",H)}async function Y(n){c()||(A=n?$(n):$("#pCC"),await d(),U())}export{Y as default}
//# sourceMappingURL=injectOnlinePlayers-8f20b6a7.js.map
