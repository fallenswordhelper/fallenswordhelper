import{a as B}from"./chunk-E6HDIDTI.js";import{a as G,b as S}from"./chunk-R5RZELWE.js";import{a as j}from"./chunk-VGFLH2TQ.js";import{a as A,b as F}from"./chunk-K5FOITKN.js";import{a as _}from"./chunk-J647VSQJ.js";import"./chunk-EZPDMVNO.js";import"./chunk-AFNNYWGE.js";import{a as q}from"./chunk-PUT2CLQQ.js";import{a as H}from"./chunk-SQCHG7QA.js";import"./chunk-P3AGAHUP.js";import"./chunk-3LGJ7KIX.js";import{a as N}from"./chunk-SXPYV4X4.js";import"./chunk-QZLQPVCD.js";import{a as I}from"./chunk-AGN2GYZS.js";import"./chunk-IQYYJ7OE.js";import{a as T}from"./chunk-7TJHGKXN.js";import"./chunk-RI33BKA7.js";import{a as h}from"./chunk-XF2XB2OF.js";import{a as u}from"./chunk-HEAZTX7Q.js";import{a as V}from"./chunk-OJG7MNTB.js";import{c as p}from"./chunk-M4CFJGZO.js";import{a as O}from"./chunk-FC2T2RFK.js";import"./chunk-F3LQDOUE.js";import{a as E}from"./chunk-ZRLD7TYA.js";import"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import"./chunk-UPYTFADC.js";import"./chunk-UERPKMG4.js";import"./chunk-FUB7QZZI.js";import"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import"./chunk-7PPLM4HV.js";import{a as l}from"./chunk-SLJOWJGX.js";import"./chunk-QLD5CDI7.js";import"./chunk-ULD7YHXO.js";import{a as s}from"./chunk-ZKTRQIGV.js";import{a as k,b as D}from"./chunk-F53JTC3Q.js";import"./chunk-I2K74DRD.js";import"./chunk-YI3QHXMF.js";import"./chunk-NR3OO2TM.js";import"./chunk-RGYUH6OH.js";import{a as C}from"./chunk-DPMNQ3O4.js";import"./chunk-J6FMYNIK.js";import"./chunk-YCWZIL7K.js";import{a as x}from"./chunk-CPJOSTWF.js";import{a as R}from"./chunk-A3WPUSVT.js";import{b as m,c as i}from"./chunk-O3NTOCCL.js";import{h as M}from"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import{a as w}from"./chunk-IYSXGPFG.js";import"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";function ee(e,t){let r=$("<div/>").append(e[t][0]);return $("img",r).addClass("fshImgCntr"),[r.html(),e[t][1],e[t][2],e[t][3]*100+e[t][4]+1]}function v(e){return N(e).map(s(ee,e))}var Q=0,U=0;function te(e){let t=x(M,e);if(t)return Number(t)}var re=[()=>Q,e=>te(e[0])!==T(),e=>u(e[2])>=G(),e=>u(e[2])<=S()];function ne(e){return re.every(t=>t(e))}function ae(e,t){ne(t)&&$("td",e).eq(2).addClass("lvlHighlight")}function ie(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:ae,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}function W(e,t){Q=i("highlightPlayersNearMyLvl"),U=$("#fshInv",e).DataTable(ie(t))}function d(){U.draw()}function g(e){(e.target.id==="fshMinLvl"||e.target.id==="fshMaxLvl")&&d()}function y(){let e=i("lastOnlineCheck");return p()-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(p()-e)/1e3)}s ]</span>`}function z(e,t){return parseInt($(e,t).val(),10)}function J(e,t){I(t)||l(e,t)}function oe(e,t,r){let a=z("#fshMinLvl",e),f=z("#fshMaxLvl",e);J("onlinePlayerMinLvl",a),J("onlinePlayerMaxLvl",f);let Z=O(u(r[2]),0);return F(A,Z,a,f)}function P(e){$.fn.dataTable.ext.search.push(s(oe,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${i("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${i("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${B(new Date(i("lastOnlineCheck")))}</div>`)}function L(e){l("onlinePlayerMinLvl",m.onlinePlayerMinLvl),l("onlinePlayerMaxLvl",m.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(m.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(m.onlinePlayerMaxLvl),d()}var n=0,o=0,c=0,b=0;function K(e){o=e||{},P(n),W(n,v(o))}function le(){c===b&&(D("fsh_onlinePlayers",o),K(o))}function se(e,t){return o[e]&&o[e][3]>t}function fe(e,t,r){return[r.eq(0).html(),r.eq(1).html(),r.eq(2).text(),e,t]}function me(e,t,r){let a=$("td",$(r)),f=a.eq(1).text();se(f,e)||(o[f]=fe(e,t,a))}function pe(e,t){let r=t.attr("value");$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(s(me,r))}function ue(e){let{page:t}=V(/(?<page>\d+)/,e.parent().text());return parseInt(t,10)}function ce(e,t){b=ue(t);let r=j(b,h).map(async a=>e(await a));return H(r)}function X(e){$("#fshOutput",n).append(e)}function Y(e){X(` ${c+1}`);let t=E(e),r=$("#pCC input.custominput",t).first();pe(t,r),c+=1,c===1&&ce(Y,r),le()}async function de(){$("#fshRefresh",n).hide(),c=0,o={};let e=h(1);l("lastOnlineCheck",p()),X("Parsing online players..."),Y(await e)}var he=[["fshRefresh",de],["fshReset",()=>L(n)]];async function ve(){n.html(`<span><b>Online Players</b></span>${y()}<div id="fshOutput"></div>`);let e=await k("fsh_onlinePlayers");K(e),R(n[0],q(he)),w(n[0],"keyup",g)}async function ge(e){C()||(n=e?$(e):$("#pCC"),await _(),ve())}export{ge as default};
//# sourceMappingURL=injectOnlinePlayers-DF7KPYI7.js.map
