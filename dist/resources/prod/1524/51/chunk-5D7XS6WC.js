import{a as r}from"./chunk-D6BL5IS3.js";import{a as l}from"./chunk-YYZHVDZH.js";import{a as d}from"./chunk-PJ32ASZ7.js";import{b as o}from"./chunk-HAINOYE5.js";import{ia as n}from"./chunk-YNXRNCRL.js";var e;function f(){e=o("sendGoldonWorld")}function m(a){let t=l(a);(t==="You successfully sent gold!"||t==="")&&(r("currentGoldSentTotal",parseInt(o("currentGoldSentTotal"),10)+parseInt(o("goldAmount"),10)),GameData.fetch(n))}function s(){!e||d({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")}).then(m)}export{e as a,f as b,s as c};
//# sourceMappingURL=chunk-5D7XS6WC.js.map
