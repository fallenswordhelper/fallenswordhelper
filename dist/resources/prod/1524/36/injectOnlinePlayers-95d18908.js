import{aN as e,t as n,I as t,bv as a,a7 as s,a5 as l,_ as i,ag as r,y as o,o as f,f as u,v as c}from"./calfSystem-e7bde0c3.js"
import{c as h}from"./currentGuildId-24e90d79.js"
import{i as d}from"./intValue-ca51a3c0.js"
import{a as p,g as v}from"./levelHighlight-9ed9321d.js"
import{n as m}from"./numberIsNaN-891c59d9.js"
import{l as g,p as y}from"./lvlTests-ecebb1ad.js"
import{l as M}from"./loadDataTables-67d6b8f1.js"
import{o as L}from"./onlinePlayersPage-f2f67288.js"
import{g as b,s as P}from"./idb-47978eaa.js"
import"./valueText-550b31ac.js"
import"./all-778b38b7.js"
function x(e,n){const t=$("<div/>").append(e[n][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),e[n][1],e[n][2],100*e[n][3]+e[n][4]+1]}let j,C
const I=[()=>j,e=>function(e){const n=e.match(a)
if(n)return Number(n[1])}(e[0])!==h(),e=>d(e[2])>=p(),e=>d(e[2])<=v()]
function R(e,n){(function(e){return I.every((n=>n(e)))})(n)&&$("td",e).eq(2).addClass("lvlHighlight")}function w(e,n){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",e).DataTable(function(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(n))}function N(){C.draw()}function O(e){"fshMinLvl"!==e.target.id&&"fshMaxLvl"!==e.target.id||N()}function k(e,n){return parseInt($(e,n).val(),10)}function q(e,n){m(n)||i(e,n)}function T(e,n,t){const a=k("#fshMinLvl",e),s=k("#fshMaxLvl",e)
q("onlinePlayerMinLvl",a),q("onlinePlayerMaxLvl",s)
const i=l(d(t[2]),0)
return g(y,i,a,s)}let _,D,z,G
function H(a){D=a||{},function(e){$.fn.dataTable.ext.search.push(n(T,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(t){return e(t).map(n(x,t))}(D))}function S(e,n,t){const a=$("td",$(t)),s=a.eq(1).text();(function(e,n){return D[e]&&D[e][3]>n})(s,e)||(D[s]=function(e,n,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),e,n]}(e,n,a))}function A(e,n){G=function(e){return parseInt(e.parent().text().match(/(\d+)/g)[0],10)}(n)
for(let n=2;n<=G;n+=1)L(n).then(e)}function V(e){$("#fshOutput",_).append(e)}function W(e){V(` ${z+1}`)
const t=c(e),a=$("#pCC input.custominput",t).first()
!function(e,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(n(S,a))}(t,a),z+=1,1===z&&A(W,a),z===G&&(P("fsh_onlinePlayers",D),H(D))}function B(e){"fshRefresh"===e.target.id&&($("#fshRefresh",_).hide(),z=0,D={},L(1).then(W),i("lastOnlineCheck",s),V("Parsing online players...")),"fshReset"===e.target.id&&function(e){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(r.onlinePlayerMaxLvl),N()}(_)}function E(){_.html(`<span><b>Online Players</b></span>${function(){const e=t("lastOnlineCheck")
return s-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-e)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),b("fsh_onlinePlayers").then(H),f(_[0],B),u(_[0],"keyup",O)}function F(e){o()||(_=e?$(e):$("#pCC"),M().then(E))}export default F
//# sourceMappingURL=injectOnlinePlayers-95d18908.js.map
