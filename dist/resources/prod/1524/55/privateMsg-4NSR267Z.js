import{a as P}from"./chunk-ELLGBCU3.js";import{a as k,b as c}from"./chunk-NVRAWDYW.js";import"./chunk-7AE7T7RQ.js";import"./chunk-DLTLK7MI.js";import{a as x}from"./chunk-CWEFFR7R.js";import"./chunk-IYR4CV4S.js";import"./chunk-GTGFHQE7.js";import"./chunk-AHMWSCCL.js";import"./chunk-B4FAT4S5.js";import{a}from"./chunk-BGRUH4VX.js";import{a as p}from"./chunk-K42GGIPC.js";import{a as M}from"./chunk-J5K3EL73.js";import"./chunk-DLSGX6PZ.js";import"./chunk-EO5XDEZO.js";import"./chunk-R4CFGI6O.js";import"./chunk-IN3LH3FB.js";import"./chunk-EGMW5FEC.js";import"./chunk-4JPLNJXC.js";import{a as L}from"./chunk-74EK3V76.js";import{a as h}from"./chunk-4W5LX7WX.js";import"./chunk-MRDXZZHG.js";import"./chunk-FSJKGO56.js";import"./chunk-2A2BOA2Y.js";import"./chunk-RT5GGQZO.js";import"./chunk-I3HDBAJB.js";import{a as B}from"./chunk-VAJJ3B4H.js";import"./chunk-2J7BLPNB.js";import"./chunk-3IZSRBVW.js";import"./chunk-S5U6RFFU.js";import{a as v}from"./chunk-42RKXLID.js";import"./chunk-NX5SSUGZ.js";import"./chunk-R6SLBHCS.js";import"./chunk-J4SAIAEQ.js";import"./chunk-MF5BZBCN.js";import{a as i}from"./chunk-T7L7W7NW.js";import"./chunk-MQRQAX7O.js";import"./chunk-CDJXMXAD.js";import{a as T}from"./chunk-EQNCUII2.js";import"./chunk-5NIAUQBB.js";import"./chunk-FIYDSWPU.js";import"./chunk-JQN7MVS5.js";import"./chunk-3LVRLS3W.js";import"./chunk-SKB75UHJ.js";import"./chunk-D6P46ZXI.js";import"./chunk-W5X6D6BY.js";import"./chunk-ZD6KR2JJ.js";import"./chunk-TV5KWDG5.js";import"./chunk-EXPYEXEP.js";import"./chunk-ZACGLTFX.js";import"./chunk-QJQL33BB.js";import"./chunk-FMNM33OL.js";import"./chunk-DPUM55LY.js";import"./chunk-CJ5MYL4D.js";import"./chunk-BPJKI26M.js";import"./chunk-7FXPMHZ5.js";import"./chunk-TUWDUCWH.js";import"./chunk-TEW6YNEY.js";import{a as b}from"./chunk-BXVF4M5G.js";import"./chunk-SNSTWQSS.js";import{a as r}from"./chunk-LFXZGYGZ.js";import"./chunk-B5XQQNQZ.js";import"./chunk-OCPSJVCN.js";import"./chunk-NIYIBTJZ.js";import"./chunk-V5W6AOGE.js";import"./chunk-LFCR6ZTM.js";import"./chunk-6UVNJJZQ.js";import"./chunk-Z4OUE4BH.js";import"./chunk-CN4P2KLK.js";import{a as y}from"./chunk-BGO273GM.js";import{b as m}from"./chunk-XJX3OTSZ.js";import"./chunk-GUUYKSUL.js";import"./chunk-D6HZ4P35.js";import{x as u,y as d}from"./chunk-E72VSDOE.js";import"./chunk-U4WGNCSF.js";import"./chunk-3XQ73JET.js";function s(t){return i(a(t).children[3].childNodes[0])}function n(t){return y(a(t).children[2].children[0])}var U=(t,e)=>p(e.nicks).includes(v(t));function N(t){let e=x.find(o=>U(t,o));if(e)return e.id}var C=t=>p(t).map(N).filter(e=>e).join(";");function E(t){let e=/`~(.*)~`/.exec(s(t));return e?C(e[1]):""}function l(t){let{target:e}=t;h(n(e),E(e)),r("privateMsg","Buff")}function w(t){let e=s(t);return e.length>140?`${e.substring(0,140)}...`:e}function S(t){if(!m("enableChatParsing"))return;let{target:e}=t;window.openQuickMsgDialog(n(e),"",w(e)),t.preventDefault(),r("privateMsg","parseReply")}var I=[["pmBuffBtn",l],["fa-reply",S],["pmTradeUrl",()=>r("privateMsg","Trade")],["pmSecureUrl",()=>r("privateMsg","ST")],["pmAttackUrl",()=>r("privateMsg","Attack")],["pmIgnoreUrl",()=>r("privateMsg","Ignore")]];function W(t){let{target:e}=t,o=I.find(f=>M(e,f));o&&o[1](t)}function g(t){b(t,W)}var R=t=>[i(t.children[2]),t.children[3]];function V(t){if(!m("privateMsgButtons"))return;L(t.rows,6,0).map(R).forEach(([o,f])=>{T(f,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+o}">Send</a> | <a class="pmSecureUrl" href="${d+o}">Trade</a> ]`)})}function j(){let t=k();t&&(V(t),P(1),g(t))}function Q(){B("type")==="1"?(c("PrivateMsg",1,6),j()):c("OutBox",1,4)}export{Q as default};
//# sourceMappingURL=privateMsg-4NSR267Z.js.map
