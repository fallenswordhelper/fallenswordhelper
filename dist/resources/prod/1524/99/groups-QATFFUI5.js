import{a as Q}from"./chunk-VH4MQ6UG.js";import{a as _}from"./chunk-PVUSCZKP.js";import{a as X}from"./chunk-YHZOWKXY.js";import{a as Y}from"./chunk-QPY3CME6.js";import{a as q}from"./chunk-YCWFPE5S.js";import{a as R}from"./chunk-QGK7MHGZ.js";import{b as W}from"./chunk-6JB6EOWQ.js";import{a as O}from"./chunk-S56GVATQ.js";import{a as F}from"./chunk-RYSA62OC.js";import"./chunk-R234NLNI.js";import"./chunk-OUNMTE5C.js";import{a as P}from"./chunk-MIFA5OAH.js";import{a as U}from"./chunk-3GDZ2KGR.js";import{a as z}from"./chunk-U2K55UWZ.js";import{a as H}from"./chunk-5LSY3HP2.js";import"./chunk-DUS6SBNO.js";import{b as x,c as G}from"./chunk-NYRW5D5Y.js";import"./chunk-B27L3RGE.js";import"./chunk-RQFQSBXN.js";import{a as j}from"./chunk-5HABVWHF.js";import"./chunk-GS6VXPUV.js";import"./chunk-ENJPFQDL.js";import{a as I}from"./chunk-XBV3M5BE.js";import"./chunk-3JIGWNI6.js";import"./chunk-WEOKG4DE.js";import{a as T}from"./chunk-X6X25TQC.js";import{a as i}from"./chunk-3U2KFVE3.js";import"./chunk-FLANWCWH.js";import{a as D}from"./chunk-A3YSMN3P.js";import{a as s}from"./chunk-WEH2BEPF.js";import"./chunk-S4LJSUOM.js";import{a as J}from"./chunk-KEDH65A7.js";import{a as v}from"./chunk-V7VD3TTD.js";import"./chunk-GMLTBP5U.js";import{a as c}from"./chunk-TBDAY7IJ.js";import"./chunk-RLMEWYFJ.js";import"./chunk-YAI73TCP.js";import"./chunk-V6KZDOYH.js";import"./chunk-SGW65DVU.js";import"./chunk-BNXETKRM.js";import"./chunk-ZYSUV7P2.js";import{a as h}from"./chunk-X6HXFDDM.js";import"./chunk-Q4ISSEWQ.js";import{a as N}from"./chunk-N3BAHO2U.js";import"./chunk-MCKCLPTM.js";import{a as p}from"./chunk-HDDSTVDW.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import"./chunk-5AMVPEUS.js";import"./chunk-A7D3PPVQ.js";import"./chunk-XKHKWWUO.js";import"./chunk-BKQ5B4GS.js";import"./chunk-DRO6BEBO.js";import{a as w}from"./chunk-U2RDL7AF.js";import"./chunk-YERAUQ3J.js";import"./chunk-OC2AAQPF.js";import{a as m}from"./chunk-KDMA4L6I.js";import{b as d}from"./chunk-5IFOIBKY.js";import{S as E,d as M,e as k,n as $,y as C}from"./chunk-LGYGKPKS.js";import"./chunk-3GXHEK6H.js";import"./chunk-XJTFL7TK.js";import"./chunk-SAUPNLY3.js";import{a as f}from"./chunk-5SYR2ZZN.js";import{a}from"./chunk-A4HY7BPZ.js";import"./chunk-XR4XHCV2.js";import"./chunk-QTNVBBKP.js";import"./chunk-VX5V3MQE.js";import"./chunk-U5QRCCLA.js";import{a as g}from"./chunk-DG6P646J.js";import"./chunk-K4LSLGQK.js";import{a as B}from"./chunk-MC4TDBQ5.js";import"./chunk-OXVY43H4.js";import"./chunk-HN4Q5DUC.js";import{a as u}from"./chunk-QDZWRTTK.js";import{a as S}from"./chunk-WWWWNWRL.js";function tt(t,r){let o=I(),e=F({className:"fshBl fshBls",textContent:t});return m(e,n=>{n.target.blur(),H(`${E}&players=${r}`,"fsQuickBuff",618,1e3,",scrollbars"),f("doBuffLinks",t)}),s(o,e),o}function rt(t,r,o){return s(t,tt(`Buff ${M[o]} 16`,r.join(","))),t}function b(t){let r=O(16,t),o=j();return r.reduce(rt,o)}var ot=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/;function et(t){let r=new Date().getFullYear();return k[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function nt([,,t,r,o,e]){return new Date(q([et(r),r,t,o,e]))}function it(t){let r=t.cells[3],o=S(ot,p(r));i(r,`<br><span class="fshBlue fshXSmall">Local: ${nt(o).toString().slice(0,21)}</span>`)}function st(t,r){let o=p(r.children[0]);return t?.[o]?`${J({last_login:t[o].last_login})}&nbsp;<a href="${C}${t[o].id}"><b>${o}</b></a> [${t[o].level}]`:`<b>${o}</b>`}function V(t,r){return t[r]?t[r].level:0}function ft(t,r,o){return V(t,o)-V(t,r)}function mt(t,r){let o=v(r.innerHTML);return o.length>1&&o.sort(g(ft,t)),o}function at(t){return t!=="[none]"&&t.indexOf("<font")===-1}function pt(t,r){let o=r.filter(at);o.length>0&&s(t,b(o)),i(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function ut(t,r,o){let e=o.map(g(_,t));c(`<span>${e.join(", ")}</span>`,r)}function ct(t,r){let o=r.cells[0];c(st(t,o),o);let e=r.cells[1],n=mt(t,e);pt(o,n),ut(t,e,n),it(r)}function L(t){let r=d("betaOptIn");r&&x("groups.doGroupPaint"),T("group-action-container").map(o=>P(o)).forEach(g(ct,t)),r&&G("groups.doGroupPaint")}function l(t,r){let o=U({className:"custombutton",type:"button",value:r});return i(t,"&nbsp;"),s(t,o),o}function lt(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}async function dt(t){let r=Q(t),o=await R(r);if(o?.r?.attributes){let e=W(o.r.attributes),n=t.parentNode.parentNode.previousElementSibling;i(n,lt(e))}}function ht(t){f("groups","fetchGroupData");let{target:r}=t;r.disabled=!0,a('#pCC a[href*="=viewstats&"]').forEach(dt)}function y(t){t.classList.add("fshRelative");let r=l(t,"Fetch Group Stats");r.style.position="absolute",m(r,ht)}function gt(t){return!t.includes("#000099")}function vt(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function bt(t,r){await N({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),vt(r)}function Lt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(v(p(r)).filter(gt).length<u.maxGroupSizeToJoin){let n=D({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(n,t);let K=B(/confirmJoin\((?<id>\d+)\)/,t.href);bt(K,n)}}function Z(){f("groups","joinAllGroupsUnderSize"),a('#pCC a[href*="confirmJoin"]').forEach(Lt)}function yt(t){let r=l(t,`Join All Groups < ${u.maxGroupSizeToJoin} Members`);m(r,Z)}function A(t){let r=t.parentNode;u.enableMaxGroupSizeToJoin&&(z(t),yt(r)),y(r),u.subcmd2===$&&Z()}function At(){let t=d("minGroupLevel");if(t){let r=h('#pCC table[width="650"]');X(h("br",r),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}function St(){let t=a("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}async function Bt(){if(w())return;let t=h('#pCC input[value="Join All Available Groups"]');if(!t)return;let r=Y(!1);At(),A(t),St(),L(await r)}export{Bt as default};
//# sourceMappingURL=groups-QATFFUI5.js.map