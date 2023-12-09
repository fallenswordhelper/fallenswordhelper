import daComposing from '../_dataAccess/daComposing';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import on from '../common/on';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import sum from '../common/sum';
import setText from '../dom/setText';
import { pcc } from '../support/layout';
import addCommas from '../system/addCommas';

let costs = [];

const setupCosts = (templates) => templates.map(({
  buffs,
  duration,
  id,
}) => ({
  cost: Math.max(buffs.map(({ level }) => level).reduce(sum, 0) * duration, 5000),
  id,
}));

const scenarios = [
  [
    (thisCost, existingCostDiv) => !thisCost && !existingCostDiv,
    () => 0,
  ],
  [
    (thisCost, existingCostDiv) => !thisCost && existingCostDiv,
    (select, thisCost, existingCostDiv) => existingCostDiv.remove(),
  ],
  [
    (thisCost, existingCostDiv) => thisCost && existingCostDiv,
    (select, thisCost, existingCostDiv) => setText(`Cost: ${addCommas(thisCost)}`, existingCostDiv),
  ],
  [
    (thisCost, existingCostDiv) => thisCost && !existingCostDiv,
    (select, thisCost) => insertHtmlBeforeEnd(
      select.parentNode,
      `<div class="fshBlue template-cost">Cost: ${addCommas(thisCost)}</div>`,
    ),
  ],
];

function injectCost(select) {
  const thisCost = costs.find(({ id }) => id === Number(select.value))?.cost;
  const existingCostDiv = querySelector('.template-cost', select.parentNode);
  const scenario = scenarios.find(([fn]) => fn(thisCost, existingCostDiv));
  if (scenario) scenario[1](select, thisCost, existingCostDiv);
}

function changeTemplate(e) {
  if (!/^composing-template-\d$/.test(e.target.id)) return;
  injectCost(e.target);
}

async function init(selectors) {
  const json = await daComposing();
  if (!json?.s) return;
  costs = setupCosts(json.r.templates);
  selectors.forEach(injectCost);
  on(pcc(), 'change', changeTemplate);
}

export default function costing() {
  const selectors = querySelectorArray(
    'select[id^=composing-template-]:not(#composing-template-multi)',
    pcc(),
  );
  if (!selectors.length) return;
  init(selectors);
}
