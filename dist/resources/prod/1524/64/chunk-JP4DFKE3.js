import{a as l}from"./chunk-YULEDMFI.js";import{a as d}from"./chunk-3EONQEO2.js";import{a as r}from"./chunk-XWCLQVCM.js";import{b as o}from"./chunk-NG7LLWFJ.js";import{ka as n}from"./chunk-AWEYVB2J.js";var e;function u(){e=o("sendGoldonWorld")}function a(m){let t=l(m);(t==="You successfully sent gold!"||t==="")&&(r("currentGoldSentTotal",parseInt(o("currentGoldSentTotal"),10)+parseInt(o("goldAmount"),10)),GameData.fetch(n))}function f(){!e||d({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")}).then(a)}export{e as a,u as b,f as c};
//# sourceMappingURL=chunk-JP4DFKE3.js.map