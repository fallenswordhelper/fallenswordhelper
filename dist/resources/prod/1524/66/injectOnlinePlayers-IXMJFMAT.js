import{a as D,b as E}from"./chunk-GV3BMAUO.js";import"./chunk-QU6YTJ5V.js";import"./chunk-3XRSQTXY.js";import{a as H,b as _}from"./chunk-NX52TLTY.js";import{a as j}from"./chunk-KN6X5ENY.js";import{a as q}from"./chunk-R5QTS4JB.js";import{a as V}from"./chunk-4X4NY56W.js";import"./chunk-Q3PN54RS.js";import"./chunk-CRHAEB4O.js";import{a as d}from"./chunk-C7OAAUHQ.js";import{a as p}from"./chunk-XCNY7XO4.js";import"./chunk-LZ2L2TIX.js";import"./chunk-EUWXZKWZ.js";import{a as I}from"./chunk-DO7SCVXY.js";import"./chunk-HNI63WVA.js";import{a as m}from"./chunk-LL4JRT35.js";import"./chunk-KE767BLN.js";import"./chunk-TUVTWIHM.js";import"./chunk-4ATHPVF4.js";import"./chunk-RTMHI3L7.js";import{a}from"./chunk-TYMQPSI2.js";import"./chunk-ONCZ3D52.js";import"./chunk-ER7X2LNC.js";import{a as R}from"./chunk-JZHGPOOI.js";import{a as T}from"./chunk-QVWAWWED.js";import{a as w}from"./chunk-4QNYZHAB.js";import"./chunk-PYHGZC4L.js";import"./chunk-D76XH5RX.js";import{a as s}from"./chunk-MA3AC62H.js";import{a as N,b as k}from"./chunk-6TMBLRRF.js";import"./chunk-IWF73C7V.js";import"./chunk-YJHKALOE.js";import"./chunk-ZMMQFEZR.js";import"./chunk-DTSXLBNB.js";import"./chunk-NCV3HP3S.js";import{a as O}from"./chunk-4V4U3XDY.js";import{a as C}from"./chunk-YG74QOJP.js";import{a as u,b as i}from"./chunk-STY5NEH4.js";import"./chunk-M7Q5FD7X.js";import{a as M}from"./chunk-K2U7JEMX.js";import"./chunk-VCDLAVQZ.js";import"./chunk-PUAVFQTB.js";import{j as x}from"./chunk-OHKPSLFK.js";import"./chunk-EJREXK3Y.js";function J(e,t){let r=$("<div/>").append(e[t][0]);return $("img",r).addClass("fshImgCntr"),[r.html(),e[t][1],e[t][2],e[t][3]*100+e[t][4]+1]}function v(e){return T(e).map(s(J,e))}var B,S;function K(e){let t=e.match(x);if(t)return Number(t[1])}var X=[()=>B,e=>K(e[0])!==V(),e=>p(e[2])>=D(),e=>p(e[2])<=E()];function Y(e){return X.every(t=>t(e))}function Z(e,t){Y(t)&&$("td",e).eq(2).addClass("lvlHighlight")}function ee(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:Z,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}function A(e,t){B=i("highlightPlayersNearMyLvl"),S=$("#fshInv",e).DataTable(ee(t))}function h(){S.draw()}function g(e){(e.target.id==="fshMinLvl"||e.target.id==="fshMaxLvl")&&h()}function y(){let e=i("lastOnlineCheck");return m-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(m-e)/1e3)}s ]</span>`}function G(e,t){return parseInt($(e,t).val(),10)}function Q(e,t){q(t)||a(e,t)}function te(e,t,r){let o=G("#fshMinLvl",e),f=G("#fshMaxLvl",e);Q("onlinePlayerMinLvl",o),Q("onlinePlayerMaxLvl",f);let F=w(p(r[2]),0);return _(H,F,o,f)}function P(e){$.fn.dataTable.ext.search.push(s(te,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${i("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" /> Max lvl:<input value="${i("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}function L(e){a("onlinePlayerMinLvl",u.onlinePlayerMinLvl),a("onlinePlayerMaxLvl",u.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(u.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(u.onlinePlayerMaxLvl),h()}var n,l,c,b;function U(e){l=e||{},P(n),A(n,v(l))}function re(){c===b&&(k("fsh_onlinePlayers",l),U(l))}function ne(e,t){return l[e]&&l[e][3]>t}function le(e,t,r){return[r.eq(0).html(),r.eq(1).html(),r.eq(2).text(),e,t]}function ie(e,t,r){let o=$("td",$(r)),f=o.eq(1).text();ne(f,e)||(l[f]=le(e,t,o))}function ae(e,t){let r=t.attr("value");$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(s(ie,r))}function oe(e){return parseInt(e.parent().text().match(/(\d+)/g)[0],10)}function se(e,t){b=oe(t);for(let r=2;r<=b;r+=1)d(r).then(e)}function W(e){$("#fshOutput",n).append(e)}function z(e){W(` ${c+1}`);let t=I(e),r=$("#pCC input.custominput",t).first();ae(t,r),c+=1,c===1&&se(z,r),re()}function fe(){$("#fshRefresh",n).hide(),c=0,l={},d(1).then(z),a("lastOnlineCheck",m),W("Parsing online players...")}function ue(e){e.target.id==="fshRefresh"&&fe(),e.target.id==="fshReset"&&L(n)}function me(){n.html(`<span><b>Online Players</b></span>${y()}<div id="fshOutput"></div>`),N("fsh_onlinePlayers").then(U),C(n[0],ue),M(n[0],"keyup",g)}function pe(e){R()||(e?n=$(e):n=$("#pCC"),j().then(me),O("ui-dialog-titlebar-close").forEach(t=>t.blur()))}export{pe as default};
//# sourceMappingURL=injectOnlinePlayers-IXMJFMAT.js.map