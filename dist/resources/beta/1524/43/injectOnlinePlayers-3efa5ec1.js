import{aW as n,t as e,I as t,bz as a,a7 as s,a5 as l,_ as i,aq as r,y as o,o as f,f as u,v as c}from"./calfSystem-1d588248.js"
import{c as h}from"./currentGuildId-9fdd6aa9.js"
import{i as d}from"./intValue-fefb28df.js"
import{a as p,g as v}from"./levelHighlight-fa5434bb.js"
import{n as m}from"./numberIsNaN-885a5556.js"
import{l as g,p as y}from"./lvlTests-44fb2b54.js"
import{l as M}from"./loadDataTables-1972bbb5.js"
import{o as b}from"./onlinePlayersPage-4403ebe6.js"
import{g as L,s as P}from"./idb-dfc3696a.js"
import"./asInt-86489e68.js"
import"./valueText-f03f9e27.js"
import"./all-0d44a747.js"
function x(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let j,C
const I=[()=>j,n=>function(n){const e=n.match(a)
if(e)return Number(e[1])}(n[0])!==h(),n=>d(n[2])>=p(),n=>d(n[2])<=v()]
function R(n,e){(function(n){return I.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function q(n,e){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function w(){C.draw()}function O(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||w()}function k(n,e){return parseInt($(n,e).val(),10)}function N(n,e){m(e)||i(n,e)}function T(n,e,t){const a=k("#fshMinLvl",n),s=k("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(d(t[2]),0)
return g(y,i,a,s)}let _,z,D,G
function H(a){z=a||{},function(n){$.fn.dataTable.ext.search.push(e(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),q(_,function(t){return n(t).map(e(x,t))}(z))}function S(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return z[n]&&z[n][3]>e})(s,n)||(z[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function W(n,e){G=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=G;e+=1)b(e).then(n)}function A(n){$("#fshOutput",_).append(n)}function V(n){A(` ${D+1}`)
const t=c(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(S,a))}(t,a),D+=1,1===D&&W(V,a),D===G&&(P("fsh_onlinePlayers",z),H(z))}function B(n){"fshRefresh"===n.target.id&&($("#fshRefresh",_).hide(),D=0,z={},b(1).then(V),i("lastOnlineCheck",s),A("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),w()}(_)}function E(){_.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),L("fsh_onlinePlayers").then(H),f(_[0],B),u(_[0],"keyup",O)}function F(n){o()||(_=n?$(n):$("#pCC"),M().then(E))}export default F
//# sourceMappingURL=injectOnlinePlayers-3efa5ec1.js.map
