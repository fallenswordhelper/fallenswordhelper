import{a as _}from"./chunk-W2EI5YVF.js";import"./chunk-OAPB2VBU.js";import{a as Y}from"./chunk-4DSVOO3P.js";import{a as F}from"./chunk-5IWKPYLI.js";import{a as W}from"./chunk-2WGPWPZ6.js";import{b as X}from"./chunk-6CUDI3ND.js";import{a as R}from"./chunk-V5KAIKP5.js";import{a as O}from"./chunk-HTWAEHYQ.js";import"./chunk-O6Z3CRY7.js";import"./chunk-JY4A3DSP.js";import"./chunk-A336Z3P3.js";import{a as q}from"./chunk-FWL2OWGY.js";import{a as z}from"./chunk-O63Z2I2D.js";import{a as w}from"./chunk-IHUUDZVT.js";import{a as H}from"./chunk-2K67DJRR.js";import{a as j}from"./chunk-XEUU2WOF.js";import{a as I}from"./chunk-6TJF7A2N.js";import{a as P}from"./chunk-QIMPD6HQ.js";import{b as x,c as G}from"./chunk-G74VGEOG.js";import"./chunk-X2QJ4F75.js";import"./chunk-CKXQAU55.js";import"./chunk-BRCSGVHL.js";import{a as T}from"./chunk-MF3BFDWL.js";import{a as i}from"./chunk-YVPYZHJW.js";import"./chunk-SRSFKD6I.js";import"./chunk-A36TPL52.js";import"./chunk-3FUR4CWU.js";import{a as m}from"./chunk-VKNAZHSW.js";import"./chunk-3KOSRNPL.js";import"./chunk-SGIZTIIQ.js";import"./chunk-WHTJ2U55.js";import{a as D}from"./chunk-QGV7XG72.js";import{a as s}from"./chunk-QPQYH7ZQ.js";import"./chunk-NDSZEOFH.js";import{a as U}from"./chunk-GFNBDT2E.js";import{a as v}from"./chunk-G6PO2JVP.js";import"./chunk-H6PS5VCQ.js";import{a}from"./chunk-6ZR46QZG.js";import"./chunk-3VMUJXQR.js";import{a as l}from"./chunk-C4VXH3KO.js";import"./chunk-5E32VBFN.js";import"./chunk-AEWB35UI.js";import"./chunk-FIUIIBOQ.js";import"./chunk-7HLQ4YMN.js";import"./chunk-N47W3DMT.js";import"./chunk-XDV7LM6Z.js";import"./chunk-PNTHXLML.js";import{a as g}from"./chunk-ZDEOOWYD.js";import{a as u}from"./chunk-MFXNKIYL.js";import"./chunk-2XKKIH7K.js";import"./chunk-JZI3CAHX.js";import{a as N}from"./chunk-L5KUFFVQ.js";import"./chunk-UYGGJ3YF.js";import"./chunk-EE5B6X24.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import{a as f}from"./chunk-G34A357Q.js";import"./chunk-QL5YK4M4.js";import"./chunk-6YD7W4E5.js";import{a as J}from"./chunk-LG3KLILQ.js";import"./chunk-DYBFFO7Q.js";import"./chunk-IEAPP6FH.js";import"./chunk-FEFVGSP2.js";import"./chunk-EJENCRJV.js";import{a as B}from"./chunk-IWCA3B2P.js";import{a as p}from"./chunk-HMPLMOXP.js";import{b as h}from"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import"./chunk-OIO6LGXZ.js";import{S as E,d as M,e as k,n as $,y as C}from"./chunk-KWAUBU52.js";import{a as c}from"./chunk-TISVYXYU.js";import{a as S}from"./chunk-S3EM322F.js";function K(t,r){let o=j(),e=O({className:"fshBl fshBls",textContent:t});return p(e,n=>{n.target.blur(),P(`${E}&players=${r}`,"fsQuickBuff",618,1e3,",scrollbars"),m("doBuffLinks",t)}),s(o,e),o}function tt(t,r,o){return s(t,K(`Buff ${M[o]} 16`,r.join(","))),t}function b(t){let r=R(16,t),o=z();return r.reduce(tt,o)}var rt=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/;function ot(t){let r=new Date().getFullYear();return k[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function et([,,t,r,o,e]){return new Date(F([ot(r),r,t,o,e]))}function nt(t){let r=t.cells[3],o=S(rt,u(r));i(r,`<br><span class="fshBlue fshXSmall">Local: ${et(o).toString().slice(0,21)}</span>`)}function it(t,r){let o=u(r.children[0]);return t[o]?`${U({last_login:t[o].last_login})}&nbsp;<a href="${C}${t[o].id}"><b>${o}</b></a> [${t[o].level}]`:`<b>${o}</b>`}function Q(t,r){return t[r]?t[r].level:0}function st(t,r,o){return Q(t,o)-Q(t,r)}function ft(t,r){let o=v(r.innerHTML);return o.length>1&&o.sort(f(st,t)),o}function mt(t){return t!=="[none]"&&t.indexOf("<font")===-1}function pt(t,r){let o=r.filter(mt);o.length>0&&s(t,b(o)),i(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function at(t,r,o){let e=o.map(f(_,t));l(`<span>${e.join(", ")}</span>`,r)}function ut(t,r){let o=r.cells[0];l(it(t,o),o);let e=r.cells[1],n=ft(t,e);pt(o,n),at(t,e,n),nt(r)}function L(t){let r=h("betaOptIn");r&&x("groups.doGroupPaint"),T("group-action-container").map(o=>q(o)).forEach(f(ut,t)),r&&G("groups.doGroupPaint")}function d(t,r){let o=w({className:"custombutton",type:"button",value:r});return i(t,"&nbsp;"),s(t,o),o}function ct(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}async function lt(t){let r=t.href.split("=").at(-1),o=await W(r),e=X(o.r.attributes),n=t.parentNode.parentNode.previousElementSibling;i(n,ct(e))}function dt(t){m("groups","fetchGroupData");let{target:r}=t;r.disabled=!0,a('#pCC a[href*="=viewstats&"]').forEach(lt)}function A(t){t.classList.add("fshRelative");let r=d(t,"Fetch Group Stats");r.style.position="absolute",p(r,dt)}function ht(t){return!t.includes("#000099")}function gt(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function vt(t,r){N({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(f(gt,r))}function bt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(v(u(r)).filter(ht).length<c.maxGroupSizeToJoin){let n=D({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(n,t);let Z=B(/confirmJoin\((?<id>\d+)\)/,t.href);vt(Z,n)}}function V(){m("groups","joinAllGroupsUnderSize"),a('#pCC a[href*="confirmJoin"]').forEach(bt)}function Lt(t){let r=d(t,`Join All Groups < ${c.maxGroupSizeToJoin} Members`);p(r,V)}function y(t){let r=t.parentNode;c.enableMaxGroupSizeToJoin&&(I(t),Lt(r)),A(r),c.subcmd2===$&&V()}function At(){let t=h("minGroupLevel");if(t){let r=g('#pCC table[width="650"]');H(g("br",r),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}function yt(){let t=a("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}function St(){if(J())return;let t=g('#pCC input[value="Join All Available Groups"]');!t||(Y(!1).then(L),At(),y(t),yt())}export{St as default};
//# sourceMappingURL=groups-BP47GJXR.js.map
