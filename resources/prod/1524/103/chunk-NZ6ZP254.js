import{a as f}from"./chunk-L4YLDFIV.js";import{a as c}from"./chunk-CMXQAXF2.js";import{a as m}from"./chunk-UXWHPN2C.js";import{a as s}from"./chunk-FBJYO5PW.js";import{a as r}from"./chunk-LAQFFA4M.js";import{a as l}from"./chunk-U2JBD6QP.js";import{a as d}from"./chunk-KXXSC5XL.js";import{a as u}from"./chunk-VVTHM3UH.js";var o=[null];function a(n,t){return o[n]&&o[n].priority<o[t].priority}function g(n,t){let e=o[n];o[n]=o[t],o[t]=e}function H(n,t){return n?t*2:t*2+1}function L(n){let t=n;for(;t*2<o.length;){let e=!a(t*2+1,t*2),i=H(e,t);if(a(t,i))break;g(t,i),t=i}}function M(n){let t=n;for(;t>1;){let e=t>>1;if(!a(t,e))break;g(t,e),t=e}}function h(){if(o.length===1)return;let n=o[1].data,t=o.pop();return o.length>1&&(o[1]=t,L(1)),n}function w(n,t){M(o.push({data:n,priority:t})-1)}function k(){return o.length-1}var p=!0,b="fshMessage",y=0;function x(){k()===0?p=!0:(p=!1,window.postMessage(b,window.location.origin))}function A(n){l(n)||s(`pop() was not a function (${typeof n})`,!1)}function F(){let n=h();r(n)?n():A(n)}function G(){try{F()}catch(n){s(m(n),!1)}finally{x()}}function T(n){let t=n.data;n.origin===window.location.origin&&t===b&&G()}function v(){y||(d(window,"message",T),y=!0)}function C(n){n&&!f(n)&&console.log("addTask isArray(args)",f(n))}function D(n,t,e,i){if(u.userIsDev&&C(e),r(t)){v();let I=c(i,window),E=c(e,[]);w(t.bind(I,...E),n),p&&x()}}export{D as a};
//# sourceMappingURL=chunk-NZ6ZP254.js.map
