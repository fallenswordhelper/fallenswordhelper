import{a as l}from"./chunk-F5WXPBTY.js";import{a as d}from"./chunk-W5YL3QSG.js";import{a as r}from"./chunk-GN5NA7YF.js";import{b as o}from"./chunk-KZTI7NFS.js";import{ka as n}from"./chunk-I67LU25W.js";var e;function f(){e=o("sendGoldonWorld")}function m(a){let t=l(a);(t==="You successfully sent gold!"||t==="")&&(r("currentGoldSentTotal",parseInt(o("currentGoldSentTotal"),10)+parseInt(o("goldAmount"),10)),GameData.fetch(n))}function s(){!e||d({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")}).then(m)}export{e as a,f as b,s as c};
//# sourceMappingURL=chunk-T7FDHGGZ.js.map