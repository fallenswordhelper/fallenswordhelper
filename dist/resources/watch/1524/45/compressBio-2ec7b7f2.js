import { c as createInput } from './createInput-3da13004.js';
import { c as createLabel } from './createLabel-e0feeef0.js';
import { k as on, s as partial, T as sendEvent, z as getElementById } from './calfSystem-02fd040d.js';
import { i as insertElementBefore } from './insertElementBefore-c442a2a7.js';

var css = ".fshCompressor {\n  margin-bottom: 0.5em;\n  padding-bottom: 0.5em;\n  position: relative;\n}\n\n.fshCompressor > label {\n  position: absolute;\n  top: 100%;\n}\n\n.fshCompressor > input {\n  display: none;\n}\n\n.fshCompressor > label:after {\n  content: \"More ...\";\n}\n\n.fshCompressor > input:checked + label:after {\n  content: \"Less ...\";\n}\n\n.fshCompressor > input ~ div {\n  height: 10em;\n  overflow: hidden;\n}\n\n.fshCompressor > input:checked ~ div {\n  height: 100%;\n}\n";
var modules_09ddb631 = {};

function injectToggle(bioCell) {
  const toggle = insertElementBefore(
    createInput({ id: 'fshCompressToggle', type: 'checkbox' }),
    bioCell,
  );
  on(toggle, 'change', partial(sendEvent, 'bio', 'toggle'));
}

function doCompression(bioCell) {
  bioCell.parentNode.classList.add('fshCompressor');
  injectToggle(bioCell);
  insertElementBefore(
    createLabel({ className: 'sendLink', htmlFor: 'fshCompressToggle' }),
    bioCell,
  );
}

function getFontSize(bioCell) {
  const computedStyle = getComputedStyle(bioCell);
  return parseInt(computedStyle.getPropertyValue('font-size'), 10);
}

function compressBio() {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  const parent = bioCell.parentNode;
  const { style: { display } } = parent;
  parent.style.display = 'block';
  if (bioCell.clientHeight / getFontSize(bioCell) > 10) {
    doCompression(bioCell);
  }
  parent.style.display = display;
}

export default compressBio;
//# sourceMappingURL=compressBio-2ec7b7f2.js.map
