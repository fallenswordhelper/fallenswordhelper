import{a as Q}from"./chunk-3BIKLBUY.js";import{a as _}from"./chunk-44HZ2ESJ.js";import{a as Y}from"./chunk-4SRNLPHK.js";import{a as R}from"./chunk-MUUATICT.js";import{a as F}from"./chunk-EUPTAZ7I.js";import{b as W}from"./chunk-N5WMQE25.js";import{a as O}from"./chunk-HMTHQTYW.js";import{a as X}from"./chunk-SPXVNSR4.js";import"./chunk-DL25MPSU.js";import{a as q}from"./chunk-YHMEPQN6.js";import{a as H}from"./chunk-GPKPGVKY.js";import{a as P}from"./chunk-46O67TGQ.js";import"./chunk-ZQHXN6JO.js";import{a as U}from"./chunk-JQAELPMM.js";import{a as z}from"./chunk-45EWONWO.js";import"./chunk-WGVGLZHS.js";import{b as x,c as G}from"./chunk-ND53BOD7.js";import"./chunk-7C6CQ5I2.js";import{a as j}from"./chunk-GYV54B7W.js";import{a as i}from"./chunk-7WQ5UNSS.js";import"./chunk-4IQVGLAY.js";import"./chunk-5HH7GGGJ.js";import"./chunk-IAPLFRFL.js";import"./chunk-DQJLU6BH.js";import"./chunk-7YTTTE44.js";import{a as T}from"./chunk-5KF2FUKO.js";import{a as I}from"./chunk-Q76IE7S5.js";import{a as D}from"./chunk-RK5HVFU5.js";import"./chunk-HBVWURI3.js";import"./chunk-5U3MVXXA.js";import"./chunk-RAPV3KZQ.js";import"./chunk-2Y5VLTIC.js";import{a as f}from"./chunk-JOI2Z4NP.js";import{a as s}from"./chunk-DSQHKKZ4.js";import"./chunk-IETC7J5T.js";import{a as J}from"./chunk-6K5WFQPP.js";import{a as v}from"./chunk-IWOUKZIP.js";import"./chunk-NZDFBLRQ.js";import{a}from"./chunk-S4DLXHFF.js";import"./chunk-PR2EAHHE.js";import{a as c}from"./chunk-MT75LODT.js";import"./chunk-6SYTCZ5G.js";import"./chunk-EFFTH5LW.js";import"./chunk-4JYNGGXH.js";import"./chunk-V4VDCP3C.js";import"./chunk-V56KALMS.js";import{a as h}from"./chunk-C257UEHM.js";import"./chunk-3XEIZZHC.js";import{a as N}from"./chunk-ZWSICCTU.js";import"./chunk-APLZF2FC.js";import"./chunk-NIE6URWE.js";import"./chunk-VDZHRZJL.js";import"./chunk-KU5JAIEB.js";import{a as p}from"./chunk-N7M4WPYO.js";import"./chunk-BGM7VCLD.js";import"./chunk-ZOICBMHG.js";import"./chunk-EL33JOKC.js";import"./chunk-EOP2LXLP.js";import{a as g}from"./chunk-ARPRWHND.js";import"./chunk-VOI5HXP6.js";import"./chunk-UXWHPN2C.js";import"./chunk-FBJYO5PW.js";import"./chunk-SASH6XDT.js";import"./chunk-DMJF4GTY.js";import{a as w}from"./chunk-3SG23KH5.js";import"./chunk-J3H3UK4G.js";import"./chunk-LAQFFA4M.js";import{a as B}from"./chunk-3E53RUR7.js";import{a as m}from"./chunk-TTNOFDP6.js";import{c as d}from"./chunk-5D3DZNMD.js";import{S as E,d as M,e as k,n as $,y as C}from"./chunk-B3TUML6P.js";import"./chunk-U2JBD6QP.js";import"./chunk-KXXSC5XL.js";import{a as u}from"./chunk-VVTHM3UH.js";import{a as S}from"./chunk-34VPQFZA.js";function tt(t,r){let o=I(),e=F({className:"fshBl fshBls",textContent:t});return m(e,n=>{n.target.blur(),P(`${E}&players=${r}`,"fsQuickBuff",618,1e3,",scrollbars"),f("doBuffLinks",t)}),s(o,e),o}function rt(t,r,o){return s(t,tt(`Buff ${M[o]} 16`,r.join(","))),t}function b(t){let r=O(16,t),o=j();return r.reduce(rt,o)}var ot=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/;function et(t){let r=new Date().getFullYear();return k[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function nt([,,t,r,o,e]){return new Date(z([et(r),r,t,o,e]))}function it(t){let r=t.cells[3],o=S(ot,p(r));i(r,`<br><span class="fshBlue fshXSmall">Local: ${nt(o).toString().slice(0,21)}</span>`)}function st(t,r){let o=p(r.children[0]);return t?.[o]?`${J({last_login:t[o].last_login})}&nbsp;<a href="${C}${t[o].id}"><b>${o}</b></a> [${t[o].level}]`:`<b>${o}</b>`}function V(t,r){return t[r]?t[r].level:0}function ft(t,r,o){return V(t,o)-V(t,r)}function mt(t,r){let o=v(r.innerHTML);return o.length>1&&o.sort(g(ft,t)),o}function at(t){return t!=="[none]"&&t.indexOf("<font")===-1}function pt(t,r){let o=r.filter(at);o.length>0&&s(t,b(o)),i(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function ut(t,r,o){let e=o.map(g(_,t));c(`<span>${e.join(", ")}</span>`,r)}function ct(t,r){let o=r.cells[0];c(st(t,o),o);let e=r.cells[1],n=mt(t,e);pt(o,n),ut(t,e,n),it(r)}function L(t){let r=d("betaOptIn");r&&x("groups.doGroupPaint"),T("group-action-container").map(o=>q(o)).forEach(g(ct,t)),r&&G("groups.doGroupPaint")}function l(t,r){let o=U({className:"custombutton",type:"button",value:r});return i(t,"&nbsp;"),s(t,o),o}function lt(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}async function dt(t){let r=Q(t),o=await R(r);if(o?.r?.attributes){let e=W(o.r.attributes),n=t.parentNode.parentNode.previousElementSibling;i(n,lt(e))}}function ht(t){f("groups","fetchGroupData");let{target:r}=t;r.disabled=!0,a('#pCC a[href*="=viewstats&"]').forEach(dt)}function y(t){t.classList.add("fshRelative");let r=l(t,"Fetch Group Stats");r.style.position="absolute",m(r,ht)}function gt(t){return!t.includes("#000099")}function vt(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}async function bt(t,r){await N({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}),vt(r)}function Lt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(v(p(r)).filter(gt).length<u.maxGroupSizeToJoin){let n=D({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(n,t);let K=B(/confirmJoin\((?<id>\d+)\)/,t.href);bt(K,n)}}function Z(){f("groups","joinAllGroupsUnderSize"),a('#pCC a[href*="confirmJoin"]').forEach(Lt)}function yt(t){let r=l(t,`Join All Groups < ${u.maxGroupSizeToJoin} Members`);m(r,Z)}function A(t){let r=t.parentNode;u.enableMaxGroupSizeToJoin&&(H(t),yt(r)),y(r),u.subcmd2===$&&Z()}function At(){let t=d("minGroupLevel");if(t){let r=h('#pCC table[width="650"]');X(h("br",r),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}function St(){let t=a("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}async function Bt(){if(w())return;let t=h('#pCC input[value="Join All Available Groups"]');if(!t)return;let r=Y(!1);At(),A(t),St(),L(await r)}export{Bt as default};
//# sourceMappingURL=groups-NLQM65RR.js.map
