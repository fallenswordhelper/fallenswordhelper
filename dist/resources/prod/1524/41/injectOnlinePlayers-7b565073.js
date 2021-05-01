import{aU as e,t as n,I as t,bw as a,a7 as s,a5 as l,_ as i,aq as r,y as o,o as f,f as u,v as c}from"./calfSystem-030d7057.js"
import{c as h}from"./currentGuildId-2c89c2be.js"
import{i as d}from"./intValue-af3aed3f.js"
import{a as p,g as v}from"./levelHighlight-e62ed21d.js"
import{n as m}from"./numberIsNaN-9d4c441b.js"
import{l as g,p as y}from"./lvlTests-cbc18806.js"
import{l as M}from"./loadDataTables-3af0948b.js"
import{o as L}from"./onlinePlayersPage-ce5b0f17.js"
import{g as b,s as P}from"./idb-ab72cbe2.js"
import"./valueText-f3659878.js"
import"./all-73a73e22.js"
function x(e,n){const t=$("<div/>").append(e[n][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),e[n][1],e[n][2],100*e[n][3]+e[n][4]+1]}let j,C
const I=[()=>j,e=>function(e){const n=e.match(a)
if(n)return Number(n[1])}(e[0])!==h(),e=>d(e[2])>=p(),e=>d(e[2])<=v()]
function R(e,n){(function(e){return I.every((n=>n(e)))})(n)&&$("td",e).eq(2).addClass("lvlHighlight")}function w(e,n){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",e).DataTable(function(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:R,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(n))}function q(){C.draw()}function O(e){"fshMinLvl"!==e.target.id&&"fshMaxLvl"!==e.target.id||q()}function k(e,n){return parseInt($(e,n).val(),10)}function N(e,n){m(n)||i(e,n)}function T(e,n,t){const a=k("#fshMinLvl",e),s=k("#fshMaxLvl",e)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",s)
const i=l(d(t[2]),0)
return g(y,i,a,s)}let _,D,z,G
function H(a){D=a||{},function(e){$.fn.dataTable.ext.search.push(n(T,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),w(_,function(t){return e(t).map(n(x,t))}(D))}function S(e,n,t){const a=$("td",$(t)),s=a.eq(1).text();(function(e,n){return D[e]&&D[e][3]>n})(s,e)||(D[s]=function(e,n,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),e,n]}(e,n,a))}function A(e,n){G=function(e){return parseInt(e.parent().text().match(/(\d+)/g)[0],10)}(n)
for(let n=2;n<=G;n+=1)L(n).then(e)}function U(e){$("#fshOutput",_).append(e)}function V(e){U(` ${z+1}`)
const t=c(e),a=$("#pCC input.custominput",t).first()
!function(e,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(n(S,a))}(t,a),z+=1,1===z&&A(V,a),z===G&&(P("fsh_onlinePlayers",D),H(D))}function W(e){"fshRefresh"===e.target.id&&($("#fshRefresh",_).hide(),z=0,D={},L(1).then(V),i("lastOnlineCheck",s),U("Parsing online players...")),"fshReset"===e.target.id&&function(e){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(r.onlinePlayerMaxLvl),q()}(_)}function B(){_.html(`<span><b>Online Players</b></span>${function(){const e=t("lastOnlineCheck")
return s-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-e)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),b("fsh_onlinePlayers").then(H),f(_[0],W),u(_[0],"keyup",O)}function E(e){o()||(_=e?$(e):$("#pCC"),M().then(B))}export default E
//# sourceMappingURL=injectOnlinePlayers-7b565073.js.map