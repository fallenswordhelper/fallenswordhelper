import{E as o,t as a,ay as c}from"./calfSystem-cbf77dd7.js"
import{g as f,m as t}from"./monkeyBp-e3efac68.js"
function n(o,a){const f=`${c}ui/misc/${a}.png`
o.src!==f&&(o.src=f)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(c){o(".backpackFolderImage").forEach(a(r,String(c.folderId)))}function e(){const o=f()
o&&t(o,s)}export default e
//# sourceMappingURL=fixFolders-d971e5a3.js.map
