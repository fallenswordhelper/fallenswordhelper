import partial from '../../common/partial';
import calf from '../../support/calf';
import {
  playerIdUrl,
  secureUrl,
  tradeUrl,
} from '../../support/constants';
import { getNowSecs } from '../../support/now';
import formatLastActivity from '../../system/formatLastActivity';
import {
  enemyBuffCheckOn,
  enemyQuickbuff,
  enemySendMessage,
} from './constants';

export const contactClass = [
  [(n) => n < 120, 'fshDodgerBlue', 'fshRed'],
  [(n) => n < 300, 'fshDodgerBlue', 'fshRed'],
  [() => true, 'fshPowderBlue', 'fshPink'],
];

function allyOrEnemy(type, test) {
  if (type) { return test[1]; }
  return test[2];
}

function band(lastLogin, ary) {
  return ary[0](getNowSecs() - lastLogin);
}

function contactColor(lastLogin, type) {
  const test = contactClass.find(partial(band, lastLogin));
  if (test) { return allyOrEnemy(type, test); }
  return 'fshWhite';
}

function playerName(val, type) {
  return `<a class="player-name tip-static ${
    contactColor(val.last_login, type)}" data-tipped="<b>${val.username
  }</b><br><table><tbody><tr><td>Level:</td><td>${val.level
  }</td></tr><tr><td>Last Activity:</td><td>${
    formatLastActivity(val.last_login)}</td></tr></tbody></table>" href="${
    playerIdUrl}${val.id}">${val.username}</a>`;
}

function doBuffCheck() {
  if (!calf.hideBuffSelected) {
    return `<span class="${enemyBuffCheckOn}"></span>`;
  }
  return '';
}

function doMsgButton() {
  if (!calf.hideGuildInfoMessage) {
    return `<span class="${enemySendMessage} enemy-icon `
      + 'guild-minibox-action tip-static" data-tipped="Send Message"></span>';
  }
  return '';
}

function doBuffButton() {
  if (!calf.hideGuildInfoBuff) {
    return `<span class="${enemyQuickbuff} enemy-icon `
      + 'guild-minibox-action tip-static" data-tipped="Quick Buff"></span>';
  }
  return '';
}

function doSecureButton(val) {
  if (!calf.hideGuildInfoSecureTrade) {
    return '<a class="enemy-secure-trade enemy-icon guild-minibox-action'
      + ` tip-static" href="${secureUrl}${
        val.username}" data-tipped="Secure Trade"></a>`;
  }
  return '';
}

function doTradeButton(val) {
  if (!calf.hideGuildInfoTrade) {
    return '<a class="enemy-trade enemy-icon guild-minibox-action '
      + `tip-static" href="${tradeUrl}${
        val.username}" data-tipped="Send Gold/Items/FSP"></a>`;
  }
  return '';
}

function recent(val) {
  return getNowSecs() - val.last_login < 1800;
}

function addContact(type, val) {
  return `<li class="player"><div class="player-row">${
    doBuffCheck()
  }${playerName(val, type)
  }</div><div class="guild-minibox-actions">${
    doMsgButton()
  }${doBuffButton()
  }${doSecureButton(val)
  }${doTradeButton(val)
  }</div></li>`;
}

export default function addContacts(contactList, type) {
  return contactList.filter(recent).map(partial(addContact, type)).join('');
}
