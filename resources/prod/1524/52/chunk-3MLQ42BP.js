import{a as c}from"./chunk-ERNA6O2Z.js";import{a as e}from"./chunk-NDCVQHVH.js";import{a as s}from"./chunk-BOMGPUDJ.js";function n(t,r,A,p){t instanceof EventTarget&&t.removeEventListener(r,A,p)}var o,a,f,l,d,i;function D(t,r){t?o=t:o=r.target}function m(t){a=t.clientX,f=t.clientY}function b(t){if(t==="none")return[0,0];let r=t.match(/(\d+), (\d+), (\d+), (\d+), (-?\d+), (-?\d+)/);return[Number(r[5]),Number(r[6])]}function w(){let t=window.getComputedStyle(o,null),r=b(t.transform);l=r[0]-a,d=r[1]-f}function u(t){(t.clientX!==a||t.clientY!==f)&&(o.style.transform=`matrix(1, 0, 0, 1, ${(t.clientX+l).toString()}, ${(t.clientY+d).toString()})`,m(t))}function X(t){let r=performance.now();r-i>16&&(u(t),i=r)}function g(t){return X(t),t.preventDefault(),!1}function Y(t){return u(t),n(document.body,"dragover",g),t.preventDefault(),!1}function y(t){let r=new Image;r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",t.dataTransfer.setDragImage(r,0,0)}function T(t,r){D(t,r),y(r),m(r),w(),i=0,r.dataTransfer.setData("text/plain",""),e(document.body,"dragover",g),c(document.body,"drop",Y)}function x(t,r){t.draggable=!0,e(t,"dragstart",s(T,r))}export{x as a};
//# sourceMappingURL=chunk-3MLQ42BP.js.map
