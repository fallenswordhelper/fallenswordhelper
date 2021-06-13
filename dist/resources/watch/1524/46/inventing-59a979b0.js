import { q as identity, u as assign, v as is_function, e as element, b as space, t as text, w as set_style, i as insert, a as append, s as set_data, f as add_render_callback, x as create_bidirectional_transition, d as detach, c as attr, y as set_input_value, l as listen, z as prevent_default, A as to_number, B as transition_in, C as group_outros, D as transition_out, E as check_outros, r as run_all, S as SvelteComponent, m as init, o as safe_not_equal } from './index-951c44b6.js';
import { x as callApp, w as infoBoxFrom, u as indexAjaxData, $ as $dataAccess, T as sendEvent, C as getText, E as querySelector, F as querySelectorArray, az as cdn, p as pCC, aO as guideUrl, aF as defSubcmd, i as insertElement, j as jQueryPresent } from './calfSystem-86663d02.js';
import { c as createAnchor } from './createAnchor-d07f32b5.js';
import { i as insertElementBefore } from './insertElementBefore-c2bb9234.js';
import { x as xPath } from './xPath-4050d799.js';

function doinvent(recipe) {
  return callApp({
    cmd: 'inventing',
    subcmd: 'doinvent',
    recipe_id: recipe,
  });
}

function formatResult(html) {
  const info = infoBoxFrom(html);
  if (info.includes('successfully')) {
    return { r: { item: {} }, s: true };
  }
  return { e: { message: info }, s: false };
}

function invent(recipe) {
  return indexAjaxData({
    cmd: 'inventing',
    subcmd: 'doinvent',
    recipe_id: recipe,
  }).then(formatResult);
}

function daDoInvent(recipe) {
  return $dataAccess(doinvent, invent, recipe);
}

/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/
function backInOut(t) {
    const s = 1.70158 * 1.525;
    if ((t *= 2) < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
}
function backOut(t) {
    const s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
}
function bounceOut(t) {
    const a = 4.0 / 11.0;
    const b = 8.0 / 11.0;
    const c = 9.0 / 10.0;
    const ca = 4356.0 / 361.0;
    const cb = 35442.0 / 1805.0;
    const cc = 16061.0 / 1805.0;
    const t2 = t * t;
    return t < a
        ? 7.5625 * t2
        : t < b
            ? 9.075 * t2 - 9.9 * t + 3.4
            : t < c
                ? ca * t2 - cb * t + cc
                : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
    return t < 0.5
        ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
        : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}
function bounceIn(t) {
    return 1.0 - bounceOut(1.0 - t);
}
function circInOut(t) {
    if ((t *= 2) < 1)
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
    return 1.0 - Math.sqrt(1.0 - t * t);
}
function circOut(t) {
    return Math.sqrt(1 - --t * t);
}
function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function elasticInOut(t) {
    return t < 0.5
        ? 0.5 *
            Math.sin(((+13.0 * Math.PI) / 2) * 2.0 * t) *
            Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
        : 0.5 *
            Math.sin(((-13.0 * Math.PI) / 2) * (2.0 * t - 1.0 + 1.0)) *
            Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) +
            1.0;
}
function elasticIn(t) {
    return Math.sin((13.0 * t * Math.PI) / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}
function elasticOut(t) {
    return (Math.sin((-13.0 * (t + 1.0) * Math.PI) / 2) * Math.pow(2.0, -10.0 * t) + 1.0);
}
function expoInOut(t) {
    return t === 0.0 || t === 1.0
        ? t
        : t < 0.5
            ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
}
function expoIn(t) {
    return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}
function expoOut(t) {
    return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}
function quadInOut(t) {
    t /= 0.5;
    if (t < 1)
        return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return -t * (t - 2.0);
}
function quartInOut(t) {
    return t < 0.5
        ? +8.0 * Math.pow(t, 4.0)
        : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}
function quartIn(t) {
    return Math.pow(t, 4.0);
}
function quartOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}
function quintInOut(t) {
    if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function quintIn(t) {
    return t * t * t * t * t;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}
function sineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
    const v = Math.cos(t * Math.PI * 0.5);
    if (Math.abs(v) < 1e-14)
        return 1;
    else
        return 1 - v;
}
function sineOut(t) {
    return Math.sin((t * Math.PI) / 2);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function blur(node, { delay = 0, duration = 400, easing = cubicInOut, amount = 5, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const f = style.filter === 'none' ? '' : style.filter;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `opacity: ${target_opacity - (od * u)}; filter: ${f} blur(${u * amount}px);`
    };
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
        delay,
        duration,
        easing,
        css: t => 'overflow: hidden;' +
            `opacity: ${Math.min(t * 20, 1) * opacity};` +
            `height: ${t * height}px;` +
            `padding-top: ${t * padding_top}px;` +
            `padding-bottom: ${t * padding_bottom}px;` +
            `margin-top: ${t * margin_top}px;` +
            `margin-bottom: ${t * margin_bottom}px;` +
            `border-top-width: ${t * border_top_width}px;` +
            `border-bottom-width: ${t * border_bottom_width}px;`
    };
}
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - (sd * u)});
			opacity: ${target_opacity - (od * u)}
		`
    };
}
function draw(node, { delay = 0, speed, duration, easing = cubicInOut } = {}) {
    const len = node.getTotalLength();
    if (duration === undefined) {
        if (speed === undefined) {
            duration = 800;
        }
        else {
            duration = len / speed;
        }
    }
    else if (typeof duration === 'function') {
        duration = duration(len);
    }
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
    };
}
function crossfade(_a) {
    var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade(from, node, params) {
        const { delay = 0, duration = d => Math.sqrt(d) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        const opacity = +style.opacity;
        return {
            delay,
            duration: is_function(duration) ? duration(d) : duration,
            easing,
            css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
    }
    function transition(items, counterparts, intro) {
        return (node, params) => {
            items.set(params.key, {
                rect: node.getBoundingClientRect()
            });
            return () => {
                if (counterparts.has(params.key)) {
                    const { rect } = counterparts.get(params.key);
                    counterparts.delete(params.key);
                    return crossfade(rect, node, params);
                }
                // if the node is disappearing altogether
                // (i.e. wasn't claimed by the other list)
                // then we need to supply an outro
                items.delete(params.key);
                return fallback && fallback(node, params, intro);
            };
        };
    }
    return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
    ];
}

/* src\modules\inventing\QuickInvent.svelte generated by Svelte v3.38.2 */

function create_if_block(ctx) {
	let div2;
	let div0;
	let t1;
	let div1;
	let t2;
	let div2_transition;
	let current;

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			div0.textContent = "INFORMATION";
			t1 = space();
			div1 = element("div");
			t2 = text(/*errorMessage*/ ctx[4]);
			set_style(div0, "background", "#8E8668");
			set_style(div0, "color", "#FFF");
			set_style(div0, "font-size", "smaller");
			set_style(div2, "border", "2px solid #FFF");
			set_style(div2, "margin", "10px auto");
			set_style(div2, "width", "80%");
			set_style(div2, "background", "#D3CFC1");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div2, t1);
			append(div2, div1);
			append(div1, t2);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*errorMessage*/ 16) set_data(t2, /*errorMessage*/ ctx[4]);
		},
		i(local) {
			if (current) return;

			if (local) {
				add_render_callback(() => {
					if (!div2_transition) div2_transition = create_bidirectional_transition(div2, slide, {}, true);
					div2_transition.run(1);
				});
			}

			current = true;
		},
		o(local) {
			if (local) {
				if (!div2_transition) div2_transition = create_bidirectional_transition(div2, slide, {}, false);
				div2_transition.run(0);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (detaching && div2_transition) div2_transition.end();
		}
	};
}

function create_fragment(ctx) {
	let form;
	let label;
	let t1;
	let input0;
	let t2;
	let button;
	let t4;
	let input1;
	let t5;
	let div5;
	let t6;
	let div1;
	let div0;
	let t7;
	let p;
	let t8_value = /*successes*/ ctx[1] + /*failures*/ ctx[2] + "";
	let t8;
	let t9;
	let t10;
	let t11;
	let div4;
	let div2;
	let t12;
	let t13;
	let t14;
	let div3;
	let t15;
	let t16;
	let mounted;
	let dispose;
	let if_block = /*errorMessage*/ ctx[4] && create_if_block(ctx);

	return {
		c() {
			form = element("form");
			label = element("label");
			label.textContent = "Select how many to quick invent";
			t1 = space();
			input0 = element("input");
			t2 = space();
			button = element("button");
			button.textContent = "(max)";
			t4 = space();
			input1 = element("input");
			t5 = space();
			div5 = element("div");
			if (if_block) if_block.c();
			t6 = space();
			div1 = element("div");
			div0 = element("div");
			t7 = space();
			p = element("p");
			t8 = text(t8_value);
			t9 = text(" / ");
			t10 = text(/*amountToInvent*/ ctx[0]);
			t11 = space();
			div4 = element("div");
			div2 = element("div");
			t12 = text("Successes: ");
			t13 = text(/*successes*/ ctx[1]);
			t14 = space();
			div3 = element("div");
			t15 = text("Failures: ");
			t16 = text(/*failures*/ ctx[2]);
			attr(label, "for", "quick-invent-amount");
			attr(input0, "type", "number");
			attr(input0, "id", "quick-invent-amount");
			attr(input0, "name", "quick-invent-amount");
			attr(input0, "min", "0");
			attr(input0, "step", "1");
			attr(input0, "class", "custominput fshNumberInput");
			input0.required = true;
			attr(button, "type", "button");
			attr(button, "class", "fshBl");
			attr(input1, "class", "custombutton");
			attr(input1, "type", "submit");
			input1.value = "Quick Invent";
			set_style(input1, "margin-left", "8px");
			attr(div0, "class", "composing-progress-bar");
			set_style(div0, "background-position", "right top");
			set_style(div0, "width", /*progress*/ ctx[3] + "%");
			set_style(div0, "transition", "width 0.4s ease-out");
			set_style(div0, "position", "absolute");
			set_style(div0, "top", "0px");
			set_style(p, "position", "relative");
			attr(div1, "class", "composing-progress");
			set_style(div1, "margin", "0px auto");
			set_style(div1, "font-weight", "bold");
			set_style(div1, "color", "#fff");
			set_style(div1, "left", "0px");
			set_style(div2, "display", "inline-block");
			set_style(div2, "width", "250px");
			attr(div2, "class", "fshQs fshGreen");
			set_style(div3, "display", "inline-block");
			set_style(div3, "width", "250px");
			attr(div3, "class", "fshQs fshRed");
			set_style(div4, "margin-top", "36px");
			attr(form, "class", "fshCenter");
			set_style(form, "margin-top", "12px");
		},
		m(target, anchor) {
			insert(target, form, anchor);
			append(form, label);
			append(form, t1);
			append(form, input0);
			set_input_value(input0, /*amountToInvent*/ ctx[0]);
			append(form, t2);
			append(form, button);
			append(form, t4);
			append(form, input1);
			append(form, t5);
			append(form, div5);
			if (if_block) if_block.m(div5, null);
			append(div5, t6);
			append(div5, div1);
			append(div1, div0);
			append(div1, t7);
			append(div1, p);
			append(p, t8);
			append(p, t9);
			append(p, t10);
			append(div5, t11);
			append(div5, div4);
			append(div4, div2);
			append(div2, t12);
			append(div2, t13);
			append(div4, t14);
			append(div4, div3);
			append(div3, t15);
			append(div3, t16);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[9]),
					listen(button, "click", /*maxInvent*/ ctx[5]),
					listen(form, "submit", prevent_default(/*quickInvent*/ ctx[6]))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*amountToInvent*/ 1 && to_number(input0.value) !== /*amountToInvent*/ ctx[0]) {
				set_input_value(input0, /*amountToInvent*/ ctx[0]);
			}

			if (/*errorMessage*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*errorMessage*/ 16) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div5, t6);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (dirty & /*progress*/ 8) {
				set_style(div0, "width", /*progress*/ ctx[3] + "%");
			}

			if (dirty & /*successes, failures*/ 6 && t8_value !== (t8_value = /*successes*/ ctx[1] + /*failures*/ ctx[2] + "")) set_data(t8, t8_value);
			if (dirty & /*amountToInvent*/ 1) set_data(t10, /*amountToInvent*/ ctx[0]);
			if (dirty & /*successes*/ 2) set_data(t13, /*successes*/ ctx[1]);
			if (dirty & /*failures*/ 4) set_data(t16, /*failures*/ ctx[2]);
		},
		i(local) {
			transition_in(if_block);
		},
		o(local) {
			transition_out(if_block);
		},
		d(detaching) {
			if (detaching) detach(form);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { max } = $$props;
	let { recipeID } = $$props;
	let amountToInvent = 1;
	let successes = 0;
	let failures = 0;
	let progress = 0;
	let errorMessage = "";

	function reset() {
		$$invalidate(1, successes = 0);
		$$invalidate(2, failures = 0);
		$$invalidate(3, progress = 0);
		$$invalidate(4, errorMessage = "");
	}

	function maxInvent() {
		$$invalidate(0, amountToInvent = max);
		sendEvent("inventing", "maxInventButton");
	}

	async function quickInvent() {
		sendEvent("inventing", "quickInvent");

		if (!amountToInvent) {
			return;
		}

		reset();
		const requests = Array(amountToInvent).fill(recipeID);

		requests.reduce(
			async (prev, recipe) => {
				const prevData = await prev;

				if (!prevData || prevData.s === true) {
					const data = await daDoInvent(recipe);
					if (data.s === false) $$invalidate(4, errorMessage = data.e.message); else if (data.r.success_count > 0) $$invalidate(1, successes += 1); else $$invalidate(2, failures += 1);
					$$invalidate(3, progress = 100 * ((successes + failures) / amountToInvent));
					return data;
				}

				return prevData;
			},
			Promise.resolve()
		);
	}

	function input0_input_handler() {
		amountToInvent = to_number(this.value);
		$$invalidate(0, amountToInvent);
	}

	$$self.$$set = $$props => {
		if ("max" in $$props) $$invalidate(7, max = $$props.max);
		if ("recipeID" in $$props) $$invalidate(8, recipeID = $$props.recipeID);
	};

	return [
		amountToInvent,
		successes,
		failures,
		progress,
		errorMessage,
		maxInvent,
		quickInvent,
		max,
		recipeID,
		input0_input_handler
	];
}

class QuickInvent extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { max: 7, recipeID: 8 });
	}
}

function parseIngredientTable(table) {
  const [have, need] = getText(querySelector('tr:nth-child(2) td', table)).split('/').map((v) => parseInt(v, 10));
  return {
    have,
    need,
    id: querySelector('img', table).src.match(/(\d+)\.[A-Za-z]+$/)[1],
  };
}

function ingredients() {
  const ingredientTables = querySelectorArray(
    `#pCC td[background^="${cdn}ui/inventory/"]`,
  ).map((td) => td.parentElement.parentElement);
  return ingredientTables.map(parseIngredientTable);
}

function parseRecipe() {
  const ingredientsArray = ingredients();
  return ingredientsArray.reduce(
    (max, ingred) => Math.min(max, Math.floor(ingred.have / ingred.need)),
    Infinity,
  );
}

function startApp(props, target) {
  return new QuickInvent({
    props,
    target,
  });
}

function addSep(injector) {
  const sepRow = injector.insertRow(-1);
  const sepCell = sepRow.insertCell(-1);
  sepCell.className = 'header';
  sepCell.setAttribute('height', '1');
}

function injectInvent() {
  const recipeID = querySelector('input[name="recipe_id"]').value;
  const max = parseRecipe();
  const injector = pCC.lastElementChild;

  addSep(injector);

  const myRow = injector.insertRow(-1);
  const myCell = myRow.insertCell(-1);
  myCell.className = 'fshCenter';
  const props = { max, recipeID };
  startApp(props, myCell);
}

function getItemId(el) {
  if (!el) { return; }
  const match = el.src.match(/\/items\/(\d+)\.gif/);
  if (match) { return match[1]; }
}

function guideItemHref(itemId) {
  return `${guideUrl}items${defSubcmd}view&item_id=${itemId}`;
}

function makeGuideItemAnchor(itemId) {
  return createAnchor({
    href: guideItemHref(itemId),
    target: '_blank',
  });
}

function wrapInGuideLink(el, source) {
  const itemId = getItemId(source);
  if (!itemId) { return; }
  const myLink = makeGuideItemAnchor(itemId);
  insertElementBefore(myLink, el);
  insertElement(myLink, el);
}

function wrapImgInGuideLink(el) {
  wrapInGuideLink(el, el);
}

function makeNameLink() {
  const source = xPath(
    './/b[.="Target Invention"]/../../following-sibling::*[1]//img',
  );
  const recipe = querySelector('#pCC b');
  wrapInGuideLink(recipe, source);
}

function makeIngredientLinks() {
  const ingredients = querySelectorArray('#pCC img[src*="/items/"]');
  ingredients.forEach(wrapImgInGuideLink);
}

function injectViewRecipe() {
  makeNameLink();
  makeIngredientLinks();
}

function inventing() {
  if (jQueryPresent()) {
    injectViewRecipe();
    injectInvent();
  }
}

export default inventing;
//# sourceMappingURL=inventing-59a979b0.js.map
