import{E as o,t as a,az as t}from"./calfSystem-6a3c85e0.js"
import{g as c,m as f}from"./monkeyBp-52e3f9a3.js"
function n(o,a){const c=`${t}ui/misc/${a}.png`
o.src!==c&&(o.src=c)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(t){o(".backpackFolderImage").forEach(a(r,String(t.folderId)))}function e(){const o=c()
o&&f(o,s)}export default e
//# sourceMappingURL=fixFolders-a6f0fdfe.js.map
