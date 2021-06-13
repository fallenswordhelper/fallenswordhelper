import { r as renderBio, b as bioEvtHdl } from './render-e579a9f1.js';
import { I as getValue, z as getElementById, k as on, c as calf, b as createDiv, i as insertElement, f as insertHtmlBeforeEnd, p as pCC, X as setValue, o as onclick, B as setInnerHtml } from './calfSystem-86663d02.js';
import { c as createInput } from './createInput-dfd633b7.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-f79bfe63.js';
import { t as testQuant } from './testQuant-95fb5e76.js';
import './roundToString-34b7c935.js';
import './numberIsNaN-c0e87dea.js';
import './playerName-774091a1.js';
import './testRange-e7fa6436.js';

var css = ".fshBioContainer {\n  border: 1px solid;\n  border-color: grey black black grey;\n  margin: 1em auto 0;\n  overflow-wrap: break-word;\n}\n.fshBioProfile {\n  width: 327px;\n}\n.fshBioGuild {\n  width: 334px;\n}\n.fshBioHall {\n  max-width: 609px;\n}\n.fshBioHeader {\n  background-color: #CD9E4B;\n  color: #7D2252;\n}\n.fshBioPreview {\n  padding: 2px;\n  text-align: left;\n}\n.fshBioInner {\n  border: 1px solid;\n  border-color: black grey grey black;\n  margin: 1.5px;\n}\n";
var modules_2840467c = {};

let bioEditLines;
let textArea;
let previewArea;
let theBox;

const basicTagReplacements = [
  [/</g, '&lt'],
  [/>/g, '&gt'],
  [/\n/g, '<br>'],
  [/\[(\/?[biu])\]/g, '<$1>'],
  [/\\\\/g, '&#92'],
  [/\\/g, ''],
];

const guildTagReplacements = [
  [/\[(\/?block)\]/g, '<$1quote>'],
  [/\[list\]/g, '<ul class="list">'],
  [/\[\/list\]/g, '</ul>'],
  [/\[\*\](.*?)<br>/g, '<li>$1</li>'],
];

function replaceTag(acc, re) { return acc.replace(re[0], re[1]); }

function replaceTags(inputText, ary) { return ary.reduce(replaceTag, inputText); }

function convertTextToHtml(inputText) {
  let ret = replaceTags(inputText, basicTagReplacements);
  if (calf.cmd === 'guild') {
    ret = replaceTags(ret, guildTagReplacements);
  }
  return ret;
}

function bioPreview() {
  let widthClass = 'fshBioProfile';
  if (calf.cmd === 'guild') {
    if (calf.subcmd === 'hall') { widthClass = 'fshBioHall'; } else {
      widthClass = 'fshBioGuild';
    }
  }
  const previewContainer = createDiv({
    className:
      `fshBioContainer ${widthClass}`,
  });
  const previewHeader = createDiv({
    className: 'fshBioHeader fshBioInner',
    innerHTML: 'Preview',
  });
  insertElement(previewContainer, previewHeader);
  previewArea = createDiv({ className: 'fshBioPreview fshBioInner' });
  insertElement(previewContainer, previewArea);
  insertElement(textArea.parentNode, previewContainer);
}

function bioWords() {
  if (calf.cmd === 'profile') {
    // Add description text for the new tags
    insertHtmlBeforeEnd(pCC, '<div>'
      + '`~This will allow FSH Script users to select buffs from your bio~`<br>'
      + 'You can use the [cmd] tag as well to determine where to put the "Ask '
      + 'For Buffs" button<br><br><blockquote><ul class="list">'
      + '<li>Note 1: The ` and ~ characters are on the same key on US QWERTY '
      + 'keyboards. ` is <b>NOT</b> an apostrophe.</li>'
      + '<li>Note 2: Inner text will not contain special characters '
      + '(non-alphanumeric).</li>'
      + '<li>P.S. Be creative with these! Wrap your buff pack names in '
      + 'them to make buffing even easier!</li>'
      + '</ul></blockquote></div>');
  }
}

function changeHeight() {
  const boxVal = testQuant(theBox.value);
  if (boxVal) {
    bioEditLines = boxVal;
    setValue('bioEditLines', boxVal);
    textArea.rows = bioEditLines;
  }
}

function bioHeight() {
  const bioEditLinesDiv = createDiv({ innerHTML: '<br>Display ' });
  theBox = createInput({
    min: 1, max: 99, type: 'number', value: bioEditLines,
  });
  insertElement(bioEditLinesDiv, theBox);
  insertTextBeforeEnd(bioEditLinesDiv, ' Lines ');
  const saveLines = createInput({
    className: 'custombutton',
    value: 'Update Rows To Show',
    type: 'button',
  });
  onclick(saveLines, changeHeight);
  insertElement(bioEditLinesDiv, saveLines);
  insertElement(pCC, bioEditLinesDiv);
}

function updateBioCharacters() {
  const bioContents = convertTextToHtml(textArea.value);
  const rendered = renderBio(bioContents);
  setInnerHtml(rendered || bioContents, previewArea);
}

function injectBioWidgets() {
  bioEditLines = getValue('bioEditLines');
  textArea = getElementById('textInputBox');
  if (!textArea) { return; }
  bioPreview();
  bioWords();
  bioHeight();
  textArea.rows = bioEditLines;
  if (calf.cmd === 'profile') {
    onclick(textArea.parentNode, bioEvtHdl);
  }
  on(textArea, 'keyup', updateBioCharacters);
  // Force the preview area to render
  updateBioCharacters();
}

export default injectBioWidgets;
//# sourceMappingURL=bioWidgets-8eee5a6f.js.map
