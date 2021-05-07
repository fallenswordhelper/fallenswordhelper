import{aU as n,t as e,I as t,bw as a,a7 as s,a5 as l,_ as i,aq as r,y as o,o as f,f as u,v as c}from"./calfSystem-9942149b.js"
import{c as h}from"./currentGuildId-71878d37.js"
import{i as d}from"./intValue-fefb28df.js"
import{a as p,g as v}from"./levelHighlight-3f10d8ae.js"
import{n as m}from"./numberIsNaN-885a5556.js"
import{l as g,p as y}from"./lvlTests-e8960acc.js"
import{l as M}from"./loadDataTables-887fed3f.js"
import{o as L}from"./onlinePlayersPage-9a11e858.js"
import{g as P,s as x}from"./idb-6116f2a7.js"
import"./asInt-cfaa0140.js"
import"./valueText-5ef907af.js"
import"./all-0d44a747.js"
function b(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let j,C
const I=[()=>j,n=>function(n){const e=n.match(a)
if(e)return Number(e[1])}(n[0])!==h(),n=>d(n[2])>=p(),n=>d(n[2])<=v()]
function R(n,e){(function(n){return I.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function w(n,e){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function q(){C.draw()}function O(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||q()}function k(n,e){return parseInt($(n,e).val(),10)}function N(n,e){m(e)||i(n,e)}function T(n,e,t){const a=k("#fshMinLvl",n),s=k("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(d(t[2]),0)
return g(y,i,a,s)}let _,D,z,G
function H(a){D=a||{},function(n){$.fn.dataTable.ext.search.push(e(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(t){return n(t).map(e(b,t))}(D))}function S(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return D[n]&&D[n][3]>e})(s,n)||(D[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function A(n,e){G=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=G;e+=1)L(e).then(n)}function U(n){$("#fshOutput",_).append(n)}function V(n){U(` ${z+1}`)
const t=c(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(S,a))}(t,a),z+=1,1===z&&A(V,a),z===G&&(x("fsh_onlinePlayers",D),H(D))}function W(n){"fshRefresh"===n.target.id&&($("#fshRefresh",_).hide(),z=0,D={},L(1).then(V),i("lastOnlineCheck",s),U("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),q()}(_)}function B(){_.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),P("fsh_onlinePlayers").then(H),f(_[0],W),u(_[0],"keyup",O)}function E(n){o()||(_=n?$(n):$("#pCC"),M().then(B))}export default E
//# sourceMappingURL=injectOnlinePlayers-301d95b0.js.map
