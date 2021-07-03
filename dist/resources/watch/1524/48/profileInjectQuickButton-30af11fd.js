import { e as element, t as text, a as attr, i as insert, b as append, l as listen, n as noop, d as detach, y as set_style, s as space, r as run_all, S as SvelteComponent, f as init, g as safe_not_equal } from './index-204d2a24.js';
import { aC as cdn, I as getValue, c as calf, S as getUrlParameter, aM as playerId, T as sendEvent, cd as joinGroups, N as navigateTo, ce as auctionhouseUrl, an as secureUrl, bJ as recallUserUrl, v as guildSubcmdUrl, E as querySelector } from './calfSystem-2bd62864.js';
import { c as currentGuildId } from './currentGuildId-df5d894a.js';
import { a as getIsOwnGuild } from './getIsOwnGuild-f83c534b.js';
import { a as getPlayerName } from './profile-35a8fe4a.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-88623c19.js';
import './colouredDots-a3348b89.js';
import './batch-2edf8948.js';
import './onlineDot-a366f5a2.js';
import './doStatTotal-51ffad44.js';
import './executeAll-ff401d51.js';
import './playerName-5ee9cf5c.js';
import './asInt-996743a7.js';
import './intValue-9eb5015a.js';
import './valueText-91a223ca.js';
import './interceptSubmit-f4d0267f.js';
import './formToUrl-fa381d4d.js';
import './fshOpen-b549d330.js';

var css = "button.svelte-1xo8gqh{background-color:transparent;background-position:center;background-repeat:no-repeat;border:none;cursor:pointer;height:17px;margin:auto 2px;width:17px;user-select:none}";
var modules_8232393c = {};

/* src\modules\profile\profileInjectQuickButton\QuickButtons.svelte generated by Svelte v3.38.3 */

function create_if_block_1(ctx) {
	let button;
	let t;
	let button_data_tooltip_value;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			t = text(" ");
			attr(button, "class", "fshTempleThree svelte-1xo8gqh");
			attr(button, "type", "button");
			attr(button, "data-tooltip", button_data_tooltip_value = "Recall items from " + /*playername*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t);

			if (!mounted) {
				dispose = listen(button, "click", /*recall*/ ctx[7]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

// (89:2) {#if ownGuild && getValue('showAdmin')}
function create_if_block(ctx) {
	let button;
	let t;
	let button_data_tooltip_value;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			t = text(" ");
			set_style(button, "background-image", "url('" + cdn + "guilds/" + currentGuildId() + "_mini.png')");
			attr(button, "type", "button");
			attr(button, "data-tooltip", button_data_tooltip_value = "Rank " + /*playername*/ ctx[2]);
			attr(button, "class", "svelte-1xo8gqh");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t);

			if (!mounted) {
				dispose = listen(button, "click", /*rank*/ ctx[8]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div;
	let button0;
	let t0;
	let button0_data_tooltip_value;
	let t1;
	let button1;
	let t2;
	let button1_data_tooltip_value;
	let t3;
	let button2;
	let t4;
	let button2_data_tooltip_value;
	let t5;
	let button3;
	let t6;
	let button3_data_tooltip_value;
	let t7;
	let t8;
	let show_if = /*ownGuild*/ ctx[1] && getValue("showAdmin");
	let mounted;
	let dispose;
	let if_block0 = /*ownGuild*/ ctx[1] && create_if_block_1(ctx);
	let if_block1 = show_if && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			button0 = element("button");
			t0 = text(" ");
			t1 = space();
			button1 = element("button");
			t2 = text(" ");
			t3 = space();
			button2 = element("button");
			t4 = text(" ");
			t5 = space();
			button3 = element("button");
			t6 = text(" ");
			t7 = space();
			if (if_block0) if_block0.c();
			t8 = space();
			if (if_block1) if_block1.c();
			attr(button0, "class", "fshQuickBuff svelte-1xo8gqh");
			attr(button0, "type", "button");
			attr(button0, "data-tooltip", button0_data_tooltip_value = "Buff " + /*playername*/ ctx[2]);
			attr(button1, "class", "fshJoin svelte-1xo8gqh");
			attr(button1, "type", "button");
			attr(button1, "data-tooltip", button1_data_tooltip_value = "Join All Groups" + /*joinTip*/ ctx[0]);
			attr(button2, "class", "fshGold svelte-1xo8gqh");
			attr(button2, "type", "button");
			attr(button2, "data-tooltip", button2_data_tooltip_value = "Go to " + /*playername*/ ctx[2] + "'s auctions");
			attr(button3, "class", "fshTempleTwo svelte-1xo8gqh");
			attr(button3, "type", "button");
			attr(button3, "data-tooltip", button3_data_tooltip_value = "Create Secure Trade to " + /*playername*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, button0);
			append(button0, t0);
			append(div, t1);
			append(div, button1);
			append(button1, t2);
			append(div, t3);
			append(div, button2);
			append(button2, t4);
			append(div, t5);
			append(div, button3);
			append(button3, t6);
			append(div, t7);
			if (if_block0) if_block0.m(div, null);
			append(div, t8);
			if (if_block1) if_block1.m(div, null);

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*quickbuff*/ ctx[3]),
					listen(button1, "click", /*join*/ ctx[4]),
					listen(button2, "click", /*auctions*/ ctx[5]),
					listen(button3, "click", /*sTrade*/ ctx[6])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*ownGuild*/ ctx[1]) if_block0.p(ctx, dirty);
			if (show_if) if_block1.p(ctx, dirty);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self) {
	const joinTip = calf.enableMaxGroupSizeToJoin
	? ` < ${calf.maxGroupSizeToJoin} Members`
	: "";

	const ownGuild = getIsOwnGuild();
	const playerid = getUrlParameter("player_id") || playerId();
	const playername = getPlayerName();

	function qbEvent(eventLabel) {
		sendEvent("profile", "quick button", eventLabel);
	}

	function quickbuff(e) {
		e.target.blur();
		qbEvent("quickbuff");
		openQuickBuffByName(playername);
	}

	function join() {
		qbEvent("join groups");
		joinGroups();
	}

	function auctions() {
		qbEvent("auctions");
		navigateTo(`${auctionhouseUrl}&type=-3&tid=${playerid}`);
	}

	function sTrade() {
		qbEvent("secure trade");
		navigateTo(`${secureUrl}${playername}`);
	}

	function recall() {
		qbEvent("recall items");
		navigateTo(`${recallUserUrl}${playername}`);
	}

	function rank() {
		qbEvent("rank");
		navigateTo(`${guildSubcmdUrl}members&subcmd2=changerank&member_id=${playerid}`);
	}

	return [joinTip, ownGuild, playername, quickbuff, join, auctions, sTrade, recall, rank];
}

class QuickButtons extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

function profileInjectQuickButton() {
  const avyImg = querySelector(
    '#profileLeftColumn img[src*="/avatars/"][width="200"]',
  );
  if (!avyImg) { return; }
  // eslint-disable-next-line no-new
  new QuickButtons({
    anchor: avyImg.nextElementSibling,
    target: avyImg.parentNode,
  });
}

export default profileInjectQuickButton;
//# sourceMappingURL=profileInjectQuickButton-30af11fd.js.map
