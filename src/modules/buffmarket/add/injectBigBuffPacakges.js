import createInput from '../../common/cElement/createInput';
import createDiv from '../../common/cElement/createDiv';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray.js';
import onclick from '../../common/onclick';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';

import { mount } from 'svelte';
import BigBuffPackages from './BigBuffPackages.svelte';

let app = 0;

function getBuffList() {
  const select = querySelectorArray('select[name=buff_type_0] option');
  const buffs = select.map((option) => {
    const matches = getText(option).match(/^(.+) \[Max (\d+)\]/);
    return {
      value: option.value,
      name: matches[1],
      max_level: matches[2],
    }
  });
  return buffs;
}

function injectBulkInput() {
  const packageAddInput = querySelector('#pCC form');
  const wrapperDiv = createDiv({
    className: 'fshCenter',
  })
  const bulkInput = createInput({
    value: 'Create Bulk Package',
    type: 'button',
    className: 'awesome large',
  });
  bulkInput.style.margin = '12px';
  onclick(bulkInput, openBulkPage);
  insertElement(wrapperDiv, bulkInput);
  packageAddInput.after(' ', wrapperDiv);
}

function openBulkPage() {
  if (!app) {
    app = mount(BigBuffPackages, {
      target: querySelector('body'),
      props: { buffList: getBuffList() },
    });
  }
  else {
    app.show();
  }
  return app;
}

export default function injectBigBuffPackages() {
  injectBulkInput();
}
