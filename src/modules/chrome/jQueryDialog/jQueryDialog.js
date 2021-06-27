import './jQueryDialog.css';
import createDiv from '../../common/cElement/createDiv';
import getElementById from '../../common/getElement';
import insertElement from '../../common/insertElement';
import setInnerHtml from '../../dom/setInnerHtml';

export default function jQueryDialog(fn) { // jQuery
  let content = getElementById('content');
  if (content) {
    setInnerHtml('', content);
  } else {
    content = createDiv({
      id: 'content',
      style: { display: 'none' },
    });
    insertElement(document.body, content);
  }
  $(content).dialog({
    width: 640,
    modal: true,
    position: {
      my: 'top', at: 'top', offset: '0 60', collision: 'none',
    },
    resizable: false,
  });
  fn(content);
}
