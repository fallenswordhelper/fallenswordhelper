import{a as n}from"./chunk-CA4APEYC.js";function s(r){let t=r.stack.replace(/\n +/g,"|");return r.stack.includes(r.message)?t:`${r.message}|${t}`}function i(r){return r.stack?s(r):r.message?r.message:String(r)}function a(r){return r instanceof Error?i(r):typeof r=="object"?n(r):String(r)}export{a};
//# sourceMappingURL=chunk-3M4BGLDY.js.map
