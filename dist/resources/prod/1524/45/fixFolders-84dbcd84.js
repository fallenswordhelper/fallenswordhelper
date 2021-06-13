import{E as o,t as c,aw as a}from"./calfSystem-e1e858cd.js"
import{g as t,m as e}from"./monkeyBp-fe9dcc2a.js"
function f(o,c){const t=`${a}ui/misc/${c}.png`
o.src!==t&&(o.src=t)}function n(o,c){c.dataset.folder===o?f(c,"folder_on"):f(c,"folder")}function r(a){o(".backpackFolderImage").forEach(c(n,String(a.folderId)))}function s(){const o=t()
o&&e(o,r)}export default s
//# sourceMappingURL=fixFolders-84dbcd84.js.map
