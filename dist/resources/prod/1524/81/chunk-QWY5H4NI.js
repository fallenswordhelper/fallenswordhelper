import{a as f}from"./chunk-GNE3CKO7.js";import{a as u}from"./chunk-ZDIZRFLF.js";import{a as s}from"./chunk-HOFZHHFM.js";import{a as o}from"./chunk-YLLFMQF3.js";import{a as l}from"./chunk-RLPGZCX6.js";import{a as m}from"./chunk-6TE7Y3DR.js";var c=e=>e.username,r=0;async function x(){let e=await u(!1);return{_allies:e._allies.map(c),_enemies:e._enemies.map(c)}}function y(){return r||(r=x()),r}async function p(e){return(await y())._allies.includes(e)}async function d(e){return(await y())._enemies.includes(e)}var n=0;async function P(){return m(await f(!1)).filter(([,e])=>l(e)).map(([e])=>e)}async function a(e){return o()&&!n&&(n=P()),(await n).includes(e)}async function M(e){let t="",i=s(e),[g,w,_]=await Promise.all([a(i),p(i),d(i)]);return g?t="guild":w?t="ally":_&&(t="enemy"),[e,t]}export{a,M as b};
//# sourceMappingURL=chunk-QWY5H4NI.js.map