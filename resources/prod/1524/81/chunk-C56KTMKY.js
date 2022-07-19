function n(r){let t=r.stack.replace(/\n +/g,"|");return r.stack.includes(r.message)?t:`${r.message}|${t}`}function s(r){return r.stack?n(r):r.message?r.message:String(r)}function a(r){return r instanceof Error?s(r):String(r)}export{a};
//# sourceMappingURL=chunk-C56KTMKY.js.map
