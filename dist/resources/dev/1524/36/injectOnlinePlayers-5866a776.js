import{aS as n,t as e,I as t,bz as a,a8 as s,a6 as l,a0 as i,ah as r,y as o,o as f,f as u,v as c}from"./calfSystem-eeb1d862.js"
import{c as h}from"./currentGuildId-5370ff7a.js"
import{i as d}from"./intValue-ca51a3c0.js"
import{a as p,g as v}from"./levelHighlight-06de42a0.js"
import{n as m}from"./numberIsNaN-891c59d9.js"
import{l as g,p as y}from"./lvlTests-2d5c5936.js"
import{l as M}from"./loadDataTables-0a81aa0c.js"
import{o as L}from"./onlinePlayersPage-9d165ba8.js"
import{g as P,s as b}from"./idb-874d144e.js"
import"./valueText-7c11f0d0.js"
import"./all-778b38b7.js"
function x(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let j,C
const I=[()=>j,n=>function(n){const e=n.match(a)
if(e)return Number(e[1])}(n[0])!==h(),n=>d(n[2])>=p(),n=>d(n[2])<=v()]
function R(n,e){(function(n){return I.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function w(n,e){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function O(){C.draw()}function k(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||O()}function q(n,e){return parseInt($(n,e).val(),10)}function N(n,e){m(e)||i(n,e)}function T(n,e,t){const a=q("#fshMinLvl",n),s=q("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(d(t[2]),0)
return g(y,i,a,s)}let _,z,D,S
function G(a){z=a||{},function(n){$.fn.dataTable.ext.search.push(e(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(t){return n(t).map(e(x,t))}(z))}function H(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return z[n]&&z[n][3]>e})(s,n)||(z[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function A(n,e){S=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=S;e+=1)L(e).then(n)}function V(n){$("#fshOutput",_).append(n)}function W(n){V(` ${D+1}`)
const t=c(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(H,a))}(t,a),D+=1,1===D&&A(W,a),D===S&&(b("fsh_onlinePlayers",z),G(z))}function B(n){"fshRefresh"===n.target.id&&($("#fshRefresh",_).hide(),D=0,z={},L(1).then(W),i("lastOnlineCheck",s),V("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),O()}(_)}function E(){_.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),P("fsh_onlinePlayers").then(G),f(_[0],B),u(_[0],"keyup",k)}function F(n){o()||(_=n?$(n):$("#pCC"),M().then(E))}export default F
//# sourceMappingURL=injectOnlinePlayers-5866a776.js.map
