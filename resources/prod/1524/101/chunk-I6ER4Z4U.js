import{a as n}from"./chunk-46RQZKTP.js";function s(r){let t=r.stack.replace(/\n +/g,"|");return r.stack.includes(r.message)?t:`${r.message}|${t}`}function i(r){return r.stack?s(r):r.message?r.message:String(r)}function a(r){return r instanceof Error?i(r):typeof r=="object"?n(r):String(r)}export{a};
//# sourceMappingURL=chunk-I6ER4Z4U.js.map
