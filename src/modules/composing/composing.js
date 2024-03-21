import './composing.css';
import getElementById from '../common/getElementById';
import getElementsByClassName from '../common/getElementsByClassName';
import insertElementBefore from '../common/insertElementBefore';
import jQueryPresent from '../common/jQueryPresent';
import { pcc } from '../support/layout';
import getValue from '../system/getValue';
import costing from './costing';
import fastCompose from './fastCompose/fastCompose';
import parseComposing from './parseComposing';
import quickCollect from './quickCollect/quickCollect';
import quickCreate from './quickCreate';

function moveButtons() {
  if (!getValue('moveComposingButtons')) return;
  const buttonDiv = getElementById('composing-error-dialog')?.previousElementSibling;
  if (!buttonDiv) return;
  buttonDiv.setAttribute('style', 'text-align: right; padding: 0 38px 0 0');
  const top = getElementsByClassName('composing-level', pcc())[0].parentNode;
  insertElementBefore(buttonDiv, top);
}

function hasJQuery() {
  parseComposing();
  quickCreate();
  moveButtons();
  fastCompose();
  quickCollect();
  costing();
}

export default function composing() {
  if (jQueryPresent() && pcc()) hasJQuery();
}
