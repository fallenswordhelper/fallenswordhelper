import retryAjax from '../../ajax/retryAjax';
import sendEvent from '../../analytics/sendEvent';
import getElementById from '../../common/getElementById';
import hideElement from '../../common/hideElement';
import onclick from '../../common/onclick';
import { pcc } from '../../support/layout';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';

let bpc = 0;

function bp() {
  if (!bpc) {
    bpc = getElementById('backpackContainer');
  }
  return bpc;
}

function oldStyleDiv(target) {
  if (target.style.display === 'block') {
    hideElement(target);
  }
  target.removeAttribute('style');
}

function toggleTarget(target) {
  if (target.hasAttribute('style')) {
    oldStyleDiv(target);
  } else {
    target.classList.toggle('fshHide');
  }
}

function toggleSection(target) {
  sendEvent('ajaxifyProfileSections', 'toggleSection');
  const sectionId = Number(getCustomUrlParameter(target.search, 'section_id'));
  if (sectionId === 5) {
    toggleTarget(bp());
  } else {
    toggleTarget(target.parentNode.parentNode.nextElementSibling);
  }
}

function testForSection(evt) {
  const { target } = evt;
  if (target.href?.includes('togglesection')) {
    toggleSection(target);
    retryAjax(target.href);
    evt.preventDefault();
  }
}

export default function ajaxifyProfileSections() {
  onclick(pcc(), testForSection);
}
