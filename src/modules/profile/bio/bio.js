import bioEvtHdl from './bioEvtHdl';
import {getElementById} from '../../common/getElement';
import getValue from '../../system/getValue';
import renderBio from './render';

function expandBio() {
  var bioExpander = getElementById('fshBioExpander');
  if (bioExpander.textContent === 'More ...') {
    bioExpander.textContent = 'Less ...';
  } else {
    bioExpander.textContent = 'More ...';
  }
  getElementById('fshBioHidden').classList.toggle('fshHide');
}

function foundMatchingTags(closeTagIndex, openTagIndex) {
  return closeTagIndex !== -1 &&
    (openTagIndex > closeTagIndex || openTagIndex === -1);
}

function doCompression(bioCell, bioContents, maxCharactersToShow) {
  // find the end of next HTML tag after the max characters to show.
  var breakPoint = bioContents.indexOf('<br>', maxCharactersToShow) + 4;
  var lineBreak = '';
  if (breakPoint === 3) {
    breakPoint = bioContents.indexOf(' ', maxCharactersToShow) + 1;
    if (breakPoint === 0) {return;}
    lineBreak = '<br>';
  }
  var bioStart = bioContents.substring(0, breakPoint);
  var bioEnd = bioContents.substring(breakPoint, bioContents.length);
  var extraOpenHTML = '';
  var extraCloseHTML = '';
  var tagList = ['b', 'i', 'u', 'span'];
  tagList.forEach(function(tag) {
    var closeTagIndex = bioEnd.indexOf('</' + tag + '>');
    var openTagIndex = bioEnd.indexOf('<' + tag + '>');
    if (foundMatchingTags(closeTagIndex, openTagIndex)) {
      extraOpenHTML += '<' + tag + '>';
      extraCloseHTML += '</' + tag + '>';
    }
  });
  bioCell.innerHTML = bioStart + extraCloseHTML + lineBreak +
    '<span id="fshBioExpander" class="sendLink">More ...</span><br>' +
    '<span class="fshHide" id="fshBioHidden">' + extraOpenHTML + bioEnd +
    '</span>';
  getElementById('fshBioExpander')
    .addEventListener('click', expandBio);
}

function findStartPosition(bioContents, _maxRowsToShow) {
  var maxRowsToShow = _maxRowsToShow;
  var startIndex = 0;
  while (maxRowsToShow > 0) {
    maxRowsToShow -= 1;
    startIndex = bioContents.indexOf('<br>\n', startIndex + 1);
  }
  return startIndex;
}

function bioIsTooSmall(bio, maxChar, lines, maxRows) {
  return bio.length <= maxChar && lines < maxRows;
}

function compressBio(bioCell) {
  var bioContents = bioCell.innerHTML;
  var maxCharactersToShow = getValue('maxCompressedCharacters');
  var maxRowsToShow = getValue('maxCompressedLines');
  var numberOfLines = bioContents.substr(0, maxCharactersToShow)
    .split(/<br>\n/).length - 1;
  if (bioIsTooSmall(bioContents, maxCharactersToShow, numberOfLines,
    maxRowsToShow)) {return;}
  if (numberOfLines >= maxRowsToShow) {
    maxCharactersToShow = findStartPosition(bioContents, maxRowsToShow);
  }
  doCompression(bioCell, bioContents, maxCharactersToShow);
}

function doRender(bioCell) {
  var bioContents = bioCell.innerHTML;
  bioContents = renderBio(bioContents);
  if (bioContents) {
    bioCell.innerHTML = bioContents;
  }
}

function selfRender(self) {
  return self && getValue('renderSelfBio');
}

function otherRender(self) {
  return !self && getValue('renderOtherBios');
}

function shouldRender(self) {
  return selfRender(self) || otherRender(self);
}

function testForRender(self, bioCell) {
  if (shouldRender(self)) {
    doRender(bioCell);
  }
}

export default function profileRenderBio(self) {
  var bioCell = getElementById('profile-bio');
  if (!bioCell) {return;}
  testForRender(self, bioCell);
  if (getValue('enableBioCompressor')) {compressBio(bioCell);}
  bioCell.addEventListener('click', bioEvtHdl);
}
