import{a as _}from"./chunk-HKE3Q6IV.js";import"./chunk-ALPBC25Y.js";import{a as Y}from"./chunk-GNE3CKO7.js";import{a as F}from"./chunk-EYNT3Q7T.js";import{a as W}from"./chunk-UIGYU76I.js";import{b as X}from"./chunk-PYMSY7J3.js";import{a as R}from"./chunk-Q3HCQCDP.js";import{a as O}from"./chunk-T6ER74W7.js";import"./chunk-3R5465Y4.js";import"./chunk-RJI2O7CN.js";import"./chunk-BGCSAA2T.js";import{a as q}from"./chunk-MQSDDZVA.js";import{a as z}from"./chunk-CGPO67OY.js";import{a as w}from"./chunk-JIVCXSAO.js";import{a as H}from"./chunk-PSNTHUZF.js";import{a as j}from"./chunk-72M7TC3E.js";import{a as I}from"./chunk-53V6UTH3.js";import{a as P}from"./chunk-VECRFCQP.js";import{b as x,c as G}from"./chunk-3XTCX3Z6.js";import"./chunk-M34ZVTSL.js";import"./chunk-SWN5GBXU.js";import"./chunk-XOQKCE25.js";import{a as T}from"./chunk-LVAJIHIF.js";import{a as i}from"./chunk-WMET5VJL.js";import"./chunk-EJAPIT2N.js";import"./chunk-ZCOVPDKX.js";import"./chunk-WKDTOFNZ.js";import{a as m}from"./chunk-X5DGSHWJ.js";import"./chunk-ARZE2BDD.js";import"./chunk-MKW45GOR.js";import"./chunk-OELRUWUL.js";import{a as D}from"./chunk-IEZDQOE5.js";import{a as s}from"./chunk-KHQZO2PT.js";import"./chunk-WMUUSPIG.js";import{a as U}from"./chunk-3KY6VRXL.js";import{a as v}from"./chunk-44VKPKW6.js";import"./chunk-DHIC45XN.js";import{a}from"./chunk-VIE5ZNPH.js";import"./chunk-OKCEI7IO.js";import{a as l}from"./chunk-ZIYY5ALA.js";import"./chunk-CF6OUIZ5.js";import"./chunk-YLLFMQF3.js";import"./chunk-6MPENS2G.js";import"./chunk-JBZ7AXNE.js";import"./chunk-V572RQRH.js";import"./chunk-MVADRWN3.js";import"./chunk-B42TQDRT.js";import{a as g}from"./chunk-LZHFM6TG.js";import{a as u}from"./chunk-RVROEHXL.js";import"./chunk-EPL4X55B.js";import"./chunk-C6UQ3IWD.js";import{a as N}from"./chunk-RY6SJUY2.js";import"./chunk-F5F7ZRBL.js";import"./chunk-4LPHXEVA.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import"./chunk-6TE7Y3DR.js";import{a as f}from"./chunk-SOFFOM3C.js";import"./chunk-HEE2ZG5Y.js";import"./chunk-C56KTMKY.js";import{a as J}from"./chunk-J47S26DS.js";import"./chunk-2YJNQKIS.js";import"./chunk-2DIHMK5L.js";import"./chunk-PRUVPLE4.js";import"./chunk-YVFHCM2A.js";import{a as B}from"./chunk-3WYYB24O.js";import{a as p}from"./chunk-Q4WEZP4Z.js";import{b as h}from"./chunk-SYO7WFPA.js";import"./chunk-FNQX6KHV.js";import"./chunk-SARQWG4K.js";import{S as E,d as M,e as k,n as $,y as C}from"./chunk-7Q74Q23I.js";import{a as c}from"./chunk-B3OIOQDS.js";import{a as S}from"./chunk-7X7SMYZT.js";function K(t,r){let o=j(),e=O({className:"fshBl fshBls",textContent:t});return p(e,n=>{n.target.blur(),P(`${E}&players=${r}`,"fsQuickBuff",618,1e3,",scrollbars"),m("doBuffLinks",t)}),s(o,e),o}function tt(t,r,o){return s(t,K(`Buff ${M[o]} 16`,r.join(","))),t}function b(t){let r=R(16,t),o=z();return r.reduce(tt,o)}var rt=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/;function ot(t){let r=new Date().getFullYear();return k[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function et([,,t,r,o,e]){return new Date(F([ot(r),r,t,o,e]))}function nt(t){let r=t.cells[3],o=S(rt,u(r));i(r,`<br><span class="fshBlue fshXSmall">Local: ${et(o).toString().slice(0,21)}</span>`)}function it(t,r){let o=u(r.children[0]);return t[o]?`${U({last_login:t[o].last_login})}&nbsp;<a href="${C}${t[o].id}"><b>${o}</b></a> [${t[o].level}]`:`<b>${o}</b>`}function Q(t,r){return t[r]?t[r].level:0}function st(t,r,o){return Q(t,o)-Q(t,r)}function ft(t,r){let o=v(r.innerHTML);return o.length>1&&o.sort(f(st,t)),o}function mt(t){return t!=="[none]"&&t.indexOf("<font")===-1}function pt(t,r){let o=r.filter(mt);o.length>0&&s(t,b(o)),i(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function at(t,r,o){let e=o.map(f(_,t));l(`<span>${e.join(", ")}</span>`,r)}function ut(t,r){let o=r.cells[0];l(it(t,o),o);let e=r.cells[1],n=ft(t,e);pt(o,n),at(t,e,n),nt(r)}function L(t){let r=h("betaOptIn");r&&x("groups.doGroupPaint"),T("group-action-container").map(o=>q(o)).forEach(f(ut,t)),r&&G("groups.doGroupPaint")}function d(t,r){let o=w({className:"custombutton",type:"button",value:r});return i(t,"&nbsp;"),s(t,o),o}function ct(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}async function lt(t){let r=t.href.split("=").at(-1),o=await W(r),e=X(o.r.attributes),n=t.parentNode.parentNode.previousElementSibling;i(n,ct(e))}function dt(t){m("groups","fetchGroupData");let{target:r}=t;r.disabled=!0,a('#pCC a[href*="=viewstats&"]').forEach(lt)}function A(t){t.classList.add("fshRelative");let r=d(t,"Fetch Group Stats");r.style.position="absolute",p(r,dt)}function ht(t){return!t.includes("#000099")}function gt(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function vt(t,r){N({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(f(gt,r))}function bt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(v(u(r)).filter(ht).length<c.maxGroupSizeToJoin){let n=D({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(n,t);let Z=B(/confirmJoin\((?<id>\d+)\)/,t.href);vt(Z,n)}}function V(){m("groups","joinAllGroupsUnderSize"),a('#pCC a[href*="confirmJoin"]').forEach(bt)}function Lt(t){let r=d(t,`Join All Groups < ${c.maxGroupSizeToJoin} Members`);p(r,V)}function y(t){let r=t.parentNode;c.enableMaxGroupSizeToJoin&&(I(t),Lt(r)),A(r),c.subcmd2===$&&V()}function At(){let t=h("minGroupLevel");if(t){let r=g('#pCC table[width="650"]');H(g("br",r),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}function yt(){let t=a("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}function St(){if(J())return;let t=g('#pCC input[value="Join All Available Groups"]');!t||(Y(!1).then(L),At(),y(t),yt())}export{St as default};
//# sourceMappingURL=groups-ACIOJHYS.js.map
