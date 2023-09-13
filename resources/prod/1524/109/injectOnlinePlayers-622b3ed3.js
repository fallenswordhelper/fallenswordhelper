import{o as n}from"./onlinePlayersPage-d90172c4.js"
import{a as t}from"./all-414e0607.js"
import{c5 as e,c as a,af as s,bL as i,r as l,cP as r,bn as o,ab as f,bJ as u,w as c,o as p,b as m,H as h}from"./calfSystem-2f15e074.js"
import{l as d}from"./loadDataTables-7cf44f18.js"
import{r as v}from"./regExpGroups-54cf6a6f.js"
import{r as y}from"./remainingPages-9b4c19bf.js"
import{n as g}from"./now-6f22aec9.js"
import{g as L,s as M}from"./idb-28aa7d4a.js"
import{k as b}from"./keys-ae03eaa2.js"
import{a as P,g as j}from"./levelHighlight-f54178c9.js"
import{i as x}from"./intValue-e1798d0a.js"
import{f as w}from"./formatLocalDateTime-284e8dc1.js"
import{l as C,p as I}from"./lvlTests-3097e750.js"
import{n as R}from"./numberIsNaN-a40c3bbb.js"
import"./asInt-351ebcd4.js"
import"./valueText-4ae65e1f.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
const k=(n,[t])=>n.id===t
function T(n,t){const e=$("<div/>").append(n[t][0])
return $("img",e).addClass("fshImgCntr"),[e.html(),n[t][1],n[t][2],100*n[t][3]+n[t][4]+1]}let N=0,O=0
const D=[()=>N,n=>function(n){const t=l(r,n)
if(t)return Number(t)}(n[0])!==i(),n=>x(n[2])>=P(),n=>x(n[2])<=j()]
function q(n,t){(function(n){return D.every((t=>t(n)))})(t)&&$("td",n).eq(2).addClass("lvlHighlight")}function _(n,t){N=s("highlightPlayersNearMyLvl"),O=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:q,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(t))}function H(){O.draw()}function S(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||H()}function G(n,t){return parseInt($(n,t).val(),10)}function A(n,t){R(t)||f(n,t)}function E(n,t,e){const a=G("#fshMinLvl",n),s=G("#fshMaxLvl",n)
A("onlinePlayerMinLvl",a),A("onlinePlayerMaxLvl",s)
const i=o(x(e[2]),0)
return C(I,i,a,s)}let J=0,K=0,U=0,V=0
function W(n){K=n||{},function(n){$.fn.dataTable.ext.search.push(a(E,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${s("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${s("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${w(new Date(s("lastOnlineCheck")))}</div>`)}(J),_(J,function(n){return b(n).map(a(T,n))}(K))}function X(n,t,e){const a=$("td",$(e)),s=a.eq(1).text();(function(n,t){return K[n]&&K[n][3]>t})(s,n)||(K[s]=function(n,t,e){return[e.eq(0).html(),e.eq(1).html(),e.eq(2).text(),n,t]}(n,t,a))}function Y(e,a){V=function(n){const{page:t}=v(/(?<page>\d+)/,n.parent().text())
return parseInt(t,10)}(a)
const s=y(V,n).map((async n=>e(await n)))
return t(s)}function Z(n){$("#fshOutput",J).append(n)}function z(n){Z(` ${U+1}`)
const t=h(n),e=$("#pCC input.custominput",t).first()
!function(n,t){const e=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(a(X,e))}(t,e),U+=1,1===U&&Y(z,e),U===V&&(M("fsh_onlinePlayers",K),W(K))}const B=[["fshRefresh",async function(){$("#fshRefresh",J).hide(),U=0,K={}
const t=n(1)
f("lastOnlineCheck",g()),Z("Parsing online players..."),z(await t)}],["fshReset",()=>function(n){f("onlinePlayerMinLvl",u.onlinePlayerMinLvl),f("onlinePlayerMaxLvl",u.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(u.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(u.onlinePlayerMaxLvl),H()}(J)]]
async function F(){J.html(`<span><b>Online Players</b></span>${function(){const n=s("lastOnlineCheck")
return g()-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(g()-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`)
var n
W(await L("fsh_onlinePlayers")),p(J[0],(n=B,t=>e(k,n,t))),m(J[0],"keyup",S)}async function Q(n){c()||(J=n?$(n):$("#pCC"),await d(),F())}export{Q as default}
//# sourceMappingURL=injectOnlinePlayers-622b3ed3.js.map
