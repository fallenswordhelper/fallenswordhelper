import createDiv from '../../../common/cElement/createDiv';
import partial from '../../../common/partial';

const fastBpHtml = '<span class="sendLink fast-bp">Fast BP</span> | ';
const fastGsHtml = '<span class="sendLink fast-gs">Fast GS</span>';
const fastWearHtml = ' | <span class="sendLink fast-wear">Fast Wear</span>';
let wearRE = 0;
let gs = 0;
let bp = 0;
let wearableBp = 0;
let wearableGs = 0;

function getWearRe() {
  if (!wearRE) {
    wearRE = new RegExp(
      '<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|' +
        'Gut Rot Head Splitter|Serum',
    );
  }
  return wearRE;
}

function fastBp() {
  if (!bp) {
    bp = createDiv({ innerHTML: fastBpHtml + fastGsHtml });
  }
  return bp.cloneNode(true);
}

function fastWearableBp() {
  if (!wearableBp) {
    wearableBp = createDiv({
      innerHTML: fastBpHtml + fastGsHtml + fastWearHtml,
    });
  }
  return wearableBp.cloneNode(true);
}

function fastGs() {
  if (!gs) {
    gs = createDiv({ innerHTML: fastGsHtml });
  }
  return gs.cloneNode(true);
}

function fastWearableGs() {
  if (!wearableGs) {
    wearableGs = createDiv({ innerHTML: fastGsHtml + fastWearHtml });
  }
  return wearableGs.cloneNode(true);
}

const lookup = [
  [true, true, fastWearableBp],
  [true, false, fastWearableGs],
  [false, true, fastBp],
  [false, false, fastGs],
];

function theArray(thisWearable, thisBp, arr) {
  return arr[0] === thisWearable && arr[1] === thisBp;
}

export default function makeFastRecall(el) {
  const thisWearable = !getWearRe().test(el.previousElementSibling.innerHTML);
  const thisBp = el.children.length === 2;
  return lookup.find(partial(theArray, thisWearable, thisBp))[2]();
}
