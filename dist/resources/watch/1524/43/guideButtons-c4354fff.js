import { aL as guideUrl } from './calfSystem-476ab75d.js';

var css = ".parent {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\n.parent a {\n  height: 17.4px;\n  width: 17.4px;\n  background-size: contain;\n  border: solid 1px #4f3717;\n  border-radius: 2px;\n}\n";
var modules_dd5d330b = {};

function guideButtons(questID, questName) {
  return '<div class="parent">'
    + `<a href="${guideUrl}quests&`
    + `subcmd=view&quest_id=${questID}" class="fshTempleOne" `
    + 'data-tooltip="Search for this quest on the Ultimate Fallen Sword Guide" '
    + 'target="_blank"></a>&nbsp;'
    + `<a href="https://wiki.fallensword.com/index.php?title=${
      questName.replace(/ /g, '_')}" class="fshWiki" `
    + 'data-tooltip="Search for this quest on the Wiki" '
    + 'target="_blank"></a></div>';
}

export { guideButtons as g };
//# sourceMappingURL=guideButtons-c4354fff.js.map
