import getText from '../../common/getText';
import regExpExec from '../../common/regExpExec';
import toLowerCase from '../../common/toLowerCase';

const numRE = /[^a-zA-Z0-9.,+\- ]/g;
let priceRe = 0;
const priceTypes = [
  '(?<k>[+-]?[.\\d]{1,10} {0,10}k)',
  '(?<fsp>[+-]?[.\\d]{1,10} {0,10}fsp)',
  '(?<stam>[+-]?[.\\d]{1,10} {0,10}stam)',
];

function getPriceRe() {
  if (!priceRe) {
    priceRe = new RegExp(priceTypes.join('|'));
  }
  return priceRe;
}

function thisLine(node) {
  return node && node.nodeName !== 'BR';
}

function formatPrice(text) {
  return regExpExec(getPriceRe(), toLowerCase(text.replace(numRE, '')));
}

function priceAfterName(buffNameNode) {
  let text = '';
  let node = buffNameNode;
  // get the whole line from the buff name towards the end (even after
  // the ',', in case of 'AL, Lib, Mer: 10k each'
  while (thisLine(node)) {
    const newtext = getText(node);
    node = node.nextSibling; // Text Node
    text += newtext;
  }
  return formatPrice(text);
}

function priceBeforeName(buffNameNode) {
  let text = '';
  let node = buffNameNode;
  while (thisLine(node)) {
    const newtext = getText(node);
    node = node.previousSibling; // Text Node
    text = newtext + text;
  }
  return formatPrice(text);
}

export default function getPrice(buffNameNode) {
  let price = priceAfterName(buffNameNode);
  if (!price) { // some players have prices BEFORE the buff names
    price = priceBeforeName(buffNameNode);
  }
  return price;
}
