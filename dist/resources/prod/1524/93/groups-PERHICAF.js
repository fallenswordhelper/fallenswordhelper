import{a as Q}from"./chunk-EOGKNN5S.js";import{a as _}from"./chunk-YSVTXUR3.js";import{a as X}from"./chunk-4AH6NFPU.js";import{a as Y}from"./chunk-ZAO6I6N3.js";import{a as q}from"./chunk-QDV4PRAL.js";import{a as R}from"./chunk-TBEOAWG2.js";import{b as W}from"./chunk-7FEM3RNR.js";import{a as O}from"./chunk-RJM3FDYF.js";import{a as F}from"./chunk-NJNBGFBK.js";import"./chunk-IY2KCRBR.js";import"./chunk-3H5FBYGC.js";import{a as P}from"./chunk-OFVL4Q2L.js";import{a as w}from"./chunk-YUEMMNBE.js";import{a as z}from"./chunk-RTQSSGV5.js";import{a as H}from"./chunk-GU4CBJV2.js";import"./chunk-FZXNAIDT.js";import{b as x,c as G}from"./chunk-ZPEESB3P.js";import"./chunk-HK3FJNIM.js";import"./chunk-FSSBYC3E.js";import{a as j}from"./chunk-U3H7ULU4.js";import"./chunk-D6NHBHDF.js";import"./chunk-SDADCBWU.js";import{a as I}from"./chunk-ZGGSHP2P.js";import"./chunk-NUXR4MVG.js";import"./chunk-3TMTTFLY.js";import{a as T}from"./chunk-MX5TZ7HK.js";import{a as i}from"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as D}from"./chunk-MUG4VEKH.js";import{a as s}from"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import{a as U}from"./chunk-CGBLY2TS.js";import{a as v}from"./chunk-TIFX43ZW.js";import"./chunk-GOQRAVSB.js";import{a as l}from"./chunk-HPU5ZEP3.js";import"./chunk-5HI4ILOP.js";import"./chunk-4463IFOY.js";import"./chunk-7Z2VPPBD.js";import"./chunk-QOOVEHWY.js";import"./chunk-SDYIYOUC.js";import"./chunk-D2RKZAOL.js";import{a as g}from"./chunk-OX3SBSJB.js";import"./chunk-L4JCGVZD.js";import{a as J}from"./chunk-R5QRYD7G.js";import"./chunk-RDAHQVBW.js";import{a as u}from"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import"./chunk-KCGDJ5EJ.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import{a as N}from"./chunk-A45QJTDQ.js";import"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as p}from"./chunk-CRWX7KCS.js";import"./chunk-ZDSFJLAY.js";import"./chunk-XM37SDUA.js";import"./chunk-MBZ7GUCJ.js";import{a as m}from"./chunk-VRYLUPGH.js";import{a}from"./chunk-NH6FAU6Q.js";import"./chunk-LEOH7BX4.js";import"./chunk-WFI3HTBS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import{a as f}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import{a as B}from"./chunk-CEGJSIVU.js";import{b as h}from"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{S as E,d as M,e as k,n as $,y as C}from"./chunk-UYN3LUIY.js";import{a as S}from"./chunk-U6BMTRHL.js";import{a as c}from"./chunk-3WE6KSRQ.js";function tt(t,r){let o=I(),e=F({className:"fshBl fshBls",textContent:t});return p(e,n=>{n.target.blur(),H(`${E}&players=${r}`,"fsQuickBuff",618,1e3,",scrollbars"),m("doBuffLinks",t)}),s(o,e),o}function rt(t,r,o){return s(t,tt(`Buff ${M[o]} 16`,r.join(","))),t}function b(t){let r=O(16,t),o=j();return r.reduce(rt,o)}var ot=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/;function et(t){let r=new Date().getFullYear();return k[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function nt([,,t,r,o,e]){return new Date(q([et(r),r,t,o,e]))}function it(t){let r=t.cells[3],o=S(ot,u(r));i(r,`<br><span class="fshBlue fshXSmall">Local: ${nt(o).toString().slice(0,21)}</span>`)}function st(t,r){let o=u(r.children[0]);return t[o]?`${U({last_login:t[o].last_login})}&nbsp;<a href="${C}${t[o].id}"><b>${o}</b></a> [${t[o].level}]`:`<b>${o}</b>`}function V(t,r){return t[r]?t[r].level:0}function ft(t,r,o){return V(t,o)-V(t,r)}function mt(t,r){let o=v(r.innerHTML);return o.length>1&&o.sort(f(ft,t)),o}function pt(t){return t!=="[none]"&&t.indexOf("<font")===-1}function at(t,r){let o=r.filter(pt);o.length>0&&s(t,b(o)),i(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function ut(t,r,o){let e=o.map(f(_,t));l(`<span>${e.join(", ")}</span>`,r)}function ct(t,r){let o=r.cells[0];l(st(t,o),o);let e=r.cells[1],n=mt(t,e);at(o,n),ut(t,e,n),it(r)}function L(t){let r=h("betaOptIn");r&&x("groups.doGroupPaint"),T("group-action-container").map(o=>P(o)).forEach(f(ct,t)),r&&G("groups.doGroupPaint")}function d(t,r){let o=w({className:"custombutton",type:"button",value:r});return i(t,"&nbsp;"),s(t,o),o}function lt(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}async function dt(t){let r=Q(t),o=await R(r);if(o?.r?.attributes){let e=W(o.r.attributes),n=t.parentNode.parentNode.previousElementSibling;i(n,lt(e))}}function ht(t){m("groups","fetchGroupData");let{target:r}=t;r.disabled=!0,a('#pCC a[href*="=viewstats&"]').forEach(dt)}function A(t){t.classList.add("fshRelative");let r=d(t,"Fetch Group Stats");r.style.position="absolute",p(r,ht)}function gt(t){return!t.includes("#000099")}function vt(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function bt(t,r){J({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(f(vt,r))}function Lt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(v(u(r)).filter(gt).length<c.maxGroupSizeToJoin){let n=D({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(n,t);let K=B(/confirmJoin\((?<id>\d+)\)/,t.href);bt(K,n)}}function Z(){m("groups","joinAllGroupsUnderSize"),a('#pCC a[href*="confirmJoin"]').forEach(Lt)}function At(t){let r=d(t,`Join All Groups < ${c.maxGroupSizeToJoin} Members`);p(r,Z)}function y(t){let r=t.parentNode;c.enableMaxGroupSizeToJoin&&(z(t),At(r)),A(r),c.subcmd2===$&&Z()}function yt(){let t=h("minGroupLevel");if(t){let r=g('#pCC table[width="650"]');X(g("br",r),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}function St(){let t=a("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}function Bt(){if(N())return;let t=g('#pCC input[value="Join All Available Groups"]');t&&(Y(!1).then(L),yt(),y(t),St())}export{Bt as default};
//# sourceMappingURL=groups-PERHICAF.js.map
