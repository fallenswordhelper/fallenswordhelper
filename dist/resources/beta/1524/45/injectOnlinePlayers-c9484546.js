import{aZ as n,t as e,I as t,bD as a,a6 as s,a4 as l,Z as i,as as r,y as o,o as f,f as u,v as c}from"./calfSystem-ae2e69af.js"
import{c as d}from"./currentGuildId-85358166.js"
import{i as h}from"./intValue-a6f9b475.js"
import{a as p,g as v}from"./levelHighlight-376a55e6.js"
import{n as m}from"./numberIsNaN-c7db67d0.js"
import{l as g,p as y}from"./lvlTests-1bdf269d.js"
import{l as M}from"./loadDataTables-623d90a5.js"
import{o as L}from"./onlinePlayersPage-55876fcb.js"
import{g as b,s as P}from"./idb-225659e6.js"
import"./asInt-0415d444.js"
import"./valueText-fa9d45d4.js"
import"./all-47be5400.js"
function x(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let j,C
const I=[()=>j,n=>function(n){const e=n.match(a)
if(e)return Number(e[1])}(n[0])!==d(),n=>h(n[2])>=p(),n=>h(n[2])<=v()]
function R(n,e){(function(n){return I.every((e=>e(n)))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function w(n,e){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function O(){C.draw()}function k(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||O()}function q(n,e){return parseInt($(n,e).val(),10)}function N(n,e){m(e)||i(n,e)}function T(n,e,t){const a=q("#fshMinLvl",n),s=q("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(h(t[2]),0)
return g(y,i,a,s)}let D,_,z,G
function H(a){_=a||{},function(n){$.fn.dataTable.ext.search.push(e(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(D),w(D,function(t){return n(t).map(e(x,t))}(_))}function S(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return _[n]&&_[n][3]>e})(s,n)||(_[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function Z(n,e){G=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=G;e+=1)L(e).then(n)}function A(n){$("#fshOutput",D).append(n)}function V(n){A(` ${z+1}`)
const t=c(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(S,a))}(t,a),z+=1,1===z&&Z(V,a),z===G&&(P("fsh_onlinePlayers",_),H(_))}function W(n){"fshRefresh"===n.target.id&&($("#fshRefresh",D).hide(),z=0,_={},L(1).then(V),i("lastOnlineCheck",s),A("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),O()}(D)}function B(){D.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),b("fsh_onlinePlayers").then(H),f(D[0],W),u(D[0],"keyup",k)}function E(n){o()||(D=n?$(n):$("#pCC"),M().then(B))}export default E
//# sourceMappingURL=injectOnlinePlayers-c9484546.js.map
