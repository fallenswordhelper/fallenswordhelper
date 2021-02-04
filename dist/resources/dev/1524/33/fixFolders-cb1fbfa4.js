import{D as o,t as f,al as t}from"./calfSystem-37f70deb.js"
import{g as a,m as n}from"./monkeyBp-f459d4d1.js"
function r(o,f){const a=`${t}ui/misc/${f}.png`
o.src!==a&&(o.src=a)}function s(o,f){f.dataset.folder===o?r(f,"folder_on"):r(f,"folder")}function c(t){o(".backpackFolderImage").forEach(f(s,String(t.folderId)))}function e(){const o=a()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-cb1fbfa4.js.map
