import{aZ as e,t as n,I as t,bD as a,a6 as s,a4 as l,Z as i,as as r,y as o,o as f,f as u,v as c}from"./calfSystem-cbf77dd7.js"
import{c as h}from"./currentGuildId-96726c8f.js"
import{i as d}from"./intValue-19726e4b.js"
import{a as p,g as v}from"./levelHighlight-40138177.js"
import{n as m}from"./numberIsNaN-c0e87dea.js"
import{l as g,p as y}from"./lvlTests-f0348094.js"
import{l as M}from"./loadDataTables-e315eea0.js"
import{o as L}from"./onlinePlayersPage-f0107e4b.js"
import{g as P,s as b}from"./idb-82a91df1.js"
import"./asInt-f1541708.js"
import"./valueText-068fe53f.js"
import"./all-3768003b.js"
function x(e,n){const t=$("<div/>").append(e[n][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),e[n][1],e[n][2],100*e[n][3]+e[n][4]+1]}let j,C
const I=[()=>j,e=>function(e){const n=e.match(a)
if(n)return Number(n[1])}(e[0])!==h(),e=>d(e[2])>=p(),e=>d(e[2])<=v()]
function R(e,n){(function(e){return I.every((n=>n(e)))})(n)&&$("td",e).eq(2).addClass("lvlHighlight")}function w(e,n){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",e).DataTable(function(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(n))}function O(){C.draw()}function k(e){"fshMinLvl"!==e.target.id&&"fshMaxLvl"!==e.target.id||O()}function q(e,n){return parseInt($(e,n).val(),10)}function N(e,n){m(n)||i(e,n)}function T(e,n,t){const a=q("#fshMinLvl",e),s=q("#fshMaxLvl",e)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(d(t[2]),0)
return g(y,i,a,s)}let D,_,z,G
function H(a){_=a||{},function(e){$.fn.dataTable.ext.search.push(n(T,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(D),w(D,function(t){return e(t).map(n(x,t))}(_))}function S(e,n,t){const a=$("td",$(t)),s=a.eq(1).text();(function(e,n){return _[e]&&_[e][3]>n})(s,e)||(_[s]=function(e,n,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),e,n]}(e,n,a))}function Z(e,n){G=function(e){return parseInt(e.parent().text().match(/(\d+)/g)[0],10)}(n)
for(let n=2;n<=G;n+=1)L(n).then(e)}function A(e){$("#fshOutput",D).append(e)}function V(e){A(` ${z+1}`)
const t=c(e),a=$("#pCC input.custominput",t).first()
!function(e,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(n(S,a))}(t,a),z+=1,1===z&&Z(V,a),z===G&&(b("fsh_onlinePlayers",_),H(_))}function W(e){"fshRefresh"===e.target.id&&($("#fshRefresh",D).hide(),z=0,_={},L(1).then(V),i("lastOnlineCheck",s),A("Parsing online players...")),"fshReset"===e.target.id&&function(e){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(r.onlinePlayerMaxLvl),O()}(D)}function B(){D.html(`<span><b>Online Players</b></span>${function(){const e=t("lastOnlineCheck")
return s-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-e)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),P("fsh_onlinePlayers").then(H),f(D[0],W),u(D[0],"keyup",k)}function E(e){o()||(D=e?$(e):$("#pCC"),M().then(B))}export default E
//# sourceMappingURL=injectOnlinePlayers-6f222a4e.js.map
