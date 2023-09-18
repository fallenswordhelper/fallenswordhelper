import{o as n}from"./onlinePlayersPage-b866e3ba.js"
import{a as t}from"./all-414e0607.js"
import{c3 as e,c as a,ae as s,bJ as i,r,cL as l,bj as o,aa as f,bH as u,w as c,o as p,b as m,G as h}from"./calfSystem-929ac228.js"
import{l as d}from"./loadDataTables-b53232a5.js"
import{r as v}from"./regExpGroups-9d5b9f10.js"
import{r as y}from"./remainingPages-9b4c19bf.js"
import{n as g}from"./now-6f22aec9.js"
import{g as L,s as M}from"./idb-8fd6b5d1.js"
import{k as b}from"./keys-ae03eaa2.js"
import{a as j,g as P}from"./levelHighlight-f2bf40ae.js"
import{i as x}from"./intValue-e1798d0a.js"
import{f as w}from"./formatLocalDateTime-284e8dc1.js"
import{l as C,p as I}from"./lvlTests-3097e750.js"
import{n as R}from"./numberIsNaN-a40c3bbb.js"
import"./asInt-116907f9.js"
import"./valueText-2acfe155.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
const k=(n,[t])=>n.id===t
function N(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let O=0,T=0
const D=[()=>O,n=>function(n){const t=r(l,n)
if(t)return Number(t)}(n[0])!==i(),n=>x(n[2])>=j(),n=>x(n[2])<=P()]
function q(n,t){(function(n){return D.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}function H(n,t){O=s("highlightPlayersNearMyLvl"),T=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:q,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t))}function _(){T.draw()}function G(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||_()}function S(n,t){return parseInt($(n,t).val(),10)}function J(n,t){R(t)||f(n,t)}function A(n,t,e){const a=S("#fshMinLvl",n),s=S("#fshMaxLvl",n)
J("onlinePlayerMinLvl",a),J("onlinePlayerMaxLvl",s)
const i=o(x(e[2]),0)
return C(I,i,a,s)}let E=0,Q=0,U=0,V=0
function W(n){Q=n||{},function(n){$.fn.dataTable.ext.search.push(a(A,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(s("lastOnlineCheck")))}</div>`)}(E),H(E,function(n){return b(n).map(a(N,n))}(Q))}function X(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return Q[n]&&Q[n][3]>t})(s,n)||(Q[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function Z(e,a){V=function(n){const{page:t}=v(/(?<page>\d+)/,n.parent().text())
return parseInt(t,10)}(a)
const s=y(V,n).map((async n=>e(await n)))
return t(s)}function z(n){$("#fshOutput",E).append(n)}function B(n){z(` ${U+1}`)
const t=h(n),e=$("#pCC input.custominput",t).first()
!function(n,t){const e=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(X,e))}(t,e),U+=1,1===U&&Z(B,e),U===V&&(M("fsh_onlinePlayers",Q),W(Q))}const F=[["fshRefresh",async function(){$("#fshRefresh",E).hide(),U=0,Q={}
const t=n(1)
f("lastOnlineCheck",g()),z("Parsing online players..."),B(await t)}],["fshReset",()=>function(n){f("onlinePlayerMinLvl",u.onlinePlayerMinLvl),f("onlinePlayerMaxLvl",u.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(u.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(u.onlinePlayerMaxLvl),_()}(E)]]
async function K(){E.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return g()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(g()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
W(await L("fsh_onlinePlayers")),p(E[0],(n=F,t=>e(k,n,t))),m(E[0],"keyup",G)}async function Y(n){c()||(E=n?$(n):$("#pCC"),await d(),K())}export{Y as default}
//# sourceMappingURL=injectOnlinePlayers-28f87c7a.js.map
