import{a as Z}from"./chunk-D56YDELT.js";import{b as X}from"./chunk-ZRNYOYUN.js";import"./chunk-RDZMBDPV.js";import{a as K}from"./chunk-N5XNFXRK.js";import{a as J}from"./chunk-2SM2OCLR.js";import{a as h}from"./chunk-5YHEEE6C.js";import{a as L}from"./chunk-MWBL24AF.js";import{a as Y}from"./chunk-TVKHDN3I.js";import{a as z}from"./chunk-2JNINSRM.js";import"./chunk-GXQN2KCB.js";import"./chunk-AGONHSCU.js";import"./chunk-B6UVYP43.js";import{a as Q}from"./chunk-YSLN4J5T.js";import{a as q,b as U}from"./chunk-ZANBUYIU.js";import"./chunk-HR63FZAK.js";import{a as w}from"./chunk-UT5G2UYY.js";import"./chunk-T6M6SLEE.js";import"./chunk-GRAGYVAJ.js";import{a as W}from"./chunk-LZ6APVKA.js";import"./chunk-T7PFQ73F.js";import{a as V}from"./chunk-TLXQ64DC.js";import"./chunk-7B4IO7C5.js";import{a as M}from"./chunk-Q4XXYB5L.js";import"./chunk-M2EZ4FGP.js";import"./chunk-WEM3KR6S.js";import{b as k}from"./chunk-ZPKDX2TA.js";import{a as O}from"./chunk-RHT6F3VW.js";import"./chunk-LGD2O3Z4.js";import"./chunk-5R3F3CA6.js";import{a as B}from"./chunk-L5AX3Z7V.js";import"./chunk-EFQ65JH2.js";import{a as S}from"./chunk-O7UFEMZS.js";import{a as A}from"./chunk-PZPCKQA2.js";import"./chunk-TB4ICF4L.js";import"./chunk-BRBGUBTX.js";import{a as f}from"./chunk-JXDCVDAG.js";import"./chunk-24RPK7WU.js";import"./chunk-VNMHD7BL.js";import"./chunk-KKL2RL5K.js";import"./chunk-3GV55PFT.js";import"./chunk-4WLRCDD6.js";import{a as $}from"./chunk-7D7PUCSG.js";import{a as _}from"./chunk-NTW3JDM6.js";import"./chunk-NORPNMTZ.js";import"./chunk-GZ5MHZSO.js";import"./chunk-ECTWXQFU.js";import{a as m}from"./chunk-5YV4PH6I.js";import{a as F}from"./chunk-6MKXC6ON.js";import"./chunk-HVC7S5PE.js";import"./chunk-NC4XYYGB.js";import{a as r}from"./chunk-E5FOTTRM.js";import"./chunk-OEATIPCL.js";import"./chunk-HVPMEAYK.js";import"./chunk-Q6VOFYH2.js";import"./chunk-QH6YIHH4.js";import"./chunk-3RYC2EKK.js";import"./chunk-OACBWC2H.js";import{a as D}from"./chunk-IJUADRFJ.js";import{b as j}from"./chunk-VEFZUGNI.js";import"./chunk-FJEDYAWH.js";import"./chunk-WV7FHD63.js";import{E as H}from"./chunk-OOFTOHPO.js";import"./chunk-L5TVV64R.js";import{a as n}from"./chunk-TQN6MN4F.js";function a(e){return _({cmd:"guild",subcmd:"log",page:e})}var ae=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled",/has revoked .+'s invite to the guild/],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]];function ce(e,t){return S(t)?e.includes(t):t.test(e)}function le(e,t){return t.some(n(ce,e))}function x(e){let t=ae.findIndex(n(le,e));return t===-1?0:t}var ee=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${H}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,te='<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>',T=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],oe=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1];var o={},R,u,N,p,P,c,se,i=[],g=!0,l;function de(e){P=$(e);let t=M('input[name="page"]',P);t&&(c=Number(t.value),se=Number(/\d+/.exec(D(t.parentNode))[0]),c===1&&(p=Math.min(se,N)),f(`Loading ${c} of ${p}...`,u))}function me(e,t){return[()=>c===1,()=>o.log,()=>o.log[0],()=>o.log[0][0],()=>e===o.log[0][0],()=>t===o.log[0][2]].every(K)}function fe(e){let t=e[0],s=t.rows.length-1;for(let d=1;d<s;d+=2){let C=t.rows[d],E=B(C.cells[1]),I=Y(E),y=C.cells[2].innerHTML;if(me(I,y)){g=!1;break}i.push([c*100+d,I,E,y,x(y)])}}function he(){let e=V("width_full",P);e.length===1&&fe(e)}function ie(e){de(e),he()}function ue(e){i.push([0].concat(e))}function pe(){let e=[];if(g)for(let t=2;t<=p;t+=1)e.push(a(t).then(ie));else o.log.forEach(ue);return z(e)}function b(){U("fsh_guildLog",o)}function ge(e,t){return t[1]!==e}function be(e){return e.slice(1,5)}function ye(){o.log=i.filter(n(ge,new Date().setSeconds(0,0))).map(be),b()}function G(e,t){let s=e.insertCell(-1);m(t,s),s.className="row"}function ke(e){let t=l.insertRow(-1);e.push(t),o.checks[e[4]]||(t.className="fshHide"),G(t,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),G(t,`<nobr>${e[2]}</nobr>`),G(t,e[3])}function we(e){let t=l.insertRow(-1);e.push(t),o.checks[e[4]]||(t.className="fshHide");let s=t.insertCell(-1);s.className="divider",s.colSpan=3}function Le(e){ke(e),we(e)}function xe(){l=Q({id:"fshInjectHere",className:"width_full"}),A(l,te),i.forEach(Le);let e=r("fshInjectHere");k.replaceChild(l,e),X("myGuildLog",1,3),Z()}function Te(e){e.checked=o.checks[e.getAttribute("item")]}function v(){O("input",R).forEach(Te),b()}function Re(e,t){return e[0]-t[0]}function Ne(){g&&i.sort(Re),f("Loading complete.",u),ye(),xe()}function ne(e){ie(e),pe().then(Ne)}function Pe(e,t,s){s[4]===e&&(L(s[5],t),L(s[6],t))}function Ge(e){let t=Number(e.getAttribute("item"));o.checks[t]=!o.checks[t],b(),i.forEach(n(Pe,t,!o.checks[t]))}function re(e){e&&e.classList&&e.classList.remove("fshHide")}function ve(e){re(e[5]),re(e[6])}function Ce(){o.checks=T.slice(0),v(),i.forEach(ve)}function Ee(e){w(e[5]),w(e[6])}function Ie(){o.checks=oe.slice(0),v(),i.forEach(Ee)}function He(){o.log=!1,b(),f("Loading Page 1 ...",u),i=[],g=!0,m("",r("fshInjectHere")),a(1).then(ne)}function je(){return J([[e=>e.tagName==="INPUT",Ge],[h("fshAll"),Ce],[h("fshNone"),Ie],[h("rfsh"),He]])}function Ae(e){o=e||o,o.checks=o.checks||T.slice(0)}function Oe(){R=r("fshNewGuildLog"),u=r("fshOutput")}function De(){N=Number(j("newGuildLogHistoryPages")),p=N}function Se(e){Ae(e),m(ee,k),Oe(),F(R,je()),v(),De(),a(1).then(ne)}function Be(){W()||q("fsh_guildLog").then(Se)}export{Be as default};
//# sourceMappingURL=newGuildLog-HA6TFFWC.js.map
