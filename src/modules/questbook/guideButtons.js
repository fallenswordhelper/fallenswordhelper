import './guideButtons.css';
import { guideUrl } from '../support/constants';

export default function guideButtons(questID, questName) {
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
