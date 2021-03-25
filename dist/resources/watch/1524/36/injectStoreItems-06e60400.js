import { c as closestTr } from './closestTr-062a6525.js';
import { d as daAjaxSendItemsToRecipient } from './daAjaxSendItemsToRecipient-59ab6e68.js';
import { c as calf, bq as profile, N as arrayFrom, h as hasClass, Y as sendEvent, F as querySelectorArray, C as getText, X as setValue, H as getTextTrim, aC as fromEntries, e as entries, a as add, s as partial, bc as ahSearchUrl, aE as guideUrl, au as defSubcmd, bo as rarity, y as jQueryNotPresent, I as getValue, o as onclick, p as pCC } from './calfSystem-c08399e5.js';
import { e as errorDialog } from './errorDialog-db13a69a.js';
import { g as getInventoryById } from './getInventoryById-22e9b0fe.js';
import { d as doStatTotal } from './doStatTotal-2476f0e1.js';
import { t as text, e as element, c as attr, i as insert, l as listen, n as noop, d as detach, p as empty, a as append, s as set_data, r as run_all, j as createEventDispatcher, S as SvelteComponent, m as init, o as safe_not_equal } from './index-c1b58941.js';
import { b as batch } from './batch-f79939df.js';

let checkboxes;
let haveCheckboxes;

function getCheckboxes() {
  if (!haveCheckboxes) {
    const cbName = calf.subcmd === 'dropitems' ? 'removeIndex[]' : 'storeIndex[]';
    checkboxes = document.forms[0].elements[cbName];
    haveCheckboxes = true;
  }
  return checkboxes;
}

var css$1 = ".fshStoreItemsButton {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-family : inherit;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  text-decoration: underline;\n  user-select: text;\n}\n.aHSpacer {\n  display: inline-block;\n  width: 1.9em;\n}\n.actionButton {\n  height: 1em;\n  position: relative;\n  width: 5.2em;\n}\n.inProgress {\n  cursor: default;\n  text-decoration: none;\n}\n";
var modules_ff912458 = {};

function dodropitems(itemsAry) {
  return profile({
    subcmd: 'dodropitems',
    removeIndex: itemsAry,
  });
}

function daDropItems(itemsAry) {
  return dodropitems(itemsAry);
}

function getCheckboxesArray() {
  const checkboxes = getCheckboxes();
  if (!checkboxes) { return []; }
  return arrayFrom(checkboxes instanceof RadioNodeList ? checkboxes : [checkboxes]);
}

function getCheckboxesVisible() {
  return getCheckboxesArray()
    .filter((cb) => !hasClass('fshHide', closestTr(cb)));
}

let invPrm;

function getInv() {
  if (!invPrm) {
    invPrm = getInventoryById();
  }
  return invPrm;
}

function getInvId(e) {
  return closestTr(e.target).cells[0].children[0].value;
}

async function doCheckAll(evt) {
  const { items } = await getInv();
  sendEvent('storeitems', 'Check All of Type');
  getCheckboxesVisible()
    .filter((cb) => items[cb.value] && items[cb.value].item_id === items[getInvId(evt)].item_id)
    .forEach((e) => { e.checked = !e.disabled && !e.checked; });
}

function startAction(target) {
  const thisRow = closestTr(target);
  thisRow.cells[0].children[0].disabled = true;
  querySelectorArray('.actionButton', thisRow)
    .forEach((e) => {
      e.disabled = true;
      e.textContent = '';
      e.removeAttribute('data-tooltip');
      e.classList.add('inProgress');
    });
  target.blur();
  target.classList.add('fshSpinner', 'fshSpinner12');
}

function endAction(e, success) {
  e.target.classList.remove('fshSpinner', 'fshSpinner12');
  e.target.classList.add('fshGreen');
  e.target.textContent = success;
}

async function actionHandler(e, fn, success) {
  startAction(e.target);
  const json = await fn([getInvId(e)]);
  if (json && json.s) {
    endAction(e, success);
  } else {
    errorDialog(json);
  }
}

const handler = [
  ['Check All', doCheckAll],
  ['Quick Send', (e) => {
    sendEvent('storeitems', 'Quick Send');
    actionHandler(e, daAjaxSendItemsToRecipient, 'Sent');
  }],
  ['Quick Drop', (e) => {
    sendEvent('storeitems', 'Quick Drop');
    actionHandler(e, daDropItems, 'Dropped');
  }],
];

function buttonPress(e) {
  if (e.target.tagName === 'A' && ['AH', 'UFSG'].includes(e.target.textContent)) {
    sendEvent('storeitems', e.target.textContent);
  }
  if (e.target.tagName !== 'BUTTON' || hasClass('custombutton', e.target)) { return; }
  const thisHandler = handler.find(([label]) => label === getText(e.target));
  if (thisHandler) { thisHandler[1](e); }
}

var css = "button.svelte-h3aclh{background:transparent;border:none;color:blue;cursor:pointer;font-family:inherit;font-size:12px;margin:0;padding:0;text-decoration:underline;user-select:text}button.svelte-h3aclh:first-of-type{width:11.8em}button.svelte-h3aclh:nth-of-type(2){width:10.6em}button.svelte-h3aclh:nth-of-type(3){width:10.8em}";
var modules_67d97e01 = {};

/* src\modules\guild\inventory\storeitems\ToggleButtons.svelte generated by Svelte v3.35.0 */

function create_if_block(ctx) {
	let t0;
	let button;
	let t2;
	let mounted;
	let dispose;

	return {
		c() {
			t0 = text("[");
			button = element("button");
			button.textContent = "Select All Guild Locked";
			t2 = text("]");
			attr(button, "class", "svelte-h3aclh");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, button, anchor);
			insert(target, t2, anchor);

			if (!mounted) {
				dispose = listen(button, "click", /*selectLocked*/ ctx[5]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(button);
			if (detaching) detach(t2);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let button0;
	let t1_value = /*label*/ ctx[2](/*showExtraLinks*/ ctx[0]) + "";
	let t1;
	let t2;
	let t3;
	let button1;
	let t4_value = /*label*/ ctx[2](/*showQuickDropLinks*/ ctx[1]) + "";
	let t4;
	let t5;
	let t6;
	let if_block_anchor;
	let mounted;
	let dispose;
	let if_block = calf.subcmd2 === "storeitems" && create_if_block(ctx);

	return {
		c() {
			t0 = text("[");
			button0 = element("button");
			t1 = text(t1_value);
			t2 = text(" AH and UFSG Links");
			t3 = text("] \n[");
			button1 = element("button");
			t4 = text(t4_value);
			t5 = text(" Quick Drop links");
			t6 = text("] \n");
			if (if_block) if_block.c();
			if_block_anchor = empty();
			attr(button0, "class", "svelte-h3aclh");
			attr(button1, "class", "svelte-h3aclh");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, button0, anchor);
			append(button0, t1);
			append(button0, t2);
			insert(target, t3, anchor);
			insert(target, button1, anchor);
			append(button1, t4);
			append(button1, t5);
			insert(target, t6, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*toggleShowExtraLinks*/ ctx[3]),
					listen(button1, "click", /*toggleShowQuickDropLinks*/ ctx[4])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*showExtraLinks*/ 1 && t1_value !== (t1_value = /*label*/ ctx[2](/*showExtraLinks*/ ctx[0]) + "")) set_data(t1, t1_value);
			if (dirty & /*showQuickDropLinks*/ 2 && t4_value !== (t4_value = /*label*/ ctx[2](/*showQuickDropLinks*/ ctx[1]) + "")) set_data(t4, t4_value);
			if (calf.subcmd2 === "storeitems") if_block.p(ctx, dirty);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(button0);
			if (detaching) detach(t3);
			if (detaching) detach(button1);
			if (detaching) detach(t6);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	const label = pref => pref ? "Hide" : "Show";
	let { showExtraLinks = false } = $$props;
	let { showQuickDropLinks = false } = $$props;

	function toggleShowExtraLinks() {
		sendEvent("storeitems", "toggleShowExtraLinks");
		$$invalidate(0, showExtraLinks = !showExtraLinks);
		setValue("showExtraLinks", showExtraLinks);
		dispatch("showExtraLinks", showExtraLinks);
	}

	function toggleShowQuickDropLinks() {
		sendEvent("storeitems", "toggleShowQuickDropLinks");
		$$invalidate(1, showQuickDropLinks = !showQuickDropLinks);
		setValue("showQuickDropLinks", showQuickDropLinks);
		dispatch("showQuickDropLinks", showQuickDropLinks);
	}

	function selectLocked() {
		sendEvent("storeitems", "selectLocked");
		dispatch("selectLocked");
	}

	$$self.$$set = $$props => {
		if ("showExtraLinks" in $$props) $$invalidate(0, showExtraLinks = $$props.showExtraLinks);
		if ("showQuickDropLinks" in $$props) $$invalidate(1, showQuickDropLinks = $$props.showQuickDropLinks);
	};

	return [
		showExtraLinks,
		showQuickDropLinks,
		label,
		toggleShowExtraLinks,
		toggleShowQuickDropLinks,
		selectLocked
	];
}

class ToggleButtons extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { showExtraLinks: 0, showQuickDropLinks: 1 });
	}
}

let itemsCache;

function updateName(checkboxes, item) {
  if (item.item_id !== 13699) { return item.item_name; }
  const thisItem = checkboxes.find((cb) => cb.value === String(item.inv_id));
  if (!thisItem) { return item.item_name; }
  return getTextTrim(thisItem.parentNode.parentNode.children[2]);
}

async function updateNamesForComposedPots(checkboxes) {
  const inv = await getInv();
  if (!inv || !inv.items) { return {}; }
  return fromEntries(entries(inv.items).map(([key, obj]) => [key, {
    ...obj,
    item_name: updateName(checkboxes, obj),
  }]));
}

async function getItemsFromInventory(checkboxes) {
  if (!itemsCache) {
    itemsCache = await updateNamesForComposedPots(checkboxes);
  }
  return itemsCache;
}

async function getItems() {
  const checkboxes = getCheckboxesArray();
  if (!checkboxes.length) { return []; }
  const items = await getItemsFromInventory(checkboxes);
  return checkboxes
    .map((cb) => [
      closestTr(cb).cells[2],
      items[cb.value],
    ])
    .filter(([, invItem]) => invItem);
}

const showExtraLinks = 0;
const enableItemColoring = 1;
const checkAllOfType = 2;
const showQuickSendLinks = 3;
const showQuickDropLinks = 4;
const prefTypes = [
  'showExtraLinks',
  'enableItemColoring',
  'checkAllOfType',
  'showQuickSendLinks',
  'showQuickDropLinks',
];

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

const generalButton = (className, extra, text) => `[<button class="fshStoreItemsButton ${
  className}"${extra}>${text}</button>]`;

const actionButton = (color, type, label) => ` ${generalButton(`${
  color} actionButton tooltip-multiline`, tooltip(type), `Quick ${label}`)}`;

const aLink = (href, extra, text) => `[<a href="${href}"${extra}>${text}</a>]`;

function doAhLinks(invItem) {
  if (invItem.bound) {
    return '<span class="aHSpacer"></span>';
  }
  return aLink(`${ahSearchUrl}${encodeURIComponent(invItem.item_name)}`, '', 'AH');
}

const doUfsgLink = (invItem) => aLink(`${guideUrl}items${defSubcmd}view&item_id=${invItem.item_id}`,
  ' target="_blank"', 'UFSG');

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
      () => ` ${generalButton('fshBlack', '', 'Check All')}`,
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

async function updateDomItems(prefs) {
  const invItems = await getItems();
  const itemHash = prefs[checkAllOfType] ? buildItemHash(invItems) : [];
  add(3, batch, [[5, 3, invItems, 0, partial(decorateItems, prefs, itemHash)]]);
}

function makeToggleButtons(prefs) {
  const form = document.forms[0];
  return new ToggleButtons({
    props: {
      showExtraLinks: prefs[showExtraLinks],
      showQuickDropLinks: prefs[showQuickDropLinks],
    },
    target: form.parentNode.children[5].children[0],
  });
}

async function selectLocked() {
  const visibleCheckboxes = getCheckboxesVisible();
  if (!visibleCheckboxes.length) { return; }
  const inv = await getInv();
  if (!inv || !inv.items) { return; }
  visibleCheckboxes
    .map((cb) => [cb, inv.items[cb.value]])
    .filter(([, invItem]) => invItem)
    .forEach(([e, invItem]) => {
      e.checked = !e.disabled && invItem.guild_tag !== -1;
    });
}

function doToggleButtons(ctx) {
  const toggleButtons = makeToggleButtons(ctx);
  toggleButtons.$on('showExtraLinks', (e) => {
    ctx[showExtraLinks] = e.detail;
    updateDomItems(ctx);
  });
  toggleButtons.$on('showQuickDropLinks', (e) => {
    ctx[showQuickDropLinks] = e.detail;
    updateDomItems(ctx);
  });
  toggleButtons.$on('selectLocked', () => {
    selectLocked();
  });
}

async function injectStoreItems() {
  if (jQueryNotPresent()) { return; }
  const checkboxes = getCheckboxes();
  if (!checkboxes) { return; }
  const prefs = prefTypes.map((p) => getValue(p));
  doStatTotal();
  doToggleButtons(prefs);
  if (prefs.some((v) => v)) {
    updateDomItems(prefs);
  }
  onclick(pCC, buttonPress);
}

export { getCheckboxes as a, getInv as b, getCheckboxesVisible as c, daDropItems as d, getCheckboxesArray as g, injectStoreItems as i };
//# sourceMappingURL=injectStoreItems-06e60400.js.map