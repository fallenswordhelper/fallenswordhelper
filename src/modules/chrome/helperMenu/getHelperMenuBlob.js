import currentGuildId from '../../common/currentGuildId';
import playerLink from '../../common/playerLink';
import calf from '../../support/calf';
import { newGuildLogUrl, notepadBlankUrl } from '../../support/constants';
import getValue from '../../system/getValue';

const leadIn = '<div class="helperMenuColumn">';

const devSection = '<div class="helperMenuSectionHeader">Dev links</div>'
  + '<ul>'
  + '</ul>';

const character = '<div class="helperMenuSectionHeader">Character</div><ul>'
  + '<li><button class="helperDevBtn helperGo" type="button">Buff Log</button></li>'
  + '<li><button class="helperDevBtn helperGo" type="button">Combat Log</button></li>'
  + '<li><span class="fshLink">Creature Log</span></li>'
  + '<li><span class="fshLink">Recipe Manager</span></li>'
  + '<li><span class="fshLink">Quick Links</span></li>'
  + `<li><a href="${notepadBlankUrl}invmanagernew">Inventory Manager</a></li>`
  + '</ul>';

const actions = '<div class="helperMenuSectionHeader">Actions</div><ul>'
  + '<li><span class="fshLink">Find Buffs</span></li>'
  + '<li><span class="fshLink">Find Other</span></li>'
  + '<li><span class="fshLink">Online Players</span></li>'
  + '<li><span class="fshLink">AH Quick Search</span></li>'
  + '</ul>';

const guild = '<div class="helperMenuSectionHeader">Guild</div><ul>'
  + `<li><a href="${notepadBlankUrl}guildinvmgr">Guild Inventory</a></li>`
  + `<li><a href="${newGuildLogUrl}">New Guild Log</a></li>`
  + '<li><button class="helperDevBtn helperGo" type="button">Merc Hunter</button></li>'
  + '<li><button class="helperDevBtn helperGo" type="button">Guild Tracker</button></li>'
  + '</ul>';

const extra = '<div class="helperMenuSectionHeader">Extra</div><ul>'
  + '<li><button class="helperDevBtn helperGo" type="button">Quick Extract</button></li>'
  + '<li><span class="fshLink">Quick Wear</span></li>'
  + '<li><button class="helperDevBtn helperGo" type="button">FS Box Log</button></li>'
  + '<li><button class="helperDevBtn helperGo" type="button">SE Tracker</button></li>'
  + '</ul>';

const betaSection = '<div class="helperMenuSectionHeader">Beta Features</div><ul>'
  + `<li><a href="${notepadBlankUrl}reliclist">Relic List</a><sup class="fshRed">beta</sup></li>`
  + '<li><button class="helperDevBtn helperGo" type="button">GS Export</button><sup class="fshRed">beta</sup></li>'
  + '</ul>';

const bottomSection = '<div class="helperMenuSectionHeader">FSH developer quick links</div><ul>'
  + '<li><span class="helperMenuReply" target_player="PointyHair">PM</span> '
  + `${playerLink(1963510, 'PointyHair')}</li>`
  + '<li><span class="helperMenuReply" target_player="Lusterless">PM</span> '
  + `${playerLink(1674838, 'Lusterless')}</li>`
  + '</ul>';

const leadOut = '</div>';

export default function getHelperMenuBlob() {
  return `${leadIn}`
    + `${character}`
    + `${actions}`
    + `${currentGuildId() ? guild : ''}`
    + `${extra}`
    + `${getValue('betaOptIn') ? betaSection : ''}`
    + `${bottomSection}`
    + `${calf.userIsDev ? devSection : ''}`
    + `${leadOut}`;
}
