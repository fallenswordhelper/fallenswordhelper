import calf from '../../support/calf';
import getElementsByTagName from '../../common/getElementsByTagName';
import { getPcc } from '../../support/layout';
import getText from '../../common/getText';
import getValue from '../../system/getValue';
import keys from '../../common/keys';
import partial from '../../common/partial';
import playerName from '../../common/playerName';
import sendEvent from '../../analytics/sendEvent';
import trim from '../../common/trim';

function profileBuyBuffsEvent() {
  if (calf.subcmd === '-') { sendEvent('profile', 'formatBuffsToBuy'); }
}

function getTargetPlayer() {
  let targetPlayer = getElementsByTagName('h1', getPcc());
  if (targetPlayer.length !== 0) {
    targetPlayer = getText(targetPlayer[0]);
  } else {
    targetPlayer = playerName();
  }
  return targetPlayer;
}

const buyFormatter = [
  [
    (greetingText) => !greetingText.includes('{buffs}'),
    (greetingText, buffsToBuy) => `${greetingText} ${buffsToBuy}`,
  ],
  [
    (greetingText) => !greetingText.includes('{cost}'),
    (greetingText, buffsToBuy) => greetingText
      .replace(/{buffs}/g, `\`~${buffsToBuy}~\``),
  ],
  [
    () => true,
    (greetingText, buffsToBuy, buffCost) => greetingText
      .replace(/{buffs}/g, `\`~${buffsToBuy}~\``)
      .replace(/{cost}/g, buffCost.buffCostTotalText),
  ],
];

function formatToUse(greetingText, el) { return el[0](greetingText); }

function formatGreetingText(greetingText, buffCost) {
  return buyFormatter.find(partial(formatToUse, greetingText))[1](
    greetingText,
    keys(buffCost.buffs).join(', '),
    buffCost,
  );
}

function formatBuffsToBuy(buffCost) { // Legacy
  profileBuyBuffsEvent();
  const targetPlayer = getTargetPlayer();
  let greetingText = trim(getValue('buyBuffsGreeting'));
  greetingText = greetingText.replace(/{playername}/g, targetPlayer);
  greetingText = formatGreetingText(greetingText, buffCost);
  window.openQuickMsgDialog(targetPlayer, greetingText, '');
}

export default function getBuffsToBuy(buffCost) { // Legacy
  if (buffCost.count > 0) { formatBuffsToBuy(buffCost); }
}
