import{a as q,b as _}from"./chunk-YZEDEZT4.js";import{a as G}from"./chunk-KO2C53F7.js";import"./chunk-JD3O6HJS.js";import"./chunk-LCCKAHBI.js";import"./chunk-NIHNAIB5.js";import"./chunk-OFS25YDJ.js";import{a as S,b as B}from"./chunk-WG32ZDPF.js";import{a as V}from"./chunk-25CLK75F.js";import{a as j}from"./chunk-PVHDKJRP.js";import{a as E}from"./chunk-ERGFRBX5.js";import{a as T}from"./chunk-33UZTKPH.js";import"./chunk-PHMVEGOF.js";import"./chunk-DYSMAWQL.js";import{a as H}from"./chunk-RSDSQCWY.js";import"./chunk-KF2BXDH2.js";import"./chunk-2FAPNSRX.js";import{a as d}from"./chunk-LPMVISKG.js";import{a as p}from"./chunk-NQFMO265.js";import{a as I}from"./chunk-3HCSSFLF.js";import"./chunk-H6ODLS4E.js";import"./chunk-EKBYY3JQ.js";import{a as O}from"./chunk-33GAZWWN.js";import"./chunk-7H5ET4BP.js";import{a as N}from"./chunk-WCTHIQU3.js";import"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import{a}from"./chunk-BQPBQ4WG.js";import"./chunk-N3ED3R2T.js";import{a as k,b as D}from"./chunk-6OIODDYF.js";import"./chunk-TKVEOBDL.js";import"./chunk-3V3LTFJF.js";import{a as C}from"./chunk-6TD3KAU5.js";import"./chunk-JDAAN4LA.js";import"./chunk-IQ37ZVMO.js";import{a as R}from"./chunk-DGZXYCCD.js";import{a as m}from"./chunk-LKEXSUYL.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import"./chunk-CKRPJ7HI.js";import{a as s}from"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import{a as x}from"./chunk-GVTRKM2F.js";import{a as u,b as i}from"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import{a as w}from"./chunk-OR37OWF3.js";import{h as M}from"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import"./chunk-MR322WHU.js";function Y(e,t){let r=$("<div/>").append(e[t][0]);return $("img",r).addClass("fshImgCntr"),[r.html(),e[t][1],e[t][2],e[t][3]*100+e[t][4]+1]}function v(e){return E(e).map(s(Y,e))}var A=0,F=0;function Z(e){let t=x(M,e);if(t)return Number(t)}var ee=[()=>A,e=>Z(e[0])!==H(),e=>p(e[2])>=q(),e=>p(e[2])<=_()];function te(e){return ee.every(t=>t(e))}function re(e,t){te(t)&&$("td",e).eq(2).addClass("lvlHighlight")}function ne(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:re,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}function Q(e,t){A=i("highlightPlayersNearMyLvl"),F=$("#fshInv",e).DataTable(ne(t))}function h(){F.draw()}function g(e){(e.target.id==="fshMinLvl"||e.target.id==="fshMaxLvl")&&h()}function y(){let e=i("lastOnlineCheck");return m()-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(m()-e)/1e3)}s ]</span>`}function U(e,t){return parseInt($(e,t).val(),10)}function W(e,t){j(t)||a(e,t)}function ie(e,t,r){let o=U("#fshMinLvl",e),f=U("#fshMaxLvl",e);W("onlinePlayerMinLvl",o),W("onlinePlayerMaxLvl",f);let X=O(p(r[2]),0);return B(S,X,o,f)}function L(e){$.fn.dataTable.ext.search.push(s(ie,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${i("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${i("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${G(new Date(i("lastOnlineCheck")))}</div>`)}function P(e){a("onlinePlayerMinLvl",u.onlinePlayerMinLvl),a("onlinePlayerMaxLvl",u.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(u.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(u.onlinePlayerMaxLvl),h()}var n=0,l=0,c=0,b=0;function z(e){l=e||{},L(n),Q(n,v(l))}function le(){c===b&&(D("fsh_onlinePlayers",l),z(l))}function ae(e,t){return l[e]&&l[e][3]>t}function oe(e,t,r){return[r.eq(0).html(),r.eq(1).html(),r.eq(2).text(),e,t]}function se(e,t,r){let o=$("td",$(r)),f=o.eq(1).text();ae(f,e)||(l[f]=oe(e,t,o))}function fe(e,t){let r=t.attr("value");$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(s(se,r))}function ue(e){let{page:t}=I(/(?<page>\d+)/,e.parent().text());return parseInt(t,10)}function me(e,t){b=ue(t);for(let r=2;r<=b;r+=1)d(r).then(e)}function J(e){$("#fshOutput",n).append(e)}function K(e){J(` ${c+1}`);let t=N(e),r=$("#pCC input.custominput",t).first();fe(t,r),c+=1,c===1&&me(K,r),le()}function pe(){$("#fshRefresh",n).hide(),c=0,l={},d(1).then(K),a("lastOnlineCheck",m()),J("Parsing online players...")}var ce=[["fshRefresh",pe],["fshReset",()=>P(n)]];function he(){n.html(`<span><b>Online Players</b></span>${y()}<div id="fshOutput"></div>`),k("fsh_onlinePlayers").then(z),R(n[0],T(ce)),w(n[0],"keyup",g)}function de(e){C()||(n=e?$(e):$("#pCC"),V().then(he))}export{de as default};
//# sourceMappingURL=injectOnlinePlayers-7XX2YQYI.js.map
