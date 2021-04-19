import{E as o,t,at as a}from"./calfSystem-fe534823.js"
import{g as f,m as n}from"./monkeyBp-606942a4.js"
function r(o,t){const f=`${a}ui/misc/${t}.png`
o.src!==f&&(o.src=f)}function s(o,t){t.dataset.folder===o?r(t,"folder_on"):r(t,"folder")}function c(a){o(".backpackFolderImage").forEach(t(s,String(a.folderId)))}function e(){const o=f()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-a2eb2aad.js.map
