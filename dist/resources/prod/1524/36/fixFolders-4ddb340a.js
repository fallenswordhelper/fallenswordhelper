import{E as o,t as c,ak as a}from"./calfSystem-e7bde0c3.js"
import{g as t,m as e}from"./monkeyBp-a8d3cce7.js"
function n(o,c){const t=`${a}ui/misc/${c}.png`
o.src!==t&&(o.src=t)}function r(o,c){c.dataset.folder===o?n(c,"folder_on"):n(c,"folder")}function s(a){o(".backpackFolderImage").forEach(c(r,String(a.folderId)))}function f(){const o=t()
o&&e(o,s)}export default f
//# sourceMappingURL=fixFolders-4ddb340a.js.map
