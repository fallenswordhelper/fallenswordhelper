import{E as o,t,aw as a}from"./calfSystem-7991d843.js"
import{g as c,m as n}from"./monkeyBp-84ce6458.js"
function r(o,t){const c=`${a}ui/misc/${t}.png`
o.src!==c&&(o.src=c)}function s(o,t){t.dataset.folder===o?r(t,"folder_on"):r(t,"folder")}function f(a){o(".backpackFolderImage").forEach(t(s,String(a.folderId)))}function e(){const o=c()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-95143d3b.js.map
