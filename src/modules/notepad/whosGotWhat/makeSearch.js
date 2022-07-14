import { searchDirective } from 'smart-table-core';
import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import createInput from '../../common/cElement/createInput';
import insertElement from '../../common/insertElement';
import onclick from '../../common/onclick';

const searchInput = () => createInput({
  dataset: {
    stSearch: 'name, rank_name',
    stSearchFlags: 'i',
  },
  placeholder: 'Enter search term',
  required: true,
  type: 'text',
});

export default function makeSearch(top, table) {
  const wrapper = createDiv({ className: 'fsh-search-wrapper' });
  const input = searchInput();
  const button = createButton({
    innerHTML: '&times;',
    type: 'button',
  });
  const directive = searchDirective({ table });
  onclick(button, () => {
    input.value = '';
    input.focus();
    directive.search('');
  });
  insertElement(wrapper, input);
  insertElement(wrapper, button);
  insertElement(top, wrapper);
}
