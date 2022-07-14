import batch from '../../../common/batch';
import partial from '../../../common/partial';
import {
  ahSearchUrl,
  defSubcmd,
  guideUrl,
  rarity,
} from '../../../support/constants';
import task from '../../../support/task';
import {
  checkAllOfType,
  enableItemColoring,
  showExtraLinks,
  showQuickDropLinks,
  showQuickSendLinks,
} from './constants';
import getItems from './getItems';

function tally(acc, i) {
  acc[i] = (acc[i] || 0) + 1;
  return acc;
}

function buildItemHash(invItems) {
  return {
    ...invItems
      .map(([, i]) => i.item_id)
      .reduce(tally, {}),
    // Exclude composed pots
    13699: 1,
  };
}

const tooltip = (type) => ` data-tooltip="INSTANTLY ${
  type} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`;

const generalButton = (className, extra, text) => ` [<button class="fshStoreItemsButton ${
  className}"${extra}>${text}</button>]`;

const actionButton = (color, type, label) => generalButton(
  `${color} actionButton tooltip-multiline`,
  tooltip(type),
  `Quick ${label}`,
);

const aLink = (href, extra, text) => `[<a href="${href}"${extra}>${text}</a>]`;

function doAhLinks(invItem) {
  if (invItem.bound) {
    return '<span class="aHSpacer"></span>';
  }
  return aLink(`${ahSearchUrl}${encodeURIComponent(invItem.item_name)}`, '', 'AH');
}

const doUfsgLink = (invItem) => aLink(
  `${guideUrl}items${defSubcmd}view&item_id=${invItem.item_id}`,
  ' target="_blank"',
  'UFSG',
);

const hasMultiple = (prefs, itemHash, invItem) => prefs[checkAllOfType]
  && itemHash[invItem.item_id] > 1;

const canSend = (prefs, invItem) => prefs[showQuickSendLinks]
  && (!invItem.bound || invItem.guild_tag !== -1);

const canDrop = (prefs, invItem) => prefs[showQuickDropLinks] && invItem.guild_tag === -1;

function buildNewInner(acc, cur) {
  if (cur[0]()) { return acc + cur[1](); }
  return acc;
}

function getConditionalArray(prefs, itemHash, invItem) {
  return [
    [() => prefs[showExtraLinks], () => `${doAhLinks(invItem)} ${doUfsgLink(invItem)}`],
    [() => true, () => `&nbsp;${invItem.item_name}`],
    [
      () => hasMultiple(prefs, itemHash, invItem),
      () => generalButton('fshBlack', '', 'Check All'),
    ],
    [() => canSend(prefs, invItem), () => actionButton('fshBlue', 'SENDS', 'Send')],
    [() => canDrop(prefs, invItem), () => actionButton('fshRed', 'DROP', 'Drop')],
  ];
}

function decorateItems(prefs, itemHash, [inject, invItem]) {
  const thisTd = inject;
  if (prefs[enableItemColoring]) {
    thisTd.className = rarity[invItem.rarity].clas;
  }
  const newInner = getConditionalArray(prefs, itemHash, invItem).reduce(buildNewInner, '');
  if (thisTd.innerHTML !== newInner) {
    thisTd.innerHTML = newInner;
  }
}

export default async function updateDomItems(prefs) {
  const invItems = await getItems();
  const itemHash = prefs[checkAllOfType] ? buildItemHash(invItems) : [];
  task(3, batch, [[3, invItems, 0, partial(decorateItems, prefs, itemHash)]]);
}
