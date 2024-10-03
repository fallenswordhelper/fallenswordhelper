import './jQueryDialog.css';
import createDiv from '../../common/cElement/createDiv';
import getArrayByClassName from '../../common/getArrayByClassName';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import setInnerHtml from '../../dom/setInnerHtml';

const divProps = {
  id: 'content',
  style: { display: 'none' },
};
const dialogProps = {
  width: 640,
  modal: true,
  position: {
    my: 'top',
    at: 'top',
    offset: '0 60',
    collision: 'none',
  },
  resizable: false,
};

// jQuery
export default function jQueryDialog(fn) {
  let content = getElementById('content');
  if (content) {
    setInnerHtml('', content);
  } else {
    content = createDiv(divProps);
    insertElement(document.body, content);
  }
  $(content).dialog(dialogProps);
  getArrayByClassName('ui-dialog-titlebar-close').forEach((e) => e.blur());
  fn(content);
}
